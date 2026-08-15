# Tracking-Question Outreach, First 25 Companies

Prepared: 2026-08-15

Status: loaded in HighLevel and ready for the Monday caller handoff

Objective: create 10 to 20 qualified visits per week and qualified conversations for the Sequoia GEO website without repeating the unsupported tracking claims used in the first outbound batch.

## Evidence contract

Every company in this set meets all four conditions:

1. Google Ads activity was confirmed through Google's Ads Transparency Center on August 1, 2026. This is historical confirmation, not a claim that an ad is active at the moment of the call.
2. The company does not appear in `C:/Users/Aaron/Documents/SequoiaGeo/Outbound/CALL-LOG.md` as a prior dial.
3. The public website and its contact-oriented pages were rescanned on August 15 with the four-prefix and container method in `scripts/public-tracking-scan.mjs`.
4. A current public business phone was observed on the live website on August 15.

The August 15 scan found no supported public measurement tag on 24 sites. One site, RoofingZip, exposes a tag manager container but no visible Google Ads destination. Neither result proves conversion tracking is absent. Runtime, consent-gated, server-side, GA4-imported, CRM-uploaded, and other measurement can remain invisible to this scan.

## Campaign attribution

Keep this outreach separate from the Monday social campaign.

| Field | Value |
|---|---|
| Landing page | `/audit` |
| UTM source | `direct_outreach` |
| UTM medium | `phone` |
| UTM campaign | `tracking_question_outreach_august` |
| UTM content | `tracking_question` |
| HighLevel queue tag | `jose-tracking-question-2026-08-17` |
| HighLevel campaign tag | `campaign-tracking-question-outreach-august` |
| HighLevel channel tag | `channel-direct-outreach` |

Tagged URL:

`https://www.sequoiageo.com/audit?utm_source=direct_outreach&utm_medium=phone&utm_campaign=tracking_question_outreach_august&utm_content=tracking_question`

Do not text or email the link until the prospect asks for the findings, agrees to receive it, or requests more information.

### HighLevel acceptance check

On August 15, a synthetic caller-created contact was created with the proposed source and campaign tags. After the workflow window, it retained the exact source and tags, stayed unassigned, and had zero conversations, opportunities, or tasks. It remains tagged `internal-attribution-test` and is excluded from reporting.

All 25 phone numbers returned zero existing HighLevel contacts before import. All 25 upserts returned `201` with `new: true`. Each contact was created with source `tracking_question_outreach_august`, queue tag `jose-tracking-question-2026-08-17`, the campaign and channel tags above, `outbound-not-contacted`, the vertical, the call window, and both verification-date tags. None was tagged as a website lead and no opportunity was created.

## Claim-safe opener

> Hi, is the owner or the person who handles marketing available?
>
> This is Jose calling for Aaron Husak at Sequoia GEO. It is a cold call, so you can tell me to get lost. Give me 20 seconds and you will know whether it matters.
>
> Google’s public advertising record showed your company advertising earlier this month. Aaron rechecked the public side of your site today, and we could not verify whether booked-job conversions are reaching the ad account.
>
> Can whoever handles your marketing tell you what one booked job from Google Ads costs?

Then stop talking. Do not say that tracking is missing. Do not say their money is being wasted. Do not say an agency failed.

For RoofingZip, use this middle sentence instead:

> Aaron found a tag manager container, but the public scan still could not verify whether booked-job conversions are reaching Google Ads.

## If the prospect engages

Ask these in order:

1. Who handles Google Ads now?
2. Can they show cost per booked job, not cost per lead?
3. When an ad call comes in, where is the booked or lost outcome recorded?
4. Would it be useful if Aaron checked the public evidence and showed you exactly what can and cannot be verified?

If the prospect asks how Aaron knows:

> Google publishes advertiser records. Aaron checks that first, then checks the public website for the measurement destinations a browser can see. The public scan cannot see every setup, which is why I am asking instead of telling you it is broken.

If the prospect requests the audit:

> I will send Aaron’s audit request page. He reviews every submission himself. The first section uses public evidence only. If your measurement is already working, he will say that rather than manufacture a problem.

## Warm threads before the cold 25

These existing threads outrank the fresh queue. Aaron should handle them because he made the original calls and the promised follow-ups are personal:

Correction-first rule: when the call log documents that Sequoia gave a prospect an inaccurate finding, open with the correction before asking another question or making a pitch.

1. Mudrock Concrete, callback was due around August 14. Open with the documented correction that the company does have Google Analytics, then ask who owns the advertising transition now.
2. J&P Roofing, the August 6 callback with Mark Soden has no logged outcome.
3. RCS Roofing, the expected July 31 call has no logged outcome.
4. Drew Roofing, TQM Roofing, and Performance 1, close the loop on the emails sent July 30.
5. Edge Restoration, verify whether the correction email was sent and whether Amy replied.

Jose starts the list below after those follow-ups are assigned, not necessarily after every prospect responds. All outcomes return to the existing `C:/Users/Aaron/Documents/SequoiaGeo/Outbound/CALL-LOG.md` so the campaign retains one running total toward the 100-dial checkpoint.

Three July 31 rows in the call log are unidentified. The 25 names below were deduplicated against every identified company, but an unidentified prior dial cannot be ruled out. If a prospect says they were called before, apologize once, record it, and end the duplicate opener.

If Aaron sends an open warm thread to the audit page, use this separate URL so the warm pipeline is not credited to Jose's cold batch:

`https://www.sequoiageo.com/audit?utm_source=direct_outreach&utm_medium=phone&utm_campaign=warm_pipeline_followup_august&utm_content=promised_followup`

## Pilot status and calling controls

This is the first weekly 25-company batch, not proof that Sequoia GEO has reached three qualified website leads per week. Its purpose is to measure dials, decision-maker conversations, requested audit links, tagged visits, accepted audit requests, qualified leads, held meetings, and the accuracy of the opener. Build the next batch only after the first outcomes are logged.

Before dialing:

1. Confirm the live public site still represents the business and the displayed number is a business line.
2. Check HighLevel for do-not-contact status, an existing conversation, or a duplicate record.
3. Use manual dialing only. Do not use a prerecorded or AI-generated voice.
4. Call only during permitted hours in the recipient's local time and follow applicable federal, state, and internal do-not-call requirements.
5. If the business asks not to be called, set HighLevel do-not-contact, add `outbound-do-not-contact`, record the request in `CALL-LOG.md`, and do not contact it again. Every weekly list build must exclude both the CRM suppression and the call-log suppression.
6. Do not text or email without the prospect's permission.

The first three official sites were manually spot-checked on August 15 after the automated scan. The business identity, offered service, and a current contact path were confirmed. P&G's current live page exposed the number in this sheet, although an older search index showed additional numbers. Use the live-page number and stop if the recipient says it is wrong.

## Monday cold-call order

Recommended four-hour block: 8:30 AM to 12:30 PM Pacific. Work Eastern first, then Central, then Pacific. Use the current live-site number shown below. If the person answering says the number or company is wrong, end the call and mark the record invalid.

| # | Company | Vertical | Time zone | Current public phone | Website | August 15 public observation |
|---:|---|---|---|---|---|---|
| 1 | P&G Commercial Roofing | Roofing | Eastern | 609-733-4058 | pgroofingnj.com | Supported public tag not found; three forms observed |
| 2 | 603 Concrete | Concrete | Eastern | 603-406-0879 | 603nhconcrete.com | Supported public tag not found; one form observed |
| 3 | Affordable Concrete Solutions | Concrete | Eastern | 440-714-1987 | concreteacs.com | Supported public tag not found; one form observed |
| 4 | Concrete Now | Concrete | Eastern | 301-931-3030 | concrete-now.com | Supported public tag not found; one form observed |
| 5 | Advanced Concrete Coatings | Concrete | Eastern | 919-610-1231 | coverconcrete.com | Supported public tag not found; no form observed |
| 6 | ECS Concrete | Concrete | Eastern | 904-486-6536 | ecs-concrete.com | Supported public tag not found; no form observed |
| 7 | Rod’s Concrete | Concrete | Eastern | 980-271-1885 | rodsconcrete.com | Supported public tag not found; three forms observed |
| 8 | DAC Construction | Restoration | Eastern | 803-634-7002 | dacrestoration.com | Supported public tag not found; five forms observed. An alternate site number, 803-278-6050, was also observed |
| 9 | DL Restoration & Builders | Restoration | Eastern | 718-275-3995 | dlrestoration.com | Supported public tag not found; two forms observed |
| 10 | DCH Landscaping | Landscaping | Eastern | 609-228-9070 | dchlandscaping.com | Supported public tag not found; one form observed |
| 11 | KBK Landscaping | Landscaping | Eastern | 888-408-0320 | kbklandscaping.com | Supported public tag not found; no form observed |
| 12 | May Landscaping | Landscaping | Eastern | 706-550-7753 | maylandscaping.net | Supported public tag not found; two forms observed |
| 13 | PJ’s Landscaping | Landscaping | Eastern | 321-961-8139 | pjslandscaping.com | Supported public tag not found; two forms observed |
| 14 | Quality Assurance Roofing | Roofing | Central | 806-641-8841 | qa-roofing.com | Supported public tag not found; one form observed |
| 15 | RBJ’s Roofing Company | Roofing | Central | 800-617-9421 | rbjroofing.net | Supported public tag not found; three forms observed. A Dallas-area number, 972-637-7563, was also observed |
| 16 | A and C Concrete | Concrete | Central | 402-317-1927 | ancconcrete.net | Supported public tag not found; two forms observed |
| 17 | G Bros Concrete | Concrete | Central | 817-914-4166 | gbrosconcrete.com | Supported public tag not found; three forms observed |
| 18 | RestorationOW | Restoration | Central | 402-502-7277 | restorationow.com | Supported public tag not found; two forms observed |
| 19 | All American Landscaping | Landscaping | Central | 630-202-1312 | aalandscaping.net | Supported public tag not found; four forms observed |
| 20 | DMA Contracting | Roofing | Eastern, multiple Florida markets | 800-807-1381 | dmaroofing.com | Supported public tag not found; four forms observed. Two local Florida numbers were also observed |
| 21 | GFM Restoration | Restoration | Pacific | 425-420-6246 | gfmrestoration.com | Supported public tag not found; no form observed |
| 22 | UL Roofing | Roofing | Pacific | 415-658-5358 | ulroofing.com | Supported public tag not found; no form observed |
| 23 | GeoLand Construction & Landscaping | Landscaping | Pacific | 408-270-1929 | geolandscaping.com | Supported public tag not found; multiple forms observed. An alternate number, 408-593-0926, was also observed |
| 24 | Gove Landscape Construction | Landscaping | Pacific | 916-801-1035 | govelandscaping.com | Supported public tag not found; one form observed |
| 25 | RoofingZip | Roofing | Verify before dialing | 888-896-0269 | roofingzip.com | Tag manager observed; no visible Google Ads destination; no form observed |

## Required call log fields

Log every dial, including no answer:

| Field | Allowed values or format |
|---|---|
| Contacted at | Pacific timestamp |
| Outcome | no answer, voicemail, gatekeeper, owner reached, marketing reached, wrong number, not interested, send audit, callback |
| Ads status | active now, historical only, stopped, unknown |
| Who handles ads | owner, employee, agency, unknown |
| Cost per booked job known | yes, no, unclear |
| Audit link sent | yes or no |
| Qualified website visit | do not infer; use campaign-tagged analytics |
| Next action | exact date and owner |

## Stop rules

- Stop using the finding if a company shows an Ads tag, a current agency report, or another verified conversion path.
- Do not debate a prospect who says measurement exists. Ask what system records booked jobs, then move on.
- Do not create an opportunity in HighLevel until the owner or marketing decision maker engages.
- Do not mark a contact as a qualified website lead until the pre-registered qualification rule is met.
- After the first 25, compare positive replies, tagged visits, accepted audit requests, qualified leads, and held meetings before selecting the next segment.
- A qualified lead from the first batch is a successful pilot outcome, not proof of a repeatable weekly acquisition system.

## Sources

- Historical advertiser and phone source: `C:/Users/Aaron/Documents/SequoiaGeo/Outbound/MASTER-CALL-LIST-v2.md`, corrected August 1, 2026.
- Prior-contact exclusion source: `C:/Users/Aaron/Documents/SequoiaGeo/Outbound/CALL-LOG.md`, last updated August 1, 2026.
- Current tag, form, and public phone evidence: `docs/growth/public-tracking-first-25-2026-08-15.json` and `docs/growth/public-tracking-first-25-2026-08-15.md`.
- Verification implementation: `scripts/public-tracking-scan.mjs`; deterministic checks: `scripts/public-tracking-scan.test.mjs`.
