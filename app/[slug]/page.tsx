import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { BUSINESS_ADDRESS, BUSINESS_PHONE } from "../business-config";
import { getSeoPage, seoPages } from "../seo-pages";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return seoPages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const page = getSeoPage((await params).slug);
  if (!page) return {};

  return {
    title: `${page.title} | Eshan Borewells`,
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical: `/${page.slug}` },
  };
}

export default async function SeoLandingPage({ params }: PageProps) {
  const page = getSeoPage((await params).slug);
  if (!page) notFound();

  const phone = BUSINESS_PHONE.replace(/[^+\d]/g, "");
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    description: page.description,
    provider: { "@type": "LocalBusiness", name: "Eshan Borewells", telephone: BUSINESS_PHONE, address: BUSINESS_ADDRESS },
    areaServed: { "@type": "City", name: "Bengaluru" },
  };

  return <main className="seo-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    <header className="seo-header shell"><Link className="brand" href="/"><span className="brand-mark">E</span><span className="brand-name">ESHAN<span>BOREWELLS</span></span></Link><a className="seo-header-call" href={`tel:${phone}`}><Phone size={16} /> Call now</a></header>
    <section className="seo-hero"><div className="shell"><span className="section-label">{page.eyebrow}</span><h1>{page.title}</h1><p>{page.summary}</p><a className="button button-primary" href={`tel:${phone}`}>Discuss your site <ArrowRight size={18} /></a></div></section>
    <section className="shell seo-content"><div><span className="section-label">WHAT TO EXPECT</span><h2>A practical conversation starts with the site.</h2></div><div className="seo-copy">{page.details.map((detail) => <p key={detail}>{detail}</p>)}<div className="seo-location"><MapPin size={19} /><span><strong>Office</strong>{BUSINESS_ADDRESS}</span></div><Link className="seo-text-link" href="/">Explore all borewell services <ArrowRight size={16} /></Link></div></section>
  </main>;
}
