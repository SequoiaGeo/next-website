# HighLevel Attribution Remediation

Status: required before the public-surface audit campaign launches

Verified: 2026-08-15 through a synthetic production submission to the tagged `/audit` URL

## Production finding

The website accepted the form and displayed the real success state. HighLevel created the synthetic contact through a CRM workflow, but the resulting record had:

- The stale tag `lsa-guide`
- No website lead ID
- No website source
- No UTM source, medium, campaign, content, or landing path
- No AI engine, referrer host, or AI landing path
- No contact custom fields available for these values

The synthetic record was retagged `internal-attribution-test`, the stale tag was removed, and it must remain excluded from lead reporting.

## Required workflow changes

Edit the HighLevel workflow receiving the website `GHL_WEBHOOK_URL` and map these flat webhook properties:

| Webhook property | HighLevel destination |
|---|---|
| `websiteLeadId` | Contact field: Website Lead ID |
| `websiteSource` | Contact field: Website Source |
| `utmSource` | Contact field: UTM Source |
| `utmMedium` | Contact field: UTM Medium |
| `utmCampaign` | Contact field: UTM Campaign |
| `utmContent` | Contact field: UTM Content |
| `campaignLandingPath` | Contact field: Campaign Landing Path |
| `aiEngineSource` | Contact field: AI Engine Source |
| `aiReferrerHost` | Contact field: AI Referrer Host |
| `aiLandingPath` | Contact field: AI Landing Path |

Replace the hard-coded `lsa-guide` tag with `website-lead`, `contact-form`, and the submitted `websiteSource` value. The website source is server-allowlisted before it can become a tag.

Set the flat attribution fields only when the corresponding contact field is empty. Those fields are the first-tagged-touch summary. For every accepted submission, append a contact note containing the submission ID, website source, campaign tuple, AI source, landing path, and submission timestamp. The note is the submission ledger. This prevents a later submission from silently overwriting the first-touch summary.

Audit every other action in the cloned workflow. Remove any LSA-guide nurture email, SMS, pipeline move, assignment, or notification that does not belong to all website inquiries.

## Verification gate

Run this three-case synthetic matrix:

1. Fresh tagged contact with campaign and AI fields: the form succeeds, the notification email contains the lead ID and exact attribution fields, the HighLevel contact fields match, the correct tags appear, and no stale tag appears.
2. Same email, different campaign: no duplicate contact is created, first-touch contact fields remain unchanged, and a new submission note is appended with the second lead ID and campaign tuple.
3. Fresh untagged organic contact: campaign and AI fields remain empty, no `undefined` or fallback campaign strings are stored, and a submission note is still appended.

After each case, inspect the contact conversation and activity log. Confirm that no stale LSA-guide email, SMS, assignment, pipeline move, or nurture step ran. Tag every synthetic record `internal-attribution-test` and exclude it from weekly lead counts.

Then run three regression cases:

1. Replay the exact same webhook payload with the same `websiteLeadId`. Require one contact and one submission note, with no duplicate pipeline record or outbound message.
2. Submit through a tagged `utm_source=chatgpt.com` test path. Require the email and HighLevel ledger to record the allowlisted AI engine without storing a query string or full referrer.
3. Repeat the original tagged audit submission. Require that the stale `lsa-guide` tag and every stale automation action remain absent.

Use synthetic addresses for every QA case. Never use a real prospect's email for an internal or replay test, so a test cannot become the write-once first touch on a real contact.

Timebox this remediation for completion by Sunday, August 16. If it is not verified, move the audit campaign. The separate 15-minute Marketing Baseline Review remains live, so pausing this campaign does not remove the website's conversion path.

Do not call HighLevel the attribution source of truth until this gate passes.
