import test from "node:test";
import assert from "node:assert/strict";
import vm from "node:vm";
import fs from "node:fs";
import { initialInput } from "./schema";

test("actual Apps Script appends, deduplicates retries only, neutralizes formulas and records real dates", () => {
  const rows: unknown[][] = [];
  let timeZone = "";
  const sheet = {
    getLastRow: () => rows.length,
    appendRow: (row: unknown[]) => rows.push(row),
    setFrozenRows: () => undefined,
    getRange: (row: number, col: number, count = 1, width = 1) => ({
      getValues: () => rows.slice(row - 1, row - 1 + count).map((r) => r.slice(col - 1, col - 1 + width)),
      setNumberFormat: () => undefined,
      setValues: (values: unknown[][]) => { for (let i = 0; i < values.length; i++) rows[row - 1 + i] = values[i]; },
    }),
  };
  const properties: Record<string, string> = { QUOTE_SECRET: "private-fixture", SPREADSHEET_ID: "fixture", SHEET_NAME: "Leads" };
  const context = vm.createContext({
    ContentService: { MimeType: { JSON: "application/json" }, createTextOutput: (text: string) => ({ setMimeType: () => text }) },
    PropertiesService: { getScriptProperties: () => ({ getProperty: (key: string) => properties[key] }) },
    LockService: { getScriptLock: () => ({ tryLock: () => true, releaseLock: () => undefined }) },
    SpreadsheetApp: { openById: () => ({ setSpreadsheetTimeZone: (zone: string) => { timeZone = zone; }, getSheetByName: () => sheet }), flush: () => undefined },
  });
  vm.runInContext(fs.readFileSync("integrations/google-sheets/Code.gs", "utf8"), context);
  const payload = { secret: "private-fixture", serviceLabel: "New Borewell", estimatedQuote: "To be confirmed", lead: { quoteNumber: "EB-2026-000001", capturedAt: "2026-10-04T12:00:00.000Z", customer: { name: "=SUM(A1)", mobile: "+919844775905", email: "" }, input: { ...initialInput, locality: "Rajajinagar" } } };
  const invoke = (data: unknown) => JSON.parse(context.doPost({ postData: { contents: JSON.stringify(data) } }));
  assert.equal(invoke({ ...payload, secret: "wrong" }).ok, false); assert.equal(rows.length, 0);
  assert.equal(invoke(payload).ok, true); assert.equal(rows.length, 2); assert.equal(timeZone, "Asia/Kolkata");
  assert.equal(rows[1][1], "'=SUM(A1)"); assert.equal(rows[1][2], "'+919844775905");
  assert.equal(Object.prototype.toString.call(rows[1][0]), "[object Date]");
  assert.equal(invoke(payload).ok, true); assert.equal(rows.length, 2);
  assert.equal(invoke({ ...payload, lead: { ...payload.lead, quoteNumber: "EB-2026-000002" } }).ok, true);
  assert.equal(rows.length, 3); assert.equal(rows[2][18], "Yes");
});
