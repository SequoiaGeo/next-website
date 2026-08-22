# Service Page Refresh, August 22, 2026

Status: deployed as one combined treatment, with the recommendation-report launch held while the automatic CRM capture gate is failing

Owner: Aaron Husak, Sequoia GEO

## Why the treatment changed

The earlier plan separated plumbing on August 23 and roofing on August 30. Production release `ca8fffb` changed both treatment pages on August 21 at 3:38:41 PM Pacific, along with HVAC and shared site surfaces. That release ended the clean pre-treatment comparison that the stagger was intended to preserve.

The August 22 work is therefore registered before deployment as one combined treatment named `service-page-refresh-2026-08-22` covering:

- `/plumbing-seo`
- `/roofing-seo`

The two pages may still be read separately in Search Console, but those reads are descriptive. No page-level causal claim will be made from the before and after comparison.

## Treatment definition

- Rewrite each title, description, hero, service explanation, operating process, proof language, FAQ, and conversion copy around the service query and jobs-booked measurement.
- Preserve the August 21 authority corrections, evidence limits, Service schema, Breadcrumb schema, and current AI SEO language.
- Keep the report CTA off plumbing, roofing, HVAC, and the roofing comparison page.
- Ship plumbing and roofing in commit `f433f36` and record one deployment timestamp.

## Boundaries

1. Production authority boundary: `ca8fffb`, August 21, 2026 at 3:38:41 PM Pacific.
2. Combined service-page boundary: service content commit `f433f36`, release boundary commit `f85dda5`, verified live on August 22, 2026 at 6:52 AM Pacific.

The July 17 through August 13 Search Console window remains the planning reference, not a clean experimental baseline for this release.

## Descriptive measurement plan

Read weekly by page and query:

- Clicks.
- Impressions.
- Click-through rate.
- Average position.
- Indexed state and last crawl.
- Qualified calls, accepted forms, completed bookings, and jobs booked when an attributable join exists.

Read the plumbing cluster across the service and plumbing comparison URLs so a ranking swap between Sequoia pages is not mistaken for lost visibility.

## Freeze and rollback

For 14 days after deployment, do not edit the two treatment pages, their inbound internal links, `/hvac-seo`, the roofing comparison page, the shared layout, footer, or services component except to correct a material error or execute a rollback.

Rollback one affected page when it is deindexed or its established head-query visibility shows a sustained material collapse across two weekly reads. Do not roll back because qualified-lead volume is low in an underpowered period. Extend the observation window when the data is insufficient.

## Release gates

1. Accepted form succeeds, server labels the reserved synthetic record correctly, the registered attribution tuple survives to the email archive, and no synthetic conversion event is emitted.
2. Automatic HighLevel capture succeeds and the internal evidence ledger is durable.
3. One deployment is verified before the next deployment begins.
4. The public claims, service refresh, lead policy, lint, TypeScript, and production build checks pass.

Gate 1 passed on August 22. Gate 2 failed because the synthetic form did not create a HighLevel contact automatically. The notification was manually reconciled as an internal test, but manual reconciliation does not satisfy the production gate.

The plumbing and roofing refreshes were allowed to publish after Gate 1 because they use the existing accepted-form path and do not add a new conversion source. The Home Services AI Recommendation Report page, its service-page CTAs, source registration, and sitemap entry remain withheld from production until Gate 2 passes.
