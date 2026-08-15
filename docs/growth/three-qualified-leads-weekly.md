# Sequoia GEO: Three Qualified Website Leads Per Week

Status: active growth target

Baseline date: 2026-08-15

Target window: 60 days

Measurement cadence: weekly, reported as a rolling four-week average

## Target

Generate a rolling average of three qualified website leads per week.

A qualified website lead must meet all of these conditions:

1. It originated from a website form, completed website calendar booking, or attributable website call.
2. It is a real business inquiry, not spam, an existing client request, a job applicant, a vendor solicitation, or an unrelated consumer inquiry.
3. The prospect has a stated marketing, visibility, lead-generation, or location-management problem that Sequoia GEO can address.
4. The record is marked qualified or disqualified in HighLevel. A button click, form view, form start, AI arrival, or unanswered call is not a lead.

Count accepted form submissions as distinct `lead_id` values. Count qualified leads as distinct prospect companies after deduplicating repeated submissions and contacts by email, phone, company, and opportunity context. A `lead_id` identifies one submission, not one person or company.

## Canonical funnel

| Stage | Definition | Primary source |
|---|---|---|
| Qualified visit | A nonbot visit to a commercial or service page | GA4, checked against Clarity |
| Lead intent | Phone click, booking click, or form start | GA4 |
| Captured form lead | The contact API accepts the submission, sends the notification, and returns a submission-level `lead_id` | Website notification email and API response |
| Captured call lead | An attributable website call with a real prospect conversation | Call-tracking log |
| Booked meeting | A completed calendar booking, not a calendar click | Google Calendar or booking system |
| Qualified lead | A captured lead that meets the four qualification rules above | HighLevel |
| Held meeting | The qualified prospect attends | HighLevel and calendar |
| Customer | The prospect signs and pays | HighLevel |

GA4 is a diagnostic source, not the sole lead ledger. Browser privacy tools can suppress GA4. Every accepted form now receives a first-party `lead_id` in the notification email, browser event, API response, and HighLevel webhook payload.

Reconcile accepted form IDs between notification email and HighLevel. Compare GA4 by aggregate count and timestamp because `lead_id` is intentionally not registered as a high-cardinality GA4 custom dimension. An ID-level GA4 join would require BigQuery export and is not part of the initial weekly process.

Campaign and AI-referral fields in the accepted-form email and HighLevel payload are the lead-level attribution record. Campaign attribution is first tagged touch within the same browser tab, so it reports a floor. GA4 native session attribution uses different rules and is a directional cross-check, not an ID-level source of truth. A later branded search, direct return, copied link, or new in-app browser can lose the first-touch tag.

## Funnel math

| Qualified visit-to-lead rate | Qualified visits required per week |
|---:|---:|
| 1% | 300 |
| 2% | 150 |
| 3% | 100 |
| 5% | 60 |

The operating planning case is 100 to 150 qualified visits per week at a 2% to 3% qualified lead rate.

## Verified baseline

### Search Console

Source: Sequoia GEO Search Console property, Search results, July 17 through August 13, 2026. Read in-account on August 15, 2026.

| Metric | Value |
|---|---:|
| Organic clicks | 120 |
| Organic impressions | 130,764 |
| CTR | 0.1% |
| Average position | 22.8 |
| Approximate organic clicks per week | 30 |

Priority page baselines:

| Page | Clicks | Impressions | Average position | Test eligibility |
|---|---:|---:|---:|---|
| Roofing SEO | 5 | 33,265 | 13.7 | Eligible for the page-two refresh test |
| Plumbing SEO | 5 | 20,477 | 16.4 | Eligible for the page-two refresh test |
| Best plumbing agencies | 10 | 18,084 | 33.2 | Excluded from the controlled refresh test |

### Google generative AI features

Source: Sequoia GEO Search Console property, Performance on Search generative AI features, last 28 days. Read in-account on August 15, 2026.

| Metric | Value |
|---|---:|
| Generative AI impressions | 3,630 |

The highest-impression AI pages included best HVAC agencies, local SEO competitor analysis, GEO for plumbers, best plumbing agencies, HVAC statistics, roofing SEO, and plumbing SEO.

### Clarity

Source: Sequoia GEO Clarity project. Read in-account on August 15, 2026.

| Period | Sessions | Pages per session | Average scroll | Conversion evidence |
|---|---:|---:|---:|---|
| August 15 partial day | 7 | 1.43 | 22.80% | No Clarity smart-event conversions |
| August 13 through August 15 partial day | 67 displayed, including 7 identified bots, approximately 60 nonbot | 1.33 | 25.02% | Two contact interactions, two outbound interactions, and one booking interaction, none verified as captured leads |

### CRM and analytics limitations

Source: Sequoia GEO HighLevel account, contacts and opportunities, previous 28 days. Read in-account on August 15, 2026.

- Twelve contact records were visible.
- Eleven contained phone-only records with null or Other source values.
- No opportunities were visible for the period.
- No new contact records were visible from August 13 through August 15.

The authenticated Google Analytics account did not have access to the correct Sequoia GEO property. The key-event classification and custom dimensions remain unverified in-account.

## Weekly scorecard

Complete every Monday for the preceding Monday through Sunday.

| Metric | Weekly value | Four-week average | Target | Source |
|---|---:|---:|---:|---|
| Qualified website visits |  |  | 100 to 150 | GA4 and Clarity |
| Nonbranded organic clicks |  |  | Increasing | Search Console |
| Form starts |  |  | Diagnostic only | GA4 |
| Form responses missing a lead ID |  |  | 0 | GA4 event `form_response_missing_lead_id` |
| Accepted form leads |  |  |  | Lead IDs and HighLevel |
| Completed website bookings |  |  |  | Calendar and HighLevel |
| Attributable website calls |  |  |  | Call tracking and HighLevel |
| Qualified website leads |  |  | 3 per week | HighLevel |
| Held meetings |  |  | Increasing | HighLevel and calendar |
| Jobs booked |  |  | Increasing | HighLevel |

## Release gates

### Measurement gate

- [x] Form success requires a successful notification response.
- [x] Accepted forms receive a shared first-party lead ID.
- [x] Fast browser-autofill submissions are no longer silently discarded by the timing check.
- [x] A 200 response without a valid lead ID cannot fire `generate_lead` and instead raises `form_response_missing_lead_id`.
- [x] The HighLevel webhook has a five-second timeout and logs failures against the lead ID.
- [x] `generate_lead` fires only after an accepted form response.
- [x] Phone clicks and calendar clicks remain intent events.
- [ ] Unmark `ai_referrer_seen` as a GA4 key event.
- [ ] Verify `generate_lead` and `lead_id` in GA4 Realtime.
- [ ] Register or verify event-scoped reporting fields for `cta_contract`, `lead_source`, `ai_engine_source`, `referrer_host`, and `landing_path`.
- [ ] Keep `lead_id` available for event-level reconciliation, but do not register it as a GA4 custom dimension because every value is unique.
- [ ] Confirm HighLevel stores `lead_id` and website source from the webhook.
- [ ] Store every submission-level `lead_id` in a HighLevel note or other append-only history, not a single contact field that gets overwritten on resubmission.
- [ ] Establish completed-booking reconciliation.
- [ ] Establish website-call attribution.

### Controlled SEO gate

Keep the conversion experience unchanged for seven complete days after the August 15 release. During that period, prepare but do not publish the roofing and plumbing content changes. Publish the same predefined treatment to both eligible pages after the measurement gate is operational:

1. Query-matched title, H1, and first paragraph.
2. A 40-to-80-word direct answer near the top.
3. A numbered process based on Sequoia GEO's actual method.
4. Original evidence or first-party observations.
5. Commercially relevant FAQs.
6. Descriptive internal links to the baseline review and related evidence pages.
7. Search Console recrawl request after deployment.

Evaluate page-level nonbranded clicks, CTR, average position, and Google generative AI impressions. Do not use the 30-day lead total as the sole SEO verdict.

## Industry expansion gate

Do not publish a new vertical landing page until the demand packet contains:

1. Fresh Keyword Planner volume, trend, competition, and bid ranges.
2. Current Search Console evidence for related queries.
3. A manually verified SERP sample showing the companies and page types Google rewards.
4. A realistic offer and proof asset for the vertical.
5. A comparison against the existing home-services opportunity cost.

Compare at least these clusters:

- Plumbing, HVAC, and roofing SEO or AI visibility
- Multi-location healthcare listing management and local visibility
- Franchise or multi-location listing management
- AI visibility audits for established local-service companies

## Decision rule

Home services remains the primary market during the first 30 days because roofing and plumbing already have verified page-two visibility. Expand to a second vertical only when its demand packet shows stronger near-term commercial intent or a materially shorter path to a qualified sales conversation.
