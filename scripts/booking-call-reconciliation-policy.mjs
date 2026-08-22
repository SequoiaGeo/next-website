const TERMINAL_QUALIFICATION_TAGS = new Set([
  "qualified-website-lead",
  "disqualified-website-lead",
]);

function clean(value) {
  return String(value || "").trim().toLowerCase();
}

function needsQualification(existingTags) {
  return !existingTags.some((tag) => TERMINAL_QUALIFICATION_TAGS.has(clean(tag)));
}

export function classifyBookingEvidence(input, existingTags = []) {
  if (input.synthetic === true) {
    return {
      tags: ["internal-attribution-test", "captured-booking", "origin-unverified"],
      countsAsWebsiteLead: false,
      reason: "synthetic-test",
    };
  }

  const tags = new Set(["captured-booking"]);
  const hasIdentityJoin = input.identityLevelJoin === true;
  const hasWebsiteOrigin = input.websiteOriginEvidence === true;
  const hasBusinessNeed = input.businessNeedEstablished === true;

  if (!hasIdentityJoin || !hasWebsiteOrigin) tags.add("origin-unverified");
  if (needsQualification(existingTags)) tags.add("needs-qualification");

  return {
    tags: Array.from(tags),
    countsAsWebsiteLead: hasIdentityJoin && hasWebsiteOrigin && hasBusinessNeed,
    reason:
      hasIdentityJoin && hasWebsiteOrigin
        ? hasBusinessNeed
          ? "website-booking-qualified-evidence"
          : "business-need-unverified"
        : "website-origin-unverified",
  };
}

export function classifyCallEvidence(input, existingTags = []) {
  if (input.synthetic === true) {
    return {
      tags: ["internal-attribution-test", "captured-call", "origin-unverified"],
      countsAsWebsiteLead: false,
      reason: "synthetic-test",
    };
  }

  const tags = new Set();
  const completedCall = input.completedCall === true;
  const hasIdentityJoin = input.identityLevelJoin === true;
  const hasWebsiteOrigin = input.websiteOriginEvidence === true;
  const hasBusinessNeed = input.businessNeedEstablished === true;

  if (completedCall) tags.add("captured-call");
  if (!hasIdentityJoin || !hasWebsiteOrigin) tags.add("origin-unverified");
  if (completedCall && needsQualification(existingTags)) tags.add("needs-qualification");

  return {
    tags: Array.from(tags),
    countsAsWebsiteLead:
      completedCall && hasIdentityJoin && hasWebsiteOrigin && hasBusinessNeed,
    reason: !completedCall
      ? "phone-intent-only"
      : hasIdentityJoin && hasWebsiteOrigin
        ? hasBusinessNeed
          ? "website-call-qualified-evidence"
          : "business-need-unverified"
        : "website-origin-unverified",
  };
}
