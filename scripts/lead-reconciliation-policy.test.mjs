import assert from "node:assert/strict";
import test from "node:test";
import { classifyLeadAttribution } from "./lead-reconciliation-policy.mjs";

const facebookAudit = {
  websiteSource: "audit_page",
  utmSource: "facebook",
  utmMedium: "organic_social",
  utmCampaign: "public_surface_audit_august",
  utmContent: "first_comment",
  campaignLandingPath: "/audit",
  aiEngineSource: "",
};

test("classifies the registered Facebook audit campaign", () => {
  const result = classifyLeadAttribution(facebookAudit);

  assert.equal(result.unclassified, false);
  assert.equal(result.sourceUpdate, "audit_page");
  assert.deepEqual(result.removeTags, ["lsa-guide"]);
  assert.ok(result.tags.includes("campaign-public-surface-audit-august"));
  assert.ok(result.tags.includes("channel-facebook"));
  assert.ok(result.tags.includes("needs-qualification"));
});

test("classifies the registered LinkedIn audit campaign", () => {
  const result = classifyLeadAttribution({
    ...facebookAudit,
    utmSource: "linkedin",
  });

  assert.equal(result.unclassified, false);
  assert.ok(result.tags.includes("channel-linkedin"));
  assert.ok(!result.tags.includes("channel-facebook"));
});

test("keeps an untagged audit submission out of campaign tags", () => {
  const result = classifyLeadAttribution({ websiteSource: "audit_page" });

  assert.equal(result.unclassified, false);
  assert.ok(result.tags.includes("website-source-audit-page"));
  assert.ok(!result.tags.some((tag) => tag.startsWith("campaign-")));
  assert.ok(!result.tags.some((tag) => tag.startsWith("channel-")));
});

test("collapses unknown campaign and AI values to one controlled tag", () => {
  const result = classifyLeadAttribution({
    websiteSource: "audit_page",
    utmSource: "forged-network",
    utmCampaign: "forged-campaign",
    aiEngineSource: "forged-engine",
  });

  assert.equal(result.unclassified, true);
  assert.ok(result.tags.includes("attribution-unclassified"));
  assert.ok(!result.tags.some((tag) => tag.includes("forged")));
});

test("does not reopen a terminal qualification", () => {
  const result = classifyLeadAttribution(
    facebookAudit,
    ["qualified-website-lead"],
    "audit_page"
  );

  assert.equal(result.sourceUpdate, null);
  assert.ok(!result.tags.includes("needs-qualification"));
});

test("replaces only an empty or known stale source", () => {
  assert.equal(classifyLeadAttribution(facebookAudit, [], "lsa-guide").sourceUpdate, "audit_page");
  assert.equal(classifyLeadAttribution(facebookAudit, [], "referral").sourceUpdate, null);
});
