import assert from "node:assert/strict";
import test from "node:test";
import { getIndexableSeoPages, seoPages } from "./seo-pages";

test("returns every approved SEO page once for internal discovery links", () => {
  const pages = getIndexableSeoPages();

  assert.equal(pages.length, seoPages.length);
  assert.equal(new Set(pages.map((page) => page.slug)).size, pages.length);
  assert.ok(pages.some((page) => page.slug === "borewell-drilling-yelahanka"));
});

test("keeps search titles and descriptions inside display limits", () => {
  for (const page of seoPages) {
    const title = `${page.metaTitle ?? page.title} | Eshan Borewells`;

    assert.ok(title.length <= 65, `${page.slug} title is ${title.length} characters`);
    assert.ok(page.description.length >= 140 && page.description.length <= 160, `${page.slug} description is ${page.description.length} characters`);
    assert.doesNotMatch(page.description, /with Eshan Borewells/, `${page.slug} description repeats the brand`);
  }
});
