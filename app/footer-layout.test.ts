import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { resolve } from "node:path";
import test from "node:test";

const homePage = readFileSync(resolve(process.cwd(), "app/page.tsx"), "utf8");

test("places service links, office and contact details below the footer lead form", () => {
  const footerStart = homePage.indexOf('<footer className="site-footer">');
  const areasLinks = homePage.indexOf('className="area-resource-links"');
  const leadForm = homePage.indexOf("footer-lead");
  const footerLinks = homePage.indexOf("footer-service-links");
  const office = homePage.indexOf('<h3>Our office</h3>');
  const speakWithUs = homePage.indexOf('<h3>Speak with us</h3>');

  assert.ok(footerStart >= 0);
  assert.ok(areasLinks < 0 || areasLinks > footerStart, "service and local guidance links should not remain in the areas section");
  assert.ok(leadForm > footerStart);
  assert.ok(footerLinks > leadForm, "service and local guidance should follow the footer lead form");
  assert.ok(office > footerLinks, "office details should follow the lead form and service links");
  assert.ok(speakWithUs > office, "contact details should follow the office details");
});
