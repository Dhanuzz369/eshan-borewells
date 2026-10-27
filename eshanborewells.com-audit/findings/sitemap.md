# Sitemap audit: https://www.eshanborewells.com (2026-10-27)

Sitemap: https://www.eshanborewells.com/sitemap.xml (declared in robots.txt; 200; valid urlset; 1,523 bytes; 16 URLs). No index; common alt paths 404.

## Checks
- XML valid, correct namespace: PASS
- Size/count limits (16 URLs, 1.5KB): PASS
- All 16 URLs: 200, no redirects, https+www, self-canonical, meta robots "index, follow": PASS
- Coverage: all 15 internal page links on homepage nav are in sitemap, and no sitemap URL is missing from nav: PASS
- Location gate: 7 neighbourhood pages (<30 warn, <50 stop): PASS
- priority/changefreq: none: PASS
- lastmod: MISSING on all URLs: LOW

## Findings
1. LOW - No <lastmod>. Evidence: 0 lastmod tags. Fix: emit real last-significant-edit dates (Next.js sitemap.ts `lastModified`), not build time.
2. LOW - Apex redirect is a 2-hop chain: http://eshanborewells.com/ -> 308 https://eshanborewells.com/ -> 308 https://www.eshanborewells.com/. Fix: redirect http apex straight to https://www in Vercel domain settings.
3. INFO - Homepage canonical/sitemap use slightly different forms (canonical has no trailing slash, sitemap has "/"); equivalent for root, no action needed.
4. INFO - Location/service page templates are near-identical in size (24-26KB HTML) and titles follow one pattern; uniqueness of body content not measured here. Only 7 areas so gate not triggered, but verify each has >=60% unique copy before scaling up.
5. INFO - Possible expansion: robots.txt has no disallow (fine); only sitemap is a flat file, fine at this size. Soft 404 handling OK (random path returns 404).

## Sitemap URLs by type
Home (1):
- https://www.eshanborewells.com/
Service (4):
- /borewell-drilling-bengaluru
- /groundwater-survey-water-detection-bengaluru
- /borewell-casing-installation-bengaluru
- /borewell-flushing-redevelopment-bengaluru
Customer-segment (4):
- /residential-borewell-drilling-bengaluru
- /apartment-borewell-drilling-bengaluru
- /farm-agricultural-borewell-drilling-bengaluru
- /commercial-industrial-borewell-drilling-bengaluru
Location (7):
- /borewell-drilling-rajajinagar
- /borewell-drilling-whitefield
- /borewell-drilling-electronic-city
- /borewell-drilling-yelahanka
- /borewell-drilling-peenya
- /borewell-drilling-kr-puram
- /borewell-drilling-sarjapur-road
