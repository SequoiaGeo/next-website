# July search coverage recovery

Status: local implementation verified, not published. Base: production main 7db85b81b23c5ff369613a70d76b751032063856. Branch: codex/july-search-recovery-20260909.

## Objective and limits

Recover useful service-specific content lost during consolidation while preserving newer proof, methodology, AI-search content, pricing, forms, URLs, and metadata. This is not a complete July rollback and does not promise restoration of July rankings. The ranking diagnosis is in the workspace's search-decline-diagnosis-2026-09-09.md.

## Historical mapping

| Page | Historical comparison | Removed or condensed coverage | Recovery |
|---|---|---|---|
| Plumbing SEO | 9319020^ versus production | Plumbing keyword strategy, local SEO, on-page optimization, location coverage, business listings, technical health, reputation | Four trade-specific sections with job examples and restored links to plumbing keyword and local SEO guides |
| HVAC SEO | 9319020^ versus production | Buyer-intent keyword research, mobile and on-page checks, location coverage, review and authority discussion | Four trade-specific sections covering equipment and service intent, locations, on-page work, seasonality and measurement |
| Roofing SEO | 81493ce^ versus production | Dedicated keyword strategy, Google Maps/citations, on-page detail and service-area guidance | Four trade-specific sections covering service/material intent, local listings, estimate-page content and technical review |

Old copy was not copied verbatim. It included overbroad ranking statements and assumptions about location pages, review velocity, and outcomes. Reinstated topics use qualified factual copy without fabricated claims, old statistics, or ranking guarantees. The current FAQ and structured-data pairs remain unchanged. Existing overlap was retained rather than performing another destructive consolidation during recovery.

## Technical corrections

- Remove robots exclusion for /_next/ so framework assets can be crawled. Preserve the /api/ exclusion. The rule predates July, so do not call it the proven origin of the decline.
- Set the three edited service-page sitemap dates to September 9, the actual content-edit date. Do not change every sitemap date.
- The shared coverage component is server-rendered and adds no client JavaScript, new form, tracking event, or external integration.

## Boundaries

No homepage, knowledge interface, prices, acquisition events, paid media, or unrelated client pages changed. No full site rollback, sitemap submission, or synthetic form submission. Existing user edits were left in their original worktrees.

## Acceptance

The recovery test compares each current page with the exact base and proves the only page-level differences are a component import and one component invocation. It also checks topic coverage and technical corrections. Full tests require the production build first because API tests load compiled routes. Visual and generated-HTML checks are separate from code checks.

## Follow-through after an approved deployment

Record the actual deployment time and commit. Verify public HTTP status, canonicals, headings, restored text, robots and sitemap output. Inspect Google's rendered page and selected canonical for each service URL before requesting indexing. Evaluate July baseline and the last complete pre-release period separately. Track exact U.S. service-query groups, clicks, impressions, Google AI exposure and qualified inquiries as distinct metrics. This combined three-page restoration is not a randomized test; do not claim that it isolates the contribution of each edit. Keep comparison and informational pages unchanged in this release. Their initial July losses remain a separate unresolved investigation.

## Verification completed September 9

- Focused recovery suite: 5 passed.
- Complete repository suite after compilation: 145 passed, zero failed. An earlier run before compiled API routes existed failed on missing build outputs; the post-build run passed.
- ESLint passed. Production build passed, including type checking and 95 generated static pages. The restricted first build could not download existing Google Fonts; the network-enabled build succeeded.
- Generated HTML for all three pages contains exactly one H1, its self-canonical, FAQ structured data, and the recovery section.
- Desktop plumbing and mobile HVAC sections visually inspected in a local production-build preview. No form submitted. Browser viewport restored afterward.
- Git diff whitespace check passed. Existing package-type and stale Browserslist-data warnings were not changed in this scoped patch.
- Claude returned a matching blocked receipt: its allowlist prevented reading the isolated review brief. No Claude output was applied. Grok was not run because the hard spending-cap prerequisite remained unverified. No independent-agent approval is claimed.
