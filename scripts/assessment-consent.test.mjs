import test from "node:test";
import assert from "node:assert/strict";
import { assessmentMarketingConsent, MARKETING_EMAIL_CONSENT_TEXT } from "../src/lib/assessment-consent.mjs";

test("marketing opt-in accepts only explicit boolean true and timestamps the recorded choice", () => {
  const now = new Date("2026-09-14T12:00:00Z");
  for (const value of [undefined, null, false, "true", "false", 1, {}]) {
    assert.equal(assessmentMarketingConsent(value, now).granted, false);
  }
  assert.deepEqual(assessmentMarketingConsent(true, now), {
    granted: true, recordedAt: now.toISOString(), version: "2026-09-14", text: MARKETING_EMAIL_CONSENT_TEXT,
  });
});
