"use client";

/**
 * Embeds the Google Calendar appointment booking page inline.
 * Falls back to a prominent CTA button if the iframe fails to load.
 */
export default function BookingCalendar({ className }: { className?: string }) {
  return (
    <div className={className}>
      <iframe
        src="https://calendar.app.google/BTSVH4o5pF3FsY58A"
        style={{ border: 0 }}
        width="100%"
        height="700"
        frameBorder="0"
        title="Book a strategy call with Aaron Husak"
        loading="lazy"
      />
      {/* Fallback for browsers that block iframes */}
      <noscript>
        <a
          href="https://calendar.app.google/BTSVH4o5pF3FsY58A"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-[#2D6A4F] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#1B4332] transition-colors"
        >
          Book a Strategy Call
        </a>
      </noscript>
    </div>
  );
}
