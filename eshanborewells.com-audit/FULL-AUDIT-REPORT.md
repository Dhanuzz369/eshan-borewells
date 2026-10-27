# SEO Audit: eshanborewells.com

**Date:** 2026-10-27
**Business type:** Local service (borewell drilling, Bengaluru). Service-area business with an office in Rajajinagar.
**Stack:** Next.js (prerendered) on Vercel
**Site age:** about 4 weeks (GitHub repo created 2026-09-30)
**Pages crawled:** 16 (the full sitemap)

## SEO Health Score: 67 / 100

| Category | Weight | Score | Weighted |
|---|---|---|---|
| Technical SEO | 22% | 88 | 19.4 |
| Content Quality | 23% | 38 | 8.7 |
| On-Page SEO | 20% | 76 | 15.2 |
| Schema / Structured Data | 10% | 62 | 6.2 |
| Performance (CWV, lab) | 10% | 88 | 8.8 |
| AI Search Readiness | 10% | 53 | 5.3 |
| Images | 5% | 78 | 3.9 |
| **Total** | | | **67.5** |

How the scores were derived:
- **AI Search Readiness:** a blend of GEO (42, weighted 75%) and agent readiness (85, weighted 25%).

Supplementary scores, not part of the weighting:
- **Local SEO:** 31/100.
- **SXO gap:** homepage 56, service pages 28.
- **Backlinks:** insufficient data.

**In short:** the site is technically well built: fast, crawlable, valid markup, clean sitemap. What holds it back is what's on the pages and the lack of presence off the site. Every inner page is a thin template of about 150–220 words. No page carries a figure (₹, feet, days) that a searcher or an AI engine could use. Trust claims can't be verified, and nothing outside the site connects back to it yet (no linked Google Business Profile, no directories, no `sameAs`). Some of this is expected for a 4-week-old site. All of it is fixable.

## Top 5 critical issues
1. **Thin, templated service and area pages.** All 15 inner pages have 148–219 words on one skeleton, with 0 images and only a call link as CTA. The 7 area pages differ mostly by locality name, which carries doorway-page risk. *(content, technical, local, SXO, GEO all agree)*
2. **No cost, depth or timeline answers anywhere.** There is no ₹ figure on the site. The "borewell drilling cost Bangalore" results are owned by rate-per-foot tables (Sanati, Roboborewell, IndiaMART, Sulekha). The FAQ answer on cost gives no numbers.
3. **The site doesn't link a Google Business Profile.** There is no map embed, place ID, review link or `sameAs`. Directory listings (Justdial, Sulekha, IndiaMART) could not be verified because searches were blocked. A brand search surfaces only the GitHub repo and competitors.
4. **No About or Contact page, no named people or credentials.** `/about` and `/contact` return 404. "25+ years", "10,000+ sites" and 16 developer logos (Prestige, Sobha, Brigade and others) have no evidence. The 40 testimonials are 10–16 words each, first name only, with no date or locality.
5. **No permit or regulation content.** Results for the head term are dominated by KGWA/BWSSB permits and drilling-ban news. The site never mentions permits.

## Top 5 quick wins
1. Rewrite the homepage H1 "Water starts with the right groundwork." to include "Borewell Drilling in Bengaluru". Fix the template H2 casing ("in bengaluru", "in WHITEFIELD").
2. Upgrade the LocalBusiness JSON-LD: `HomeAndConstructionBusiness`, geo, openingHours, PIN 560010, sameAs, logo, and `areaServed` as City + GeoCircle. Ready-to-paste JSON-LD is in `findings/schema.md`.
3. Add the floating Call/WhatsApp component to all service pages and enlarge the 73×25 px header call link.
4. Compress or remove `/developer-logos-source.webp`, 200 KB served raw, about 40% of mobile homepage weight. Add `fetchPriority="high"` to the hero image.
5. Add `X-Robots-Tag: noindex` on `eshan-borewells.vercel.app`, which currently serves "index, follow". Its canonical points to production, so the risk is low. Also 301 `/contact` to `/#contact` until a real page exists.

---

## Technical SEO: 88
**Works:**
- robots.txt allows all and declares the sitemap.
- Pages are prerendered (full HTML without JS).
- Every page is self-canonical and set to "index, follow".
- A real 404 is returned for unknown URLs.
- HSTS, X-Frame-Options, nosniff and Referrer-Policy are set.
- `lang="en-IN"`.

**Issues:**
- **Medium:** no Content-Security-Policy or Permissions-Policy header. Add them in `next.config` `headers()`.
- **Low:** `http://eshanborewells.com` takes 2 hops (→ https apex → www). Point it straight to https://www in Vercel domain settings.
- **Low:** the Vercel preview domain is indexable (verified). Send noindex.
- **Low:** the 404 page reuses the homepage title.
- **Low:** HSTS has no `includeSubDomains` or `preload`.
- **Info:** no IndexNow. AI crawlers are not blocked.

## Content Quality: 38
E-E-A-T sub-scores: Experience 35, Expertise 25, Authoritativeness 30, Trust 50.
- **Critical:** 15 inner pages are 148–174 extracted words each, against floors of 800 for service pages and 500–600 for location pages. The wording isn't duplicated (5-gram Jaccard about 0.07), but every page says the same thing.
- **Critical:** no About or Contact page, no founder, no KGWA, GST or licence number.
- **High:**
  - The testimonials look generic ("Professional" appears in more than 12 of them) and can't be verified.
  - The developer logos have no case studies.
  - There are no project pages or original job photos.
  - The copy is hedged ("discuss") and contains no numbers.
- **Medium:**
  - Template H2 casing errors.
  - Incomplete address: no street, PIN, email or hours.
  - No blog and no dates anywhere.
  - Inner pages have a Flesch Reading Ease of about 16–21, at grade level 16 or above.
- **Strength:** the honest "no method can guarantee water" disclaimers. Keep them.

## On-Page SEO: 76
**Works:** titles are unique, one H1 per page, every page has a meta description, OG and Twitter tags are present, there are no broken internal links, and all images have alt text.

**Issues:**
- **High:** each of the 7 area pages has exactly 1 inbound internal link, from the homepage. The homepage service cards link to `#contact`, not the service pages.
- **Medium:** short meta descriptions on Peenya (96 characters), Yelahanka (120), KR Puram (121), Apartment (131) and Electronic City (132).
- **Medium:** long titles on Commercial (76 characters), Farm (74) and Flushing (68).
- **Medium:** the homepage H1 is a slogan. The homepage and `/borewell-drilling-bengaluru` target the same intent. Make the homepage title brand-led so the service page owns the head term.
- **Low:** "…with Eshan Borewells" is appended to 7 meta descriptions in a fill-in pattern.

## Schema: 62
**Detected:**
- Homepage: WebSite, LocalBusiness (with OfferCatalog), WebPage and FAQPage.
- Inner pages: WebSite, Service, WebPage and BreadcrumbList.
- All blocks are valid and `@id`-linked.

**Issues:**
- **High:** the business type is generic `LocalBusiness`. It has no geo, openingHoursSpecification, image, logo, priceRange, sameAs or postalCode.
- **High:** `areaServed` is a sentence ("Bengaluru and nearby areas, generally within about 100 km; confirm availability…").
- **Medium:** area pages don't name their locality in `areaServed`. Inner pages reference `#localbusiness` without defining it.
- **Medium:** the phone number is written with spaces in the schema ("+91 98447 75905"). Use "+919844775905".
- **Low:** the OfferCatalog is over-nested. WebSite has no publisher and its URL trailing slash is inconsistent with the other blocks.
- **Info:** FAQPage stays as it is. Google retired FAQ rich results on 2026-05-07, so it brings no SERP feature, and any AI benefit is unconfirmed. Don't remove it and don't add more.

## Performance: 88 (lab only, Lighthouse 13.5; no CrUX field data)
| Page | Device | LCP | TBT | CLS |
|---|---|---|---|---|
| Home | mobile | 2.4 s (borderline) | 280 ms | 0 |
| Home | desktop | 2.0 s | 0 ms | 0 |
| Service | mobile | 1.1 s | 40 ms | 0 |
| Location | mobile | 1.3 s | 120 ms | 0 |

- **Medium:** home mobile LCP is mostly render delay (2,009 ms). The hero is preloaded but has no `fetchpriority=high`. Check that no hydration or opacity animation gates the paint.
- **Medium:** `developer-logos-source.webp` is 200 KB and bypasses `next/image`.
- **Medium:** `/public` images are sent with `Cache-Control: max-age=0`, so browsers can't cache them.
- **Low:** one 30 KB render-blocking CSS file, about 54 KiB of unused JS and 14 KiB of legacy polyfills.
- There are no third-party scripts and no web fonts.
- INP can't be measured in the lab. TBT is low, so INP is likely fine but unverified.

## Images: 78
**Works:** all 11 homepage images have descriptive alt text and are served as AVIF through `/_next/image` at 5–115 KB.

**Issues:**
- **Medium:** the 200 KB raw logo file noted above.
- **Medium:** service pages have no images at all.
- **Low:** only about 7 distinct photos, reused across cards. They are likely illustrative, not job photos.
- **Low:** the area-card `sizes` attribute falls back to w=3840. Check it.

## AI Search Readiness: 53 (GEO 42, agent readiness 85)
**Works:**
- All AI crawlers (GPTBot, OAI-SearchBot, ClaudeBot, PerplexityBot and others) get 200 with full content.
- `llms.txt` is present and well-formed.
- The accessibility tree is clean: 47 interactive nodes, none unnamed. The lead form has labelled fields.

**Issues:**
- **Critical:** citability. There are no quotable facts (prices, depths, timelines, permits).
- **Critical:** off-site brand footprint is close to zero. There is no `sameAs`, and the brand doesn't appear on Brave or Bing yet.
- **High:** authority claims exist only as display tiles and CSS logo `aria-label`s.
- **Low:** the lead form should announce success or error with `role="status"`. There is no Content-Signal line in robots.txt (optional).
- Not recommended for a local business: WebMCP, Markdown delivery, ai-catalog.json.

## Local SEO: 31 (supplementary)
| GBP | Reviews | Local on-page | NAP / citations | Local schema | Links |
|---|---|---|---|---|---|
| 4/25 | 0/20 | 14/20 | 6/15* | 5/10 | 2/10 |

\*Citations could not be verified because of captcha and 403 responses, so this score is partly assumed.

**Works:** click-to-call and WhatsApp (with a prefilled message) appear throughout. NAP is consistent within the site.

**Gaps:**
- No GBP link or embed.
- No review link and no off-site reviews.
- No PIN code on the site.
- No coverage pages for Hebbal, JP Nagar, HSR, Hoskote, Devanahalli and other areas inside the claimed 100 km. Expand the existing 7 before adding more.

Proximity note: the Rajajinagar office gives a natural advantage in north-west Bengaluru.

## Search Experience (SXO)
| Query | What ranks | Site fit |
|---|---|---|
| borewell drilling Bengaluru | Permit and regulation news, GBP listings | High gap |
| borewell drilling cost Bangalore | ₹/ft cost guides, IndiaMART, Sulekha | **No page** |
| borewell near me / contractors | Sulekha, IndiaMART, GBP | High gap |
| groundwater survey Bangalore | Q&A on choosing a drilling point | Survey page names no method |
| borewell recharge Bangalore | BWSSB and RWH explainers | **No page** (if the service is offered) |

Persona scores, homepage vs matching segment page:
- Homeowner: 65 vs 40
- Farmer: 55 vs 35
- Apartment association: 49 vs 33
- Commercial: 41 vs 31

Trust is the weakest dimension on every service page, at 3–4 out of 25.

## Backlinks: insufficient data
The domain isn't in the Common Crawl Jan–Mar 2026 graph, which is expected for a 4-week-old site. No Moz, Bing or GSC data was available. The only external links on the homepage are wa.me. Connect GSC and Bing Webmaster Tools to measure.

## Corrections made while combining the specialist reports
- One specialist reported "no testimonials on site". There are 40 short testimonials; the issue is that they can't be verified.
- One specialist reported "hero image not preloaded". The homepage HTML has `<link rel="preload" as="image">` for it; what's missing is `fetchpriority=high`.
- One specialist couldn't confirm the apex redirect. Verified: 308 (permanent) to www.

## Limitations
- No Google Search Console, CrUX, GA4, Moz or DataForSEO access. Performance figures are lab-only.
- Indexing status, rankings and backlinks are unknown.
- SERP analysis used a general web search, not a live google.co.in results page with local pack and AI Overviews.
- The existence of GBP and directory listings is unverified.
- No drift baseline exists, so this audit can serve as the first one.
