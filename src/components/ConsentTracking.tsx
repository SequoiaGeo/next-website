"use client";
import { useEffect, useState } from "react";
import AiReferrerTracker from "@/components/AiReferrerTracker";
import CampaignAttributionTracker from "@/components/CampaignAttributionTracker";
import SitewideIntentTracker from "@/components/SitewideIntentTracker";
import { startTagManager } from "@/lib/tag-manager.mjs";

// Only mounted after current-version opt-in. GTM is the only SDK loader.
// No noscript iframe: it would bypass this client-side consent boundary.
export default function ConsentTracking({ gaId, clarityId }: { gaId?: string; clarityId?: string }) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    startTagManager(window, document, {gaId, clarityId});
    setReady(true);
  }, [gaId, clarityId]);
  if (!ready) return null;
  return <>
    {gaId && <><AiReferrerTracker /><SitewideIntentTracker /></>}
    <CampaignAttributionTracker />
  </>;
}
