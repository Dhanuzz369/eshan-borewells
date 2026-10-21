import test from "node:test";
import assert from "node:assert/strict";
import { scryptSync } from "node:crypto";
import { POST as login } from "../../app/api/internal-auth/login/route";
import { POST as logout } from "../../app/api/internal-auth/logout/route";
import { SESSION_COOKIE, verifySession } from "./internal-auth";

const origin = "https://www.eshanborewells.com";
const secret = "test-only-session-signing-secret-with-32-bytes";
const hash = `test-route-salt:${scryptSync("test-route-password", "test-route-salt", 64, { N: 32768, maxmem: 67108864 }).toString("hex")}`;
function request(password: string, client = "route-test", next = "/estimate-quote-generator") { return new Request(`${origin}/api/internal-auth/login`, { method: "POST", headers: { origin, "content-type": "application/x-www-form-urlencoded", "x-real-ip": client }, body: new URLSearchParams({ password, next }) }); }

test("login issues a secure HttpOnly cookie only for valid credentials; logout clears it", async () => {
  const previous = { ...process.env };
  try {
    process.env.INTERNAL_TOOLS_SESSION_SECRET = secret; process.env.INTERNAL_TOOLS_PASSWORD_HASH = hash;
    delete process.env.QUOTE_REDIS_REST_URL; delete process.env.QUOTE_REDIS_REST_TOKEN;
    const wrong = await login(request("incorrect"));
    assert.match(wrong.headers.get("location")!, /error=invalid/); assert.equal(wrong.headers.get("set-cookie"), null);
    const success = await login(request("test-route-password"));
    assert.equal(success.status, 303); assert.equal(success.headers.get("location"), `${origin}/estimate-quote-generator`);
    const cookie = success.headers.get("set-cookie")!;
    for (const flag of ["HttpOnly", "Secure", "SameSite=strict", "Max-Age=28800"]) assert.ok(cookie.includes(flag), flag);
    assert.equal(verifySession(decodeURIComponent(cookie.split(";")[0].slice(SESSION_COOKIE.length + 1)), secret, hash), true);
    assert.equal(success.headers.get("cache-control"), "no-store");
    const proxied = await login(new Request("http://internal-server:3000/api/internal-auth/login", { method: "POST", headers: { host: "www.eshanborewells.com", "x-forwarded-proto": "https", origin, "content-type": "application/x-www-form-urlencoded", "x-real-ip": "proxy-route-test" }, body: new URLSearchParams({ password: "test-route-password", next: "/get-quote" }) }));
    assert.equal(proxied.status, 303); assert.equal(proxied.headers.get("location"), `${origin}/get-quote`);
    assert.ok(proxied.headers.get("set-cookie")?.includes("Secure"));
    const cleared = await logout(new Request(`${origin}/api/internal-auth/logout`, { method: "POST", headers: { origin } }));
    assert.match(cleared.headers.get("set-cookie")!, /Max-Age=0/);
    const crossOrigin = await login(new Request(`${origin}/api/internal-auth/login`, { method: "POST", headers: { origin: "https://unrelated.example" }, body: "password=ignored" }));
    assert.equal(crossOrigin.status, 403);
    const oversized = await login(new Request(`${origin}/api/internal-auth/login`, { method: "POST", headers: { origin }, body: "x".repeat(4097) }));
    assert.equal(oversized.status, 413);
    delete process.env.INTERNAL_TOOLS_SESSION_SECRET;
    const unconfigured = await login(request("test-route-password"));
    assert.match(unconfigured.headers.get("location")!, /error=setup/); assert.equal(unconfigured.headers.get("set-cookie"), null);
  } finally { process.env = previous; }
});
