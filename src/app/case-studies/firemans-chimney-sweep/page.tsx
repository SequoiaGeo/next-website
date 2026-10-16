import Link from "next/link";
import type { Metadata } from "next";
import { afcsResults as r } from "@/data/afcs-results";
import BreadcrumbJsonLd from "@/components/BreadcrumbJsonLd";

const url = "https://www.sequoiageo.com/case-studies/firemans-chimney-sweep";
export const metadata: Metadata = {
  title: "Home-Service SEO Case Study: 26 to 121 Clicks | Sequoia GEO",
  description: "A home-service website rebuild and SEO case study. AFCS grew from 26 to 121 organic Google clicks across two documented 30-day post-launch windows.",
  alternates: { canonical: url },
  openGraph: { title: "A home-service website. 365% more organic clicks.", description: "26 to 121 Google organic clicks across documented 30-day windows. See the work, dates and Search Console evidence.", url },
};
const article = {
  "@context": "https://schema.org", "@type": "Article",
  headline: "A home-service website, from 26 to 121 organic Google clicks",
  description: metadata.description,
  datePublished: "2026-07-07", dateModified: "2026-10-16", mainEntityOfPage: url,
  author: { "@type": "Person", "@id": "https://www.sequoiageo.com/#aaron-husak", name: "Aaron Husak" },
  publisher: { "@id": "https://www.sequoiageo.com/#organization" },
};
export default function FiremansChimneySweepCaseStudy() {
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }} />
    <BreadcrumbJsonLd items={[{name:"Home",url:"https://www.sequoiageo.com/"},{name:"Case Studies",url:"https://www.sequoiageo.com/case-studies"},{name:"Home-Service SEO: AFCS",url}]} />
    <section className="bg-[#0D2318] px-6 py-20 text-white sm:py-24">
      <div className="mx-auto max-w-4xl">
        <Link href="/case-studies" className="text-base text-[#C8EDD2] underline underline-offset-4">All case studies</Link>
        <p className="mt-8 text-sm font-semibold uppercase tracking-wider text-[#C8EDD2]">Home-service website and SEO</p>
        <h1 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-6xl">A stronger website.<br />26 to 121 organic clicks.</h1>
        <p className="mt-6 max-w-3xl text-xl leading-relaxed text-[#C8EDD2]">A Fireman&apos;s Chimney Sweep had an established service business and a website that needed rebuilding. Sequoia GEO rebuilt it around the services and communities its customers search for, then continued the SEO work.</p>
        <div className="mt-9 flex flex-wrap items-end gap-4"><strong className="text-6xl font-extrabold text-[#6FCF97]">+{r.clickIncreasePercent}%</strong><p className="max-w-md text-base leading-relaxed">organic Google clicks: June 5 to July 4 versus September 14 to October 13, 2026. The website launched June 5; both windows follow launch.</p></div>
        <p className="mt-5 text-sm leading-relaxed text-[#C8EDD2]">Measured in Google Search Console. Both periods follow launch. Seasonal demand may contribute. This is website search traffic, not a lead or booked-job count.</p>
      </div>
    </section>
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-extrabold text-[#0D2318]">What changed in Google Search</h2>
        <p className="mt-4 text-lg leading-relaxed text-gray-700">The new website launched June 5, 2026. Its first 30 days recorded 26 organic clicks. A later complete 30-day window recorded 121, an increase of 95 clicks, or 365%.</p>
        <figure className="mt-8 rounded-2xl bg-[#fafaf8] p-6 sm:p-8" aria-label="Organic Google clicks increased from 26 to 121 across two 30-day post-launch windows">
          {[r.first,r.latest].map((w) => <div key={w.label} className="mb-7 last:mb-0"><div className="mb-2 flex flex-wrap items-baseline justify-between gap-2"><span className="text-base font-semibold text-[#0D2318]">{w.label}</span><strong className="text-2xl text-[#1A5C3A]">{w.clicks} clicks</strong></div><div className="h-8 rounded bg-[#dbe8e0]"><div className="h-8 rounded bg-[#1A5C3A]" style={{width:`${w.clicks/r.latest.clicks*100}%`}} /></div><p className="mt-2 text-sm text-gray-600">{w.dates}</p></div>)}
          <figcaption className="mt-6 border-t border-gray-200 pt-4 text-sm leading-relaxed text-gray-600">Google Search Console, web search, same domain property and filters. Verified October 16, 2026.</figcaption>
        </figure>
        <div className="mt-8 overflow-x-auto"><table className="w-full text-left text-base"><caption className="mb-4 text-left font-semibold">Two equal 30-day reporting windows</caption><thead><tr className="border-b border-gray-300"><th className="p-3">Metric</th><th className="p-3">June 5 to July 4</th><th className="p-3">September 14 to October 13</th></tr></thead><tbody><tr className="border-b border-gray-200"><th className="p-3 font-medium">Organic clicks</th><td className="p-3">26</td><td className="p-3">121</td></tr><tr className="border-b border-gray-200"><th className="p-3 font-medium">Search impressions</th><td className="p-3">8,174</td><td className="p-3">25,915</td></tr></tbody></table></div>
        <p className="mt-4 text-base leading-relaxed text-gray-600">We lead with clicks. One day, September 20, accounts for 20,854 of the later window&apos;s impressions but only one click. That spike makes the impression increase a poor standalone measure of progress.</p>
      </div>
    </section>
    <section className="bg-[#fafaf8] px-6 py-16">
      <div className="mx-auto grid max-w-4xl gap-10 md:grid-cols-2">
        <div><h2 className="text-3xl font-extrabold text-[#0D2318]">The starting point</h2><p className="mt-5 text-lg leading-relaxed text-gray-700">AFCS serves homeowners across Idaho&apos;s Treasure Valley. Its previous website ran on Wix. The rebuild needed to present the real services and service areas clearly, support phone and quote requests, and preserve relevant routes from the previous site.</p></div>
        <div><h2 className="text-3xl font-extrabold text-[#0D2318]">The work</h2><ul className="mt-5 list-disc space-y-3 pl-5 text-lg leading-relaxed text-gray-700"><li>Rebuilt the website with dedicated service and service-area pages.</li><li>Mapped legacy URLs to relevant replacements during the migration.</li><li>Improved mobile presentation and contact paths.</li><li>Continued technical SEO and checked performance through Search Console.</li></ul></div>
      </div>
    </section>
    <section className="bg-white px-6 py-16">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-3xl font-extrabold text-[#0D2318]">A result other home-service owners can evaluate</h2>
        <p className="mt-5 text-lg leading-relaxed text-gray-700">The business in this case happens to provide chimney services. The work addresses a familiar home-service challenge: helping homeowners find the services you offer, in the places you actually serve, through a website built around that information.</p>
        <p className="mt-5 text-lg leading-relaxed text-gray-700">The documented result is an increase in organic Google clicks during our work together. It is not a promise that another trade or market will see the same increase.</p>
        <a href="https://firemancs.com/" target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex min-h-11 items-center font-bold text-[#1A5C3A] underline underline-offset-4">Visit the rebuilt AFCS website</a>
        <div className="mt-8 rounded-xl border border-gray-200 p-6"><h3 className="text-xl font-bold text-[#0D2318]">How to read the evidence</h3><p className="mt-3 text-base leading-relaxed text-gray-700">The first window is after the June 5 launch, not traffic from the old Wix site. These are dated observations, not a controlled experiment. Fall demand can affect chimney searches. Clicks are not unique customers, qualified leads or booked jobs. Google Business Profile actions and Maps rankings are separate and are not included in this click-growth claim.</p></div>
      </div>
    </section>
    <section className="bg-[#0D2318] px-6 py-16 text-white"><div className="mx-auto max-w-4xl"><h2 className="text-3xl font-extrabold">What is your website contributing?</h2><p className="mt-4 max-w-2xl text-lg leading-relaxed text-[#C8EDD2]">Let&apos;s look at your starting point, the gaps worth fixing and how we would measure the work.</p><Link href="/contact" className="mt-7 inline-flex min-h-12 items-center rounded-lg bg-[#6FCF97] px-6 py-3 text-base font-bold text-[#0D2318]">Discuss your website and SEO</Link></div></section>
  </>;
}
