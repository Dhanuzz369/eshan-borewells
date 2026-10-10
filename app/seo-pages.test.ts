import assert from "node:assert/strict";
import test from "node:test";
import { getIndexableSeoPages, seoPages } from "./seo-pages";

test("returns every approved SEO page once for internal discovery links", () => {
  const pages = getIndexableSeoPages();

  assert.equal(pages.length, seoPages.length);
  assert.equal(new Set(pages.map((page) => page.slug)).size, pages.length);
  assert.ok(pages.some((page) => page.slug === "borewell-drilling-yelahanka"));
});
