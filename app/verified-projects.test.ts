import assert from "node:assert/strict";
import test from "node:test";
import { verifiedDevelopers } from "./verified-projects";

// public/developer-logos.webp is 1536x196: two rows of 90px-high logo cards.
const SPRITE = { width: 1536, height: 196, logoHeight: 90 };

test("keeps every developer logo slot inside the sprite and clear of its neighbours", () => {
  for (const logo of verifiedDevelopers) {
    assert.ok(logo.x >= 0 && logo.x + logo.width <= SPRITE.width, `${logo.name} runs off the sprite`);
    assert.ok(logo.y >= 0 && logo.y + SPRITE.logoHeight <= SPRITE.height, `${logo.name} runs off the sprite`);
  }

  for (const row of new Set(verifiedDevelopers.map((logo) => logo.y))) {
    const slots = verifiedDevelopers.filter((logo) => logo.y === row).sort((a, b) => a.x - b.x);
    slots.slice(1).forEach((logo, index) => assert.ok(logo.x >= slots[index].x + slots[index].width, `${slots[index].name} overlaps ${logo.name}`));
  }
});
