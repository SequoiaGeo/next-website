# Home Services AI Recommendation Report

Status: pre-registered research specification

Owner: Aaron Husak, Sequoia GEO

Prepared: 2026-08-20

## Purpose

Produce original, reproducible evidence about how AI-assisted search products recommend home service companies. The report must distinguish a provider mention, provider recommendation, primary recommendation, cited source, referral visit, inquiry, qualified lead, and job booked.

The report is an authority asset only if an independent reader can understand the method, inspect the limitations, and approximately reproduce the observations. It is not a ranking page written to place Sequoia or a client first.

## Release sequence

1. Run one trade and one metro as a pilot.
2. Publish the method, complete results, misses, source classifications, and observed variance.
3. Review legal, privacy, noncompete, and commercial conflicts before naming the pilot market or providers.
4. Expand to additional trades or metros only after the pilot is reproducible and worth updating.

Do not announce a national report before the pilot has been completed and quality checked.

## Pilot decision gate

Select the pilot only after documenting:

- The trade and metro.
- Why buyers in that market would use AI-assisted search.
- Any client, former-company, noncompete, or relationship conflict.
- The provider inclusion rule and official source list.
- Whether publishing provider names creates a material legal or relationship risk.
- The researcher, second coder, collection dates, and available time.
- Fresh market-level demand evidence or a documented reason demand is not being used to select the trade.
- A discovery smoke test showing whether the selected products return named local providers rather than only directories or generic advice.

The default research design is one trade, one metro, 12 commercial prompts, 3 platforms, and 5 fresh-session repeat runs per prompt per platform. That produces 36 prompt-platform cells and 180 coded observations before control prompts. The cell is the primary analysis unit. Repeat runs measure stability and are not assumed to be statistically independent. Change the design only before collection begins and record the reason.

The default platform panel is ChatGPT Search, Google AI Mode, and Perplexity. Record the exact visible product name, account state, search state, and collection date because interfaces and retrieval behavior change. A platform may be replaced before the prompt set is frozen when access or reproducibility fails, but the substitution and reason must be documented.

Run this specification through `docs/authority/ai-search-measurement-operations/MEASUREMENT-RUNBOOK.md`. Use the package templates for panel registration, wave controls, second-coder review, client-visible evidence, and claim limits.

## Research questions

1. How often does each platform name a specific local provider?
2. How often is a named provider recommended rather than merely mentioned?
3. How often does the primary recommendation repeat within the fresh-session stability checks?
4. Which sources are cited when a recommendation appears?
5. How often do provider-owned pages, profiles, official records, directories, reviews, news, and forums appear as sources?
6. Where do platforms disagree about the same trade and market?
7. Which public contradictions are visible in cited or retrieved sources?

## Observation controls

- Pre-register a frozen longitudinal core and a separately reported rotating arm. Never pool the two panels into one trend line.
- Include emergency or planned work, price, trust, neighborhood or metro language, provider comparison, and bilingual language when appropriate to the market.
- Before freezing the final set, run 3 to 5 provisional discovery prompts once per platform to confirm that the market produces named local providers. Archive those results, do not count them in the report, and document any resulting design change.
- Use a fresh, logged-out session with memory disabled where available.
- Hold geography and device assumptions constant.
- Record the platform, visible product, app or web surface, account state, search or browse state, device, geography, location method, date, and local time.
- Run every prompt five times in separate fresh sessions per platform.
- Treat prompt-platform cells as the analysis unit and repeats as a stability measure, not independent trials.
- Preserve the complete output privately before coding.
- Keep platforms separate. Do not average them into one universal rank.
- Have a second person code at least 20 percent of observations.
- Preserve both coding decisions, then resolve disagreement against the public codebook.
- Establish reference prompts, untreated pages, or a no-intervention arm before describing post-work movement.

## Provider inclusion rules

- Use an objective source for the candidate universe, such as an official licensing database or a documented map result set collected on the pre-registered date.
- Do not add or remove providers after observing which companies the assistants prefer.
- Disclose any Sequoia client, former-company, referral, or financial relationship.
- If a conflict cannot be disclosed safely, change the market before collection.

## Public result tables

Every published result must include:

- Prompt family.
- Platform.
- Total prompt-platform cells and repeat observations.
- Mention count.
- Recommendation count.
- Primary recommendation count.
- Citation count.
- Absence count.
- Source-type distribution.
- Observed run-to-run variance.
- Collection dates.

Do not run statistical significance tests that assume the five repeats within a prompt-platform cell are independent.

Do not publish a single composite score unless the formula is registered before collection and every component is visible.

## Source classification

Use these source types:

- Provider-owned page.
- Search engine business profile.
- Official license or government record.
- Independent editorial publication.
- Industry association or partner page.
- Directory or marketplace.
- Review platform.
- Forum or social discussion.
- Unsupported, stale, or unresolved source.

## Claims the report may make

- What appeared within the defined sample.
- Which companies and sources appeared more or less often in that sample.
- How much answers varied within the sample.
- Where platforms agreed or disagreed.
- Which public-source patterns merit further testing.

## Claims the report may not make

- Universal market share.
- Search volume for the prompts.
- A permanent AI rank.
- That one public signal caused a recommendation.
- That a citation, referral, inquiry, or calendar booking is a qualified lead.
- That a company is better because it appeared more often.
- That an official license record is an endorsement or proof of service quality.

## Publication package

- Web report with plain-language findings.
- Public methodology link.
- Downloadable anonymized observation data where provider naming is not appropriate.
- Machine-readable schema and codebook.
- Changelog and correction policy.
- One-page media brief with findings, method, limitations, and contact information.

## Stop rules

Stop or delay publication when:

- The second coder cannot reproduce the stage classifications.
- The prompt set changed after results were observed.
- Provider inclusion cannot be explained objectively.
- A client or former-company conflict cannot be disclosed or avoided.
- The sample is too incomplete to support the planned headline.
- The report depends on private prospect or customer information without written permission.
- Discovery prompts return no useful named local providers across the platform panel.

## Next action

Choose the pilot trade and metro, run the conflict review, and freeze the 12 commercial prompts before collecting any result.
