"use client";
import Script from "next/script";
import AiReferrerTracker from "@/components/AiReferrerTracker";
import CampaignAttributionTracker from "@/components/CampaignAttributionTracker";
import SitewideIntentTracker from "@/components/SitewideIntentTracker";
import OaiqPixel from "@/components/OaiqPixel";

// Only mounted after a current-version opt-in. No SDK is rendered on the server.
export default function ConsentTracking({ gaId, clarityId }: { gaId?: string; clarityId?: string }) {
  return <>
    {gaId && <>
      <Script id="google-analytics" strategy="afterInteractive" dangerouslySetInnerHTML={{__html: `gtag('js',new Date());gtag('config',${JSON.stringify(gaId)});gtag('config','AW-1042937332');`}} />
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(gaId)}`} strategy="afterInteractive" />
      <AiReferrerTracker /><SitewideIntentTracker />
    </>}
    {clarityId && <Script id="ms-clarity" strategy="afterInteractive" dangerouslySetInnerHTML={{__html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};c[a]('consentv2',{analytics_Storage:'granted',ad_Storage:'denied'});t=l.createElement(r);t.async=1;t.src='https://www.clarity.ms/tag/'+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y)})(window,document,'clarity','script',${JSON.stringify(clarityId)});`}} />}
    <Script id="meta-pixel" strategy="afterInteractive" dangerouslySetInnerHTML={{__html: `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','1394557232154617');fbq('track','PageView');`}} />
    <OaiqPixel /><CampaignAttributionTracker />
  </>;
}
