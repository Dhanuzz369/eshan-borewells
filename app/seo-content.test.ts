import assert from "node:assert/strict";
import test from "node:test";
import { getFaqKeys, getLocalityPages, getProcessSteps, getRelatedSeoPages, getSeoContent } from "./seo-content";
import { faqQuestions } from "./faq-data";
import { seoPages } from "./seo-pages";

test("gives every approved page an answer-first block and approved related links", () => {
  for (const page of seoPages) {
    const content = getSeoContent(page.slug);
    const related = getRelatedSeoPages(page.slug);

    assert.ok(content, `${page.slug} needs answer-first content`);
    assert.ok(content.directAnswer.length > 80, `${page.slug} needs a self-contained direct answer`);
    assert.ok(related.every((relatedPage) => relatedPage.slug !== page.slug), `${page.slug} links to itself`);
    assert.ok(related.every((relatedPage) => seoPages.some((approved) => approved.slug === relatedPage.slug)));
  }
});

test("does not publish unsupported locality claims", () => {
  for (const page of seoPages.filter((page) => page.slug.startsWith("borewell-drilling-"))) {
    assert.doesNotMatch(JSON.stringify(getSeoContent(page.slug)), /local office|completed project|water table|guarantee/i);
  }
});

test("unknown pages have no content or related pages", () => {
  assert.equal(getSeoContent("made-up-borewell-location"), undefined);
  assert.deepEqual(getRelatedSeoPages("made-up-borewell-location"), []);
});

test("gives every page a correctly cased question heading, process steps and FAQs", () => {
  for (const page of seoPages) {
    const content = getSeoContent(page.slug)!;

    assert.match(content.answerHeading, /\?$/, `${page.slug} heading should be a question`);
    assert.doesNotMatch(content.answerHeading, /bengaluru|[A-Z]{4,}/, `${page.slug} heading has template casing`);
    assert.ok(getProcessSteps(page.slug).length >= 3);
    assert.ok(getFaqKeys(page.slug).every((key) => key in faqQuestions));
  }
});

test("cross-links every locality page from the other localities", () => {
  const localities = getLocalityPages();

  assert.equal(localities.length, 7);
  for (const locality of localities) assert.equal(getLocalityPages(locality.slug).length, 6);
});
