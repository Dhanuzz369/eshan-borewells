# Eshan Borewells GEO/AEO implementation report

**Prepared:** 2026-10-10  
**Scope:** Evidence-first improvements to existing public pages for search and answer-engine comprehension.  
**Canonical site:** <https://www.eshanborewells.com>

## Executive summary

The implementation aligns the business entity schema, adds answer-first service/locality content to the 15 existing static SEO pages, removes unsupported homepage performance claims, and makes sitemap output deterministic. The internal `/get-quote` route remains private to public discovery and no routes were added. These are on-page and technical readiness changes only; they do not guarantee a ranking, indexation, citation, lead, or recommendation outcome.

## Public baseline and evidence

The site is a server-rendered Next.js application. At implementation time, the homepage and 15 existing service/locality URLs were discoverable through internal links and the sitemap. `robots.txt` allowed general crawling and linked the sitemap. `llms.txt` described the same public site, service scope, contact details and general service-area framing. The quote tool was configured `noindex` and omitted from public discovery output.

Public business details used consistently by the site: Eshan Borewells; 6th Block, Rajajinagar, Bengaluru; +91 98447 75905. The business owner supplied the statements “25+ years” and “10,000+ borewell sites”; public copy now labels these as company-reported and not independently verified. The owner also described service coverage as Bengaluru and nearby areas, generally within about 100 km; exact availability must be confirmed for each site.

The public diagnostic audit captured on 2026-10-10 reported heuristic scores of GEO 77, content 45, schema 92, and technical 82. These scores are scanner-specific diagnostics, not Google scores, positions, indexing measurements, or citations. Findings included the lack of a strong answer-first block, limited attribution/readability signals, no homepage `WebPage` entity, inaccurate sitemap freshness hints, and missing baseline response headers. No Google Search Console, Google Business Profile, Analytics, CrUX/PageSpeed field data, ranking report, or AI citation dataset was available for this work.

## Implemented changes

| Area | Evidence / issue | Change | Validation |
| --- | --- | --- | --- |
| Entity schema | Home/service entities were not consistently linked | Added centralized public business facts, stable `#localbusiness` identity, homepage `WebPage` entity, and provider reference on service pages | Schema unit tests; rendered-page build |
| Optional facts | Email and other details must not be invented | Unconfigured optional contact facts are omitted from JSON-LD and contact actions | Schema unit test |
| Homepage claims | 99% accuracy, 100% satisfaction, high-success, no-damage, free-visit and guaranteed-outcome phrasing lacked evidence | Replaced with conditional process/site language; retained 25+ and 10,000+ only as company-reported figures | Content review and tests |
| Service/locality pages | Existing pages needed concise standalone answers and useful connections | Added answer, planning considerations, and related approved links for the same 15 URLs | Content safety, unknown slug and link-target tests |
| Locality safeguards | Local geology, completed local jobs, and local office presence were not evidenced | Locality answers focus on customer site/access/property details and availability confirmation | Locality claim tests |
| Sitemap | Request-time `lastmod` and `priority`/`changefreq` did not reflect actual changes | Emits only homepage and approved SEO URLs; no freshness or priority claims | Sitemap shape/exclusion tests |
| Security headers | Three baseline headers absent | Added `nosniff`, `SAMEORIGIN`, and `strict-origin-when-cross-origin`; no CSP | Config test |
| Discovery | Public `robots.txt` and `llms.txt` were already consistent | Kept them open and aligned; did not add bot-specific directives | Route inspection |
| FAQ markup | Visible FAQs answer practical customer questions; FAQ structured data is not a Google rich-result strategy for this commercial site | Retained visible FAQs and their existing FAQPage JSON-LD for semantic consistency, without claiming a rich result or ranking benefit | Rendered schema inspection |

## Search intent and answer map

The existing content covers these query families without promising outcomes:

- Borewell drilling in Bengaluru and existing locality pages.
- Groundwater survey and water detection for planning.
- Borewell casing and completion.
- Flushing/redevelopment of an existing borewell, subject to assessment.
- Residential, apartment, farm/agricultural, commercial and industrial requirements.
- Site access, narrow roads, working space and machinery suitability.
- Service availability around Bengaluru, confirmed against the exact location.

The related-link model only targets existing indexable routes and filters self-links. The homepage provides a direct explanation of service scope and service-area limits. No locality expansion or unsupported local groundwater assertions were added.

## Remaining owner evidence and limitations

The internal `requiresOwnerVerification` checklist in `app/public-business-facts.ts` records these items. Provide evidence before adding any of the following: substantiation for company-reported years/sites; completed project references and permission to publish them; independently verifiable review source and review permissions; operating hours; public email/social/directions links; precise service boundaries by locality; qualifications, registrations or awards; survey methodology/accuracy claims; or detailed historical outcomes. Do not convert service coverage or any site-specific result into a guarantee.

The visible customer testimonials currently do not have individual star ratings or a verified aggregate rating because the source ratings were not supplied. Do not add a 4.5-star or 1,000+ review claim without a public verifiable source and evidence of permission.

## 30/60/90-day follow-through

- **30 days:** Verify Google Business Profile name/address/phone/category/service area and ensure the public site details match. Add permitted project evidence and review-source links only after owner approval.
- **60 days:** Connect Search Console and analytics; record indexed/canonical state and query/page baselines. Review which existing service pages attract impressions and improve content from actual enquiry questions.
- **90 days:** Compare non-branded local query impressions/clicks, qualified enquiries and crawl/indexation against the saved baseline. Reassess service areas and evidence; do not use anecdotal AI answers as performance proof.

## Validation status

Source tests cover entity schema, content safety, link relations, sitemap output and response-header config. Full application test, lint, production build, and local route smoke checks are tracked in the implementation handoff. No production hosting settings or Vercel deployment were changed.
