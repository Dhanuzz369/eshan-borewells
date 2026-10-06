import { jsPDF } from "jspdf";
import type { QuoteInput } from "@/lib/quote/schema";
import { formatRange, quotePrice, type Quote } from "@/lib/quote/calculate";
import { disclaimer, serviceOptions } from "@/lib/quote/config";

type PdfInput = { result: { quote: Quote | null; quoteNumber: string; capturedAt: string; delivery: string }; input: QuoteInput; customer: { name: string; mobile: string; email: string }; phone: string; address: string };
export async function downloadQuote({ result, input, customer, phone, address }: PdfInput) {
  const pdf = new jsPDF({ unit: "mm", format: "a4" });
  // Loaded only when downloading a PDF, never in the first-page bundle.
  const font = await fetch("/fonts/NotoSans-Regular.ttf");
  if (!font.ok) throw new Error("PDF font unavailable");
  const bytes = new Uint8Array(await font.arrayBuffer());
  let binary = "";
  for (const b of bytes) binary += String.fromCharCode(b);
  pdf.addFileToVFS("NotoSans-Regular.ttf", btoa(binary));
  pdf.addFont("NotoSans-Regular.ttf", "NotoSans", "normal");
  pdf.setFont("NotoSans");
  pdf.setFillColor(9, 45, 83); pdf.rect(0, 0, 210, 46, "F");
  // Reuse the existing site favicon for the brand mark, not a page screenshot.
  const logo = new Image();
  logo.src = "/favicon.svg";
  await logo.decode();
  const canvas = document.createElement("canvas"); canvas.width = 120; canvas.height = 120;
  canvas.getContext("2d")!.drawImage(logo, 0, 0, 120, 120);
  pdf.addImage(canvas.toDataURL("image/png"), "PNG", 16, 11, 19, 19);
  pdf.setTextColor(255, 255, 255); pdf.setFontSize(21); pdf.text("ESHAN BOREWELLS", 41, 22);
  pdf.setFontSize(10); pdf.text("PROJECT ESTIMATE  /  SUBJECT TO SITE ASSESSMENT", 41, 32);
  let y = 58;
  function text(value: string, size = 10, color = [39, 65, 85]) {
    pdf.setFontSize(size); pdf.setTextColor(color[0], color[1], color[2]);
    const lines: string[] = pdf.splitTextToSize(value, 176);
    for (const line of lines) { if (y > 264) { pdf.addPage(); y = 20; } pdf.text(line, 17, y); y += size * 0.48 + 1; }
  }
  function section(title: string) {
    // Keep headings with the first lines of content instead of orphaning them.
    if (y > 235) { pdf.addPage(); y = 20; }
    text(title, 12);
  }
  text(result.quoteNumber, 13);
  text(`${new Intl.DateTimeFormat("en-IN", { dateStyle: "long", timeStyle: "short", timeZone: "Asia/Kolkata" }).format(new Date(result.capturedAt))} IST`, 9);
  y += 5;
  text(`Prepared for: ${customer.name}`); text(`Mobile: ${customer.mobile}`);
  if (customer.email) text(`Email: ${customer.email}`);
  text(`Site: ${input.locality}, ${input.city}${input.pin ? ` - ${input.pin}` : ""}`);
  text(`Service: ${serviceOptions.find((s) => s.value === input.service)!.label}`);
  text(`Property: ${input.property}`);
  text(`Depth: ${input.service === "pump" || input.service === "existing" ? "Not applicable to new drilling" : input.depth ? `${input.depth} ft (estimated)` : "Site assessment required"}`);
  text(`Suggested equipment: ${result.quote?.machine || "Site assessment required"}`);
  text(`Casing: ${input.casing.required === "yes" ? `${input.casing.material}, ${input.casing.diameter}, ${input.casing.depth} ft` : input.casing.required}`);
  text(`Pump: ${input.pump.required === "yes" ? `${input.pump.type}, ${input.pump.hp}` : input.pump.required === "no" ? "Supply not requested" : "Recommendation required"}`);
  y += 5;
  section("ESTIMATED COST BREAKDOWN");
  for (const line of result.quote?.breakdown || []) { text(`${line.label}: ${formatRange(line.min, line.max)}`, 10); if (line.detail) text(line.detail, 8, [90, 105, 118]); }
  if (result.quote?.drillingSlabs.length) {
    y += 4; section("PROGRESSIVE DRILLING SLABS");
    for (const slab of result.quote.drillingSlabs) text(`${slab.from}–${slab.to} ft: ${slab.feet} ft × ${slab.rate === null ? "rate pending" : `₹${slab.rate}/ft`} = ${formatRange(slab.amount, slab.amount)}`, 9);
  }
  text(`Tax: ${result.quote?.taxPercent == null ? "To be confirmed" : `${result.quote.taxPercent}%`}`, 10);
  y += 4;
  const price = result.quote ? quotePrice(result.quote) : null;
  text(`${price?.label || "Estimated total"}: ${formatRange(price?.min ?? null, price?.max ?? null)}`, 15, [19, 94, 150]);
  if (price && !price.full) text(`Not an all-inclusive total. Unpriced items excluded: ${price.pending.join(", ")}. These charges require separate confirmation.`, 9);
  text("No payment is requested by this estimate.", 9);
  if (result.delivery === "not_saved") text("Enquiry not yet sent. Please call or share this quote on WhatsApp.", 9);
  y += 6; section("TERMS & NEXT STEPS"); text(disclaimer, 9);
  for (const note of result.quote?.assumptions || []) text(note, 9);
  y += 5; text(`Call / WhatsApp: ${phone}`, 10); text(address, 9); text("www.eshanborewells.com", 9);
  const pages = pdf.getNumberOfPages();
  for (let page = 1; page <= pages; page++) { pdf.setPage(page); pdf.setFontSize(8); pdf.setTextColor(90, 105, 118); pdf.text(`Eshan Borewells  |  Estimate only  |  ${page} / ${pages}`, 17, 286); }
  pdf.save(`${result.quoteNumber}.pdf`);
}
