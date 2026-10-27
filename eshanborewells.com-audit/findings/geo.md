# GEO / AI Search Readiness: eshanborewells.com

Audit date: 2026-10-27. Scope: homepage, 8 service pages, 7 locality pages (all 15 sitemap URLs fetched), robots.txt, llms.txt, sitemap, brand mentions.

## GEO Readiness Score: 42 / 100

| Dimension | Weight | Score | Weighted |
|---|---|---|---|
| Citability | 25% | 25 | 6.3 |
| Structural Readability | 20% | 55 | 11.0 |
| Multi-Modal Content | 15% | 40 | 6.0 |
| Authority & Brand Signals | 20% | 15 | 3.0 |
| Technical Accessibility | 20% | 80 | 16.0 |
| **Total** | | | **42** |

The technical setup is strong: SSR, every crawler allowed, a good llms.txt, and schema. The weak points are the content and off-site signals. The site does not answer any question an AI engine would cite: cost, depth, timeline, and process are all left as "depends on your site". It also has almost no third-party footprint yet. The GitHub repo was created on 2026-09-30, so the site is about 4 weeks old.

## Platform scores (estimated)

| Platform | Score | Main limiter |
|---|---|---|
| Google AI Overviews | 35 | Needs Google indexing plus a Google Business Profile (GBP) and reviews; no answer passages with numbers |
| ChatGPT Search | 30 | Bing index plus third-party mentions (Justdial/IndiaMART/Reddit) are missing |
| Perplexity | 35 | Crawlable, but nothing citable; competitors have directory listings |
| Bing Copilot | 30 | Bing Places listing not found; no numbers to cite |

## AI crawler access

robots.txt has `User-agent: * / Allow: /` and a Sitemap line. There are no bot-specific rules. A live user-agent test returned HTTP 200 with the full SSR content for every bot below, so the Vercel edge is not blocking any of them.

| Crawler | Governs | Status |
|---|---|---|
| OAI-SearchBot | ChatGPT Search citations | Allowed (200) |
| GPTBot | OpenAI training only | Allowed (200) |
| Claude-SearchBot | Claude search citations | Allowed (200) |
| ClaudeBot | Anthropic training only | Allowed (200) |
| PerplexityBot | Perplexity search | Allowed (200) |
| Google-Extended | Gemini/Vertex training and grounding (not AI Overviews; AIO follows Googlebot) | Allowed (wildcard) |
| Googlebot / bingbot | Google Search + AIO / Bing + Copilot | Allowed (200) |
| CCBot, Applebot-Extended, cohere-ai | Training only | Allowed (wildcard) |

Verdict: Pass. Allowing the training bots is fine for a local lead-generation business. More model exposure to the brand is a net positive.

## llms.txt / RSL

- `/llms.txt`: **Present and well-formed** (H1, blockquote summary, sectioned link list covering all 15 URLs, and business details: NAP, coverage radius, and a "surveys do not guarantee water" disclaimer).
- `/llms-full.txt`: 404 (optional).
- RSL 1.0 `/license.xml`: 404 (optional; not needed for a local services site).
- Minor: llms.txt also hedges ("discussions"). Add the quantified facts from Fix 1 once they are published.

## Findings

### F1. No citable answers on cost, depth, process, or timeline (Critical)
- **Evidence:** No page on the site has a single numeric claim (₹, feet, days, inch) in its body text. The homepage FAQ "What affects the cost of drilling?" answers only "Depth, ground conditions, site access, casing and related work all affect the scope. A useful estimate starts with the particulars of your site." Service pages say "water availability and the final scope depend on the site". The most common AI queries for this niche are "borewell cost per foot Bangalore", "how deep is a borewell in Bangalore", "how long does borewell drilling take", "casing cost per foot", and "borewell permission BWSSB/KGWA". None of them can be answered from this site, so AI engines will cite competitors or Justdial/NoBroker articles instead.
- **Fix:** Add a "Borewell cost in Bengaluru (2026)" section to /borewell-drilling-bengaluru, about 150 words that open with the direct answer, plus a table:
  - drilling rate per foot by depth slab (e.g. 0-300 ft, 300-500 ft, 500-1000 ft, 1000+ ft)
  - casing rate per foot for 7" PVC vs MS
  - survey / point-check fee
  - typical total for a 1,000 ft residential well
  - typical depths by area (e.g. 800-1,500 ft in east/south Bengaluru)
  - typical rig time (e.g. 1-2 days of drilling)
  
  Label every figure as "typical range, confirmed after site visit" so the honesty positioning stays intact. Add separate H2s: "How deep are borewells in Bengaluru?", "How long does borewell drilling take?", "Do I need permission for a borewell in Bengaluru?" (Karnataka Ground Water Authority / BWSSB registration), and "Step-by-step borewell drilling process". Mirror these answers in the FAQPage schema.
- **Effort:** Medium (1-2 days; needs real price data from the owner).

### F2. Service and locality pages are thin and templated (High)
- **Evidence:** All 15 inner pages have 148-174 extracted words. Each has the same structure (H1 > "What to know about..." > "Before planning your site" > "Related service guidance") and no unique facts. Pairwise text similarity averages 0.16 (max 0.35), so the pages are not duplicates, but each carries only one generic paragraph. Locality pages contain nothing area-specific (no groundwater depth, terrain, BBMP ward/water-table context, or past jobs). The pages read as doorway-style variations, and an AI engine has nothing to extract from them.
- **Fix:** Bring each service page to 600-1,000 words with question-led H2s, one ~130-170-word self-contained answer block per H2, a process list, and a pricing/spec table. For locality pages, add local facts: typical drilling depth seen in that area, rock/soil profile, common access constraints (e.g. Whitefield gated communities, Peenya industrial plots), 1-2 anonymised job summaries ("1,200 ft, 7" casing, 2 days, Hoodi, Aug 2026"), and the localities nearby.
- **Effort:** High (about 1 day per 3 pages).

### F3. Almost no brand or entity footprint off-site (Critical)
- **Evidence:**
  - Wikipedia search: 0 hits. Wikidata: no entity.
  - Brave Search (the index behind Claude search) for "Eshan Borewells" returns only github.com/Dhanuzz369/eshan-borewells. `site:eshanborewells.com` returns nothing, so the site is not yet in the Brave index.
  - For "Eshan Borewells Bangalore", Brave instead returns competitors: Kannan Borewells (several domains, Facebook, Twitter, IndiaMART), Sri Shankar, Ganga, Krishna, and others.
  - The phone number +91 98447 75905 has no directory citations on Brave.
  - YouTube and Reddit show no mentions; the automated searches were inconclusive.
  - Justdial and Sulekha returned 403 to automated fetches, so they **need a manual check**.
  - The site has no `sameAs` in its LocalBusiness schema and no links to a Google Maps/GBP profile or social accounts.
- **Fix:**
  - Claim or verify the Google Business Profile (Rajajinagar), linking it to the site, adding photos and service list, and actively requesting reviews.
  - Create Bing Places (it feeds ChatGPT and Copilot).
  - List on Justdial, Sulekha, IndiaMART, NoBroker Services, and UrbanClap/Urban Company if eligible, using an NAP that exactly matches the site.
  - Start a YouTube channel with short rig/drilling videos. YouTube has the strongest correlation with AI citations, at about 0.74.
  - Answer borewell questions on r/bangalore with disclosure.
  - Add every profile URL to `sameAs`.
- **Effort:** Medium (listings take 1 day; reviews and video are ongoing).

### F4. Authority claims are unverifiable to machines (High)
- **Evidence:**
  - "25+ years in the industry" and "10,000+ borewell sites" appear only as UI stat tiles; they are not in the extracted body text or in schema.
  - "Developers we have worked with" (Prestige, Sobha, Brigade, Godrej Properties, Puravankara, and 11 more) are CSS-sprite logos that exist only as `aria-label` text. They have no project names and no proof.
  - The 40 testimonials are anonymous: no name, locality, date, or source, and there is no Review/AggregateRating markup.
  - There is no About page (/about, /about-us → 404), no owner or founder name, no year founded, and no GST/registration number.
  - No visible "last updated" date (render detected 2026-01-01; there is no dateModified).
- **Fix:**
  - Create an /about page covering: founder name and photo, founding year, rig fleet (types and count), service history, and GST/udyam number.
  - Add `foundingDate`, `founder`, `numberOfEmployees`, and `knowsAbout` to the LocalBusiness schema.
  - Turn the developer logos into a text list with 2-3 named project case studies, with permission.
  - Attribute testimonials with first name, locality, and month, or embed or link Google reviews.
  - Only add AggregateRating if it reflects real first-party reviews; don't mark up third-party ones.
  - Show "Updated <date>" on service pages and add `dateModified`.
- **Effort:** Low-Medium.

### F5. Headings are branded rather than query-shaped (Medium)
- **Evidence:** The homepage H1 is "Water starts with the right groundwork." Other headings include "The site decides the plan." and "Good questions deserve clear answers." None of these contain the entity or a query term. The homepage FAQ has 8 good question-format Q&As, but the answers are deflective. A template bug produces inconsistent casing in service-page H2s: "What to know about borewell drilling in bengaluru" in lowercase, and "Borewell planning in WHITEFIELD" in uppercase.
- **Fix:**
  - Change the H1 to "Borewell Drilling in Bengaluru: Eshan Borewells" and keep the tagline as a subhead.
  - Use question H2s ("How much does a borewell cost in Bengaluru?").
  - Fix the template so it title-cases locality and service names.
  - Rewrite the FAQ answers to open with a direct, quantified sentence in the first 40-60 words.
- **Effort:** Low.

### F6. Multi-modal content is thin (Medium)
- **Evidence:** The homepage has 11 `<img>` tags with descriptive alt text, but only 7 distinct files; survey-technician, large-drilling-rig and borewell-water-flow each appear twice. The photos appear to be generic or illustrative. The site has no video, no data tables, no process diagram, and no ImageObject/VideoObject markup. Inner pages have no supporting media.
- **Fix:** Add real job-site photos (rig at a named locality, casing, and yield test), each with a caption containing the facts. Add a pricing/depth table (see F1) and a 60-90 s YouTube video per service, embedded with VideoObject schema.
- **Effort:** Medium.

### F7. Technical: minor issues (Low)
- **Evidence:**
  - Next.js SSR/prerender (`X-Nextjs-Prerender: 1`) means all content is present in the raw HTML. is_spa is false, which is excellent.
  - Schema present: canonical tags, WebSite, LocalBusiness+OfferCatalog, FAQPage, and per-page Service+BreadcrumbList.
  - Issues:
    - The sitemap has no `<lastmod>`.
    - The Service schema `provider` references `#localbusiness` by @id, but that node is only defined on the homepage, so it can't be resolved per page.
    - `areaServed` is a free-text Place string rather than City/AdministrativeArea entities.
    - The LocalBusiness schema has no geo, openingHours, image, logo, priceRange, or sameAs.
    - The preview domain eshan-borewells.vercel.app serves 200 with `index, follow`. Its canonical points to production, which mitigates the risk, but it is still crawlable.
    - Public GitHub repo (Dhanuzz369/eshan-borewells) is the only brand search hit — cosmetic, but ensure no secrets in it.
- **Fix:**
  - Add lastmod to the sitemap.
  - Inline a minimal LocalBusiness node (name, url, telephone, address) on every page, or use a more specific type: `HomeAndConstructionBusiness` or `GeneralContractor`.
  - Use `areaServed: [{"@type":"City","name":"Bengaluru"}, ...]` plus a GeoCircle with a 100 km radius.
  - Add `geo`, `openingHoursSpecification`, `priceRange`, `logo`, `image`, and `sameAs`.
  - Add `X-Robots-Tag: noindex` for *.vercel.app hosts.
- **Effort:** Low.

## Top 5 highest-impact changes

1. **Publish quantified cost/depth/timeline/process answers** (F1). Critical, Medium effort. This is the single biggest citability unlock.
2. **Build the off-site entity: GBP + Bing Places + Justdial/IndiaMART/Sulekha + sameAs** (F3). Critical, Medium effort. AI engines need corroboration before they recommend a 4-week-old domain.
3. **Expand the 15 thin pages with locality-specific facts and question H2s** (F2 + F5). High, High effort.
4. **Make authority machine-readable: an About page, founder, founding year, attributed reviews, developer projects as text** (F4). High, Low-Medium effort.
5. **Add a YouTube presence plus real job photos and VideoObject schema** (F6). Medium, Medium effort. YouTube is the strongest citation correlate.

## Manual verification needed
- Whether a Justdial / Sulekha / Google Maps (GBP) listing exists for "Eshan Borewells" at 6th Block, Rajajinagar, and whether its NAP matches. All automated fetches were blocked (403 / bot challenge).
- Google index coverage via Search Console (`site:` cannot be scraped reliably).
- Bing indexing via Bing Webmaster Tools (submit the sitemap; it feeds ChatGPT Search and Copilot).

## Structured findings (audit-data.json, category: AI Search Readiness)

```json
{
  "category": "AI Search Readiness",
  "score": 42,
  "dimensions": {"citability": 25, "structural_readability": 55, "multimodal": 40, "authority_brand": 15, "technical_accessibility": 80},
  "platform_scores": {"google_aio": 35, "chatgpt_search": 30, "perplexity": 35, "bing_copilot": 30},
  "crawler_access": {"OAI-SearchBot": "allowed", "GPTBot": "allowed", "Claude-SearchBot": "allowed", "ClaudeBot": "allowed", "PerplexityBot": "allowed", "Google-Extended": "allowed", "CCBot": "allowed", "Applebot-Extended": "allowed"},
  "llms_txt": "present_valid",
  "rsl_license": "missing",
  "findings": [
    {"id": "GEO-1", "severity": "critical", "title": "No quantified answers on borewell cost, depth, timeline or process", "effort": "medium"},
    {"id": "GEO-2", "severity": "high", "title": "15 inner pages thin (148-174 words) and templated; no locality-specific facts", "effort": "high"},
    {"id": "GEO-3", "severity": "critical", "title": "Negligible off-site entity footprint; not in Brave index; no sameAs; no Wikipedia/Wikidata", "effort": "medium"},
    {"id": "GEO-4", "severity": "high", "title": "Authority claims (25+ yrs, 10,000+ sites, developer logos, testimonials) not machine-verifiable; no About page", "effort": "low"},
    {"id": "GEO-5", "severity": "medium", "title": "Branded rather than query-shaped headings; H2 casing template bug; deflective FAQ answers", "effort": "low"},
    {"id": "GEO-6", "severity": "medium", "title": "No video, tables or original job imagery", "effort": "medium"},
    {"id": "GEO-7", "severity": "low", "title": "Schema gaps (sameAs, geo, hours, priceRange, per-page provider), sitemap lacks lastmod, vercel.app preview indexable", "effort": "low"}
  ]
}
```
