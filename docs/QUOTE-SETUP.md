# V2 quote setup

The `/get-quote` feature is additive. The existing `/api/leads` footer/popup integration is unchanged. Do not deploy with invented rates. The owner-approved Sensor Rig rates are in `lib/quote/config.ts`; the other charges and tax are deliberately `null` until supplied.

## Architecture

The customer flow has two steps: (1) all site/service requirements together, with conditional drilling, casing and pump fields; (2) contact details and consent. The generated result includes a Download Quote PDF action. Going back retains the requirements. No ten-step navigation is used.

Browser → POST `/api/quotes` → validate/normalize → calculate server-side → Google Apps Script → append Google Sheet row. When Redis is configured, the lead is additionally retained first for retry-safe delivery and quote ID allocation.

The pure calculator is `lib/quote/calculate.ts`. The browser shows a preview but cannot submit a price: the server recalculates from the trusted configuration. Pumps do not trigger new drilling charges. Partial depth slabs are charged progressively. Machine recommendations are provisional. No guessed pump HP is assigned.

## 1. Google Sheet

Use the configured Apps Script web app with these columns: `Date | Name | Mobile Number | Location | Machine Type | Estimated Depth | Quote | Status`. The website sends only `name`, `mobile`, `location`, `machineType`, `estimatedDepth`, and `quote`; the script owns the date and `New` status values.

## 2. Apps Script

The approved `/exec` URL is built into the quote delivery server route. Google Apps Script responses may redirect to `script.googleusercontent.com`; the server follows that redirect. The endpoint is called only from the website server, never from browser JavaScript.

## 3. Durable capture and IDs

Create a persistent Upstash Redis database with TLS, backups and an appropriate retention policy. Configure its REST URL and token on the hosting server. This is required for reliable capture during Google outages and for atomic sequential IDs such as `EB-2026-000001`. Sequence keys must not be deleted or reset. Use separate databases for staging and production. Restoring a database must preserve or advance its sequence beyond all IDs already in Sheets.

Server-only environment variables:

```
QUOTE_REDIS_REST_URL=https://YOUR-DATABASE.upstash.io
QUOTE_REDIS_REST_TOKEN=PRIVATE_TOKEN
QUOTE_RETRY_SECRET=PRIVATE_SCHEDULER_SECRET
```

Do not prefix secrets with `NEXT_PUBLIC_`. Put real values only in the hosting environment or a gitignored `.env.local`. `.env.example` contains empty placeholders. Rebuild/redeploy through the existing GitHub pipeline after environment changes. The assistant does not change Vercel settings without separate authorization.

Captured records expire after 90 days; the Google Sheet is the long-term source of truth. Monitor the pending queue and recover failures well before expiry. No names, phone numbers or payloads are written to application logs. Logs contain only delivery state/reference. Restrict database and Sheet access to staff who need it.

## 4. Automatic delivery retries

Enable a scheduler to call `GET https://www.eshanborewells.com/api/quotes/retry` every 10 minutes with `Authorization: Bearer <QUOTE_RETRY_SECRET>`. This endpoint is private and processes up to five pending records per call. Schedule more often for higher traffic. Monitor failure responses and `SCARD quote:pending`; alert if the queue grows or records wait over one hour.

The included `.github/workflows/quote-delivery.yml` runs on a schedule only when the repository secret `QUOTE_RETRY_SECRET` is configured. Set this repository secret to the same value as the server, and `QUOTE_SITE_URL` to the production origin if it differs from the default. Enable Actions for this repository. Scheduled Actions may be delayed, so use a monitored external scheduler for a strict delivery SLA.

Each new enquiry creates a new record, even with an existing mobile number. Network retries reuse the browser's random request ID and the existing quote ID. Sheets deduplicates only a replay of that same quote ID. It appends every new quote and optionally labels a returning mobile number. Existing rows are never overwritten.

If Sheets fails, the API returns the quote and says the enquiry is saved pending delivery. If Redis is down, the API returns a friendly retry response and the browser retries twice. An unsent submission is retained in this tab's session storage for up to 24 hours (including reload), then removed on acknowledged capture or Start Again. It is not uploaded anywhere except this site's API. Customers can always send the quote directly through WhatsApp.

With Redis unconfigured, customers can prepare a draft scope and PDF, but see “Your enquiry has not been sent” and must call/WhatsApp. No stored-lead claim is made. A draft reference uses a UUID and is not a finalized sequential quote ID. Do not call the integration live until the checks below pass.

## 5. Test before launch

1. Use a staging Sheet and database, not production customer data. Run `npm run test:quote`, lint and production build.
2. Complete `/get-quote` with a test customer and valid Indian mobile. Check server-normalized `+91` mobile, location, Kolkata date, service, depth, pump data and quote ID in the new row.
3. Submit a second enquiry with the same number: a second row and new quote ID must appear.
4. Replay the first exact request ID: no duplicate row or changed price/customer.
5. Temporarily use an incorrect Sheets secret. Confirm the lead is retained in Redis, the quote result still displays, and no PII is logged. Restore the secret and call the authenticated retry endpoint. Exactly one row should appear.
6. Temporarily disable Redis. Confirm friendly retry state and retained tab draft. Restore it and retry.
7. Test Pump Installation with an existing pump: no new drilling line; labour, cable, pipe and selected accessories remain visible. Unknown HP/depth stays pending assessment.
8. Check Sensor Rig at 850 ft: drilling only ₹124,250. At 1,500 ft: ₹4,70,000. At 2,000 ft: ₹10,52,500. No other charges are included in those exact drilling subtotals.
9. Download and inspect the PDF; open WhatsApp and verify the draft text without sending test messages to the business.
10. Check the existing homepage, mobile menu, footer form, scroll popup, sitemap and service routes.

## 6. Export and credentials

In Google Sheets choose File → Download → Microsoft Excel (.xlsx). The live Google Sheet continues to receive leads; the downloaded workbook is only an export.

Keep the Apps Script web-app deployment restricted to the intended business Sheet and review its access policy regularly. Rotate the Redis token at the provider and update the hosting secret. Rotate the retry secret both on the server and in the scheduler. Do not put tokens in logs, URLs, issue reports or screenshots. To delete a lead on request, remove its Sheet row and corresponding `quote:lead:<requestId>` record and pending-set entry. Never reset the sequence counter.

## Rate changes

Edit the central configuration and increment `version`. `null` means unknown and must not become a zero-price promise. An explicit zero is allowed only for an owner-approved free/included item. Drilling slab limits are cumulative and exclusive of the previous upper limit (300 ft belongs fully to the first slab; foot 301 starts the next). `minimum: null` means no additional minimum configured. Sensor Rig rates apply as supplied; no diameter markup has been invented. Other machines may have diameter-specific tables. Tax and remaining charges need owner approval before a full numerical estimate can appear.

Official references: [Google web apps](https://developers.google.com/apps-script/guides/web), [Google Content Service](https://developers.google.com/apps-script/guides/content), [Upstash REST API](https://upstash.com/docs/redis/features/restapi).
