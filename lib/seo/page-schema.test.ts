import assert from "node:assert/strict";
import test from "node:test";
import { buildIndexablePageSchemas, buildWebsiteSchema } from "./page-schema";

test("gives the site-wide WebSite entity a stable identifier", () => {
  const schema = buildWebsiteSchema("https://www.eshanborewells.com/");

  assert.equal(schema["@id"], "https://www.eshanborewells.com/#website");
  assert.equal(schema.url, "https://www.eshanborewells.com");
});

test("builds self-referencing WebPage and breadcrumb schemas for an indexable page", () => {
  const schemas = buildIndexablePageSchemas({
    origin: "https://www.eshanborewells.com/",
    slug: "borewell-drilling-yelahanka",
    title: "Borewell Drilling in Yelahanka, Bengaluru",
    description: "Borewell drilling, water survey and casing discussions in Yelahanka.",
  });

  assert.equal(schemas.webPage["@type"], "WebPage");
  assert.equal(schemas.webPage.url, "https://www.eshanborewells.com/borewell-drilling-yelahanka");
  assert.equal(schemas.webPage["@id"], "https://www.eshanborewells.com/borewell-drilling-yelahanka#webpage");
  assert.deepEqual(schemas.breadcrumb.itemListElement, [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.eshanborewells.com/" },
    { "@type": "ListItem", position: 2, name: "Borewell Drilling in Yelahanka, Bengaluru", item: "https://www.eshanborewells.com/borewell-drilling-yelahanka" },
  ]);
});
