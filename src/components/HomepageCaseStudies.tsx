const studies = [
  {
    name: "A Fireman’s Chimney Sweep (AFCS)",
    service: "Website rebuild and SEO",
    headline: "26 to 121 organic Google clicks",
    work: "Rebuilt the website around its chimney services and service areas, mapped legacy URLs, and improved mobile contact paths.",
    result: "Google Search Console recorded 365% more website clicks in the later 30-day window.",
    evidence: "June 5 to July 4 versus September 14 to October 13, 2026. Verified October 16. Both windows follow launch; seasonal demand may contribute.",
    type: "Measured search activity",
  },
  {
    name: "Amazing Air Solutions",
    service: "Website repairs and search improvements",
    headline: "40 to 60 organic Google clicks",
    work: "Repaired mobile navigation, corrected the booking integration, and redirected legacy links to relevant live pages.",
    result: "Google Search Console recorded 50% more website clicks in the later 30-day window. The website repairs restored tested navigation and booking paths.",
    evidence: "April 10 to May 9 versus September 14 to October 13, 2026. Verified October 16. Impressions declined from 29,465 to 25,796; the click change is an observation during the engagement.",
    type: "Verified repairs and measured search activity",
  },
  {
    name: "KABAM Plumbing Services",
    service: "Website rebuild and local service content",
    headline: "A rebuilt website. More calls reported.",
    work: "Rebuilt the website around KABAM’s plumbing services and the communities it serves, and corrected duplicate form tracking.",
    result: "In his May 2026 video testimonial, owner Mike Bissett reported an increase in weekly calls and said he had hired an apprentice.",
    evidence: "Client-reported experience, May 2026. Call volume is Mike’s account, not an independently reconciled measurement of booked jobs.",
    type: "Completed work and client-reported experience",
  },
];

export default function HomepageCaseStudies() {
  return (
    <section id="client-case-studies" aria-labelledby="client-case-studies-heading" className="scroll-mt-28 border-b border-[#173629]/15 bg-[#f7f3e9] py-12 sm:py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wider text-[#1A5C3A]">Client case studies</p>
        <h2 id="client-case-studies-heading" className="mt-3 font-serif text-3xl font-bold text-[#0D2318] sm:text-4xl">What changed for our clients.</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {studies.map((study) => (
            <article key={study.name} className="rounded-lg border border-[#173629]/15 bg-[#fffdf7] p-6">
              <h3 className="text-xl font-bold text-[#0D2318]">{study.name}</h3>
              <p className="mt-2 text-sm font-semibold text-[#46574c]">{study.service}</p>
              <p className="mt-5 text-2xl font-bold leading-tight text-[#1A5C3A]">{study.headline}</p>
              <h4 className="mt-5 font-bold text-[#0D2318]">What we did</h4>
              <p className="mt-2 text-base leading-relaxed text-[#46574c]">{study.work}</p>
              <h4 className="mt-5 font-bold text-[#0D2318]">What followed</h4>
              <p className="mt-2 text-base leading-relaxed text-[#46574c]">{study.result}</p>
              <div className="mt-5 border-t border-[#173629]/15 pt-4">
                <p className="text-sm font-semibold text-[#1A5C3A]">{study.type}</p>
                <p className="mt-2 text-sm leading-relaxed text-[#46574c]">{study.evidence}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 max-w-4xl text-sm leading-relaxed text-[#46574c]">Search clicks, phone calls, and booked jobs are different measures. These examples describe the work and the evidence available for each client; they do not establish that Sequoia alone caused the observed changes or predict another client’s results.</p>
      </div>
    </section>
  );
}
