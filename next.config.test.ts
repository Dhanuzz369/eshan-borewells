import assert from "node:assert/strict";
import test from "node:test";
import nextConfig from "./next.config";

test("sets only non-breaking baseline response security headers", async () => {
  const rules = await nextConfig.headers?.();
  const headers = rules?.find((rule) => rule.source === "/:path*")?.headers ?? [];
  const values = new Map(headers.map(({ key, value }) => [key.toLowerCase(), value]));

  assert.equal(values.get("x-content-type-options"), "nosniff");
  assert.equal(values.get("x-frame-options"), "SAMEORIGIN");
  assert.equal(values.get("referrer-policy"), "strict-origin-when-cross-origin");
  assert.equal(values.has("content-security-policy"), false);
});
