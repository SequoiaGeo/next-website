# Website Conversion Sink Inventory

Prepared: 2026-08-15

Status: local, unpublished hardening on `codex/measurement-release-20260815`

## Lead conversion sinks

All accepted form conversions now pass through `trackCapturedLead` in `src/lib/analytics.ts`. That single guarded entry point can emit:

- GA4 and Google Ads `generate_lead` through `gtag`.
- OpenAI Ads `lead_created` through `oaiq`.
- GA4 `form_success` with the same lead ID and source.

The Meta pixel in `src/app/layout.tsx` emits `PageView` only. No Meta lead event, thank-you-page conversion, redirect conversion, or separate client-side lead emitter was found in the local source inventory. This is a local source finding, not proof about unpublished tag-manager or advertising-account configuration.

Phone taps and booking or intake CTA clicks remain intent events, not captured leads. They do not call `generate_lead` or `lead_created`.

## Capture clients

The inventory test requires all eight capture clients to use the guarded entry point:

| Client | Endpoint | Source |
|---|---|---|
| Inline service and audit form | `/api/contact` | Page-specific source |
| Contact page form | `/api/contact` | `contact_form` |
| ChatGPT landing form | `/api/contact` | `chatgpt_lp_form` |
| Immanuel landing form | `/api/contact` | `immanuel_lp_form` |
| AI SEO guide form | `/api/guide-capture` | `ai_seo_guide` |
| LSA guide form | `/api/guide-capture` | `lsa_guide` |
| CSR calculator capture | `/api/calculator-lead` | `csr_calculator` |
| Marketing leak calculator capture | `/api/calculator-lead` | `marketing_leak_calculator` |

## Accepted response contract

A lead conversion can fire only when the server response contains all four exact values:

- `success: true`
- `captured: true`
- A nonempty string `leadId`
- `isSyntheticTest: false`

Missing, null, string-coerced, delayed, malformed, or synthetic classifications fail closed. The form can still show the success state after an HTTP success, but it does not emit a lead conversion without the complete server contract. An accepted but malformed response emits the non-conversion event `form_response_untrackable_capture` for monitoring.

Every event emitted by the guarded dispatcher includes `measurement_contract: accepted-v2`. Register `measurement_contract` as an event-scoped GA4 custom dimension before the bake begins. Bake reporting excludes unmarked events, and the cached-client skew window closes only after unmarked `form_success` events remain at zero for 48 hours.

Honeypot drops retain the existing bare `{ success: true }` response so the server does not disclose the filter decision. Because the accepted fields are absent, the shared client policy suppresses conversion tracking.

## Synthetic classification

All three capture endpoints use the same reserved-value classifier. A synthetic record requires the internal-attribution QA name prefix and an `example.com` email. When a phone is present, it must also use the reserved `555-010x` pattern.

Synthetic CRM payloads use `internal-attribution-test`, omit the normal lead source, and do not receive normal website-lead tags. Contact-form synthetic notifications continue through the reconciliation queue and receive the synthetic-test checkpoint label.

## Measurement changes at release

- Bot drops and synthetic submissions stop inflating lead conversions across all eight capture clients.
- Calculator model outputs are no longer passed as conversion values. They are estimates, not verified lead or job value.
- Sitewide phone and CTA intent coverage expands separately from captured-lead tracking.
- `form_response_missing_lead_id` is retired. Accepted but malformed server responses now use `form_response_untrackable_capture` from the guarded entry point.

Record the deployment timestamp in the measurement log. Do not compare raw `generate_lead`, `form_success`, `phone_click`, or `cta_click` counts across that boundary without holding the event definition constant. Gmail-to-HighLevel reconciliation and terminal qualified-lead tags remain the authoritative business-outcome ledger.

Google Ads and OpenAI Ads counters cannot be filtered by the GA4 event marker. Exclude those platform counters from bake analysis and use them only as secondary delivery diagnostics.

## Verification and remaining limits

- The fourteen-case policy suite exercises reserved synthetic values, explicit real acceptance, synthetic rejection, missing and malformed fields, empty lead IDs, the alert branch, the legacy-response rollback behavior, browser-session lead-ID deduplication, all three API contracts, all eight clients, the single-emitter invariant, the direct-sink inventory, internal-record requirements, and exact phone or booking intent matching.
- After a production build, `test:api-compat` executes the three compiled API handlers with their legacy request shapes while stubbing external delivery. Each endpoint must return the full accepted response contract and make both an internal email attempt and a CRM webhook attempt. The fixture contains no new request fields.
- The guide and calculator endpoints report `captured: true` only after Aaron's notification or the CRM webhook succeeds. Subscriber delivery alone does not qualify as an internally recorded capture.
- The analytics adapter claims each accepted lead ID once per browser session. A duplicate dispatch of the same accepted response emits no second conversion or `form_success` event.
- A non-networked runtime fixture injects counting emitters into the shared dispatcher. The exact accepted response emits one conversion and one `form_success`; 15 malformed or synthetic variants emit zero conversions and zero `form_success` events; an accepted but malformed response emits the monitoring alert only.
- The signed-in Sequoia GEO Tag Manager container was inspected on August 15. Its published version is an empty container with zero tags, zero triggers, and zero variables. The local source does not load a GTM container. Therefore, no Tag Manager conversion rule exists to bypass the guarded first-party path at this release point.
- The release has no service worker. An old client already open before deployment can call the new API. Old clients still record a valid real response, but some old clients do not honor the synthetic classification. Do not run QA from a tab opened before deployment. A new client receiving an old API response fails closed because the old response lacks `captured: true`; the contact is still captured, but the conversion event can be temporarily suppressed until the tab and edge state are current.
- A final candidate DOM replay returned the success UI and a full server lead ID in the notification. The CRM record matched the reserved test email and ended in the required exclusion state, with the reconciliation labels present and no conversations, opportunities, or tasks.
- The local OpenAI pixel debug log showed no post-submit lead event during the synthetic replay. This is supporting evidence, not an advertising-account export.
- Live GA4, Google Ads, OpenAI Ads, and offline-import results remain post-release checks. Do not treat the local source inventory or local replay as proof that an advertising account has no separate import rule.
- The first verified real production form after release must show one accepted notification, a matching CRM record and source after reconciliation, and the expected account-side conversion events. A missing classification or source holds the release or triggers rollback.
