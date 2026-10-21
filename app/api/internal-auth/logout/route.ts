import { NextResponse } from "next/server";
import { requestOrigin, SESSION_COOKIE } from "@/lib/quote/internal-auth";

export const runtime = "nodejs";
export async function POST(request: Request) {
  const origin = requestOrigin(request);
  if (request.headers.get("origin") !== origin) return new Response("Invalid origin.", { status: 403 });
  const response = NextResponse.redirect(new URL("/internal-login", origin), { status: 303, headers: { "cache-control": "no-store" } });
  response.cookies.set(SESSION_COOKIE, "", { httpOnly: true, secure: origin.startsWith("https:"), sameSite: "strict", path: "/", maxAge: 0 });
  return response;
}
