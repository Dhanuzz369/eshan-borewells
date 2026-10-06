"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { ArrowLeft, Check, Download, Droplets, FileText, MapPin, MessageCircle, Phone, Settings2, ShieldCheck } from "lucide-react";
import { accessOptions, casingDiameters, casingMaterials, diameterOptions, disclaimer, extras, localities, propertyOptions, pumpCapacities, pumpTypes, serviceOptions } from "@/lib/quote/config";
import { calculateQuote, formatRange, quotePrice, type Quote } from "@/lib/quote/calculate";
import { customerSchema, initialInput, quoteInputSchema, submissionSchema, type QuoteInput } from "@/lib/quote/schema";

type Result = { quote: Quote | null; quoteNumber: string; capturedAt: string; delivery: "delivered" | "pending" | "not_saved" };
type Props = { phone: string; whatsapp: string; address: string };
const sessionKey = "eshan-pending-quote";
const decisions = [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }, { value: "unsure", label: "Not Sure" }];

function Choices({ label, options, value, onChange, compact = false }: { label: string; options: readonly { value: string; label: string; description?: string }[]; value: string; onChange: (value: string) => void; compact?: boolean }) {
  return <fieldset className={`quote-options ${compact ? "compact" : ""}`}><legend className="quote-sr-only">{label}</legend>{options.map((option) => <label className={`quote-option ${option.value === value ? "selected" : ""}`} key={option.value}><input type="radio" name={label} checked={option.value === value} onChange={() => onChange(option.value)} /><span><strong>{option.label}</strong>{option.description && !compact && <small>{option.description}</small>}</span><span className="quote-option-mark">{option.value === value && <Check size={13} />}</span></label>)}</fieldset>;
}
function SectionTitle({ icon, children }: { icon: ReactNode; children: ReactNode }) { return <div className="quote-section-title"><span>{icon}</span><h2>{children}</h2></div>; }

export function QuoteWizard({ phone, whatsapp, address }: Props) {
  const [input, setInput] = useState<QuoteInput>(initialInput);
  const [customer, setCustomer] = useState({ name: "", mobile: "", email: "" });
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [pdfBusy, setPdfBusy] = useState(false);
  const requestId = useRef("");
  const website = useRef<HTMLInputElement>(null);
  const reducedMotion = useReducedMotion();
  const quote = calculateQuote(input);
  const drilling = input.service === "new" || input.service === "complete";
  const displayedQuote = result?.quote || quote;
  const price = quotePrice(displayedQuote);
  const total = formatRange(price.min, price.max);
  const service = serviceOptions.find((item) => item.value === input.service)!;
  const phoneHref = `tel:${phone.replace(/[^+\d]/g, "")}`;
  const pendingLines = displayedQuote.breakdown.filter((line) => line.min === null || line.max === null);
  function update<K extends keyof QuoteInput>(key: K, value: QuoteInput[K]) { setInput((old) => ({ ...old, [key]: value })); setError(""); requestId.current = ""; }

  useEffect(() => {
    const frame = requestAnimationFrame(() => { try { const stored = JSON.parse(sessionStorage.getItem(sessionKey) || "null"); if (stored && Date.now() - stored.savedAt < 86400000 && submissionSchema.safeParse(stored).success) { setInput(stored.input); setCustomer(stored.customer); setConsent(true); requestId.current = stored.requestId; setError("Your previous enquiry is ready to generate again."); } else sessionStorage.removeItem(sessionKey); } catch {} });
    return () => cancelAnimationFrame(frame);
  }, []);
  function selectService(value: string) { const selected = value as QuoteInput["service"]; update("service", selected); setInput((old) => ({ ...old, service: selected, casing: { ...old.casing, required: selected === "pump" ? "no" : "unsure" }, pump: { ...old.pump, required: selected === "pump" || selected === "complete" ? "unsure" : "no" } })); }
  function toggleExtra(value: QuoteInput["additionalServices"][number]) { update("additionalServices", input.additionalServices.includes(value) ? input.additionalServices.filter((item) => item !== value) : [...input.additionalServices, value]); }

  async function submit(event: FormEvent) {
    event.preventDefault();
    if (!input.locality.trim()) { setError("Select or enter your site locality."); document.querySelector<HTMLInputElement>('[autocomplete="address-level3"]')?.focus(); return; }
    if (!consent) { setError("Please agree to be contacted about this quotation."); return; }
    const parsedCustomer = customerSchema.safeParse({ ...customer, consent });
    const parsedInput = quoteInputSchema.safeParse(input);
    if (!parsedCustomer.success) { setError(parsedCustomer.error.issues[0].message); return; }
    if (!parsedInput.success) { setError(parsedInput.error.issues[0].message); return; }
    if (busy) return;
    setBusy(true); setError(""); requestId.current ||= crypto.randomUUID();
    const payload = { input: parsedInput.data, customer: parsedCustomer.data, requestId: requestId.current, website: website.current?.value || "" };
    try { sessionStorage.setItem(sessionKey, JSON.stringify({ ...payload, savedAt: Date.now() })); } catch {}
    try {
      let response: Response | undefined;
      for (let attempt = 0; attempt < 3; attempt++) { try { response = await fetch("/api/quotes", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(payload), signal: AbortSignal.timeout(28000) }); if (response.status < 500) break; } catch {} if (attempt < 2) await new Promise((resolve) => setTimeout(resolve, 1000 * (attempt + 1))); }
      if (!response) throw new Error("Your connection was interrupted. Please retry or use WhatsApp.");
      const data = await response.json() as Result & { error?: string };
      if (!response.ok) throw new Error(data.error || "Please retry, call or WhatsApp us.");
      setResult(data); window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" });
      if (data.delivery !== "not_saved") { try { sessionStorage.removeItem(sessionKey); } catch {} }
    } catch (reason) { setError(reason instanceof Error ? reason.message : "Please retry or contact us."); } finally { setBusy(false); }
  }

  const message = `Hello Eshan Borewells, I generated an online borewell quotation.\n${result ? `Quote No: ${result.quoteNumber}\n` : ""}Name: ${customer.name}\nLocation: ${input.locality}, ${input.city}\nService: ${service.label}\nMachine: ${displayedQuote.machine}\nDepth: ${input.depth ? `${input.depth} ft` : "Site assessment required"}\n${price.label}: ${total}\nPlease help me confirm the site requirements and final quotation.`;
  const whatsappHref = `https://wa.me/${whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
  async function download() { if (!result) return; setPdfBusy(true); try { const { downloadQuote } = await import("./quote-pdf"); await downloadQuote({ result, input, customer, phone, address }); } catch { setError("The PDF could not be prepared. Please try again."); } finally { setPdfBusy(false); } }
  function edit() { setResult(null); setError(""); window.scrollTo({ top: 0, behavior: reducedMotion ? "auto" : "smooth" }); }

  if (result) return <motion.div className="quote-result-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <div className="quote-result-toolbar shell"><button type="button" onClick={edit}><ArrowLeft size={16} /> Edit details</button><div><button type="button" onClick={download} disabled={pdfBusy}><Download size={16} />{pdfBusy ? "Preparing" : "PDF"}</button><a href={whatsappHref} target="_blank" rel="noopener noreferrer"><MessageCircle size={16} />WhatsApp</a></div></div>
    <section className="estimate-hero"><div className="shell"><div><span className="estimate-brand">ESHAN</span><small>BOREWELLS QUOTATION</small><p>{result.quoteNumber}</p></div><div className="estimate-total"><small>{price.label}</small><strong>{total}</strong></div><dl><div><dt>Location</dt><dd>{input.locality}</dd></div><div><dt>Service</dt><dd>{service.label} ({displayedQuote.machine})</dd></div><div><dt>Depth</dt><dd>{input.depth ? `${input.depth} ft` : "Assessment required"}</dd></div><div><dt>Prepared for</dt><dd>{customer.name}</dd></div></dl></div></section>
    <div className="estimate-body shell">
      <section><h2>Drilling cost structure</h2><div className="estimate-table"><div className="estimate-table-head"><span>Depth range</span><span>Rate</span><span>Amount</span></div>{displayedQuote.drillingSlabs.map((slab) => <div className="estimate-table-row" key={slab.to}><span>{slab.from} - {slab.to} ft</span><span>{slab.rate === null ? "To confirm" : `₹${slab.rate}/ft`}</span><strong>{formatRange(slab.amount, slab.amount)}</strong></div>)}<div className="estimate-table-total"><strong>Drilling subtotal</strong><strong>{formatRange(displayedQuote.breakdown.find((line) => line.key === "drilling")?.min ?? null, displayedQuote.breakdown.find((line) => line.key === "drilling")?.max ?? null)}</strong></div></div></section>
      <section><h2><ShieldCheck size={17} /> Other project costs</h2><div className="estimate-table estimate-costs">{displayedQuote.breakdown.filter((line) => line.key !== "drilling").map((line) => <div className="estimate-table-row" key={line.key}><span>{line.label}<small>{line.detail}</small></span><strong>{formatRange(line.min, line.max)}</strong></div>)}<div className="estimate-table-row"><span>Tax</span><strong>{displayedQuote.taxPercent === null ? "To be confirmed" : `${displayedQuote.taxPercent}%`}</strong></div></div></section>
      {pendingLines.length > 0 && <section className="estimate-variable"><Settings2 size={20} /><div><h2>Charges requiring site confirmation</h2><p>These items are not included in the displayed amount and are not free. They will be quoted after the site requirements are confirmed.</p><div>{pendingLines.map((line) => <span key={line.key}>{line.label}<b>To confirm</b></span>)}{displayedQuote.taxPercent === null && <span>Applicable tax<b>To confirm</b></span>}</div></div></section>}
      <p className={`quote-delivery ${result.delivery === "not_saved" ? "unsaved" : ""}`} role="status">{result.delivery === "delivered" ? "Your enquiry has been received by our team." : result.delivery === "pending" ? "Your enquiry is safely queued for delivery to our team." : "Your enquiry has not been sent. Please call or share this quotation on WhatsApp."}</p>
      <div className="estimate-actions"><a href={whatsappHref} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} />Confirm booking on WhatsApp</a><a href={phoneHref}><Phone size={18} />Call Eshan Borewells</a></div><p className="estimate-validity">Estimate valid for 30 days. Final pricing is subject to site assessment.</p><p className="quote-disclaimer">{disclaimer}</p>
    </div>
  </motion.div>;

  return <form className="instant-quote-form shell" onSubmit={submit} noValidate>
    <header className="instant-title"><h1>Instant Quotation</h1><p>Secure live pricing for your specific borewell requirements</p></header>
    <section><SectionTitle icon={<Settings2 size={19} />}>Service selection</SectionTitle><p className="field-label">What service do you need today?</p><Choices label="Service" options={serviceOptions} value={input.service} onChange={selectService} compact /></section>
    <section><SectionTitle icon={<MapPin size={19} />}>Contact & location</SectionTitle><div className="quote-fields contact-grid"><label>Full name<input autoComplete="name" value={customer.name} onChange={(event) => setCustomer({ ...customer, name: event.target.value })} placeholder="Your name" required /></label><label>Mobile number<span className="phone-input"><i>🇮🇳 +91</i><input type="tel" inputMode="tel" autoComplete="tel" value={customer.mobile} onChange={(event) => setCustomer({ ...customer, mobile: event.target.value })} placeholder="9876543210" required /></span></label><label className="full-field">Select locality in Bengaluru<input value={input.locality} onChange={(event) => update("locality", event.target.value)} list="quote-localities" autoComplete="address-level3" placeholder="Search or select area" required /><datalist id="quote-localities">{localities.map((area) => <option key={area}>{area}</option>)}</datalist></label><label>City<input value={input.city} onChange={(event) => update("city", event.target.value)} autoComplete="address-level2" /></label><label>PIN code <span>(optional)</span><input value={input.pin} onChange={(event) => update("pin", event.target.value)} inputMode="numeric" maxLength={6} /></label></div></section>
    <section><SectionTitle icon={<FileText size={19} />}>Job details</SectionTitle><div className="quote-fields"><label>Purpose of drilling<select value={input.property} onChange={(event) => update("property", event.target.value as QuoteInput["property"])}>{propertyOptions.map((item) => <option key={item}>{item}</option>)}</select></label></div><p className="field-label">Machine type</p><div className="machine-cards">{[{ name: "Sensor Rig", image: "/large-drilling-rig.webp", note: "Recommended" }, { name: "Robo Rig", image: "/compact-drilling-rig.webp", note: "Advanced" }].map((machine) => <button type="button" key={machine.name} className={input.machine === machine.name ? "selected" : ""} onClick={() => update("machine", machine.name as QuoteInput["machine"])}><strong>{machine.name}</strong><span>{machine.note}</span><Image src={machine.image} alt={`${machine.name} borewell drilling machine`} width={108} height={72} /></button>)}</div>{drilling && <><div className="depth-heading"><span>Estimated depth</span><strong>{input.depth ?? "?"}<small>{input.depth ? "FT" : ""}</small></strong></div><input className="quote-slider" type="range" min={50} max={2000} step={10} value={input.depth ?? 500} aria-label="Estimated depth in feet" onChange={(event) => update("depth", Number(event.target.value))} /><div className="quote-range-labels"><span>50</span><span>2000</span></div><div className="quote-depth-presets">{[300, 600, 900, 1200, 1500, 2000].map((depth) => <button type="button" aria-pressed={input.depth === depth} key={depth} onClick={() => update("depth", depth)}>{depth} FT</button>)}</div>{displayedQuote.drillingSlabs.length > 0 && <div className="rate-preview"><div><span>Depth range</span><span>Rate</span><span>Status</span></div>{displayedQuote.drillingSlabs.map((slab, index) => <div key={slab.to}><span>{slab.from} - {slab.to} ft</span><span>{slab.rate === null ? "To confirm" : `₹${slab.rate}/ft`}</span><span><Check size={13} />{index === displayedQuote.drillingSlabs.length - 1 ? "Current" : "Included"}</span></div>)}</div>}</>}</section>
    <section><SectionTitle icon={<Droplets size={19} />}>Site requirements</SectionTitle><p className="field-label">Site access</p><Choices label="Access" options={accessOptions} value={input.access} onChange={(value) => update("access", value as QuoteInput["access"])} compact />{drilling && <><p className="field-label">Borewell diameter</p><Choices label="Diameter" options={diameterOptions.map((label) => ({ value: label, label }))} value={input.diameter} onChange={(value) => update("diameter", value as QuoteInput["diameter"])} compact /></>}<p className="field-label">Casing required</p><Choices label="Casing required" options={decisions} value={input.casing.required} onChange={(value) => update("casing", { ...input.casing, required: value as "yes" | "no" | "unsure" })} compact />{input.casing.required === "yes" && <div className="quote-fields triple"><label>Material<select value={input.casing.material} onChange={(event) => update("casing", { ...input.casing, material: event.target.value as QuoteInput["casing"]["material"] })}>{casingMaterials.map((item) => <option key={item}>{item}</option>)}</select></label><label>Diameter<select value={input.casing.diameter} onChange={(event) => update("casing", { ...input.casing, diameter: event.target.value as QuoteInput["casing"]["diameter"] })}>{casingDiameters.map((item) => <option key={item}>{item}</option>)}</select></label><label>Depth (ft)<input type="number" min={1} max={2000} value={input.casing.depth} onChange={(event) => update("casing", { ...input.casing, depth: Number(event.target.value) })} /></label></div>}<p className="field-label">Pump required</p><Choices label="Pump required" options={decisions} value={input.pump.required} onChange={(value) => update("pump", { ...input.pump, required: value as "yes" | "no" | "unsure" })} compact />{input.pump.required === "yes" && <div className="quote-fields"><label>Pump type<select value={input.pump.type} onChange={(event) => update("pump", { ...input.pump, type: event.target.value as QuoteInput["pump"]["type"] })}>{pumpTypes.map((item) => <option key={item}>{item}</option>)}</select></label><label>Capacity<select value={input.pump.hp} onChange={(event) => update("pump", { ...input.pump, hp: event.target.value as QuoteInput["pump"]["hp"] })}>{pumpCapacities.map((item) => <option key={item}>{item}</option>)}</select></label></div>}<div className="quote-extras">{extras.map((extra) => <label className="quote-check" key={extra.value}><input type="checkbox" checked={input.additionalServices.includes(extra.value)} onChange={() => toggleExtra(extra.value)} />{extra.label}</label>)}</div></section>
    <label className="quote-check quote-consent"><input type="checkbox" checked={consent} onChange={(event) => setConsent(event.target.checked)} required />By submitting, you agree to be contacted by Eshan Borewells about this quotation.</label><div className="lead-honeypot" aria-hidden="true"><label>Website<input ref={website} tabIndex={-1} autoComplete="off" /></label></div>{error && <p className="quote-error" role="alert">{error}</p>}<button className="generate-quote" type="submit" disabled={busy}>{busy ? "Generating your quotation..." : "Generate Quote"}</button><p className="secure-note"><ShieldCheck size={14} />Your details are used only for this enquiry.</p>
  </form>;
}
