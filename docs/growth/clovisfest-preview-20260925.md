# ClovisFest checklist preview

Built at /clovis with email-only checklist delivery, contact details, downloadable static SVG QR, footer discovery link and sitemap entry. QR destination: https://www.sequoiageo.com/clovis. No tracking redirect or expiring QR service.

Requests use /api/clovisfest-checklist and Resend. The subscriber receives the checklist in plain text and Aaron receives an event-specific notification. No CRM writes, newsletter enrollment or qualified-lead conversion events. Exclude clovisfest_event from independently initiated website-lead scorecards. Shared analytics may still record diagnostic page/form activity.

Consent covers the requested checklist and contact information only. Error states do not claim successful delivery. Provider acceptance is not inbox confirmation. Same-day provider idempotency limits duplicate sends to the same recipient; this is not a distributed abuse-rate limiter.

Verification: production build, ten existing API compatibility tests, fourteen synthetic/tracking tests and a new mocked delivery test. Desktop/mobile browser check: no horizontal overflow, QR loaded. No real emails or CRM records created. Needs production approval and a separately authorized marked inbox-delivery test before event use. QR destination is not live until deployment.

Claude review unavailable due to the previously observed authentication blocker; Grok pass not run because the required hard spending cap is unconfirmed. Implementation and verification performed locally.
