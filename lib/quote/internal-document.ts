import { formatRange } from "./calculate";
import type { QuotationData } from "./document";

export type DocumentMode = "invoice" | "estimate";
export type ManualFields = { date: string; advance: string; balance: string };

function manualMoney(value: string) {
  if (!value.trim()) return "";
  if (!/^\d+(\.\d{1,2})?$/.test(value) || !Number.isFinite(Number(value))) throw new Error("Enter a non-negative payment amount with at most two decimal places.");
  return formatRange(Number(value), Number(value));
}

export function buildInternalDocument(quotation: QuotationData, mode: DocumentMode, fields: ManualFields) {
  const invoice = mode === "invoice";
  const date = fields.date ? new Date(`${fields.date}T12:00:00+05:30`) : null;
  if (date && Number.isNaN(date.getTime())) throw new Error("Enter a valid document date.");
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
    materialRows: quotation.variableMaterials.map((material) => [material.label, `₹${material.rate}/${material.unit}`]),
    total: invoice ? quotation.estimatedTotalFormatted : null,
    payments: invoice ? [["Advance received", manualMoney(fields.advance)], ["Balance due", manualMoney(fields.balance)]] : [],
    terms: invoice ? quotation.terms.filter((term) => !term.includes("valid for")).map((term) => term.replace("displayed estimate", "invoice total")) : quotation.terms,
  };
}
export type InternalDocument = ReturnType<typeof buildInternalDocument>;
