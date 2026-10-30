"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import ConsentTracking from "@/components/ConsentTracking";
import { CONSENT_KEY, parseConsent, serializeConsent, isTrackingCookie, type ConsentChoice } from "@/lib/cookie-consent.mjs";
type ClarityFunction = ((...args: unknown[]) => void) & { q?: unknown[][] };
declare global { interface Window { clarity?: ClarityFunction; gtag?: (...args: unknown[]) => void; } }
function readChoice(): ConsentChoice | null {
  try { return parseConsent(window.localStorage.getItem(CONSENT_KEY)); } catch { return null; }
}
export function hasAnalyticsConsent(): boolean {
  return typeof window !== "undefined" && readChoice() === "accepted";
}
function initializeGoogleConsent() {
  const w = window as Window & { dataLayer?: unknown[] };
  w.dataLayer = w.dataLayer || [];
  window.gtag = window.gtag || function () { w.dataLayer!.push(arguments); };
  // Keep existing denied Google advertising permissions; this fix adds no new data use.
  window.gtag("consent", "default", { analytics_storage: "denied", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
  window.gtag("consent", "update", { analytics_storage: "granted", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
}
function clearOptionalStorage() {
  try { window.sessionStorage.removeItem("sg_ai_attribution"); window.sessionStorage.removeItem("sg_campaign_attribution"); } catch { /* Storage can be unavailable. */ }
  const domains = window.location.hostname.split(".").map((_, i, parts) => parts.slice(i).join(".")).filter(d => d.includes("."));
  const paths = ["/", ...window.location.pathname.split("/").filter(Boolean).map((_, i, parts) => "/" + parts.slice(0, i + 1).join("/"))];
  for (const cookie of document.cookie.split(";")) {
    const name = cookie.trim().split("=")[0];
    if (!isTrackingCookie(name)) continue;
    for (const path of paths) {
      document.cookie = `${name}=; Max-Age=0; Path=${path}; SameSite=Lax`;
      for (const domain of domains) document.cookie = `${name}=; Max-Age=0; Path=${path}; Domain=${domain}; SameSite=Lax`;
    }
  }
}
export default function CookieBanner({ gaId, clarityId }: { gaId?: string; clarityId?: string }) {
  const [accepted, setAccepted] = useState(false);
  const [visible, setVisible] = useState(false);
  const acceptedRef = useRef(false);
  const declineRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    const choice = readChoice();
    if (choice === "accepted") { initializeGoogleConsent(); acceptedRef.current = true; setAccepted(true); }
    else { clearOptionalStorage(); setVisible(choice !== "declined"); }
    const sync = (event: StorageEvent) => {
      if (event.key !== CONSENT_KEY && event.key !== null) return;
      if (acceptedRef.current !== (readChoice() === "accepted")) window.location.reload();
      else setVisible(readChoice() === null);
    };
    window.addEventListener("storage", sync);
    return () => window.removeEventListener("storage", sync);
  }, []);
  useEffect(() => { if (visible) declineRef.current?.focus(); }, [visible]);
  function choose(choice: ConsentChoice) {
    try { window.localStorage.setItem(CONSENT_KEY, serializeConsent(choice)); } catch { /* Choice applies on this page even if persistence fails. */ }
    if (choice === "accepted") { initializeGoogleConsent(); acceptedRef.current = true; setAccepted(true); setVisible(false); return; }
    window.gtag?.("consent", "update", { analytics_storage: "denied", ad_storage: "denied", ad_user_data: "denied", ad_personalization: "denied" });
    window.clarity?.("consentv2", { analytics_Storage: "denied", ad_Storage: "denied" });
    (window as Window & { fbq?: (...args: unknown[]) => void }).fbq?.("consent", "revoke");
    clearOptionalStorage(); setAccepted(false); setVisible(false);
    // Reload removes SDKs already in memory. Unmounting scripts alone cannot do that.
    if (acceptedRef.current) window.location.reload();
  }
  return <>
    {accepted && <ConsentTracking gaId={gaId} clarityId={clarityId} />}
    {!visible && <button type="button" onClick={() => setVisible(true)} className="fixed bottom-3 left-3 z-40 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-[#0D2318] shadow-sm">Cookie settings</button>}
    {visible && <section aria-label="Cookie consent" aria-describedby="cookie-banner-desc" className="fixed inset-x-0 bottom-0 z-[9999] border-t-2 border-[#1A5C3A] bg-[#0D2318] p-5 text-white shadow-lg sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-5">
        <div className="min-w-0 flex-1 basis-80"><h2 className="mb-2 text-lg font-semibold">Your cookie choice</h2>
          <p id="cookie-banner-desc" className="text-sm leading-relaxed text-[#C8EDD2]">With your permission, we use Google Analytics and Microsoft Clarity to understand visits and interactions, plus Meta and ChatGPT advertising pixels for advertising measurement. Optional tracking stays off until you accept. You can change your choice in Cookie settings. <Link href="/cookies" className="underline underline-offset-4">Cookie Policy</Link></p>
        </div>
        <div className="flex flex-wrap gap-3">
          <button ref={declineRef} type="button" onClick={() => choose("declined")} aria-label="Decline cookies" className="rounded-md border border-[#C8EDD2] px-6 py-3 text-sm font-semibold text-white">Decline</button>
          <button type="button" onClick={() => choose("accepted")} aria-label="Accept cookies" className="rounded-md border border-[#C8EDD2] bg-[#C8EDD2] px-6 py-3 text-sm font-semibold text-[#0D2318]">Accept</button>
        </div>
      </div>
    </section>}
  </>;
}
