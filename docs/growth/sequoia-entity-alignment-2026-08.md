# Sequoia GEO entity alignment, August 2026

## Verified issue

The public LinkedIn company profile still describes a retired 45-day promise and an overly broad, team-style agency scope. On August 20, 2026, the LinkedIn company editor showed:

- Tagline: "Let's Grow! Contractor-built, AI-powered marketing that books jobs in 45 days"
- Overview: a long list of broad services plus the retired "45-Day Growth Sprint"
- Company size: 0 to 1 employees

The public site now positions Sequoia GEO as operator-led and directs prospects to work with Aaron, not an account manager. Leaving the LinkedIn language unchanged creates a clear public contradiction.

The same in-account review found two more durable contradictions:

- Facebook's live page is `https://www.facebook.com/SequoiaGeoMarketingAgency`, but the website's organization schema linked to the unavailable `https://www.facebook.com/sequoiageo` URL. The live Facebook bio says, "Contractor turned marketing agency for local service businesses. We specialize in Google Business Profile, Local SEO, PPC & LSA for local businesses."
- The Google Business Profile description uses team-style language, lists fractional CMO services, and describes Sequoia GEO as a plumbing and HVAC contractor turned agency. Its LinkedIn and Facebook social-profile URLs do not match the verified live profile URLs.

Source: direct in-account reads of Facebook and the Sequoia GEO Google Business Profile on 2026-08-20. The website organization schema was corrected in `src/app/layout.tsx` during this refresh.

## Proposed LinkedIn company profile

### Tagline

Operator-led SEO and AI search visibility for home service companies

### Overview

Sequoia GEO is Aaron Husak's operator-led marketing practice for home service companies.

Aaron spent 13 years building Balanced Comfort, a home services company that earned four Inc. 5000 recognitions. Today, clients work directly with Aaron, not an account manager, to connect search visibility, advertising, listings, website conversion, and measurement to qualified inquiries and jobs booked.

Core work:

- SEO, GEO, and AI search visibility
- Google Business Profile, local listings, and Local Services Ads
- Website and landing-page conversion
- Lead tracking, CRM visibility, and operational marketing priorities
- Public-surface audits for companies that need a marketing problem independently verified

Engagements start at $2,500 per month with a three-month initial term. Ad spend is separate and remains in client-owned accounts.

Based in Fresno, serving home service businesses nationally.

### Recommended specialties

- Home Services Marketing
- SEO for Contractors
- GEO and AI Search Visibility
- Local SEO
- Google Business Profile
- Local Services Ads
- Website Conversion
- Marketing Measurement
- Lead Tracking
- Operator-Led Marketing

## Proposed Facebook bio

Operator-led SEO and AI search visibility for home service businesses. Clients work directly with Aaron Husak, not an account manager.

## Proposed Google Business Profile description

Sequoia GEO is Aaron Husak's operator-led marketing practice for home service companies. Aaron spent 13 years building a home services company that earned four Inc. 5000 recognitions. Clients work directly with Aaron, not an account manager, on SEO, GEO and AI search visibility, Google Business Profile and local listings, paid search, website conversion, lead tracking, and marketing measurement. Based in the Fresno area, Sequoia GEO serves home service businesses nationally.

### Verified social-profile URLs for Google Business Profile

- LinkedIn: `https://www.linkedin.com/company/sequoia-geo/`
- Facebook: `https://www.facebook.com/SequoiaGeoMarketingAgency`
- YouTube: `https://www.youtube.com/@SequoiaGEO`

## Next surfaces to verify

1. Google Business Profile service inventory and the unexpected public-facing audience attributes, including the current "Not LGBTQ+ friendly" value, before changing either.
2. Facebook service categories beyond the verified bio.
3. Any agency directory or partner bio that still says "AI-powered" or repeats the 45-day promise.
4. The live site after deployment, to ensure the pricing page, sitemap, and social profiles use the same starting price and owner-led framing.

Do not edit historical posts merely to make a feed look current. Correct the durable profile fields, then let future content establish the current position.

## Implementation status, 2026-08-20

Source: direct in-account reads and writes on LinkedIn, Facebook, Google Business Profile, Google Search Console, and Bing Webmaster Tools on 2026-08-20.

- LinkedIn is complete and verified in member view. The operator-led tagline, overview, and ten focused specialties are public. The durable profile no longer contains the 45-day promise.
- Facebook is complete and verified. The public bio now says that Sequoia GEO is operator-led and that clients work directly with Aaron Husak, not an account manager.
- Google Business Profile accepted the new operator-led description. The new Facebook and LinkedIn profile URLs remain in Google's pending-review state.
- The Google Business Profile `LGBTQ+ friendly` attribute cannot be unset in the current editor. Google exposes only Yes and No. The existing No value was left unchanged rather than replacing it with an unsupported affirmative claim.
- Google Search Console accepted recrawl requests for the homepage, `/contractors-guide-ai-search`, and `/ai-website-seo-guide`.
- Bing Webmaster Tools accepted indexing requests for the same three URLs.
- Vercel deployed commit `51412b0` to `www.sequoiageo.com` at 2026-08-20 4:46:34 PM Pacific. The live smoke test confirmed both refreshed guide headlines, the removed unsupported claim, the rebuilt PDF, and the corrected organization schema links.
