# Agent-readiness: https://www.eshanborewells.com (checked 2026-10-27)

Lighthouse Agentic Browsing: unavailable (PSI HTTP 429 daily quota, mobile and desktop). Needs a Google API key; rerun later.
Agent-UX heuristic: 100/100 (complete). Separate from Lighthouse. Overall agent-readiness (judgement): 85/100.

## Evidence
- Server-rendered: 2525 words without JS, no JS shell. Real 404s (no soft-404).
- a11y tree: 1407 nodes, 47 interactive, 0 unnamed interactive; 3 buttons, 43 anchors, no div-onclick widgets.
- Lead form (footer): labelled inputs (Name, Phone number, Site location), autocomplete attrs, honeypot hidden with aria-hidden. 4 inputs lack aria attrs but have wrapping labels (fine).
- robots.txt: 200, single `User-agent: *` / `Allow: /` + sitemap. No Content-Signal.
- llms.txt: 200, 4798 bytes, passes Lighthouse rules. llms-full.txt 404 (optional).
- Markdown: none (Accept negotiation returns HTML, /index.md 404, no alternate link).
- /.well-known: api-catalog, oauth, ai-catalog.json, agent-card, ucp all 404 (not applicable).
- WebMCP: 0 registerTool, form not annotated.

## Findings
- P1 (low effort): No Content-Signal / no per-purpose AI policy. Fix: add e.g. `Content-Signal: search=yes, ai-input=yes, ai-train=no` under `User-agent: *` if a stance is wanted. Draft/preference only; Google does not act on it (checked 2026-09-23).
- P2 (confirm): Quote form is a client-side Next.js form with noValidate; verify an agent can submit it and that the honeypot "website" field does not trip on agents (aria-hidden, tabindex -1 is correct). Add a visible success/error message with role=status. Also offer tel:/WhatsApp links near the form as an agent-friendly fallback.
- P3 opportunity: WebMCP declarative annotation (toolname/tooldescription) on the lead form. Draft W3C CG spec, Chrome origin trial M149-M156 (checked 2026-09-23); no confirmed consumer agent use. Not a defect; skip unless experimenting.
- P3 opportunity: Markdown delivery, llms-full.txt, ai-catalog.json. Not needed for a local business.

## Access policy
- Training: allowed (no restriction; falls through to *)
- Search: allowed
- User-triggered agents: allowed (Claude-User honours robots; Perplexity-User and Google-Agent generally ignore it)

## Standards notes (vendor-matrix checked 2026-09-23)
WebMCP, Content-Signal, ai-catalog.json (ARD), Web Bot Auth are drafts/proposals. No ranking, citation or traffic effects promised.
