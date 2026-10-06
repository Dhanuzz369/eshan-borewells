// Paste into the Google Sheet's Apps Script project. Set Script Properties:
// SPREADSHEET_ID, SHEET_NAME (e.g. Leads), QUOTE_SECRET (shared server-side secret).
// Deploy as a Web App: Execute as Me; access Anyone. Secret is validated below.
const HEADERS = ['Lead Date', 'Full Name', 'Mobile Number', 'Location', 'Service', 'Property Type', 'Access Type', 'Estimated Depth', 'Pump Required', 'Pump Type', 'Pump HP', 'Estimated Quote', 'Quote Number', 'Lead Source', 'Status', 'Email', 'Quote Details', 'Captured At ISO', 'Returning Lead'];
function doPost(e) {
  const reply = (data) => ContentService.createTextOutput(JSON.stringify(data)).setMimeType(ContentService.MimeType.JSON);
  const props = PropertiesService.getScriptProperties();
  let payload;
  try { payload = JSON.parse(e.postData.contents); } catch (_) { return reply({ ok: false }); }
  if (!props.getProperty('QUOTE_SECRET') || payload.secret !== props.getProperty('QUOTE_SECRET')) return reply({ ok: false });
  const lead = payload.lead;
  if (!lead || !/^EB-\d{4}-\d+$/.test(lead.quoteNumber) || !lead.customer || !/^\+91[6-9]\d{9}$/.test(lead.customer.mobile) || !lead.input || !lead.input.locality || isNaN(Date.parse(lead.capturedAt))) return reply({ ok: false });
  const lock = LockService.getScriptLock();
  if (!lock.tryLock(20000)) return reply({ ok: false });
  try {
    const book = SpreadsheetApp.openById(props.getProperty('SPREADSHEET_ID'));
    book.setSpreadsheetTimeZone('Asia/Kolkata');
    const sheetName = props.getProperty('SHEET_NAME') || 'Leads';
    const sheet = book.getSheetByName(sheetName) || book.insertSheet(sheetName);
    if (!sheet.getLastRow()) { sheet.appendRow(HEADERS); sheet.setFrozenRows(1); }
    if (sheet.getRange(1, 1, 1, HEADERS.length).getValues()[0].join('|') !== HEADERS.join('|')) return reply({ ok: false });
    // Replayed delivery is idempotent by quote ID; a repeat customer with a NEW
    // quote ID always receives a new row. Mobile numbers are never deduped.
    const rows = sheet.getLastRow() > 1 ? sheet.getRange(2, 1, sheet.getLastRow() - 1, HEADERS.length).getValues() : [];
    if (rows.some((row) => row[12] === lead.quoteNumber)) return reply({ ok: true, quoteNumber: lead.quoteNumber });
    const returning = rows.some((row) => String(row[2]).replace(/^'/, '') === lead.customer.mobile);
    // Block spreadsheet formula injection in all customer-controlled text.
    const safe = (value) => { const s = String(value == null ? '' : value); return /^[\s]*[=+@\-]/.test(s) ? "'" + s : s; };
    const input = lead.input;
    const row = [new Date(lead.capturedAt), safe(lead.customer.name), safe(lead.customer.mobile), safe([input.locality, input.city, input.pin].filter(Boolean).join(', ')), safe(payload.serviceLabel), safe(input.property), safe(input.access), input.depth == null ? 'Not sure' : input.depth, safe(input.pump.required), safe(input.pump.type), safe(input.pump.hp), safe(payload.estimatedQuote), lead.quoteNumber, 'Website', 'New', safe(lead.customer.email), safe(JSON.stringify({ input, quote: lead.quote })), lead.capturedAt, returning ? 'Yes' : 'No'];
    const next = sheet.getLastRow() + 1;
    sheet.getRange(next, 3).setNumberFormat('@');
    sheet.getRange(next, 1, 1, HEADERS.length).setValues([row]);
    sheet.getRange(next, 1).setNumberFormat('dd-MMM-yyyy HH:mm');
    SpreadsheetApp.flush();
    return reply({ ok: true, quoteNumber: lead.quoteNumber });
  } catch (_) { return reply({ ok: false }); }
  finally { lock.releaseLock(); }
}
