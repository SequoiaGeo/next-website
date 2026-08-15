"use client";
import { useEffect } from "react";
import {
  detectAiEngine,
  getReferrerHost,
  storeAiAttribution,
} from "@/lib/ai-attribution";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export default function AiReferrerTracker() {
  useEffect(() => {
    const bucket = detectAiEngine(document.referrer, window.location.search);
    if (!bucket) return;

    const payload = {
      ai_engine_source: bucket,
      referrer_host: getReferrerHost(document.referrer),
      landing_path: window.location.pathname,
      captured_at: new Date().toISOString(),
    };

    storeAiAttribution(payload);

    if (typeof window.gtag === "function") {
      window.gtag("event", "ai_referrer_seen", payload);
    }

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: "ai_referrer_seen", ...payload });
  }, []);

  return null;
}
