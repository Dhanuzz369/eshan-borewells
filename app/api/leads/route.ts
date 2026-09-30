export const runtime = "nodejs";

type LeadPayload = {
  name?: unknown;
  phone?: unknown;
  siteLocation?: unknown;
  source?: unknown;
  website?: unknown;
};

export async function POST(request: Request) {
  const webhook = process.env.LEADS_WEBHOOK_URL;
  if (!webhook) return Response.json({ error: "Lead delivery is not configured" }, { status: 503 });
  if (!/^https:\/\//i.test(webhook)) return Response.json({ error: "Lead delivery is misconfigured" }, { status: 503 });

  let payload: LeadPayload;
  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Invalid request" }, { status: 400 });
  }

  if (payload.website) return Response.json({ ok: true });
  const name = typeof payload.name === "string" ? payload.name.trim() : "";
  const phone = typeof payload.phone === "string" ? payload.phone.trim() : "";
  const siteLocation = typeof payload.siteLocation === "string" ? payload.siteLocation.trim() : "";
  const source = payload.source === "popup" ? "popup" : "footer";
  if (!name || name.length > 100 || !/^\d{10,15}$/.test(phone.replace(/\D/g, "")) || !siteLocation || siteLocation.length > 150) {
    return Response.json({ error: "Invalid lead details" }, { status: 400 });
  }

  try {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "content-type": "application/json", ...(process.env.LEADS_WEBHOOK_TOKEN ? { authorization: `Bearer ${process.env.LEADS_WEBHOOK_TOKEN}` } : {}) },
      body: JSON.stringify({ name, phone, siteLocation, source, submittedAt: new Date().toISOString() }),
      cache: "no-store",
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) throw new Error("Webhook rejected lead");
    return Response.json({ ok: true }, { headers: { "cache-control": "no-store" } });
  } catch {
    return Response.json({ error: "Could not deliver lead" }, { status: 502, headers: { "cache-control": "no-store" } });
  }
}
