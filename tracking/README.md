# Sequoia tracking migration, November 28, 2026

Container: GTM-P5JJKJDF. Live version 2, Consent-gated Sequoia tracking migration.

The site loads GTM only after current-version cookie acceptance. GTM owns SDK loading for the existing GA4, Google Ads, Microsoft Clarity, Meta and ChatGPT destinations. Public GA4 and Clarity IDs remain deployment environment variables passed through the data layer. There is deliberately no unconditional noscript iframe.

Existing application event emitters and lead deduplication stay in place. Do not add GTM click, form, history-change or custom-event tags that send these same events again. Google enhanced measurement continues handling page navigation. The app buffers Google events until the existing destinations are configured. Each loader has a per-document guard and every GTM tag is once per load.

Validation: production build passed; 21 targeted tracking/consent tests passed. Local Tag Assistant verified four tags fired once, one GA4 page view at initial load and another after navigation to About Us. No optional SDK before acceptance or after consent withdrawal/reload. No real inquiry or phone call was submitted during testing.

Limit: these checks cover browser implementation, not a full audit of Google Ads primary/secondary conversion mappings or server-side integrations.

Rollback: revert the website migration commit and redeploy the prior working application. Do not revert GTM to empty version 1 while this website build is active, as that would stop its tracking. The old application does not load this container, so live version 2 can remain during an application rollback. Keep container-import.json as the configuration backup; numbered HTML files are its reviewed tag sources.
