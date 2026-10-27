import assert from "node:assert/strict";
import test from "node:test";
import { buildIndexablePageSchemas, buildLocalBusinessSchema, buildHomePageSchema, buildWebsiteSchema } from "./page-schema";
import { publicBusinessFacts } from "../../app/business-config";
import { requiresOwnerVerification } from "../../app/public-business-facts";

test("keeps owner-verification requirements out of public business facts until supported", () => {
  assert.ok(requiresOwnerVerification.length > 0);
  assert.ok(requiresOwnerVerification.some((item) => item.includes("25+ years")));
  assert.ok(requiresOwnerVerification.some((item) => item.toLowerCase().includes("review")));
});

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

test("describes the business with a specific type, E.164 phone and a real service area", () => {
  const schema = buildLocalBusinessSchema("https://www.eshanborewells.com", publicBusinessFacts);

  assert.equal(schema["@type"], "HomeAndConstructionBusiness");
  assert.equal(schema.telephone, "+919844775905");
  assert.equal(schema.areaServed["@type"], "City");
  assert.ok(schema.hasOfferCatalog.itemListElement.every((offer) => offer["@type"] === "Offer"));
});

test("links an indexable page to its main entity when given", () => {
  const { webPage } = buildIndexablePageSchemas({ origin: "https://www.eshanborewells.com", slug: "a", title: "A", description: "D", mainEntityId: "https://www.eshanborewells.com/a#service" });

  assert.deepEqual(webPage.mainEntity, { "@id": "https://www.eshanborewells.com/a#service" });
});

test("publishes dateModified only when a revision date is supplied", () => {
  const base = { origin: "https://www.eshanborewells.com", slug: "a", title: "A", description: "D" };

  assert.equal("dateModified" in buildIndexablePageSchemas(base).webPage, false);
  assert.equal(buildIndexablePageSchemas({ ...base, dateModified: "2026-10-27" }).webPage.dateModified, "2026-10-27");
  assert.equal(buildHomePageSchema(base.origin, "T", "D", "2026-10-27").dateModified, "2026-10-27");
});

test("links the business to its Google Business Profile and daily hours", () => {
  const schema = buildLocalBusinessSchema("https://www.eshanborewells.com", publicBusinessFacts);

  assert.deepEqual(schema.sameAs, ["https://maps.google.com/?cid=2493916436492727064"]);
  assert.equal(schema.hasMap, "https://maps.google.com/?cid=2493916436492727064");
  assert.equal(schema.openingHoursSpecification.dayOfWeek.length, 7);
  assert.equal("aggregateRating" in schema, false, "self-serving review markup is not eligible");
});
