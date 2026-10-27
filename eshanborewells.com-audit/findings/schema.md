# Schema Audit: eshanborewells.com (2026-10-27)

Schema score: 62/100

## Detection
Format: JSON-LD only, server-rendered (raw_content == content; no Microdata/RDFa). All blocks parse as valid JSON, @context is https://schema.org, URLs absolute.

| Page | Blocks |
|---|---|
| / | WebSite, LocalBusiness (+OfferCatalog/Offer/Service/PostalAddress/Place), WebPage, FAQPage |
| /borewell-drilling-bengaluru, /groundwater-survey-water-detection-bengaluru, /borewell-drilling-whitefield, /borewell-drilling-rajajinagar (sampled; other service/location pages in the nav assumed to use the same template) | WebSite, Service (areaServed Place), WebPage, BreadcrumbList |

Good: @id linking (WebPage.isPartOf -> #website, WebPage.about -> #localbusiness, Service.provider -> #localbusiness), BreadcrumbList on inner pages, en-IN inLanguage, no deprecated types, no placeholders.

## Findings

### 1. High: LocalBusiness is missing core local-SEO properties
Evidence: homepage LocalBusiness has only name, url, description, telephone, address, areaServed, hasOfferCatalog. No geo, openingHoursSpecification, image, logo, priceRange, sameAs, contactPoint, postalCode.
Fix: add them (see JSON-LD A). Only add values that are true and visible/verifiable; items marked TODO must be filled by the owner (hours, coordinates, social/GBP URLs, postal code). Do not ship TODO strings.

### 2. High: Generic @type "LocalBusiness"
Evidence: "@type":"LocalBusiness". There is no borewell-specific type. Fix: use the closest subtype HomeAndConstructionBusiness (JSON-LD A).

### 3. High: areaServed is a prose string inside a Place (homepage and every Service block)
Evidence: areaServed {"@type":"Place","name":"Bengaluru and nearby areas, generally within about 100 km; confirm availability for the exact site."}. This is a sentence, not a place name; it cannot be resolved to an entity and the hedging text is not appropriate in structured data.
Fix: use City/AdministrativeArea entries or a GeoCircle (100 km radius around geo) (JSON-LD A). On location pages, make areaServed the specific locality (JSON-LD C).

### 4. Medium: Location pages do not state their locality in structured data
Evidence: Whitefield and Rajajinagar Service blocks use the identical 100 km Place text as the Bengaluru page. Fix: JSON-LD C.

### 5. Medium: Service pages have no LocalBusiness entity and Service has no @id / image / offers
Evidence: Service.provider references #localbusiness, which is only defined on the homepage. Google generally evaluates per page; the reference is valid but a minimal provider (name, url, telephone) inline is safer. Add @id to Service and link WebPage.mainEntity -> Service, WebPage.breadcrumb -> BreadcrumbList (JSON-LD C).

### 6. Medium: Telephone format and address detail
Evidence: telephone "+91 98447 75905" (spaces); address has no postalCode and streetAddress "6th Block, Rajajinagar, Bengaluru" duplicates locality. Fix: "+919844775905" (matches the tel: link on the page); add postalCode (Rajajinagar 6th Block is typically 560010, owner to confirm) and a proper street line. If this is a service-area business without a public storefront, consider omitting streetAddress and keeping addressLocality/Region.

### 7. Low: Offer/OfferCatalog structure is over-nested
Evidence: five nested OfferCatalog > Offer > Service items with only names; no price, description or url. No Google rich result is tied to this; it is harmless but low value. Fix: flatten to OfferCatalog > Offer > Service with url pointing to each service page (JSON-LD A). Do not invent prices; omit price.

### 8. Low: Homepage WebSite/WebPage minimal
Evidence: no publisher on WebSite, no primaryImageOfPage/dateModified on WebPage. WebSite url lacks trailing slash while WebPage url and breadcrumb use "/" (inconsistent canonical form). Fix: set publisher -> #localbusiness; use "https://www.eshanborewells.com/" consistently. No SearchAction needed (no site search).

### 9. Low: No Review/AggregateRating
No evidence of on-page reviews in structured data. Only add if genuine, visible, third-party-verifiable reviews exist; self-serving LocalBusiness ratings are ineligible for rich results anyway.

### 10. Info: FAQPage on homepage
8 Question/Answer pairs, valid syntax. Google retired FAQ rich results on May 7, 2026, so no SERP benefit; any AI/GEO benefit is unconfirmed. No action required; leave as is. Not counted against score.

### 11. Info: Homepage BreadcrumbList absent
Normal for a homepage; no action.

## Score rationale
Valid, clean, linked baseline with breadcrumbs (+), but thin LocalBusiness data, generic type, and malformed areaServed (-).

## Ready-to-paste JSON-LD

### A. Homepage LocalBusiness (replaces existing block 2; fill TODOs or delete those lines)
```json
{
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": "https://www.eshanborewells.com/#localbusiness",
  "name": "Eshan Borewells",
  "url": "https://www.eshanborewells.com/",
  "description": "Borewell drilling, groundwater survey, casing and flushing for homes, apartments, farms and commercial properties in Bengaluru and nearby areas.",
  "telephone": "+919844775905",
  "image": "https://www.eshanborewells.com/TODO-business-photo.jpg",
  "logo": "https://www.eshanborewells.com/TODO-logo.png",
  "priceRange": "Quote on request",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "6th Block, Rajajinagar",
    "addressLocality": "Bengaluru",
    "addressRegion": "Karnataka",
    "postalCode": "560010",
    "addressCountry": "IN"
  },
  "geo": { "@type": "GeoCoordinates", "latitude": 12.9900, "longitude": 77.5500 },
  "openingHoursSpecification": [{
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
    "opens": "09:00",
    "closes": "18:00"
  }],
  "contactPoint": [{
    "@type": "ContactPoint",
    "contactType": "customer service",
    "telephone": "+919844775905",
    "areaServed": "IN",
    "availableLanguage": ["en","kn","hi"]
  }],
  "areaServed": [
    { "@type": "City", "name": "Bengaluru" },
    { "@type": "GeoCircle",
      "geoMidpoint": { "@type": "GeoCoordinates", "latitude": 12.9716, "longitude": 77.5946 },
      "geoRadius": "100000" }
  ],
  "sameAs": [
    "https://www.google.com/maps?cid=TODO",
    "https://www.facebook.com/TODO",
    "https://www.justdial.com/TODO"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Borewell services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Borewell drilling", "url": "https://www.eshanborewells.com/borewell-drilling-bengaluru" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Groundwater survey and water detection", "url": "https://www.eshanborewells.com/groundwater-survey-water-detection-bengaluru" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Borewell casing and completion", "url": "https://www.eshanborewells.com/borewell-casing-installation-bengaluru" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Borewell flushing and redevelopment", "url": "https://www.eshanborewells.com/borewell-flushing-redevelopment-bengaluru" } }
    ]
  }
}
```
Notes: coordinates above are approximate placeholders for Rajajinagar; replace with exact Google Maps coordinates. Hours must match the Google Business Profile and visible page content. Pump installation coordination can be added back with its URL if a page exists.

### B. Homepage WebSite (adds publisher; consistent trailing slash)
```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.eshanborewells.com/#website",
  "name": "Eshan Borewells",
  "url": "https://www.eshanborewells.com/",
  "inLanguage": "en-IN",
  "description": "Borewell drilling, groundwater survey and water solutions in Bengaluru and nearby areas.",
  "publisher": { "@id": "https://www.eshanborewells.com/#localbusiness" }
}
```

### C. Location page template (example: /borewell-drilling-whitefield; replaces Service + WebPage blocks, keep existing BreadcrumbList)
```json
[
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://www.eshanborewells.com/borewell-drilling-whitefield#service",
    "name": "Borewell Drilling in Whitefield, Bengaluru",
    "serviceType": "Borewell drilling",
    "description": "Borewell drilling, water survey and casing discussions for homes, apartments and commercial properties in Whitefield, Bengaluru.",
    "url": "https://www.eshanborewells.com/borewell-drilling-whitefield",
    "provider": {
      "@type": "HomeAndConstructionBusiness",
      "@id": "https://www.eshanborewells.com/#localbusiness",
      "name": "Eshan Borewells",
      "url": "https://www.eshanborewells.com/",
      "telephone": "+919844775905"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Whitefield, Bengaluru",
      "address": { "@type": "PostalAddress", "addressLocality": "Whitefield, Bengaluru", "addressRegion": "Karnataka", "addressCountry": "IN" }
    }
  },
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.eshanborewells.com/borewell-drilling-whitefield#webpage",
    "url": "https://www.eshanborewells.com/borewell-drilling-whitefield",
    "name": "Borewell Drilling in Whitefield, Bengaluru",
    "isPartOf": { "@id": "https://www.eshanborewells.com/#website" },
    "about": { "@id": "https://www.eshanborewells.com/#localbusiness" },
    "mainEntity": { "@id": "https://www.eshanborewells.com/borewell-drilling-whitefield#service" },
    "inLanguage": "en-IN"
  }
]
```
For the generic service pages (e.g. groundwater survey) use the same Service block with areaServed {"@type":"City","name":"Bengaluru"}. Optionally add "breadcrumb" to WebPage by giving the existing BreadcrumbList an @id (e.g. .../borewell-drilling-whitefield#breadcrumb) and referencing it.

## Not covered
Only 4 of ~14 inner URLs were fetched (service-page and location-page templates look uniform). Not verified: visible hours, coordinates, social profiles, whether a Google Business Profile exists; owner must supply these.
