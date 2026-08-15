# Grok X SEO Scout Protocol

Status: active discovery process

Purpose: use current X discussion to find SEO and GEO experiments worth verifying, without treating posts, engagement, or model agreement as evidence.

## Weekly cadence

Run one Grok `trends` scan each Thursday covering the previous 14 days. Keep the brief sanitized and ask for no more than five candidate tactics for a solo agency seeking qualified B2B website leads.

Automation updated August 15, 2026: `Operate Sequoia lead and SEO system`. It runs website-lead reconciliation at 7:30 AM and 4:30 PM Pacific. The Thursday morning cycle also runs this X scout, reports the evidence and rejected hype, and prepares a scoped test brief for no more than one passing tactic. It does not change the public site or campaign automatically from X findings.

Require for each candidate:

1. The public X link and post date
2. The claimed mechanism
3. Whether the post provides data, a case example, or only opinion
4. Selection-bias, promotion, bot, and engagement-distortion risks
5. A canonical or primary source that can verify the underlying mechanism
6. A 30-to-60-day page-level test with one defined metric

## Scoring gate

Score each candidate from 0 to 2 on four dimensions:

| Dimension | 0 | 1 | 2 |
|---|---|---|---|
| Evidence | Opinion only | Specific example | Primary or first-party evidence |
| Sequoia fit | No clear fit | Adjacent | Directly fits an eligible page or offer |
| Time to signal | More than 90 days | 30 to 90 days | Detectable within 30 days |
| Measurement | No clean metric | Directional metric | Page-level metric with a fixed baseline |

Only tactics scoring 6 or more enter the experiment queue. Run no more than one new X-discovered SEO treatment per week, and do not change a page already inside a controlled test.

## Current experiment queue

The August 15 scout identified these useful hypotheses:

1. Refresh pages that already have meaningful impressions in positions roughly 4 through 20 before building net-new clusters. Discovery examples: https://x.com/mehrab_build/status/2084548762970816582 and https://x.com/UsamaSeoPro/status/2075637676451954919.
2. Add concise answer blocks, numbered processes, and commercially useful FAQs that can be extracted without losing context. Discovery example: https://x.com/AgenticOperator/status/2087139555702985137.
3. Add first-party findings, named methodology, and original data rather than publishing commodity rewrites. Discovery example: https://x.com/boringlocalseo/status/2087977342773985391.
4. Track a fixed 10-prompt AI citation panel weekly to see which sources and competitors appear. Treat it as a diagnostic, not market share.
5. Reject PR-syndication packages, scaled content engines, and guaranteed AI-citation claims unless independent evidence survives verification.

Google's current guidance supports the underlying direction: foundational SEO still applies to AI features, pages must be indexed and snippet-eligible, titles and snippets draw from on-page content, and original people-first information matters. Canonical sources:

- https://developers.google.com/search/docs/appearance/ai-features
- https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- https://developers.google.com/search/docs/appearance/title-link
- https://developers.google.com/search/docs/appearance/snippet

August 15 focused retry: a narrower Grok `trends` request for title and snippet capture, internal linking, comparison-versus-service intent, and AI citation tactics stalled at the external search layer and was stopped. The subsequent tool-free health check passed in 2.5 seconds. No new X claim was added from the failed request, and the existing queue remains unchanged until the scheduled scout returns usable source links.

## Reporting rule

Each scout report must state whether Grok changed the experiment queue, raised a false alarm, did both, or produced no change. A failed X search is reported as unavailable, not as evidence that no trend exists.
