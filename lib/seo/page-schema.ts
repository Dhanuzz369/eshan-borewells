type IndexablePage = {
  origin: string;
  slug: string;
  title: string;
  description: string;
};

import type { PublicBusinessFacts } from "../../app/public-business-facts";

function siteOrigin(origin: string) {
  return origin.replace(/\/+$/, "");
}

export function buildWebsiteSchema(origin: string) {
  const baseUrl = siteOrigin(origin);

  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${baseUrl}/#website`,
    name: "Eshan Borewells",
    url: baseUrl,
    inLanguage: "en-IN",
    description: "Borewell drilling, groundwater survey and water solutions in Bengaluru and nearby areas.",
  };
}

export function buildLocalBusinessSchema(origin: string, facts: PublicBusinessFacts) {
  const baseUrl = siteOrigin(origin);

  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${baseUrl}/#localbusiness`,
    name: facts.name,
    url: baseUrl,
    description: facts.description,
    ...(facts.phone ? { telephone: facts.phone } : {}),
    ...(facts.email ? { email: facts.email } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: facts.address,
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    areaServed: { "@type": "Place", name: facts.serviceArea },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Borewell services",
      itemListElement: facts.services.map((name) => ({
        "@type": "OfferCatalog",
        name,
        itemListElement: [{ "@type": "Offer", itemOffered: { "@type": "Service", name } }],
      })),
    },
  };
}

export function buildHomePageSchema(origin: string, title: string, description: string) {
  const baseUrl = siteOrigin(origin);

  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${baseUrl}/#webpage`,
    url: `${baseUrl}/`,
    name: title,
    description,
    isPartOf: { "@id": `${baseUrl}/#website` },
    about: { "@id": `${baseUrl}/#localbusiness` },
    inLanguage: "en-IN",
  };
}

export function buildIndexablePageSchemas({ origin, slug, title, description }: IndexablePage) {
  const baseUrl = siteOrigin(origin);
  const pageUrl = `${baseUrl}/${slug}`;

  return {
    webPage: {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: title,
      description,
      isPartOf: { "@id": `${baseUrl}/#website` },
      inLanguage: "en-IN",
    },
    breadcrumb: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${baseUrl}/` },
        { "@type": "ListItem", position: 2, name: title, item: pageUrl },
      ],
    },
  };
}
