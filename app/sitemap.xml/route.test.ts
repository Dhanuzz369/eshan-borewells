import assert from "node:assert/strict";
import test from "node:test";
import { buildSitemapXml } from "./sitemap";
import { seoPages } from "../seo-pages";

test("lists only the canonical homepage and approved indexable pages", () => {
  const xml = buildSitemapXml("https://www.eshanborewells.com", seoPages);

  assert.match(xml, /https:\/\/www\.eshanborewells\.com\/borewell-drilling-yelahanka/);
  assert.equal((xml.match(/<loc>/g) ?? []).length, seoPages.length + 1);
  assert.doesNotMatch(xml, /get-quote/);
});

test("does not fabricate freshness or deprecated sitemap hints", () => {
  const xml = buildSitemapXml("https://www.eshanborewells.com", seoPages);

  assert.doesNotMatch(xml, /<lastmod>|<priority>|<changefreq>/);
});
