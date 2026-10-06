import test from "node:test";
import assert from "node:assert/strict";
import { captureLead, deliverLead, type LeadRecord } from "./delivery";
import { initialInput, type Submission } from "./schema";

test("lead saved before calculation, Sheets outage retained, successful retry acknowledged", async () => {
  const originalFetch = globalThis.fetch;
  const savedEnv = { ...process.env };
  const writes: string[] = [];
  let sheetsAvailable = false;
  let sequence = 0;
  let sheetsWrites = 0;
  const rows = new Set<string>();
  const records = new Map<string, string>();
  process.env.QUOTE_REDIS_REST_URL = "https://test-redis.invalid";
  process.env.QUOTE_REDIS_REST_TOKEN = "fixture";
  process.env.QUOTE_SHEETS_URL = "https://script.google.com/macros/s/test/exec";
  process.env.QUOTE_SHEETS_SECRET = "fixture";
  globalThis.fetch = async (url, options) => {
    if (String(url).includes("test-redis.invalid")) {
      const cmd = JSON.parse(String(options!.body));
      if (cmd[0] === "EVAL") {
        const key = cmd[3];
        if (!records.has(key)) { const payload = JSON.parse(cmd[6]); records.set(key, JSON.stringify({ ...payload, quoteNumber: `EB-2026-${++sequence}` })); writes.push("capture"); }
        return Response.json({ result: records.get(key) });
      }
      if (cmd[0] === "SET") { records.set(cmd[1], cmd[2]); writes.push("persist"); }
      if (cmd[0] === "SREM") writes.push("remove-pending");
      return Response.json({ result: "OK" });
    }
    writes.push("sheets");
    if (!sheetsAvailable) return Response.json({ ok: false }, { status: 503 });
    const payload = JSON.parse(String(options!.body));
    if (!rows.has(payload.lead.quoteNumber)) { rows.add(payload.lead.quoteNumber); sheetsWrites++; }
    return Response.json({ ok: true, quoteNumber: payload.lead.quoteNumber });
  };
  try {
    const submission: Submission = { requestId: "36b85011-40cd-4d65-8d17-dd585c201001", input: { ...initialInput, locality: "Rajajinagar" }, customer: { name: "Test Customer", mobile: "+919844775905", email: "", consent: true } };
    const lead = await captureLead(submission);
    assert.equal(writes[0], "capture"); assert.equal(lead.quote, undefined); assert.ok(lead.capturedAt);
    assert.equal(await deliverLead(lead), false); assert.equal(writes.includes("remove-pending"), false);
    const retry = await captureLead(submission); assert.equal(retry.quoteNumber, lead.quoteNumber);
    sheetsAvailable = true;
    assert.equal(await deliverLead(retry), true); assert.equal(sheetsWrites, 1);
    assert.equal(await deliverLead(lead), true); assert.equal(sheetsWrites, 1);
    const second = await captureLead({ ...submission, requestId: "36b85011-40cd-4d65-8d17-dd585c201002" });
    assert.notEqual(second.quoteNumber, lead.quoteNumber);
    await deliverLead(second); assert.equal(sheetsWrites, 2);
    const stored = JSON.parse(records.get(`quote:lead:${submission.requestId}`)!) as LeadRecord;
    assert.equal(stored.state, "delivered");
  } finally { globalThis.fetch = originalFetch; process.env = savedEnv; }
});
