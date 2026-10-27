import assert from "node:assert/strict";
import test from "node:test";
import nextConfig from "./next.config";

test("sets only non-breaking baseline response security headers", async () => {
  const rules = await nextConfig.headers?.();
  const headers = rules?.find((rule) => rule.source === "/:path*" && !rule.has)?.headers ?? [];
  const values = new Map(headers.map(({ key, value }) => [key.toLowerCase(), value]));

  assert.equal(values.get("x-content-type-options"), "nosniff");
  assert.equal(values.get("x-frame-options"), "SAMEORIGIN");
  assert.equal(values.get("referrer-policy"), "strict-origin-when-cross-origin");
  assert.match(values.get("permissions-policy") ?? "", /camera=\(\)/);
  assert.equal(values.has("content-security-policy"), false);
});

test("keeps vercel.app deployment hosts out of search", async () => {
  const rules = await nextConfig.headers?.();
  const rule = rules?.find((candidate) => candidate.has?.some((condition) => condition.type === "host"));

  assert.ok(rule, "expected a host-scoped header rule");
  assert.match("eshan-borewells.vercel.app", new RegExp(`^${rule.has![0].value}$`.replace("?<host>", "")));
  assert.doesNotMatch("www.eshanborewells.com", new RegExp(`^${rule.has![0].value}$`.replace("?<host>", "")));
  assert.deepEqual(rule.headers, [{ key: "X-Robots-Tag", value: "noindex" }]);
});

test("redirects /contact to the homepage contact section", async () => {
  const redirects = await nextConfig.redirects?.();

  assert.deepEqual(redirects?.find((redirect) => redirect.source === "/contact"), { source: "/contact", destination: "/#contact", permanent: true });
});

test("compiles production builds without the persistent Turbopack cache", () => {
  assert.equal(nextConfig.experimental?.turbopackFileSystemCacheForBuild, false);
});
