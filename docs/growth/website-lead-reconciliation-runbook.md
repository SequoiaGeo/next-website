# Sequoia GEO Website Lead Reconciliation Runbook

Prepared: 2026-08-15

Status: active temporary control. Production test matrix passed August 15, 2026

## Purpose

Keep website lead attribution and qualification auditable while the native HighLevel workflow cannot create or populate the required custom fields.

This is a temporary control. It does not replace the native workflow repair.

## Systems of record

| Record | System of record |
|---|---|
| Accepted form submission and full lead ID | Gmail notification archive from `Sequoia GEO Site` |
| Website source, campaign tuple, landing path, and AI source | Gmail notification body |
| Contact identity and first website source | HighLevel contact |
| Qualification decision | HighLevel contact tag |
| Reconciliation checkpoint | Gmail label `Sequoia/Lead Reconciled` |

The Gmail notification is the submission-level archive and processing queue. Gmail labels are mutable checkpoints, not an append-only database. The HighLevel contact can represent a person or business across multiple submissions, so it must not be treated as a submission ledger.

## Gmail labels

- `Sequoia/Website Leads`: every real or server-classified test message with the subject pattern `New website lead` from the site notification sender. This is a mixed processing queue, never a lead-count metric.
- `Sequoia/Lead Reconciled`: applied only after every required HighLevel write succeeds, or after a server-marked synthetic test is verified and excluded.
- `Sequoia/Synthetic Tests`: applied to every verified synthetic notification at reconciliation so QA records can be audited without weakening the completeness of the processing queue.

Never mark a real lead email reconciled before the contact exists, the stale tag is removed, and the required low-cardinality tags are present.

## Controlled vocabulary

### Website sources

The reconciler accepts only the same source values that the contact API allows:

- `contact_form`
- `homepage_top`
- `audit_page`
- `hvac_seo_page`
- `plumbing_seo_page`
- `roofing_seo_page`
- `hvac_marketing_page`
- `best_plumbing_agencies_midlist`
- `how_much_does_seo_cost_for_contractors`
- `how_much_should_plumbers_spend_on_marketing`
- `how_much_should_hvac_companies_spend_on_marketing`
- `how_much_do_hvac_plumbing_leads_cost`
- `lsa_statistics_page`
- `hvac_statistics_page`
- `plumbing_statistics_page`
- `google_lsa_changes_2026`
- `chatgpt_lp_form`
- `immanuel_lp_form`

### Current public-surface campaign

| Field | Accepted value |
|---|---|
| UTM source | `facebook` or `linkedin` |
| UTM medium | `organic_social` |
| UTM campaign | `public_surface_audit_august` |
| UTM content | `first_comment` |
| Landing path | `/audit` |

### Current tracking-question outreach campaign

| Field | Accepted value |
|---|---|
| UTM source | `direct_outreach` |
| UTM medium | `phone` |
| UTM campaign | `tracking_question_outreach_august` |
| UTM content | `tracking_question` |
| Landing path | `/audit` |

This tuple is separate from the social public-surface campaign. Add `campaign-tracking-question-outreach-august` and `channel-direct-outreach` only when the full tuple passes validation. The caller-created prospect contact is not a website lead. A later accepted `/audit` form is the website lead and remains `needs-qualification` until Aaron records a terminal qualification tag.

### Current warm-pipeline follow-up campaign

| Field | Accepted value |
|---|---|
| UTM source | `direct_outreach` |
| UTM medium | `phone` |
| UTM campaign | `warm_pipeline_followup_august` |
| UTM content | `promised_followup` |
| Landing path | `/audit` |

This tuple keeps Aaron's already-open conversations separate from Jose's cold batch. Add `campaign-warm-pipeline-followup-august` and `channel-direct-outreach` only when the full tuple passes validation.

### AI source

Accepted AI engines are `chatgpt`, `google_aio`, `gemini`, `perplexity`, `claude`, `copilot`, and `you`.

Anything outside the applicable vocabulary receives one `attribution-unclassified` tag. Do not convert the unknown value into a new HighLevel tag. Preserve the original value only in the Gmail ledger for manual review.

## Reconciliation procedure

Run at 7:30 AM and 4:30 PM Pacific.

The active Codex heartbeat `Operate Sequoia lead and SEO system` runs the reconciliation at both times. The Thursday morning cycle also runs the Grok X SEO scout. The Monday, August 17 morning cycle prepares the personal LinkedIn post and first comment before the planned 8:00 AM launch. The direct notification email to Aaron remains an out-of-band alert if the reconciler is delayed, and the weekly scorecard compares all notification messages with the reconciliation label.

1. Search Gmail at the message level for `label:Sequoia/Website Leads -label:Sequoia/Lead Reconciled newer_than:14d`. Do not treat a reply or another message in the same thread as a lead notification.
2. Read the text part of each candidate email and parse the record type, full lead ID, contact identity, website source, campaign tuple, landing path, AI source, and timestamp.
3. If the subject begins `[TEST]` and the body says `Record type Internal attribution test`, verify that the reserved QA values also match the test pattern: an internal-attribution QA name, an `example.com` address, and a `555-010x` number. If the server classification and reserved values disagree, stop and alert. For a verified synthetic record, leave the HighLevel source empty, retain only `internal-attribution-test`, remove `lsa-guide`, verify zero conversations, opportunities, and tasks, apply `Sequoia/Synthetic Tests` plus `Sequoia/Lead Reconciled`, then stop. Do not add real-lead tags or qualification status.
4. For a real notification, validate every source, campaign, and AI value against the controlled vocabulary before creating tags.
5. Find the HighLevel contact by exact email. If it is missing, upsert it from the notification data and add `reconciler-created`.
6. If the HighLevel standard source field is empty or equals the known stale value `lsa-guide`, set it to the validated website source. Never overwrite another nonempty source.
7. Add `website-lead`, `contact-form`, and `website-source-<source>`. Add `needs-qualification` only when neither `qualified-website-lead` nor `disqualified-website-lead` is already present.
8. For the registered social campaign, add `campaign-public-surface-audit-august` and either `channel-facebook` or `channel-linkedin` only when the full tuple passes validation. For the registered tracking-question campaign, add `campaign-tracking-question-outreach-august` and `channel-direct-outreach`. For the registered warm-pipeline campaign, add `campaign-warm-pipeline-followup-august` and `channel-direct-outreach`. Do not reuse one campaign's tags for another tuple.
9. Add `ai-source-<engine>` only for an allowlisted AI engine.
10. Remove `lsa-guide` from the contact.
11. Do not create an opportunity, send an email or SMS, or change assignment.
12. Apply `Sequoia/Lead Reconciled` to the Gmail message only after every required write succeeds. On any failure, leave it unreconciled for retry and report the error without exposing the prospect's contact details.

Tag addition, tag removal, source-if-empty-or-stale, terminal-qualification protection, contact upsert, and the Gmail checkpoint make the process safe to retry. Do not add a unique lead-ID tag. Full lead IDs remain in Gmail to avoid permanent tag-cardinality growth.

## Qualification procedure

Every reconciled real inquiry begins with `needs-qualification`.

After the first substantive review or conversation:

- Add `qualified-website-lead` when the inquiry satisfies the four rules in `docs/growth/three-qualified-leads-weekly.md`.
- Add `disqualified-website-lead` when it does not.
- Remove `needs-qualification` after either decision.

The weekly scorecard counts distinct prospect companies with `qualified-website-lead`, checked against the Gmail submission archive. This follows the pre-registered rule in `docs/growth/three-qualified-leads-weekly.md`: repeated submissions are deduplicated by email, phone, company, and opportunity context. The tag is the recorded qualification act. A form submission, phone click, calendar click, or unanswered call is not a qualified lead.

## Monitoring

- Register `measurement_contract` as an event-scoped GA4 custom dimension before the seven-day bake. Count only `accepted-v2` events in bake analysis. Monitor unmarked `form_success` events after deployment and close the cached-client skew window only after they remain at zero for 48 hours.
- A separate daily audit searches all lead notification messages from the last 14 days and compares them with the reconciled label. Alert when a real website lead email remains unreconciled for more than 24 hours.
- Alert when a reconciled contact still has `lsa-guide`.
- Alert when a reconciled real contact lacks both `qualified-website-lead` and `disqualified-website-lead` after seven days.
- Alert when a HighLevel website-lead contact has no matching notification in the Gmail archive. A CRM webhook may succeed even when the notification channel fails.
- Alert when the same email, phone, and source produce different lead IDs within ten minutes. The browser suppresses duplicate dispatch of one accepted lead ID, but a user retry after an unknown network outcome can create a second internal record.
- Alert when a `[TEST]` notification lacks `Sequoia/Synthetic Tests`, or when its server classification disagrees with the reserved QA values.
- Report zero candidates as a normal run, not a failure.

## Launch test matrix

Use synthetic `example.com` addresses and the reserved `555-010` phone range.

1. [x] Tag-mutation side-effect test. On August 15, the existing synthetic native-created contact received `lsa-guide`, then the exact proposed reconciliation tag set, then had `lsa-guide` removed. Repeated checks found zero conversations, opportunities, or tasks, with no source or assignment change. The reconciliation tags were removed after the test, leaving only the internal test tag.
2. [x] Fresh tagged audit submission. Production returned a `[TEST]` subject, a full lead ID and registered Facebook tuple in Gmail, one HighLevel contact, no conversation or opportunity, the internal test tag, and no stale tag after reconciliation.
3. [x] Same synthetic contact, different registered campaign content. Production created two separate Gmail messages with different lead IDs and Facebook versus LinkedIn tuples while HighLevel retained one contact. The resubmission re-added `lsa-guide`, and reconciliation removed it again without changing contact identity.
4. [x] Fresh untagged submission. Production recorded no campaign or AI tuple in Gmail, created one HighLevel contact, and retained only the internal test tag after reconciliation.
5. [x] Retry test. CRM writes were completed while one Gmail message was deliberately left unreconciled. A second pass produced no duplicate tags and did not add `needs-qualification` after `qualified-website-lead` was present. The synthetic tags were removed after the test.
6. [x] Vocabulary test. `scripts/lead-reconciliation-policy.test.mjs` verifies that an unregistered campaign and AI value produce one `attribution-unclassified` tag and no tag containing a raw value. All nine policy tests passed.
7. [x] Caller-created contact test. A synthetic direct-outreach contact was created on August 15 with source `tracking_question_outreach_august` and the registered campaign and channel tags. After the workflow window it retained the intended source and tags, stayed unassigned, and had zero conversations, opportunities, or tasks. The contact remains marked `internal-attribution-test` and is excluded from reporting.
8. [x] Mobile conversion-path test. At a 390-by-844 viewport, `/plumbing-seo` displayed the booking CTA, routed to `/contact#book`, and rendered the Google booking calendar with available dates. The tagged `/audit` form accepted a synthetic mobile submission, showed its success state, and delivered a `[TEST]` notification with a full lead ID plus the exact `direct_outreach / phone / tracking_question_outreach_august / tracking_question` tuple. HighLevel reused the existing internal test contact, the stale `lsa-guide` tag was removed, and verification found zero conversations, opportunities, or tasks. The Gmail message was added to both reconciliation labels.

After the direct-outreach tuples were registered, the deterministic policy suite increased from six to nine passing cases. The new cases accept the exact cold and warm tuples, keep their campaign tags separate, and reject the direct-outreach source and medium when incorrectly paired with the social campaign name.

Run the reconciler twice against the form-submission cases. The second pass must make no additional contact and no tag changes. Keep every synthetic record excluded from the scorecard.

## Known limitations

- HighLevel contact notes and custom fields are unavailable through the current integration scope.
- Multiple submissions from one contact remain distinct only in Gmail.
- The same person using different email addresses can create separate contacts.
- The process depends on the recurring runner and Gmail availability.
- Calendar bookings and website calls still require separate reconciliation.

The temporary launch gate passed on August 15. Five synthetic notification messages were present in both Gmail labels, with zero unreconciled messages, and every synthetic HighLevel contact was excluded from reporting. Native HighLevel fields and per-submission notes remain the permanent repair target.
