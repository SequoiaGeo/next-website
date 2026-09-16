# Founder-led homepage preview

Status: Aaron approved publication on September 16, 2026. Release checks and deployment verification are recorded separately below.

Base: verified remote main e7be753, isolated worktree. Existing dirty worktrees are untouched.

## Changes

- Typographic cream/green homepage hero with the approved Get Recommended by AI tagline, owner-focused supporting copy, recommendation limitation, and existing website-first form.
- Header subtitle changed to Marketing Your Home Service Business. Eyebrow reads Built by a home-service owner.
- Real crawlspace photo in a separate operator-background section below client proof.
- First-office photo and contextual caption on About. No claim about when the photograph was taken.
- Clearer scope and progress explanation on the homepage.
- Plumbing-specific homeowner questions in the AI SEO opening, with cross-trade navigation moved below the first explanatory section.

## Verification

- Eight focused tests pass, covering assessment input/consent and preview content contracts.
- Targeted lint and git diff whitespace check pass.
- Production build completed with 98 static pages. A later caption adjustment and hero text/size refinements passed lint and focused tests and rendered in the local development preview.
- Desktop and 390/320-pixel mobile views inspected. No horizontal overflow observed at either mobile size.
- Website example.com advances to details, normalizes to https://example.com, focuses the first-name field, and leaves marketing consent unchecked.
- No final form submission, email or CRM record created.
- Both supplied photos verified loaded. Next Image handles display sizing and optimized delivery.
- Form component, contact API, consent policy, and pricing files remain unchanged relative to base.

## Review notes

Claude delegation unavailable due expired authentication. Grok raised a possible guarantee interpretation of the headline. The approved tagline remains, with the user-approved no-guarantee limitation in the hero assessment panel. Other predictions about conversion were not treated as evidence.

## Before release

- Aaron reviewed and approved the local experience for publication. No video added; planned separately.
- Rebuild the final approved revision and confirm deployment environment flags before publishing. Local preview has no production credentials and the knowledge feature defaults off; its implementation was not changed.
- Preserve the Sunday review baseline and avoid repeated copy changes during the measurement window.
- Only these scoped changes should enter a release, not older unrelated worktrees.

Local preview: http://127.0.0.1:3186/
