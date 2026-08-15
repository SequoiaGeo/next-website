// Lightweight GA4 + Google Ads event helper.
// gtag is loaded globally in layout.tsx (GA4 config + AW-1042937332 Google Ads).
// Safe to call before gtag loads or during SSR: it no-ops instead of throwing.

import { readAiAttribution } from "@/lib/ai-attribution";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    // OpenAI Ads (ChatGPT) pixel, loaded by OaiqPixel in layout.tsx
    oaiq?: (...args: unknown[]) => void;
  }
}

type LeadParams = {
  // Where the lead came from, e.g. "contact_form", "lsa_guide", "marketing_leak_calculator"
  source: string;
  // Optional intent/value signal (e.g. calculated annual revenue gap)
  value?: number;
  [key: string]: unknown;
};

let lastPhoneIntentAt = 0;
let lastCtaClickAt = 0;

/**
 * Fire a GA4 + Google Ads "generate_lead" conversion event.
 * Use this on every successful lead capture so both GA4 key events and
 * Google Ads conversion tracking can optimize toward real conversions.
 */
export function trackLead({ source, value, ...rest }: LeadParams) {
  if (typeof window === "undefined") return;
  const aiAttribution = readAiAttribution();
  if (typeof window.gtag === "function") {
    window.gtag("event", "generate_lead", {
      currency: "USD",
      value: value ?? 0,
      lead_source: source,
      ...(aiAttribution ?? {}),
      ...rest,
    });
  }
  // Same lead moment, second destination: OpenAI Ads "Lead created" conversion
  // so ChatGPT ad spend gets attribution. Guarded independently of gtag on
  // purpose: an ad blocker eating GA must not also eat this signal.
  // amount stays 0: leads have no verified dollar value, and the calculator's
  // modeled annual-gap number must not masquerade as conversion value.
  if (typeof window.oaiq === "function") {
    window.oaiq("measure", "lead_created", {
      type: "customer_action",
      amount: 0,
      currency: "USD",
    });
  }
}

/**
 * Fire a GA4 "phone_click" event for a tap on a tel: link.
 * Call intent is NOT a captured lead: no generate_lead, no Ads conversion,
 * no oaiq lead_created. Those stay reserved for real form captures so the
 * lead numbers in GA4 and the ad platforms stay honest.
 */
export function trackCallIntent(source: string) {
  lastPhoneIntentAt = Date.now();
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "phone_click", {
    event_category: "CTA",
    event_label: source,
    source,
  });
}

export function phoneIntentWasTrackedRecently(maxAgeMs = 250) {
  return Date.now() - lastPhoneIntentAt <= maxAgeMs;
}

export function ctaClickWasTrackedRecently(maxAgeMs = 250) {
  return Date.now() - lastCtaClickAt <= maxAgeMs;
}

export function trackCtaIntent(source: string, ctaContract?: string) {
  lastCtaClickAt = Date.now();
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", "cta_click", {
    event_category: "CTA",
    event_label: source,
    source,
    ...(ctaContract ? { cta_contract: ctaContract } : {}),
  });
}

/** Fire an arbitrary GA4 event (engagement, clicks, etc.). */
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", name, params);
}
