import { calculateQuote } from "@/lib/quote/calculate";
import { submissionSchema } from "@/lib/quote/schema";
import { allowSubmission, captureLead, deliverLead, draftNumber, storageConfigured } from "@/lib/quote/delivery";

export const runtime = "nodejs";
export const maxDuration = 30;
const headers = { "cache-control": "no-store" };

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (origin && origin !== new URL(request.url).origin) return Response.json({ error: "Please submit from our website." }, { status: 403, headers });
  let raw: unknown;
  try {
    const reader = request.body?.getReader();
    if (!reader) throw new Error("Missing body");
    let text = "";
    const decoder = new TextDecoder();
    let bytes = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      bytes += value.byteLength;
      if (bytes > 16384) { await reader.cancel(); return Response.json({ error: "Please shorten your enquiry." }, { status: 413, headers }); }
      text += decoder.decode(value, { stream: true });
    }
    raw = JSON.parse(text + decoder.decode());
  } catch { return Response.json({ error: "Please check your details and try again." }, { status: 400, headers }); }
  const parsed = submissionSchema.safeParse(raw);
  if (!parsed.success) return Response.json({ error: parsed.error.issues[0]?.message || "Please check your details." }, { status: 400, headers });
  if (parsed.data.website) return Response.json({ error: "Please call us to discuss your site." }, { status: 400, headers });
  let record;
  if (storageConfigured()) {
    try {
      if (!await allowSubmission(request.headers.get("x-real-ip") || request.headers.get("x-forwarded-for")?.split(",")[0] || "unknown")) return Response.json({ error: "Please wait a few minutes before trying again, or call us." }, { status: 429, headers });
      record = await captureLead(parsed.data);
    } catch {
      console.warn("Quote capture unavailable");
      return Response.json({ error: "We could not send your enquiry yet. Your details are still here. Please retry, WhatsApp or call us.", retryable: true }, { status: 503, headers });
    }
  }
  let quote = null;
  try { quote = calculateQuote(parsed.data.input); } catch { console.warn("Quote calculation needs assessment", { quoteNumber: record?.quoteNumber }); }
  let delivered = false;
  if (record) { try { delivered = await deliverLead({ ...record, ...(quote ? { quote } : {}) }); } catch { console.warn("Quote retained for retry", { quoteNumber: record.quoteNumber }); } }
  return Response.json({ quote, quoteNumber: record?.quoteNumber || draftNumber(), capturedAt: record?.capturedAt || new Date().toISOString(), delivery: record ? delivered ? "delivered" : "pending" : "not_saved" }, { headers });
}
