# Homepage trust and follow-through

Experience label: homepage-trust-20260907. Start the measurement window at the actual production deployment, not the date in this filename. These changes do not yet have measured conversion results.

## Read the stages separately

1. Homepage sessions: page path / in GA4, separated by session source and medium.
2. Snapshot intent: cta_click with cta_contract=intake from the homepage. This is not an inquiry.
3. Assessment form visibility: form_view, source=ai_search_assessment_page.
4. Assessment form starts: form_start with the same source.
5. Accepted inquiries: guarded generate_lead with lead_source=ai_search_assessment_page. Keep synthetic and ineligible captures excluded under the existing policy. Do not treat this as qualification.
6. Qualified leads: reconcile accepted notifications against documented terminal HighLevel decisions using the existing lead reconciliation runbook. Never infer qualification from analytics or an event label.

Use GA4 session-level path exploration for the homepage-to-assessment journey. Raw event totals are not session conversion rates. Some visitors, including blocked or non-consenting sessions, will not be observable. The experience_version event parameter labels new CTA, form, and accepted-inquiry events; historical events remain unchanged. A GA4 custom dimension may need to be registered separately for convenient reporting. No analytics account settings were changed in this release.

Keep Ask Sequoia usage and typed versus suggested questions separate from the lead funnel. Do not send submitted question text to analytics. Existing question recording and consent behavior remain unchanged.

Review after 14 complete days and again after 28. Report numerators, denominators, source mix, and qualified inquiries. Do not declare an uplift from a small sample, concurrent campaign changes, or a before/after comparison without a control. Avoid further discretionary homepage changes during the observation window; repair verified defects as needed.

## Delivery process

The public copy says Aaron confirms the business and expected delivery date, then shares written findings by email. This is a human follow-up commitment, not an automated delivery system. No fixed report turnaround was invented. The existing snapshot confirmation uses the same copy; other forms keep their existing messages. No lead submission was performed during implementation.

## Review limits

Claude's filesystem-access blocker and Grok's unverified hard spending cap remain unresolved. No independent model review is claimed.

## Release verification

Implemented on codex/homepage-trust-followthrough-20260907 from production ef07db2. All 138 repository tests passed; lint and the production build passed. Desktop and 390-pixel mobile sample layouts inspected, mobile navigation expanded and closed, and assessment delivery disclosure opened. The success-state copy is covered by shared-component and source tests, not a live submission. Pricing page, contact API, and knowledge catalog unchanged. No push or production deployment performed. Local preview: http://127.0.0.1:3018/ while the preview process remains running.
