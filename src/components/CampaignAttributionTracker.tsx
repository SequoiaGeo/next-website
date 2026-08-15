"use client";

import { useEffect } from "react";
import {
  detectCampaignAttribution,
  storeCampaignAttribution,
} from "@/lib/campaign-attribution";

export default function CampaignAttributionTracker() {
  useEffect(() => {
    const attribution = detectCampaignAttribution(
      window.location.search,
      window.location.pathname
    );
    if (attribution) storeCampaignAttribution(attribution);
  }, []);

  return null;
}
