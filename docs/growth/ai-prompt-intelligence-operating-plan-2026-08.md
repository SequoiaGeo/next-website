# Sequoia GEO AI prompt intelligence operating plan

As of: 2026-08-20

Purpose: increase the number of qualified prospects who discover Sequoia GEO through AI-assisted search without confusing visibility, citations, referrals, inquiries, and qualified leads.

## Operating outcome

The business outcome remains a rolling average of three qualified website leads per week. AI recommendation share is a diagnostic leading indicator, not the goal by itself.

Qualification, funnel definitions, and the verified baseline live in `docs/growth/three-qualified-leads-weekly.md`. Recommendation-stage definitions and the frozen 15-prompt panel live in `docs/growth/ai-recommendation-measurement-protocol-2026-08.md`.

## Tool stack

### Use now

| Tool or source | What it can answer | What it cannot establish | Cadence |
| --- | --- | --- | --- |
| Google Search Console | Search clicks, impressions, index coverage, page visibility, and Google's generative AI visibility report | The prompts that produced generative AI impressions or a vendor recommendation | Weekly |
| Bing Webmaster Tools AI Performance | Citations, cited pages, and sampled grounding queries when available | A full market-wide prompt volume estimate or a qualified lead | Weekly |
| GA4 | Captured `generate_lead` events, known AI referrer fields, landing pages, and aggregated acquisition behavior | Every referral, prospect identity, or qualification | Weekly |
| Microsoft Clarity | Session friction, scroll, dead clicks, and form behavior | A completed booking or qualified lead without an identity-level join | Weekly, diagnostic only |
| HighLevel and lead notification email | Contact record, append-only lead note, qualification, and lead-level attribution evidence | A recommendation unless the prospect reported it or supplied an artifact | Reconcile continuously |
| Controlled manual prompt panel | Mentions, recommendations, primary position, citations, and competitors for a frozen prompt set | Search volume or a stable universal ranking | Baseline, then 60 to 90 days after material indexing changes |
| Sales calls and intake | The buyer's own words, business problem, assistant, prompt, and reported recommendation | A repeatable channel from one anecdote | Every qualified conversation |

### Build now, activate after the conversion release gate

The website now supports an optional, collapsed discovery section with these controlled fields:

- `discoverySource`
- `reportedAiAssistant`
- `reportedAiQuestion`

The server sanitizes the fields, includes them in the internal notification, and appends them to the HighLevel evidence note. The prompt is not sent to GA4 and is never converted into a raw-value tag. GA4 receives only the controlled discovery category and assistant.

The UI is disabled unless `NEXT_PUBLIC_REPORTED_DISCOVERY_INTAKE=true`. Do not enable it before the seven-complete-day conversion hold that began after the 2026-08-15 release has passed and the measurement gate is still healthy. Enabling the field requires a new deployment.

### Paid tool gate

Do not begin an annual subscription during this implementation.

Run the free baseline first. Consider one trial of a commercial AI visibility platform only when all of these are true:

1. The 15-prompt ledger is complete.
2. One owner is scheduled to export prompt, citation, and competitor data before the trial ends.
3. The trial can be cancelled without an annual commitment.
4. The tool supplies information the free stack does not, such as broader prompt research or competitor citation patterns.
5. A written stop rule exists before the trial starts.

Current candidates to evaluate at that gate:

- Semrush AI Visibility Toolkit: candidate for a time-boxed trial because it includes prompt research and recurring monitoring. Verify current terms at `https://www.semrush.com/kb/1505-ai-seo-toolkit` before signup.
- Profound: useful for enterprise-scale answer-engine monitoring, but public product descriptions do not establish that lower tiers provide the prompt-demand data needed here. Verify at `https://www.tryprofound.com/`.
- Ahrefs Brand Radar: large prompt and citation corpus, but broader than the immediate Sequoia need. Verify current packaging at `https://ahrefs.com/brand-radar`.

## Live visibility snapshot, 2026-08-20

These are visibility measures, not recommendations, inquiries, or qualified leads.

### Google Search Console

Source: Google Search Console, `sc-domain:sequoiageo.com`, Generative AI report, current 28-day view covering 2026-07-22 through 2026-08-18, read in-account on 2026-08-20.

- 2,950 total impressions across 39 pages.
- The leading pages were `/best-hvac-marketing-agencies` (569), `/geo-for-plumbers` (336), `/hvac-statistics` (269), `/best-plumbing-marketing-agencies` (257), `/blog/local-seo-competitor-analysis` (181), `/blog/best-plumbing-seo-keywords` (158), `/geo-for-restoration` (139), `/best-roofing-marketing-agencies` (133), `/blog/local-seo-for-plumbers` (108), and `/roofing-seo` (96).

### Bing Webmaster Tools

Source: Bing Webmaster Tools, `https://www.sequoiageo.com/`, AI Performance, Microsoft Copilots and Partners, current 30-day view covering 2026-07-20 through 2026-08-18, read in-account on 2026-08-20.

- 64 total citations across 6 cited pages, with an average of 1 cited page as displayed by Bing.
- The leading pages were `/best-roofing-marketing-agencies` (14), `/best-hvac-marketing-agencies` (14), `/hvac-statistics` (14), the Google Business Profile tagged homepage (8), `/best-plumbing-marketing-agencies` (8), and `/blog/what-is-a-geo-agency` (2).

### Working interpretation

Comparison pages, original statistics, and focused service pages are currently producing most measured AI visibility. That supports strengthening useful evidence and buyer-facing comparisons. It does not establish that the pages are causing recommendations or qualified leads. The refreshed guides should be observed after deployment and indexing before they are credited with any result.

## Measurement correction, 2026-08-20

Source: Google Analytics property `sequoiageo.com`, Admin, Events, read and updated in-account on 2026-08-20.

- `ai_referrer_seen` was confirmed as a key event and was unmarked. It remains an arrival signal, not a conversion.
- `generate_lead` remains marked as a key event and remains the successful-form conversion signal.

## Weekly operating cadence

### Monday, 30 minutes

1. Reconcile accepted website forms, bookings, attributable calls, and qualification in HighLevel.
2. Update qualified leads, held meetings, and jobs booked in the weekly scorecard.
3. Review Search Console and Bing page changes. Do not interpret one day's movement.

### Wednesday, 30 minutes

1. Review the last seven days of Clarity sessions on commercial pages.
2. Identify one repeated friction pattern supported by multiple sessions.
3. Make no site change from one unusual recording.

### Friday, 45 minutes

1. Review new buyer questions from calls, emails, and intake.
2. Add candidate questions to a private queue, not directly to the frozen prompt panel.
3. Select no more than one existing page to strengthen with first-hand evidence.
4. Record the page, question, evidence source, expected buyer value, and measurement window before editing.

## Controlled recommendation baseline

Use `docs/growth/ai-recommendation-baseline-ledger-2026-08.csv` for the 15 frozen prompts.

For ChatGPT Search:

1. Use a fresh, logged-out session with memory disabled where available.
2. Hold geography and device assumptions constant.
3. Run every prompt five independent times.
4. Archive the complete response privately with date, time, and visible search state.
5. Code each answer as mentioned, recommended, primary recommendation, cited, or absent.
6. Record every visible citation and other provider named.
7. Have a second person code a sample before drawing a conclusion.

Keep Perplexity, Copilot, Gemini, Claude, and other assistants in platform-specific contextual logs. Do not average them into the ChatGPT result.

## Citation-source harvest

For every citation appearing in at least two controlled observations, classify the source:

| Source type | Action |
| --- | --- |
| Sequoia first-party page | Improve only when the page has a verified buyer or evidence gap. |
| Search engine business profile | Correct owned facts, services, links, categories, and descriptions. |
| License or official registry | Correct the underlying record through the official process where possible. |
| Independent article or directory | Seek inclusion only when the source has real editorial or market relevance. |
| Forum or social discussion | Use as question discovery. Do not manufacture mentions or undisclosed promotion. |
| Unsupported or stale source | Document the contradiction and pursue correction through the legitimate owner. |

Never create fake profiles, planted forum answers, fabricated reviews, undisclosed endorsements, or pages written only to imitate a prompt variation.

## Content decision rules

- Do not create another generic GEO guide while `/contractors-guide-ai-search` and `/ai-website-seo-guide` cover the topic. Strengthen, consolidate, or differentiate the existing pages using URL-level evidence.
- Build around real buyer questions, first-hand operator experience, transparent service scope, pricing, measurement, and documented field notes.
- Keep structured data aligned with visible content. Google does not require special schema for generative AI features.
- Do not publish a guarantee that any assistant will recommend Sequoia GEO.
- Do not use one lead, one citation, or one favorable answer as proof of repeatable acquisition.

## Decision thresholds

- If Sequoia pages are cited but the business is not recommended, prioritize entity consistency and independent source coverage before writing another comparison page.
- If recommendations rise but qualified AI-origin inquiries do not, inspect offer fit and conversion before optimizing for more mentions.
- If AI-origin qualified inquiries repeat across at least four weeks, expand the winning question and source pattern into one additional evidence-backed page or public profile improvement.
- If the commercial tool trial does not reveal actionable prompt, citation, or competitor patterns beyond the free stack, cancel before paid renewal.

## Primary platform references

- Google Search Central AI features: `https://developers.google.com/search/docs/appearance/ai-features`
- OpenAI publisher and developer FAQ: `https://help.openai.com/en/articles/12627856-publishers-and-developers-faq`
- Bing Webmaster Tools AI Performance: `https://blogs.bing.com/webmaster/February-2026/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview`
