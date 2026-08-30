# AI Search Measurement Operations

Status: internal operating package

Owner: Sequoia GEO

Version: 1.0

Last revised: 2026-08-30

## Purpose

This package turns Sequoia GEO's public AI Search Measurement Methodology into a repeatable operating process. It preserves what was asked, the conditions under which it was asked, what appeared, how it was coded, and what the evidence permits Sequoia to claim.

The package supports AI Search Snapshots, paid baselines, ongoing observation waves, and the Home Services AI Recommendation Report. A snapshot is a bounded public-surface review. A baseline is a pre-registered measurement wave intended for later comparison.

## Governing position

Sequoia establishes what is true, corrects what is broken, and verifies the result before claiming marketing success.

An AI observation is not a universal rank. Repeated runs are correlated stability observations, not independent trials. A neutral prompt panel measures a controlled condition, not total homeowner behavior or total AI demand. Generated-answer evidence and business-outcome evidence remain separate unless an identity-level source artifact joins them.

## Package contents

- `MEASUREMENT-RUNBOOK.md`: gates and execution sequence.
- `prompt-panel-template.csv`: frozen, rotating, and reference prompt registration.
- `observation-wave-template.csv`: one row per prompt run, including platform controls, preserved-artifact references, coding, and exclusions.
- `second-coder-review-template.csv`: independent coding, adjudication, and agreement record.
- `client-evidence-index-template.md`: client-visible artifact index with privacy controls.
- `claim-register-template.csv`: evidence class, permitted wording, and prohibited inference.
- `../../../open-source/ai-search-measurement-rubric/`: public codebook, schema, and fictional example observations.

## Evidence classes

- `Recorded`: directly logged inside a named instrument, within that instrument's stated coverage.
- `Observed`: preserved under a documented protocol on a stated date.
- `Inferred`: supported by evidence only when the connecting assumption is stated.
- `Unknown`: no available instrument or identity-level join can verify the claim.

## Required folder structure

Create one private root per client or research project. Never store credentials or personal contact data in the evidence package.

```text
ai-search-measurement/
  registration/
  waves/
    YYYY-MM-DD-wave-id/
      controls/
      artifacts-private/
      observations/
      quality-control/
      client-visible/
  claims/
  corrections/
```

The client-visible folder contains only approved indexes, redacted artifacts, and reports. Original outputs remain private unless the applicable agreement and written permission permit disclosure. Each indexed artifact carries a SHA-256 hash so the preserved item can be matched to the claim without exposing its contents.

## Execution gate

Do not collect reportable observations until the business or market, prompt frame, panel arms, platform panel, session controls, provider universe when applicable, reference design, collection dates, primary coder, and independent second coder are registered. Do not describe post-work movement without a frozen core and an appropriate reference, such as reference prompts, untreated pages, or a no-intervention arm. A reference condition must use comparable collection controls and does not by itself establish causal lift.
