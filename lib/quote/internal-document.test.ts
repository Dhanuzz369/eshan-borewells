import test from "node:test";
import assert from "node:assert/strict";
import { buildQuotationData } from "./document";
import { calculateQuote } from "./calculate";
import { initialInput } from "./schema";
import { buildInternalDocument } from "./internal-document";

const input = { ...initialInput, locality: "Rajajinagar", depth: 850 };
const quote = buildQuotationData({ input, quote: calculateQuote(input), quoteNumber: "unused", capturedAt: "2026-10-21T06:30:00Z", customer: { name: "Customer", mobile: "9844775905" } });
test("invoice shows approved line amounts and preserves blank manual payment fields", () => {
  const document = buildInternalDocument(quote, "invoice", { date: "", advance: "", balance: "" });
  assert.equal(document.title, "Invoice");
  assert.deepEqual(document.drillingRows[0], ["0 - 250 ft", "₹95/ft", "₹23,750"]);
  assert.equal(document.total, "₹1,40,750");
  assert.deepEqual(document.payments, [["Advance received", ""], ["Balance due", ""]]);
  assert.equal(document.date, "");
});
test("manual invoice date and payment values are preserved without calculating or assuming payment", () => {
  const document = buildInternalDocument(quote, "invoice", { date: "2026-10-21", advance: "50000", balance: "90750" });
  assert.deepEqual(document.payments, [["Advance received", "₹50,000"], ["Balance due", "₹90,750"]]);
  assert.equal(document.date, "21 Oct 2026");
  assert.throws(() => buildInternalDocument(quote, "invoice", { date: "", advance: "-1", balance: "" }));
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
