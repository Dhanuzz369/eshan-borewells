# Visual / Mobile Audit - eshanborewells.com (2026-10-27)
Screenshots: screenshots/{home,service}-{desktop,mobile}[-full].png, contact-section-{desktop,mobile}.png. /contact returns 404 (contact is the #contact section on the homepage).

## Above the fold
- Home: H1 "Water starts with the right groundwork." plus eyebrow "Borewell drilling in Bengaluru" and subhead. Value prop is fairly clear, but H1 does not say what is sold or where (the eyebrow does).
- Mobile: header phone number (+91 98447 75905, 92x14px text link) visible; "Discuss your site" primary CTA at y=482 (above fold); floating Call now (111x52) and WhatsApp (52x52) buttons visible. Good.
- Desktop: header "Call us" 102x42, hero CTA visible, floating WhatsApp 58px bottom right.
- Service page (/borewell-drilling-bengaluru): H1 clear. Only "Call now" (73x25) in header and "Discuss your site" CTA. No WhatsApp, no floating CTA, no phone number shown.
## Metrics
- Horizontal scroll: none (scrollWidth 375/375 mobile, 1920/1920 desktop) on all pages.
- Base font 16px. Layout shift (CLS) 0 on all tested pages.
## Issues
1. MEDIUM - /contact 404. Evidence: HTTP 404 with H1 "404". Fix: add a /contact page (NAP, form, WhatsApp, map) or 301 to /#contact; the Contact page is a typical link target for GBP/citations.
2. MEDIUM - Service page lacks WhatsApp and sticky call bar on mobile; header Call now is 73x25px (below 44-48px). Fix: reuse floating-call/floating-whatsapp component and raise tap area to >=44px.
3. MEDIUM - Floating Call button overlaps the hero marquee/ticker strip (mobile home bottom, text "COMMERCIAL SITES", "RESIDENTIAL" partly hidden behind button). Fix: add bottom padding or hide ticker under floating buttons.
4. LOW - Small tap targets (mobile home): header phone link 92x14, "Tell us what you are working on" link 216x22, "Call now" link 72x22, logo 126x37. Service page breadcrumb "Home" 32x18; in-body links 18-23px high. Fix: min-height 44px / padding.
5. LOW - Breadcrumb "Home / Borewell Drilling..." in service hero is low-contrast grey on navy (visibly dim). Fix: lighten.
6. LOW - Hero mobile: sticky "scroll-nav" (190x45 at top right, y=-1) is fixed; no content covered observed. Floating buttons bottom cover ticker only.
7. INFO - Mobile hero image is cropped to a portrait box (406x703 from 1672x941 source) - acceptable as cover background.
