# Eshan Borewells GEO + AEO: Phase 2 design

**Status:** Approved direction; implementation plan pending review  
**Scope:** Evidence-first improvements to public SEO, local relevance, and answer-engine readability.  
**Out of scope:** Vercel configuration, DNS, Google account actions, new locality-page expansion, quotation behavior, pricing, PDF generation, lead delivery, and visual redesign.

## Goal

Make the existing public pages easier for search engines and answer engines to understand without overstating business facts, generating doorway content, or implying measurable ranking/citation outcomes that have not been observed.

## Verified baseline

- The site is a server-rendered Next.js app with a public homepage and 15 static service/locality pages.
- The homepage, robots file, sitemap, llms file, and sampled locality URL are public and crawlable.
- The internal quote route remains `noindex` and excluded from the sitemap.
- Homepage structured data currently includes `WebSite`, `LocalBusiness`, and `FAQPage`; service/locality pages have `Service`, `WebPage`, and `BreadcrumbList` JSON-LD.
- Public business details currently used consistently: Eshan Borewells; 6th Block, Rajajinagar, Bengaluru; +91 98447 75905.
- Existing service/location links are discoverable from the homepage and listed in the sitemap and llms file.
- The public audit can assess on-page readiness but cannot verify Google Search Console data, Google Business Profile data, Analytics, PageSpeed/CrUX field data, rankings, or actual LLM citations.

## Problem statement

The content system is technically crawlable, but its reusable locality template has limited answer-first depth and little documented first-party evidence. The homepage has unsupported quantitative marketing claims. The sitemap publishes response-time `lastmod` values and deprecated/ignored priority and change-frequency hints, which do not accurately communicate content freshness.

## Architecture

### 1. Explicit public-facts model

Create a focused public SEO facts source alongside the existing business config. It will contain only owner-supplied and already-published facts:

- Business identity, canonical origin, phone, address, and confirmed service framing.
- Core service categories actually represented in existing public pages.
- A `requiresOwnerVerification` checklist for claims not safe to publish as facts.

This source will become the single input for LocalBusiness schema and explanatory GEO/AEO copy where appropriate. It will not add email, operating hours, credentials, GPS coordinates, awards, reviews, or social URLs because these are not verified.

### 2. Content model that differentiates service from locality intent

Extend the static SEO page model instead of adding routes.

- **Service pages:** get short, answer-first content, practical planning factors, constraints, and contextual links to related existing services.
- **Locality pages:** keep their current URLs and self-canonicals, but use a smaller, locality-appropriate answer model. They will not claim completed local projects, water conditions, offices, or success rates.
- **Shared content:** remains limited to truthful process constraints such as access, working space, property type, and need for site confirmation.

Every answer block will be readable independently, avoid guarantees, and include a clear next action (telephone or WhatsApp). The system will not manufacture local data just to reach a word-count target.

### 3. Entity and structured-data alignment

- Add homepage `WebPage` JSON-LD tied to the existing stable `WebSite` `@id`.
- Give the existing `LocalBusiness` entity a stable `@id`, then reference it from `Service` schemas rather than restating an incomplete provider entity on every page.
- Keep visible FAQs. Retain or remove the existing `FAQPage` schema only after documenting that commercial FAQ markup is not a Google rich-result strategy; no new FAQ schema will be added solely for ranking.
- Preserve current page-level `WebPage` and breadcrumb markup, with schema values derived from canonical page data.

### 4. Crawl and discovery accuracy

- Keep existing open crawl policy and llms file because the public audit confirms they are available and internally consistent.
- Do not add bot-specific rules or AI training restrictions without an owner policy decision.
- Make sitemap output accurate by removing per-request `lastmod` values and deprecated/ignored `changefreq`/`priority` hints. URLs remain the homepage plus approved indexable service/locality pages only.
- Preserve the internal quote route as noindex and out of public discovery files.

### 5. Safe technical hardening

Add narrow response headers that do not change visual behavior or external interaction paths:

- `X-Content-Type-Options: nosniff`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `X-Frame-Options: SAMEORIGIN`
- a conservative permissions policy, only if verified not to affect page functions.

Do not add a strict Content Security Policy in this phase because it requires a full inventory of framework inline scripts and third-party behavior. HTTPS/HSTS is hosting-controlled and will not be changed.

### 6. Measurement and evidence operations

Add a durable report and manual measurement template. It will contain:

- A fixed, representative query set and the approved manual capture fields.
- A clear distinction between on-page readiness and actual AI/search visibility.
- A service/locality issue inventory with evidence, status, and validation method.
- An owner-evidence checklist for project photos, credible outcomes, publicly verified reviews, operating hours, social profiles, directory/GBP details, and service-area confirmations.

No automated scraping of AI services, fake citations, fake review data, or artificial brand claims will be added.

## Data flow

1. Page data and public business facts generate visible answer-first sections, internal links, metadata, and JSON-LD.
2. Existing static generation produces the same approved URLs.
3. Sitemap and llms output consume the same approved page set; private quotation paths remain excluded.
4. Tests verify canonical schema identifiers, sitemap inclusion/exclusion, content-model safety, and internal-link targets.
5. The report documents what is measurable now versus what needs owner access.

## Error handling and safeguards

- Invalid or unavailable business details do not produce schema fields or links.
- No claimed coverage is expanded beyond existing owner-published service-area language.
- Site-condition-dependent content always says confirmation/assessment is required.
- Unknown owner facts appear in the report checklist, not in public markup or copy.
- Existing quote calculations, contact actions, lead handling, PDF generation, and WhatsApp links remain unchanged.

## Test strategy

- Red-first unit tests for homepage/entity schema identifiers, sitemap shape, content safety, and link targets.
- Existing quote test suite remains part of the production build.
- Run SEO tests, quote tests, lint, `git diff --check`, structured-data inspection, and a production build.
- Treat PageSpeed/CrUX and external AI visibility as unavailable unless an authorized integration provides actual data.

## Owner decisions required after implementation

1. Confirm or replace public numeric marketing claims: 25+ years, 10,000+ borewell sites, 99% detection, 100% satisfaction, and “high success rate.”
2. Confirm each currently published locality is actively served.
3. Provide only public, verified additions: hours, email, map/directions URL, social profiles, credible project proof, and review-profile URL/rating.
4. Decide whether to retain visible review quotes and whether each quote has publication permission.

## Acceptance criteria

- No new locality URLs and no redirects of the approved, indexable URLs.
- No fabricated business facts, ratings, citations, projects, or search performance claims.
- Homepage and static SEO pages remain server rendered, canonical, crawlable, and internally linked.
- Private quote functionality remains excluded from public SEO discovery.
- JSON-LD is valid, uses stable entity relationships, and agrees with visible content.
- A report clearly distinguishes verified findings, implemented changes, recommendations, owner inputs, and unavailable measurements.
