# Website-first homepage assessment

## Scope

Replace the homepage hero assessment link with a two-step inline form. Remove the hero video. Keep the remaining homepage sections and other intake forms unchanged. Move the existing founder credentials below the form for earlier mobile access to the website field.

1. Visitor enters a public business website and explicitly clicks Continue or presses Enter.
2. Show an editable website field, first name, and email address.
3. Only the final submission posts to the existing contact capture endpoint. A saved website is not an assessment result or a qualified lead.

## Data and delivery

- Before final submission, entered details live only in component state. Nothing is sent to the CRM or notification email from step one.
- Public HTTP(S) websites are validated on client and server. Query strings and fragments are removed. No server fetch or automated scan of the submitted URL is performed.
- The real website field is `businessWebsite`. The existing `website` honeypot remains separate and empty for people.
- Notification message includes the normalized website. The direct CRM evidence note includes `assessment_website`; the legacy webhook receives `businessWebsite` as well.
- Phone is not collected only for the exact `homepage_website_assessment` source. Other contact sources retain existing validation.
- Existing campaign and AI attribution helpers are retained. No website, name, or email is included in custom analytics events.
- The response must explicitly confirm durable capture before a real visitor sees success. Email-only or CRM-only capture is accepted by the existing policy. Failure in both channels preserves the fields for retry.
- No instant report, booked appointment, or delivery deadline is promised.

## Measurement

- `form_start`, source `homepage_website_assessment`: first website input change.
- `assessment_website_continue`: valid first step explicitly continued.
- `form_error`: failed final request.
- Existing guarded `form_success` and `generate_lead`: accepted final request only. Synthetic submissions are excluded by the existing dispatcher.
- Compare final requests against continued first steps to assess abandonment. These counts are not qualified leads. Avoid causal claims from a short before/after comparison with different traffic sources.

## Verification

Lint and production build passed. All 161 repository tests passed, including compiled API tests with outbound services mocked. Desktop 1440px and mobile 390px browser tests passed: invalid input, keyboard continuation, prefill, focus, retry preservation, no premature conversion, one conversion on acceptance, no personal data in custom events, and no horizontal overflow or hero video.

No live synthetic submission, external email, or CRM test record was created. Browser fixtures intercepted the contact endpoint and blocked external requests. Test harness and screenshots are in the parent workspace `tmp/website-assessment-browser.cjs` and `tmp/assessment-*-step*.png`.

Independent review limitation: Claude's local bridge was unavailable earlier in this task context. Grok participation was not run because its required hard spending cap was not verified.

## Release and rollback

Prepared on `codex/website-first-assessment-20260913`, based on verified remote production commit `8981473`. Production is not changed by the local build. Revert this isolated change to restore the prior hero link and video; existing stored submissions remain intact.
