"use client";

import Image from "next/image";
import { useState, type ReactNode } from "react";
import {
  AlertCircle, ArrowLeft, Building2, CalendarDays, Calculator, CheckCircle2,
  Clock3, Download, Droplets, Gauge, MapPin, MessageCircle, Phone, ShieldCheck,
  UsersRound, Wrench,
} from "lucide-react";
import { disclaimer } from "@/lib/quote/config";
import { formatRange } from "@/lib/quote/calculate";
import type { QuotationData } from "@/lib/quote/document";

type Props = {
  quotation: QuotationData;
  phone: string;
  whatsapp: string;
  address: string;
  delivery: "delivered" | "pending" | "not_saved";
  onEdit: () => void;
};

function SectionHeading({ icon, title, subtitle }: { icon: ReactNode; title: string; subtitle: string }) {
  return <header className="quotation-section-heading"><span>{icon}</span><div><h2>{title}</h2><p>{subtitle}</p></div></header>;
}

export function QuoteResult({ quotation, phone, whatsapp, address, delivery, onEdit }: Props) {
  const [pdfBusy, setPdfBusy] = useState(false);
  const [pdfError, setPdfError] = useState("");
  const phoneHref = `tel:${phone.replace(/[^+\d]/g, "")}`;
  const message = `Hello Eshan Borewells,\n\nI have generated a borewell quotation.\n\nQuote No: ${quotation.quoteNumber}\nName: ${quotation.customerName}\nLocation: ${quotation.location}\nService: ${quotation.service}\nMachine: ${quotation.machineType}\nEstimated Depth: ${quotation.depth}\nEstimated Quote: ${quotation.estimatedTotalFormatted}\nValid Until: ${quotation.validUntil}\n\nI would like to discuss the quotation.`;
  const whatsappHref = `https://wa.me/${whatsapp.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
  async function download() {
    setPdfBusy(true);
    try {
      const { downloadQuote } = await import("./quote-pdf");
      await downloadQuote({ quotation, phone, address });
    } catch {
      setPdfError("The PDF could not be prepared. Please try again.");
    } finally {
      setPdfBusy(false);
    }
  }

  return <div className="quote-result-page">
    <section className="quotation-masthead">
      <Image src="/hero-drilling.webp" alt="Eshan Borewells drilling rig at a project site" fill priority sizes="100vw" quality={75} />
      <div className="quotation-masthead-shade" />
      <div className="shell quotation-masthead-content">
        <div className="quotation-brand"><strong>ESHAN</strong><span>BOREWELLS</span><i /> <p>Reliable water solutions<br />for a better tomorrow</p></div>
        <div className="quotation-trust" aria-label="Eshan Borewells experience">
          <span><Droplets size={18} /><b>25+</b><small>Years Experience</small></span>
          <span><ShieldCheck size={18} /><b>99%</b><small>Water Detection</small></span>
          <span><UsersRound size={18} /><b>10,000+</b><small>Borewell Sites</small></span>
          <span><MapPin size={18} /><b>Bengaluru</b><small>& Surrounding Areas</small></span>
        </div>
      </div>
    </section>

    <main className="quotation-document shell">
      <section className="quotation-overview">
        <div className="quotation-title-row">
          <div><span className="quotation-title-icon"><Wrench size={21} /></span><div><h1>Borewell Quotation</h1><p>Estimated project cost based on the details provided.</p></div><b className="quotation-number">{quotation.quoteNumber}</b></div>
          <div className="quotation-meta"><CalendarDays size={17} /><span><small>Quotation date</small><b>{quotation.quoteDate}</b></span><span><small>Valid for {quotation.validityDays} days</small><b>{quotation.validUntil}</b></span></div>
          <div className="quotation-tools"><button type="button" onClick={onEdit}><ArrowLeft size={16} />Edit</button><button type="button" onClick={download} disabled={pdfBusy}><Download size={16} />{pdfBusy ? "Preparing" : "Download PDF"}</button></div>
        </div>

        <div className="quotation-summary-grid">
          <div className="quotation-customer"><span><MapPin size={25} /></span><div><small>Customer and location</small><strong>{quotation.customerName}</strong><p>{quotation.mobile}<br />{quotation.location}</p></div></div>
          <div className="quotation-summary-item"><Droplets size={24} /><span><small>Estimated depth</small><strong>{quotation.depth}</strong><p>{quotation.propertyType}</p></span></div>
          <div className="quotation-summary-item"><Gauge size={24} /><span><small>Service</small><strong>{quotation.service}</strong><p>{quotation.machineType}</p></span></div>
          <div className="quotation-summary-item"><Building2 size={24} /><span><small>Site access</small><strong>{quotation.accessType}</strong>{quotation.pumpDetails && <p>{quotation.pumpDetails}</p>}</span></div>
          <div className="quotation-summary-total"><Calculator size={25} /><span><small>Estimated total</small><strong>{quotation.estimatedTotalFormatted}</strong><p>Drilling and configured project costs</p></span></div>
        </div>
      </section>

      <div className="quotation-cost-grid">
        <section className="quotation-panel quotation-drilling">
          <SectionHeading icon={<Wrench size={22} />} title="Drilling Cost Structure" subtitle="Rates are based on depth range and selected machine type." />
          <div className="quotation-table">
            <div className="quotation-table-head"><span>Depth range</span><span>Rate (₹/ft)</span><span>Amount (₹)</span></div>
            {quotation.drillingBreakdown.map((slab) => <div className="quotation-table-row" key={slab.to}><strong>{slab.from} - {slab.to} ft</strong><span>{slab.rate === null ? "To confirm" : `₹${slab.rate}`}</span><b>{formatRange(slab.amount, slab.amount)}</b></div>)}
            <div className="quotation-table-total"><span>Drilling subtotal</span><strong>{formatRange(quotation.drillingSubtotal, quotation.drillingSubtotal)}</strong></div>
          </div>
        </section>

        <aside className="quotation-side">
          <section className="quotation-panel quotation-fixed">
            <SectionHeading icon={<Wrench size={22} />} title="Fixed Operational Costs" subtitle="These are one-time operational costs." />
            <div className="quotation-table compact">{quotation.fixedOperationalCosts.map((line) => <div className="quotation-table-row" key={line.key}><span>{line.label}</span><b>{formatRange(line.min, line.max)}</b></div>)}<div className="quotation-table-total"><span>Subtotal (Fixed)</span><strong>{formatRange(quotation.fixedSubtotal, quotation.fixedSubtotal)}</strong></div></div>
          </section>
          <section className="quotation-total-card"><Calculator size={26} /><div><span>Estimated Total</span><p>Drilling + configured project costs</p><strong>{quotation.estimatedTotalFormatted}</strong></div></section>
          <div className="quotation-actions"><a href={whatsappHref} target="_blank" rel="noopener noreferrer"><MessageCircle size={19} />Confirm / Discuss on WhatsApp</a><a href={phoneHref}><Phone size={18} />Call Eshan Borewells</a></div>
        </aside>
      </div>

      {quotation.materialsServices.length > 0 && <section className="quotation-panel quotation-selected"><SectionHeading icon={<CheckCircle2 size={22} />} title="Selected Materials and Services" subtitle="Items included or pending confirmation in this quotation." /><div>{quotation.materialsServices.map((line) => <span key={line.key}><b>{line.label}</b><strong>{formatRange(line.min, line.max)}</strong></span>)}</div></section>}

      <section className="quotation-panel quotation-materials">
        <SectionHeading icon={<AlertCircle size={22} />} title="Variable Materials" subtitle="Not included unless selected or used. Final cost depends on actual site usage." />
        <div className="quotation-material-grid">{quotation.variableMaterials.map((material) => <div key={material.label}><span>{material.label}</span><b>₹{material.rate}/{material.unit}</b></div>)}</div>
      </section>

      <section className="quotation-notes">
        <article><AlertCircle size={24} /><div><h2>Important Note</h2><p>{disclaimer}</p></div></article>
        <article><ShieldCheck size={24} /><div><h2>Experience and Quality</h2><p>25+ years in the industry, with site-aware drilling and experienced operators across Bengaluru.</p></div></article>
        <article><Clock3 size={24} /><div><h2>Quotation Validity</h2><p>Valid for {quotation.validityDays} days from {quotation.quoteDate}. Valid until {quotation.validUntil}.</p></div></article>
      </section>

      {pdfError && <p className="quote-error" role="alert">{pdfError}</p>}
      <p className={`quote-delivery ${delivery === "not_saved" ? "unsaved" : ""}`} role="status">{delivery === "delivered" ? "Your enquiry has been received by our team." : delivery === "pending" ? "Your enquiry is safely queued for delivery to our team." : "Your enquiry has not been sent. Please call or share this quotation on WhatsApp."}</p>
      <footer className="quotation-footer"><div><strong>ESHAN</strong><span>BOREWELLS</span></div><p><MapPin size={15} />{address}</p><p><Phone size={15} />{phone}</p><small>{quotation.quoteNumber} · Valid until {quotation.validUntil}</small></footer>
    </main>
  </div>;
}
