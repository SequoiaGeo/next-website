import assert from "node:assert/strict";
import test from "node:test";
import { readFileSync } from "node:fs";
import { parseConsent, serializeConsent, CONSENT_DURATION_MS, isTrackingCookie } from "../src/lib/cookie-consent.mjs";
const now = 1000000000;
test("no permission from legacy, missing, malformed, expired or future consent", () => {
  for (const raw of [null, "accepted", "declined", "{}", "invalid", JSON.stringify({version:1,choice:"accepted",expiresAt:now+100}), JSON.stringify({version:2,choice:"accepted",expiresAt:now}), JSON.stringify({version:2,choice:"accepted",expiresAt:now+CONSENT_DURATION_MS+1})]) assert.equal(parseConsent(raw, now), null);
});
test("acceptance and refusal persist only within their explicit lifetime", () => {
  for (const choice of ["accepted", "declined"]) {
    const raw=serializeConsent(choice,now);
    assert.equal(parseConsent(raw,now),choice);
    assert.equal(parseConsent(raw,now+CONSENT_DURATION_MS-1),choice);
    assert.equal(parseConsent(raw,now+CONSENT_DURATION_MS),null);
  }
  assert.throws(()=>serializeConsent("anything",now));
});
test("cleanup targets known tracker cookies without removing functional or consent state", () => {
  for (const name of ["_ga","_ga_ABCD","_gid","_gat_gtag_1","_gcl_au","_clck","_clsk","_fbp","_fbc"]) assert.equal(isTrackingCookie(name),true,name);
  for (const name of ["cookie_consent","session","csrf","sg_consultation","_gallery"]) assert.equal(isTrackingCookie(name),false,name);
});
test("global layout cannot bypass consent with SDK tags, noscript pixels or early connections", () => {
  const layout=readFileSync("src/app/layout.tsx","utf8");
  for (const forbidden of ["googletagmanager.com","google-analytics.com","clarity.ms","connect.facebook.net","facebook.com/tr", "<OaiqPixel", "<CampaignAttributionTracker", "<AiReferrerTracker", "<SitewideIntentTracker"]) assert.equal(layout.includes(forbidden),false,forbidden);
  assert.match(layout,/<CookieBanner gaId=/);
  const consent=readFileSync("src/components/CookieBanner.tsx","utf8");
  assert.match(consent,/accepted && <ConsentTracking/);
  assert.match(consent,/window.location.reload/);
  assert.match(consent,/window.addEventListener\("storage"/);
});
