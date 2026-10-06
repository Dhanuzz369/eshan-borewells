"use client";

import { useEffect, useRef, useState, type FormEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowLeft, ArrowRight, Check, ChevronDown, Download, Droplets, MapPin, MessageCircle, Phone, Settings2, Truck, Wrench } from "lucide-react";
import { accessOptions, casingDiameters, casingMaterials, diameterOptions, disclaimer, extras, localities, machineOptions, propertyOptions, pumpCapacities, pumpTypes, serviceOptions } from "@/lib/quote/config";
import { calculateQuote, formatRange, quotePrice, type Quote } from "@/lib/quote/calculate";
import { customerSchema, initialInput, quoteInputSchema, submissionSchema, type QuoteInput } from "@/lib/quote/schema";

type Result = { quote: Quote | null; quoteNumber: string; capturedAt: string; delivery: "delivered" | "pending" | "not_saved" };
type Props = { phone: string; whatsapp: string; address: string };
const steps = ["Site & service requirements", "Your details & quote"];
const sessionKey = "eshan-pending-quote";

function Choices({ label, options, value, onChange }: { label: string; options: readonly { value: string; label: string; description?: string }[]; value: string; onChange: (value: string) => void }) {
  return <fieldset className="quote-options"><legend className="quote-sr-only">{label}</legend>{options.map((option) => <label className={`quote-option ${option.value === value ? "selected" : ""}`} key={option.value}><input type="radio" name={label} value={option.value} checked={option.value === value} onChange={() => onChange(option.value)} /><span><strong>{option.label}</strong>{option.description && <small>{option.description}</small>}</span><span className="quote-option-mark" aria-hidden="true">{option.value === value && <Check size={14} />}</span></label>)}</fieldset>;
}
const decisions = [{ value: "yes", label: "Yes" }, { value: "no", label: "No" }, { value: "unsure", label: "Not Sure" }];
const textOptions = (values: readonly string[]) => values.map((value) => ({ value, label: value }));

export function QuoteWizard({ phone, whatsapp, address }: Props) {
  const [input, setInput] = useState<QuoteInput>(initialInput);
  const [step, setStep] = useState(0);
  const [customer, setCustomer] = useState({ name: "", mobile: "", email: "" });
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [pdfBusy, setPdfBusy] = useState(false);
  const requestId = useRef("");
  const heading = useRef<HTMLHeadingElement>(null);
  const website = useRef<HTMLInputElement>(null);
  const reducedMotion = useReducedMotion();
  const quote = calculateQuote(input);
  const drilling = input.service === "new" || input.service === "complete";
  const service = serviceOptions.find((s) => s.value === input.service)!;
  const phoneHref = `tel:${phone.replace(/[^+\d]/g, "")}`;
  const displayedQuote = result?.quote || quote;
  const price = quotePrice(displayedQuote);
  const total = formatRange(price.min, price.max);
  function update<K extends keyof QuoteInput>(key: K, value: QuoteInput[K]) { setInput((old) => ({ ...old, [key]: value })); setError(""); requestId.current = ""; }

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
    try {
      const stored = JSON.parse(sessionStorage.getItem(sessionKey) || "null");
      if (stored && Date.now() - stored.savedAt < 86400000 && submissionSchema.safeParse(stored).success) {
        setInput(stored.input); setCustomer(stored.customer); setConsent(true); requestId.current = stored.requestId; setStep(1);
        setError("Your previous enquiry is ready to retry. Review your details below.");
      } else sessionStorage.removeItem(sessionKey);
    } catch { /* Browser storage may be disabled. Keep the in-memory form usable. */ }
    });
    return () => cancelAnimationFrame(frame);
  }, []);
  function focusHeading() {
    heading.current?.focus({ preventScroll: true });
    heading.current?.scrollIntoView({ behavior: "instant", block: "start" });
  }
  useEffect(() => { if (result) heading.current?.focus(); }, [result]);

  function advance() {
    if (!input.locality.trim() || !input.city.trim() || !/^(?:[1-9]\d{5})?$/.test(input.pin)) {
      setError("Enter your locality and city. If provided, the PIN code must have six digits.");
      document.querySelector<HTMLInputElement>(!input.locality.trim() ? '[autocomplete="address-level3"]' : !input.city.trim() ? '[autocomplete="address-level2"]' : '[autocomplete="postal-code"]')?.focus();
      return;
    }
    const parsed = quoteInputSchema.safeParse(input);
    if (!parsed.success) { setError(`Please check your site details: ${parsed.error.issues[0].message}`); return; }
    setError(""); setStep(1);
  }
  function selectService(value: string) {
    update("service", value as QuoteInput["service"]);
    setInput((old) => ({ ...old, casing: { ...old.casing, required: value === "pump" ? "no" : "unsure" }, pump: { ...old.pump, required: value === "pump" || value === "complete" ? "unsure" : "no" }, additionalServices: [] }));
  }
  function toggleExtra(value: QuoteInput["additionalServices"][number]) {
    const adding = !input.additionalServices.includes(value);
    update("additionalServices", adding ? [...input.additionalServices, value] : input.additionalServices.filter((x) => x !== value));
    if (adding && value === "casing" && input.casing.required === "no") setInput((old) => ({ ...old, casing: { ...old.casing, required: "unsure" } }));
  }
  async function submit(event: FormEvent) {
    event.preventDefault();
    if (!consent) { setError("Please agree to be contacted about your enquiry before generating your quote."); return; }
    const parsedCustomer = customerSchema.safeParse({ ...customer, consent });
    const parsedInput = quoteInputSchema.safeParse(input);
    if (!parsedCustomer.success) { setError(parsedCustomer.error.issues[0].message); return; }
    if (!parsedInput.success) { setError(parsedInput.error.issues[0].message); return; }
    if (busy) return;
    setBusy(true); setError("");
    requestId.current ||= crypto.randomUUID();
    const payload = { input: parsedInput.data, customer: parsedCustomer.data, requestId: requestId.current, website: website.current?.value || "" };
    try { sessionStorage.setItem(sessionKey, JSON.stringify({ ...payload, savedAt: Date.now() })); } catch { /* In-memory form remains available. */ }
    try {
      let response: Response | undefined;
      for (let attempt = 0; attempt < 3; attempt++) {
        try {
          response = await fetch("/api/quotes", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(payload), signal: AbortSignal.timeout(28000) });
          if (response.status < 500) break;
        } catch { /* Retry transient connection errors with the same request ID. */ }
        if (attempt < 2) await new Promise((resolve) => setTimeout(resolve, 1000 * (attempt + 1)));
      }
      if (!response) throw new Error("Your connection was interrupted. Your details are still here. Please retry or use WhatsApp below.");
      const data = await response.json() as Result & { error?: string };
      if (!response.ok) throw new Error(data.error || "Please retry, call or WhatsApp us.");
      setResult(data);
      if (data.delivery !== "not_saved") { try { sessionStorage.removeItem(sessionKey); } catch {} }
    } catch (e) { setError(e instanceof Error ? e.message : "Please retry or contact us."); }
    finally { setBusy(false); }
  }
  const message = `Hello Eshan Borewells, I would like to discuss my online borewell estimate.\n${result ? `Quote No: ${result.quoteNumber}\n` : ""}Name: ${customer.name}\nMobile: ${customer.mobile}\nLocation: ${input.locality}, ${input.city}${input.pin ? ` ${input.pin}` : ""}\nService: ${service.label}\nEstimated depth: ${drilling ? input.depth ? `${input.depth} ft` : "Not sure" : "Not applicable"}\nPump: ${input.pump.required === "yes" ? `${input.pump.type}, ${input.pump.hp}` : input.pump.required}\n${price.label}: ${total}${price.full ? "" : " (excludes unpriced items and unconfirmed taxes)"}\nPlease help me confirm the requirements and quotation.`;
  const whatsappHref = `https://wa.me/${whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;

  async function download() {
    if (!result) return;
    setPdfBusy(true); setError("");
    try { const { downloadQuote } = await import("./quote-pdf"); await downloadQuote({ result, input, customer, phone, address }); }
    catch { setError("The PDF could not be prepared. Please try again, or send your quote on WhatsApp."); }
    finally { setPdfBusy(false); }
  }
  function restart() { setResult(null); setInput(initialInput); setCustomer({ name: "", mobile: "", email: "" }); setConsent(false); setStep(0); setError(""); requestId.current = ""; try { sessionStorage.removeItem(sessionKey); } catch {} }

  const summary = <><div className="quote-summary-top"><span className="section-label">{result ? "YOUR QUOTE" : "LIVE SCOPE & ESTIMATE"}</span><Settings2 size={20} /></div><p className="quote-price-label">{price.label}</p><strong className="quote-total">{total}</strong><p className="quote-estimate-note">{price.full ? "Estimated project total, subject to site assessment." : price.min !== null ? "Calculated from the approved rates for your selections. This is not an all-inclusive project total." : "Rates for your selected machine or service have not been supplied yet. Our team will confirm these prices."}</p>{!price.full && price.pending.length > 0 && <p className="quote-exclusions"><strong>Not included in the amount above:</strong> {price.pending.join(", ")}. These are not free or included; they require a separate price confirmation.</p>}<dl className="quote-summary-facts"><div><dt>Service</dt><dd>{service.label}</dd></div><div><dt>Site</dt><dd>{input.locality || "Location to be added"}{input.locality && `, ${input.city}`}</dd></div>{drilling && <div><dt>Depth</dt><dd>{input.depth ? `${input.depth} ft` : "Site assessment"}</dd></div>}<div><dt>Equipment</dt><dd>{quote.machine}</dd></div></dl><div className="quote-breakdown">{(result?.quote || quote).breakdown.map((line) => <div key={line.key}><span>{line.label}<small>{line.detail}</small></span><strong>{formatRange(line.min, line.max)}</strong></div>)}<div><span>Tax</span><strong>{quote.taxPercent === null ? "To be confirmed" : `${quote.taxPercent}%`}</strong></div></div>{(result?.quote || quote).drillingSlabs.length > 0 && <details className="quote-slab-details" open={!!result}><summary>View drilling depth slabs</summary>{(result?.quote || quote).drillingSlabs.map((slab) => <div key={slab.to}><span>{slab.from}–{slab.to} ft<br /><small>{slab.feet} ft × {slab.rate === null ? "rate pending" : `₹${slab.rate}/ft`}</small></span><strong>{formatRange(slab.amount, slab.amount)}</strong></div>)}</details>}<p className="quote-footnote">Final machine selection and pricing depend on an actual site assessment.</p></>;

  if (result) return <div className="quote-workspace quote-result-workspace shell"><section className="quote-result"><span className="quote-complete-icon"><Check size={28} /></span><span className="section-label">YOUR PROJECT, AT A GLANCE</span><h2 ref={heading} tabIndex={-1}>Your detailed quotation.</h2><p className="quote-reference">{result.quoteNumber}<br />{new Intl.DateTimeFormat("en-IN", { dateStyle: "medium", timeStyle: "short", timeZone: "Asia/Kolkata" }).format(new Date(result.capturedAt))} IST</p><p className={`quote-delivery ${result.delivery === "not_saved" ? "unsaved" : ""}`} role="status">{result.delivery === "delivered" ? "Your enquiry has been received. Our team can follow up using the details you shared." : result.delivery === "pending" ? "Your enquiry is saved. We are finishing delivery to our team; you can call or WhatsApp us now." : "Your enquiry has not been sent. Please share it on WhatsApp or call us so our team can follow up."}</p><dl className="quote-result-facts"><div><dt>Prepared for</dt><dd>{customer.name}</dd></div><div><dt>Location</dt><dd>{input.locality}, {input.city}</dd></div><div><dt>Property</dt><dd>{input.property}</dd></div><div><dt>Pump</dt><dd>{input.pump.required === "yes" ? `${input.pump.type} · ${input.pump.hp}` : input.pump.required === "no" ? "Supply not requested" : "Recommendation required"}</dd></div></dl><section className="quote-result-pricing" aria-label="Detailed quotation">{summary}</section><div className="quote-result-actions"><a className="quote-primary" href={phoneHref}><Phone size={18} />Talk to an Eshan Borewells Expert</a><a className="quote-secondary" href={whatsappHref} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} />WhatsApp Quote</a><a className="quote-secondary" href={`${whatsappHref}${encodeURIComponent("\nI would like to book a site visit. Please confirm availability.")}`} target="_blank" rel="noopener noreferrer"><MapPin size={18} />Book a Site Visit</a><button className="quote-secondary" onClick={download} disabled={pdfBusy}><Download size={18} />{pdfBusy ? "Preparing PDF…" : "Download Quote PDF"}</button><button className="quote-restart" onClick={restart}>Start again <ArrowRight size={16} /></button></div>{error && <p role="alert" className="quote-error">{error}</p>}<p className="quote-disclaimer">{disclaimer}</p></section></div>;

  return <div className="quote-workspace shell"><section className="quote-form-panel"><div className="quote-progress"><div><span>STEP {step + 1} OF 2</span><span>{steps[step]}</span></div><progress aria-label="Quote progress" value={step + 1} max={2} /></div><form onSubmit={step === 1 ? submit : (event) => { event.preventDefault(); advance(); }} noValidate><AnimatePresence mode="wait" initial={false}><motion.div className="quote-step" key={step} initial={{ opacity: 0, transform: reducedMotion ? "none" : "translateY(8px)" }} animate={{ opacity: 1, transform: "translateY(0)" }} exit={{ opacity: 0 }} transition={{ duration: reducedMotion ? 0 : 0.2, ease: [0.23, 1, 0.32, 1] }} onAnimationComplete={focusHeading}>
    <h2 ref={heading} tabIndex={-1}>{step === 0 ? "Tell us about your site." : "Get your quote."}</h2>
    <p className="quote-step-description">{step === 0 ? "All your requirements, in one place. Choose Not Sure wherever you need our guidance." : "Add your contact details to generate your estimate and download a PDF."}</p>
    {step === 0 && <section className="quote-question" aria-labelledby="quote-question-0"><Droplets className="quote-step-icon" /><h3 id="quote-question-0">What service do you need?</h3><p className="quote-step-description">Start with the work you have in mind.</p><Choices label="Service" options={serviceOptions} value={input.service} onChange={selectService} /></section>}
    {step === 0 && <section className="quote-question" aria-labelledby="quote-question-1"><MapPin className="quote-step-icon" /><h3 id="quote-question-1">Where is your site located?</h3><p className="quote-step-description">Bengaluru and nearby areas, generally within about 100 km. We will confirm availability for your location.</p><div className="quote-fields"><label>Area / locality<input value={input.locality} onChange={(e) => update("locality", e.target.value)} maxLength={120} list="quote-localities" autoComplete="address-level3" placeholder="e.g. Thalaghatpura" required /><datalist id="quote-localities">{localities.map((area) => <option key={area}>{area}</option>)}</datalist></label><label>City<input value={input.city} onChange={(e) => update("city", e.target.value)} maxLength={120} autoComplete="address-level2" required /></label><label>PIN code <span>(optional)</span><input value={input.pin} onChange={(e) => update("pin", e.target.value)} maxLength={6} inputMode="numeric" autoComplete="postal-code" placeholder="6 digits" /></label></div></section>}
    {step === 0 && <section className="quote-question" aria-labelledby="quote-question-2"><h3 id="quote-question-2">What is the borewell for?</h3><p className="quote-step-description">This helps us understand how the water will be used.</p><Choices label="Property" options={textOptions(propertyOptions)} value={input.property} onChange={(v) => update("property", v as QuoteInput["property"])} /></section>}
    {step === 0 && <section className="quote-question" aria-labelledby="quote-question-3"><Truck className="quote-step-icon" /><h3 id="quote-question-3">How easy is it to reach your site?</h3><p className="quote-step-description">Think about the road, gate width and space around the work area.</p><Choices label="Access" options={accessOptions} value={input.access} onChange={(v) => { update("access", v as QuoteInput["access"]); update("machine", v === "open" ? "Sensor Rig" : v === "narrow" ? "Compact Rig" : v === "restricted" ? "Robo Rig" : "Not Sure"); }} /><div className="quote-fields"><label>Provisional machine<select value={input.machine} onChange={(e) => update("machine", e.target.value as QuoteInput["machine"])}>{machineOptions.map((m) => <option key={m}>{m}</option>)}</select></label></div><p className="quote-help"><strong>Suggested: {quote.machine}.</strong> Final equipment selection depends on a site assessment.</p></section>}
    {step === 0 && drilling && <section className="quote-question" aria-labelledby="quote-question-4"><h3 id="quote-question-4">How deep do you expect the borewell to be?</h3><p className="quote-step-description">Use a planning depth if you have one. Groundwater depth cannot be predicted here.</p><label className="quote-depth" htmlFor="depth">{input.depth ?? "—"}<span>{input.depth === null ? "assessment required" : "feet · estimated depth"}</span></label><input id="depth" className="quote-slider" type="range" min={50} max={2000} step={10} value={input.depth ?? 500} aria-label="Estimated depth in feet" onChange={(e) => update("depth", Number(e.target.value))} /><div className="quote-range-labels"><span>50 ft</span><span>2,000 ft</span></div><div className="quote-depth-presets">{[300, 400, 500, 600, 800, 1000, 1500, 2000].map((d) => <button type="button" aria-pressed={input.depth === d} key={d} onClick={() => update("depth", d)}>{d} ft</button>)}</div><button className={`quote-uncertain ${input.depth === null ? "selected" : ""}`} type="button" aria-pressed={input.depth === null} onClick={() => update("depth", null)}>I’m not sure — I need a site assessment</button></section>}
    {step === 0 && drilling && <section className="quote-question" aria-labelledby="quote-question-5"><h3 id="quote-question-5">What borewell diameter do you need?</h3><p className="quote-step-description">Our team will confirm the exact size and equipment before drilling.</p><Choices label="Diameter" options={textOptions(diameterOptions)} value={input.diameter} onChange={(v) => update("diameter", v as QuoteInput["diameter"])} /></section>}
    {step === 0 && <section className="quote-question" aria-labelledby="quote-question-6"><h3 id="quote-question-6">Do you need casing installation?</h3><p className="quote-step-description">Casing requirements depend on ground conditions and the borewell.</p><Choices label="Casing required" options={decisions} value={input.casing.required} onChange={(v) => update("casing", { ...input.casing, required: v as "yes" | "no" | "unsure" })} />{input.casing.required === "yes" && <div className="quote-fields"><label>Casing material<select value={input.casing.material} onChange={(e) => update("casing", { ...input.casing, material: e.target.value as QuoteInput["casing"]["material"] })}>{casingMaterials.map((m) => <option key={m}>{m}</option>)}</select></label><label>Casing diameter<select value={input.casing.diameter} onChange={(e) => update("casing", { ...input.casing, diameter: e.target.value as QuoteInput["casing"]["diameter"] })}>{casingDiameters.map((d) => <option key={d}>{d}</option>)}</select></label><label>Estimated casing depth (ft)<input type="number" min={1} max={2000} value={input.casing.depth} onChange={(e) => update("casing", { ...input.casing, depth: Number(e.target.value) })} /></label></div>}</section>}
    {step === 0 && <section className="quote-question" aria-labelledby="quote-question-7"><Wrench className="quote-step-icon" /><h3 id="quote-question-7">Do you need a pump?</h3><p className="quote-step-description">Choose “No” if you already have a pump. Installation is still included when you selected a pump installation service.</p><Choices label="Pump required" options={decisions} value={input.pump.required} onChange={(v) => update("pump", { ...input.pump, required: v as "yes" | "no" | "unsure" })} />{input.pump.required === "yes" && <div className="quote-fields"><label>Pump type<select value={input.pump.type} onChange={(e) => update("pump", { ...input.pump, type: e.target.value as QuoteInput["pump"]["type"] })}>{pumpTypes.map((t) => <option key={t}>{t}</option>)}</select></label><label>Pump capacity<select value={input.pump.hp} onChange={(e) => update("pump", { ...input.pump, hp: e.target.value as QuoteInput["pump"]["hp"] })}>{pumpCapacities.map((hp) => <option key={hp}>{hp}</option>)}</select></label></div>}{(input.pump.required !== "no" || input.service === "pump" || input.service === "complete") && <div className="quote-fields"><label>Expected pump installation depth (ft) <span>(optional)</span><input type="number" min={1} max={2000} placeholder="Leave blank if unsure" value={input.pump.installationDepth ?? ""} onChange={(e) => update("pump", { ...input.pump, installationDepth: e.target.value === "" ? null : Number(e.target.value) })} /></label><label className="quote-check"><input type="checkbox" checked={input.pump.panel} onChange={(e) => update("pump", { ...input.pump, panel: e.target.checked })} />Starter / control panel required</label><label className="quote-check"><input type="checkbox" checked={input.pump.electrical} onChange={(e) => update("pump", { ...input.pump, electrical: e.target.checked })} />Include electrical work</label></div>}<p className="quote-help"><strong>Not sure which pump is right?</strong> Our team can recommend one based on borewell depth, water level, usage and site requirements. HP is never selected automatically.</p></section>}
    {step === 0 && <section className="quote-question" aria-labelledby="quote-question-8"><h3 id="quote-question-8">Anything else you need?</h3><p className="quote-step-description">Optional. Only selected services are added to the scope.</p><div className="quote-extras">{extras.map((extra) => <label className="quote-check" key={extra.value}><input type="checkbox" checked={input.additionalServices.includes(extra.value)} onChange={() => toggleExtra(extra.value)} />{extra.label}</label>)}</div><p className="quote-help">Pump installation and casing are counted once when already included above. Any additional scope will be confirmed with you.</p></section>}
    {step === 1 && <section className="quote-question" aria-labelledby="quote-question-9"><h3 id="quote-question-9">Your contact details</h3><p className="quote-step-description">Your site scope is ready. Add your details so our team can help confirm pricing.</p><div className="quote-fields"><label>Full name<input autoComplete="name" value={customer.name} onChange={(e) => { setCustomer({ ...customer, name: e.target.value }); requestId.current = ""; }} maxLength={100} required /></label><label>Mobile number<input type="tel" inputMode="tel" autoComplete="tel" placeholder="10-digit Indian mobile" value={customer.mobile} onChange={(e) => { setCustomer({ ...customer, mobile: e.target.value }); requestId.current = ""; }} maxLength={25} required /></label><label>Email address <span>(optional)</span><input type="email" autoComplete="email" value={customer.email} onChange={(e) => { setCustomer({ ...customer, email: e.target.value }); requestId.current = ""; }} maxLength={150} /></label><label className="quote-check quote-consent"><input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} required />By submitting your details, you agree to be contacted by Eshan Borewells regarding your enquiry.</label></div><div className="lead-honeypot" aria-hidden="true"><label>Website<input ref={website} tabIndex={-1} autoComplete="off" /></label></div></section>}
    </motion.div></AnimatePresence>{error && <p className="quote-error" role="alert">{error}</p>}<div className="quote-controls">{step > 0 && <button type="button" className="quote-back" disabled={busy} onClick={() => { setStep(0); setError(""); }}><ArrowLeft size={17} />Back</button>}<button type="submit" className="quote-primary" disabled={busy}>{busy ? "Sending your details…" : step === 1 ? "Generate my quote" : "Continue to your details"}<ArrowRight size={18} /></button></div></form><div className="quote-support"><span>Prefer a conversation?</span><a href={phoneHref}><Phone size={14} />Call us</a><a href={whatsappHref} target="_blank" rel="noopener noreferrer"><MessageCircle size={15} />WhatsApp</a></div></section><aside className="quote-summary quote-desktop-summary">{summary}</aside><details className="quote-mobile-summary"><summary><span><small>{price.label.toUpperCase()}</small><strong>{total}</strong></span><span>Details <ChevronDown size={16} /></span></summary><div>{summary}</div></details></div>;
}
