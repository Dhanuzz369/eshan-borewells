# Eshan Borewells SEO implementation report

**Baseline collected:** 10 October 2026 (IST)  
**Production origin checked:** `https://www.eshanborewells.com/`

## Executive summary

Eshan Borewells is a server-rendered Next.js local-service website with an XML sitemap, crawlable robots file, JSON-LD, responsive image handling, telephone and WhatsApp enquiry paths, and an internal-only quotation route. The first audit found a sound technical base and valid schema, with the best safe opportunities in internal linking, page-level semantic markup, and building stronger first-party trust content over time.

No ranking, traffic, or LLM-citation outcome is guaranteed. The changes below improve machine-readable page relationships and discovery without inventing business facts or creating thin location pages.

## Baseline evidence

| Check | Result | Evidence / limitation |
| --- | --- | --- |
| Homepage | `200` | Public response from the production origin. |
| `robots.txt` | `200`; allows crawling and references the sitemap | Confirmed live. |
| `sitemap.xml` | `200`; lists homepage, service pages, and approved locality pages | Confirmed live. |
| Location page | `/borewell-drilling-yelahanka` returns `200` with `index, follow` | Confirmed live. |
| Quotations | `/get-quote` returns `200` but is noindex and absent from the sitemap | Preserved as an internal tool. |
| Structured data | Valid JSON-LD blocks for `WebSite`, `LocalBusiness`, and `FAQPage` | SEO suite reported no JSON syntax errors; it recommended `WebPage` markup. |
| Core Web Vitals | Not verified | PageSpeed Insights rate-limited the audit request; the suite's performance values were heuristic, not real-user measurements. |
| Google data | Not verified | No authenticated Search Console, Analytics, or Business Profile access was supplied. |

The Codex SEO data-only audit reported a diagnostic score of **64/100** (technical 82, on-page 73, schema 92, content 42, GEO 58, images 56). Treat this as a prioritization aid, not a Google score.

## Implemented changes

| Change | Why it matters | Validation |
| --- | --- | --- |
| Added `WebPage` JSON-LD to each indexable service and locality page | Gives crawlers a self-referencing URL, page name, description, language, and relationship to the site. | Unit test checks the canonical page URL and schema identifiers. |
| Added `BreadcrumbList` JSON-LD and visible breadcrumbs to every indexable service and locality page | Provides a visible navigation trail plus matching structured data; no hidden text. | Unit test checks breadcrumb positions and URLs. |
| Added a visible “Explore services and local guidance” link set on the homepage | Links all approved indexable pages from the homepage so they are not sitemap-only discovery targets. | Unit test checks every approved SEO page is included once. |
| Kept location pages indexable rather than redirecting them to the homepage | A redirect tells search engines the target URL is gone and prevents that specific locality URL from remaining a normal indexable landing page. | Live baseline confirms these pages currently return `200` and are in the sitemap. |

## Keyword-to-page map

| Intent cluster | Existing canonical page |
| --- | --- |
| Borewell drilling in Bengaluru / Bangalore | `/borewell-drilling-bengaluru` |
| Groundwater survey / water detection | `/groundwater-survey-water-detection-bengaluru` |
| Borewell casing and completion | `/borewell-casing-installation-bengaluru` |
| Borewell flushing / redevelopment | `/borewell-flushing-redevelopment-bengaluru` |
| Home and villa borewells | `/residential-borewell-drilling-bengaluru` |
| Apartment and layout borewells | `/apartment-borewell-drilling-bengaluru` |
| Farm and agricultural borewells | `/farm-agricultural-borewell-drilling-bengaluru` |
| Commercial and industrial borewells | `/commercial-industrial-borewell-drilling-bengaluru` |
| Approved locality intent | Existing Rajajinagar, Whitefield, Electronic City, Yelahanka, Peenya, KR Puram, and Sarjapur Road pages |

Do not create new area pages until the business confirms the location is actively served and there is enough unique, useful page content. The areas listed in the original brief beyond the current site remain research targets, not published coverage claims.

## Local SEO and content priorities

1. Publish only verified business contact details. The website currently uses the supplied Rajajinagar address and phone number consistently.
2. Add genuine project evidence, dates, and subject-matter review attribution only when the owner can verify it.
3. Request reviews from completed customers without gating or scripting their sentiment. Do not add individual review ratings or aggregate ratings unless they are publicly verifiable.
4. Claim and keep Google Business Profile, Bing Places, Apple Business Connect, and relevant local citations consistent with the website NAP. This needs owner access.
5. Improve existing service pages with owner-approved process details, access considerations, and project photos before expanding the page count.

## Google Search Console and measurement

### First 30 days

- Verify the `https://www.eshanborewells.com/` domain property in Search Console.
- Submit the existing sitemap in Search Console; this audit did **not** submit it.
- Record indexed-page counts, Coverage/Page Indexing reports, queries, impressions, clicks, CTR, and average position.
- Configure consent-aware analytics events for telephone taps, WhatsApp starts, footer leads, and completed quote enquiries.

### Days 31–60

- Compare service and locality page impressions against the baseline.
- Investigate any canonical, duplicate, or crawled-not-indexed states before creating more pages.
- Re-run PageSpeed Insights for mobile and desktop after deployment, noting lab versus CrUX field data.

### Days 61–90

- Review which service and locality pages attract qualified enquiries.
- Refresh only pages with real new project evidence or customer questions.
- Review Business Profile categories, photos, review responses, and NAP consistency across owned listings.

## Outstanding owner decisions

- Confirm whether every published locality is genuinely served; remove any unsupported locality page from the sitemap rather than redirecting it.
- Provide a verified public email address only if it should be shown on the site.
- Provide verified business hours, social profile URLs, map/directions link, credentials, and project evidence before adding them to schema or content.
- Provide Search Console, Analytics, and Google Business Profile access only if reporting or profile changes are desired.

## Preserved behaviour

- Existing homepage branding, navigation, phone, WhatsApp, lead forms, quote pricing, PDF quotation, and Google Sheets lead integration remain unchanged.
- The internal quotation route remains noindex and is not reintroduced in public navigation or the sitemap.
