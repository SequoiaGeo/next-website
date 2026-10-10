import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Website Work History | Sequoia GEO",
  description: "A dated record of Sequoia GEO website changes, evidence, and search observations.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://www.sequoiageo.com/website-history" },
};

const entries = [
  ["2026-10-10", "Founder portrait and clearer client proof", "Moved documented client work above the services section, added a founder photo to the homepage, and aligned headquarters information with Sanger. A later photo-only revision uses the selected Sequoia hat portrait.", "e7aa5be", "Homepage, About, footer, and business information"],
  ["2026-10-09", "Homepage restoration", "Restored the homepage around home-service marketing, inquiries, and booked jobs. Updated the introduction and brought podcast links into the footer.", "a8619fd", "Homepage and footer"],
  ["2026-10-09", "Four video pages with full transcripts", "Added dedicated watch pages for three podcast episodes and the Las Vegas plumbing walkthrough, with embedded videos, timestamped transcripts, and text downloads.", "8e10ce1", "Podcast pages"],
  ["2026-10-09", "Articles from the first three episodes", "Added companion articles that turn the recorded conversations into readable website content.", "2c07c67", "Blog"],
  ["2026-10-04", "Plumbing service paths", "Updated plumbing search and website service content and the paths visitors use to explore those services.", "3f07527", "Plumbing SEO and website services"],
  ["2026-10-02", "HVAC service scope", "Clarified HVAC search services and the scope of website engagements.", "8337d5e", "HVAC and website services"],
  ["2026-10-01", "Return to home-service marketing", "Changed the homepage focus back toward home-service marketing and GEO after the preceding AI-agent positioning revision.", "3f9ed3a", "Homepage, navigation, and contact copy"],
  ["2026-09-30", "AI-agent positioning and pricing changes", "Repositioned the homepage around custom AI marketing agents and introduced an agents page. A separate same-day update revised search and marketing leadership pricing.", "19ddd95", "Homepage, navigation, and service positioning"],
  ["2026-09-24", "Owner tools and worksheets", "Added home-service owner decision resources, printable worksheets, and a diagnostic tool for investigating call handling.", "6ce7364", "Resources"],
  ["2026-09-19", "Website repair examples", "Added documented website repair examples to the homepage. These described completed corrections rather than a measured increase in inquiries.", "c53ca31", "Homepage client proof"],
  ["2026-09-18", "Client website story", "Expanded the homepage example of a plumbing website project and linked visitors to the documented work.", "236f188", "Homepage client proof"],
  ["2026-09-16", "Founder background and photographs", "Added the founder story and existing first-office and crawlspace photographs, with corresponding homepage and About-page changes.", "9041334", "Homepage and About"],
  ["2026-09-14", "Website-first assessment", "Added an assessment form beginning with the business website, and changed the homepage hero to remove the hero video.", "27bceeb", "Homepage and assessment intake"],
  ["2026-09-05", "Pricing moved off the homepage", "Moved pricing presentation toward dedicated buyer paths and adjusted navigation and contact copy.", "139330f", "Homepage and navigation"],
  ["2026-08-22", "Service pages and measurement controls", "Refreshed plumbing and roofing pages and introduced controls for distinguishing booking activity, calls, and inquiries.", "f433f36", "Service pages and measurement"],
  ["2026-08-19", "Business facts and structured information", "Updated the HVAC agency comparison and business-experience wording, and expanded service information used by search engines.", "64b8474", "Comparison and service pages"],
  ["2026-08-15", "Lighter homepage review section", "Replaced a heavier review widget with a verified review link.", "6203758", "Homepage"],
  ["2026-08-15", "More durable inquiry capture", "Added a persistent capture record and revised the contact and resource-form delivery paths.", "4c0fec0", "Inquiry forms"],
];

export default function WebsiteHistoryPage() {
  return <main className="bg-[#f7f5ef] text-[#0D2318]">
    <div className="mx-auto max-w-6xl px-6 py-14 sm:py-20">
      <p className="font-semibold text-[#1A5C3A]">Draft for review</p>
      <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">Our website work history</h1>
      <p className="mt-6 max-w-3xl text-lg leading-relaxed">What we changed, the evidence behind it, and what we observed afterward. This first edition reconstructs selected changes from August through October 2026.</p>
      <p className="mt-4 max-w-3xl leading-relaxed text-[#526156]">Dates below are source-control record dates, not independently confirmed production timestamps. This is a selected history, not every repository change. Changes often overlap, so later search results cannot automatically be attributed to one release.</p>

      <section className="mt-12 border-y border-[#0D2318]/20 py-8" aria-labelledby="search-context">
        <h2 id="search-context" className="text-2xl font-bold">Site-wide search context, not release outcomes</h2>
        <p className="mt-3 max-w-3xl leading-relaxed">Search Console Web search, September 9 through October 6 compared with August 12 through September 8. Both periods contain 28 complete days. This observation is separate from the release timeline, not a result assigned to an individual change.</p>
        <div className="mt-6 grid gap-5 sm:grid-cols-3">
          {[['Clicks', '85 → 75'], ['Impressions', '97.9K → 51.3K'], ['Average position', '35.5 → 41.1']].map(([label, value]) => <div key={label} className="border-l-2 border-[#1A5C3A] pl-4"><p className="text-[#526156]">{label}, previous → current</p><p className="mt-2 text-3xl font-semibold">{value}</p></div>)}
        </div>
        <p className="mt-5 text-base leading-relaxed text-[#526156]">Read October 9, 2026; the interface reported its last update about 30.5 hours earlier. Impressions retain the interface&apos;s rounding. Average position is affected by query mix; a higher number is worse. These figures measure search activity, not leads or booked jobs. They exclude separate AI-feature reporting. This is a site-wide observation across overlapping changes, not a before-and-after result for any entry. No cause of the decline has been established.</p>
      </section>

      <section className="mt-12" aria-labelledby="recent-visual">
        <h2 id="recent-visual" className="text-2xl font-bold">A visual record of the October 10 revision</h2>
        <p className="mt-3 leading-relaxed text-[#526156]">Saved desktop and mobile previews of the credibility revision. These preserve an earlier portrait choice and are not screenshots of the latest live homepage. A matched before screenshot is not available in this draft.</p>
        <div className="mt-6 grid items-start gap-6 md:grid-cols-[3fr_1fr]">
          <figure><a href="/images/website-history/oct10-credibility-desktop.png"><img src="/images/website-history/oct10-credibility-desktop.png" alt="Desktop preview of the October 10 homepage credibility revision" className="w-full border border-[#0D2318]/20" loading="lazy" /></a><figcaption className="mt-2">Desktop preview, open for full size</figcaption></figure>
          <figure><a href="/images/website-history/oct10-credibility-mobile.png"><img src="/images/website-history/oct10-credibility-mobile.png" alt="Mobile preview of the October 10 homepage credibility revision" className="w-full border border-[#0D2318]/20" loading="lazy" /></a><figcaption className="mt-2">Mobile preview, open for full size</figcaption></figure>
        </div>
      </section>

      <section className="mt-14" aria-labelledby="timeline">
        <h2 id="timeline" className="text-2xl font-bold">Changes on record</h2>
        <div className="mt-6">
          {entries.map(([date, title, summary, commit, area]) => <article key={commit} className="grid gap-4 border-t border-[#0D2318]/20 py-8 sm:grid-cols-[140px_1fr]">
            <div><time dateTime={date} className="font-semibold">{date}</time><p className="mt-2 text-[#526156]">Source record</p></div>
            <div><h3 className="text-2xl font-semibold">{title}</h3><p className="mt-2 font-medium text-[#1A5C3A]">{area}</p><p className="mt-3 leading-relaxed">{summary}</p>
              <a href={`https://github.com/SequoiaGeo/next-website/commit/${commit}`} className="mt-4 inline-block font-semibold text-[#1A5C3A] underline underline-offset-4">View the recorded change</a>
              <div className="mt-5 grid gap-4 bg-white/60 p-5 sm:grid-cols-2"><div><h4 className="font-semibold">First 7 days</h4><p className="mt-2 leading-relaxed text-[#526156]">Release-matched results have not been verified for this entry.</p></div><div><h4 className="font-semibold">First 14 days</h4><p className="mt-2 leading-relaxed text-[#526156]">Release-matched results have not been verified for this entry.</p></div></div>
            </div>
          </article>)}
        </div>
      </section>
      <section className="mt-6 border-t border-[#0D2318]/20 py-8"><h2 className="text-2xl font-bold">What we add next</h2><p className="mt-3 max-w-3xl leading-relaxed">Confirmed publication dates, matched before-and-after screenshots, and Search Console exports for the baseline and follow-up windows. We will show gaining and losing queries and pages, account for reporting lag, and report verified inquiries separately without identifying the people who contacted us.</p><Link href="/ai-search-methodology" className="mt-4 inline-block font-semibold text-[#1A5C3A] underline underline-offset-4">Our measurement approach</Link></section>
    </div>
  </main>;
}
