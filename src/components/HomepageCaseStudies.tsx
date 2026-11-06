const studies = [
  {
    name: "A Fireman’s Chimney Sweep (AFCS)",
    service: "Website rebuild and SEO",
    headline: "365% more organic Google clicks",
    work: "Rebuilt the website around its chimney services and service areas, mapped legacy URLs, and improved mobile contact paths.",
    result: "Google Search Console recorded 26 clicks in the first 30-day period and 121 in the second.",
    evidence: "June 5 to July 4 versus September 14 to October 13, 2026. Verified October 16. Both windows follow launch; seasonal demand may contribute.",
    type: "Measured search activity",
  },
  {
    name: "Amazing Air Solutions",
    service: "Website rebuild and search improvements",
    headline: "50% more organic Google clicks",
    work: "We rebuilt the Amazing Air Solutions website, fixed the mobile navigation and booking integration, and redirected old links to the relevant pages.",
    result: "Google Search Console recorded 40 clicks in the first 30-day period and 60 in the second.",
    evidence: "April 10 to May 9 versus September 14 to October 13, 2026. Verified October 16. Impressions declined from 29,465 to 25,796; the click change is an observation during the engagement.",
    type: "Measured search activity",
  },
  {
    name: "KABAM Plumbing Services",
    service: "Website rebuild and local service content",
    headline: "More weekly calls and a growing team",
    work: "Rebuilt the website around KABAM’s plumbing services and the communities it serves, and corrected duplicate form tracking.",
    result: "In his May 2026 video testimonial, owner Mike Bissett said weekly calls rose from a range of 10 to 12 to a range of 15 to 20. He also reported adding to his team.",
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
              <p className="mt-4 text-sm font-semibold text-[#1A5C3A]">{study.type}</p>
              <p className="mt-3 text-2xl font-bold leading-tight text-[#1A5C3A]">{study.headline}</p>
              <h4 className="mt-5 font-bold text-[#0D2318]">What we did</h4>
              <p className="mt-2 text-base leading-relaxed text-[#46574c]">{study.work}</p>
              <h4 className="mt-5 font-bold text-[#0D2318]">What the record shows</h4>
              <p className="mt-2 text-base leading-relaxed text-[#46574c]">{study.result}</p>
              <div className="mt-5 border-t border-[#173629]/15 pt-4">
                <p className="text-sm leading-relaxed text-[#46574c]">{study.evidence}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-6 max-w-4xl text-sm leading-relaxed text-[#46574c]">Search clicks, phone calls, and booked jobs are different measures. These examples describe the work and the evidence available for each client; they do not establish that Sequoia alone caused the observed changes or predict another client’s results.</p>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-6 rounded-lg bg-[#11271f] p-6 text-white sm:p-8">
          <div className="max-w-xl">
            <h3 className="font-serif text-2xl font-bold sm:text-3xl">Let&rsquo;s talk about your marketing.</h3>
            <p className="mt-3 text-base leading-relaxed text-[#C8EDD2]">Tell Aaron about your business and the next priority you want help with.</p>
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a href="#inquiry" className="forest-button">Talk with Aaron <span aria-hidden="true">&#8595;</span></a>
            <a href="tel:5595213122" className="inline-flex min-h-11 items-center text-lg font-semibold text-white underline underline-offset-4">(559) 521-3122</a>
          </div>
        </div>
      </div>
    </section>
  );
}
