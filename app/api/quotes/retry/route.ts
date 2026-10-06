import { timingSafeEqual } from "node:crypto";
import { redis, deliverLead, type LeadRecord } from "@/lib/quote/delivery";
export const runtime = "nodejs";
export const maxDuration = 60;
export async function GET(request: Request) {
  const secret = process.env.QUOTE_RETRY_SECRET;
  const actual = Buffer.from(request.headers.get("authorization") || "");
  const expected = Buffer.from(`Bearer ${secret}`);
  if (!secret || actual.length !== expected.length || !timingSafeEqual(actual, expected)) return Response.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const keys = await redis(["SRANDMEMBER", "quote:pending", 5]) as string[];
    const outcomes = await Promise.allSettled(keys.map(async (key) => {
      const raw = await redis(["GET", key]);
      if (!raw) { await redis(["SREM", "quote:pending", key]); return false; }
      return deliverLead(JSON.parse(String(raw)) as LeadRecord);
    }));
    return Response.json({ checked: keys.length, delivered: outcomes.filter((o) => o.status === "fulfilled" && o.value).length }, { headers: { "cache-control": "no-store" } });
  } catch { return Response.json({ error: "Retry unavailable" }, { status: 503 }); }
}
