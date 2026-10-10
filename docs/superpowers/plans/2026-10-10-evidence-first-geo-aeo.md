# Evidence-First GEO + AEO Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Improve factual entity clarity, answer-engine readability, and local discovery without unsupported claims, thin location pages, or new routes.

**Architecture:** A small public-facts source and page-intent content model feed visible copy, JSON-LD, sitemap, and internal links. The existing static service and locality pages remain the only public SEO pages; the quote tool remains private.

**Tech Stack:** Next.js 16, TypeScript, React server components, JSON-LD, Node test runner with `tsx`, CSS, Graphify.

**Spec:** `docs/superpowers/specs/2026-10-10-geo-aeo-design.md`

## Global Constraints

- Do not change Vercel, DNS, Google accounts, quote pricing, PDFs, lead delivery, WhatsApp, or telephone actions.
- Do not add routes, create locality pages, or redirect approved indexable pages.
- Keep `/get-quote` noindex and outside sitemap/llms public discovery output.
- Do not publish unverified email, hours, social profiles, credentials, ratings, project claims, GPS coordinates, or coverage claims.
- Keep 25+ years and 10,000+ sites only as owner-provided claims; neutralize unsupported 99%, 100%, and high-success claims.
- Keep all site-condition-dependent statements conditional; do not promise water, yield, depth, price, or timing.
- Do not add crawler-specific rules or restrictive CSP in this phase.

## Review Focus

- Missing optional business values must not create invalid JSON-LD or broken contact links.
- `/get-quote` must not occur in sitemap, llms, or indexable-page output.
- Locality copy must not claim a local office, completed project, local groundwater data, or a guarantee.
- Related links must target approved pages and never point to the current page.
- Sitemap must not fabricate freshness or use `lastmod`, `priority`, or `changefreq` hints for unchanged content.

## File Structure

- Create `app/public-business-facts.ts`: owner-provided public identity/contact/service facts only.
- Create `app/seo-content.ts`: answer-first service/locality records and relation helpers.
- Create `app/seo-content.test.ts`: safety and related-page tests.
- Modify `app/business-config.ts`: preserve environment-backed contact values and expose approved facts where needed.
- Modify `lib/seo/page-schema.ts` and its tests: stable LocalBusiness, homepage WebPage, and provider references.
- Modify `app/page.tsx`: use shared entity schema, homepage WebPage markup, factual claims, and concise answer-first guidance.
- Modify `app/[slug]/page.tsx`, `app/seo-pages.ts`, and `app/globals.css`: render page-intent copy, considerations, and related internal links.
- Modify `app/sitemap.xml/route.ts`; create `app/sitemap.xml/route.test.ts`: deterministic, accurate sitemap output.
- Modify `next.config.ts`: only the non-breaking response headers in the spec.
- Create `GEO_AEO_IMPLEMENTATION_REPORT.md` and `docs/AI_VISIBILITY_MEASUREMENT.md`; modify `README.md`.
- Refresh only generated `graphify-out/*` files once source is final.

### Task 1: Public business facts and stable entity schema

**Files:** `app/public-business-facts.ts`, `lib/seo/page-schema.ts`, `lib/seo/page-schema.test.ts`, `app/layout.tsx`, `app/page.tsx`, `app/[slug]/page.tsx`.

**Interfaces:** Create `publicBusinessFacts`; export `buildLocalBusinessSchema(origin, facts)` and `buildHomePageSchema(origin, title, description)`.

- [ ] **Step 1: Write failing schema tests**

```ts
test("uses one stable LocalBusiness identifier", () => {
  const localBusiness = buildLocalBusinessSchema("https://www.eshanborewells.com", publicBusinessFacts);
  const page = buildHomePageSchema("https://www.eshanborewells.com", "Title", "Description");
  assert.equal(localBusiness["@id"], "https://www.eshanborewells.com/#localbusiness");
  assert.equal(page.about["@id"], localBusiness["@id"]);
});

test("omits optional unverified schema fields", () => {
  const schema = buildLocalBusinessSchema("https://www.eshanborewells.com", { ...publicBusinessFacts, email: null });
  assert.equal("email" in schema, false);
});
```

- [ ] **Step 2: Verify RED**

Run `node --import tsx --test lib/seo/page-schema.test.ts`. Expected: fail because the new builders do not exist.

- [ ] **Step 3: Implement facts and builders**

Create the public facts source with only supplied name, address, phone, service framing, and existing service categories. Add `#localbusiness` and `#webpage` builders; omit ratings, coordinates, hours, email, and `sameAs`.

- [ ] **Step 4: Render shared schema entities**

Use the shared LocalBusiness on the homepage. Add homepage WebPage markup; make page Service schema reference the LocalBusiness `@id`.

- [ ] **Step 5: Verify GREEN and commit**

Run `node --import tsx --test lib/seo/page-schema.test.ts`; commit as `feat: align public business entities`.

### Task 2: Answer-first content and safe locality differentiation

**Files:** `app/seo-content.ts`, `app/seo-content.test.ts`, `app/seo-pages.ts`, `app/[slug]/page.tsx`, `app/page.tsx`, `app/globals.css`.

**Interfaces:** Export `getSeoContent(slug)` and `getRelatedSeoPages(slug)` returning records with `pageType`, `directAnswer`, `considerations`, and `relatedSlugs`.

- [ ] **Step 1: Write failing content-safety tests**

```ts
test("gives every approved page an answer-first block and approved related links", () => {
  for (const page of seoPages) {
    assert.ok(getSeoContent(page.slug).directAnswer.length > 80);
    assert.ok(getRelatedSeoPages(page.slug).every((related) => related.slug !== page.slug));
  }
});

test("does not publish unsupported locality claims", () => {
  for (const page of seoPages.filter((page) => page.slug.startsWith("borewell-drilling-"))) {
    assert.doesNotMatch(JSON.stringify(getSeoContent(page.slug)), /local office|completed project|water table|guarantee/i);
  }
});
```

- [ ] **Step 2: Verify RED**

Run `node --import tsx --test app/seo-content.test.ts`. Expected: fail because the content model does not exist.

- [ ] **Step 3: Implement concise page-intent records**

Write an answer, planning considerations, and related approved pages for every existing URL. Service records describe verified scope and conditions; locality records describe only customer location/access/property type and availability confirmation.

- [ ] **Step 4: Render the useful sections**

Render direct answers, practical considerations, and related links on static pages. Add one concise homepage guide section linking only existing service pages. Preserve heading hierarchy and responsive styling.

- [ ] **Step 5: Neutralize unsupported marketing claims**

Replace 99% detection, 100% satisfaction, and high-success wording with process language. Keep 25+ years and 10,000+ sites labeled as owner-provided claims.

- [ ] **Step 6: Verify GREEN and commit**

Run `node --import tsx --test app/seo-content.test.ts app/seo-pages.test.ts`; commit as `feat: add answer-first service guidance`.

### Task 3: Accurate sitemap and discovery coverage

**Files:** `app/sitemap.xml/route.ts`, `app/sitemap.xml/route.test.ts`, `app/llms.txt/route.ts`, and `app/robots.txt/route.ts` only if a real inconsistency is found.

**Interfaces:** Export `buildSitemapXml(origin, pages)` for deterministic testing.

- [ ] **Step 1: Write failing sitemap tests**

```ts
test("lists only approved indexable URLs", () => {
  const xml = buildSitemapXml("https://www.eshanborewells.com", seoPages);
  assert.match(xml, /borewell-drilling-yelahanka/);
  assert.doesNotMatch(xml, /get-quote/);
});

test("does not fabricate freshness or deprecated hints", () => {
  const xml = buildSitemapXml("https://www.eshanborewells.com", seoPages);
  assert.doesNotMatch(xml, /<lastmod>|<priority>|<changefreq>/);
});
```

- [ ] **Step 2: Verify RED**

Run `node --import tsx --test app/sitemap.xml/route.test.ts`. Expected: fail because the builder is absent and the route emits the three tags.

- [ ] **Step 3: Implement deterministic sitemap output**

Generate XML from canonical origin and approved page list only. Keep cache headers and public llms/robots synchronization. Do not add AI-bot rules.

- [ ] **Step 4: Verify GREEN and commit**

Run `node --import tsx --test app/sitemap.xml/route.test.ts app/seo-pages.test.ts`; commit as `fix: keep sitemap discovery signals accurate`.

### Task 4: Non-breaking response hardening

**Files:** `next.config.ts`; create `next.config.test.ts` only if the config is safely importable.

- [ ] **Step 1: Write a failing header assertion**

Test or inspect a production response for absent `X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, and `Referrer-Policy: strict-origin-when-cross-origin`.

- [ ] **Step 2: Verify RED**

Run the focused response check. Expected: named headers absent.

- [ ] **Step 3: Add only the named headers**

Add them through existing Next configuration; do not add CSP, bot directives, or restrictive permissions policies.

- [ ] **Step 4: Verify GREEN and commit**

Re-run the response check and ensure homepage, `tel:`, and WhatsApp links still render. Commit as `chore: add baseline response hardening`.

### Task 5: GEO/AEO evidence and measurement documentation

**Files:** `GEO_AEO_IMPLEMENTATION_REPORT.md`, `docs/AI_VISIBILITY_MEASUREMENT.md`, `README.md`.

- [ ] **Step 1: Create the implementation report**

Document the baseline, inspected pages, verified/unverified facts, issue inventory with severity/evidence/status/validation, question map, locality review, schema/llms/crawler decisions, unavailable measurements, risks, and 30/60/90 roadmap.

- [ ] **Step 2: Create the manual AI visibility procedure**

Define a fixed query set plus date/platform/query/result URL/mention/citation/accuracy/competitor/repeatability fields. State that manual samples are not statistically representative and leave all results blank.

- [ ] **Step 3: Update maintainer guidance and commit**

Document source-of-truth files, owner verification requirements, and noindex quote behavior in README. Commit as `docs: add GEO AEO evidence framework`.

### Task 6: Whole-project validation and graph refresh

**Files:** generated `graphify-out/*` only after source is final.

- [ ] **Step 1: Run automated verification**

Run `npm test && npm run lint && npx next build --webpack && git diff --check`. Expected: all tests/lint/build succeed and no whitespace errors.

- [ ] **Step 2: Validate representative rendered routes**

Start a local production server and inspect `/`, `/borewell-drilling-bengaluru`, `/borewell-drilling-yelahanka`, `/sitemap.xml`, `/robots.txt`, `/llms.txt`, and `/get-quote` for expected canonical/indexability/discovery behavior.

- [ ] **Step 3: Refresh graph and review constraints**

Run `npm run graph:update`; confirm the final diff has no Vercel changes, new locality routes, quote-flow changes, or unverified claims.

- [ ] **Step 4: Commit and push**

Commit as `feat: strengthen evidence-first GEO AEO`, push `main`, then commit any post-commit Graphify refresh separately.

## Plan self-review

- **Coverage:** Tasks 1–6 implement every in-scope spec section: entity clarity, answer-first content, locality safeguards, schema, crawl/discovery accuracy, safe headers, evidence/measurement, and validation.
- **Type consistency:** Task 1 owns schemas; Task 2 owns content relations; Task 3 owns sitemap generation; later tasks consume these interfaces.
- **Review-focus coverage:** Optional public facts are tested in Task 1; local-content safety and self-link prevention in Task 2; quote exclusion and sitemap shape in Task 3.
- **Proportion:** The plan specifies decisions, interfaces, tests, and verification without embedding production code.
