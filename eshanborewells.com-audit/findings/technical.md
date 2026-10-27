# Technical SEO - eshanborewells.com (2026-10-27) - Score 88/100
Crawled 16 pages (homepage + 15 sitemap URLs; no additional internal URLs found), 1s delay.
PASS: HTTPS/HSTS; apex->www 308 (http://apex -> https://apex -> https://www, 2 hops); http://www redirects; robots.txt `Allow: /` + Sitemap decl; sitemap.xml valid urlset, 15 URLs, all 200, all self-canonical, none noindex; SSR/prerendered (x-nextjs-prerender, full content in raw HTML); viewport set; html lang=en-IN; no hreflang (single-language, acceptable); unknown URL returns real 404 with noindex; trailing-slash URLs 308 to non-slash.
Findings
- Medium: No Content-Security-Policy / Permissions-Policy headers (https://www.eshanborewells.com/ returns HSTS, X-Frame-Options SAMEORIGIN, nosniff, Referrer-Policy only). Fix: add in next.config headers().
- Low: HSTS max-age=63072000 lacks includeSubDomains/preload. Fix: add if all subdomains are HTTPS.
- Low: Homepage canonical is `https://www.eshanborewells.com` (no trailing slash; equivalent, consistent). Info only.
- Low: Sitemap has no <lastmod>. Fix: add lastModified in app/sitemap.ts.
- Low: Cache-Control `public, max-age=0, must-revalidate` on HTML (Vercel default, fine; edge HIT).
- Low: 404 page keeps homepage title (`Borewell Drilling & Water Survey in Bengaluru | Eshan Borewells`) - set a distinct 404 title (noindex present, status 404 OK).
- Low: Homepage HTML ~169 KB with 2,525 words and 10 H2/19 H3; fine but hero image is preloaded (good LCP). Lab CWV not measured; run PageSpeed Insights.
- Info: Structured data present: WebSite, LocalBusiness(+PostalAddress, OfferCatalog) on home; Service, Place, WebPage, BreadcrumbList on all inner pages. Validate with Rich Results Test; ensure LocalBusiness has geo/openingHours/sameAs.
- Info: AI crawlers not blocked (Allow: / for all). IndexNow not implemented (optional, Bing/Yandex).
