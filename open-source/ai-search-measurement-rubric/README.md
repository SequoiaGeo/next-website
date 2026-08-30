# AI Search Measurement Rubric

A public-ready codebook and data structure for recording AI-assisted search observations without confusing a citation, mention, recommendation, referral visit, inquiry, qualified lead, or job booked.

Status: staged locally for review. This package has not been published to GitHub.

## What is included

- `CODEBOOK.md`: stage definitions and coding rules.
- `observation-schema.json`: machine-readable schema for prompt observations.
- `example-observations.csv`: fictional example rows with no customer or prospect information.
- `LICENSE`: MIT license for reuse with attribution encouraged in the project documentation.

## Core rule

Each field records one observable stage. Never infer one stage from another.

- A cited page is not automatically a provider recommendation.
- A referral visit is not automatically an inquiry.
- An inquiry is not automatically a qualified lead.
- A calendar interaction is not automatically a booking.
- A qualified lead is not automatically a job booked.

## Suggested collection protocol

1. Freeze the prompts and inclusion rules.
2. Use a fresh session with memory disabled where available.
3. Record platform, product, app or web surface, account state, visible search state, device, geography, location method, date, and time.
4. Run each frozen prompt in separate fresh sessions. Treat repeats as correlated stability observations, not independent trials.
5. Archive the full response privately before coding.
6. Record visible citations and provider names.
7. Have a second person independently code at least 20 percent of observations and preserve both decisions.
8. Report misses and observed variance.

Use a pre-registered frozen core for longitudinal comparison and a separate rotating arm for new questions. Never pool the two panels into one trend line. A neutral panel is a controlled condition, not a measure of total homeowner behavior or total AI demand.

## Privacy

The schema is designed for public-surface observations. Do not add personal contact information, private customer data, credentials, account identifiers, private prompts, or unpublished customer outcomes.

