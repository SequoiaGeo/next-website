// Per-tab, first-tagged-touch attribution for website lead reconciliation.
// Store only campaign labels and the landing pathname. Never persist the full
// URL, query string, or referrer because those can contain private search text.

export const CAMPAIGN_ATTRIBUTION_KEY = "sg_campaign_attribution";

export type CampaignAttribution = {
  utm_source: string;
  utm_medium: string;
  utm_campaign: string;
  utm_content: string;
  landing_path: string;
};

function normalizeCampaignValue(value: string | null, maxLength = 100): string {
  return (value || "")
    .trim()
    .replace(/[^a-zA-Z0-9 ._-]/g, "")
    .slice(0, maxLength);
}

function normalizeLandingPath(pathname: string): string {
  const cleaned = pathname
    .trim()
    .replace(/[^a-zA-Z0-9/_-]/g, "")
    .slice(0, 200);
  return cleaned.startsWith("/") ? cleaned : `/${cleaned}`;
}

export function detectCampaignAttribution(
  search: string,
  pathname: string
): CampaignAttribution | null {
  const params = new URLSearchParams(search);
  const attribution = {
    utm_source: normalizeCampaignValue(params.get("utm_source")),
    utm_medium: normalizeCampaignValue(params.get("utm_medium")),
    utm_campaign: normalizeCampaignValue(params.get("utm_campaign")),
    utm_content: normalizeCampaignValue(params.get("utm_content"), 120),
    landing_path: normalizeLandingPath(pathname),
  };

  if (!attribution.utm_source && !attribution.utm_campaign) return null;
  return attribution;
}

export function storeCampaignAttribution(value: CampaignAttribution): void {
  if (typeof window === "undefined") return;
  try {
    if (!window.sessionStorage.getItem(CAMPAIGN_ATTRIBUTION_KEY)) {
      window.sessionStorage.setItem(CAMPAIGN_ATTRIBUTION_KEY, JSON.stringify(value));
    }
  } catch {
    // Disabled storage must not break navigation or lead capture.
  }
}

export function readCampaignAttribution(): CampaignAttribution | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = window.sessionStorage.getItem(CAMPAIGN_ATTRIBUTION_KEY);
    if (!stored) return null;
    return JSON.parse(stored) as CampaignAttribution;
  } catch {
    return null;
  }
}
