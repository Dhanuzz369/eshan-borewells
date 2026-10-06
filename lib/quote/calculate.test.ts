import test from "node:test";
import assert from "node:assert/strict";
import { calculateQuote } from "./calculate";
import { quotePricing, sensorSlabs, type Pricing } from "./config";
import { initialInput, normalizeMobile, quoteInputSchema, customerSchema, type QuoteInput } from "./schema";

const make = (overrides: Partial<QuoteInput> = {}): QuoteInput => ({ ...structuredClone(initialInput), locality: "Rajajinagar", access: "open", machine: "Sensor Rig", diameter: "Standard", ...overrides });
const drilling = (input: QuoteInput) => calculateQuote(input).breakdown.find((x) => x.key === "drilling")?.min;

test("approved progressive Sensor Rig rates, all boundaries and partial slabs", () => {
  let total = 0;
  let prior = 0;
  for (const slab of sensorSlabs) {
    const partial = prior ? prior + 1 : 50;
    assert.equal(drilling(make({ depth: partial })), total + (partial - prior) * slab.perFoot);
    total += (slab.to - prior) * slab.perFoot;
    assert.equal(drilling(make({ depth: slab.to })), total);
    prior = slab.to;
  }
  assert.equal(drilling(make({ depth: 850 })), 124250);
  assert.equal(drilling(make({ depth: 1500 })), 470000);
  assert.equal(drilling(make({ depth: 2000 })), 1052500);
});
test("500 ft open residential uses progressive drilling (not final slab times depth)", () => assert.equal(drilling(make()), 54000));
test("compact and robo have distinct unconfigured tables", () => {
  for (const [access, machine] of [["narrow", "Compact Rig"], ["restricted", "Robo Rig"]] as const) {
    const q = calculateQuote(make({ access, machine }));
    assert.equal(q.machine, machine); assert.equal(q.estimatedMax, null); assert.equal(q.breakdown.find((x) => x.key === "drilling")?.min, null);
  }
});
test("new borewell plus pump, existing pump-only, complete solution", () => {
  for (const service of ["new", "existing", "complete", "pump"] as const) {
    const q = calculateQuote(make({ service, pump: { required: "yes", type: "Submersible Pump", hp: "3 HP", installationDepth: 350, panel: true, electrical: true } }));
    assert.equal(q.breakdown.some((x) => x.key === "drilling"), ["new", "complete"].includes(service));
    for (const key of ["pump", "pump-labour", "cable", "pipe", "panel", "electrical", "transport"]) assert.ok(q.breakdown.some((x) => x.key === key));
  }
});
test("unknown depth applies configurable range; unknown HP never picks one", () => {
  const q = calculateQuote(make({ depth: null, pump: { ...initialInput.pump, required: "yes", hp: "Not Sure" } }));
  const line = q.breakdown.find((x) => x.key === "drilling")!;
  assert.equal(line.min, 30000); assert.equal(line.max, 111500); assert.equal(q.breakdown.find((x) => x.key === "pump")?.min, null);
});
test("no casing removes casing; selected extras counted once", () => {
  const q = calculateQuote(make({ casing: { ...initialInput.casing, required: "no" }, additionalServices: ["cleaning", "testing", "flushing", "pump-installation", "pump-installation"] }));
  assert.equal(q.breakdown.some((x) => x.key === "casing"), false);
  for (const key of ["cleaning", "testing", "flushing", "pump-labour"]) assert.equal(q.breakdown.filter((x) => x.key === key).length, 1);
});
test("existing pump supplied by customer still has installation but no pump supply", () => {
  const q = calculateQuote(make({ service: "pump", casing: { ...initialInput.casing, required: "no" }, pump: { ...initialInput.pump, required: "no" } }));
  assert.equal(q.breakdown.some((x) => x.key === "pump" || x.key === "drilling"), false);
  assert.ok(q.breakdown.some((x) => x.key === "pump-labour"));
});
test("complete configured fixture computes rounded range and tax, deterministically", () => {
  const p: Pricing = structuredClone(quotePricing);
  // TEST FIXTURES ONLY. These are not business rates.
  p.access.open = 1000; p.mobilization.bangalore = 2000; p.setup = 1000; p.taxPercent = 18;
  const i = make({ casing: { ...initialInput.casing, required: "no" } });
  const q = calculateQuote(i, p);
  assert.equal(q.subtotalMin, 58000); assert.equal(q.estimatedMin, 61000); assert.equal(q.estimatedMax, 76000);
  assert.deepEqual(q, calculateQuote(i, p)); assert.equal(quotePricing.taxPercent, null);
});
test("mobile normalization rejects invalid Indian numbers and repeated digits", () => {
  for (const s of ["9844775905", "+91 98447 75905", "00919844775905", "09844775905"]) assert.equal(normalizeMobile(s), "+919844775905");
  for (const s of ["123", "1234567890", "9999999999", "abcd9844775905", "+19844775905"]) assert.equal(normalizeMobile(s), null);
  assert.equal(customerSchema.safeParse({ name: "Raj", mobile: "123", email: "", consent: true }).success, false);
});
test("reject impossible depth/casing and accept 2000 ft", () => {
  assert.equal(quoteInputSchema.safeParse(make({ depth: 2000 })).success, true);
  assert.equal(quoteInputSchema.safeParse(make({ depth: 2001 })).success, false);
  assert.equal(quoteInputSchema.safeParse(make({ depth: 300, casing: { ...initialInput.casing, required: "yes", depth: 400 } })).success, false);
});
