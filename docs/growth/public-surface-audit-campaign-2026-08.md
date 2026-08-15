# Public-Surface Audit Campaign

Status: blocked on HighLevel workflow remediation and the production test matrix

Campaign: `public_surface_audit_august`

Offer: the existing 12-point audit at `/audit`

Primary distribution: Aaron's personal LinkedIn and Facebook profiles, where prior posts have already produced reach, comments, follows, shares, and direct inquiries.

Conditional launch window: Monday, August 17. LinkedIn at 8:00 AM Pacific. Facebook at 11:30 AM Pacific. Launch only if the HighLevel gate passes by Sunday, August 16. Otherwise move the campaign rather than publishing into a known-bad workflow. Do not publish an identical Sequoia company-page post at the same time. Reuse the idea on the company page at least 24 hours later with a company-voice introduction.

## Offer taxonomy

Sequoia GEO has two distinct entry paths:

| Entry path | Promise | Action | Capacity |
|---|---|---|---|
| Marketing Baseline Review | A 15-minute conversation with Aaron about the first verified constraint | Choose a Time With Aaron | Scheduling availability |
| 12-point marketing audit | A hand-reviewed written report, delivered in 3 to 5 business days, followed by a 45-to-60-minute walkthrough | Submit the audit request form | 10 completed audits per month |

The public-surface scorecard is the first section of the deeper 12-point audit. It does not require account access. Account access is requested only if the prospect proceeds to the deeper measurement sections.

## Facebook and LinkedIn post

Attach `docs/growth/assets/public-surface-scorecard-example.png`, the anonymized eight-dimension scorecard image.

> Would it be helpful if I built this for your business?
>
> This is the public-surface portion of a marketing audit I completed for a contractor.
>
> It scores the eight things customers, Google, and AI systems can see before anyone hands me a password.
>
> Positioning. Website conversion. Technical SEO. On-page SEO. Content. Local consistency. Reputation. Social distribution.
>
> The score is not the important part.
>
> The contradictions are.
>
> A business can have a good-looking website and still be giving Google three different versions of its name, address, license, or services. AI systems pick up those conflicts too.
>
> One of the businesses I built this for hired me to fix what it found.
>
> I can complete 10 of the full audits each month. I put the request page in the first comment.

Do not place a link in the post body. The first line must remain the only text above the image preview.

## First comments

Facebook:

> Here is the request page: https://www.sequoiageo.com/audit?utm_source=facebook&utm_medium=organic_social&utm_campaign=public_surface_audit_august&utm_content=first_comment
>
> I review every submission myself. If the public evidence is clean, I will tell you that too.

LinkedIn:

> Request one here: https://www.sequoiageo.com/audit?utm_source=linkedin&utm_medium=organic_social&utm_campaign=public_surface_audit_august&utm_content=first_comment
>
> I review every submission myself. If the public evidence is clean, I will tell you that too.

## Response scripts

When someone comments that they want one:

> Absolutely. The request page is in my first comment. Put your business name in with the form and I will take a look personally.

When someone asks what it costs:

> The audit itself is free. If it uncovers work you want me to handle, I will scope that separately. You keep the findings either way.

When someone already has an agency:

> That is fine. The audit can verify one issue without assuming your agency needs to be replaced. If the evidence says they are doing the right things, I will say that plainly.

## Measurement contract

The campaign store records first tagged touch within the same browser tab. It does not prove every later conversion caused by the post. Facebook and LinkedIn in-app browsers, copied links, later branded searches, and later direct visits can lose the tag.

Use these sources:

1. Accepted forms and their submission IDs in the notification email are the lead-level attribution source until the HighLevel remediation below is verified.
2. GA4 campaign sessions and lead events are a directional cross-check.
3. Search Console branded clicks and direct traffic during the post week are secondary lift signals, not attributable leads.
4. Comments, reactions, shares, and profile follows are distribution signals, not leads.

### HighLevel remediation gate

The August 15 production test created the synthetic audit contact successfully, but HighLevel applied the stale `lsa-guide` tag and stored none of the website source, lead ID, campaign, or AI-referral fields. The synthetic contact was retagged `internal-attribution-test` and must be excluded from reporting.

Before campaign launch, edit the workflow receiving `GHL_WEBHOOK_URL`:

1. Remove the hard-coded `lsa-guide` tag.
2. Audit every action in the cloned workflow for stale LSA-guide email, SMS, pipeline, assignment, or nurture steps.
3. Add `website-lead`, `contact-form`, and the allowlisted `websiteSource` value.
4. Create and map contact fields for `websiteLeadId`, `websiteSource`, `utmSource`, `utmMedium`, `utmCampaign`, `utmContent`, `campaignLandingPath`, `aiEngineSource`, `aiReferrerHost`, and `aiLandingPath`.
5. Populate first-touch fields only when empty. Append a note with the full attribution tuple and lead ID on every accepted submission.
6. Run the fresh tagged, same-contact resubmission, and fresh untagged test matrix in `docs/growth/highlevel-attribution-remediation-2026-08-15.md`.
7. Replay one identical webhook payload and verify that it does not create a second contact or duplicate submission note.
8. Confirm the notification email, HighLevel fields, submission note, tags, and contact activity match the test expectations before launch.

The website sends the flat fields listed above as the sole HighLevel mapping contract.

## Evidence used on the landing page

The `16,962` reported conversion events are documented in `C:/Users/Aaron/Documents/2AARON/Wiki/Prospects/Star Heating.md` and the published audit article in `src/app/blog/[slug]/page.tsx`. The controlling source for the `21` measured search conversions is `C:/Users/Aaron/Documents/2AARON/Sources/transcripts/2026-04-01-Star-Heating-Marketing-Meeting.md`, especially lines 41 and 102 through 106. The transcript calls the 21 potential leads and explicitly says they were not confirmed booked jobs. It also identifies three of five conversion goals as misconfigured, including a page view counted as a conversion. The `22 booked jobs` wording in the prospect wiki and `C:/Users/Aaron/Documents/2AARON/Wiki/Strategy/Writing-Style-Guide.md` is stale and must not be reused.

## Seven-day read

Report after seven complete days:

| Metric | Meaning |
|---|---|
| Post reach and impressions | Distribution |
| Reactions, comments, and shares | Message resonance |
| Tagged audit-page sessions | Same-visit attributable traffic |
| Audit form views and starts | Landing-page intent |
| Accepted audit requests | Captured leads |
| Qualified audit requests | Qualified website leads |
| Completed bookings or calls | Down-funnel intent |
| Jobs booked | Commercial outcome |

Continue the format if either platform produces one qualified request or at least 20 qualified audit-page visits with observable form intent. If engagement is high but tagged visits are low, change only the first-comment invitation. If visits are present but forms do not start, review the `/audit` landing-page promise after the August 16 through 22 measurement window.
