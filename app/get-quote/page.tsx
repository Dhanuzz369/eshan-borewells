import type { Metadata } from "next";
import Link from "next/link";
import { Droplets, Phone } from "lucide-react";
import { BUSINESS_ADDRESS, BUSINESS_PHONE, WHATSAPP_NUMBER } from "../business-config";
import { QuoteWizard } from "./quote-wizard";
import "./quote.css";

export const metadata: Metadata = {
  title: "Internal Quotation Tool | Eshan Borewells",
  description: "Internal quotation workspace for Eshan Borewells.",
  robots: { index: false, follow: false },
};
export default function GetQuotePage() {
  return <main className="quote-page">
    <header className="quote-header shell"><Link href="/" className="brand" aria-label="Eshan Borewells home"><span className="brand-mark"><Droplets size={23} strokeWidth={2.5} /></span><span className="brand-name">ESHAN<span>BOREWELLS</span></span></Link><a href={`tel:${BUSINESS_PHONE.replace(/[^+\d]/g, "")}`}><Phone size={16} />{BUSINESS_PHONE}</a></header>
    <div className="quote-intro shell"><span className="section-label">YOUR SITE. YOUR REQUIREMENTS.</span><h1>A clearer start <br />to your <em>borewell project.</em></h1><p>Tell us a little about your site. Build your scope, review the estimate and talk it through with our team.</p><div className="quote-trust"><span>25+ years of experience</span><span>Bengaluru & nearby areas</span></div></div>
    <QuoteWizard phone={BUSINESS_PHONE} whatsapp={WHATSAPP_NUMBER} address={BUSINESS_ADDRESS} />
    <footer className="quote-footer shell"><span>Eshan Borewells · {BUSINESS_ADDRESS}</span><Link href="/">Back to the website</Link></footer>
  </main>;
}
