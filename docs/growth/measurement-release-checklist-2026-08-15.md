# Website Measurement Release Checklist

Prepared: 2026-08-15

Branch: `codex/measurement-release-20260815`

Base: `origin/main` at `ebac031`

Purpose: start the seven-day measurement bake without publishing the scheduled plumbing, GEO, HVAC, or comparison-page treatments.

Independent raw-source review of the final delta is unavailable because the privacy boundary correctly blocked exporting private repository code. Verification therefore relies on the local source audit, recorded empty-diff output, deterministic suites, compiled-handler tests, production build, and the production behavioral gates below.

## Proven before commit

- [x] The release was assembled in a clean worktree based directly on `origin/main`.
- [x] `src/app/plumbing-seo`, `src/app/geo-for-plumbers`, `src/app/hvac-seo`, and `src/app/best-plumbing-marketing-agencies` have no source diff from `origin/main`.
- [x] All eight capture clients call the shared `trackCapturedLead` dispatcher.
- [x] The three lead APIs return the accepted response contract only after an internal notification or CRM record succeeds.
- [x] The dispatcher emits `measurement_contract: accepted-v2` on accepted conversions and malformed-capture monitoring events.
- [x] The runtime fixture proves one accepted response emits one conversion and one `form_success` event.
- [x] Re-dispatching the same accepted lead ID in one browser session emits no duplicate conversion or `form_success` event.
- [x] Fifteen malformed or synthetic variants emit no conversion and no `form_success` event.
- [x] A rollback-shaped legacy response fails closed without blocking the captured lead.
- [x] The compiled API compatibility replay accepts the legacy request shape for contact, guide, and calculator endpoints.
- [x] The compiled API failure replay returns a non-200 response and no capture claim when every internal recording channel fails.
- [x] The compiled API replay uses local stubs and makes no request to Resend or HighLevel.
- [x] The unchanged plumbing page and the AI guide page both completed a local bot-drop replay and showed their success state.
- [x] The local browser replay created no email or CRM record.
- [x] The contact-form success-state booking calendar already exists on `origin/main`; it is not a UI change in this release.
- [x] `test:synthetic-lead`, `test:lead-policy`, `test:public-tracking`, and `test:api-compat` passed.
- [x] ESLint passed.
- [x] The production build compiled, type-checked, and generated 77 routes.

## Required before production deployment

- [ ] Register `measurement_contract` as an event-scoped GA4 custom dimension.
- [ ] Record the deployment commit and timestamp in the measurement log.
- [ ] Confirm the production deployment contains this measurement commit and no scheduled SEO treatment.
- [ ] Open a fresh production browser context and submit one reserved synthetic contact fixture.
- [ ] Submit one reserved synthetic guide fixture.
- [ ] Submit one reserved synthetic calculator fixture.
- [ ] Confirm each notification includes a full lead ID and the internal-test classification.
- [ ] Confirm HighLevel accepts `websiteLeadId`, `isSyntheticTest`, and the internal-test tag without creating a conversation, opportunity, task, or normal lead-source value.
- [ ] Confirm no synthetic fixture emits `generate_lead`, `form_success`, or `lead_created`.
- [ ] Confirm the reconciler labels and excludes all three synthetic fixtures.
- [ ] On the first real production lead, confirm one internal record, one accepted browser conversion, the `accepted-v2` marker in GA4, and the expected account-side delivery diagnostics.

The production synthetic fixtures intentionally pass through the real notification and CRM sinks with `isSyntheticTest: true`. Their browser conversion events remain suppressed. A valid launch check therefore requires both real internal records and zero analytics or advertising conversion events.

## Bake rules

- Bake day one starts only after deployment and custom-dimension registration are both confirmed.
- Count only GA4 events where `measurement_contract` equals `accepted-v2`.
- Exclude Google Ads and OpenAI Ads counters from bake analysis because the marker cannot filter them.
- Close the cached-client skew window only after unmarked `form_success` events remain at zero for 48 hours.
- Continue Gmail-to-HighLevel reconciliation as the complete business-outcome ledger.
- Roll back on a valid form returning a non-200 response, an accepted capture missing contract fields, a synthetic-classification mismatch, or a sustained untrackable-capture rate.
- Do not roll back because lead volume is low.
- A rollback during the bake resets day one because the response and event definitions changed again.
