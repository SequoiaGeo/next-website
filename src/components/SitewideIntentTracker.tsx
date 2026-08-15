"use client";

import { useEffect } from "react";
import {
  ctaClickWasTrackedRecently,
  phoneIntentWasTrackedRecently,
  trackCallIntent,
  trackCtaIntent,
} from "@/lib/analytics";

export default function SitewideIntentTracker() {
  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest<HTMLAnchorElement>("a[href]");
      if (!link) return;

      const href = link.getAttribute("href") || "";
      if (href.startsWith("tel:")) {
        if (phoneIntentWasTrackedRecently()) return;
        const source =
          link.dataset.analyticsSource ||
          `sitewide_phone:${window.location.pathname}`;
        trackCallIntent(source);
        return;
      }

      const ctaContract = link.hash === "#book"
        ? "schedule"
        : link.hash === "#contact"
          ? "intake"
          : null;
      if (!ctaContract || ctaClickWasTrackedRecently()) return;

      const source =
        link.dataset.analyticsSource ||
        `sitewide_cta:${window.location.pathname}:${ctaContract}`;
      trackCtaIntent(source, ctaContract);
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return null;
}
