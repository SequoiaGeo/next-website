"use client";
import { useEffect } from "react";

/**
 * Reads the A/B variant cookie and sends it to GA4 as a user property.
 * Include once in the root layout so every page/event is tagged.
 * In GA4: Explore → User Properties → hp_variant → filter or compare.
 */
export default function ABVariantTracker() {
  useEffect(() => {
    const variant = document.cookie
      .split("; ")
      .find((c) => c.startsWith("hp_variant="))
      ?.split("=")[1];

    if (!variant) return;

    // Set as GA4 user property (persists for the session/user)
    if (typeof window !== "undefined" && typeof (window as any).gtag === "function") {
      (window as any).gtag("set", "user_properties", { hp_variant: variant });
      (window as any).gtag("event", "ab_variant_assigned", {
        ab_variant: variant,
        non_interaction: true,
      });
    }
  }, []);

  return null;
}
