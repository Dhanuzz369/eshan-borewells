import test from "node:test";
import assert from "node:assert/strict";
import { POST } from "../../app/api/quotes/route";
import { GET } from "../../app/api/quotes/retry/route";
import { initialInput } from "./schema";

const payload = { requestId: "36b85011-40cd-4d65-8d17-dd585c201001", input: { ...initialInput, locality: "Rajajinagar", access: "open", machine: "Sensor Rig", depth: 850 }, customer: { name: "Test Customer", mobile: "9844775905", email: "", consent: true } };
const request = (data: unknown, origin = "https://www.eshanborewells.com") => new Request("https://www.eshanborewells.com/api/quotes", { method: "POST", headers: { origin, "content-type": "application/json" }, body: JSON.stringify(data) });
test("quote submission sends the approved Apps Script lead fields without changing the calculation", async () => {
  const saved = process.env.QUOTE_REDIS_REST_URL;
  const originalFetch = globalThis.fetch;
  delete process.env.QUOTE_REDIS_REST_URL;
  try {
    globalThis.fetch = async (url, options) => {
      assert.match(String(url), /^https:\/\/script\.google\.com\//);
      assert.deepEqual(JSON.parse(String(options?.body)), { name: "Test Customer", mobile: "+919844775905", location: "Rajajinagar, Bengaluru", machineType: "Sensor Rig", estimatedDepth: "850 ft", quote: "₹1,30,250" });
      return Response.json({ ok: true });
    };
    const response = await POST(request(payload));
    const data = await response.json() as { delivery: string; quoteNumber: string; quote: { breakdown: { key: string; min: number }[] } };
    assert.equal(response.status, 200); assert.equal(data.delivery, "delivered"); assert.match(data.quoteNumber, /^EB-DRAFT-/);
    assert.equal(data.quote.breakdown.find((x) => x.key === "drilling")!.min, 124250);
    assert.equal(response.headers.get("cache-control"), "no-store");
  } finally { globalThis.fetch = originalFetch; if (saved) process.env.QUOTE_REDIS_REST_URL = saved; }
});
test("reject invalid mobile, no consent, overlong body, foreign origin and unauthenticated retries", async () => {
  assert.equal((await POST(request({ ...payload, customer: { ...payload.customer, mobile: "123" } }))).status, 400);
  assert.equal((await POST(request({ ...payload, customer: { ...payload.customer, consent: false } }))).status, 400);
  assert.equal((await POST(request({ padding: "a".repeat(20000) }))).status, 413);
  assert.equal((await POST(request(payload, "https://unrelated.invalid"))).status, 403);
  assert.equal((await GET(new Request("https://www.eshanborewells.com/api/quotes/retry"))).status, 401);
});
