# Image Audit - eshanborewells.com (2026-10-27)
Home has 11 <img> (all with non-empty descriptive alt + title). Service page tested has 0 <img>. Images are served via Next.js optimizer as AVIF (negotiated), originals are .webp.

| Image | Rendered | Delivered | Bytes |
|---|---|---|---|
| hero-drilling (desktop, w=1920) | 2025x728 | 1672x941 natural src | 114,952 (AVIF) |
| hero-drilling (mobile, w=750) | 406x703 | | 29,580 |
| why-us-banner (desktop 1920) | 1920x527 | | 75,227 |
| why-us-banner (mobile 750) | 375x670 | | 21,692 |
| 4 service thumbs | 170x100 (92x90 mobile) | w=256/384 | 5-12 KB each |
| 4 area cards | 272x150 | w=384 | ~10-11 KB each |
| developer-logos-source.webp | not in HTML | WebP | 200,748 |

Origin files (public/*.webp): hero-drilling 224,726 B; large-drilling-rig 229,132 B; why-us-banner 140,518 B; survey-technician 148,346 B; all 1672x941.

## Issues
1. MEDIUM - developer-logos-source.webp (200 KB, not optimized via next/image) is downloaded on every home load on both desktop and mobile, with no <img> in server HTML (likely CSS/JS). Evidence: network response 200, 200,748 B. Fix: remove if unused, else lazy-load/convert to AVIF/resize.
2. LOW - Mobile area-card images (4 below-fold) have src w=3840 fallback; on mobile they were not yet loaded (naturalWidth 0) so lazy loading works, but the fallback src is 3840px - use `sizes` properly so srcset selects ~750. Fix: ensure sizes attr on area-card images.
3. LOW - Hero image has no priority/fetchpriority (fetchPriority auto, no preload). LCP candidate. Fix: `priority` on next/image hero.
4. LOW - Same 3-4 photos (large-drilling-rig, survey-technician, borewell-water-flow) reused for service thumbs, area cards and banners; alt text varies per use which is good, but stock-like reuse weakens local trust. Fix: add real project photos from Bengaluru localities with geo-specific alt.
5. LOW - No width/height attributes (next/image fill, parent boxed so CLS=0 measured). OK.
6. INFO - Service and area pages have no images at all; adding one relevant image would improve engagement.
7. INFO - Original 1672x941 webp 140-230 KB are heavy but served optimized (AVIF 21-115 KB).
No broken images, no missing alt.

Images score: 78/100
