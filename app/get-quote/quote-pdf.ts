import { jsPDF } from "jspdf";
import { formatRange } from "@/lib/quote/calculate";
import type { QuotationData } from "@/lib/quote/document";

type PdfInput = { quotation: QuotationData; phone: string; address: string };
const navy: [number, number, number] = [8, 47, 73];
const teal: [number, number, number] = [7, 93, 107];
const ink: [number, number, number] = [16, 42, 67];
const muted: [number, number, number] = [91, 111, 132];
const line: [number, number, number] = [217, 228, 236];

async function imageData(path: string) {
  const response = await fetch(path);
  if (!response.ok) throw new Error(`Unable to load ${path}`);
  const blob = await response.blob();
  return await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

export async function downloadQuote({ quotation, phone, address }: PdfInput) {
  const font = await fetch("/fonts/NotoSans-Regular.ttf");
  if (!font.ok) throw new Error("PDF font unavailable");
  const bytes = new Uint8Array(await font.arrayBuffer());
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  const hero = await imageData("/hero-drilling.webp");
  const pdf = renderQuotePdf({ quotation, phone, address, fontBase64: btoa(binary), hero });
  pdf.save("Eshan-Borewells-Quotation.pdf");
}

export function renderQuotePdf({ quotation, phone, address, fontBase64, hero }: PdfInput & { fontBase64: string; hero: string }) {
  const pdf = new jsPDF({ unit: "mm", format: "a4", orientation: "portrait" });
  pdf.addFileToVFS("NotoSans-Regular.ttf", fontBase64);
  pdf.addFont("NotoSans-Regular.ttf", "NotoSans", "normal");
  pdf.setFont("NotoSans");

  const money = (value: number | null) => formatRange(value, value);
  const setText = (size: number, color: [number, number, number] = ink) => { pdf.setFontSize(size); pdf.setTextColor(...color); };
  const wrapped = (value: string, x: number, y: number, width: number, size = 8, color: [number, number, number] = muted, lineHeight = 4) => {
    setText(size, color);
    const rows = pdf.splitTextToSize(value, width) as string[];
    pdf.text(rows, x, y);
    return y + rows.length * lineHeight;
  };
  const rect = (x: number, y: number, width: number, height: number, fill: [number, number, number], stroke: [number, number, number] = fill, radius = 2) => {
    pdf.setFillColor(...fill); pdf.setDrawColor(...stroke); pdf.roundedRect(x, y, width, height, radius, radius, "FD");
  };
  const brandHeader = (compact = false) => {
    const height = compact ? 28 : 46;
    pdf.setFillColor(...teal); pdf.rect(0, 0, 210, height, "F");
    if (!compact) { pdf.addImage(hero, "WEBP", 112, 0, 98, 46, undefined, "FAST"); pdf.setFillColor(...teal); pdf.rect(0, 0, 122, 46, "F"); }
    setText(compact ? 17 : 21, [255, 255, 255]); pdf.text("ESHAN", 14, compact ? 13 : 18);
    pdf.setCharSpace(2); setText(compact ? 7 : 8, [255, 255, 255]); pdf.text("BOREWELLS", 14, compact ? 20 : 27); pdf.setCharSpace(0);
    if (!compact) { setText(7, [232, 247, 248]); pdf.text("25+ years  |  10,000+ borewell sites  |  Bengaluru", 14, 35); setText(6.5, [255, 255, 255]); pdf.text(`${phone}  |  ${address}`, 14, 42); }
    else { setText(7, [255, 255, 255]); pdf.text(`${phone}  |  ${address}`, 196, 17, { align: "right", maxWidth: 105 }); }
    return height;
  };
  const pageFooter = () => {
    pdf.setDrawColor(...line); pdf.line(14, 283, 196, 283);
    setText(6.5, muted); pdf.text(`Eshan Borewells  |  Valid until ${quotation.validUntil}`, 14, 288);
    pdf.text(`${pdf.getCurrentPageInfo().pageNumber}`, 196, 288, { align: "right" });
  };
  const sectionTitle = (title: string, subtitle: string, y: number) => {
    setText(10, navy); pdf.text(title, 14, y + 4);
    pdf.setDrawColor(121, 154, 170); pdf.line(14, y + 7, 196, y + 7);
    setText(6.5, muted); pdf.text(subtitle, 14, y + 12);
    return y + 16;
  };

  let y = brandHeader() + 8;
  setText(18, navy); pdf.text("Borewell Quotation", 14, y);
  setText(7, muted); pdf.text("Quotation date", 142, y - 4); pdf.text(`Valid for ${quotation.validityDays} days`, 174, y - 4);
  setText(8, ink); pdf.text(quotation.quoteDate, 142, y + 1); pdf.text(quotation.validUntil, 174, y + 1);
  y += 8; wrapped("Estimated project cost based on the customer and site details provided.", 14, y, 120, 7.5); y += 5;

  const summaryY = y;
  const summary = [["CUSTOMER", quotation.customerName, quotation.mobile], ["LOCATION", quotation.location, quotation.propertyType], ["DEPTH", quotation.depth, quotation.accessType], ["SERVICE", quotation.service, quotation.machineType]];
  summary.forEach(([label, value, detail], index) => {
    const x = 14 + index * 45.5;
    rect(x, summaryY, 44, 27, [245, 249, 251], line, 2);
    setText(6, muted); pdf.text(label, x + 4, summaryY + 6);
    wrapped(value, x + 4, summaryY + 13, 36, 9, ink, 3.7);
    wrapped(detail, x + 4, summaryY + 22, 36, 6.2, muted, 3);
  });
  y += 32;
  rect(14, y, 182, 20, [232, 247, 238], [184, 224, 199], 2);
  setText(8, [7, 91, 52]); pdf.text("ESTIMATED TOTAL", 20, y + 7);
  setText(17, [7, 91, 52]); pdf.text(quotation.estimatedTotalFormatted, 191, y + 12, { align: "right" });
  setText(6.5, [61, 112, 83]); pdf.text("Drilling and configured project costs", 20, y + 14);
  y += 27;

  y = sectionTitle("Drilling Cost Structure", "Rates are based on depth range and selected machine type.", y);
  pdf.setFillColor(234, 242, 246); pdf.rect(14, y, 182, 8, "F");
  setText(6.5, [56, 83, 109]); pdf.text("DEPTH RANGE", 19, y + 5); pdf.text("RATE (₹/FT)", 112, y + 5, { align: "center" }); pdf.text("AMOUNT (₹)", 191, y + 5, { align: "right" });
  y += 8;
  for (const slab of quotation.drillingBreakdown) {
    pdf.setDrawColor(...line); pdf.line(14, y + 7, 196, y + 7);
    setText(7.3, ink); pdf.text(`${slab.from} - ${slab.to} ft`, 19, y + 4.8); pdf.text(slab.rate === null ? "To confirm" : `₹${slab.rate}`, 112, y + 4.8, { align: "center" }); pdf.text(money(slab.amount), 191, y + 4.8, { align: "right" }); y += 7;
  }
  pdf.setFillColor(232, 242, 246); pdf.rect(14, y, 182, 10, "F");
  setText(8, navy); pdf.text("Drilling Subtotal", 19, y + 6.5); setText(10, navy); pdf.text(money(quotation.drillingSubtotal), 191, y + 6.5, { align: "right" });
  pageFooter();

  pdf.addPage(); y = brandHeader(true) + 9;
  y = sectionTitle("Fixed Operational Costs", "One-time operational costs configured for this machine.", y);
  rect(14, y, 182, 10 + quotation.fixedOperationalCosts.length * 9, [250, 252, 253], line, 2);
  quotation.fixedOperationalCosts.forEach((cost, index) => { const rowY = y + 7 + index * 9; setText(7.5, ink); pdf.text(cost.label, 19, rowY); pdf.text(formatRange(cost.min, cost.max), 191, rowY, { align: "right" }); });
  const fixedBottom = y + 10 + quotation.fixedOperationalCosts.length * 9;
  rect(14, fixedBottom + 2, 182, 13, [232, 247, 238], [184, 224, 199], 2); setText(8, [7, 91, 52]); pdf.text("Subtotal (Fixed)", 19, fixedBottom + 10); pdf.text(money(quotation.fixedSubtotal), 191, fixedBottom + 10, { align: "right" });
  y = fixedBottom + 22;

  if (quotation.materialsServices.length) { y = sectionTitle("Selected Materials and Services", "Included or pending confirmation in this quotation.", y); for (const item of quotation.materialsServices) { setText(7, ink); pdf.text(item.label, 19, y); pdf.text(formatRange(item.min, item.max), 191, y, { align: "right" }); y += 7; } y += 3; }

  y = sectionTitle("Variable Materials", "Not included unless selected or used. Final cost depends on actual site usage.", y);
  quotation.variableMaterials.forEach((material, index) => {
    const column = index % 2, row = Math.floor(index / 2), x = 14 + column * 92, rowY = y + row * 10;
    pdf.setDrawColor(...line); pdf.line(x, rowY + 8, x + 88, rowY + 8);
    wrapped(material.label, x + 4, rowY + 5, 60, 6.8, ink, 3.2);
    rect(x + 68, rowY + 1, 18, 6, [230, 246, 235], [230, 246, 235], 1); setText(6.4, [23, 104, 59]); pdf.text(`₹${material.rate}/${material.unit}`, x + 77, rowY + 5.2, { align: "center" });
  });
  y += Math.ceil(quotation.variableMaterials.length / 2) * 10 + 8;

  y = sectionTitle("Important Note", `Quotation validity: ${quotation.validityDays} days. Valid until ${quotation.validUntil}.`, y);
  y = wrapped("This is an estimated quotation based on the information provided by the customer. Final pricing may vary depending on actual drilling conditions, ground formation, machine access, actual depth, casing requirements, materials used and site assessment. Water, depth and final price are not guaranteed.", 18, y, 174, 7, muted, 3.8) + 5;
  rect(14, y, 182, 22, [240, 247, 248], line, 2);
  setText(8, teal); pdf.text("25+ YEARS EXPERIENCE", 20, y + 8); pdf.text("10,000+ BOREWELL SITES", 78, y + 8); pdf.text("BENGALURU & SURROUNDING AREAS", 142, y + 8);
  setText(6.5, muted); pdf.text("Call or WhatsApp to confirm site conditions and the final scope.", 20, y + 16); pdf.text(phone, 191, y + 16, { align: "right" });
  pageFooter();

  return pdf;
}
