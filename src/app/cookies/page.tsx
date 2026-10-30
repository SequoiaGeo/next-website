import type { Metadata } from "next";
export const metadata: Metadata = { title: "Cookie Policy | Sequoia GEO", description: "Optional analytics and advertising measurement, browser storage and your choices on Sequoia GEO." };
export default function CookiePolicyPage() {
  return <article className="container-narrow max-w-3xl py-20 text-base leading-relaxed [&_h2]:mb-3 [&_h2]:mt-9 [&_h2]:text-xl [&_h2]:font-bold [&_p]:mb-4 [&_li]:mb-3 [&_a]:underline">
    <h1 className="mb-3 text-4xl font-bold">Cookie Policy</h1>
    <p>Updated October 30, 2026</p>
    <h2>Your choice comes first</h2>
    <p>Our optional Google Analytics, Microsoft Clarity, Meta and ChatGPT advertising trackers stay off until you choose Accept in our cookie banner. Choosing Decline keeps these trackers off. Forms, navigation and contact links remain available.</p>
    <p>Choose Cookie settings at the bottom left of the page to review or change your decision. If you withdraw an earlier acceptance, the page reloads to stop the optional tracking software already loaded. We remove known tracking cookies accessible on our own domain and clear our campaign and AI-referral storage. We cannot remove cookies held on another provider&apos;s domain; your browser controls can manage those.</p>
    <h2>Optional tools loaded after acceptance</h2>
    <ul className="list-disc pl-6">
      <li><strong>Google Analytics 4:</strong> measures page visits, traffic sources and actions such as contact-link clicks and successful form captures. Google identifiers can recognize a browser across visits. Common cookies include _ga and _ga_*; Google controls their duration and processing. Google advertising-storage, advertising-user-data and advertising-personalization permissions remain denied in our current configuration.</li>
      <li><strong>Microsoft Clarity:</strong> collects page-interaction information for heatmaps and session replays, such as clicks and scrolling. Common cookies include _clck and _clsk. Clarity&apos;s own settings affect masking and retention; sensitive information should not be entered outside the designated contact fields. Our consent signal allows analytics storage and denies advertising storage.</li>
      <li><strong>Meta Pixel:</strong> loads Meta&apos;s advertising measurement software and records page-view events. Depending on browser and platform settings it may use identifiers such as _fbp and _fbc for measurement or audience matching.</li>
      <li><strong>ChatGPT advertising pixel:</strong> loads OpenAI&apos;s advertising measurement software. Our implementation also sends a lead-created event after a successful contact capture. The event is not proof of a qualified inquiry or paying customer.</li>
    </ul>
    <p>Provider processing can include device, browser, network and interaction information. These technologies are not a list of visitors&apos; names or contact details. Information you submit through a form is handled separately under our <a href="/privacy-policy">Privacy Policy</a>. We do not describe tracking data as guaranteed anonymous.</p>
    <h2>Other browser storage</h2>
    <p>We keep your cookie decision in localStorage for up to 180 days. This preference is necessary to remember and respect your choice; it is not an advertising identifier. An older or expired preference asks you to choose again. If your browser blocks storage, your choice may not persist to another visit.</p>
    <p>After acceptance, our per-tab sessionStorage may record campaign labels, landing-page paths and a recognized AI-referrer host to help attribute inquiries. These records do not contain the full referring URL or its private query text. Declining clears these records.</p>
    <p>Features you choose to use, such as a consultation draft or the question interface, can use browser-tab storage to retain that feature&apos;s state. That functional storage is separate from optional marketing tracking. Embedded videos and booking services may connect to their providers under those services&apos; own settings and policies; the banner does not claim to control every external service.</p>
    <h2>Browser controls and contact</h2>
    <p>You can also block or delete cookies using your browser settings. Clearing site storage removes our saved preference. A script may be blocked by your browser or extensions even after acceptance.</p>
    <p>For questions about our use of visitor information, use the contact details in our <a href="/privacy-policy">Privacy Policy</a> or <a href="/contact">contact Aaron</a>.</p>
  </article>;
}
