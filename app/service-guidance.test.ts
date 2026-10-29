import assert from "node:assert/strict";
import test from "node:test";
import { getServiceGuidance } from "./service-guidance";
import { seoPages } from "./seo-pages";

test("priority search landing pages answer service decisions without publishing internal prices", () => {
  for (const slug of ["borewell-drilling-bengaluru", "groundwater-survey-water-detection-bengaluru", "borewell-casing-installation-bengaluru", "borewell-flushing-redevelopment-bengaluru", "borewell-drilling-electronic-city", "borewell-drilling-sarjapur-road", "borewell-drilling-rajajinagar"]) {
    const sections = getServiceGuidance(slug);
    assert.ok(sections.length >= 2, `${slug} needs practical guidance`);
    assert.ok(sections.every((section) => section.paragraphs.length > 0));
    assert.ok(seoPages.some((page) => page.slug === slug));
    assert.doesNotMatch(JSON.stringify(sections), /₹|99%|guaranteed water|best in Bangalore|password|advance received/i);
  }
  assert.deepEqual(getServiceGuidance("unknown"), []);
});

test("the priority area pages have distinct substantive guidance", () => {
  const slugs = ["borewell-drilling-electronic-city", "borewell-drilling-sarjapur-road", "borewell-drilling-rajajinagar"];
  assert.equal(new Set(slugs.map((slug) => JSON.stringify(getServiceGuidance(slug)))).size, slugs.length);
});
