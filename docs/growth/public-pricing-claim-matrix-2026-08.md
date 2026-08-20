# Public pricing claim matrix

Status: proposed for the August 2026 pricing release. Do not publish the new URL until the statements below match the deployed pages.

## One public starting point

| Topic | Public statement | Source of truth |
| --- | --- | --- |
| Starting monthly engagement | $2,500 per month | `src/components/Hero.tsx`, `src/app/how-much-does-seo-cost-for-contractors/page.tsx` |
| Initial term | Three months, then month to month | `src/components/Hero.tsx`, `src/app/how-much-does-seo-cost-for-contractors/page.tsx` |
| GEO and AI SEO | Included where applicable in the same operator-led search engagement. No separate AI surcharge. | `src/app/ai-seo-pricing/page.tsx` |
| Advertising spend | Separate. The client keeps the accounts and is billed by the platform. | `src/app/plumbing-seo/page.tsx`, `src/app/how-much-does-seo-cost-for-contractors/page.tsx`, `src/app/ai-seo-pricing/page.tsx` |
| Software and large web builds | Discussed and approved separately. | `src/app/ai-seo-pricing/page.tsx` |
| Guarantee | No guarantee of rankings, citations, recommendations, lead volume, or timing. | `src/app/ai-seo-pricing/page.tsx` |

## Intake map

There is one free entry point: a baseline review of the public surface before the first conversation. It is not a paid in-account assessment and it is not a separate free offer for each service.

Paid work begins only after scope is agreed. In-account sources such as analytics, Search Console, listings, CRM stages, and conversion data are part of implementation and measurement after engagement, not promises made by the free review.

## Release check

Before publishing a new price statement, search all public source files for these strings:

- `$2,500`
- `three-month`
- `3-month`
- `month to month`
- `AI SEO`
- `GEO`

Any new monthly floor, paid diagnostic fee, or term must either use this statement unchanged or be explicitly described as a non-overlapping, separately scoped service. Do not create a second starting price for GEO work without updating this matrix and every affected public page in the same release.
