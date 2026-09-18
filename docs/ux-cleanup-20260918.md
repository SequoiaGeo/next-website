# September 18 UX cleanup, preview only

Implements the approved audit cleanup. No production release or live synthetic lead was submitted.

## Changes

- Roofing and plumbing comparison headers and recommendation rows stack on small screens. Long article URLs wrap inside prose, without hiding horizontal overflow globally.
- Fixed Ask Sequoia control is desktop-only. Mobile has a direct header Ask link plus menu/footer alternatives.
- Calculator ranges have associated labels and formatted accessible values. Removed nested main elements without changing the calculations or capture logic.
- Explicit light-on-dark eyebrow variant fixes the assessment case study and three comparison heroes. Default light-section styles remain unchanged.
- Homepage retains Get Recommended by AI, founder credentials, website-entry form and intro video. Shorter copy/type moves the form higher.
- Play control moves below the poster wording. Playback remains user initiated, autoplay disabled.
- Snapshot CTAs use the emailed assessment name; contact heading explicitly offers a 15-minute call, with a separate emailed assessment link.
- Pricing, backend handlers, consent state, tracking keys and submitted payload fields are unchanged.

## Checks

- Final production build passed, including TypeScript validation and 98 generated static entries. Existing Browserslist freshness warning remains; no dependency update performed.
- 27 tests passed: 4 scoped UI regression contracts plus 23 existing assessment, mocked API/CRM and query-recording tests.
- An intermediate API test run failed because dev mode had replaced the production build artifacts. Rebuilt with dev stopped, reran all 27 successfully. This was not a production API failure.
- Production preview checked at widths 320, 375, 390, 768, 1024 and 1366 for homepage, roofing comparison, plumbing comparison and tracking article. No horizontal overflow in these 24 final observations.
- At 1366 x 768 the complete homepage assessment button ends at approximately y=567px, versus below the original viewport. On 390px it ends around y=656px; smaller screen heights may still require scrolling.
- Both calculator templates checked at 320, 390, 768 and 1366. One main landmark, each range has one associated label and formatted value text.
- Safe first assessment step tested with example.com: details appear, first-name focus, email input and unchecked optional marketing consent retained. No final submission.
- Case-study eyebrow computed color is rgb(200,237,210) on rgb(13,35,24), replacing the previously low-contrast green.
- Screenshots reviewed on desktop and narrow mobile; no physical-device or full screen-reader certification claimed.

## Review and remaining boundary

Claude remained unavailable after its audit authentication failure, so Codex implemented and verified directly. Grok challenged mobile help discovery and CSS scope. A direct mobile header link was added, and contrast changes use explicit variants rather than changing the whole stylesheet cascade. Other speculative conversion concerns remain measurement hypotheses, not established regressions.

The live email/CRM/booking delivery test remains unperformed and requires approval. The preview does not establish delivery success. Production publishing remains a separate approval step. Leave the larger service-page content restructuring for measured follow-up, not this defect cleanup.
