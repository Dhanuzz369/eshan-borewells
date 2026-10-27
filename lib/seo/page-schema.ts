type IndexablePage = {
  origin: string;
  slug: string;
  title: string;
  description: string;
  mainEntityId?: string;
  dateModified?: string;
};

import { PUBLIC_GOOGLE_PROFILE_URL, PUBLIC_OPENING_HOURS, PUBLIC_SERVICE_PAGES, type PublicBusinessFacts } from "../../app/public-business-facts";

// Closest schema.org subtype for a borewell contractor; no borewell-specific type exists.
const BUSINESS_TYPE = "HomeAndConstructionBusiness";

function e164(phone: string) {
  return phone.replace(/[^+\d]/g, "");
}

export const bengaluru = {
  "@type": "City",
  name: "Bengaluru",
  containedInPlace: { "@type": "State", name: "Karnataka" },
} as const;

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
    publisher: { "@id": `${baseUrl}/#localbusiness` },
  };
}

export function buildLocalBusinessSchema(origin: string, facts: PublicBusinessFacts) {
  const baseUrl = siteOrigin(origin);

  return {
    "@context": "https://schema.org",
    "@type": BUSINESS_TYPE,
    "@id": `${baseUrl}/#localbusiness`,
    name: facts.name,
    url: `${baseUrl}/`,
    description: facts.description,
    image: `${baseUrl}/hero-drilling.webp`,
    ...(facts.phone ? { telephone: e164(facts.phone) } : {}),
    ...(facts.email ? { email: facts.email } : {}),
    address: {
      "@type": "PostalAddress",
      streetAddress: facts.address,
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
    areaServed: bengaluru,
    hasMap: PUBLIC_GOOGLE_PROFILE_URL,
    sameAs: [PUBLIC_GOOGLE_PROFILE_URL],
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: PUBLIC_OPENING_HOURS.opens,
      closes: PUBLIC_OPENING_HOURS.closes,
    },
    knowsAbout: ["Borewell drilling", "Groundwater survey", "Borewell casing", "Borewell flushing"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Borewell services",
      itemListElement: facts.services.map((name) => {
        const path = PUBLIC_SERVICE_PAGES[name as keyof typeof PUBLIC_SERVICE_PAGES];
        return { "@type": "Offer", itemOffered: { "@type": "Service", name, ...(path ? { url: `${baseUrl}${path}` } : {}) } };
      }),
    },
  };
}

/** Compact provider entity for pages that do not carry the full business schema. */
export function buildProviderSchema(origin: string, facts: PublicBusinessFacts) {
  const baseUrl = siteOrigin(origin);

  return {
    "@type": BUSINESS_TYPE,
    "@id": `${baseUrl}/#localbusiness`,
    name: facts.name,
    url: `${baseUrl}/`,
    sameAs: [PUBLIC_GOOGLE_PROFILE_URL],
    ...(facts.phone ? { telephone: e164(facts.phone) } : {}),
    address: { "@type": "PostalAddress", streetAddress: facts.address, addressLocality: "Bengaluru", addressRegion: "Karnataka", addressCountry: "IN" },
  };
}

export function buildHomePageSchema(origin: string, title: string, description: string, dateModified?: string) {
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
    ...(dateModified ? { dateModified } : {}),
    inLanguage: "en-IN",
  };
}

export function buildIndexablePageSchemas({ origin, slug, title, description, mainEntityId, dateModified }: IndexablePage) {
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
      ...(mainEntityId ? { mainEntity: { "@id": mainEntityId } } : {}),
      ...(dateModified ? { dateModified } : {}),
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
