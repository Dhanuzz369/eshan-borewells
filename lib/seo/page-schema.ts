type IndexablePage = {
  origin: string;
  slug: string;
  title: string;
  description: string;
};

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
