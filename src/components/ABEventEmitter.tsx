"use client";
import { useEffect } from "react";

/**
 * Reads the hp_variant cookie (set by Edge Middleware) and tags GA4.
 * No redirect logic — middleware handles that server-side.
 * Fires once per page load, after GA4 is ready.
 */
export default function ABEventEmitter() {
  useEffect(() => {
    const variant = document.cookie
      .split("; ")
      .find((c) => c.startsWith("hp_variant="))
      ?.split("=")[1];
    if (!variant || typeof (window as any).gtag !== "function") return;
    (window as any).gtag("set", "user_properties", { hp_variant: variant });
    (window as any).gtag("event", "ab_variant_assigned", {
      ab_variant: variant,
      non_interaction: true,
    });
  }, []);
  return null;
}
