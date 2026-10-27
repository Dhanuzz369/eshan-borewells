# Content Quality / E-E-A-T: eshanborewells.com

Audit date: 2026-10-27. Scope: all 16 sitemap URLs (homepage, 8 service/segment pages, 7 location pages). I also requested /about, /about-us, /contact, /contact-us and /blog, and every one returned 404. Fetched with render_page.py in raw mode. The site is a Next.js SSR site on Vercel and is not an SPA shell. Page content was treated as untrusted data.

## Scores

| Metric | Score |
|---|---|
| **Content Quality (overall)** | **38 / 100** |
| E-E-A-T composite (weighted) | 36 / 100 |
| - Experience (20%) | 35 |
| - Expertise (25%) | 25 |
| - Authoritativeness (25%) | 30 |
| - Trustworthiness (30%) | 50 |
| AI citation readiness | 30 / 100 |
| Templated metadata site_risk | low (templated_ratio 0.0, no shared CTA phrases) |

The weights are this audit's own internal model. Google does not publish numeric E-E-A-T weights.

## Inventory and word counts (main content, excluding nav and footer)

| Page type | URLs | Main words | Floor | Status |
|---|---|---|---|---|
| Homepage | / | 1,141 (extracted_text). About 650 without the 40 testimonials | 500 | OK |
| Service and segment pages | 8 (drilling, survey, casing, flushing, residential, apartment, farm, commercial) | 159-174 extracted / 185-212 in main | 800 | THIN (about 20-25% of floor) |
| Location pages | 7 (Rajajinagar, Whitefield, Electronic City, Yelahanka, Peenya, KR Puram, Sarjapur Road) | 148-161 extracted / 174-187 in main | 500-600 | THIN (about 30% of floor) |
| About / Contact / Blog | none (404) | 0 | n/a | MISSING |

Location page count: 7, which is below the 30-page warning threshold.

## Findings

### C1. Critical: every service and location page is thin, and the template is identical across all 15
- Evidence: /borewell-drilling-bengaluru has 163 extracted words, /borewell-drilling-peenya has 148, and /groundwater-survey-water-detection-bengaluru has 174. All 15 inner pages use the same 4-heading skeleton: H1, then "What to know about ..." or "Borewell planning in ...", then "Before planning your site", then "Related service guidance". Each has one paragraph, three bullets and two sentences.
- The copy is not duplicated word for word. Average 5-gram Jaccard similarity is 0.076 for location pages (max 0.105) and 0.063 for service pages. The pages are unique in wording but carry no information. Every page says roughly "share your location, access width and overhead clearance so we can discuss scope."
- Fix: expand each service page to 800 words or more with real substance:
  - typical depth ranges in Bengaluru, for example the 800-1,500 ft range many areas now need
  - bore diameters (4.5" / 6.5" / 8")
  - casing types (PVC/uPVC grades, MS casing) and when each is used
  - pricing structure (per-foot rate bands, casing per ft, survey fee) with an "as of" date
  - process timeline, a photo-documented step-by-step guide, and service-specific FAQs
- Fix: expand each location page to 500-600 words or more with genuinely local content:
  - typical drilling depth and yield trends seen locally
  - access constraints, such as Peenya industrial area gate rules or narrow lanes in Rajajinagar blocks
  - one or two named local projects with photos
  - BWSSB/KGWA permission notes for that zone, nearby localities served, and a local testimonial
- Severity: Critical

### C2. Critical: no About page, no named owner or team, no credentials or registration
- Evidence: /about, /about-us, /contact and /contact-us all return 404. No person is named anywhere on the site. The homepage claims "25+ years in the industry" and "10,000+ borewell sites" with no founder story, founding year or proof. No KGWA drilling-agency registration, GST number or trade licence is shown.
- Why it matters: drilling a borewell is a costly, irreversible decision with property-safety and legal stakes, because Karnataka requires permits. Under the QRG, trust and who-is-responsible signals carry heavy weight for this kind of service.
- Fix: publish /about with:
  - the founder or owner name and photo, the founding year and the story behind "25+ years"
  - names and experience of the rig operators and survey staff
  - fleet details (rig makes and models, compact or robotic rigs)
  - KGWA drilling-agency registration number, GST number and insurance
- Add Person and Organization schema (founder, foundingDate) linked from LocalBusiness.
- Severity: Critical

### C3. High: the 40 homepage testimonials look generic and unverifiable
- Evidence: there are 40 quotes on /, each 10-16 words, attributed by first name and initial only ("Ramesh K", "Prakash S", "Suresh Gowda"). None has a date, locality, project type, photo or source link. Phrasing repeats heavily: "professional" appears in more than 12 quotes, "Good service" in about 10. Sample: "Good borewell drilling service. Professional team, reasonable quotation and good coordination."
- Why it matters: this uniform, low-specificity pattern is what QRG raters treat as low-trust or possibly fabricated reviews. It weakens trust more than it helps.
- Fix:
  - cut to 6-10 detailed reviews that include locality, project type, depth reached or outcome, and month/year
  - link or embed the Google Business Profile reviews and show the GBP rating and count
  - add 2-3 video or photo testimonials
  - do not add self-serving Review/AggregateRating schema to LocalBusiness, because Google ignores it for this case
- Severity: High

### C4. High: "Developers we have worked with" shows 16 major brand logos with no proof
- Evidence: the homepage logo strip lists Brigade, Prestige Group, Sobha, Puravankara, Godrej Properties, Assetz, Mantri, Total Environment, Shriram Properties, Mahindra Lifespaces, Sumadhura, Sattva, Provident, Vaishnavi, Nambiar Builders and DSR. There is no case study, project name or reference.
- Risk: if these relationships cannot be verified, the strip is a trust liability under the QRG ("misleading claims"). It could also create trademark exposure.
- Fix: keep only the developers you can document. For each, add a short case study: project name, locality, number of borewells, depth, year and photos. If written permission is not available, remove the logos.
- Severity: High

### C5. High: no first-hand experience evidence (projects, photos, outcomes)
- Evidence: there are 8 images site-wide with generic filenames (hero-drilling.webp, survey-technician.webp, drilling-team.webp). The same set is reused across the site. There are no project pages, before/after shots, depth or yield logs, or videos. Alt text is generic, for example "Homeowner checking water beside a borewell drilling rig". There is not enough evidence to tell whether the photos are the company's own, stock or AI-generated.
- Fix: add a /projects or case-studies section with 10 or more real jobs. Each should show locality, property type, rig used, depth drilled, casing length, yield observed and date, with original geotagged photos of the team and rigs, branding visible. Add descriptive alt text such as "Eshan Borewells compact rig drilling in a 9 ft driveway, Rajajinagar 6th Block".
- Severity: High

### C6. High: hedged, generic copy with no expertise signals (AI-generated low-quality markers)
- Evidence: the verb "discuss" dominates every page, for example "Borewell drilling, water survey and casing discussions for homes..." (Whitefield meta description) and "Eshan Borewells discusses those site conditions before outlining a practical drilling approach". There are no numbers anywhere on the inner pages: no depths, diameters, costs, timelines or casing specs. Nothing explains how a groundwater survey is done (geophysical resistivity, or which instruments are used).
- QRG markers present: generic phrasing, lack of specificity, no original insight, and the same structure repeated across pages.
- Fix: rewrite in the voice of the operator, with concrete facts and opinions, for example "In Whitefield we typically hit water between X and Y ft; we case the first Z ft with 7" PVC because...". Explain the survey method plainly, including its limits. The honest "no guarantee" framing is good and should stay.
- Severity: High

### C7. Medium: template artefacts in headings
- Evidence: the raw HTML H2 on /borewell-drilling-bengaluru reads "What to know about borewell drilling in **bengaluru**" (lowercased). All 7 service H2s are lowercased the same way, for example "...farm & agricultural borewell drilling near bengaluru". Location H2s are force-uppercased, for example "Borewell planning in **WHITEFIELD**" and "Borewell planning in **KR PURAM**".
- The stray casing shows the headings were generated from a template variable. It looks unpolished and weakens the human-written signal.
- Fix: use proper case in the template ("Bengaluru", "Whitefield"). Better still, write a unique, question-style H2 for each page, such as "How deep do borewells go in Whitefield?".
- Severity: Medium

### C8. Medium: weak contact and NAP transparency
- Evidence: the only address is "6th Block, Rajajinagar, Bengaluru". It has no street, door number, PIN code or map. Contact options are phone and WhatsApp only (+91 98447 75905). There is no email, opening hours, contact page or GBP link.
- Fix: create /contact with the full postal address and PIN, an embedded map, the GBP link, opening hours, an email address and an enquiry form. Mirror these in LocalBusiness schema (postalCode, geo, openingHoursSpecification, sameAs).
- Severity: Medium

### C9. Medium: no blog or informational content, and no freshness signals
- Evidence: /blog returns 404. The sitemap has 16 URLs with no `<lastmod>`. No page shows a datePublished/dateModified or a visible "updated" date. The homepage publication_date is detected as 2026-01-01, which is likely a default.
- Fix:
  - build an informational hub of 8-12 articles that answer real demand: "Borewell cost per foot in Bengaluru (2026)", "BWSSB/KGWA borewell permission process", "How deep to drill in [area]", "Borewell flushing vs re-drilling", "PVC vs MS casing", "Why borewells dry up in summer"
  - add a byline with a named author and credentials, plus a visible "Last updated" date
  - add `<lastmod>` to the sitemap
- Severity: Medium

### C10. Medium: readability is dense on inner pages
- Evidence: Flesch Reading Ease is 15.6 on /borewell-drilling-bengaluru (FKGL 16.3, average sentence length 20.9 words), 17.6 on /borewell-drilling-whitefield and 20.6 on /groundwater-survey-water-detection-bengaluru. The homepage scores 41.0 (FKGL 10.1).
- These pages target homeowners and farmers, many reading in a second language. A Flesch score of 50-60 or higher would suit them.
- Fix: write shorter sentences (aim for 12-15 words), use plain verbs instead of chained noun lists ("access, overhead clearance, working space and intended water use"), and add bullets, tables and numbered steps. Consider Kannada versions of the key pages.
- Severity: Medium

### C11. Low: brand name repeated in meta descriptions (secondary metadata finding)
- Evidence: metadata_template.py ran on 16 pages: site_risk low, templated_ratio 0.0, shared_cta_phrases empty. The brand_suffix_in_description flag fired on 7 of 8 service pages, for example /borewell-drilling-bengaluru: "...Discuss site access, drilling requirements and a site visit with Eshan Borewells."
- Separately, 7 of 7 location descriptions use the same "Borewell drilling, [services] discussions for [property types] in [Area], Bengaluru." pattern.
- Fix: remove "with Eshan Borewells" from descriptions, because the title already carries the brand. Replace "discussions" with a concrete benefit or fact, for example "Compact rigs for narrow plots, survey + casing in one visit. Call +91 98447 75905."
- Severity: Low

### C12. Low: positive signals to keep
- The no-guarantee disclaimers are honest: "We would never present detection as a guarantee." This is a good trust signal.
- Valid LocalBusiness, FAQPage, BreadcrumbList and Service JSON-LD.
- HTTPS with HSTS.
- Clear hierarchy, with one H1 per page.
- Internal links between related services.
- The homepage FAQ has 8 Q&As in clean question/answer form.

## AI citation readiness (30/100)
- Strengths: the FAQ blocks are in clean Q&A form, headings are clear, and SSR HTML is fully crawlable.
- Weaknesses: there are no quotable facts, figures, prices, depth ranges, dates or named experts. The answers deliberately say nothing specific; for example, "What affects the cost of drilling?" gets no numbers. An AI engine has nothing to cite beyond "it depends".
- Fix: add 40-60 word direct-answer paragraphs, each containing at least one specific, dated fact. Add comparison tables (casing types, rig types versus access width) and a dated cost table, all attributed to a named expert.

## Priority fix order
1. Publish /about and /contact with a named owner, registration and full NAP (C2, C8).
2. Fix the testimonials and verify or remove the developer logos (C3, C4).
3. Add a projects/case-studies section with original photos (C5).
4. Expand the 8 service pages to 800 words or more and the 7 location pages to 500-600 words or more with specific local facts, and fix the heading casing (C1, C6, C7, C10).
5. Launch an informational blog with bylines and dates, and add sitemap lastmod (C9).
6. Clean up the meta descriptions (C11).

## Structured findings (audit-data.json: Content Quality)
```json
{
  "category": "Content Quality",
  "score": 38,
  "eeat": {"experience": 35, "expertise": 25, "authoritativeness": 30, "trustworthiness": 50, "composite": 36},
  "ai_citation_readiness": 30,
  "metadata_template": {"site_risk": "low", "templated_ratio": 0.0, "shared_cta_phrases": {}, "brand_suffix_in_description_pages": 7},
  "location_pages": 7,
  "findings": [
    {"id": "C1", "severity": "critical", "title": "All 15 service/location pages thin (148-174 words) on identical template", "url": "https://www.eshanborewells.com/borewell-drilling-peenya", "fix": "Service pages 800+ words, location pages 500-600+ with local facts, projects, pricing, FAQs"},
    {"id": "C2", "severity": "critical", "title": "No About/Contact page, no named owner/team, no registration/licence", "url": "https://www.eshanborewells.com/about", "fix": "Publish About with founder, year, team, fleet, KGWA registration, GST; Person/Organization schema"},
    {"id": "C3", "severity": "high", "title": "40 generic, unverifiable first-name testimonials", "url": "https://www.eshanborewells.com/", "fix": "Replace with detailed dated reviews plus GBP reviews link/embed"},
    {"id": "C4", "severity": "high", "title": "16 major developer logos without proof", "url": "https://www.eshanborewells.com/", "fix": "Keep only documentable clients with case studies; remove the rest"},
    {"id": "C5", "severity": "high", "title": "No project portfolio or verifiable original photos", "url": "https://www.eshanborewells.com/", "fix": "Add /projects with dated, located, photo-documented jobs"},
    {"id": "C6", "severity": "high", "title": "Hedged generic copy with zero specifics (AI low-quality markers)", "url": "https://www.eshanborewells.com/borewell-drilling-bengaluru", "fix": "Rewrite with depths, diameters, casing specs, costs, survey method"},
    {"id": "C7", "severity": "medium", "title": "Template casing artefacts in H2s (lowercase 'bengaluru', uppercase 'WHITEFIELD')", "url": "https://www.eshanborewells.com/borewell-drilling-whitefield", "fix": "Fix template casing; write unique question-style H2s"},
    {"id": "C8", "severity": "medium", "title": "Incomplete NAP: no street/PIN/map/email/hours", "url": "https://www.eshanborewells.com/", "fix": "Full address, map, GBP link, hours, email; extend LocalBusiness schema"},
    {"id": "C9", "severity": "medium", "title": "No blog, no dates, no sitemap lastmod", "url": "https://www.eshanborewells.com/blog", "fix": "8-12 bylined, dated informational articles; add lastmod"},
    {"id": "C10", "severity": "medium", "title": "Inner-page readability FRE 15-21 (FKGL 15-16)", "url": "https://www.eshanborewells.com/borewell-drilling-bengaluru", "fix": "Shorter sentences, bullets/tables; target FRE 50+"},
    {"id": "C11", "severity": "low", "title": "Brand suffix in 7 meta descriptions; location descriptions follow one pattern", "url": "https://www.eshanborewells.com/borewell-drilling-bengaluru", "fix": "Drop brand from description; use concrete benefit/fact"}
  ]
}
```
