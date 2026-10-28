# GEO / AI-Search Readiness Re-check: eshanborewells.com

- Audit date: 2026-10-27 (re-audit after same-day deploy)
- Scope: homepage + 15 sitemap URLs, robots.txt, llms.txt, sitemap.xml, JSON-LD per page type, external brand presence
- Method: `render_page.py --mode never` (raw server HTML, no JS) on all 16 URLs; curl with bot user-agents; JSON-LD parsed from raw HTML; 5-gram Jaccard overlap between pages; Wikipedia API; YouTube/Bing/DuckDuckGo brand queries
- All fetched content was handled as untrusted data.

## 1. GEO Readiness Score

| Dimension | Weight | Baseline | Now | Delta | Weighted now |
|---|---|---|---|---|---|
| Citability | 25% | 25 | 38 | +13 | 9.5 |
| Structural readability | 20% | 55 | 68 | +13 | 13.6 |
| Multi-modal content | 15% | 40 | 48 | +8 | 7.2 |
| Authority & brand signals | 20% | 15 | 28 | +13 | 5.6 |
| Technical accessibility | 20% | 80 | 88 | +8 | 17.6 |
| **Total** | | **42** | **54** | **+12** | **53.5, rounded to 54** |

Bottom line: the technical and structural work deployed today is live and verified. The score is still held down by two things the site can't fix with code. The pages carry little specific, quotable information (most answers boil down to "share your site details and we'll discuss"), and there are almost no third-party mentions of the brand. Most of the remaining upside depends on facts only the owner can supply.

## 2. Verification of today's changes

| Claimed change | Live status | Notes |
|---|---|---|
| Question-shaped H2 on all 15 inner pages | Verified (15/15) | One H2 per inner page, e.g. "What can a groundwater survey tell you?", "How do you plan a borewell in Peenya?" Sub-sections remain H3s with statement-style labels ("Before planning your site", "How the work proceeds"). |
| Homepage H1 includes "Borewell drilling in Bengaluru" | Verified | `<h1>` = kicker span "BOREWELL DRILLING IN BENGALURU" + "Water starts with the right groundwork." Uppercase comes from the source text, not CSS. Some extractors join it with no space ("BENGALURUWater"). Minor. |
| "How the work proceeds" steps | Verified (15/15) | 4 steps per page, in SSR HTML. Step title and body run together in extracted text ("Share the site detailsSend the location..."), so add a separator or put the title in `<strong>`/`<h4>`. |
| 3 visible FAQs per inner page | Verified (15/15) | But heavily reused: "What should I share before a borewell site visit?" appears on 15/15 pages, "Can you work on narrow roads?" on 11, "What affects the cost of drilling?" on 8, "Where do you work?" on 7. All 7 area pages share the same 3 FAQs. |
| An image per inner page | Verified (15/15) | Alt text present, width/height set, lazy-loaded. Only 5 distinct images across the 15 pages: compact-drilling-rig.webp on 9 pages, large-drilling-rig.webp on 3. |
| Locality cross-links | Verified | Area pages link to the other 6 areas plus related services (10 internal links). Service pages have only 4 internal links each, and none of them link to area pages. |
| Visible "Last updated" + dateModified | Verified | `<time dateTime="2026-10-27">27 October 2026</time>` on inner pages; WebPage.dateModified = 2026-10-27 on all pages. Homepage has dateModified in schema but no visible date (fine). |
| HomeAndConstructionBusiness, E.164 phone | Verified | `@id #localbusiness`, telephone `+919844775905`. |
| City areaServed / Place per locality | Verified | Home: City Bengaluru, containedInPlace State Karnataka. Area pages: Service.areaServed Place "Whitefield, Bengaluru" > City > State. |
| sameAs + hasMap to GBP | Verified | Both point to `https://maps.google.com/?cid=2493916436492727064`. sameAs has only this one entry. |
| Daily 09:00-22:00 openingHoursSpecification | Verified | Mon-Sun, 09:00-22:00; visible "Open daily, 9 am to 10 pm" on every page and in llms.txt. Consistent. |
| Service @id + WebPage mainEntity | Verified | `/<slug>#service` is referenced from `/<slug>#webpage` via mainEntity. Provider `@id` resolves to `#localbusiness`. |
| WebSite publisher | Verified | `publisher: {"@id": "#localbusiness"}`. |
| Visible 4.9 star Google rating, no count, linked to GBP; no AggregateRating | Verified | Hero proof strip ("4.9 ★ Google rating") and reviews section ("4.9 ★ Rating on Google (October 2026) / Read the reviews on Google"), both linking to the GBP. No AggregateRating or Review markup present. Correct. |
| llms.txt updated | Verified | See section 4. |

## 3. AI crawler access

robots.txt is just `User-agent: *` / `Allow: /` plus a Sitemap line. There are no bot-specific groups, so every crawler below falls under the wildcard allow. I also requested pages with live bot user-agent strings and every request returned HTTP 200 with full content, so no WAF or Vercel bot blocking applies.

| User-agent | Operator / purpose | Governs | robots.txt | Live fetch |
|---|---|---|---|---|
| OAI-SearchBot | OpenAI search crawler | Whether pages can be surfaced and cited in ChatGPT Search | Allowed (wildcard) | 200, full SSR HTML |
| ChatGPT-User | OpenAI, user-initiated fetches | Live page fetches in ChatGPT sessions | Allowed (wildcard) | not tested |
| GPTBot | OpenAI training crawler | Model training only; says nothing about ChatGPT Search citability | Allowed (wildcard) | 200 |
| Claude-SearchBot | Anthropic search crawler | Claude search citability | Allowed (wildcard) | 200 |
| Claude-User | Anthropic, user-initiated fetches | Live fetches in Claude sessions | Allowed (wildcard) | not tested |
| ClaudeBot | Anthropic training crawler | Training only | Allowed (wildcard) | not tested |
| PerplexityBot | Perplexity search index | Perplexity answers and citations | Allowed (wildcard) | 200 |
| Googlebot | Google Search | Google Search **and** AI Overviews / AI Mode inclusion | Allowed (wildcard) | not tested (no blocking observed) |
| Google-Extended | Google control token | Gemini/Vertex training and grounding, plus training of Search gen-AI models. Has no effect on Search or AI Overviews inclusion. | Allowed (wildcard) | n/a (token, not a fetcher) |
| Bingbot | Microsoft | Bing index, which feeds Copilot answers and is also used by ChatGPT Search | Allowed (wildcard) | not tested |
| Applebot | Apple | Siri / Spotlight / Safari discoverability | Allowed (wildcard) | not tested |
| Applebot-Extended | Apple control token | Apple Intelligence training only | Allowed (wildcard) | n/a |
| CCBot | Common Crawl | Open dataset used for training | Allowed (wildcard) | not tested |
| cohere-ai | Cohere | Training | Allowed (wildcard) | not tested |

Assessment: every search and retrieval crawler is allowed, which is the right setup for a local business that wants to be visible. Allowing the training crawlers is the owner's call. Blocking them would not affect search visibility, and nothing needs to change here.

## 4. llms.txt and licensing

| Item | Status |
|---|---|
| `/llms.txt` | **Present and well-formed** (200, text/plain). It has an H1, a blockquote summary, and link sections for the official site and all 15 service/area pages with one-line descriptions. It also covers business details (office, E.164 phone, daily 9-10 hours, GBP link with category, ~100 km coverage, survey disclaimer) and a "How projects work" section. Its facts match the visible pages and the schema. |
| `/llms-full.txt` | Missing (404). Optional. |
| RSL 1.0 (`/license.xml` or a robots.txt `License:` line) | Missing. Optional, and only worth adding if the owner wants to declare AI usage terms. |
| `/ai.txt` | 404. Not a standard, so no action needed. |

Small improvements: list the remaining homepage-only localities under "Other nearby areas" (e.g. Yeshwanthpur, Hebbal, Hoskote, Anekal), and add a one-line "company-reported" note for the 25+ years / 10,000+ sites claims if the owner stands behind them. llms.txt currently leaves those claims out, which is the cautious option.

## 5. Brand mentions and entity presence

| Source | Finding |
|---|---|
| Google Business Profile | Exists (supplied by the caller and linked from the site): 4.9 stars, category "Well drilling contractor", service-area listing, and the public view shows no phone number. This is now the only `sameAs` entry. |
| Wikipedia / Wikidata | No results for "Eshan Borewells" (Wikipedia search API, 0 hits). A local contractor isn't expected to meet Wikipedia notability, so don't pursue this. |
| YouTube | No channel or videos found for the brand (search for "eshan borewells" returned unrelated results). YouTube mentions correlate most strongly with AI citations (~0.737), so this is the largest external gap. |
| Reddit | Couldn't verify: Reddit blocked the automated search. No mentions are known. |
| LinkedIn / Facebook / Instagram | None surfaced. Bing and DuckDuckGo returned only unrelated "Eshan" results (a college, baby names), so the brand currently has no web footprint beyond its own site and the GBP. |
| Directories (Justdial, Sulekha, IndiaMART) | No listing surfaced in automated search. These results may be incomplete because the search engines' bot defences limited them. The owner should confirm whether listings exist. |
| Brand search | Search engines matched "eshan borewells" queries mostly to other "Eshan" entities, so the brand is not yet a distinct entity. |

Meaning for AI answers: when an assistant answers "borewell drilling Rajajinagar" or "borewell contractor Bengaluru", it leans on third-party corroboration such as directories, Maps/GBP, videos and forum threads. Right now the site and the GBP are the only sources, so being cited depends on Googlebot/Bingbot indexing and on Maps data. This dimension stays capped until mentions exist off the site.

## 6. Passage-level citability

Inner pages carry 345-392 extracted words each (homepage 1,185). The full text is in the server HTML.

### Passages that work

1. Groundwater survey FAQ, 24 words, self-contained, direct, quotable:
   > "No. A survey can inform planning, but groundwater conditions vary, even between nearby properties. We would never present detection as a guarantee."
   It opens with a direct answer and states the expectation clearly. Good material for a "can a survey guarantee water" query.
2. Narrow-roads FAQ, 40 words:
   > "Often, yes. Compact and robotic rigs may suit narrow or restricted sites, depending on the road width, entry, overhead clearance and space around the drilling point. Share your location and a few site photos so the right rig can be chosen."
   It answers directly and names concrete factors, but repeating it on 11 pages weakens the signal for any single page.
3. Casing FAQ (homepage only):
   > "Yes. We install borewell casing, such as PVC or M.S. steel pipe, and coordinate pump installation as part of the overall project."
   This is the most fact-dense passage on the site because it names materials. It should be visible on the casing page, which currently doesn't include it.
4. Rajajinagar H2 answer, 44 words. It is the only area answer with a locality-specific fact ("Eshan Borewells is based in 6th Block, Rajajinagar").

### Passages that are weak (and why)

1. Whitefield H2 answer (39 words). The Electronic City, KR Puram, Peenya, Sarjapur Road and Yelahanka answers follow the same pattern:
   > "For a borewell project in Whitefield, start with the exact site location, property type, equipment access and available working area. These details help Eshan Borewells discuss a practical approach; confirm availability for the particular property before planning the work."
   Swap the place name and the passage reads the same, and it contains nothing about Whitefield. The 7 area pages share about 48% of their 5-word sequences (max 50%). An answer engine has no reason to cite one area page over another, or over a competitor.
2. Groundwater survey H2 answer (42 words):
   > "A groundwater survey can inform borewell planning by considering available information about the property and its conditions. It is guidance for a decision, not a promise of water..."
   The heading asks "What can a groundwater survey tell you?", but the answer never says what the survey measures, which method or instrument is used, or what the customer receives. The honesty is good, but the passage carries no information.
3. Casing H2 answer (38 words): "...the appropriate material and installation scope depend on the ground, well depth and project requirements." It doesn't name PVC or M.S. steel, and the visible FAQs on that page don't either.
4. Homepage H2s are still slogans: "The site decides the plan.", "Good questions deserve clear answers.", "Tell us where you are drilling.", "Water solutions, considered from the ground up." Their labels don't match the queries people actually ask.
5. Answer length: H2 answers run 35-44 words and FAQ answers 24-40 words. That's fine for direct answers, but no inner page has a fuller block of roughly 130-170 words that explains a topic in depth (a third-party heuristic; Google says content doesn't need to be chunked for AI). The pages are thin rather than badly structured.
6. Statistics and attribution: no figures with sources anywhere on the inner pages. The homepage's "25+ years" and "10,000+ borewell sites" are labelled "Company-reported" in an aria-label. That's honest, but they are unverified first-party claims.

### Citability verdict

The pages have better shape (question, direct answer, steps, FAQ) but little new substance. The text consistently avoids overpromising, which is correct for this business, but very few sentences contain a specific fact an AI engine could quote and attribute.

## 7. SSR / technical check

| Check | Result |
|---|---|
| Rendering | Next.js SSR/static. `is_spa=false` on all 16 URLs. All visible text, the H1/H2/H3s, FAQ answers (in `<details>`), steps, dates and JSON-LD are in the initial HTML. A raw OAI-SearchBot fetch of /borewell-drilling-peenya returned 41 KB with about 455 visible words. |
| Caching | Vercel, `X-Vercel-Cache: HIT`, `cache-control: public, max-age=0, must-revalidate`. |
| Status / canonical | All 16 URLs return 200 with a self-referencing canonical on www; `robots: index, follow`; googlebot `max-snippet:-1, max-image-preview:large`. |
| Redirects | `http://eshanborewells.com/` goes to `https://eshanborewells.com/` and then to `https://www.eshanborewells.com/`: two 308 hops. A single hop would be better. Low priority. |
| Sitemap | 16 URLs, no `<lastmod>`. Adding lastmod (matching dateModified) helps freshness signals for Bing/Copilot and Google. |
| OG/Twitter | Present on all pages with image and alt text. |
| Meta keywords | Present (ignored by engines, harmless). |

## 8. Platform readiness (qualitative; not measured with a visibility tool)

| Platform | Readiness | Main reason |
|---|---|---|
| Google AI Overviews / AI Mode | Moderate | Googlebot access, SSR, clean LocalBusiness/Service schema and a linked GBP are all in place. Local AIO answers draw heavily on GBP/Maps data and on third-party corroboration, and both are thin. |
| ChatGPT Search | Low to moderate | OAI-SearchBot is allowed and gets full HTML, and ChatGPT Search also draws on the Bing index. Without third-party mentions or distinctive passages, citation is unlikely for generic queries. |
| Perplexity | Low to moderate | PerplexityBot is allowed. Perplexity favours fact-dense passages and forum or video sources, and the site has neither. |
| Bing Copilot | Moderate | Same strengths as above. Also needs sitemap lastmod and a Bing Places / Bing Webmaster Tools presence (owner to confirm). |

No DataForSEO or other live AI-visibility tool was available, so there are no measured per-platform numbers.

## 9. Top 5 changes still worth making (within constraints)

Out of scope, noted once: pricing, cost-per-foot and rate tables are excluded by the owner's instruction. The existing "What affects the cost of drilling?" FAQ stays as it is.

| # | Change | Why | Effort |
|---|---|---|---|
| 1 | **Make each area page's FAQ set different, using facts already on the site.** For example, the Peenya page leads with the industrial/factory-operations question already in its meta description, Rajajinagar with "Where is your office?" (6th Block), and Sarjapur Road and Whitefield with apartment/layout access. Drop "What should I share before a site visit?" from at least the area pages, where it now appears on all 15. Rotate the homepage's casing/pump and "Do you work outside Bengaluru?" FAQs onto the matching service pages. | Cuts the ~48% overlap between area pages, gives each page at least one passage worth citing, and invents nothing. | Low (copy only) |
| 2 | **Put existing facts into the service-page answers.** On the casing page, name PVC and M.S. steel in the H2 answer and add the casing/pump FAQ. In the drilling and residential/apartment answers, name large, compact and robotic rigs. In the farm answer, mention the "about 100 km" coverage. | These facts are already on the homepage and in llms.txt but missing from the pages that should rank for them. Named entities make a passage citable. | Low |
| 3 | **Add one fuller explanatory block (about 120-170 words) to each service page**, written as a direct answer to a real query, e.g. "What happens on drilling day?", "What does flushing an existing borewell involve?", "How is a rig chosen for a narrow site?" Use only process facts the owner confirms. | Gives answer engines a self-contained passage longer than the current 35-44-word stubs. | Medium (needs owner review) |
| 4 | **Build an off-site footprint, starting with YouTube.** Short real-site clips (rig setup on a narrow plot, casing install, flushing) on a brand channel, linked from the site and added to `sameAs`. Also claim or verify Justdial, Sulekha, IndiaMART, Bing Places and Apple Business Connect with NAP and hours that match the site, and add each verified profile URL to `sameAs`. | YouTube mentions are the strongest signal correlated with AI citations, and the brand has almost no third-party presence. This is the biggest lever for the authority score. | Medium to high (owner time) |
| 5 | **Fix homepage headings and image variety.** Rewrite 3-4 slogan H2s as labels people search for (e.g. "Borewell services we offer", "How we plan a borewell around your site", "Areas we serve around Bengaluru", "Borewell questions answered") and keep the brand line as sub-copy. Give each area page its own image (owner-supplied real site photos if possible) instead of reusing compact-drilling-rig.webp on 9 pages. Add `<lastmod>` to the sitemap. | Improves how headings map to queries and adds multimodal distinctiveness. Real photos also count as evidence. | Low to medium |

## 10. Schema recommendations

Current state is solid and internally consistent (one `@id` graph: WebSite > publisher > #localbusiness; WebPage > mainEntity > #service > provider > #localbusiness; BreadcrumbList on inner pages).

- **Keep:** HomeAndConstructionBusiness, Service with areaServed Place/City, WebPage + dateModified, BreadcrumbList, openingHoursSpecification, hasMap. Not adding AggregateRating is correct: the rating is shown in text and linked to the GBP, with no self-serving review markup.
- **FAQPage (homepage): Info-level only.** FAQ rich results were retired on 2026-05-07, so this markup brings no SERP feature. It does no harm and keeps the Q&A machine-readable. Keep or remove; it's not a priority either way.
- **Never add HowTo**, even though "How the work proceeds" is a list of steps.
- **Low-effort additions (no new facts needed):**
  - `logo` (ImageObject): add only if a real logo file exists. Do not add `priceRange` (pricing is out of scope).
  - `geo` (GeoCoordinates) and `postalCode` only if the owner supplies them. "6th Block, Rajajinagar" has no postcode on the site, and it can't be guessed.
  - Service pages: add `areaServed` City Bengaluru (area pages already have Place), and `serviceType` in plain words ("Borewell casing installation") rather than keyword strings like "borewell drilling Whitefield".
  - Homepage WebPage: add `mainEntity: {"@id": "#localbusiness"}` alongside `about`.
  - Add each verified external profile (YouTube, directories, Bing Places, Facebook/Instagram if real) to `sameAs` **only after** it exists.
  - Optionally add `datePublished` next to dateModified on WebPage, but only with a true first-publish date.

## 11. What still needs the owner (evidence-first; do not invent)

1. **Groundwater survey method:** which technique or instrument is used (e.g. a resistivity meter), what the customer receives (verbal advice, marked point, written report). Without this the survey page can't answer its own H2.
2. **Equipment specifics:** rig types and counts, minimum gate or entry width the compact/robotic rig needs, overhead clearance needed. These would be the most citable facts on the site.
3. **Real project examples** with permission: locality, property type, access challenge, what was done. Depth or yield only if the owner documents it, and never as a promise.
4. **Company facts:** founding year or verifiable basis for "25+ years" and "10,000+ borewell sites", the owner or lead driller's name and role, and any registrations (GST, MSME/Udyam, trade association). Publish only what the owner confirms.
5. **Testimonials:** the homepage shows 40 unattributed one-line quotes. Confirm their source. If they are Google reviews, say so and link to them; if not, attribute them (first name + locality, with consent) or reduce them. As it stands they add little trust and could look manufactured.
6. **Developer logos ("Developers we have worked with"):** confirm the owner has permission and a real relationship for each one.
7. **GBP:** the public view shows no phone number. Add +91 98447 75905 so the profile matches the site and schema (NAP consistency is a key local entity signal). Add GBP photos and posts, and reply to reviews.
8. **Off-site profiles:** create or confirm YouTube, directory listings, Bing Places and Apple Business Connect, then share the URLs for `sameAs`.
9. **Real photos** for area and service pages to replace the reused images.
10. **Local groundwater context** (typical depths, hard-rock conditions by area): include only if the owner has documented experience or an authoritative source (e.g. CGWB) is cited by name. Don't generate it.

## Correction (verified against the live page, 2026-10-27)
The casing page does name the materials. Its "How the work proceeds" step reads "Casing material, such as PVC or M.S. steel pipe, and its diameter are chosen for the ground conditions and the well", and its FAQ "Can you help with casing and pump installation?" also names PVC and M.S. steel. That point is struck from the remaining issues. The area-page FAQ duplication was confirmed: Rajajinagar, Whitefield and Peenya all show the same three questions.
