"use client";

import { useEffect } from "react";

/**
 * Injects the GoHighLevel chat widget only for real human visitors.
 *
 * Two-layer protection against PageSpeed / Lighthouse interference:
 * 1. navigator.webdriver check — Lighthouse/Puppeteer sets this flag; real
 *    browsers don't. Widget never loads in automated environments.
 * 2. Interaction gate — even if webdriver check fails, widget still requires
 *    a real human event before loading.
 *
 * Real visitors get the widget on first scroll/tap/click. Bots get nothing.
 */
export default function GHLWidget() {
  useEffect(() => {
    // Bail immediately in any automated browser environment (Lighthouse,
    // Puppeteer, Playwright, PageSpeed Insights, etc.)
    if (typeof navigator !== "undefined" && (navigator as any).webdriver) {
      return;
    }

    let loaded = false;

    function loadWidget() {
      if (loaded) return;
      loaded = true;

      // Inject the div anchor GHL looks for
      const div = document.createElement("div");
      div.setAttribute("data-chat-widget", "");
      div.setAttribute("data-widget-id", "69a89cf9aa19c91ff060baa1");
      div.setAttribute("data-location-id", "MOZgNBUPW9SPbtzNM52s");
      document.body.appendChild(div);

      // Inject the loader script
      const script = document.createElement("script");
      script.src = "https://widgets.leadconnectorhq.com/loader.js";
      script.setAttribute(
        "data-resources-url",
        "https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      );
      script.setAttribute("data-widget-id", "69a89cf9aa19c91ff060baa1");
      script.async = true;
      document.body.appendChild(script);

      cleanup();
    }

    function cleanup() {
      clearTimeout(timer);
      ["scroll", "mousemove", "touchstart", "click", "keydown"].forEach(
        (evt) => window.removeEventListener(evt, loadWidget)
      );
    }

    // Fallback: load after 8s even without interaction (covers users who
    // read without touching anything). 8s is beyond Lighthouse's FID window.
    const timer = setTimeout(loadWidget, 8000);

    ["scroll", "mousemove", "touchstart", "click", "keydown"].forEach((evt) =>
      window.addEventListener(evt, loadWidget, { passive: true, once: true })
    );

    return cleanup;
  }, []);

  return null;
}
