# Sequoia Knowledge Interface staging verification

Date: August 28, 2026

Environment: local production build plus a protected Vercel Preview on the `next-website` project. Production was not changed.

Preview branch: `codex/sequoia-knowledge-preview-20260828`

Preview URL: `https://next-website-git-codex-sequoia-knowledge-pre-e9df41-sequoia-geo.vercel.app`

Reference: [OpenAI Site tools documentation](https://learn.chatgpt.com/docs/webmcp)

## Completed checks

| Area | Result | Evidence |
| --- | --- | --- |
| Focused test suite | Pass | All 24 Knowledge Interface, lead-capture, and audit-campaign assertions passed after the homepage integration. |
| Lint | Pass | The repository lint command completed without an error. |
| Production build | Pass | Next.js compiled, type checked, and generated the site successfully with the feature off by default. |
| Complete repository tests | Pass | All 76 repository tests passed after the production build produced the compiled API fixtures. |
| Audit campaign regression | Reconciled | The earlier `collectCompany` failure came from an unrelated untracked scorecard page on the dirty development branch. The clean release branch is based on verified `origin/main`, excludes that page, and passes `scripts/audit-campaign-form.test.mjs`. |
| Feature-off status | Pass | The status route returned disabled, no-store, and noindex behavior when the opt-in flag was absent. |
| Site-tool discovery | Pass | The Codex desktop built-in browser listed all seven top-level site tools on the enabled local build. |
| Cited read tools | Pass | Published pricing and service-fit calls returned the catalog version, public boundary, and visible-page citations. |
| Ask Sequoia | Pass | A published-pricing question returned a cited catalog answer. An instruction-shaped request returned a catalog refusal. |
| Homepage conversation surface | Pass | The enabled local runtime rendered one inline Sequoia-branded question panel after the early lead form and client proof, with no duplicate homepage launcher. |
| Homepage guardrails | Pass | Pricing and AI-search questions returned cited catalog answers. Private contact information, an unsupported weather question, and instruction-shaped input were refused. The ninth rapid question returned the session-limit response. |
| Privacy-safe measurement | Pass | Panel view, answer, refusal, citation, and human-handoff stages carry allowlisted metadata and distinct surface names. Raw questions and answers remain excluded. |
| Human handoff | Pass | The answer states that no question or contact information was sent and links to the existing contact page without submitting. |
| Prepare-only consultation | Pass | The tool returned `prepared_not_submitted`, created a same-tab draft, disclosed the 30-minute retention period, and made no submission. |
| Human review boundary | Pass | The contact page showed that nothing had been sent, allowed editing, and cleared untouched prepared context without a request. |
| Killed mode at page load | Pass | With both the opt-in flag and kill switch set, the homepage panel and launcher were absent and the browser reported that all seven site tools were removed. |
| Private-data boundary | Pass | No form was submitted, no contact details were supplied to a site tool, and raw question or answer content was excluded from knowledge analytics. |
| Unsupported protocols | Pass | Release one contains no remote MCP server, NLWeb endpoint, A2A interface, or `HEARTBEAT.md` file. |

## Remaining production gates

1. Confirm live analytics delivery in the protected Preview for each separate event stage. Registration remains labeled as a discovery opportunity proxy, not confirmed agent discovery.
2. Run an authorized synthetic contact submission only after Aaron explicitly approves a test marker. Confirm the knowledge source tag and confirm that the browser does not fire the qualified-lead event.
3. Complete the protected Preview desktop and mobile review after the updated commit deploys.
4. Complete Aaron's review of the human experience and cited facts.

## Production hold

Only protected Preview deployments were performed. Production remains blocked until every remaining gate above passes and Aaron approves the experience.
