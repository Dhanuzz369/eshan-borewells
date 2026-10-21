import type { Metadata } from "next";
import Link from "next/link";
import { Droplets, Phone } from "lucide-react";
import { BUSINESS_ADDRESS, BUSINESS_PHONE, WHATSAPP_NUMBER } from "../business-config";
import { QuoteWizard } from "./quote-wizard";
import "./quote.css";
import { requireInternalSession } from "@/lib/quote/internal-auth-server";

export const metadata: Metadata = {
  title: "Internal Estimated Bill Generator | Eshan Borewells",
  description: "Internal Estimated Bill workspace for Eshan Borewells.",
  robots: { index: false, follow: false },
};
export const dynamic = "force-dynamic";
export default async function GetQuotePage() {
  await requireInternalSession("/get-quote");
  return <main className="quote-page">
    <header className="quote-header shell"><Link href="/" className="brand" aria-label="Eshan Borewells home"><span className="brand-mark"><Droplets size={23} strokeWidth={2.5} /></span><span className="brand-name">ESHAN<span>BOREWELLS</span></span></Link><a href={`tel:${BUSINESS_PHONE.replace(/[^+\d]/g, "")}`}><Phone size={16} />{BUSINESS_PHONE}</a></header>
    <QuoteWizard phone={BUSINESS_PHONE} whatsapp={WHATSAPP_NUMBER} address={BUSINESS_ADDRESS} />
    <footer className="quote-footer shell"><span>Eshan Borewells · {BUSINESS_ADDRESS}</span><form action="/api/internal-auth/logout" method="post"><button type="submit">Log out</button></form><Link href="/">Back to the website</Link></footer>
  </main>;
}
