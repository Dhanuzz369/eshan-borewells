import type { Metadata } from "next";
import Link from "next/link";
import { BUSINESS_ADDRESS, BUSINESS_PHONE, WHATSAPP_NUMBER } from "../business-config";
import { QuoteWizard } from "../get-quote/quote-wizard";
import "../get-quote/quote.css";
import { requireInternalSession } from "@/lib/quote/internal-auth-server";

export const metadata: Metadata = {
  title: "Internal Estimate Quote Generator | Eshan Borewells",
  description: "Internal rate-only estimate generator for Eshan Borewells.",
  robots: { index: false, follow: false },
};
export const dynamic = "force-dynamic";
export default async function EstimateQuoteGeneratorPage() {
  await requireInternalSession("/estimate-quote-generator");
  return <main className="quote-page"><header className="quote-header shell"><Link href="/">ESHAN BOREWELLS</Link><a href={`tel:${BUSINESS_PHONE.replace(/[^+\d]/g, "")}`}>{BUSINESS_PHONE}</a></header><QuoteWizard mode="estimate" phone={BUSINESS_PHONE} whatsapp={WHATSAPP_NUMBER} address={BUSINESS_ADDRESS} /><footer className="quote-footer shell"><form action="/api/internal-auth/logout" method="post"><button type="submit">Log out</button></form><span>{BUSINESS_ADDRESS}</span><Link href="/get-quote">Estimated Bill generator</Link></footer></main>;
}
