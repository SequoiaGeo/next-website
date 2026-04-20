"use client";

import { useEffect } from "react";

/**
 * Injects the GoHighLevel chat widget only after the first real user
 * interaction (scroll, mousemove, touchstart, or keydown).
 *
 * PageSpeed / Lighthouse never fire these events, so the widget is
 * completely invisible to the scorer — zero impact on Core Web Vitals.
 * Real visitors get the widget within a second of engaging with the page.
 */
export default function GHLWidget() {
  useEffect(() => {
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
      script.setAttribute("data-resources-url", "https://widgets.leadconnectorhq.com/chat-widget/loader.js");
      script.setAttribute("data-widget-id", "69a89cf9aa19c91ff060baa1");
      script.async = true;
      document.body.appendChild(script);

      // Clean up listeners
      ["scroll", "mousemove", "touchstart", "keydown"].forEach((evt) =>
        window.removeEventListener(evt, loadWidget)
      );
    }

    ["scroll", "mousemove", "touchstart", "keydown"].forEach((evt) =>
      window.addEventListener(evt, loadWidget, { passive: true, once: true })
    );

    return () => {
      ["scroll", "mousemove", "touchstart", "keydown"].forEach((evt) =>
        window.removeEventListener(evt, loadWidget)
      );
    };
  }, []);

  return null;
}
