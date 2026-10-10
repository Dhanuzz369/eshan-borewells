import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin, Phone } from "lucide-react";
import { BUSINESS_ADDRESS, BUSINESS_PHONE, publicBusinessFacts } from "../business-config";
import { getSeoPage, seoPages } from "../seo-pages";
import { getRelatedSeoPages, getSeoContent } from "../seo-content";
import { getProductionUrl } from "../site-url";
import { buildIndexablePageSchemas } from "../../lib/seo/page-schema";

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
    openGraph: {
      title: `${page.title} | Eshan Borewells`,
      description: page.description,
      url: `/${page.slug}`,
      type: "website",
    },
  };
}

export default async function SeoLandingPage({ params }: PageProps) {
  const page = getSeoPage((await params).slug);
  if (!page) notFound();

  const seoContent = getSeoContent(page.slug);
  if (!seoContent) notFound();
  const relatedPages = getRelatedSeoPages(page.slug);

  const phone = publicBusinessFacts.phone?.replace(/[^+\d]/g, "") || BUSINESS_PHONE.replace(/[^+\d]/g, "");
  const origin = getProductionUrl() || "https://www.eshanborewells.com";
  const { webPage, breadcrumb } = buildIndexablePageSchemas({ origin, slug: page.slug, title: page.title, description: page.description });
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.title,
    description: page.description,
    url: `${origin}/${page.slug}`,
    serviceType: page.keywords[0],
    provider: { "@id": `${origin}/#localbusiness` },
    areaServed: { "@type": "Place", name: publicBusinessFacts.serviceArea },
  };

  return <main className="seo-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    <header className="seo-header shell"><Link className="brand" href="/"><span className="brand-mark">E</span><span className="brand-name">ESHAN<span>BOREWELLS</span></span></Link><a className="seo-header-call" href={`tel:${phone}`}><Phone size={16} /> Call now</a></header>
    <section className="seo-hero"><div className="shell"><nav className="seo-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">{page.title}</span></nav><span className="section-label">{page.eyebrow}</span><h1>{page.title}</h1><p>{page.summary}</p><a className="button button-primary" href={`tel:${phone}`}>Discuss your site <ArrowRight size={18} /></a></div></section>
    <section className="shell seo-content" aria-labelledby="seo-answer-title"><div><span className="section-label">A CLEAR START</span><h2 id="seo-answer-title">{seoContent.pageType === "locality" ? `Borewell planning in ${page.eyebrow.replace(", BENGALURU", "")}` : `What to know about ${page.title.toLowerCase()}`}</h2><p className="seo-direct-answer">{seoContent.directAnswer}</p></div><div className="seo-copy"><h3>Before planning your site</h3><ul className="seo-considerations">{seoContent.considerations.map((item) => <li key={item}>{item}</li>)}</ul>{page.details.map((detail) => <p key={detail}>{detail}</p>)}<h3>Related service guidance</h3><ul className="seo-related-pages">{relatedPages.map((relatedPage) => <li key={relatedPage.slug}><Link href={`/${relatedPage.slug}`}>{relatedPage.title}<ArrowRight size={15} /></Link></li>)}</ul><div className="seo-location"><MapPin size={19} /><span><strong>Office</strong>{BUSINESS_ADDRESS}</span></div><Link className="seo-text-link" href="/">Explore all borewell services <ArrowRight size={16} /></Link></div></section>
  </main>;
}
