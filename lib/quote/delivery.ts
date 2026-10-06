import { randomUUID, createHash } from "node:crypto";
import type { Submission } from "./schema";
import { calculateQuote, formatRange, quotePrice, type Quote } from "./calculate";
import { serviceOptions } from "./config";

export type LeadRecord = Submission & { quoteNumber: string; capturedAt: string; quote?: Quote; state: "pending" | "delivered"; deliveredAt?: string };
export const storageConfigured = () => Boolean(process.env.QUOTE_REDIS_REST_URL && process.env.QUOTE_REDIS_REST_TOKEN);
export const sheetsConfigured = () => Boolean(process.env.QUOTE_SHEETS_URL && process.env.QUOTE_SHEETS_SECRET);
export async function redis(command: (string | number)[]): Promise<unknown> {
  const url = process.env.QUOTE_REDIS_REST_URL;
  if (!url || !url.startsWith("https://") || !process.env.QUOTE_REDIS_REST_TOKEN) throw new Error("Storage unavailable");
  const response = await fetch(url, { method: "POST", headers: { authorization: `Bearer ${process.env.QUOTE_REDIS_REST_TOKEN}`, "content-type": "application/json" }, body: JSON.stringify(command), cache: "no-store", signal: AbortSignal.timeout(5000) });
  if (!response.ok) throw new Error("Storage request failed");
  const data = await response.json() as { error?: string; result?: unknown };
  if (data.error) throw new Error("Storage command failed");
  return data.result;
}
// Capture is atomic and happens BEFORE calculation or Sheets delivery. Identical
// network retries reuse the record; each new enquiry has a new requestId and row.
const captureScript = `
local previous = redis.call('GET', KEYS[1])
if previous then return previous end
local lead = cjson.decode(ARGV[1])
local sequence = redis.call('INCR', KEYS[2])
lead.quoteNumber = ARGV[2] .. string.format('%06d', sequence)
local record = cjson.encode(lead)
redis.call('SET', KEYS[1], record, 'EX', 7776000)
redis.call('SADD', KEYS[3], KEYS[1])
return record
`;
export async function captureLead(submission: Submission): Promise<LeadRecord> {
  const capturedAt = new Date().toISOString();
  const year = new Intl.DateTimeFormat("en", { timeZone: "Asia/Kolkata", year: "numeric" }).format(new Date(capturedAt));
  const record = await redis(["EVAL", captureScript, 3, `quote:lead:${submission.requestId}`, `quote:sequence:${year}`, "quote:pending", JSON.stringify({ ...submission, website: undefined, capturedAt, state: "pending" }), `EB-${year}-`]);
  const lead = JSON.parse(String(record)) as LeadRecord;
  const incoming = JSON.stringify([submission.customer, submission.input]);
  const original = JSON.stringify([lead.customer, lead.input]);
  // A retry may not overwrite the customer or project of an existing request.
  if (incoming !== original && createHash("sha256").update(stable(submission)).digest("hex") !== createHash("sha256").update(stable(lead)).digest("hex")) throw new Error("Request conflict");
  return lead;
}
function stable(value: Submission) {
  function sort(data: unknown): unknown {
    if (Array.isArray(data)) return data.map(sort);
    if (data && typeof data === "object") return Object.fromEntries(Object.entries(data).sort(([a], [b]) => a.localeCompare(b)).map(([k, v]) => [k, sort(v)]));
    return data;
  }
  return JSON.stringify(sort({ customer: value.customer, input: value.input }));
}
export async function allowSubmission(ip: string): Promise<boolean> {
  const hash = createHash("sha256").update(ip).digest("hex").slice(0, 24);
  const count = await redis(["EVAL", "local n=redis.call('INCR',KEYS[1]); if n==1 then redis.call('EXPIRE',KEYS[1],600) end; return n", 1, `quote:rate:${hash}`]);
  return Number(count) <= 15;
}
export async function deliverLead(lead: LeadRecord): Promise<boolean> {
  if (lead.state === "delivered") return true;
  if (!sheetsConfigured()) return false;
  const key = `quote:lead:${lead.requestId}`;
  let quote = lead.quote;
  try { quote ??= calculateQuote(lead.input); } catch { /* Preserve the captured lead even if calculation fails. */ }
  const record = { ...lead, quote };
  // Save the calculated estimate to durable storage before sending it downstream.
  await redis(["SET", key, JSON.stringify(record), "KEEPTTL"]);
  const url = new URL(process.env.QUOTE_SHEETS_URL!);
  if (url.protocol !== "https:" || url.hostname !== "script.google.com" || !url.pathname.endsWith("/exec")) return false;
  try {
    const displayedPrice = quote ? quotePrice(quote) : null;
    const response = await fetch(url, { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ secret: process.env.QUOTE_SHEETS_SECRET, lead: record, serviceLabel: serviceOptions.find((s) => s.value === lead.input.service)!.label, estimatedQuote: displayedPrice ? formatRange(displayedPrice.min, displayedPrice.max) : "Assessment required" }), redirect: "follow", cache: "no-store", signal: AbortSignal.timeout(8000) });
    const data = await response.json() as { ok?: boolean; quoteNumber?: string };
    if (!response.ok || data.ok !== true || data.quoteNumber !== lead.quoteNumber) throw new Error("Delivery not acknowledged");
    await redis(["SET", key, JSON.stringify({ ...record, state: "delivered", deliveredAt: new Date().toISOString() }), "KEEPTTL"]);
    await redis(["SREM", "quote:pending", key]);
    return true;
  } catch {
    // Log only the reference; never names, mobile numbers, secrets or payloads.
    console.warn("Quote delivery pending", { quoteNumber: lead.quoteNumber });
    return false;
  }
}
export function draftNumber() { return `EB-DRAFT-${randomUUID()}`; }
