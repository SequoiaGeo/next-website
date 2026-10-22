import Link from "next/link";

export default function SearchEverywhere() {
  return (
    <section id="search-everywhere" aria-labelledby="search-everywhere-heading" className="border-y border-[#C8EDD2]/20 bg-[#0D2318] py-16 text-white sm:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#C8EDD2]">Search Everywhere Optimization</p>
            <h2 id="search-everywhere-heading" className="mt-4 max-w-2xl font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">Your next customer may choose you before they click.</h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/85">A homeowner can compare reviews on Maps, get an answer from AI or call from a business listing without visiting your website. That is the zero-click pattern: discovery and decisions can happen beyond your site.</p>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/85">I connect SEO, GEO, local profiles and useful content around the services you want to grow. Your website supplies the detail. Your presence beyond it helps people find and evaluate you. One plan, with the right priorities for your business.</p>
            <Link href="/blog/search-everywhere-optimization-home-services" className="mt-6 inline-flex min-h-11 items-center font-semibold text-[#E9B649] underline underline-offset-4">See how search everywhere optimization works <span aria-hidden="true" className="ml-2">&#8599;</span></Link>
          </div>
          <div className="space-y-3" aria-label="How we support customer discovery">
            {[
              ["Search and Maps", "Accurate and useful", "Clear services, accurate business details and a website customers can use."],
              ["AI answers and content", "Specific and supported", "Real job stories, precise service answers and checks of how your business appears in a defined AI sample."],
              ["Inquiry paths and measurement", "Connected and measurable", "A clear next step and measurement that separates website visits, listing actions and AI mentions from actual inquiries."],
            ].map(([title, label, body]) => (
              <div key={title} className="rounded-2xl border border-[#C8EDD2]/20 bg-white/5 p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <div><h3 className="text-xl font-semibold text-white">{title}</h3><p className="mt-1 text-sm font-medium text-[#C8EDD2]">{label}</p><p className="mt-2 text-base leading-relaxed text-white/80">{body}</p></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-10 border-t border-[#C8EDD2]/20 pt-7">
          <p className="max-w-4xl text-base leading-relaxed text-white/85"><strong className="text-white">What that looks like in our work:</strong> For Amazing Air, we turned actual service records into published customer answers and connected service pages. For AFCS, we rebuilt the website and measured changes in Google organic search. We report those results separately from AI mentions and booked jobs.</p>
          <div className="mt-4 flex flex-wrap gap-x-7 gap-y-3 text-sm font-semibold text-[#C8EDD2]">
            <Link href="/blog/search-everywhere-optimization-home-services" className="inline-flex min-h-11 items-center underline underline-offset-4">Explore the client examples</Link>
            <Link href="/contact" className="inline-flex min-h-11 items-center underline underline-offset-4">Book a call</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
