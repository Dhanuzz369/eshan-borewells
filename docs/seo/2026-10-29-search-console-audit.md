# Eshan Borewells: Search Console diagnosis and implemented improvements

Audit date: 29 October 2026. Production: https://www.eshanborewells.com/

## Executive conclusion

The supplied export shows limited search exposure, not zero reach and not a demonstrated technical indexing failure. The chart records 25 clicks from 258 impressions (9.69% CTR). This is a small sample. It does not justify promising first place, diagnosing a penalty, or blaming one technical metric.

Current technical checks found all 16 sitemap URLs accessible, server-rendered and indexable. The strongest actionable findings are shallow/repeated service copy, limited documented project evidence, some weak commercial-query positions, and an avoidable hero text render delay. Off-site local authority and actual indexed coverage need additional account evidence.

No composite SEO health score is assigned: Core Web Vitals, backlink coverage and Google's actual index decisions were not available. A numerical aggregate would imply more measurement than was performed.

## What every export file establishes

Source folder: `/Users/dhanush/Downloads/eshanborewells.com-Performance-on-Search-2026-10-29/`

| File | Finding | Limitation |
| --- | --- | --- |
| Filters.csv | Web text search; date filter says Last 3 months | The populated chart data is only 1–27 October, plus a zero row for 30 September |
| Chart.csv | 25 clicks, 258 impressions, 9.69% CTR | No daily series, overall position or earlier-period comparison; cannot establish growth or decline |
| Queries.csv | 24 visible query rows, 1 click and 80 impressions | Incomplete query visibility; no query-to-page pairing; cannot assign each query to a landing page |
| Pages.csv | Ten visible URLs, sum of 26 clicks and 481 impressions | Page-level totals are not the chart's property-level totals; do not add them to the chart or treat them as extra unique searches |
| Countries.csv | India: 24 clicks, 252 impressions, 9.52% CTR, average position 4.94 | Country averages blend very different queries and locations |
| Devices.csv | Mobile: 14/172, 8.14% CTR, position 5.84; desktop: 11/86, 12.79%, position 3.85 | Mobile is 66.7% of impressions; different query/location mixes prevent attributing the CTR gap to design alone |
| Search appearance.csv | Header only | Does not establish an error or missing schema eligibility |

Visible queries account for only 80/258 impressions and 1/25 clicks. Google suppresses some query data for privacy; table truncation/aggregation also limits comparisons. Do not infer that the other 24 clicks were branded, bots or bad tracking. The provided data cannot answer that.

## Page opportunities

| URL path | Clicks | Impressions | CTR | Average position | Interpretation |
| --- | ---: | ---: | ---: | ---: | --- |
| / | 18 | 236 | 7.63% | 5.01 | Dominant landing page; clarify company/service identity and support relevant inner pages |
| /borewell-drilling-rajajinagar | 4 | 54 | 7.41% | 6.56 | Strongest locality clicks; actual Rajajinagar office is a useful distinction |
| /borewell-drilling-electronic-city | 1 | 70 | 1.43% | 7.27 | Highest locality exposure; improve decision support, but one click is too small a sample to isolate a snippet problem |
| /borewell-drilling-bengaluru | 1 | 26 | 3.85% | 5.50 | Distinguish practical drilling guide from homepage company overview |
| /groundwater-survey-water-detection-bengaluru | 1 | 23 | 4.35% | 10.09 | Explain point checking, scope questions, outputs to confirm and survey limits |
| /borewell-drilling-sarjapur-road | 0 | 36 | 0% | 9.03 | Add useful site-routing and new/existing-well guidance, not more locality keywords |
| /borewell-drilling-yelahanka | 0 | 15 | 0% | 9.80 | Limited sample; needs authentic project evidence before adding claimed experience |
| /borewell-drilling-peenya | 0 | 14 | 0% | 8.57 | Same limitation; no proof of penalty or exclusion |
| /borewell-drilling-whitefield | 0 | 6 | 0% | 9.17 | Too little exposure to judge CTR |
| http://eshanborewells.com/ | 1 | 1 | 100% | 1.00 | Historical alternative URL impression; current redirect works |

The generic query `borewell drilling` averages 18.11 across nine impressions, and `borewells in bangalore` averages 11.4 across five. These suggest room for commercial-search relevance, but are not reliable universal rankings. Several near-me queries show position 1 on just one or two impressions: that does not establish broad first-place coverage.

## Live technical audit

Verified on 29 October:

- robots.txt: HTTP 200, allows public crawling, references the production sitemap.
- sitemap.xml: HTTP 200; 16 canonical production URLs, no protected generator routes.
- All 16 sitemap URLs: HTTP 200, index/follow, individual titles, correct self-referencing canonicals and parseable JSON-LD.
- Main content and metadata are present in initial HTML; not dependent on client hydration.
- Fabricated URL returns a genuine HTTP 404.
- HTTPS, HSTS, nosniff, SAMEORIGIN and Referrer-Policy present.
- HTTP apex takes two 308 hops to HTTPS www. This is a small efficiency issue, not an indexing blocker. Hosting configuration was not changed.
- Internal login is noindex; its inherited homepage canonical is unnecessary but not a public-indexing blocker. Protected pages remain protected.

These checks show technical indexability, not Google's indexed status, selected canonical or freedom from manual actions. URL Inspection, Page Indexing, Manual Actions and Security Issues exports are needed for those conclusions.

## Content and local trust

The current source already has service-card links, contextual FAQs, schema, a Google Maps profile link, published hours and footer discovery links. Earlier archived reports saying those items are absent are out of date.

Before this audit, core inner-page copy was roughly 317–357 words excluding navigation/contact boilerplate. The problem is repeated access-planning advice and unanswered purchase decisions, not failure to reach an arbitrary word target. Several locality pages remain similar despite varied FAQs.

Company-reported years/site totals, client relationships and testimonials need supporting public project records to become stronger evidence. Forty owner-supplied reviews lack individual dates, project context and source links; they are not independently matched to Google reviews. This audit did not invent ratings, projects, locations or credentials, publish private customer records, or alter the owner's existing claims.

The Google profile URL and owner-supplied rating/hours are already configured. This audit did not verify profile ownership, category accuracy, duplicates, review count, current live rating, service areas or map-pack visibility. Website changes alone cannot establish those facts.

## Implemented in this change

1. Clearer, shorter homepage search title using the common Bangalore spelling and a description that also identifies Bengaluru, the Rajajinagar base and phone contact.
2. Added practical public guidance to seven existing priority pages: drilling, groundwater survey, casing, flushing, Electronic City, Sarjapur Road and Rajajinagar. Covers scope comparison, actual-usage records, questions to confirm, and service limitations. No private rates or customer data published.
3. Distinguished the drilling guide's decision support from the homepage overview. Added a contextual link to commercial/industrial drilling guidance.
4. Linked the seven already-existing locality pages directly from the homepage's relevant service-area section. No new location pages or fake branches.
5. Added missing text separators to the hero heading and process steps for clean extraction.
6. Removed opacity-from-zero from the hero copy entrance so headline and calls to action are visible immediately; retained a small transform-only transition and existing reduced-motion support.
7. Explicit high fetch priority on the preloaded responsive hero image.
8. Mobile lead-form input font size increased to 16px to avoid iOS focus zoom.
9. Revision dates updated only for substantively expanded pages. Existing sitemap/robots/canonical behavior preserved.
10. Regression tests cover practical guidance, no internal price/customer leakage, hero visibility, image priority, area links and revision-date consistency.

Internal generators, pricing, authentication, PDF generation and lead delivery were not changed.

Validation: all 70 automated tests passed (41 quote tests, 29 site/SEO tests), TypeScript and targeted ESLint passed, and `next build --webpack` completed successfully. Local production-browser checks verified desktop and 390px mobile rendering, no mobile horizontal overflow, the correct Electronic City production canonical, visible new guidance and its 29 October revision date. An independent source review found no blocking regressions. Live Google rankings after deployment are not yet measured.

## Performance measurement limitations

The public PageSpeed API returned HTTP 429 / RESOURCE_EXHAUSTED for its shared quota. No new Lighthouse score, CrUX field value or before/after LCP number is claimed. Source fixes remove a known render-delay risk; they do not prove a sub-three-second result.

The responsive hero is preloaded, content images are lazy-loaded with reserved dimensions, and system fonts avoid a webfont request. A browser-selected large image candidate alone does not prove excessive transferred bytes without the actual response/device context.

## Next actions that need account access or genuine business evidence

### Now / this week

- In Search Console, inspect the homepage plus Electronic City, Rajajinagar, Sarjapur Road and survey URLs. Check indexed status, Google-selected canonical, last crawl and rendered page. Request indexing once for changed priority URLs after the GitHub-triggered deployment finishes; do not repeatedly submit them.
- Confirm the sitemap is successful in the correct domain property. Existing URLs remain unchanged, so no replacement sitemap or bulk URL removal is needed.
- Export Page Indexing, Manual Actions, Security Issues and Core Web Vitals. These were not part of the supplied performance export.
- In the existing verified Google Business Profile, reconcile the real business name, appropriate primary category, phone, hours, customer-facing address/service-area setup and website. Do not add keyword-stuffed business names, fake branches or duplicate profiles.
- Add genuine project photographs and request honest reviews from real customers. Do not buy reviews, prescribe ratings or create fake reviews. Keep permissions and a linkable source where available.

### Next 30 days

- Supply three to five publishable project records: locality, month/year, property type, work performed, genuine access constraint, original photo and publication permission. Exclude private phone numbers and financial records. Verified cases provide a more useful distinction than more templated locality pages.
- Check real, relevant business citations and contractor/association/client references for consistent details. No bulk paid-link or automated-directory campaign.
- Compare the next complete 28-day period with the preceding 28 days, split by India, mobile, non-branded commercial queries and landing page. Evaluate impressions and qualified calls, not only average position.
- Track call/WhatsApp clicks with consent-aware analytics if desired; the Search Console export contains no lead conversion information.

### Measurement rules

Use this 1–27 October sample as a partial baseline, not a full monthly trend. An operational target is more relevant non-branded impressions and qualified enquiries; no specific rank or lift is guaranteed. Changes need recrawling and may take weeks or longer to evaluate. CTR at six or fifteen impressions is not sufficient evidence for another rewrite.

## Official references

- Google performance-report limits: https://developers.google.com/search/blog/2022/10/performance-data-deep-dive
- Helpful content: https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- Title links: https://developers.google.com/search/docs/appearance/title-link
- Canonical signals: https://developers.google.com/search/docs/crawling-indexing/consolidate-duplicate-urls
- Redirects: https://developers.google.com/search/docs/crawling-indexing/301-redirects
- Local ranking: https://support.google.com/business/answer/7091
- AI search guidance: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide

Google's guidance supports useful original information and accurate business details, not keyword stuffing or guaranteed first placement. llms.txt and schema are not guarantees of Google or AI recommendation.
