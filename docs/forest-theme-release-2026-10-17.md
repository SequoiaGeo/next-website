# Sequoia forest theme release

Aaron approved the sequoia and fog visual concept and explicitly requested publishing it and updating the theme.

## Change

- Static decorative forest hero with live text and booking CTA. Optimized WebP: 306,398 bytes. No animated background.
- Existing Fraunces display font and Inter body font, warm ivory backgrounds, forest ink and amber action buttons. No new font host or dependency.
- Homepage-only transparent navigation, solid on scroll or menu opening. Inner routes remain solid. Paid-route chrome exclusions preserved.
- Founder portrait immediately below the hero, with documented operating background. Original portrait is an existing local asset, framed with CSS.
- Outcome-led services and owner-directed AI execution. Existing dated client results and metric distinctions retained. Shared results disclaimer consolidated on the homepage.
- Existing inquiry submission, booking destination, source tags, consent and conversion acceptance logic retained. Experience label: sequoia-forest-20261017.

## Verification

Production build passed, generating 115 pages. Required catalog checks passed. Public-proof and mocked lead delivery/acceptance tests passed. Final consolidated checks are recorded in the PR.

Browser checks: homepage at 320, 390, 768, 1024 and 1440 pixels. No horizontal overflow. Verified mobile menu and solid scrolled header. At 320 pixels checked service, contact, privacy, both paid snapshot pages and the 404 template, with no horizontal overflow. Paid routes omitted shared navigation. Verified contact booking anchor.

Core palette text contrast: ink on amber 6.45:1, ink on ivory 14.21:1, body green on ivory 6.95:1. These are flat palette measurements, not a complete accessibility audit or a claim of conversion lift.

Pre-existing tests in unchanged production source fail for obsolete pricing expectations and a form qualification-field allowlist that excludes an existing auto-detailing page. They were reproduced against the prior release and are unrelated to this theme. No pricing or form qualification rules were changed. Existing proof and navigation tests were updated to recognize the current content locations and CTA.

## Review

Claude bridge was unavailable with its previously recorded expired OAuth state, so it was not repeatedly retried. Grok review 3300138c-4e9e-9c07-bb0c-88378b13086b emphasized shared-navigation and typography regressions. Added restored-scroll initialization, checked multiple templates, corrected mobile menu positioning and contextual focus contrast. No model statement was treated as evidence of performance.

## Asset provenance and rollback

The decorative forest background was generated from the user-approved visual concept, with all text removed through image generation, then encoded as WebP. It does not represent client work or a factual location claim. Existing founder and client assets remain the factual proof.

Rollback: revert this release commit or PR. No data migration or account settings changed.

## Production font correction

Public verification after PR 42 found that HTML declared generated next/font variable classes different from those in the delivered font CSS. The browser therefore resolved the unset custom properties to its default Times New Roman. Local production output did not reproduce the mismatch. The rollout cause was not established.

The focused correction serves the same existing Inter and Fraunces Latin font assets under stable public URLs and family names, with explicit CSS variables and preload links. It removes dependence on generated font variable classes. Both fonts remain self-hosted, with their upstream SIL Open Font License notices retained in docs/font-licenses. No change to content, lead handling or theme direction.
