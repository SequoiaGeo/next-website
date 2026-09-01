# Sequoia Knowledge Interface release plan

Status: staging candidate only. Do not deploy to production until Aaron reviews the experience and every release gate passes.

## Release-one boundary

The interface uses one bundled, version-controlled catalog at `src/data/sequoia-knowledge.catalog.json`. The catalog is imported into the site bundle. It is not exposed as a JSON endpoint.

Ask Sequoia is deterministic. It does not call an AI model or external answer service. External model spend is capped at zero. Questions and answers remain in React state and never enter a URL. The dedicated `/ask-sequoia` page is noindex. The homepage remains indexable, but no visitor-specific answer is rendered until a visitor asks a question. Operational API responses are no-store with an `X-Robots-Tag` noindex header.

Release one does not include remote MCP, NLWeb, A2A, or a published `HEARTBEAT.md` file.

## Controls

| Control | Release-one behavior |
| --- | --- |
| Feature flag | `SEQUOIA_KNOWLEDGE_ENABLED=true` enables the experience. Missing or any other value stays off. |
| Kill switch | `SEQUOIA_KNOWLEDGE_KILL_SWITCH=true` overrides the feature flag. Clients recheck status on load, every 60 seconds, and when the tab becomes visible. |
| External model spend | Zero. No model SDK, model credential, or answer API is part of the feature. |
| Tool rate limit | 20 tool calls per minute and 50 per browser-tab session. This is an advisory client limit because every tool is local and has no server cost. |
| Ask rate limit | 8 questions per five minutes and 25 per browser-tab session. |
| Consultation preparation limit | 3 preparations per 30 minutes and 5 per browser-tab session. |
| Status endpoint limit | 600 requests per minute per running server instance. The endpoint returns only release status. |
| Consultation retention | Structured, non-contact selections stay in `sessionStorage` in the same tab for up to 30 minutes. They clear on expiry, accepted submission, visitor clear, kill switch, or status failure. An open form clears untouched prepared text but preserves text the visitor edited. |
| Submission boundary | The site tool only prepares a draft. The visitor must use the same tab, review or edit the normal form, add contact details personally, and press submit. |
| Prompt-injection boundary | Questions are classified by deterministic code. Instruction-shaped input is refused. Text is never evaluated, interpolated into instructions, or sent to a model. |

The client rate limits are not a server security boundary. Do not add a paid API, state-changing service, or external model behind these tools without a server-side identity and rate-limit design.

## Site tools

The root client component registers these tools through top-level `document.modelContext.registerTool` when the status endpoint says the feature is active:

1. `get_sequoia_services`
2. `get_published_starting_prices`
3. `check_service_fit`
4. `get_ai_search_methodology`
5. `get_case_study_evidence`
6. `get_contact_options`
7. `prepare_consultation_request`

Every tool result includes the catalog version, the public boundary statement, and visible-page citations when a supported fact is returned. Inputs use narrow schemas with `additionalProperties: false`. The consultation tool accepts enums only.

| Tool | Privilege and side effect |
| --- | --- |
| `get_sequoia_services` | Read-only bundled catalog lookup. |
| `get_published_starting_prices` | Read-only bundled catalog lookup. Starting prices are not quotes. |
| `check_service_fit` | Read-only deterministic evaluation of structured published criteria. Human review remains required. |
| `get_ai_search_methodology` | Read-only bundled catalog lookup. |
| `get_case_study_evidence` | Read-only bundled catalog lookup with approved visible citations. |
| `get_contact_options` | Read-only bundled catalog lookup. It does not contact Sequoia. |
| `prepare_consultation_request` | Writes structured enum selections to same-tab `sessionStorage` for up to 30 minutes. It makes no request, sends no message, books nothing, and requires the visitor to review and submit the normal form. |

## Analytics stages

| Event | Meaning | Not evidence of |
| --- | --- | --- |
| `sequoia_knowledge_panel_view` | The enabled question panel became available on a named surface once per tab session. | A question, answer, inquiry, or lead. |
| `sequoia_tool_availability` | All seven tools registered without throwing in a supported browser. | An agent discovering or calling a tool. |
| `sequoia_tool_discovery_proxy` | Registration completed, used as an explicitly labeled discovery opportunity proxy. | Confirmed agent discovery. |
| `sequoia_tool_call` | A registered handler was invoked. | A useful answer, inquiry, or lead. |
| `sequoia_tool_denied` | A call was blocked by status, input, or budget. | An unsupported-fact refusal. |
| `sequoia_tool_error` | Registration or execution failed. | A refusal. |
| `sequoia_knowledge_answer` | The catalog returned a supported answer or tool result. | A recommendation, inquiry, or lead. |
| `sequoia_knowledge_refusal` | Ask Sequoia refused unsupported or instruction-shaped input. | A tool failure. |
| `sequoia_citation_click` | A person opened a cited visible page. | A form start. |
| `sequoia_knowledge_handoff_click` | A person used the human handoff after an answer or refusal. | A submitted inquiry, booking, or qualified lead. |
| `sequoia_consultation_form_start` | A visitor began the contact form after a knowledge draft was applied. | An accepted submission. |
| `sequoia_consultation_accepted_submission` | The existing lead policy confirmed a durable accepted capture with a lead id. | A qualified lead. |
| `sequoia_qualified_lead` | The operating system later confirms the written qualified-lead definition. | A browser form success alone. |

Raw questions, answer text, contact fields, draft text, email addresses, phone numbers, and names are excluded from the knowledge analytics. After a visitor submits a question, a separate same-origin server route recomputes its catalog classification and sends a private internal record for website-improvement review. Typed questions and suggestion-button clicks are labeled separately. The Ask input, answer region, and prepared message field remain marked for Clarity masking.

## Homepage surface

When the release flag is active and the kill switch is not active, the homepage renders the shared question panel after the early lead form and client proof. The hero, early lead form, and proof order remain unchanged. The homepage surface and the dedicated `/ask-sequoia` page use the same deterministic engine, catalog, citations, refusal rules, question limit, rate limits, masking, and status checks.

The four homepage suggestions route to separate approved answers: published pricing, preliminary service fit, AI-search measurement methodology, and the free marketing audit. The free-audit answer is sourced to `/audit` and explains the public-surface review, the written findings, the five prioritized fixes, and when deeper account access may be discussed. A suggestion is not a form submission or a booking.

The homepage identifies analytics with `surface: homepage_inline`; the dedicated page uses `surface: ask_sequoia`. The floating launcher is suppressed on the homepage to avoid two entry points and to avoid competing with the fixed mobile call and booking bar. If the feature is off, the server does not render the homepage panel. If a later status check disables the feature, the embedded client returns no interactive surface.

The prompt tells visitors not to enter contact, account, payment, or confidential information. Local deterministic input checks refuse common email addresses, phone numbers, and payment-card-shaped numbers. The text still stays in temporary page state and is never sent to an answer service.

## Scheduled freshness check

`.github/workflows/sequoia-knowledge-freshness.yml` runs the catalog test on every pull request, every Monday, and on manual request. The test fails when:

- the review-valid-until date expires;
- a visible source file or route disappears;
- a source anchor no longer matches;
- one of the seven tools is missing;
- prohibited claims, client-company revenue, banned style words, or nonzero model spend enter the catalog;
- deterministic refusal, noindex, masking, analytics separation, or prepare-only controls regress.

Updating a visible claim requires updating the catalog and its source anchors in the same reviewed change. Do not extend the freshness date without reviewing every catalog section against its visible page.

## Staging gates

Run all gates with a staging or local build, never by changing production first.

1. Build: `npm run build` passes with the feature off by default.
2. Source consistency: `node --test scripts/sequoia-knowledge-interface.test.mjs` and the existing public-claims suites pass.
3. Security: unsupported questions refuse, instruction-shaped questions refuse, schemas reject extra fields, no question appears in the URL, no knowledge answer endpoint exists, and the consultation tool makes no request.
4. Privacy: Clarity masking is present, analytics receive no raw content, submitted-question recording is disclosed before submission and in the privacy policy, the draft expires, recording failure does not block the answer or the normal contact form, and opening the review in a new tab is disclosed as unsupported.
5. Tool behavior: in the current ChatGPT desktop built-in browser with a supported model, confirm all seven tools appear under Site tools, read calls return citations, invalid input is denied, and prepare creates a same-tab draft without submitting.
6. Human behavior: Ask Sequoia works in a browser without WebMCP support, citations open the visible source pages, and the visitor can edit or clear the prepared context.
7. Analytics: confirm each event above appears as its own event and that availability or registration is not used as the denominator for tool conversion.
8. Submission: use an authorized synthetic lead, verify the durable capture contract and knowledge source tag, then confirm no qualified-lead event is fired by the browser.
9. Rollback: with the feature flag on, turn the kill switch on in the staging runtime and confirm the status endpoint returns disabled, registered tools are removed after the next status check, the launcher disappears, Ask Sequoia changes to its disabled state, and stored prepared context is cleared. Visitor-edited form text must not be erased.

## Production hold

Production remains blocked until the build, security, source-consistency, analytics, and rollback gates pass, the supported ChatGPT site-tool test is documented, and Aaron approves the interface. The environment kill switch takes effect through a Vercel redeployment, so the operational rollback is to enable the kill switch and redeploy or restore the previously verified Production deployment, whichever is faster. Removing `<SequoiaKnowledgeInterface />` from the root layout and the guarded homepage panel from `src/app/page.tsx` is the code rollback.
