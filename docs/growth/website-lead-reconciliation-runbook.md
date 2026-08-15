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

- `Sequoia/Website Leads`: every message with the subject pattern `New website lead` from the site notification sender.
- `Sequoia/Lead Reconciled`: applied only after every required HighLevel write succeeds, or after a server-marked synthetic test is verified and excluded.

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

### AI source

Accepted AI engines are `chatgpt`, `google_aio`, `gemini`, `perplexity`, `claude`, `copilot`, and `you`.

Anything outside the applicable vocabulary receives one `attribution-unclassified` tag. Do not convert the unknown value into a new HighLevel tag. Preserve the original value only in the Gmail ledger for manual review.

## Reconciliation procedure

Run at 7:30 AM and 4:30 PM Pacific.

The active Codex heartbeat `Operate Sequoia lead and SEO system` runs the reconciliation at both times. The Thursday morning cycle also runs the Grok X SEO scout. The Monday, August 17 morning cycle prepares the personal LinkedIn post and first comment before the planned 8:00 AM launch. The direct notification email to Aaron remains an out-of-band alert if the reconciler is delayed, and the weekly scorecard compares all notification messages with the reconciliation label.

1. Search Gmail at the message level for `label:Sequoia/Website Leads -label:Sequoia/Lead Reconciled newer_than:14d`. Do not treat a reply or another message in the same thread as a lead notification.
2. Read the text part of each candidate email and parse the record type, full lead ID, contact identity, website source, campaign tuple, landing path, AI source, and timestamp.
3. If the subject begins `[TEST]` and the body says `Record type Internal attribution test`, verify the test record and keep it excluded from lead counts. Do not infer test status from a person's name alone.
4. Validate every source, campaign, and AI value against the controlled vocabulary before creating tags.
5. Find the HighLevel contact by exact email. If it is missing, upsert it from the notification data and add `reconciler-created`.
6. If the HighLevel standard source field is empty or equals the known stale value `lsa-guide`, set it to the validated website source. Never overwrite another nonempty source.
7. Add `website-lead`, `contact-form`, and `website-source-<source>`. Add `needs-qualification` only when neither `qualified-website-lead` nor `disqualified-website-lead` is already present.
8. For the registered campaign, add `campaign-public-surface-audit-august` and either `channel-facebook` or `channel-linkedin` only when the full tuple passes validation.
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

- A separate daily audit searches all lead notification messages from the last 14 days and compares them with the reconciled label. Alert when a real website lead email remains unreconciled for more than 24 hours.
- Alert when a reconciled contact still has `lsa-guide`.
- Alert when a reconciled real contact lacks both `qualified-website-lead` and `disqualified-website-lead` after seven days.
- Report zero candidates as a normal run, not a failure.

## Launch test matrix

Use synthetic `example.com` addresses and the reserved `555-010` phone range.

1. [x] Tag-mutation side-effect test. On August 15, the existing synthetic native-created contact received `lsa-guide`, then the exact proposed reconciliation tag set, then had `lsa-guide` removed. Repeated checks found zero conversations, opportunities, or tasks, with no source or assignment change. The reconciliation tags were removed after the test, leaving only the internal test tag.
2. [x] Fresh tagged audit submission. Production returned a `[TEST]` subject, a full lead ID and registered Facebook tuple in Gmail, one HighLevel contact, no conversation or opportunity, the internal test tag, and no stale tag after reconciliation.
3. [x] Same synthetic contact, different registered campaign content. Production created two separate Gmail messages with different lead IDs and Facebook versus LinkedIn tuples while HighLevel retained one contact. The resubmission re-added `lsa-guide`, and reconciliation removed it again without changing contact identity.
4. [x] Fresh untagged submission. Production recorded no campaign or AI tuple in Gmail, created one HighLevel contact, and retained only the internal test tag after reconciliation.
5. [x] Retry test. CRM writes were completed while one Gmail message was deliberately left unreconciled. A second pass produced no duplicate tags and did not add `needs-qualification` after `qualified-website-lead` was present. The synthetic tags were removed after the test.
6. [x] Vocabulary test. `scripts/lead-reconciliation-policy.test.mjs` verifies that an unregistered campaign and AI value produce one `attribution-unclassified` tag and no tag containing a raw value. All six policy tests passed.

Run the reconciler twice against the form-submission cases. The second pass must make no additional contact and no tag changes. Keep every synthetic record excluded from the scorecard.

## Known limitations

- HighLevel contact notes and custom fields are unavailable through the current integration scope.
- Multiple submissions from one contact remain distinct only in Gmail.
- The same person using different email addresses can create separate contacts.
- The process depends on the recurring runner and Gmail availability.
- Calendar bookings and website calls still require separate reconciliation.

The temporary launch gate passed on August 15. Five synthetic notification messages were present in both Gmail labels, with zero unreconciled messages, and every synthetic HighLevel contact was excluded from reporting. Native HighLevel fields and per-submission notes remain the permanent repair target.
