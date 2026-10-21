import { createHash } from "node:crypto";
import { NextResponse } from "next/server";
import { authConfigured, consumeLoginAttempt, createSession, requestOrigin, safeDestination, SESSION_COOKIE, SESSION_SECONDS, verifyPassword } from "@/lib/quote/internal-auth";

export const runtime = "nodejs";
const headers = { "cache-control": "no-store", "x-robots-tag": "noindex, nofollow" };

async function allowAttempt(request: Request) {
  const key = createHash("sha256").update(request.headers.get("x-real-ip") || request.headers.get("x-forwarded-for")?.split(",")[0] || "unknown").digest("hex");
  if (!consumeLoginAttempt(key)) return false;
  const url = process.env.QUOTE_REDIS_REST_URL;
  const token = process.env.QUOTE_REDIS_REST_TOKEN;
  if (!url || !token) return true;
  try {
    const response = await fetch(url, { method: "POST", headers: { authorization: `Bearer ${token}`, "content-type": "application/json" }, body: JSON.stringify(["EVAL", "local n=redis.call('INCR',KEYS[1]); if n==1 then redis.call('EXPIRE',KEYS[1],900) end; return n", 1, `internal-auth:attempts:${key}`]), signal: AbortSignal.timeout(4000), cache: "no-store" });
    if (!response.ok) return false;
    const data = await response.json() as { result?: unknown };
    return typeof data.result === "number" && data.result <= 5;
  } catch { return false; }
}

export async function POST(request: Request) {
  const origin = requestOrigin(request);
  if (request.headers.get("origin") !== origin) return new Response("Please log in from this website.", { status: 403, headers });
  if (!authConfigured()) return NextResponse.redirect(new URL("/internal-login?error=setup", origin), { status: 303, headers });
  let body = "";
  try {
    const reader = request.body?.getReader(); if (!reader) throw new Error();
    let size = 0; const decoder = new TextDecoder();
    while (true) { const { done, value } = await reader.read(); if (done) break; size += value.byteLength; if (size > 4096) { await reader.cancel(); return new Response("Request too large.", { status: 413, headers }); } body += decoder.decode(value, { stream: true }); }
    body += decoder.decode();
  } catch { return new Response("Invalid request.", { status: 400, headers }); }
  const form = new URLSearchParams(body);
  const destination = safeDestination(form.get("next"));
  const failure = (error: string) => NextResponse.redirect(new URL(`/internal-login?error=${error}&next=${encodeURIComponent(destination)}`, origin), { status: 303, headers });
  if (!await allowAttempt(request)) return failure("limited");
  if (!await verifyPassword(form.get("password") || "")) return failure("invalid");
  const response = NextResponse.redirect(new URL(destination, origin), { status: 303, headers });
  response.cookies.set(SESSION_COOKIE, createSession(), { httpOnly: true, secure: origin.startsWith("https:"), sameSite: "strict", path: "/", maxAge: SESSION_SECONDS });
  return response;
}
