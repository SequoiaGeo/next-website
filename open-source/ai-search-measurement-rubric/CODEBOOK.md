# Codebook

## Observation stages

| Field | Code as true only when |
| --- | --- |
| `mentioned` | The provider appears anywhere in the response. |
| `recommended` | The response presents the provider as a plausible company to hire. |
| `primary_recommendation` | The provider is first or is the clearest recommended company. |
| `provider_url_cited` | A provider-owned URL appears as a visible source. |
| `independent_source_cited` | A visible source is independent of the provider. |
| `absent` | The provider is neither mentioned nor recommended. |

`primary_recommendation` requires `recommended=true`. `recommended=true` requires `mentioned=true`. A cited provider URL does not require the provider to be mentioned or recommended.

## Source types

- `provider_owned`
- `business_profile`
- `official_record`
- `independent_editorial`
- `association_or_partner`
- `directory_or_marketplace`
- `review_platform`
- `forum_or_social`
- `unsupported_or_unresolved`

## Evidence state

- `original`: complete output preserved from the observed session.
- `partial`: part of the observed output is preserved.
- `reconstructed`: recreated later and not the original artifact.
- `recalled`: reported from memory.
- `unavailable`: no artifact is available.

Public benchmark results should use `original` observations. The other states belong in intake or contextual logs and must not be mixed into the controlled panel.

## Coding disagreements

Record both codes before discussion. Resolve against this codebook. Preserve the disagreement count in the quality-control summary.

At least 20 percent of controlled observations should receive an independent second code. Preserve the initial code, second code, adjudicated code, reviewer identifiers, and reason for any change.

## Confidence labels

- `recorded`: directly logged inside a named instrument, within that instrument's stated coverage.
- `observed`: preserved under a documented prompt and session protocol on a stated date.
- `inferred`: supported by evidence only when the assumption connecting the evidence is stated.
- `unknown`: no available instrument or identity-level join can verify the claim.

These labels describe the claim, not the quality of the business. Do not promote `inferred` or `unknown` evidence to `recorded` or `observed` because the conclusion seems likely.

## Commercial outcomes

Commercial outcomes should live in a separate operating system. Join them to a prompt observation only when an identity-level source artifact supports the connection. Do not infer a qualified lead from a Clarity event, analytics referral, or calendar interaction.

