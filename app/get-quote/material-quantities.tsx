"use client";

import { calculateMaterialUsage } from "@/lib/quote/internal-document";
import { formatRange } from "@/lib/quote/calculate";
import type { QuotationData } from "@/lib/quote/document";

type Props = { materials: QuotationData["variableMaterials"]; quantities: Record<string, string>; baseTotal: number | null; onChange: (label: string, value: string) => void };
export function MaterialQuantities({ materials, quantities, baseTotal, onChange }: Props) {
  let usage: ReturnType<typeof calculateMaterialUsage> | null = null;
  let error = "";
  try { usage = calculateMaterialUsage(materials, quantities); } catch (reason) { error = reason instanceof Error ? reason.message : "Check material quantities."; }
  const total = baseTotal === null || !usage ? null : Math.round((baseTotal + usage.subtotal) * 100) / 100;
  return <section className="material-quantity-section"><div className="quote-section-title"><span>₹</span><h2>Variable materials</h2></div><p className="rate-adjustment-note">Enter the quantity used to include a material in this invoice. Leave unused materials blank. Feet support two decimal places; pieces and joints use whole numbers.</p>
    <div className="material-entry-heading"><span>Material</span><span>Rate</span><span>Quantity</span><span>Amount</span></div>
    {materials.map((material, index) => <div className="material-entry-row" key={material.label}><strong>{material.label}</strong><span>₹{material.rate}/{material.unit}</span><label><span className="quote-sr-only">{material.label} quantity ({material.unit})</span><input type="number" min="0" max="1000000" step={material.unit === "ft" ? "0.01" : "1"} inputMode={material.unit === "ft" ? "decimal" : "numeric"} value={quantities[material.label] ?? ""} placeholder="Qty" onChange={(event) => onChange(material.label, event.target.value)} /></label><b>{usage?.rows[index][3] || "—"}</b></div>)}
    {error && <p className="quote-error" role="alert">{error}</p>}
    <div aria-live="polite"><p className="internal-subtotal"><span>Materials subtotal</span><strong>{usage ? formatRange(usage.subtotal, usage.subtotal) : "Check quantities"}</strong></p><p className="internal-subtotal"><span>Invoice total including materials</span><strong>{total === null ? "To confirm" : formatRange(total, total)}</strong></p></div>
  </section>;
}
