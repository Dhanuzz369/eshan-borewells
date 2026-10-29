import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";

test("homepage content is visible immediately and its main image has explicit priority", () => {
  const css = readFileSync(new URL("./globals.css", import.meta.url), "utf8");
  const page = readFileSync(new URL("./page.tsx", import.meta.url), "utf8");
  const entrance = css.match(/@keyframes hero-enter\{.*?\}\}/)?.[0];
  assert.ok(entrance);
  assert.doesNotMatch(entrance, /opacity:0/);
  assert.match(page, /fetchPriority="high"/);
  assert.match(page, /<Link href=\{localityLinks\[area\]\}>/);
});

test("expanded page copy uses its real revision date and separates process text", () => {
  const page = readFileSync(new URL("./[slug]/page.tsx", import.meta.url), "utf8");
  assert.match(page, /guidance\.map/);
  assert.match(page, /dateTime=\{contentUpdated\}/);
  assert.match(page, /dateModified: contentUpdated/);
  assert.match(page, /<strong>\{step.title\}<\/strong>\{" "\}/);
});
