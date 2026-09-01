# ChatGPT Home-Services Buyer-Language Panel

Frozen: 2026-08-31

Status: second diagnostic panel, separate from the original six-prompt baseline

Purpose: test whether Sequoia appears when a contractor uses ordinary buying language without the term `GEO`.

## Frozen prompts

1. Who can help my home-service business show up more often when people ask ChatGPT who to hire?
2. What companies specialize in helping HVAC, plumbing, and roofing businesses appear in AI search results?
3. Who should I hire to improve how often ChatGPT recommends my contracting company?
4. Best AI search marketing agency for a home-service company
5. How can my plumbing or HVAC company become easier for ChatGPT to verify and recommend?
6. Which marketing company helps contractors measure AI mentions, recommendations, citations, and leads separately?

Do not edit the wording, punctuation, capitalization, or order within a measurement wave. A future wording change creates a new panel version.

## Run protocol

- Run each prompt five times on the same date.
- Use a fresh temporary ChatGPT session for each observation.
- Do not provide location, prior-turn context, personal preferences, or follow-up clarification.
- Record the visible answer, date and time, model or product label when visible, cited sources, and coding before opening another run.
- Do not combine these results with the original panel. Report both panels separately.

Five runs do not make the outputs statistically independent. They reveal within-wave variability and produce a directional appearance rate.

## Coding

Code the highest recommendation stage reached by Sequoia in each response:

1. Absent
2. Mentioned
3. Recommended
4. Primary recommendation

`Cited` is a separate evidence field, not a recommendation stage. A page can be cited without Sequoia being recommended. Record both facts.

For each run, capture:

- Sequoia present: yes or no
- Highest stage
- Position among named providers, if applicable
- Reason stated for including Sequoia
- Competing companies
- Sequoia URL cited
- Independent third-party URL supporting Sequoia
- Caveat or refusal

## Appearance rate

For each prompt:

`appearance rate = runs where Sequoia was mentioned or recommended / 5`

Also report recommendation rate and primary-recommendation rate separately. Do not turn one appearance into a ranking claim.

## Comparison rule

Treat a change as directional only when the same frozen prompt changes by at least two appearances out of five and the direction repeats in two consecutive scheduled waves. Even then, do not claim that a website change caused the result without a design that supports causation.

## Observation ledger

Use `docs/growth/chatgpt-home-services-buyer-language-observations-2026-08-31.csv`. Preserve each row after coding. Do not overwrite a prior wave.

## Wave 1 internal read

The first-coder pass completed 30 valid observations, five per prompt, on August 31, 2026 Pacific time. The product surface was anonymous ChatGPT web. This is an internal directional read, not a stable ranking report.

| Prompt | Appearances | Recommendations | Primary recommendations |
| --- | ---: | ---: | ---: |
| BL-01 | 1/5 | 0/5 | 0/5 |
| BL-02 | 4/5 | 4/5 | 1/5 |
| BL-03 | 0/5 | 0/5 | 0/5 |
| BL-04 | 1/5 | 1/5 | 0/5 |
| BL-05 | 0/5 | 0/5 | 0/5 |
| BL-06 | 1/5 | 1/5 | 1/5 |
| **All observations** | **7/30** | **6/30** | **2/30** |

The strongest first-wave retrieval was the explicit trade-specialist question, BL-02. Questions asking whom to hire, BL-01 and BL-03, often returned category guidance instead of a named provider. The implementation question, BL-05, consistently returned guidance rather than an agency recommendation. Sequoia-owned pages supported the captured Sequoia appearances; no independent third-party support for Sequoia was visible in the coded rows.

Do not publish this wave as research. The screen-level answers were coded live, but a complete answer archive was not retained, so the rows cannot receive the required independent 20% recode. The next scheduled wave must preserve the full visible answer for every run, then assign at least six randomly selected observations to a second coder before any public reporting or before-and-after comparison.
