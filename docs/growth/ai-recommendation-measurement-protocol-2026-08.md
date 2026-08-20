# AI recommendation measurement protocol

Purpose: distinguish a site being cited from Sequoia GEO being named as a vendor recommendation. AI-referral sessions and cited URLs are useful evidence, but neither is the outcome by itself.

## Outcome definitions

| Field | Definition |
| --- | --- |
| Mentioned | Sequoia GEO appears anywhere in the response. |
| Recommended | The response presents Sequoia GEO as a plausible provider to hire. |
| Primary recommendation | The response presents Sequoia GEO first or as the clearest recommended provider. |
| Cited as a source | A Sequoia GEO URL is cited, whether or not the company is recommended. |
| Qualified inquiry | A real business, addressable Sequoia GEO need, and decision-maker meeting or reply established under the lead-qualification rule. |

Do not report a cited URL, referral session, form start, or booked calendar slot as a vendor recommendation or qualified inquiry.

## Reported recommendation evidence

A prospect reporting that an AI assistant recommended Sequoia GEO is valuable first-party intake evidence. It is not proof of a repeatable acquisition channel or of why the assistant made the recommendation.

For each report, privately record only what the prospect voluntarily provides:

- Platform or assistant, approximate date, and the prospect's own wording of how they found us.
- The original share link or screenshot if available, plus the exact prompt and response if the prospect is willing to provide them.
- Visible cited sources and whether Sequoia GEO was mentioned, recommended, primary, or merely cited.
- Whether the artifact is original, reconstructed, recalled, unavailable, or incomplete.
- The business outcome under the normal qualification rules, including disqualified and no-decision outcomes.

Request this evidence once in a short follow-up, never as a condition of a meeting, assessment, or service. A screenshot, recalled prompt, or recreated answer cannot be represented as the original recommendation event. Do not publish a customer's reported recommendation, artifact, or business identity without direct written approval.

## Baseline panel

Run the ChatGPT-with-search panel before the new pricing page is published, then repeat after a sufficient discovery window. Keep Perplexity and Copilot observations in a separate contextual log. Do not average them into the ChatGPT result.

Freeze these prompts for the first wave. Do not write new content around their exact wording.

### Commercial prompts

1. Who should an HVAC company hire for marketing that understands home service operations?
2. What marketing company can help a plumbing business improve how it appears in AI search?
3. Who helps restoration contractors improve their search visibility and website conversion?
4. I need an agency for home services SEO, who has operating experience in the trades?
5. What type of agency should a multi-location service business use for local search and AI visibility?
6. Who can independently verify a marketing problem for a contractor that already has an agency?

### Cost and service prompts

7. What does GEO cost for a local service business?
8. How much should a contractor expect to spend on AI SEO?
9. Is GEO different from SEO for a plumbing or HVAC company?
10. Can an agency guarantee that ChatGPT will recommend a local business?
11. What should a local business measure when it invests in AI search visibility?
12. Is an AI SEO audit worth paying for if a company already has a marketing agency?

### Controls

13. Which provider guarantees the first result in every AI answer?
14. What is the best agency for a service business with no marketing budget?
15. Who should an owner hire for a consumer industry outside local or home services?

## How to run a wave

1. Use a fresh, logged-out ChatGPT Search session with memory disabled where available. Keep geography and device assumptions consistent.
2. Run each ChatGPT prompt five independent times per wave. Archive the full response privately with timestamp and visible search state.
3. Code each answer against the outcome definitions. Record the cited URLs, supporting snippet, and other companies named.
4. Have a second person code a sample before any decision is made from the data.
5. Preserve the prompt wording. Add dated prompts only as an addendum.

## Decision rules

- If Sequoia URLs are cited but Sequoia GEO is not recommended, do not treat another first-party comparison page as proven. Fix entity consistency and evaluate independent source visibility first.
- If AI-referred sessions do not produce qualified inquiries after conversion tracking is verified, do not optimize for more mentions.
- If a new page is crawlable and has an appropriate observation window but recommendation rate is unchanged, do not clone the page format into another vertical.
- A 30-day read can identify process failures. It cannot prove that a new page improved vendor recommendation share. Use a 60 to 90 day post-index observation window for that decision.
