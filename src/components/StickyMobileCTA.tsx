"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackCallIntent, trackCtaIntent } from "@/lib/analytics";

// Paid landing pages ship their own StickyCallBar. Rendering this bar there
// would stack two fixed bottom bars on top of each other, so skip them.
const EXCLUDED_ROUTES = new Set<string>(["/found-me-in-chatgpt", "/immanuel", "/dragons"]);

/**
 * Sticky bottom bar on mobile (hidden on desktop), mounted sitewide in
 * layout.tsx. Appears after a short scroll (~200px) so call and book are
 * always one tap away on every page except the bare paid landing pages.
 * Two buttons: call and book.
 */
export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  const [calendarVisible, setCalendarVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (pathname !== "/contact" || typeof IntersectionObserver === "undefined") return;

    const calendar = document.getElementById("book");
    if (!calendar) return;
    const observer = new IntersectionObserver(
      ([entry]) => setCalendarVisible(entry.isIntersecting),
      { threshold: 0.05 }
    );
    observer.observe(calendar);
    return () => observer.disconnect();
  }, [pathname]);

  if ((pathname && EXCLUDED_ROUTES.has(pathname)) || (pathname === "/contact" && calendarVisible)) return null;

  const bookingHref = pathname === "/contact" ? "#book" : "/contact#book";

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 lg:hidden transition-transform duration-300 ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="bg-[#0D2318] border-t border-[#3A9E6A]/30 px-4 py-3 flex items-center gap-3">
        <a
          href="tel:5595213122"
          onClick={() => trackCallIntent("sticky_mobile")}
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg border border-white/20 px-4 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
        >
          <svg
            aria-hidden="true"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>
          Call Now
        </a>
        <a
          href={bookingHref}
          onClick={() => trackCtaIntent("sticky_mobile_book", "schedule")}
          className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-[#3A9E6A] px-4 py-3 text-sm font-semibold text-[#0D2318] transition hover:bg-[#6FCF97]"
        >
          Choose a Time
          <svg
            aria-hidden="true"
            className="h-3.5 w-3.5"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
