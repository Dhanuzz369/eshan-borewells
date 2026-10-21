"use client";

import { useState } from "react";
import { calculateMaterialUsage, resolveMaterialRates, type DocumentMode } from "@/lib/quote/internal-document";
import { formatRange } from "@/lib/quote/calculate";
import type { QuotationData } from "@/lib/quote/document";

type Props = { mode: DocumentMode; materials: QuotationData["variableMaterials"]; quantities: Record<string, string>; rates: Record<string, string>; baseTotal: number | null; onChange: (label: string, value: string) => void; onRateChange: (label: string, value: string) => void; onResetRates: () => void };
export function MaterialQuantities({ mode, materials, quantities, rates, baseTotal, onChange, onRateChange, onResetRates }: Props) {
  const [editing, setEditing] = useState(false);
  const invoice = mode === "invoice";
  let resolved = materials;
  let usage: ReturnType<typeof calculateMaterialUsage> | null = null;
  let error = "";
  try { resolved = resolveMaterialRates(materials, rates); if (invoice) usage = calculateMaterialUsage(resolved, quantities); } catch (reason) { error = reason instanceof Error ? reason.message : "Check material rates and quantities."; }
  const total = baseTotal === null || !usage ? null : Math.round((baseTotal + usage.subtotal) * 100) / 100;
  return <section className={"material-quantity-section " + (invoice ? "" : "rates-only")}><div className="quote-section-title"><span>₹</span><h2>Variable materials</h2></div>
    <div className="material-rate-tools"><button type="button" aria-pressed={editing} onClick={() => setEditing(!editing)}>{editing ? "Done editing rates" : "Edit rates"}</button><button type="button" onClick={onResetRates}>Reset to approved rates</button></div>
    <p className="rate-adjustment-note">{invoice ? "Enter quantities used to include materials in this invoice. Leave unused materials blank." : "Rates only; quantities, amounts and totals will not appear in the estimate."} Rate edits apply only to this document. Leave a rate empty to use its approved value.</p>
    <div className="material-entry-heading"><span>Material</span><span>Rate</span>{invoice && <><span>Quantity</span><span>Amount</span></>}</div>
    {materials.map((material, index) => <div className="material-entry-row" key={material.label}><strong>{material.label}</strong>
      {editing ? <label><span className="quote-sr-only">{material.label} rate (₹/{material.unit})</span><input type="number" min="0" max="1000000" step="0.01" inputMode="decimal" value={rates[material.label] ?? String(material.rate)} placeholder={String(material.rate)} onChange={(event) => onRateChange(material.label, event.target.value)} /><small>₹/{material.unit}</small></label> : <span>₹{resolved[index].rate}/{material.unit}</span>}
      {invoice && <><label><span className="quote-sr-only">{material.label} quantity ({material.unit})</span><input type="number" min="0" max="1000000" step={material.unit === "ft" ? "0.01" : "1"} inputMode={material.unit === "ft" ? "decimal" : "numeric"} value={quantities[material.label] ?? ""} placeholder="Qty" onChange={(event) => onChange(material.label, event.target.value)} /></label><b>{usage?.rows[index][3] || "—"}</b></>}
    </div>)}
    {error && <p className="quote-error" role="alert">{error}</p>}
    {invoice && <div aria-live="polite"><p className="internal-subtotal"><span>Materials subtotal (C)</span><strong>{usage ? formatRange(usage.subtotal, usage.subtotal) : "Check entries"}</strong></p><p className="internal-subtotal"><span>Invoice total (A+B+C)</span><strong>{total === null ? "To confirm" : formatRange(total, total)}</strong></p></div>}
  </section>;
}
