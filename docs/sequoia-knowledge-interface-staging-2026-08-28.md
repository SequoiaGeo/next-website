# Sequoia Knowledge Interface staging verification

Date: August 28, 2026

Environment: local production build, served only on loopback addresses. Production was not changed.

Reference: [OpenAI Site tools documentation](https://learn.chatgpt.com/docs/webmcp)

## Completed checks

| Area | Result | Evidence |
| --- | --- | --- |
| Focused test suite | Pass | All Sequoia Knowledge Interface catalog, source, safety, analytics, and prepare-only assertions passed. |
| Lint | Pass | The repository lint command completed without an error. |
| Production build | Pass | Next.js compiled, type checked, and generated the site successfully with the feature off by default. |
| Feature-off status | Pass | The status route returned disabled, no-store, and noindex behavior when the opt-in flag was absent. |
| Site-tool discovery | Pass | The Codex desktop built-in browser listed all seven top-level site tools on the enabled local build. |
| Cited read tools | Pass | Published pricing and service-fit calls returned the catalog version, public boundary, and visible-page citations. |
| Ask Sequoia | Pass | A published-pricing question returned a cited catalog answer. An instruction-shaped request returned a catalog refusal. |
| Prepare-only consultation | Pass | The tool returned `prepared_not_submitted`, created a same-tab draft, disclosed the 30-minute retention period, and made no submission. |
| Human review boundary | Pass | The contact page showed that nothing had been sent, allowed editing, and cleared untouched prepared context without a request. |
| Killed mode at page load | Pass | With both the opt-in flag and kill switch set, status was disabled, Ask Sequoia showed its disabled state, and the browser reported no site tools. |
| Private-data boundary | Pass | No form was submitted, no contact details were supplied to a site tool, and raw question or answer content was excluded from knowledge analytics. |
| Unsupported protocols | Pass | Release one contains no remote MCP server, NLWeb endpoint, A2A interface, or `HEARTBEAT.md` file. |

## Remaining production gates

1. Confirm live analytics delivery in staging for each separate event stage. Registration remains labeled as a discovery opportunity proxy, not confirmed agent discovery.
2. Run an authorized synthetic contact submission through the durable lead-capture path. Confirm the knowledge source tag and confirm that the browser does not fire the qualified-lead event.
3. Exercise the kill switch against an already-open staging page after the release environment supports changing runtime flags. Confirm tool removal, launcher removal, Ask-page disablement, and stored-draft clearing after the next status check.
4. Resolve or explicitly reconcile the unrelated existing repository test failure in `scripts/audit-campaign-form.test.mjs`, which currently objects to `collectCompany` on `src/app/home-service-marketing-scorecard/page.tsx`.
5. Complete Aaron's review of the human experience and cited facts.

## Production hold

No deployment was performed. Production remains blocked until every remaining gate above passes and Aaron approves the experience.
