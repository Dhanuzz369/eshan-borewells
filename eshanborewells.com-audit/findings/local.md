# Local SEO findings: eshanborewells.com (2026-10-27)

Score: 31/100. Type: SAB leaning hybrid (office "6th Block, Rajajinagar" shown; serves ~100 km radius). Vertical: home services (borewell drilling).

| Dimension | Weight | Score |
|---|---|---|
| GBP signals | 25 | 4 |
| Reviews & reputation | 20 | 0 |
| Local on-page | 20 | 14 |
| NAP & citations | 15 | 6 (citations unverified) |
| Local schema | 10 | 5 |
| Link/authority | 10 | 2 (unverified) |

## Findings

CRITICAL
- No GBP linkage: no Maps embed or iframe, no google.com/maps, g.page, maps.app, CID or place ID anywhere (home and area pages). Fix: create/verify GBP (SAB; hide address if no walk-ins), primary category "Borewell contractor"/"Water well drilling contractor", link/embed the profile, add `hasMap` and `sameAs`.
- Zero reviews/testimonials on site; no aggregateRating; no review link. Only "25+ years" and "10,000+ sites (company-reported)" claims. Fix: add Google review link/widget, 5-10 real testimonials with locality, Review schema only if genuine, start a steady review-velocity routine.

HIGH
- Citation check not completed: DuckDuckGo returned a captcha and Bing returned irrelevant results, so Justdial, Sulekha, IndiaMART and Google Maps presence is UNVERIFIED. Fix: manually search phone +91 98447 75905 on each; claim and align NAP.
- LocalBusiness schema is weak: generic `LocalBusiness` (better: HomeAndConstructionBusiness or GeneralContractor); no geo, openingHoursSpecification, image/logo, sameAs, priceRange, postalCode, hasMap. Telephone "+91 98447 75905" differs in format from tel:+919844775905. areaServed is one Place whose name is a sentence ("...confirm availability for the exact site"). Fix: areaServed as array of City/AdministrativeArea or GeoCircle (100 km); add geo (5 decimals), hours, logo, sameAs, E.164 phone.
- Area pages are thin and templated: 7 pages (Rajajinagar, Whitefield, Electronic City, Yelahanka, Peenya, KR Puram, Sarjapur Road), each about 200 words of body text; only the locality name and one property-type sentence differ. Swap test mostly fails (whole-text similarity Whitefield vs Yelahanka about 23% by character ratio, but structure and checklist are identical). Doorway-page risk. Fix: 400+ unique words each: landmarks/layouts, local geology and typical depths, local project photos/examples, local FAQs, local testimonials, distance from office.
- Area pages' Service schema areaServed repeats the generic 100 km Place rather than the locality. Fix: set per-locality.

MEDIUM
- NAP: address only "6th Block, Rajajinagar, Bengaluru" (no street/building, no PIN 560010) in text and schema. Name, phone, tel: links, wa.me link and schema are internally consistent (Eshan Borewells / +91 98447 75905 / 9844775905); no discrepancies found, but there is no external NAP to compare. Fix: full address with PIN matching GBP exactly.
- /contact, /about, /reviews return 404. No owner/team identity, licence/GST/registration, rig photos. Fix: add About and Contact pages.
- No sameAs or social/directory links.
- Coverage gaps: no pages for Hebbal, Jayanagar, JP Nagar, Kengeri, Hennur, HSR, Bannerghatta Road, Devanahalli, Hoskote, Nelamangala, Anekal, Hosur Road despite the 100 km claim.

LOW / STRENGTHS
- 8 service pages plus 7 area pages, all in sitemap, self-canonical, keyworded titles ("Borewell Drilling in Whitefield, Bengaluru | Eshan Borewells"), BreadcrumbList on area pages, FAQPage (8 Q&A) on home, footer links to all pages, en-IN, robots allows all.
- Click-to-call (tel: links, sticky "Call now") and WhatsApp (wa.me with prefilled message) present throughout. Add conversion tracking.
- Local keywords "borewell drilling Bengaluru" and area names are in titles, H1s and body.
- Proximity (about 55% of ranking variance) is outside our control; Rajajinagar office favours NW Bengaluru.

## Not assessable
Live GBP data (category, photos, posts), local pack rank, real review count/velocity, citation presence and external NAP, backlinks. Needs DataForSEO/Ahrefs or manual checks.

## Top 10 actions
1 Create/verify GBP, link and embed, sameAs. 2 Review collection plus on-site testimonials. 3 Claim Justdial, Sulekha, IndiaMART with identical NAP. 4 Expand area pages to unique 400+ words. 5 Enrich LocalBusiness schema. 6 Full address with PIN. 7 About/Contact pages with credentials. 8 Per-locality areaServed. 9 Add more area pages. 10 Track call/WhatsApp conversions.
