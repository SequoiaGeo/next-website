# Sequoia GEO Search Console Page and Query Map

Prepared: 2026-08-15

Source: Sequoia GEO Search Console property, Search results, July 17 through August 13, 2026. Page and query filters were read directly in-account on August 15, 2026.

## Purpose

Identify which URLs receive the commercial roofing, plumbing, and HVAC impressions, determine whether service and comparison pages compete for the same intent, and locate existing click flow that can support the commercial conversion path.

## Page distribution

| Page | Clicks | Impressions | Role |
|---|---:|---:|---|
| `/` | 32 | 264 | Main homepage |
| `/?utm_source=GBP&utm_medium=organic&utm_campaign=GBP` | 21 | 3,272 | GBP-tagged search destination |
| `/best-plumbing-marketing-agencies` | 10 | 18,084 | Agency comparison |
| `/about-sequoia-geo` | 8 | 177 | Operator and brand proof |
| `/blog/roto-rooter-lead-costs-2026` | 6 | 41 | First-party industry analysis |
| `/roofing-seo` | 5 | 33,265 | Roofing service page |
| `/plumbing-seo` | 5 | 20,477 | Plumbing service page |
| `/hvac-statistics` | 5 | 4,896 | Industry data article |
| `/plumbing-statistics` | 4 | 1,143 | Industry data article |
| `/local-services-ads-statistics` | 4 | 520 | Industry data article |
| `/blog/best-plumbing-seo-keywords` | 3 | 5,656 | Educational article |
| `/geo-agency` | 2 | 1,677 | GEO service page |
| `/blog/gbp-utm-tracking-ga4` | 2 | 290 | Measurement article |
| `/blog/google-removed-call-button-gbp` | 2 | 142 | Industry news article |
| `/case-studies` | 2 | 50 | Proof hub |

Search Console reported 120 total clicks for the period. The query table withheld the low-volume terms behind some page-level clicks, including all six clicks shown for the Roto-Rooter article. A blank page-filtered query table does not mean that the page received no clicks.

### GBP-tagged homepage verification

The GBP-tagged homepage row is not an indexed duplicate. Search Console URL Inspection reported `URL is not on Google`, `Page is not indexed: URL is unknown to Google`, no crawl, and no selected canonical. The site code declares `https://www.sequoiageo.com/` as the homepage canonical in `src/app/page.tsx`.

The evidence supports treating this row as a tagged destination reported from a Google search surface, not as a second indexed homepage. Keep the GBP campaign parameters and count this as GBP-labeled search traffic. Do not claim that it splits indexing signals or contaminates attribution unless a future inspection contradicts the current result.

Report this row as `GBP search-surface clicks`, separate from nonbranded organic web clicks. The current inspection is a dated snapshot, not a guarantee that the parameterized URL can never be indexed.

## Roofing mapping

`/roofing-seo` is the correct core URL for roofing SEO service intent. Its leading visible queries include:

| Query | Clicks | Impressions |
|---|---:|---:|
| roofing seo | 0 | 2,555 |
| roofer seo | 0 | 2,392 |
| seo for roofers | 0 | 1,975 |
| roofing seo company | 0 | 1,774 |
| roofing company seo | 0 | 1,716 |
| seo for roofing companies | 0 | 1,418 |
| seo for roofing company | 0 | 1,284 |
| seo for roofing | 0 | 1,084 |
| search engine optimization agency for roofing professionals | 0 | 962 |
| roofing seo agency | 1 | 651 |

`/best-roofing-marketing-agencies` received 4,069 impressions and no clicks. Its leading visible queries are marketing and comparison variants such as `roofing marketing agency`, `roofing marketing companies`, `roofing contractor marketing agency`, and `best roofing marketing agency`.

Conclusion: the service page owns the core SEO-service intent. The comparison page is not the main cause of the roofing service page's low click capture. Roofing therefore needs a title-link, snippet, SERP-composition, device, and content-fit diagnosis, not a different target URL.

## Plumbing mapping

`/plumbing-seo` received 20,477 impressions and five clicks. Its leading visible queries include `plumber seo`, `plumbing seo`, `plumber seo services`, `seo for plumbing companies`, `seo for plumbers`, `plumber seo company`, and `plumbing seo company`.

`/best-plumbing-marketing-agencies` received 18,084 impressions and ten clicks. It also appears for `plumber seo`, `plumbing seo`, `plumbing seo company`, and `plumber seo services`. It additionally appears for HVAC terms such as `hvac seo`, `hvac seo agency`, and `hvac seo company`.

Conclusion: plumbing has proven click capture, but the service and comparison URLs overlap materially. The comparison page should remain live because it already earns clicks. Its comparison intent, headings, title, and internal path to `/plumbing-seo` should be made explicit. The service page should own direct service-selection intent. Cross-vertical HVAC sections or signals on the plumbing comparison page require review because they blur topical focus.

The current comparison-page title already identifies the page as a ranked list, discloses the operator perspective, and the page already links to `/plumbing-seo` with the anchor `Plumbing SEO Services`. Preserve those working elements during the first treatment. Do not remove content from the comparison page merely to force a preferred URL.

## HVAC mapping

`/hvac-seo` received 16,784 impressions and no clicks. Its leading visible queries are direct SEO-service terms, including `hvac seo`, `seo for hvac companies`, `hvac seo services`, `seo for hvac`, and `seo for hvac contractors`.

`/best-hvac-marketing-agencies` received 12,110 impressions and no clicks. Its leading queries are comparison and broader agency terms, including `hvac marketing agency`, `hvac marketing company`, `hvac advertising agency`, and `best hvac marketing companies`.

Conclusion: HVAC demand is split more cleanly by service and comparison intent than plumbing, but both pages currently produce no clicks. Its lower query-cluster rank makes it a useful untreated comparator rather than the first 30-day SEO treatment.

## Existing traffic-routing opportunity

The page table shows that first-party analysis and data pages already earn clicks. At minimum, the visible Roto-Rooter, HVAC statistics, plumbing statistics, Local Services Ads statistics, plumbing keyword, GBP tracking, and GBP call-button pages produced 26 clicks in the period. These visits are not automatically qualified prospects, but relevant articles can provide contextual internal links to the matching service, diagnostic, or baseline-review page.

Do not add generic sitewide sales blocks to every article. Add one contextual next step only where the article's subject and reader problem naturally match a commercial page. Tag clicks as internal navigation events so the route can be evaluated separately from the original search landing.

## Treatment implications

1. Preserve the roofing and plumbing service-page targets.
2. Publish the plumbing service-page treatment first because plumbing already demonstrates stronger click capture.
3. Preserve the plumbing comparison page during the first treatment. Measure combined plumbing-cluster clicks and leads across both URLs so a Google URL swap is not mislabeled as a loss.
4. Review the plumbing comparison page's HVAC eligibility later. Do not make a subtractive edit during the first treatment without proof that the visible content is irrelevant to the query.
5. Bundle relevant internal-link additions with each registered service-page treatment. Do not change links to the untreated page mid-window.
6. Keep HVAC content and inbound links unchanged during both treatment windows.
7. Compare page-level nonbranded clicks, impressions, CTR, average position, and qualified landings. Search Console impression volume alone is not a success measure.

## Desktop conversion verification

The visible device-filtered tables were directionally desktop-heavy:

| Page | Desktop impressions | Mobile impressions | Tablet impressions |
|---|---:|---:|---:|
| `/roofing-seo` | 25,002 | 7,433 | 142 |
| `/plumbing-seo` | 14,486 | 5,054 | 365 |
| `/best-plumbing-marketing-agencies` | 13,292 | 3,453 | 254 |

Filtered Search Console tables can omit protected rows, so these counts are directional and do not reconcile to the full page totals.

The production desktop path was walked on August 15. `/plumbing-seo` exposed four visible `Choose a Time` or `Choose a Time With Aaron` links, all pointing to `/contact#book`. The destination loaded the booking section, displayed the 15-minute Baseline Review language, and rendered a visible 704-by-700 Google appointment iframe titled `Book a strategy call with Aaron Husak`. The path passed this non-submission QA check.

## Limits

- Search Console hides some low-volume query rows for privacy.
- Page-level totals and visible query rows do not reconcile exactly.
- An impression can arise from different countries, devices, result features, and positions.
- Page overlap is evidence of competing eligibility, not proof that one page caused the other to rank lower.
