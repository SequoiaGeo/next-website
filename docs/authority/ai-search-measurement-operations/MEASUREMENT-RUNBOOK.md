# AI Search Measurement Runbook

## 1. Define the decision

Write the exact business question the measurement must support. Examples include documenting current visibility, identifying public contradictions, comparing platform behavior, or checking movement after an implementation period.

Record what the work will not establish. Prohibited default claims include total AI demand, universal rank, complete attribution, hidden fan-out knowledge, and causal lift.

## 2. Register the design

Before observing reportable answers, register:

- Business, trade, market, and service-area boundaries.
- Frozen core, rotating arm, control prompts, and reference arm.
- Prompt families covering emergency or planned work, price, trust, neighborhood or metro language, provider comparisons, and bilingual language when appropriate.
- Platform and visible product panel.
- App or web surface, account state, memory state, search or browse state, device, geography, and location method.
- Collection window, repeat count, artifact location, primary coder, second coder, and publication status.
- Provider universe and conflict review for comparative research.

Do not pool the rotating arm with the frozen core. Rotating questions discover new language. Frozen questions support longitudinal comparison.

## 3. Run discovery separately

Use provisional discovery prompts only to confirm that the market and products produce useful local-provider answers. Archive them and mark them `discovery_only`. Do not count them in the registered wave. Freeze the reportable panel after discovery and before seeing reportable results.

## 4. Capture session controls

Create one row in `observation-wave-template.csv` for every prompt run, including each repeat and retry. If a control changes during the wave, record a new configuration ID and the deviation. Do not silently combine results collected under different conditions.

Where possible, use a fresh session with memory disabled. A logged-out session is a controlled condition, not a claim about every customer's experience.

## 5. Preserve before coding

For every run:

1. Save the complete answer, visible citations, timestamp, platform, visible product, and session state.
2. Assign an artifact ID that does not expose personal or client-sensitive information.
3. Save the artifact in the private evidence folder and record its SHA-256 hash.
4. Add the observation record only after the artifact is preserved.

Never select only favorable screenshots. Preserve misses, unresolved answers, and retrieval failures.

## 6. Code the observation

Use the public codebook and schema. Record mentioned, recommended, primary recommendation, provider-owned citation, independent citation, absence, source types, and service-area accuracy separately.

Classify sources as provider-owned, business profile, official record, independent editorial, association or partner, directory or marketplace, review platform, forum or social, or unsupported or unresolved.

Do not infer recommendation from a citation. Do not infer a visit from a recommendation. Do not infer an inquiry, qualified lead, or job booked from analytics activity.

## 7. Perform second-coder review

Select at least 20 percent of observations using a documented sampling rule. The second coder works from the preserved artifact and codebook without seeing the desired conclusion. Preserve:

- Initial code.
- Second code.
- Agreement or disagreement by field.
- Adjudicated code.
- Adjudicator and reason.

The initial coder and second coder must be different people for the same observation. If no independent second coder is available, label the wave `single-coded` and do not use it for a client-facing benchmark, consistency claim, or post-work comparison.

Calculate exact agreement separately for mentioned, recommended, primary recommendation, source type, service-area accuracy, and confidence class. Any unresolved disagreement affecting a proposed headline claim blocks that claim. If agreement on any of those commercially material fields is below 80 percent in the reviewed sample, pause release, clarify the codebook, and recode a newly selected sample before reporting the wave.

If disagreements expose an unclear definition, pause interpretation, update the codebook through the correction process, and recode the affected sample.

## 8. Analyze at the correct unit

The prompt-platform cell is the primary analysis unit. Repeats within that cell describe answer stability and remain correlated. Report platforms separately. Report frozen, rotating, and reference arms separately. Do not run significance tests that assume repeat runs are independent.

## 9. Separate the evidence chains

Generated-answer chain:

1. Eligibility.
2. Citation.
3. Mention.
4. Recommendation.

Business-outcome chain:

1. Identifiable referral.
2. Inquiry.
3. Qualified lead.
4. Job booked.

Most AI products do not preserve an identity-level join from an answer to a later visitor. Mark that gap `Unknown` unless an approved source artifact establishes the join.

## 10. Build the client-visible evidence index

List each claim, its evidence class, collection date, source or artifact ID, coverage boundary, and client-visible artifact. Redact personal information, account identifiers, credentials, and private prompts. The index should let the client verify the evidence without exposing unrelated private artifacts.

## 11. Register every published claim

Use `claim-register-template.csv`. Each claim requires:

- Evidence class.
- Named source or artifact.
- Coverage boundary.
- Permitted wording.
- Prohibited inference.
- Reviewer and review date.

If a source is unavailable or conflicts with another source, mark the claim `Unknown` or `Inferred`. Do not resolve uncertainty through confident wording.

## 12. Describe change carefully

Before saying visibility moved after work, require:

- The same frozen core.
- Comparable platform and session controls.
- A stated observation window.
- A reference design, such as reference prompts, untreated pages, or a no-intervention arm.
- A claim that matches the design.

The reference condition must be outside the work being evaluated and must use comparable platforms, visible products, surfaces, session controls, geography, and collection dates. Use language such as `observed movement within the registered panel`. A reference arm in this operating package controls interpretation, but does not by itself establish causal lift.

## 13. Correct and close

Record changes to prompts, controls, codebook definitions, artifacts, and published claims in the corrections folder. Never overwrite the original observation or initial coding decision. Close the wave only after the second-coder threshold, evidence index, claim register, privacy review, and limitations statement pass.
