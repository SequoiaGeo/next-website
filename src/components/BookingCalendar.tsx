"use client";

import { useEffect, useRef } from "react";
import { trackEvent } from "@/lib/analytics";

// Official Google Calendar appointment-schedule EMBED URL (?gv=true).
// Do NOT use the calendar.app.google short link here: it serves
// X-Frame-Options: SAMEORIGIN on the redirect hop, so browsers refuse to
// render it inside an iframe and visitors see a blank/error block.
const EMBED_URL =
  "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0zleyjvuE5ofrkOrNv5DBdhbFYo3fH52XO9wVYtgKdsmmBsLdNw8JVYxrGPsIZrNwICjtwsscR?gv=true";

// Shareable short link, used for open-in-new-tab fallbacks only.
const SHORT_LINK = "https://calendar.app.google/BTSVH4o5pF3FsY58A";

/**
 * Embeds the Google Calendar appointment booking page inline.
 *
 * The cross-origin iframe can't report booking completion, so as a proxy we
 * fire a "calendar_engagement" GA4 event the first time the visitor clicks
 * into the calendar (window blur while the iframe holds focus).
 */
export default function BookingCalendar({ className }: { className?: string }) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const engaged = useRef(false);

  useEffect(() => {
    const onBlur = () => {
      if (engaged.current) return;
      if (document.activeElement === iframeRef.current) {
        engaged.current = true;
        trackEvent("calendar_engagement", {
          source: "booking_calendar",
          cta_contract: "schedule",
        });
      }
    };
    window.addEventListener("blur", onBlur);
    return () => window.removeEventListener("blur", onBlur);
  }, []);

  return (
    <div className={className}>
      <iframe
        ref={iframeRef}
        src={EMBED_URL}
        style={{ border: 0 }}
        width="100%"
        height="700"
        frameBorder="0"
        title="Book a strategy call with Aaron Husak"
        loading="lazy"
      />
      {/* Always-visible fallback in case the embed fails to load */}
      <p className="mt-3 text-center text-sm text-gray-500">
        Calendar not loading?{" "}
        <a
          href={SHORT_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-[#1A5C3A] underline-offset-2 hover:underline"
          onClick={() => trackEvent("calendar_fallback_click", {
            source: "booking_calendar",
            cta_contract: "schedule",
          })}
        >
          Open it in a new tab
        </a>
        .
      </p>
      {/* Fallback for browsers with JavaScript disabled */}
      <noscript>
        <a
          href={SHORT_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#2D6A4F] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1B4332] transition-colors"
        >
          Choose a Time
        </a>
      </noscript>
    </div>
  );
}
