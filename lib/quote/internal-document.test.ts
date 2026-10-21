import test from "node:test";
import assert from "node:assert/strict";
import { buildQuotationData } from "./document";
import { calculateQuote } from "./calculate";
import { initialInput } from "./schema";
import { buildInternalDocument } from "./internal-document";

const input = { ...initialInput, locality: "Rajajinagar", depth: 850 };
const quote = buildQuotationData({ input, quote: calculateQuote(input), quoteNumber: "unused", capturedAt: "2026-10-21T06:30:00Z", customer: { name: "Customer", mobile: "9844775905" } });
test("invoice shows approved amounts and calculates the full balance when no advance is entered", () => {
  const document = buildInternalDocument(quote, "invoice", { date: "", advance: "", balance: "" });
  assert.equal(document.title, "Invoice");
  assert.deepEqual(document.drillingRows[0], ["0 - 250 ft", "₹95/ft", "₹23,750"]);
  assert.equal(document.total, "₹1,40,750");
  assert.deepEqual(document.payments, [["Advance received", ""], ["Balance due", "₹1,40,750"]]);
  assert.equal(document.date, "");
});
test("invoice balance is derived from advance and ignores any old manually entered balance", () => {
  const document = buildInternalDocument(quote, "invoice", { date: "2026-10-21", advance: "50000", balance: "1" });
  assert.deepEqual(document.payments, [["Advance received", "₹50,000"], ["Balance due", "₹90,750"]]);
  assert.equal(document.date, "21 Oct 2026");
  assert.throws(() => buildInternalDocument(quote, "invoice", { date: "", advance: "-1", balance: "" }));
});

test("invoice has blank yield fields and no terms, while estimate retains terms", () => {
  const document = buildInternalDocument(quote, "invoice", { date: "", advance: "", balance: "" });
  assert.deepEqual(document.terms, []);
  assert.deepEqual(document.yieldReport.map((field) => field[0]), ["Rig Name", "Water Yield", "Water Layer at: 1)", "Water Layer at: 2)", "Water Layer at: 3)", "Remarks", "Boulders / Silt", "Suitable Pumps: Compressor / Submersible"]);
  assert.ok(document.yieldReport.every((field) => field[1] === ""));
  const estimate = buildInternalDocument(quote, "estimate", { date: "", advance: "", balance: "" });
  assert.ok(estimate.terms.length > 0);
  assert.deepEqual(estimate.yieldReport, []);
});

test("balance includes materials, supports full payment and rejects advances above the total", () => {
  const fields = { date: "", advance: "50000", materials: { 'Water Injection': "12.5" } };
  const document = buildInternalDocument(quote, "invoice", fields);
  assert.deepEqual(document.payments[1], ["Balance due", "₹90,937.5"]);
  const paid = buildInternalDocument(quote, "invoice", { date: "", advance: "140750" });
  assert.deepEqual(paid.payments[1], ["Balance due", "₹0"]);
  assert.throws(() => buildInternalDocument(quote, "invoice", { date: "", advance: "140750.01" }));
});
test("estimate retains depth slabs and rates but has no amounts, subtotals, totals or payments", () => {
  const document = buildInternalDocument(quote, "estimate", { date: "", advance: "50000", balance: "90750" });
  assert.deepEqual(document.drillingHeaders, ["Depth range", "Rate"]);
  assert.deepEqual(document.drillingRows[0], ["0 - 250 ft", "₹95/ft"]);
  assert.equal(document.total, null);
  assert.equal(document.drillingSubtotal, null);
  assert.equal(document.fixedSubtotal, null);
  assert.deepEqual(document.payments, []);
});

test("invoice multiplies selected material quantities and adds them once to the grand total", () => {
  const document = buildInternalDocument(quote, "invoice", { date: "", advance: "", balance: "", materials: { 'M.S Casing Pipe Regular': "12.5", 'M.S. Welding': "2", 'Water Injection': "25" } });
  assert.deepEqual(document.materialHeaders, ["Material", "Rate", "Quantity", "Amount"]);
  assert.deepEqual(document.materialRows[0], ['M.S Casing Pipe Regular', '₹545/ft', '12.5 ft', '₹6,812.5']);
  assert.equal(document.materialSubtotal, "₹7,687.5");
  assert.equal(document.total, "₹1,48,437.5");
  assert.equal(document.materialRows[1][2], "");
  assert.equal(document.materialRows[1][3], "");
  const estimate = buildInternalDocument(quote, "estimate", { date: "", advance: "", balance: "", materials: { 'M.S. Welding': "2" } });
  assert.deepEqual(estimate.materialHeaders, ["Material", "Rate"]);
  assert.equal(estimate.materialSubtotal, null);
  assert.equal(estimate.total, null);
});

test("material quantities reject negatives, excessive precision and fractional per-piece counts", () => {
  for (const [label, value] of [['Water Injection', '-1'], ['Water Injection', '0.001'], ['M.S. Welding', '1.5'], ['Water Injection', 'NaN']]) {
    assert.throws(() => buildInternalDocument(quote, "invoice", { date: "", advance: "", balance: "", materials: { [label]: value } }));
  }
});

test("Robo Rig material quantities use its own unchanged rate card", () => {
  const roboInput = { ...input, machine: "Robo Rig" as const };
  const roboQuote = buildQuotationData({ input: roboInput, quote: calculateQuote(roboInput), quoteNumber: "", capturedAt: "2026-10-21T06:30:00Z", customer: { name: "Customer", mobile: "9844775905" } });
  const document = buildInternalDocument(roboQuote, "invoice", { date: "", advance: "", balance: "", materials: { '10" PVC Casing Pipe': "3" } });
  assert.equal(document.materialRows[0][1], "₹460/ft");
  assert.equal(document.materialSubtotal, "₹1,380");
  assert.equal(document.total, "₹2,39,880");
});

test("edited material rates affect invoice amounts and balance and appear as rates only in estimates", () => {
  const original = structuredClone(quote.variableMaterials);
  const fields = { date: "", advance: "50000", materials: { 'Water Injection': "12.5" }, materialRates: { 'Water Injection': "20.50" } };
  const document = buildInternalDocument(quote, "invoice", fields);
  assert.deepEqual(document.materialRows.at(-1), ["Water Injection", "₹20.5/ft", "12.5 ft", "₹256.25"]);
  assert.equal(document.total, "₹1,41,006.25");
  assert.deepEqual(document.payments[1], ["Balance due", "₹91,006.25"]);
  const estimate = buildInternalDocument(quote, "estimate", fields);
  assert.deepEqual(estimate.materialRows.at(-1), ["Water Injection", "₹20.5/ft"]);
  assert.equal(estimate.total, null);
  assert.deepEqual(quote.variableMaterials, original);
  for (const rate of ["-1", "NaN", "0.001", "1000001"]) assert.throws(() => buildInternalDocument(quote, "estimate", { ...fields, materialRates: { 'Water Injection': rate } }));
  assert.equal(buildInternalDocument(quote, "invoice", { ...fields, materialRates: { 'Water Injection': "" } }).materialRows.at(-1)?.[1], "₹15/ft");
});

test("estimate has five terms with the drilling-condition warning last", () => {
  const estimate = buildInternalDocument(quote, "estimate", { date: "", advance: "" });
  assert.equal(estimate.terms.length, 5);
  assert.match(estimate.terms[0], /Booking amount of Rs 10,000\/- on booking and 70,000\/- must be paid before drilling/);
  assert.equal(estimate.terms[1], "Balance amount has to be settled immediately after work completion on the spot.");
  assert.match(estimate.terms[2], /GST at 18%/);
  assert.equal(estimate.terms[3], "Drilling hours are 6 am to 9 pm. If the vehicle is kept idle, ₹4,000 per hour will be charged.");
  assert.ok(!estimate.terms.some((term) => term.includes("15-minute")));
  assert.ok(!estimate.terms[0].includes("boulders"));
  assert.equal(estimate.terms[4], "If more than 2.5 inches of water, boulders, silt or a dry gap are found, further drilling is not possible.");
});

test("both document types use renamed materials without changing the approved rates", () => {
  for (const mode of ["invoice", "estimate"] as const) {
    const document = buildInternalDocument(quote, mode, { date: "", advance: "" });
    assert.deepEqual(document.materialRows[0].slice(0,2), ["M.S Casing Pipe Regular", "₹545/ft"]);
    assert.deepEqual(document.materialRows[1].slice(0,2), ["M.S Casing Pipe Heavy", "₹595/ft"]);
    assert.deepEqual(document.materialRows[7].slice(0,2), ['PVC Filter Pipe (4 ½" or 5") 6KG Pressure ISI Brand', "₹135/ft"]);
  }
});
