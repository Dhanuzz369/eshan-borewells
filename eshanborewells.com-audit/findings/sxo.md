# SXO Findings: eshanborewells.com

Date: 2026-10-27. Scope: homepage plus the 7 main service/segment pages, with 1 locality page as a sample.
Score label: **SXO Gap Score**. This is separate from the SEO Health Score.

## Evidence base

- Homepage: render supplied as `homepage.json` (raw mode, `is_spa: false`, HTTP 200, 308 redirect from the apex domain to www). Parsed with `parse_html.py`.
  - Title: "Borewell Drilling & Water Survey in Bengaluru | Eshan Borewells"
  - H1: "Water starts with the right groundwork."
  - About 2,004 words. 11 images.
  - Schema: WebSite, LocalBusiness (with OfferCatalog), WebPage and FAQPage (8 Q&As).
  - 40 testimonials (shown twice in the marquee, so 80 cards). Each has a first name only.
  - Developer logo strip: Brigade, Prestige, Sobha, Puravankara, Godrej, Assetz, Mantri and others.
  - Contact options: phone and WhatsApp only. A 3-field form (name, phone, site location) opens a WhatsApp draft. No email address.
- Service pages: rendered with `render_page.py --mode auto`. Pages checked:
  - /borewell-drilling-bengaluru, /groundwater-survey-water-detection-bengaluru, /borewell-flushing-redevelopment-bengaluru
  - /residential-, /apartment-, /farm-agricultural-, /commercial-industrial-borewell-drilling-bengaluru
  - /borewell-drilling-whitefield
- The sitemap lists 16 URLs: home, 4 services, 4 segments and 7 localities. There is no cost page, no recharge page, no blog, and no about or contact page (/about-us and /contact return 404).
- SERP: 10 WebSearch queries, with 2 competitor pages fetched (Sulekha listing, Sanati cost page). Screenshots in `screenshots/` were reviewed (home-mobile, service-mobile, service-desktop-full).

### Service page template (applies to all 7 service/segment pages and the locality page)

| Metric | Value |
|---|---|
| Rendered words (including chrome) | 189-219 |
| Images | 0 |
| H2s | 1 ("What to know about ... in bengaluru", lowercase city name) |
| FAQ / reviews / form / WhatsApp | none / none / none / none |
| CTA | tel: link only ("Discuss your site", "Call now") |
| Schema | Service + WebPage + BreadcrumbList (valid) |
| Prices, depths, method names, permit info | none |
| Logo | "E" monogram, while the homepage uses a droplet logo (inconsistent) |
| Pairwise text similarity | 0.12-0.35 (a template, not duplicate copy) |

---

## 1. SERP backwards analysis

| Query | What ranks (observed) | Dominant type (taxonomy) | Confidence | Matching Eshan page | Mismatch |
|---|---|---|---|---|---|
| borewell drilling Bengaluru | News and regulation (Deccan Herald x2, Citizen Matters permit guide, Logical Indian "drilling banned", DownToEarth illegal-borewell drive, Business Today video, IISc PDF) | Blog/News (informational, regulatory) for the head term. The commercial variant "borewell drilling contractors in Bangalore" returns a GBP listing (Ranganatha Borewells, 463 reviews, 5.0), India Water Portal Q&A threads and a Vimeo video. | ~70% informational on the head term; local/commercial on the modifier | Homepage (Local landing) and /borewell-drilling-bengaluru (thin Service) | **HIGH**: right type, far too thin. No permit or regulation content, though it dominates this SERP. |
| borewell drilling cost Bangalore | Cost guides with ₹/ft tables (studiomatrx 2026 slab rates, sanatiborewells, roboborewell 2025 cost blog, dheeranborewells, jkcement, agrifarming), IndiaMART (₹100/ft), Sulekha (cost section, ₹1-1.5 lakh total), India Water Portal "need cost estimates" | Blog/cost guide (Hybrid service + content) | ~80% | None. The only answer is the homepage FAQ: "A useful estimate starts with the particulars of your site." | **CRITICAL**: no page exists, and the existing answer declines to give a number. |
| borewell near me / contractors | Sulekha "Borewell Contractors in Bangalore" (20 listings, ratings, cost section, locality chips), IndiaMART directory, a GBP profile. Justdial did not surface in this engine, but it is a known incumbent. | Local (local pack + directories) | ~85% | Homepage, but no map, hours, geo or GBP link. No Eshan web footprint was found for the query "Eshan Borewells" Bangalore. | **HIGH**: mostly off-site (GBP, directories). On-site local signals are incomplete. |
| groundwater survey Bangalore | India Water Portal Q&A ("How to identify good borewell drilling points", "diviners failed at 450/600 ft", "scientific method of water detection, Ramamurthy Nagar", "Begur: 1,000 ft dry, ₹1.6 lakh spent"), SEI groundwater data, Bangalore University geology study | Blog/explainer (informational; method and risk) | ~90% | /groundwater-survey-water-detection-bengaluru (212 words; no method named) | **HIGH**: Service page versus an explainer intent. It does not name a method (resistivity, geophysical, divining) and gives no cost or success context. |
| borewell recharge Bangalore | Citizen Matters groundwater primer and RWH case study ("Rs 3 lakh savings, borewells that never dry"), DH "BWSSB digs 986 recharge pits", India Water Portal recharge Q&As, Water Channel video, RWH consultants (Biome, Water Literacy Foundation) | Blog/explainer and service providers (RWH consultants) | ~80% informational | None (closest is /borewell-flushing-redevelopment-bengaluru) | **CRITICAL** if Eshan offers recharge pits or RWH. If it does not, treat this as a content-only opportunity (MEDIUM). |

SERP features: this engine does not expose the local pack, ads, PAA or AI Overview, so their presence is inferred (see Limitations). India Water Portal Q&A titles are used as a proxy for PAA questions, and they cluster as follows:
- **Cost:** "need cost estimates", "cost per feet in Yelahanka", "more than 2 lacs".
- **Point selection:** "how to identify good drilling points", "whom should I contact".
- **Narrow sites:** "800 ft borewell in 4 ft space".
- **Failure and silt:** "silt found inside the borewell", "borewell failure rocky terrain".
- **Apartments:** "contractor details for apartment complex".
- **Recharge:** "recharge a 400 ft borewell with rain water".
- **Regulation:** Form-1A/1B, KGWA/BWSSB permits and registration, red-zone status, the 2024 ban.

---

## 2. Findings (severity, evidence, fix)

### F1. CRITICAL: no cost page for the highest-commercial informational query
- **Evidence:** Every cost SERP result gives ₹ figures: ₹65-150/ft by depth slab, ₹120/ft for 6.5", ₹440/ft for 7" MS casing, ₹5-15k minimum rig charge, and ₹1-5 lakh totals. Eshan has no cost URL. Its homepage FAQ "What affects the cost of drilling?" gives no numbers, and the site shows no ₹ amount anywhere.
- **Fix:** Create /borewell-drilling-cost-bengaluru (Hybrid page type).
  - H1: "Borewell Drilling Cost in Bengaluru (2026): Per-Foot Rates, Casing & Total Budget".
  - Add a depth-slab rate table (0-300 / 300-500 / 500-1,000+ ft), a casing table (PVC versus 7"/10" MS per ft), and line items for flushing, transport/rig charge, pump coordination and the permit fee.
  - Add 3 worked examples: a 30x40 house at 800 ft, an apartment at 1,200 ft, and farmland at 600 ft.
  - Explain "what you pay if it's dry".
  - CTA: "Send your location on WhatsApp for a written estimate".
  - Show the date "Rates updated: <month 2026>". Use Article + FAQPage schema.
  - Link to this page from the homepage cost FAQ and every service page.

### F2. CRITICAL (conditional): no borewell recharge or rainwater-harvesting content
- **Evidence:** The recharge SERP rewards explainers and RWH providers (BWSSB recharge pits, Citizen Matters apartment case study). The site never uses the word "recharge" (0 occurrences in the homepage HTML).
- **Fix:**
  - If Eshan offers recharge wells or pits, build /borewell-recharge-bengaluru. Cover how a recharge pit or ring well works, the casing and contamination caveats raised in the IWP threads, BWSSB RWH obligations, cost, and timeline.
  - If Eshan does not offer recharge, publish an explainer that routes to flushing and redevelopment, and to a new survey before re-drilling.

### F3. HIGH: service pages are thin template stubs, and the homepage outranks them in usefulness (cannibalisation risk)
- **Evidence:**
  - /borewell-drilling-bengaluru has 219 rendered words, 0 images and 1 H2. It shares its title intent with the homepage ("Borewell Drilling ... in Bengaluru"). The homepage has about 2,000 words, images, an FAQ and reviews.
  - Homepage service cards ("01 Borewell drilling" ... "04 Flushing") link to `#contact`, not to the service URLs. The service pages are linked only from the footer block "Explore services and local guidance".
- **Fix:**
  - Point the service cards at their pages.
  - Expand each service page to 900-1,400 words using this structure: Process (5 steps with photos), Equipment by site (large/compact/robotic rig with access widths), Typical depths in that area, Cost range (link to F1), Permits, 3-5 page-specific FAQs, 2 attributed reviews, a mini case study, and a WhatsApp plus call CTA.
  - Add the homepage lead form to every service page.
  - Make the homepage title brand-led (for example "Eshan Borewells | Borewell Contractors in Bengaluru Since <year>"), so /borewell-drilling-bengaluru owns the head term.

### F4. HIGH: regulation and permit content is absent, though it dominates the head-term SERP
- **Evidence:**
  - Head-term results: Citizen Matters "guide to groundwater extraction rules" (Form-1A/1B, registered drilling agency), the BWSSB/KGWA permit and ban stories, and the illegal-borewell enforcement drive.
  - The site has 0 mentions of KGWA, BWSSB, permit, licence or registration (grep on the homepage HTML).
- **Fix:**
  - Add a "Permits & compliance" section on the homepage and /borewell-drilling-bengaluru. Cover:
    - who applies (Form-1A for domestic/agricultural use, Form-1B for commercial)
    - whether Eshan handles the paperwork
    - the Eshan driller registration number
    - what happens during restrictions
  - Back it with a standalone guide, "Borewell permission in Bengaluru: step by step", which is linkable and wins informational traffic.
  - Verify current rules with KGWA/BWSSB before publishing.

### F5. HIGH: trust signals are unverifiable (authority gap)
- **Evidence:**
  - 40 testimonials have a first name only (for example "Ramesh K"). They carry no date, locality, project type, star rating or source link, and their wording is generic and uniform.
  - The claims "25+ years" and "10,000+ borewell sites" have no backing.
  - There is no GBP link, About page, owner or team name, registration number or GST number. /about-us returns 404.
  - A brand search for "Eshan Borewells" Bangalore returned no third-party mentions.
  - The developer logo strip names Brigade, Prestige, Sobha, Puravankara and Godrej but gives no project, year or scope.
  - The service pages have no reviews at all.
- **Fix:**
  - Replace or augment the marquee with 6-10 verifiable reviews: locality, property type, depth achieved, month/year, and a link to the GBP review.
  - Embed a GBP rating badge linking to the profile.
  - Add an /about page: founder, year founded, rig fleet with photos, registration number, team.
  - For each developer logo, add a one-line project reference (for example "Prestige <project>, Whitefield: 3 borewells, 2023").
  - Do not mark up self-hosted testimonials as AggregateRating.

### F6. HIGH: the groundwater survey page fails the "how do I find the right point" intent
- **Evidence:**
  - The SERP is all searchers asking how points are identified, reporting failed diviners (450/600 ft dry; 1,000 ft dry after ₹1.6 lakh), and asking for a scientific method.
  - The Eshan page (212 words) names no method, instrument, report deliverable, price or turnaround. It only says the survey "is not a promise of water". That honesty is good, but it is not enough on its own.
- **Fix:**
  - Rebuild the page as a Hybrid with these sections: "How we survey: <method, e.g. electrical resistivity / geophysical meter>", "What you receive (point marking, expected depth band, report)", "Survey vs water divining", "Survey cost", and "Our survey-to-yield record (if tracked)".
  - Add one photo of the equipment in use and a sample report image.

### F7. HIGH: local intent ("near me") is under-served on-site and absent off-site
- **Evidence:**
  - LocalBusiness schema has no `geo`, `openingHoursSpecification`, `sameAs`, `priceRange` or `hasMap`, and the subtype is generic.
  - The address is incomplete ("6th Block, Rajajinagar, Bengaluru", with no street or PIN).
  - There is no map embed and no hours.
  - The directory SERP (Sulekha) shows 20 rated competitors.
  - The 7 locality pages are about 190 words each, with no local detail (typical depths, water table, past jobs).
- **Fix:**
  - Complete the NAP with street and PIN, add geo, hours, a GBP `sameAs` and a map embed on the homepage.
  - Claim and optimise GBP. Category: "Well drilling contractor".
  - List on Justdial, Sulekha and IndiaMART with consistent NAP.
  - Enrich each locality page with typical depth range, access notes, 1 nearby job and 1 local review.
  - Run `/seo local`.

### F8. MEDIUM: segment pages do not speak to their persona's decision criteria
- **Evidence:** The apartment, commercial and farm pages each give the same three "share your access details" bullets. None mentions:
  - Apartments: AGM approval, a written quotation, multiple bores, yield testing, BWSSB compliance.
  - Commercial: Form-1B, invoicing/GST, PO process, scheduling around operations.
  - Farms: borewell subsidy schemes, pump sizing for irrigation, power supply.
  - Every segment: email or written RFQ channel (no mailto anywhere on the site).
- **Fix:** See the persona section. Add segment-specific sections, an "Request a written quotation" form with email, and a downloadable scope checklist.

### F9. MEDIUM: homepage H1 and hero are brand poetry, not intent copy
- **Evidence:**
  - H1: "Water starts with the right groundwork." The query terms appear only in the eyebrow text "BOREWELL DRILLING IN BENGALURU".
  - The primary CTA "Discuss your site" is a tel: link. Desktop users get a phone link with no form above the fold.
  - Positive: mobile has a sticky Call and WhatsApp bar, and the hero shows the 25+ / 10,000+ stats.
- **Fix:**
  - H1: "Borewell Drilling Contractors in Bengaluru: Survey, Drilling, Casing & Flushing". Keep the slogan as a subhead.
  - Add a secondary hero CTA, "Get an estimate on WhatsApp", plus a "Typical cost from ₹__/ft" chip linking to F1.

### F10. LOW: inconsistent branding and template polish
- **Evidence:**
  - Service pages use an "E" monogram logo; the homepage uses a droplet logo.
  - H2s are lowercased ("in bengaluru"), and the Whitefield page has "Borewell planning in WHITEFIELD".
  - Service pages show no WhatsApp option.
  - Homepage `publication_date` is 2026-01-01, and no page shows a visible updated date.
- **Fix:** Unify the logo, fix the casing in the template, add the WhatsApp float site-wide, and show "Updated <date>" on cost and guide pages.

---

## 3. User stories (from SERP signals)

1. **Awareness, regulation-anxious homeowner.** As a Bengaluru homeowner, I want to know whether I am even allowed to drill and what paperwork is needed, because news says drilling is banned and illegal borewells get disconnected. I am blocked by an **information gap**: the site never mentions permits.
   *(Signals: Citizen Matters permit guide, Logical Indian "drilling banned", DownToEarth illegal-borewell drive)*
2. **Consideration, budget-anxious buyer.** As a property owner, I want a realistic total budget per foot and per depth before calling anyone, because I have heard of ₹1.6 lakh spent on dry bores. I am blocked by **price sensitivity**: Eshan says only that the estimate depends on the site.
   *(Signals: 6+ cost guides with ₹/ft tables, IWP "need cost estimates", "more than 2 lacs")*
3. **Consideration, burned-before buyer.** As someone whose neighbour's diviner-marked bore failed, I want to understand how a scientific survey picks a point and what it costs, because I cannot afford a second dry bore. I am blocked by **technical confusion and a trust gap**: the survey page names no method.
   *(Signals: IWP "diviners failed at 450/600 ft", "scientific method of water detection", "1,000 ft dry")*
4. **Decision, apartment committee.** As an apartment association secretary, I want a contractor with verifiable apartment references and a written quotation, because I must justify the spend to the AGM. I am blocked by a **trust gap**: the developer logos have no project detail, and the only channels are phone and WhatsApp.
   *(Signals: IWP "contractor details for apartment complex", Citizen Matters apartment RWH case study, Sulekha ratings-sorted listings)*
5. **Decision, failing-borewell owner.** As an owner whose yield is dropping, I want to know whether to flush, recharge or re-drill, because summer is coming. I am blocked by an **information gap**: no recharge content, and a flushing page with no decision guidance.
   *(Signals: BWSSB 986 recharge pits, IWP "recharge 400 ft borewell", "silt found inside borewell")*

---

## 4. SXO Gap Score

### Homepage: 56/100

| Dimension | Score | Evidence |
|---|---|---|
| Page Type | 11/15 | Local landing page fits commercial and local intent. Missing map, hours and full NAP. |
| Content Depth | 9/15 | About 2,000 words, but roughly 40% is the review marquee. No cost, permit, depth or method specifics. |
| UX Signals | 11/15 | Sticky call and WhatsApp, a 3-field WhatsApp form, clear FAQ. Service cards loop to #contact, and the H1 is not intent-led. |
| Schema | 10/15 | LocalBusiness, OfferCatalog and FAQPage are valid. LocalBusiness lacks geo, hours, sameAs and priceRange, and `areaServed` is a sentence. |
| Media | 8/15 | 8 distinct site photos with good alt text. No video, project gallery or before/after. Images may be stock or generated (unverified). |
| Authority | 4/15 | Unattributed testimonials, unbacked claims, no GBP link, no registration, no About page, no third-party mentions found. |
| Freshness | 3/10 | No visible dates. Publication date 2026-01-01. |

### /borewell-drilling-bengaluru (representative of all 7 service/segment pages): 28/100

| Dimension | Score | Evidence |
|---|---|---|
| Page Type | 9/15 | Service type is correct for the commercial variant, but there is no process, case study or pricing. |
| Content Depth | 2/15 | 219 words, 1 H2, 3 bullets. |
| UX Signals | 6/15 | Call CTA only. No WhatsApp or form. Logo mismatch. |
| Schema | 8/15 | Service and BreadcrumbList are valid. No FAQPage, no offers or priceRange. |
| Media | 0/15 | No images. |
| Authority | 1/15 | No reviews or references. |
| Freshness | 2/10 | No date. |

---

## 5. Persona scoring

Format: R = Relevance, C = Clarity, T = Trust, A = Action (each /25). Weighted toward local and commercial personas because the near-me and contractor SERPs are directory and local heavy.

| Persona | Page | R | C | T | A | Total | Rating |
|---|---|---|---|---|---|---|---|
| Commercial / industrial facility manager | Homepage | 11 | 9 | 9 | 12 | **41** | Needs Work |
| Commercial / industrial facility manager | /commercial-industrial-... | 9 | 8 | 3 | 11 | **31** | Critical Mismatch |
| Apartment association (RWA secretary / FM) | Homepage | 13 | 10 | 11 | 15 | **49** | Needs Work |
| Apartment association (RWA secretary / FM) | /apartment-... | 10 | 8 | 3 | 12 | **33** | Critical Mismatch |
| Farmer / farmland owner (within about 100 km) | Homepage | 14 | 11 | 12 | 18 | **55** | Needs Work |
| Farmer / farmland owner (within about 100 km) | /farm-agricultural-... | 10 | 9 | 3 | 13 | **35** | Critical Mismatch |
| Independent-house homeowner | Homepage | 18 | 14 | 12 | 21 | **65** | Good |
| Independent-house homeowner | /residential-... and /borewell-drilling-bengaluru | 12 | 10 | 4 | 14 | **40** | Needs Work |

### Weakest persona: Commercial / industrial (31-41)
- **Top issue:** No Form-1B or compliance content, no GST invoice, insurance or safety statement, and no email or RFQ channel. The developer logos sit on the homepage, not on this page.
- **Fix:** Add these sections to the commercial page:
  - "Compliance (Form-1B, KGWA/BWSSB)"
  - "Projects: <developer/industrial references with scope>"
  - "Safety & site management"
  - "Billing: GST invoice, PO accepted"
  - A form "Request a written quotation" (name, company, site, required yield, email).

### Apartment association (33-49)
- **Top issue:** Nothing addresses committee decisions: no written quote, no multi-bore or yield-test explanation, no recharge or RWH tie-in, no references from apartments.
- **Fix:**
  - Add an "Apartment borewell checklist for your AGM" (downloadable).
  - Add a "Yield testing & handover report" section.
  - Move the Brigade, Prestige and Sobha references here with project lines.
  - Link to the recharge page (F2).
  - CTA: "Book a site assessment for your association".

### Farmer (35-55)
- **Top issue:** No irrigation sizing, power or 3-phase pump guidance, subsidy or scheme pointers, or travel and rig-charge transparency for 50-100 km sites. English only.
- **Fix:**
  - Add sections: "Typical farm borewell depths around Bengaluru Rural, Ramanagara, Chikkaballapur", "Rig travel charges beyond city limits", "Pump coordination for irrigation".
  - Surface the farmhouse testimonials with locality.
  - Consider a Kannada version of the farm page (hypothesis; validate with search data).

### Homeowner (40-65)
- **Top issue:** Cost and permits are unanswered. The narrow-site answer exists only in the homepage FAQ, not on /residential-.
- **Fix:**
  - On /residential-, add "Compact rig for 3-4 ft access" with a photo and minimum access dimensions.
  - Add a cost table linking to F1, "Permit steps for homeowners", and 3 reviews naming the locality.

### Systemic issues
- **Trust is the lowest dimension on every page.** Service pages score 3-4/25.
- **Clarity is held back** by numbers being absent site-wide (₹, depth, time-to-complete).

### Priority actions
1. Build the cost page (F1) and link it everywhere.
2. Build out the 4 segment pages with persona sections and RFQ forms (F8), starting with commercial and apartment.
3. Run a trust overhaul: GBP, verifiable reviews, About page, registration number, developer project references (F5).
4. Rebuild the survey page around the method (F6). Add permits content (F4) and recharge content (F2).
5. Fix the homepage service-card links and H1 (F3, F9).

---

## 6. Cross-skill referrals
- `/seo local`: GBP, NAP, directory consistency, locality pages.
- `/seo content`: E-E-A-T and authority gaps (About page, reviews, claims).
- `/seo schema`: LocalBusiness completion (geo, hours, sameAs), FAQPage on service pages, Article on the cost guide.
- `/seo page`: thin service-page audit.
- A PDF report can be generated with `/seo google report`.

## 7. Limitations
- WebSearch is not a live google.co.in SERP. Local pack, ads, PAA boxes, AI Overview and related searches were not visible. Local-pack presence for "near me" and "contractors" queries is inferred from directory and GBP results, and PAA is approximated with India Water Portal Q&A titles.
- Justdial did not surface (it is likely blocked or de-ranked in this engine). Its presence on Google is assumed from category norms, not observed.
- Rankings, search volumes, GSC/GA data and GBP status for Eshan were not available. The absence of a GBP was not confirmed.
- Service pages were rendered with `--mode auto` (raw, not SPA). Screenshots were provided for the homepage and one service page only.
- Testimonial authenticity, developer-client claims, "25+ years" and "10,000+ sites" could not be verified.
- Permit and regulation details cited from news (2017-2024) may be outdated. Verify with KGWA/BWSSB before publishing.
- The casing page /borewell-casing-installation-bengaluru and 6 of the 7 locality pages were not scored individually. They use the same template, so expect similar scores.

---

## 8. Structured findings (audit-data.json, category "Search Experience")

```json
[
 {"id":"SXO-01","severity":"critical","title":"No borewell drilling cost page","query":"borewell drilling cost Bangalore","evidence":"SERP dominated by cost guides with Rs/ft tables; site has no cost URL and no Rs figures","fix":"Create /borewell-drilling-cost-bengaluru with depth-slab and casing tables, worked examples, dated rates, FAQPage"},
 {"id":"SXO-02","severity":"critical","title":"No borewell recharge content","query":"borewell recharge Bangalore","evidence":"0 mentions of recharge; SERP = explainers + RWH providers","fix":"Create /borewell-recharge-bengaluru (or explainer routing to flushing/survey)","conditional":"severity medium if service not offered"},
 {"id":"SXO-03","severity":"high","title":"Service pages are ~200-word template stubs; homepage cards link to #contact","evidence":"189-219 words, 0 images, 1 H2, call-only CTA on all 7 service pages","fix":"Expand to 900-1400 words with process, equipment, depths, cost, permits, FAQ, reviews, form; point homepage cards to service URLs"},
 {"id":"SXO-04","severity":"high","title":"No permit/regulation content","query":"borewell drilling Bengaluru","evidence":"Head-term SERP led by permit/ban/illegal-borewell coverage; 0 site mentions of KGWA/BWSSB/permit","fix":"Permits & compliance section + standalone permission guide"},
 {"id":"SXO-05","severity":"high","title":"Unverifiable trust signals","evidence":"40 first-name-only testimonials, unbacked 25+/10,000+ claims, no GBP link/About/registration, developer logos without projects","fix":"Attributed GBP-linked reviews, About page, registration no., project references"},
 {"id":"SXO-06","severity":"high","title":"Survey page misses method intent","query":"groundwater survey Bangalore","evidence":"SERP asks how points are found / diviners fail; page names no method, cost or deliverable","fix":"Hybrid page: method, deliverables, survey vs divining, cost, photos"},
 {"id":"SXO-07","severity":"high","title":"Weak local signals","query":"borewell near me","evidence":"No geo/hours/sameAs/map, incomplete address; directories (Sulekha 20 listings) + GBP dominate","fix":"Complete NAP+schema, map embed, GBP, directory listings, enrich locality pages"},
 {"id":"SXO-08","severity":"medium","title":"Segment pages lack persona decision content and RFQ channel","evidence":"Apartment/commercial/farm pages share generic access bullets; no email anywhere","fix":"Persona sections + written-quotation form with email"},
 {"id":"SXO-09","severity":"medium","title":"Homepage H1 not intent-led","evidence":"H1 'Water starts with the right groundwork.'; primary CTA is tel only","fix":"Intent H1, WhatsApp estimate CTA, cost chip"},
 {"id":"SXO-10","severity":"low","title":"Template inconsistencies","evidence":"Different logos home vs service, lowercase 'bengaluru' in H2s, no WhatsApp on service pages, no visible dates","fix":"Unify template"}
]
```
SXO Gap Score: homepage 56/100, service template 28/100.
