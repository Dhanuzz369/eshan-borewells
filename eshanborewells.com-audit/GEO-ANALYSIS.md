# GEO Analysis: eshanborewells.com

**Date:** 2026-10-27

**Scope:** the homepage, all 15 inner pages in the sitemap, robots.txt, llms.txt and off-site brand signals. The detailed evidence is in `findings/geo.md`.

**Framing:** Google's AI optimization guide says optimizing for AI search "is still SEO". Everything below is SEO fundamentals applied to AI answer surfaces, not a separate discipline.

## 1. GEO Readiness Score: 42 / 100

| Dimension | Weight | Score | Why |
|---|---|---|---|
| Citability | 25% | 25 | No numeric facts anywhere; FAQ answers deflect |
| Structural readability | 20% | 55 | Clean H1→H2 and an FAQ; headings are slogans and inner pages have one thin section |
| Multi-modal | 15% | 40 | 11 images (7 distinct files), no video, no tables |
| Authority & brand | 20% | 15 | Anonymous site, no dates, almost no off-site presence |
| Technical accessibility | 20% | 80 | Server-rendered, every AI crawler allowed; template casing bugs and no dates |

`llms.txt` exists, but it carries **no weight** in this score. Google says it neither helps nor hurts Search.

**Context:** the site is about 4 weeks old (repo created 2026-09-30). A weak off-site footprint is expected at this age. The content gaps are not.

## 2. Platform readiness (qualitative, not measured)
No AI-visibility tool (DataForSEO, SE Ranking) is connected, so there are no measured citation scores. This table is readiness only.

| Platform | Readiness | What it draws on | Main blocker |
|---|---|---|---|
| Google AI Overviews | Low | Pages that already rank in Google | Indexing unverified (no Search Console); thin pages unlikely to rank yet |
| Google AI Mode | Low | Wider pool; freshness and entity authority | No dates, no entity signals, no linked Google Business Profile (GBP) |
| ChatGPT Search | Low | Bing index, Wikipedia, Reddit, directories | No Bing Places listing found; no third-party mentions |
| Perplexity | Low | Reddit, directories, citable passages | Nothing quotable; competitors are on Sulekha and IndiaMART |
| Bing Copilot | Low | Bing index | Same as ChatGPT; IndexNow not set up |

## 3. AI crawler access
robots.txt contains only `User-agent: * / Allow: /` and a sitemap line. Every user-agent tested received HTTP 200 with the full server-rendered HTML.

**Search and citation crawlers (these decide whether you can be cited):**

| User-agent | Governs | Status |
|---|---|---|
| Googlebot | Google Search, AI Overviews and AI Mode | Allowed (200) |
| OAI-SearchBot | ChatGPT Search citations | Allowed (200) |
| Claude-SearchBot | Claude search citations | Allowed (200) |
| PerplexityBot | Perplexity search | Allowed (200) |
| bingbot | Bing and Copilot | Allowed (200) |
| Applebot | Siri, Spotlight and Safari search | Allowed (200) |

**Training-only crawlers (a licensing choice, not a visibility one):**

| User-agent | Governs | Status |
|---|---|---|
| GPTBot | OpenAI model training | Allowed (200) |
| ClaudeBot | Anthropic model training | Allowed (200) |
| Google-Extended | Gemini and Vertex training and grounding. **Not** Search or AI Overviews | Allowed (wildcard) |
| Applebot-Extended | Apple Intelligence training opt-out label | Allowed (wildcard) |
| CCBot | Common Crawl corpus | Allowed (200) |
| Bytespider | ByteDance | Allowed (200) |

**User-triggered fetchers** (Google-Agent, ChatGPT-User, Perplexity-User) generally ignore robots.txt. Claude-User honours it.

**Verdict: pass, no change needed.** For a local lead-generation business, letting training crawlers in is a reasonable choice. Block them only if you have a licensing concern.

## 4. llms.txt status
- `/llms.txt` is **present and well-formed**: a title, a summary, all 15 URLs, name/address/phone, the coverage radius and the no-guarantee disclaimer.
- `/llms-full.txt` and RSL `/license.xml` return 404. Both are optional and unnecessary here.
- Google ignores the file. Other AI systems may read it, but there's no confirmed evidence of that. Once the cost and depth facts from section 8 are live, add them to the file; otherwise leave it alone.

## 5. Brand mention analysis
| Source | Found | Evidence |
|---|---|---|
| Wikipedia / Wikidata | No | 0 results |
| YouTube | No | No channel or mentions found |
| Reddit | No | No mentions found in r/bangalore |
| LinkedIn | Not found | No company page linked from the site |
| Google Business Profile | **Unverified** | No GBP link, map or place ID on the site |
| Justdial / Sulekha / IndiaMART | **Unverified** | Directories returned 403 or captcha to automated checks |
| Brave index (used by Claude search) | No | The brand query returns only the GitHub repo; `site:` returns nothing |
| Schema `sameAs` | None | No profile URLs declared |

A brand search for "Eshan Borewells Bangalore" surfaces competitors: Kannan, Sri Shankar and Ganga Borewells. Brand mentions correlate with AI visibility about 3× more strongly than backlinks (Ahrefs, 75k brands, 2025-12-12). YouTube is the strongest single correlate, at about 0.74.

## 6. Passage-level citability
**Self-contained answer blocks found: 1 of 8 FAQs, and 0 on inner pages.**
- The only citable answer is "Can a survey guarantee water? No…". It's direct and honest, and is a good model for the others.
- The other 7 FAQ answers deflect to "share your location" or "the scope depends on the site".
- Not one of the 16 pages contains a figure in ₹, feet, inches or days.
- The inner pages are 148–174 words each, with one generic paragraph per page.

The queries AI engines field in this niche all need numbers, and none can be answered from this site:
- cost per foot
- typical depth by area
- drilling time
- casing type and cost
- KGWA/BWSSB permission

## 7. Server-side rendering check
**Pass.** Next.js prerenders every page (`x-nextjs-prerender: 1`, served from the Vercel cache). All 2,525 words of the homepage and all inner-page copy are in the raw HTML, so crawlers that don't run JavaScript (GPTBot, PerplexityBot) see everything.

Two caveats:
- The "25+ years" and "10,000+ sites" figures are UI stat tiles and are not in the extracted text.
- The 16 developer names exist only as `aria-label`s on CSS logo sprites. Machines effectively can't see either claim.

## 8. Top 5 highest-impact changes
1. **Publish quantified answers.** Build a cost page, `/borewell-drilling-cost-bengaluru`, or a cost section on `/borewell-drilling-bengaluru`, and rewrite the FAQ answers (examples in section 10).
   - **Why:** AI engines quote facts. Right now the site has none.
   - **Fail-check:** no GSC impressions for cost or depth queries after 6 weeks.
   - **Watch:** GSC queries containing "cost", "per foot", "depth".
2. **Build the entity off-site.** Claim GBP, Bing Places, Justdial, Sulekha and IndiaMART with an identical name, address and phone. Add every profile to `sameAs`. Start a YouTube channel with short rig and job videos.
   - **Depends on:** a published address with PIN 560010.
   - **Fail-check:** a brand search still shows only GitHub after 30 days.
   - **Watch:** GSC branded impressions; GBP views.
3. **Make authority machine-readable.** Publish an `/about` page with founder, founding year, fleet and KGWA/GST registration, and add `founder` and `foundingDate` to the schema. Turn the logo sprites into a text client list with 2–3 named projects. Put the "25+ years" figure in body text.
   - **Fail-check:** the claims still exist only as tiles or aria-labels.
4. **Expand the 15 thin pages.** Use question-shaped H2s, each opening with a 40–60 word direct answer. Add one table per page. Give the area pages real local facts: typical depth, terrain, access constraints and dated job summaries.
   - **Depends on:** #1, so the pages can link to the cost data.
   - **Watch:** GSC average position per URL.
5. **Add freshness and media.**
   - A visible "Updated [date]" plus `dateModified` on every page.
   - Real job photos with factual captions ("1,100 ft, 7″ PVC casing, Hoodi, Sept 2026").
   - Embedded videos with `VideoObject` markup.
   - **Why:** content under 3 months old is about 3× more likely to be cited (SE Ranking, 1.3M citations).
   - **Watch:** the date stays under 90 days old.

## 9. Schema recommendations for AI discoverability
Ready-to-paste JSON-LD is in `findings/schema.md`. These are the additions that matter for entity understanding:
- **Business type:** `@type: HomeAndConstructionBusiness` instead of the generic `LocalBusiness`.
- **Identity:**
  - `sameAs` listing the GBP, Justdial, IndiaMART, YouTube and LinkedIn URLs, once they exist.
  - `founder` (a `Person` with name and `jobTitle`), plus `foundingDate`.
  - `knowsAbout`: ["borewell drilling", "groundwater survey", "borewell casing", "borewell flushing"].
- **Location:**
  - `geo`, `hasMap`, `openingHoursSpecification`, and `postalCode: "560010"`.
  - `areaServed` as `City` plus a 100 km `GeoCircle`, not a sentence.
  - On area pages, `areaServed` naming the locality.
- **Pages:** `dateModified` on each `WebPage`. `VideoObject` once videos exist.
- **Leave as is:**
  - The existing FAQPage stays (Info). FAQ rich results were retired on 2026-05-07, and any AI benefit is unconfirmed.
  - Don't add new FAQPage markup for search-results benefit.
  - Don't add HowTo.

## 10. Content reformatting suggestions
Pattern: direct answer first, then the specifics, then the honest caveat. The `[…]` placeholders must be filled with the owner's real figures. Don't publish invented numbers.

**FAQ: "What affects the cost of drilling?"**
- *Now:* "Depth, ground conditions, site access, casing and related work all affect the scope. A useful estimate starts with the particulars of your site."
- *Rewrite:* "Borewell drilling in Bengaluru typically costs ₹[X]–₹[Y] per foot, with the rate rising in depth slabs: [0–300 ft ₹…, 300–500 ft ₹…, 500–1,000 ft ₹…]. Casing adds ₹[…] per foot for 7″ PVC or ₹[…] for MS. A typical [1,000 ft] residential borewell totals ₹[…]–₹[…] including casing. Your final quote depends on depth reached, rock type and site access, and is confirmed after a site visit."

**FAQ: "Can you work on narrow roads?"**
- *Rewrite:* "Yes. Our compact rig needs about [X] ft of access width and [Y] ft of overhead clearance. Larger rigs, used for deeper or commercial bores, need [Z] ft. Send site photos and we'll confirm which rig fits."

**FAQ: "Where do you work?" / "Do you work outside Bengaluru?"**
- *Rewrite:* "We drill across Bengaluru and up to about 100 km around it, including Whitefield, Electronic City, Yelahanka, Peenya, KR Puram, Sarjapur Road, [Hoskote, Devanahalli, Nelamangala, Anekal]. Our base is in Rajajinagar. Sites beyond [X] km may carry a rig transport charge of ₹[…]."

**New H2s for `/borewell-drilling-bengaluru`** (each opening with a 40–60 word answer):
- "How deep are borewells in Bengaluru?" (typical range by zone)
- "How long does borewell drilling take?" (days on site)
- "Do I need permission to drill a borewell in Bengaluru?" (KGWA and BWSSB steps; check the current rules first)
- "What happens if the borewell is dry?" (charges and options)

**Area pages** (for example `/borewell-drilling-whitefield`): replace "Borewell planning in WHITEFIELD" with "How deep are borewells in Whitefield?" and give the typical depth, the rock profile, and 1–2 dated job summaries.

**Homepage H1:** change "Water starts with the right groundwork." to "Borewell Drilling in Bengaluru: Survey, Drilling, Casing & Flushing". Keep the slogan as a subheading.

## Limitations
- No AI-visibility tool, Search Console or Bing Webmaster data. Actual citations and indexing status weren't measured.
- The GBP and directory listings couldn't be checked automatically. Verify them by hand.
- Third-party correlation figures are quoted with their source and date. They describe correlation, not cause.

## Implementation status (2026-10-27, branch `seo/audit-fixes`)
Status of each recommendation. The repo's evidence-first rules (README) still apply: nothing unverified was published.

| Recommendation | Status |
|---|---|
| Question-shaped H2s; fix "in bengaluru" / "in WHITEFIELD" casing | Done (all 15 pages) |
| Keyword in homepage H1 | Done ("Borewell drilling in Bengaluru" is part of the H1) |
| Direct, citable FAQ answers | Done for areas, narrow sites and casing. Cost/price content is out of scope by owner instruction |
| Expand thin pages | Partly: process steps, FAQs, image and area cross-links added (about 190 → 450 words). Local facts need owner input |
| Authority claims machine-readable | Developer names stay as logo labels only (owner removed the visible text line). Founder, founding year, registrations need owner input |
| Freshness | Done: visible "Last updated" and `dateModified` on homepage and all 15 pages |
| Schema: specific type, E.164 phone, City areaServed, per-locality areaServed, inline provider, `knowsAbout`, `mainEntity` | Done |
| llms.txt carries the new facts | Done (no Google effect; may help other AI systems) |
| Vercel preview `noindex` | Done |
| Quantified cost page | **Out of scope**: owner instruction, prices are not to be touched |
| Google Business Profile linked (`sameAs`, `hasMap`, daily hours, visible 4.9★ Google rating with source and date) | Done. The public profile shows **no phone number**; add it there |
| Bing Places, Justdial, Sulekha, IndiaMART | **Owner action** |
| YouTube and real job photos with captions | **Owner action** |
| Permit (KGWA/BWSSB) guide | **Needs current rules verified** before publishing |
| Measured AI citations | Not measured; connect Search Console and an AI-visibility tool |
