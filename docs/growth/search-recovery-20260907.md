# September 7 search and lead priorities

## Evidence and decisions

Review window: August 24 through September 6, 2026. GA4 property 509124446, Sequoia GEO. Search Console property sc-domain:sequoiageo.com.

- GA4 recorded 625 sessions, including 22 classified AI Assistant sessions. The two generate_lead events were associated with homepage landing sessions. These are captured-event diagnostics, not qualified leads.
- Gmail has two non-test website notifications within the same window. Exact-email HighLevel lookup resolved each to one contact. The August 25 contact already has disqualified-website-lead; the September 3 contact has needs-qualification. Neither has a documented business need in the notification or basic contact record. Neither counts as qualified. Preserve the existing decisions and attribution. The exact GA4 event-to-notification join remains unverified because event-level lead IDs have not been retrieved from GA4.
- Both notifications carry GBP / organic / GBP campaign evidence and a homepage landing path. This is captured attribution, not independent proof of the entire acquisition journey.
- GA4 shows homepage_top and contact_form as session sources. Code also sent UI placement in a parameter named source. The release separates this as interaction_source without changing CRM source or captured-lead conversion rules. This is a preventive attribution correction, not proof that it explains every Unassigned session.
- Removed an internal Dragons-to-audit campaign-tagged link. Internal navigation should not replace the acquisition source. The show campaign is over; no additional audience-development work is planned for Dragons.
- Google URL inspection: comparison guide crawled September 1, currently not indexed. Live test September 7 says URL is available to Google and can be indexed. This does not establish why Google omitted it or promise inclusion. The source page already has a self-canonical and sitemap entry. Added contextual discovery links from the national agency hub and plumbing AI-search page.
- Strengthened the plumbing AI-search page with service-specific buyer questions, the distinction between corrections and outcomes, and paths to methodology, plumbing proof, provider comparison, and pricing. Corrected an unsupported claim about GBP being a primary source for AI tools. HVAC and roofing pages remain unchanged.

## Homepage evaluation contract

Do not compare the September 7 homepage release with the preceding window as if the new experience had already been measured. Existing experience_version is homepage-trust-20260907.

Use September 8 through 21 as the first full 14-day observation window, with August 24 through September 6 as a descriptive baseline. This is not a randomized experiment; traffic mix and concurrent changes are confounders.

Report separately:

1. Production-host business-intent landing sessions, by source and landing page.
2. Assessment requests accepted by the server, excluding marked tests.
3. Distinct qualified independent website leads, using the reconciliation policy and CRM terminal decisions.
4. Booking clicks, completed bookings, completed meetings, and jobs booked only where independently documented.

Keep Dragons and other community-program landing sessions, preview hosts, staff tests, and known outreach traffic separate. Do not remove these records or substitute an overall site conversion rate for the commercial cohort. AI-source reporting should distinguish observed referrers from prospect self-report.

The historic report did not supply an exact filtered business-session denominator, so no invented commercial conversion rate is provided. GA4 custom-dimension registration and a saved filtered exploration have not been verified in this task. The interaction_source field is available in the release code, not a claim that a GA4 reporting dimension has been registered.

## Release acceptance

September 7 verification: 140 repository tests passed, ESLint passed, production build passed (95 static pages), and git diff whitespace checks passed. Search Console confirmed indexing requested and the URL was added to the priority crawl queue. Code remains on the isolated local release branch pending publication and live verification.

No new synthetic submission, CRM outreach, price change, paid-media change, or homepage redesign. Local verification and release status must be recorded separately from live deployment. Indexing requests are not indexing success. Subsequent search movement is not automatically attributable to this release.
