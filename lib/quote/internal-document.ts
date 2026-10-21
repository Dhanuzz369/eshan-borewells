import { formatRange } from "./calculate";
import type { QuotationData } from "./document";

export type DocumentMode = "invoice" | "estimate";
export type ManualFields = { date: string; advance: string; balance?: string; materials?: Record<string, string>; yieldReport?: Record<string, string> };
export const yieldReportFields = ["Rig Name", "Water Yield", "Water Layer at: 1)", "Water Layer at: 2)", "Water Layer at: 3)", "Remarks", "Boulders / Silt", "Suitable Pumps: Compressor / Submersible"] as const;

export function invoicePayments(total: number | null, advance: string) {
  const formattedAdvance = manualMoney(advance);
  const amount = advance.trim() ? Number(advance) : 0;
  if (total !== null && Math.round(amount * 100) > Math.round(total * 100)) throw new Error("Advance received cannot exceed the invoice total.");
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
    const amountPaise = Math.round(quantity * material.rate * 100);
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
  const materials = invoice ? calculateMaterialUsage(quotation.variableMaterials, fields.materials) : null;
  const total = quotation.estimatedTotal === null ? null : Math.round((quotation.estimatedTotal + (materials?.subtotal ?? 0)) * 100) / 100;
  return {
    mode,
    title: invoice ? "Invoice" : "Estimate Quotation",
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
    materialRows: materials?.rows ?? quotation.variableMaterials.map((material) => [material.label, `₹${material.rate}/${material.unit}`]),
    materialSubtotal: materials ? formatRange(materials.subtotal, materials.subtotal) : null,
    total: invoice ? total === null ? quotation.estimatedTotalFormatted : formatRange(total, total) : null,
    payments: invoice ? invoicePayments(total, fields.advance) : [],
    labels: { drilling: "Drilling subtotal (A)", fixedHeading: "Fixed operational costs (B)", fixed: "Fixed subtotal (B)", materials: "Materials subtotal (C)", total: "Invoice total (A+B+C)" },
    yieldReport: invoice ? yieldReportFields.map((label) => [label, fields.yieldReport?.[label] ?? ""]) : [],
    terms: invoice ? [] : quotation.terms,
  };
}
export type InternalDocument = ReturnType<typeof buildInternalDocument>;
