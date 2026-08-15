# Sequoia GEO Offer-Language Release Note and Debt Log

Prepared: 2026-08-15

## Canonical conversion language

| User action | Canonical label |
|---|---|
| Open the scheduling section or calendar | Choose a Time With Aaron |
| Submit a marketing review form | Request the Baseline Review |
| Name the first diagnostic step | Marketing Baseline Review |
| Space-constrained mobile navigation | Choose a Time |

"Full picture" remains valid positioning language. Only the legacy product name "Full Picture Audit" changes. Generic editorial uses of the word audit should be reviewed in context, not replaced mechanically.

The `/audit` route is intentionally a separate offer, not noun debt. It promises a hand-reviewed 12-point written audit in 3 to 5 business days plus a 45-to-60-minute walkthrough, capped at 10 completed audits per month. The Marketing Baseline Review is a 15-minute conversation. Keep those promises and actions distinct.

## August 15 pre-baseline correction

The final homepage correction affects `/` only. `HowItWorks` and `WhoIsItFor` are imported only by the homepage.

Changes:

- `Review My Numbers` becomes `Choose a Time With Aaron`.
- `Book Your 15-Minute Call` becomes `Choose a Time With Aaron`.
- `Apply for a Spot` becomes `Choose a Time With Aaron`, and its destination becomes `/contact#book`.
- `Start With the Full Picture Audit` becomes `Choose a Time With Aaron`.
- The first-step heading `The Full Picture Audit` becomes `The Marketing Baseline Review`.

The two homepage `InlineCTA` event labels remain comparable because they use the unchanged CTA headlines as their analytics source, not the button text. The former bare `/contact` fit CTA was not included in the new sitewide CTA-intent matcher. Its replacement `/contact#book` begins a newly measurable schedule-intent series and should not be treated as a historical increase.

Production verification completed on August 15, 2026. The seven complete baseline days are August 16 through August 22. The registered service-page release dates are plumbing on August 23 and roofing on August 30, provided the measurement gate remains healthy. No further conversion copy or layout change belongs in the baseline window.

## Deferred noun debt

A source sweep on August 15 found `free audit` or `Full Picture Audit` in 27 files outside the homepage and priority trade-page release. These references include dedicated audit pages, educational resources, lead magnets, article copy, service pages, location templates, and transactional email copy.

Defer them until after the seven-day instrumentation window. Review them route by route because some describe a genuinely free resource while others describe the paid first-step service. Do not use a global replacement.

Priority review order:

1. `/fractional-cmo`, `/services`, and `/geo-agency`
2. Shared resource and capture paths: LSA guide, calculator, and capture email copy
3. Case studies and agency comparison pages
4. HVAC city templates and statistics pages
5. Blog index and article-body references

Release rule: group the approved corrections into one later release, document the affected routes, and start a fresh observation window if a priority conversion page changes.
