# Action Plan: eshanborewells.com

Each item gives:
- **Why:** the first-principle reason.
- **Depends:** what it needs or unblocks.
- **Fail-check:** how we'd know it didn't work.
- **Watch:** a leading indicator to monitor.

**The core problem:** the site is technically fast and clean, but it gives Google, AI engines and customers nothing specific to rank, quote or trust. Foundations of identity come first (GBP, About/Contact, NAP), then substance (cost, permits, page depth), then authority (reviews, citations, links).

## Phase 0: Measurement (day 1, blocks everything else)
**0.1 Verify the site in Google Search Console and Bing Webmaster Tools, and submit the sitemap.**
- **Why:** without them, rankings, indexing and links can't be measured. At 4 weeks old the site may not be fully indexed yet.
- **Depends:** unblocks every fail-check below.
- **Fail-check:** pages still not indexed 2 weeks after submission.
- **Watch:** GSC Pages report, indexed count against 16.

## Phase 1: Critical fixes (Week 1)
**1.1 Claim and verify the Google Business Profile.** Use the Borewell drilling or Water well drilling contractor category, the exact NAP, hours and photos. Link it from the site and embed a map on Contact.
- **Why:** for "near me" and contractor queries the local pack decides visibility, and a GBP is the price of entry.
- **Depends:** feeds `sameAs` and `hasMap` in 1.3, and the review drive in 2.4.
- **Fail-check:** no GBP impressions after 30 days.
- **Watch:** GBP Performance (searches, calls, direction requests).

**1.2 Publish /about and /contact.**
- /about: founder name, founding year, registration (KGWA, GST), rig fleet, team photo.
- /contact: full address with street and PIN 560010, hours, email, map, call and WhatsApp.
- **Why:** trust is the weakest score on every service page (3–4 out of 25), and /contact currently returns 404.
- **Depends:** supplies the facts for 1.3 and for 2.3.
- **Fail-check:** /contact still returns 404, or the address differs from GBP.
- **Watch:** visits to /contact and /about in GA4 or Vercel Analytics.

**1.3 Upgrade the structured data.** Use the ready-made JSON-LD A, B and C in `findings/schema.md`.
- `HomeAndConstructionBusiness` with geo, openingHours, PIN, logo, image and `sameAs`.
- `areaServed` as City + GeoCircle (100 km).
- Per-locality `areaServed` on area pages.
- Telephone as `+919844775905`.
- **Why:** the entity Google and AI engines see should match GBP exactly.
- **Depends:** needs 1.1 and 1.2.
- **Fail-check:** errors in the Rich Results Test or the Schema.org validator.
- **Watch:** GSC Enhancements reports.

**1.4 On-page quick fixes.**
- Homepage H1 → "Borewell Drilling in Bengaluru — Survey, Drilling, Casing & Flushing".
- Fix the template H2 casing.
- Bring meta descriptions to 140–160 characters, without the brand suffix.
- Cut titles over 65 characters.
- Make the homepage `<title>` brand-led.
- **Why:** the head term needs to appear where Google weights it most.
- **Fail-check:** GSC shows rewritten titles or low CTR for the target queries.
- **Watch:** GSC CTR per page.

**1.5 Technical quick fixes.**
- `X-Robots-Tag: noindex` on `*.vercel.app`.
- Send http apex straight to https://www.
- Compress, lazy-load or remove `developer-logos-source.webp`.
- Hero image: `fetchPriority="high"`.
- Long-lived `Cache-Control` on `/public` images.
- Floating Call/WhatsApp on service pages, with tap targets of at least 44 px.
- A distinct 404 title.
- **Fail-check:** home mobile LCP still above 2.5 s, or the vercel.app address still returns `index`.
- **Watch:** PageSpeed Insights score and Vercel Speed Insights.

## Phase 2: High-impact content (Weeks 2–3)
**2.1 Build `/borewell-drilling-cost-bengaluru`.**
- A depth-slab ₹/ft table and casing costs (PVC vs MS).
- Survey and flushing fees.
- Three worked examples: house, apartment, farm.
- A "what happens if the bore is dry" section.
- A visible "rates updated" date, with figures labelled "typical, confirmed after site visit".
- **Why:** this is the one query with no matching page, and it's the most quotable content for AI Overviews.
- **Depends:** real price data from the owner. Link it from the homepage FAQ and every service page.
- **Fail-check:** no impressions for "borewell cost" queries in GSC after 6 weeks.
- **Watch:** GSC impressions for queries containing cost, price, per foot.

**2.2 Expand the 8 service and segment pages to 800–1,200 words each.** Cover process, equipment, typical depths, cost link, permits, an FAQ, real job photos, and the lead form plus WhatsApp. Survey page: name the method, show a sample report, explain survey vs water divining.
- **Why:** these pages are 148–219 words, about a quarter of what ranking pages carry.
- **Depends:** best done after 2.1, so each page can link to the cost page.
- **Fail-check:** the pages still don't rank in the top 30 for their head terms after 8 weeks.
- **Watch:** GSC average position per URL.

**2.3 Make trust claims verifiable.**
- Replace the 40 one-line testimonials with 6–10 detailed, dated reviews showing locality and depth, or embed GBP reviews.
- Keep only the developer logos you can document, and add a project line for each.
- Don't add AggregateRating markup for self-hosted reviews.
- **Fail-check:** claims still unsupported on the page.
- **Watch:** inquiry conversion rate.

**2.4 Run a review-request routine.** Send the GBP review link by WhatsApp after every job. Aim for steady reviews over time rather than a burst.
- **Watch:** GBP review count per month.

**2.5 Build citations with an identical NAP.** Justdial, Sulekha, IndiaMART, Bing Places, Apple Business Connect, Facebook and Instagram. Add each one to `sameAs`.
- **Fail-check:** a brand search still shows only the GitHub repo after 30 days.
- **Watch:** branded search impressions in GSC.

**2.6 Internal linking.** Link the area pages from `/borewell-drilling-bengaluru` and the service pages, add an "Areas we serve" footer block, cross-link neighbouring areas, and point the homepage service cards at the service pages instead of `#contact`.
- **Watch:** GSC Links → internal links per area URL.

## Phase 3: Content and authority (Month 2)
**3.1 Rewrite each of the 7 area pages to 500 or more unique words.** Cover local geology and typical depths, landmarks, local jobs and photos, and local FAQs. Expand these before adding new areas.
- **Why:** this removes the doorway-page risk.
- **Fail-check:** pages marked "Crawled – currently not indexed" in GSC.

**3.2 Publish a permits guide.** Cover KGWA and BWSSB steps and forms, and say whether Eshan handles the paperwork. Check the current rules first.
- **Why:** permit content dominates the results for the head term.

**3.3 Recharge content.** If the service is offered, build `/borewell-recharge-bengaluru`. If not, publish an explainer that points to flushing and surveys.

**3.4 Add a /projects section.** Use dated jobs with depth, casing, yield and original photos. Short YouTube videos are a strong correlate of AI citation.

**3.5 Start a blog.** 8–12 bylined, dated guides covering cost, casing, flushing, dry bores and choosing a drilling point.

**3.6 Earn links.** Approach suppliers and pump brands for installer listings, apartment and resident-association federations, local press during water-crisis coverage, and the Bengaluru Chamber of Commerce. Avoid paid link bundles.

## Phase 4: Monitoring (ongoing)
- **Sitemap:** real `lastModified` dates in `app/sitemap.ts`.
- **Security headers:** CSP and Permissions-Policy; HSTS `includeSubDomains` and `preload`.
- **Drift baseline:** `/seo drift baseline https://www.eshanborewells.com` now, then compare monthly.
- **Re-audit:** run the full audit again after Phase 2. Target SEO Health 80+, Content 65+, Local 60+.
- **Optional:** a Content-Signal line in robots.txt, and `role="status"` on the lead form's result message.
