"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, type FormEvent, type ReactNode } from "react";
import { useReducedMotion } from "motion/react";
import { Check, FileText, MapPin } from "lucide-react";
import { localities, propertyOptions, sensorVariableMaterials, variableMaterials } from "@/lib/quote/config";
import { calculateQuote, quotePrice } from "@/lib/quote/calculate";
import { drillingAdjustmentError } from "@/lib/quote/rate-adjustment";
import { buildQuotationData, type QuotationData } from "@/lib/quote/document";
import { customerSchema, initialInput, quoteInputSchema, type QuoteInput } from "@/lib/quote/schema";
import { buildInternalDocument, calculateMaterialUsage, invoicePayments, yieldReportFields, type DocumentMode, type ManualFields } from "@/lib/quote/internal-document";
import { InternalResult } from "./internal-result";
import { MaterialQuantities } from "./material-quantities";

type Props = { phone: string; whatsapp: string; address: string; mode?: DocumentMode };
function SectionTitle({ icon, children }: { icon: ReactNode; children: ReactNode }) { return <div className="quote-section-title"><span>{icon}</span><h2>{children}</h2></div>; }

export function QuoteWizard({ phone, whatsapp, address, mode = "invoice" }: Props) {
  const [input, setInput] = useState<QuoteInput>(initialInput);
  const [customer, setCustomer] = useState({ name: "", mobile: "", email: "" });
  const [fields, setFields] = useState<ManualFields>({ date: "", advance: "" });
  const [error, setError] = useState("");
  const [result, setResult] = useState<QuotationData | null>(null);
  const reducedMotion = useReducedMotion();
  const displayedQuote = calculateQuote(input);
  const drilling = true;
  const adjustmentError = drillingAdjustmentError(input.machine, input.diameter, input.rateAdjustmentOperation, input.rateAdjustmentAmount);
  const maxDepth = input.machine === "Robo Rig" ? 1200 : 2000;
  let balancePreview = "";
  if (mode === "invoice") {
    try {
      const materials = calculateMaterialUsage(input.machine === "Sensor Rig" ? sensorVariableMaterials : variableMaterials, fields.materials);
      const base = quotePrice(displayedQuote).min;
      balancePreview = invoicePayments(base === null ? null : Math.round((base + materials.subtotal) * 100) / 100, fields.advance)[1][1];
    } catch { balancePreview = "Check quantities and advance"; }
  }
  function update<K extends keyof QuoteInput>(key: K, value: QuoteInput[K]) { setInput((old) => ({ ...old, [key]: value })); setError(""); }
  function updateMobile(value: string) {
    const digits = value.replace(/\D/g, "");
    const mobile = digits.length > 10 && digits.startsWith("91") ? digits.slice(-10) : digits.slice(0, 10);
    setCustomer((old) => ({ ...old, mobile })); setError("");
  }
  function selectMachine(machine: QuoteInput["machine"]) { if (machine !== input.machine) setFields((old) => ({ ...old, materials: {} })); setInput((old) => ({ ...old, machine, depth: machine === "Robo Rig" && (old.depth ?? 0) > 1200 ? 1200 : old.depth })); setError(""); }
  function scrollTop() { window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" }); }
  function submit(event: FormEvent) {
    event.preventDefault();
    // Internal operator flow: no contact-consent declaration or external lead submission.
    const parsedCustomer = customerSchema.omit({ consent: true }).safeParse(customer);
    const parsedInput = quoteInputSchema.safeParse({ ...input, service: "new" });
    if (!parsedCustomer.success) { setError(parsedCustomer.error.issues[0].message); return; }
    if (!parsedInput.success) { setError(parsedInput.error.issues[0].message); return; }
    if (!input.locality.trim()) { setError("Enter the site locality."); return; }
    const quotation = buildQuotationData({ quote: calculateQuote(parsedInput.data), input: parsedInput.data, customer: parsedCustomer.data, capturedAt: new Date().toISOString(), quoteNumber: "" });
    try { buildInternalDocument(quotation, mode, fields); } catch (reason) { setError(reason instanceof Error ? reason.message : "Check document details."); return; }
    setResult(quotation); setError(""); scrollTop();
  }
  if (result) return <InternalResult quotation={result} document={buildInternalDocument(result, mode, fields)} phone={phone} whatsapp={whatsapp} address={address} onEdit={() => { setResult(null); scrollTop(); }} />;

  return <form className="instant-quote-form shell" onSubmit={submit} noValidate>
    <header className="instant-title"><h1>{mode === "invoice" ? "Bill & Invoice Generator" : "Estimate Quote Generator"}</h1><p>Internal workspace · Approved Sensor Rig and Robo Rig rates</p><nav className="internal-tool-nav"><Link href="/get-quote" aria-current={mode === "invoice" ? "page" : undefined}>Invoice generator</Link><Link href="/estimate-quote-generator" aria-current={mode === "estimate" ? "page" : undefined}>Estimate generator</Link></nav></header>
    <section className="quote-section-contact"><SectionTitle icon={<MapPin size={19} />}>Contact & location</SectionTitle><div className="quote-fields contact-grid"><label>Full name<input autoComplete="name" value={customer.name} onChange={(event) => setCustomer({ ...customer, name: event.target.value })} placeholder="Your name" required /></label><label>Mobile number<span className="phone-input"><i>🇮🇳 +91</i><input type="tel" inputMode="numeric" autoComplete="tel-national" value={customer.mobile} onChange={(event) => updateMobile(event.target.value)} placeholder="9876543210" maxLength={10} pattern="[6-9][0-9]{9}" aria-describedby="mobile-format" required /></span><small id="mobile-format">Enter 10 digits</small></label><label className="full-field">Select locality in Bengaluru<input value={input.locality} onChange={(event) => update("locality", event.target.value)} list="quote-localities" autoComplete="address-level3" placeholder="Search or select area" required /><datalist id="quote-localities">{localities.map((area) => <option key={area}>{area}</option>)}</datalist></label><label>City<input value={input.city} onChange={(event) => update("city", event.target.value)} autoComplete="address-level2" /></label><label>PIN code <span>(optional)</span><input value={input.pin} onChange={(event) => update("pin", event.target.value)} inputMode="numeric" maxLength={6} /></label></div></section>
    <section><SectionTitle icon={<FileText size={19} />}>Job details</SectionTitle><div className="quote-fields"><label>Purpose of drilling<select value={input.property} onChange={(event) => update("property", event.target.value as QuoteInput["property"])}>{propertyOptions.map((item) => <option key={item}>{item}</option>)}</select></label></div><p className="field-label">Machine type</p><div className="machine-cards">{[{ name: "Sensor Rig", image: "/large-drilling-rig.webp", note: "Recommended" }, { name: "Robo Rig", image: "/compact-drilling-rig.webp", note: "Advanced" }].map((machine) => <button type="button" key={machine.name} className={input.machine === machine.name ? "selected" : ""} onClick={() => selectMachine(machine.name as QuoteInput["machine"])}><strong>{machine.name}</strong><span>{machine.note}</span><Image src={machine.image} alt={`${machine.name} borewell drilling machine`} width={108} height={72} /></button>)}</div>{drilling && <><div className="quote-fields quote-rate-adjustment"><label>Rate adjustment<select value={input.rateAdjustmentOperation} onChange={(event) => update("rateAdjustmentOperation", event.target.value as "+" | "-")}><option value="+">+ Add to each foot</option><option value="-">− Subtract per foot</option></select></label><label>Amount (₹/ft)<input type="number" min={0} max={1000000} step="0.01" inputMode="decimal" value={input.rateAdjustmentAmount} aria-invalid={Boolean(adjustmentError)} aria-describedby="rate-adjustment-note" onChange={(event) => update("rateAdjustmentAmount", Number(event.target.value))} /></label></div><p id="rate-adjustment-note" className={adjustmentError ? "quote-error" : "rate-adjustment-note"} role={adjustmentError ? "alert" : undefined}>{adjustmentError || "Applies to every drilling slab. Fixed costs and material rates stay unchanged."}</p><div className="depth-heading"><span>Estimated depth</span><strong>{input.depth ?? "?"}<small>{input.depth ? "FT" : ""}</small></strong></div><input className="quote-slider" type="range" min={50} max={maxDepth} step={10} value={Math.min(input.depth ?? 500, maxDepth)} aria-label="Estimated depth in feet" onChange={(event) => update("depth", Number(event.target.value))} /><div className="quote-range-labels"><span>50</span><span>{maxDepth}</span></div><div className="quote-depth-presets">{[300, 600, 900, 1200, 1500, 2000].filter((depth) => depth <= maxDepth).map((depth) => <button type="button" aria-pressed={input.depth === depth} key={depth} onClick={() => update("depth", depth)}>{depth} FT</button>)}</div>{displayedQuote.drillingSlabs.length > 0 && <div className="rate-preview"><div><span>Depth range</span><span>Rate</span><span>Status</span></div>{displayedQuote.drillingSlabs.map((slab, index) => <div key={slab.to}><span>{slab.from} - {slab.to} ft</span><span>{slab.rate === null ? "To confirm" : `₹${slab.rate}/ft`}</span><span><Check size={13} />{index === displayedQuote.drillingSlabs.length - 1 ? "Current" : "Included"}</span></div>)}</div>}</>}</section>
    {mode === "invoice" && <MaterialQuantities materials={input.machine === "Sensor Rig" ? sensorVariableMaterials : variableMaterials} quantities={fields.materials ?? {}} baseTotal={quotePrice(displayedQuote).min} onChange={(label, value) => { setFields((old) => ({ ...old, materials: { ...old.materials, [label]: value } })); setError(""); }} />}
    {mode === "invoice" && <section><SectionTitle icon={<FileText size={19} />}>Yield report</SectionTitle><p className="rate-adjustment-note">Leave fields blank to complete the report by hand, or enter the findings below. No yield information is prefilled.</p><div className="quote-fields">{yieldReportFields.map((label) => <label key={label}>{label}<input value={fields.yieldReport?.[label] ?? ""} maxLength={200} onChange={(event) => setFields((old) => ({ ...old, yieldReport: { ...old.yieldReport, [label]: event.target.value } }))} /></label>)}</div></section>}
    <section><SectionTitle icon={<FileText size={19} />}>Document details</SectionTitle><div className="quote-fields"><label>Date (optional)<input type="date" value={fields.date} onChange={(event) => setFields({ ...fields, date: event.target.value })} /></label>{mode === "invoice" && <><label>Advance received (₹, optional)<input type="number" inputMode="decimal" min="0" step="0.01" value={fields.advance} onChange={(event) => setFields({ ...fields, advance: event.target.value })} /></label><label>Balance due (automatic)<input value={balancePreview} readOnly aria-live="polite" /></label></>}</div><p className="rate-adjustment-note">Date and advance can be entered manually. Balance due automatically equals invoice total (A+B+C) minus advance received.</p></section>{error && <p className="quote-error" role="alert">{error}</p>}<button className="generate-quote" type="submit" disabled={Boolean(adjustmentError)}>{mode === "invoice" ? "Generate Invoice" : "Generate Estimate"}</button>
  </form>;
}
