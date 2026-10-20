import assert from "node:assert/strict";
import test from "node:test";
import { calculateQuote, formatRange, quotePrice } from "./calculate";
import { quotePricing, sensorSlabs, roboSlabs } from "./config";
import { buildQuotationData } from "./document";
import { initialInput, quoteInputSchema } from "./schema";

const inputFor = (machine: "Sensor Rig" | "Robo Rig", depth: number, operation: "+" | "-", amount: number) => ({
  ...structuredClone(initialInput), locality: "Rajajinagar", machine, depth,
  rateAdjustmentOperation: operation, rateAdjustmentAmount: amount,
});

test("adds or subtracts the per-foot adjustment across all machine slabs and partial depths", () => {
  const original = structuredClone(quotePricing);
  for (const [machine, slabs] of [["Sensor Rig", sensorSlabs], ["Robo Rig", roboSlabs]] as const) {
    for (const depth of [...slabs.map((slab) => slab.to), 850]) {
      const base = calculateQuote(inputFor(machine, depth, "+", 0));
      for (const operation of ["+", "-"] as const) {
        const adjusted = calculateQuote(inputFor(machine, depth, operation, 10));
        const delta = operation === "+" ? 10 : -10;
        assert.equal(adjusted.breakdown[0].min, base.breakdown[0].min! + delta * depth);
        assert.deepEqual(adjusted.breakdown.slice(1), base.breakdown.slice(1));
        for (let index = 0; index < adjusted.drillingSlabs.length; index++) {
          const slab = adjusted.drillingSlabs[index];
          assert.equal(slab.rate, base.drillingSlabs[index].rate! + delta);
          assert.equal(slab.amount, slab.feet * slab.rate!);
        }
      }
    }
  }
  assert.deepEqual(quotePricing, original);
});

test("validates adjustments, permits a zero rate, and defaults older submissions to no adjustment", () => {
  const legacy = { ...structuredClone(initialInput), locality: "Rajajinagar" } as Record<string, unknown>;
  delete legacy.rateAdjustmentOperation;
  delete legacy.rateAdjustmentAmount;
  const parsed = quoteInputSchema.parse(legacy);
  assert.equal((parsed as Record<string, unknown>).rateAdjustmentAmount, 0);
  assert.equal((parsed as Record<string, unknown>).rateAdjustmentOperation, "+");
  for (const machine of ["Sensor Rig", "Robo Rig"] as const) {
    const limit = machine === "Sensor Rig" ? 95 : 120;
    assert.equal(quoteInputSchema.safeParse(inputFor(machine, 850, "-", limit)).success, true);
    assert.equal(quoteInputSchema.safeParse(inputFor(machine, 850, "-", limit + 0.01)).success, false);
  }
  for (const amount of [-1, NaN, Infinity, 0.001]) {
    assert.equal(quoteInputSchema.safeParse(inputFor("Sensor Rig", 850, "+", amount)).success, false);
  }
});

test("quotation and PDF data share adjusted rates and retain paise in displayed amounts", () => {
  const input = inputFor("Sensor Rig", 850, "+", 10.01);
  const quote = calculateQuote(input);
  const data = buildQuotationData({ quote, input, quoteNumber: "test", capturedAt: "2026-10-11T06:30:00Z", customer: { name: "Customer", mobile: "+919844775905" } });
  assert.equal(data.drillingSubtotal, 141758.5);
  assert.equal(data.estimatedTotal, 149258.5);
  assert.equal(quotePrice(quote).min, data.estimatedTotal);
  assert.equal(data.drillingBreakdown[0].rate, 105.01);
  assert.equal(data.drillingBreakdown[0].amount, 26252.5);
  assert.equal(formatRange(data.estimatedTotal, data.estimatedTotal), "₹1,49,258.5");
});
