import type { Metadata } from "next";
import Link from "next/link";
import { Droplets, Phone } from "lucide-react";
import { BUSINESS_ADDRESS, BUSINESS_PHONE, WHATSAPP_NUMBER } from "../business-config";
import { QuoteWizard } from "./quote-wizard";
import "./quote.css";

export const metadata: Metadata = {
  title: "Instant Borewell Quote Bangalore | Eshan Borewells",
  description: "Plan your borewell drilling, casing or pump installation in Bangalore. Share a few site details, review your estimate and discuss a site visit with Eshan Borewells.",
  alternates: { canonical: "/get-quote" },
  openGraph: { title: "Get a Borewell Quote | Eshan Borewells", description: "A few site details. A clear scope of work. Plan your borewell or pump installation in Bengaluru.", url: "/get-quote", type: "website" },
};
export default function GetQuotePage() {
  return <main className="quote-page">
    <header className="quote-header shell"><Link href="/" className="brand" aria-label="Eshan Borewells home"><span className="brand-mark"><Droplets size={23} strokeWidth={2.5} /></span><span className="brand-name">ESHAN<span>BOREWELLS</span></span></Link><a href={`tel:${BUSINESS_PHONE.replace(/[^+\d]/g, "")}`}><Phone size={16} />{BUSINESS_PHONE}</a></header>
    <div className="quote-intro shell"><span className="section-label">YOUR SITE. YOUR REQUIREMENTS.</span><h1>A clearer start <br />to your <em>borewell project.</em></h1><p>Tell us a little about your site. Build your scope, review the estimate and talk it through with our team.</p><div className="quote-trust"><span>25+ years of experience</span><span>Bengaluru & nearby areas</span></div></div>
    <QuoteWizard phone={BUSINESS_PHONE} whatsapp={WHATSAPP_NUMBER} address={BUSINESS_ADDRESS} />
    <footer className="quote-footer shell"><span>Eshan Borewells · {BUSINESS_ADDRESS}</span><Link href="/">Back to the website</Link></footer>
  </main>;
}
