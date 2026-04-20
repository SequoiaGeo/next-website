import Link from "next/link";

const services = [
  {
    title: "Google PPC Management",
    description:
      "High-intent Google Ads campaigns built around contractor margins and seasonality. Every dollar tracked to booked jobs, not impressions.",
    href: "/services/google-ppc",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59" />
      </svg>
    ),
  },
  {
    title: "Local SEO & GEO",
    description:
      "Rank where homeowners search, including in AI-powered results. Service pages, citations, and content that drives calls.",
    href: "/services/local-seo-geo",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
  },
  {
    title: "Google LSA Management",
    description:
      "Google Guaranteed placement at the top of local results. We manage bids, disputes, and review velocity to keep your cost per lead down.",
    href: "/services/google-lsa",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
  {
    title: "Google Business Profile",
    description:
      "Full GBP management: categories, posts, photos, Q&A, review response, and map pack optimization. Your most-seen listing, treated like it matters.",
    href: "/services/google-business-profile",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z" />
      </svg>
    ),
  },
  {
    title: "Business Automation",
    description:
      "AI-powered workflows for lead intake, follow-up, unsold estimates, and scheduling. Less manual work, more closed jobs.",
    href: "/services/business-automation",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    title: "Fractional CMO",
    description:
      "Executive-level marketing strategy without the $250K salary. Own the revenue outcome across all your channels, not just one of them.",
    href: "/fractional-cmo",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
      </svg>
    ),
  },
  {
    title: "HVAC SEO & PPC",
    description:
      "Seasonal campaigns built for the busy-season sprint and the shoulder-season grind. Fill your schedule when competitors go quiet.",
    href: "/hvac-seo",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
      </svg>
    ),
  },
  {
    title: "Plumbing SEO & PPC",
    description:
      "Emergency and scheduled plumbing leads. High-intent keywords, fast-loading pages, and GBP management that keeps you visible 24/7.",
    href: "/plumbing-seo",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17l-5.1-5.1a2.121 2.121 0 113-3l5.1 5.1m0 0l5.1 5.1a2.121 2.121 0 01-3 3l-5.1-5.1zm0 0L9 18m0 0l-3.75-3.75M9 18h6.75" />
      </svg>
    ),
  },
  {
    title: "Roofing SEO & PPC",
    description:
      "Storm chasing, insurance jobs, and year-round lead gen. Specialized targeting for the full roofing job lifecycle.",
    href: "/roofing-seo",
    icon: (
      <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3H21m-3.75 3H21" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#fafaf8] py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-14">
          <p className="section-overline mb-4">What We Do</p>
          <h2 className="text-4xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-5xl leading-[1.08]">
            Every channel connected{" "}
            <span className="text-[#1A5C3A]">to booked jobs.</span>
          </h2>
          <p className="mt-5 text-base leading-relaxed text-gray-500">
            These aren&rsquo;t standalone packages. They&rsquo;re the channels managed as part of
            a single revenue strategy, each one tracked back to calls answered, appointments
            booked, and jobs closed.
          </p>
        </div>

        {/* Featured: Website Design */}
        <Link
          href="/services/website-design"
          className="group mb-8 flex flex-col lg:flex-row overflow-hidden rounded-2xl border border-[#3A9E6A]/30 bg-white transition hover:border-[#3A9E6A]/60 hover:shadow-xl hover:shadow-[#3A9E6A]/10"
        >
          {/* Content */}
          <div className="flex flex-col justify-between p-8 lg:p-10 lg:max-w-lg">
            <div>
              <span className="inline-block rounded-full bg-[#C8EDD2] px-3 py-1 text-xs font-semibold text-[#0D2318] mb-4">
                Featured Service
              </span>
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0D2318] text-[#3A9E6A]">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#1a1a1a]">Website Design & Development</h3>
              </div>
              <p className="text-base leading-relaxed text-gray-600">
                Fast, conversion-optimized websites built for home service contractors. Not
                templates. Not page builders. Purpose-built to rank in local search, load in
                under two seconds, and turn visitors into booked calls.
              </p>
              <p className="mt-4 text-sm text-gray-400">
                The site you&rsquo;re on right now is an example of what we build.
              </p>
            </div>
            <div className="mt-8 inline-flex items-center text-sm font-semibold text-[#1A5C3A] transition group-hover:text-[#0D2318]">
              See what&rsquo;s included
              <svg className="ml-2 h-4 w-4 transition group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </div>
          </div>

          {/* Visual panel */}
          <div className="flex-1 min-h-[200px] lg:min-h-0 bg-[#0D2318] flex items-center justify-center p-10">
            <div className="w-full max-w-sm">
              {/* Fake browser chrome */}
              <div className="rounded-xl bg-white/10 overflow-hidden shadow-2xl">
                <div className="flex items-center gap-1.5 bg-white/5 px-4 py-3">
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
                  <div className="ml-3 flex-1 rounded bg-white/10 px-3 py-1 text-xs text-white/30">
                    yourcompany.com
                  </div>
                </div>
                <div className="p-5 space-y-3">
                  <div className="h-3 w-3/4 rounded bg-[#3A9E6A]/40" />
                  <div className="h-3 w-1/2 rounded bg-white/10" />
                  <div className="mt-4 h-8 w-32 rounded-lg bg-[#3A9E6A]/60" />
                  <div className="mt-4 grid grid-cols-2 gap-2">
                    <div className="h-16 rounded-lg bg-white/5" />
                    <div className="h-16 rounded-lg bg-white/5" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>

        {/* Services grid */}
        <div className="grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-3 bg-gray-100 rounded-2xl overflow-hidden border border-gray-100">
          {services.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group flex flex-col bg-white p-7 transition hover:bg-[#fafaf8]"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-[#C8EDD2] text-[#1A5C3A] transition group-hover:bg-[#3A9E6A]/20">
                {service.icon}
              </div>
              <h3 className="text-base font-bold text-[#1a1a1a]">{service.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-gray-500">
                {service.description}
              </p>
              <span className="mt-5 inline-flex items-center text-xs font-semibold text-[#1A5C3A] transition group-hover:text-[#3A9E6A]">
                <span aria-label={`Learn more about ${service.title}`}>Learn more</span>
                <svg aria-hidden="true" className="ml-1 h-3.5 w-3.5 transition group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </span>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
