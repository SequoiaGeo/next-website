"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const CONSENT_KEY = "cookie_consent";

function loadClarity(id: string) {
  if (typeof window === "undefined" || (window as any).clarity) return;
  const s = document.createElement("script");
  s.async = true;
  s.src = `https://www.clarity.ms/tag/${id}`;
  document.head.appendChild(s);
}

/** Call this anywhere else on the page (e.g. ABVariantTracker) to check stored consent */
export function hasAnalyticsConsent(): boolean {
  if (typeof window === "undefined") return false;
  return localStorage.getItem(CONSENT_KEY) === "accepted";
}

export function grantConsent(clarityId?: string) {
  if (typeof (window as any).gtag === "function") {
    (window as any).gtag("consent", "update", {
      analytics_storage: "granted",
      ad_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied",
    });
  }
  if (clarityId) loadClarity(clarityId);
}

export default function CookieBanner({ clarityId }: { clarityId?: string }) {
  const [visible, setVisible] = useState(false);
  const acceptRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const stored = localStorage.getItem(CONSENT_KEY);
    if (stored === "accepted") {
      // Returning visitor who already accepted — re-grant and load Clarity
      grantConsent(clarityId);
    } else if (stored === null) {
      // First visit — show banner
      setVisible(true);
    }
    // "declined" → do nothing; GA4 stays in consent-denied mode
  }, [clarityId]);

  // Move focus into the banner when it appears for keyboard / screen-reader users
  useEffect(() => {
    if (visible) acceptRef.current?.focus();
  }, [visible]);

  function accept() {
    localStorage.setItem(CONSENT_KEY, "accepted");
    grantConsent(clarityId);
    setVisible(false);
  }

  function decline() {
    localStorage.setItem(CONSENT_KEY, "declined");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Cookie consent"
      aria-describedby="cookie-banner-desc"
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: "#0D2318",
        borderTop: "2px solid #1A5C3A",
        padding: "14px 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 16,
        flexWrap: "wrap",
      }}
    >
      <p
        id="cookie-banner-desc"
        style={{
          color: "#C8EDD2",
          fontSize: 14,
          margin: 0,
          flex: "1 1 280px",
          lineHeight: 1.55,
        }}
      >
        We use cookies to understand how visitors use our site (Google Analytics
        and Microsoft Clarity).{" "}
        <Link
          href="/cookies"
          style={{ color: "#3A9E6A", textDecoration: "underline" }}
          aria-label="Read our cookie policy"
        >
          Cookie Policy
        </Link>
      </p>

      <div style={{ display: "flex", gap: 10, flexShrink: 0 }}>
        <button
          ref={acceptRef}
          onClick={accept}
          aria-label="Accept cookies"
          style={{
            background: "#3A9E6A",
            color: "#0D2318",
            border: "none",
            borderRadius: 6,
            padding: "8px 22px",
            fontWeight: 700,
            fontSize: 14,
            cursor: "pointer",
            lineHeight: 1.4,
          }}
        >
          Accept
        </button>
        <button
          onClick={decline}
          aria-label="Decline cookies"
          style={{
            background: "transparent",
            color: "#C8EDD2",
            border: "1px solid rgba(58,158,106,0.4)",
            borderRadius: 6,
            padding: "8px 22px",
            fontWeight: 600,
            fontSize: 14,
            cursor: "pointer",
            lineHeight: 1.4,
          }}
        >
          Decline
        </button>
      </div>
    </div>
  );
}
