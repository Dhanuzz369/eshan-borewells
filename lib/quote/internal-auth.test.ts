import test from "node:test";
import assert from "node:assert/strict";
import { scryptSync } from "node:crypto";
import { verifyPassword, createSession, verifySession, safeDestination, consumeLoginAttempt } from "./internal-auth";

const secret = "test-only-signing-secret-with-at-least-32-bytes";
const hash = `test-salt:${scryptSync("test-only-password", "test-salt", 64, { N: 32768, maxmem: 67108864 }).toString("hex")}`;
test("password verification accepts only the matching password and rejects malformed hashes", async () => {
  assert.equal(await verifyPassword("test-only-password", hash), true);
  assert.equal(await verifyPassword("incorrect", hash), false);
  assert.equal(await verifyPassword("test-only-password", "malformed"), false);
});
test("sessions expire and cannot be forged or reused after credential/key changes", () => {
  const now = 1700000000;
  const token = createSession(secret, hash, now);
  assert.equal(verifySession(token, secret, hash, now), true);
  assert.equal(verifySession(token, secret, hash, now + 8 * 60 * 60), false);
  assert.equal(verifySession(token + "x", secret, hash, now), false);
  assert.equal(verifySession(token, secret + "changed", hash, now), false);
  assert.equal(verifySession(token, secret, hash + "changed", now), false);
  assert.equal(verifySession(token, "", hash, now), false);
  assert.throws(() => createSession("", hash, now));
});
test("post-login destinations are restricted to the two internal tools", () => {
  assert.equal(safeDestination("/estimate-quote-generator"), "/estimate-quote-generator");
  for (const value of ["//evil.example", "https://evil.example", "/", "/api/quotes", "/get-quote?next=evil"]) assert.equal(safeDestination(value), "/get-quote");
});
test("failed login attempts are limited per client and recover after the window", () => {
  for (let i = 0; i < 5; i++) assert.equal(consumeLoginAttempt("test-client", 1000), true);
  assert.equal(consumeLoginAttempt("test-client", 1000), false);
  assert.equal(consumeLoginAttempt("another-client", 1000), true);
  assert.equal(consumeLoginAttempt("test-client", 1000 + 15 * 60 * 1000), true);
});
