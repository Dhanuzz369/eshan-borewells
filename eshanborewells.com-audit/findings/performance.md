# Performance audit: eshanborewells.com (2026-10-27)

Performance score: 88/100. All numbers are LAB (Lighthouse 13.5.0, local headless Chrome, single run each, Lighthouse default throttling). No FIELD (CrUX) data: no API key, and PSI API returned a rate-limit error. INP is not measurable in lab; TBT is the proxy.

| Page | Device | Perf | LCP | TBT | CLS | FCP | Weight |
|---|---|---|---|---|---|---|---|
| / | mobile | 90 | 2.4s | 280ms | 0 | 1.2s | 501 KiB |
| / | desktop | 81 | 2.0s | 0ms | 0 | 1.8s | 662 KiB |
| /borewell-drilling-bengaluru (service) | mobile | 100 | 1.1s | 40ms | 0 | 1.1s | 204 KiB |
| /borewell-drilling-whitefield (location) | mobile | 99 | 1.3s | 120ms | 0 | 1.1s | 204 KiB |
| /borewell-drilling-whitefield | desktop | 100 | 0.3s | 0ms | 0 | 0.3s | 204 KiB |

Lab pass/fail: LCP pass (home mobile 2.4s is borderline vs 2.5s), CLS pass, TBT low (INP likely good, unverified).
Third parties: none (all requests same-origin, 14-23 requests). No web fonts. TTFB 30-100ms (Vercel, X-Vercel-Cache HIT).

## Findings
1. MEDIUM - Home mobile LCP element render delay 2,009ms of 2.4s (TTFB 171, load delay 185, load 368). Image arrives early; painting waits (hydration/main-thread, or CSS 150ms render-block, 280ms TBT). Fix: ensure hero img has no JS/opacity gating, use priority/fetchPriority="high" (preload lacks fetchpriority=high), trim hydration JS.
2. MEDIUM - Home desktop LCP 2.0s: hero fetched at w=1920 (115 KB), 1,564ms load duration competing with other images. Lighthouse flags ~34 KiB savings (image-delivery). Fix: lower quality (q=60-65) or AVIF, sizes tuned, source file is 225 KB, recompress.
3. MEDIUM - /developer-logos-source.webp is 200 KB, served raw from /public (not via next/image), largest asset on home (40% of mobile weight). Fix: use next/image or resize/compress; lazy-load if below the fold.
4. MEDIUM - Static /public assets (hero-drilling.webp, developer-logos-source.webp) served with Cache-Control: public, max-age=0, must-revalidate. Fix: set long-lived Cache-Control via next.config headers or versioned filenames.
5. LOW - Render-blocking CSS: single 30 KB stylesheet (13pbg-htur84x.css), est. 150ms (home mobile), 270-300ms (inner mobile). 12-23 KiB unused. Fix: Next `experimental.inlineCss` or split page-specific CSS.
6. LOW - JS: 73 KB + 46 KB shared chunks, ~54 KiB unused on home, 14 KiB legacy JS polyfills (noModule chunk). Fix: raise browserslist target, defer non-critical client components. Forced reflow 63ms (unattributed) on home mobile.
7. LOW - Home below-fold images (survey-technician, why-us-banner) 22-75 KB each, 30 KiB estimated savings; already lazy and via next/image. Fix: lower quality/AVIF.
8. INFO - Inner pages (service/location) are text-only: 204 KiB, LCP is a paragraph (1.1-1.3s), TTFB 617ms on one mobile run (cold/variance). No action beyond CSS items.
9. INFO - CLS 0 on all pages; no font loading issues; no third-party scripts.

Raw Lighthouse JSON: /private/tmp/claude-501/-Users-dhanush-Library-Application-Support-Claude-scratch-workspaces-5abe494e-db20-4ec5-9924-cf1a6b6c9436-3346270e-32e3-49d6-9ae5-e92fe9d4b4d2-scratch-2026-10-27-feb484/531961ce-c63d-4a83-80a9-edb0a92c74ca/scratchpad/lh/
