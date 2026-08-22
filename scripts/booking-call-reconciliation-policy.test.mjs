import assert from "node:assert/strict";
import test from "node:test";
import {
  classifyBookingEvidence,
  classifyCallEvidence,
} from "./booking-call-reconciliation-policy.mjs";

test("a scheduler notice is captured but not website-originated without an identity join", () => {
  const result = classifyBookingEvidence({
    identityLevelJoin: false,
    websiteOriginEvidence: false,
    businessNeedEstablished: true,
  });
  assert.equal(result.countsAsWebsiteLead, false);
  assert.deepEqual(result.tags.sort(), [
    "captured-booking",
    "needs-qualification",
    "origin-unverified",
  ]);
});

test("a completed website booking can count only after identity, origin, and need are established", () => {
  const result = classifyBookingEvidence({
    identityLevelJoin: true,
    websiteOriginEvidence: true,
    businessNeedEstablished: true,
  });
  assert.equal(result.countsAsWebsiteLead, true);
  assert.ok(result.tags.includes("captured-booking"));
});

test("a phone click never becomes a captured call", () => {
  const result = classifyCallEvidence({
    completedCall: false,
    identityLevelJoin: false,
    websiteOriginEvidence: true,
    businessNeedEstablished: true,
  });
  assert.equal(result.countsAsWebsiteLead, false);
  assert.equal(result.reason, "phone-intent-only");
  assert.ok(!result.tags.includes("captured-call"));
});

test("a completed call counts only with the identity-level website join and business need", () => {
  const result = classifyCallEvidence({
    completedCall: true,
    identityLevelJoin: true,
    websiteOriginEvidence: true,
    businessNeedEstablished: true,
  });
  assert.equal(result.countsAsWebsiteLead, true);
  assert.ok(result.tags.includes("captured-call"));
});

test("synthetic booking and call records are always excluded", () => {
  assert.equal(classifyBookingEvidence({ synthetic: true }).countsAsWebsiteLead, false);
  assert.equal(classifyCallEvidence({ synthetic: true }).countsAsWebsiteLead, false);
});
