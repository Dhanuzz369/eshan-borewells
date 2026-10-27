# Backlink Profile - eshanborewells.com (2026-10-27)

Tier 0 (Common Crawl + verify crawler only). No Moz/Bing/DataForSEO/KeywordsEverywhere keys.

## Health score: INSUFFICIENT DATA (no numeric score)
Fewer than 4 scoring factors have data. Not scored: referring domains, quality distribution, anchors, toxicity, velocity, follow ratio, geo.

## Data collected
| Metric | Result | Source |
|---|---|---|
| In CC web graph (cc-main-2026-jan-feb-mar) | No (checked eshanborewells.com and www.) | CC (0.50) |
| PageRank / harmonic centrality / ranks | null (absent) | CC (0.50) |
| Referring domains / backlinks / anchors | Not available | no source |
| Homepage external links (raw HTML, www.eshanborewells.com) | Only WhatsApp wa.me click-to-chat links + self; no sameAs, no social/directory links | Parsed (0.95) |
| Site stack | Next.js (/_next assets), en-IN, LocalBusiness + WebSite JSON-LD | Parsed (0.95) |

## Data limits
- CC graph is quarterly and lags crawling by months. Absence means "not in this release", NOT "zero backlinks". A new or small site is commonly absent.
- CC gives no referring-domain list or anchors even when present. Zero referring domains were identified; none are claimed.
- Raw-HTML fetch only (--mode never); the homepage is server-rendered so link extraction is reliable for homepage, but inner pages were not crawled.
- Verification crawler needs a list of known backlinks; none supplied.

## Findings
1. HIGH - Backlink profile cannot be measured. Evidence: CC absent, no API credentials. Fix: connect Google Search Console (Links report, free, authoritative for own site) and Bing Webmaster Tools; optionally add free Moz key (2,500 rows/mo). Re-run this audit after.
2. HIGH (inference, unverified) - Likely thin/absent link footprint: not in CC and homepage has no sameAs/profile links, suggesting no linked citations or social profiles. Fix: build the profile below.
3. MEDIUM - No entity links: LocalBusiness schema lacks sameAs (GBP, Facebook, Instagram, JustDial, etc.). Fix: add sameAs once profiles exist; keep NAP (6th Block, Rajajinagar; +91 98447 75905) identical everywhere.
4. MEDIUM - Canonical/host: canonical is https://www.eshanborewells.com while apex was what CC was queried for. Ensure apex 301s to www so links consolidate; check both hosts in GSC. (Not verified redirect behavior.)
5. LOW - Anchor patterns: not assessable. Target mix when building: ~50% brand ("Eshan Borewells"), ~20% naked URL, ~15% generic, <=10-15% partial-match ("borewell drilling Bengaluru"); avoid exact-match repetition.

## Typical gaps for a Bengaluru borewell business (opportunities; none confirmed present or absent)
- Local directories/citations: Google Business Profile (primary; Rajajinagar), JustDial, Sulekha, IndiaMART, TradeIndia, Yelp India, Bing Places, Apple Business Connect, Facebook/Instagram/YouTube profiles, Bengaluru business listings (Magicpin-type local lists), Nextdoor-style neighborhood groups.
- Suppliers/manufacturers: rig/compressor/hammer/bit and casing pipe (PVC/MS) suppliers, pump brands (Kirloskar, Crompton, etc.) dealer/installer pages, DTH bit vendors - request "installer/partner" listings or testimonials with links.
- Associations/government: borewell/drillers' associations in Karnataka, Karnataka Ground Water Authority / CGWB registration (rig registration is a legal requirement in Karnataka; mention and link to authority), BWSSB, Rajajinagar/local traders' associations, Bengaluru Chamber of Commerce, apartment federations (BAF), RWA pages.
- Content-led links: groundwater-level/seasonal guides for Bengaluru, rainwater-harvesting + borewell recharge pieces, local news/Deccan Herald-type quotes during water-crisis stories, college geology/civil dept resources.
- Partnerships: plumbers, pump-repair shops, civil contractors, real-estate/builders, farm and farmhouse communities - reciprocal referral pages (keep reciprocal links limited, avoid link schemes).
- Avoid: paid link bundles, PBN, mass directory submissions (toxic risk; Moz Spam Score unavailable to check).

## Next steps
Run /seo technical for crawl/redirect checks and /seo local for citations/GBP. Re-run backlinks after GSC/Moz data is connected, or after next CC release.
