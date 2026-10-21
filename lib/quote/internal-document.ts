import { formatRange } from "./calculate";
import type { QuotationData } from "./document";

export type DocumentMode = "invoice" | "estimate";
export type ManualFields = { date: string; advance: string; balance?: string; materials?: Record<string, string>; materialRates?: Record<string, string>; yieldReport?: Record<string, string> };
export const estimateTerms = [
  "Booking amount of Rs 10,000/- on booking and 70,000/- must be paid before drilling.",
  "Balance amount has to be settled immediately after work completion on the spot.",
  "GST at 18% is applicable on the bill if required. GST is not included in the displayed estimate.",
  "Drilling hours are 6 am to 9 pm. If the vehicle is kept idle, ₹4,000 per hour will be charged.",
  "If more than 2.5 inches of water, boulders, silt or a dry gap are found, further drilling is not possible.",
  "This above quotation is valid for 7 days only.",
] as const;

export function resolveMaterialRates(materials: QuotationData["variableMaterials"], overrides: Record<string, string> = {}) {
  return materials.map((material) => {
    const raw = (overrides[material.label] ?? "").trim();
    if (!raw) return { ...material };
    const rate = Number(raw);
    if (!/^\d+(\.\d{1,2})?$/.test(raw) || !Number.isFinite(rate) || rate < 0 || rate > 1000000) throw new Error(`Enter a rate from ₹0 to ₹10,00,000 with at most two decimal places for ${material.label}.`);
    return { ...material, rate };
  });
}
export const yieldReportFields = ["Rig Name", "Water Yield", "Water Layer at: 1)", "Water Layer at: 2)", "Water Layer at: 3)", "Remarks", "Boulders / Silt", "Suitable Pumps: Compressor / Submersible"] as const;

export function invoicePayments(total: number | null, advance: string) {
  const formattedAdvance = manualMoney(advance);
  const amount = advance.trim() ? Number(advance) : 0;
  if (total !== null && Math.round(amount * 100) > Math.round(total * 100)) throw new Error("Advance received cannot exceed the Estimated Bill total.");
  const balance = total === null ? null : (Math.round(total * 100) - Math.round(amount * 100)) / 100;
  return [["Advance received", formattedAdvance], ["Balance due", formatRange(balance, balance)]];
}

export function calculateMaterialUsage(materials: QuotationData["variableMaterials"], quantities: Record<string, string> = {}) {
  let subtotalPaise = 0;
  const rows = materials.map((material) => {
    const raw = (quantities[material.label] ?? "").trim();
    const quantity = raw === "" ? 0 : Number(raw);
    if (raw && (!/^\d+(\.\d{1,2})?$/.test(raw) || !Number.isFinite(quantity) || quantity < 0 || quantity > 1000000 || (material.unit !== "ft" && !Number.isInteger(quantity)))) {
      throw new Error(`Enter a valid ${material.unit === "ft" ? "quantity (up to two decimals)" : "whole-number quantity"} for ${material.label}.`);
    }
    const amountPaise = Math.round(Math.round(quantity * 100) * Math.round(material.rate * 100) / 100);
    subtotalPaise += amountPaise;
    return [material.label, `₹${material.rate}/${material.unit}`, quantity > 0 ? `${quantity} ${material.unit}` : "", quantity > 0 ? formatRange(amountPaise / 100, amountPaise / 100) : ""];
  });
  return { rows, subtotal: subtotalPaise / 100 };
}

function manualMoney(value: string) {
  if (!value.trim()) return "";
  if (!/^\d+(\.\d{1,2})?$/.test(value) || !Number.isFinite(Number(value))) throw new Error("Enter a non-negative payment amount with at most two decimal places.");
  return formatRange(Number(value), Number(value));
}

export function buildInternalDocument(quotation: QuotationData, mode: DocumentMode, fields: ManualFields) {
  const invoice = mode === "invoice";
  const date = fields.date ? new Date(`${fields.date}T12:00:00+05:30`) : null;
  if (date && Number.isNaN(date.getTime())) throw new Error("Enter a valid document date.");
  const materialRates = resolveMaterialRates(quotation.variableMaterials, fields.materialRates);
  const materials = invoice ? calculateMaterialUsage(materialRates, fields.materials) : null;
  const total = quotation.estimatedTotal === null ? null : Math.round((quotation.estimatedTotal + (materials?.subtotal ?? 0)) * 100) / 100;
  return {
    mode,
    title: invoice ? "Estimated Bill" : "Estimate Quotation",
    date: date ? new Intl.DateTimeFormat("en-IN", { day: "2-digit", month: "short", year: "numeric", timeZone: "Asia/Kolkata" }).format(date) : "",
    drillingHeaders: invoice ? ["Depth range", "Rate", "Amount"] : ["Depth range", "Rate"],
    drillingRows: quotation.drillingBreakdown.map((slab) => [
      `${slab.from} - ${slab.to} ft`, slab.rate === null ? "To confirm" : `₹${slab.rate}/ft`,
      ...(invoice ? [formatRange(slab.amount, slab.amount)] : []),
    ]),
    drillingSubtotal: invoice ? formatRange(quotation.drillingSubtotal, quotation.drillingSubtotal) : null,
    fixedRows: quotation.fixedOperationalCosts.map((cost) => [cost.label, formatRange(cost.min, cost.max)]),
    fixedSubtotal: invoice ? formatRange(quotation.fixedSubtotal, quotation.fixedSubtotal) : null,
    materialHeaders: invoice ? ["Material", "Rate", "Quantity", "Amount"] : ["Material", "Rate"],
    materialRows: materials?.rows ?? materialRates.map((material) => [material.label, `₹${material.rate}/${material.unit}`]),
    materialSubtotal: materials ? formatRange(materials.subtotal, materials.subtotal) : null,
    total: invoice ? total === null ? quotation.estimatedTotalFormatted : formatRange(total, total) : null,
    payments: invoice ? invoicePayments(total, fields.advance) : [],
    labels: { drilling: "Drilling subtotal (A)", fixedHeading: "Fixed operational costs (B)", fixed: "Fixed subtotal (B)", materials: "Materials subtotal (C)", total: "Estimated Bill total (A+B+C)" },
    yieldReport: invoice ? yieldReportFields.map((label) => [label, fields.yieldReport?.[label] ?? ""]) : [],
    terms: invoice ? [] : estimateTerms,
  };
}
export type InternalDocument = ReturnType<typeof buildInternalDocument>;
