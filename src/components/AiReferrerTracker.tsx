"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

function bucketReferrer(ref: string): string | null {
  if (!ref) return null;
  let url: URL;
  try {
    url = new URL(ref);
  } catch {
    return null;
  }
  const host = url.hostname.toLowerCase();
  const path = url.pathname.toLowerCase();
  const search = url.search.toLowerCase();

  if (host === "gemini.google.com" || host.endsWith(".gemini.google.com")) return "gemini";
  if (host.endsWith("google.com") && (path.includes("/aiv") || search.includes("udm=50"))) return "google_aio";
  if (host === "chat.openai.com" || host === "chatgpt.com" || host.endsWith(".chatgpt.com")) return "chatgpt";
  if (host === "perplexity.ai" || host.endsWith(".perplexity.ai")) return "perplexity";
  if (host === "claude.ai" || host.endsWith(".claude.ai")) return "claude";
  if (host === "copilot.microsoft.com" || host.endsWith(".copilot.microsoft.com")) return "copilot";
  if (host === "www.bing.com" && path.startsWith("/chat")) return "copilot";
  if (host === "you.com" || host.endsWith(".you.com")) return "you";

  return null;
}

export default function AiReferrerTracker() {
  useEffect(() => {
    const bucket = bucketReferrer(document.referrer);
    if (!bucket) return;

    const payload = {
      ai_engine_source: bucket,
      referrer_full: document.referrer,
      landing_path: window.location.pathname,
    };

    if (typeof window.gtag === "function") {
      window.gtag("event", "ai_referrer_seen", payload);
      window.gtag("set", "user_properties", { ai_engine_source: bucket });
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "ai_referrer_seen", ...payload });
  }, []);

  return null;
}
