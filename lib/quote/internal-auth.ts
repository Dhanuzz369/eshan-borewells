// Server-side authentication primitives. Never import this module into client components.
import { createHash, createHmac, randomBytes, scrypt, timingSafeEqual } from "node:crypto";

export const SESSION_COOKIE = "eshan_internal_session";
export const SESSION_SECONDS = 8 * 60 * 60;
// Salted scrypt verifier for the owner's supplied password; no plaintext credential is stored.
export const OWNER_PASSWORD_HASH = "dbb7c82e49b8c7da95cfc5bc5728d84d:c8599f969a51f3f54096e423241b223e92647052001a9566ea0d58006a3c747be39f86becb7778f89164425cf50c360a6709b3615c44378fac543bf6977b7ff6";
export function passwordHash() { return process.env.INTERNAL_TOOLS_PASSWORD_HASH || OWNER_PASSWORD_HASH; }
export function sessionSecret() { return process.env.INTERNAL_TOOLS_SESSION_SECRET || ""; }
export function authConfigured() { return Buffer.byteLength(sessionSecret()) >= 32; }
export function safeDestination(value: unknown) { return value === "/estimate-quote-generator" ? value : "/get-quote"; }
// Next's internal request URL can differ from the browser-facing host behind a proxy.
// The Origin must still exactly match the request Host; HTTPS forwarding is upgrade-only.
export function requestOrigin(request: Request) {
  const url = new URL(request.url);
  const protocol = url.protocol === "https:" || request.headers.get("x-forwarded-proto") === "https" ? "https:" : "http:";
  return new URL(`${protocol}//${request.headers.get("host") || url.host}`).origin;
}
const fingerprint = (hash: string) => createHash("sha256").update(hash).digest("hex");

export async function verifyPassword(password: string, hash = passwordHash()) {
  if (typeof password !== "string" || password.length > 256) return false;
  const [salt, expected] = hash.split(":");
  if (!salt || !/^[a-f0-9]{128}$/.test(expected || "")) return false;
  const derived = await new Promise<Buffer>((resolve, reject) => scrypt(password, salt, 64, { N: 32768, maxmem: 67108864 }, (error, key) => error ? reject(error) : resolve(key)));
  return timingSafeEqual(derived, Buffer.from(expected, "hex"));
}

export function createSession(secret = sessionSecret(), hash = passwordHash(), now = Math.floor(Date.now() / 1000)) {
  if (Buffer.byteLength(secret) < 32) throw new Error("Internal session secret is not configured.");
  const body = Buffer.from(JSON.stringify({ v: 1, iat: now, exp: now + SESSION_SECONDS, credential: fingerprint(hash), nonce: randomBytes(16).toString("hex") })).toString("base64url");
  return `${body}.${createHmac("sha256", secret).update(body).digest("base64url")}`;
}
export function verifySession(token: string | undefined, secret = sessionSecret(), hash = passwordHash(), now = Math.floor(Date.now() / 1000)) {
  if (!token || token.length > 2048 || Buffer.byteLength(secret) < 32) return false;
  try {
    const parts = token.split(".");
    if (parts.length !== 2) return false;
    const expected = createHmac("sha256", secret).update(parts[0]).digest("base64url");
    if (parts[1].length !== expected.length || !timingSafeEqual(Buffer.from(expected), Buffer.from(parts[1]))) return false;
    const data = JSON.parse(Buffer.from(parts[0], "base64url").toString("utf8"));
    return data.v === 1 && data.credential === fingerprint(hash) && Number.isInteger(data.iat) && Number.isInteger(data.exp) && data.iat <= now && data.exp > now && data.exp - data.iat === SESSION_SECONDS;
  } catch { return false; }
}

const attempts = new Map<string, { count: number; reset: number }>();
export function consumeLoginAttempt(key: string, now = Date.now()) {
  for (const [client, value] of attempts) if (value.reset <= now) attempts.delete(client);
  if (!attempts.has(key) && attempts.size >= 10000) return false;
  const entry = attempts.get(key) || { count: 0, reset: now + 15 * 60 * 1000 };
  entry.count++; attempts.set(key, entry);
  return entry.count <= 5;
}
