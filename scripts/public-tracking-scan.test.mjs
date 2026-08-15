import assert from "node:assert/strict";
import test from "node:test";

import { inspectMarkup } from "./public-tracking-scan.mjs";

test("finds supported Google measurement identifiers", () => {
  const result = inspectMarkup(`
    <script src="https://www.googletagmanager.com/gtag/js?id=AW-1042937332"></script>
    <script>gtag('config', 'G-G1WP184C30');</script>
    <script src="https://www.googletagmanager.com/gtm.js?id=GTM-5HZRM9GM"></script>
    <script src="https://www.googletagmanager.com/gtag/js?id=GT-KT497MZZ"></script>
  `);

  assert.deepEqual(result.tags.googleAds, ["AW-1042937332"]);
  assert.deepEqual(result.tags.ga4, ["G-G1WP184C30"]);
  assert.deepEqual(result.tags.gtm, ["GTM-5HZRM9GM"]);
  assert.deepEqual(result.tags.googleTag, ["GT-KT497MZZ"]);
});

test("does not mistake lowercase CSS or product strings for GA4 IDs", () => {
  const result = inspectMarkup(`
    <div class="g-recaptcha"></div>
    <meta content="g-commercial-property" />
    <span>g-marketing and g-contact-us</span>
  `);

  assert.deepEqual(result.tags.ga4, []);
  assert.deepEqual(result.tags.googleTag, []);
});

test("finds supported call-tracking providers, forms, and telephone links", () => {
  const result = inspectMarkup(`
    <script src="https://cdn.callrail.com/companies/123/swap.js"></script>
    <form><a href="tel:+15595213122">Call</a></form>
  `);

  assert.deepEqual(result.callTracking, ["callrail"]);
  assert.deepEqual(result.telLinks, ["+15595213122"]);
  assert.deepEqual(result.publicPhones, ["5595213122"]);
  assert.equal(result.forms, 1);
});

test("extracts current public phone numbers from schema and formatted copy", () => {
  const result = inspectMarkup(`
    <script type="application/ld+json">{"telephone":"(609) 733-4058"}</script>
    <p>Call 609.733.4058 for service.</p>
    <p>Tracking-like number without separators: 18193401505</p>
  `);

  assert.deepEqual(result.publicPhones, ["6097334058"]);
});

test("excludes reserved fictional 555-0100 through 555-0199 numbers", () => {
  const result = inspectMarkup(`
    <p>Placeholder: (402) 555-0199</p>
    <p>Public line: (402) 502-7277</p>
  `);

  assert.deepEqual(result.publicPhones, ["4025027277"]);
});
