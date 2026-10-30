import Script from "next/script";

// OpenAI Ads (ChatGPT) web pixel for the chatgpt-test-2026-07 campaign.
// Base snippet from the OpenAI Ads console (pixel ID 6Msga3a42xZqxa2qY1vCYy),
// Loaded only inside the optional-tracking consent boundary. Debug logging is off.
// lead_created firing lives in lib/analytics.ts (trackCapturedLead), which every lead
// capture on the site already calls.
const OAIQ_BASE_SNIPPET = `!function(w,d,s,u){if(w.oaiq)return;var q=function(){q.q.push(arguments)};q.q=[];w.oaiq=q;var j=d.createElement(s);j.async=1;j.src=u;var f=d.getElementsByTagName(s)[0];f.parentNode.insertBefore(j,f)}(window,document,"script","https://bzrcdn.openai.com/sdk/oaiq.min.js");oaiq("init",{pixelId:"6Msga3a42xZqxa2qY1vCYy",debug:false});`;

export default function OaiqPixel() {
  if (!OAIQ_BASE_SNIPPET.trim()) return null;
  return (
    <Script
      id="oaiq-pixel"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: OAIQ_BASE_SNIPPET }}
    />
  );
}
