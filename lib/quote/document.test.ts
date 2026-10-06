import test from "node:test";
import assert from "node:assert/strict";
import { calculateQuote } from "./calculate";
import { variableMaterials } from "./config";
import { buildQuotationData, QUOTE_VALIDITY_DAYS } from "./document";
import { initialInput } from "./schema";
import { quoteInputSchema } from "./schema";

test("quotation data uses one quote object, seven-day validity and migrated casing name", () => {
  const input = { ...structuredClone(initialInput), locality: "Bannerghatta", depth: 1200, machine: "Sensor Rig" as const };
  const quote = calculateQuote(input);
  const data = buildQuotationData({ quote, quoteNumber: "EB-2026-0056", capturedAt: "2026-10-06T06:30:00.000Z", input, customer: { name: "Customer Name", mobile: "+919844775905" } });
  assert.equal(QUOTE_VALIDITY_DAYS, 7);
  assert.equal(data.quoteDate, "06 Oct 2026");
  assert.equal(data.validUntil, "13 Oct 2026");
  assert.equal(data.quoteNumber, "EB-2026-0056");
  assert.equal(data.quote, quote);
  assert.equal(data.machineType, "Sensor Rig");
  assert.equal(data.fixedOperationalCosts.find((line) => line.key === "fixed-setting")?.min, 2000);
  assert.equal(data.estimatedTotal, 264500);
  assert.equal(data.variableMaterials.find((material) => material.label.includes("Slotted Casing"))?.label, '4½" or 5" 6 kg PVC Slotted Casing');
  const retiredName = '6" PVC ' + "Slotted Casing";
  assert.equal(variableMaterials.some((material) => String(material.label) === retiredName), false);
});

test("Robo Rig document keeps zero setting charge and progressive total", () => {
  const input = { ...structuredClone(initialInput), locality: "Rajajinagar", depth: 1200, machine: "Robo Rig" as const };
  const quote = calculateQuote(input);
  const data = buildQuotationData({ quote, quoteNumber: "EB-2026-0057", capturedAt: "2026-10-06T06:30:00.000Z", input, customer: { name: "Customer Name", mobile: "+919844775905" } });
  assert.equal(data.fixedOperationalCosts.find((line) => line.key === "fixed-setting")?.min, 0);
  assert.equal(data.drillingSubtotal, 540000);
  assert.equal(data.estimatedTotal, 544000);
});

test("Robo Rig input is capped at 1200 ft by validation", () => {
  const valid = { ...structuredClone(initialInput), locality: "Rajajinagar", depth: 1200, machine: "Robo Rig" as const };
  assert.equal(quoteInputSchema.safeParse(valid).success, true);
  assert.equal(quoteInputSchema.safeParse({ ...valid, depth: 1210 }).success, false);
});
