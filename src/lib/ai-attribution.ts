// Per-tab, first-touch attribution prevents a later direct session from being
// mislabeled as AI-sourced. Store only the referrer host because an AI referrer
// URL can contain the visitor's query. Google AI Overview detection remains a
// known undercount because most Google referrers do not expose an AI marker.

export const AI_ATTRIBUTION_KEY = "sg_ai_attribution";

export type AiAttribution = {
  ai_engine_source: string;
  referrer_host: string;
  landing_path: string;
  captured_at: string;
};

export function detectAiEngine(referrer: string, search: string): string | null {
  if (referrer) {
    try {
      const url = new URL(referrer);
      const host = url.hostname.toLowerCase();
      const path = url.pathname.toLowerCase();
      const referrerSearch = url.search.toLowerCase();

      if (host === "gemini.google.com" || host.endsWith(".gemini.google.com")) return "gemini";
      if (host.endsWith("google.com") && (path.includes("/aiv") || referrerSearch.includes("udm=50"))) return "google_aio";
      if (host === "chat.openai.com" || host === "chatgpt.com" || host.endsWith(".chatgpt.com")) return "chatgpt";
      if (host === "perplexity.ai" || host.endsWith(".perplexity.ai")) return "perplexity";
      if (host === "claude.ai" || host.endsWith(".claude.ai")) return "claude";
      if (host === "copilot.microsoft.com" || host.endsWith(".copilot.microsoft.com")) return "copilot";
      if (host === "www.bing.com" && path.startsWith("/chat")) return "copilot";
      if (host === "you.com" || host.endsWith(".you.com")) return "you";
    } catch {
      // A malformed or unavailable referrer should not block UTM detection.
    }
  }

  const utmSource = new URLSearchParams(search).get("utm_source")?.toLowerCase();
  return utmSource === "chatgpt.com" ? "chatgpt" : null;
}

export function getReferrerHost(referrer: string): string {
  if (!referrer) return "";
  try {
    return new URL(referrer).hostname.toLowerCase();
  } catch {
    return "";
  }
}

export function storeAiAttribution(value: AiAttribution): void {
  if (typeof window === "undefined") return;
  try {
    if (!window.sessionStorage.getItem(AI_ATTRIBUTION_KEY)) {
      window.sessionStorage.setItem(AI_ATTRIBUTION_KEY, JSON.stringify(value));
    }
  } catch {
    // Disabled storage must not break the site or lead capture.
  }
}

export function readAiAttribution(): AiAttribution | null {
  if (typeof window === "undefined") return null;
  try {
    const stored = window.sessionStorage.getItem(AI_ATTRIBUTION_KEY);
    if (!stored) return null;
    return JSON.parse(stored) as AiAttribution;
  } catch {
    return null;
  }
}
