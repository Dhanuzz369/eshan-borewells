import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, MapPin, MessageCircle, Phone } from "lucide-react";
import { BUSINESS_ADDRESS, BUSINESS_PHONE, publicBusinessFacts, WHATSAPP_NUMBER } from "../business-config";
import { PUBLIC_GOOGLE_PROFILE_URL, PUBLIC_OPENING_HOURS } from "../public-business-facts";
import { getSeoPage, seoPages } from "../seo-pages";
import { getLocalityPages, getProcessSteps, getRelatedSeoPages, getPageFaqs, getSeoContent, getSeoImage, SEO_CONTENT_UPDATED } from "../seo-content";
import { getProductionUrl } from "../site-url";
import { bengaluru, buildIndexablePageSchemas, buildProviderSchema } from "../../lib/seo/page-schema";
import { getServiceGuidance, GUIDANCE_UPDATED } from "../service-guidance";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return seoPages.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const page = getSeoPage((await params).slug);
  if (!page) return {};
  const title = `${page.metaTitle ?? page.title} | Eshan Borewells`;

  return {
    title,
    description: page.description,
    keywords: page.keywords,
    alternates: { canonical: `/${page.slug}` },
    openGraph: {
      title,
      description: page.description,
      url: `/${page.slug}`,
      type: "website",
      images: [{ url: getSeoImage(page.slug).src, alt: getSeoImage(page.slug).alt }],
    },
  };
}

export default async function SeoLandingPage({ params }: PageProps) {
  const page = getSeoPage((await params).slug);
  if (!page) notFound();

  const seoContent = getSeoContent(page.slug);
  if (!seoContent) notFound();
  const guidance = getServiceGuidance(page.slug);
  const contentUpdated = guidance.length ? GUIDANCE_UPDATED : SEO_CONTENT_UPDATED;
  const relatedPages = getRelatedSeoPages(page.slug);
  const steps = getProcessSteps(page.slug);
  const faqs = getPageFaqs(page.slug);
  const image = getSeoImage(page.slug);
  const isLocality = seoContent.pageType === "locality";
  const areaPages = isLocality || page.slug === "borewell-drilling-bengaluru" ? getLocalityPages(page.slug) : [];
  const localityName = isLocality ? page.title.replace(/^Borewell Drilling (?:in|on) /, "").replace(/, Bengaluru$/, "") : null;

  const phone = publicBusinessFacts.phone?.replace(/[^+\d]/g, "") || BUSINESS_PHONE.replace(/[^+\d]/g, "");
  const whatsapp = WHATSAPP_NUMBER.replace(/\D/g, "");
  const whatsappHref = `https://wa.me/${whatsapp}?text=${encodeURIComponent(`Hello Eshan Borewells, I would like to discuss: ${page.title}. My location is: `)}`;
  const origin = getProductionUrl() || "https://www.eshanborewells.com";
  const serviceId = `${origin}/${page.slug}#service`;
  const { webPage, breadcrumb } = buildIndexablePageSchemas({ origin, slug: page.slug, title: page.title, description: page.description, mainEntityId: serviceId, dateModified: contentUpdated });
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": serviceId,
    name: page.title,
    description: page.description,
    url: `${origin}/${page.slug}`,
    serviceType: page.keywords[0],
    provider: buildProviderSchema(origin, publicBusinessFacts),
    areaServed: localityName ? { "@type": "Place", name: `${localityName}, Bengaluru`, containedInPlace: bengaluru } : bengaluru,
  };

  return <main className="seo-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPage) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />
    <header className="seo-header shell"><Link className="brand" href="/"><span className="brand-mark">E</span><span className="brand-name">ESHAN<span>BOREWELLS</span></span></Link><a className="seo-header-call" href={`tel:${phone}`}><Phone size={16} /> Call now</a></header>
    <section className="seo-hero"><div className="shell"><nav className="seo-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><span aria-current="page">{page.title}</span></nav><span className="section-label">{page.eyebrow}</span><h1>{page.title}</h1><p>{page.summary}</p><div className="seo-hero-actions"><a className="button button-primary" href={`tel:${phone}`}>Discuss your site <ArrowRight size={18} /></a><a className="button seo-hero-whatsapp" href={whatsappHref} target="_blank" rel="noopener noreferrer"><MessageCircle size={18} /> WhatsApp us</a></div></div></section>
    <section className="shell seo-content" aria-labelledby="seo-answer-title"><div><span className="section-label">A CLEAR START</span><h2 id="seo-answer-title">{seoContent.answerHeading}</h2><p className="seo-direct-answer">{seoContent.directAnswer}</p><figure className="seo-figure"><Image src={image.src} alt={image.alt} width={880} height={660} sizes="(max-width: 520px) 92vw, 440px" quality={75} style={{ display: "block", width: "100%", maxWidth: 440, height: "auto", aspectRatio: "4 / 3", objectFit: "cover" }} /></figure></div><div className="seo-copy"><h3>Before planning your site</h3><ul className="seo-considerations">{seoContent.considerations.map((item) => <li key={item}>{item}</li>)}</ul>{page.details.map((detail) => <p key={detail}>{detail}</p>)}{guidance.map((section) => <section key={section.heading}><h3>{section.heading}</h3>{section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</section>)}<h3>How the work proceeds</h3><ol className="seo-steps">{steps.map((step) => <li key={step.title}><strong>{step.title}</strong>{" "}<span>{step.detail}</span></li>)}</ol><h3>Common questions</h3><div className="seo-faq">{faqs.map((item) => <details key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div><h3>Related service guidance</h3><ul className="seo-related-pages">{relatedPages.map((relatedPage) => <li key={relatedPage.slug}><Link href={`/${relatedPage.slug}`}>{relatedPage.title}<ArrowRight size={15} /></Link></li>)}</ul>{areaPages.length > 0 && <><h3>{isLocality ? "Borewell guidance for other areas" : "Borewell guidance by area"}</h3><ul className="seo-related-pages seo-area-links">{areaPages.map((areaPage) => <li key={areaPage.slug}><Link href={`/${areaPage.slug}`}>{areaPage.title.replace(/, Bengaluru$/, "")}<ArrowRight size={15} /></Link></li>)}</ul></>}<p className="seo-updated">Last updated <time dateTime={contentUpdated}>{new Date(contentUpdated).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric", timeZone: "Asia/Kolkata" })}</time></p><div className="seo-location"><MapPin size={19} /><span><strong>Office</strong>{BUSINESS_ADDRESS}<br />{PUBLIC_OPENING_HOURS.label}<br /><a href={PUBLIC_GOOGLE_PROFILE_URL} target="_blank" rel="noopener noreferrer">Google Maps profile</a></span></div><Link className="seo-text-link" href="/">Explore all borewell services <ArrowRight size={16} /></Link></div></section>
    <a className="floating-call" href={`tel:${phone}`}><Phone size={17} />Call now</a>
  </main>;
}
