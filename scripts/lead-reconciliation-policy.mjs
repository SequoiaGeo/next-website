const WEBSITE_SOURCES = new Set([
  "contact_form",
  "homepage_top",
  "audit_page",
  "hvac_seo_page",
  "plumbing_seo_page",
  "roofing_seo_page",
  "hvac_marketing_page",
  "best_plumbing_agencies_midlist",
  "how_much_does_seo_cost_for_contractors",
  "how_much_should_plumbers_spend_on_marketing",
  "how_much_should_hvac_companies_spend_on_marketing",
  "how_much_do_hvac_plumbing_leads_cost",
  "lsa_statistics_page",
  "hvac_statistics_page",
  "plumbing_statistics_page",
  "google_lsa_changes_2026",
  "chatgpt_lp_form",
  "immanuel_lp_form",
]);

const AI_ENGINES = new Set([
  "chatgpt",
  "google_aio",
  "gemini",
  "perplexity",
  "claude",
  "copilot",
  "you",
]);

const TERMINAL_QUALIFICATION_TAGS = new Set([
  "qualified-website-lead",
  "disqualified-website-lead",
]);

const PUBLIC_SURFACE_CAMPAIGN = "public_surface_audit_august";

function clean(value) {
  return String(value || "").trim().toLowerCase();
}

function hasAnyCampaignValue(input) {
  return Boolean(
    clean(input.utmSource) ||
      clean(input.utmMedium) ||
      clean(input.utmCampaign) ||
      clean(input.utmContent) ||
      clean(input.campaignLandingPath)
  );
}

export function classifyLeadAttribution(input, existingTags = [], existingSource = "") {
  const websiteSource = clean(input.websiteSource);
  const utmSource = clean(input.utmSource);
  const utmMedium = clean(input.utmMedium);
  const utmCampaign = clean(input.utmCampaign);
  const utmContent = clean(input.utmContent);
  const campaignLandingPath = String(input.campaignLandingPath || "").trim();
  const aiEngineSource = clean(input.aiEngineSource);
  const tags = new Set(["website-lead", "contact-form"]);
  let unclassified = false;

  if (WEBSITE_SOURCES.has(websiteSource)) {
    tags.add(`website-source-${websiteSource.replaceAll("_", "-")}`);
  } else {
    unclassified = true;
  }

  if (hasAnyCampaignValue(input)) {
    const registeredPublicSurfaceTuple =
      (utmSource === "facebook" || utmSource === "linkedin") &&
      utmMedium === "organic_social" &&
      utmCampaign === PUBLIC_SURFACE_CAMPAIGN &&
      utmContent === "first_comment" &&
      campaignLandingPath === "/audit";

    if (registeredPublicSurfaceTuple) {
      tags.add(`campaign-${PUBLIC_SURFACE_CAMPAIGN.replaceAll("_", "-")}`);
      tags.add(`channel-${utmSource}`);
    } else {
      unclassified = true;
    }
  }

  if (aiEngineSource) {
    if (AI_ENGINES.has(aiEngineSource)) {
      tags.add(`ai-source-${aiEngineSource.replaceAll("_", "-")}`);
    } else {
      unclassified = true;
    }
  }

  if (unclassified) tags.add("attribution-unclassified");

  const hasTerminalQualification = existingTags.some((tag) =>
    TERMINAL_QUALIFICATION_TAGS.has(clean(tag))
  );
  if (!hasTerminalQualification) tags.add("needs-qualification");

  const currentSource = clean(existingSource);
  const sourceUpdate =
    WEBSITE_SOURCES.has(websiteSource) && (!currentSource || currentSource === "lsa-guide")
      ? websiteSource
      : null;

  return {
    tags: Array.from(tags),
    sourceUpdate,
    removeTags: ["lsa-guide"],
    unclassified,
  };
}

export const reconciliationVocabulary = {
  aiEngines: Array.from(AI_ENGINES),
  publicSurfaceCampaign: PUBLIC_SURFACE_CAMPAIGN,
  websiteSources: Array.from(WEBSITE_SOURCES),
};
