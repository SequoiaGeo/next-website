import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Portfolio | Sequoia GEO",
  description:
    "Websites built by Sequoia GEO — from-scratch builds and full rebuilds for home service contractors, nonprofits, and local businesses. Built to convert, not just look good.",
  alternates: {
    canonical: "https://www.sequoiageo.com/websites",
  },
};

type BuildType = "From Scratch" | "Rebuild" | "Own Site";

interface PortfolioSite {
  name: string;
  url: string;
  displayUrl: string;
  industry: string;
  buildType: BuildType;
  story: string;
  highlight?: string;
  accentColor: string;
  textColor: string;
  screenshot?: string;
}

const sites: PortfolioSite[] = [
  {
    name: "Sequoia GEO",
    url: "https://www.sequoiageo.com",
    displayUrl: "sequoiageo.com",
    industry: "Marketing & Growth Operations",
    buildType: "Own Site",
    story:
      "Three generations of the same site. Started in Wix, rebuilt with Manus AI, then fully rearchitected in Next.js. Each version tested different conversion hypotheses — the current build is the result of that iteration.",
    highlight: "Wix \u2192 Manus AI \u2192 Next.js",
    accentColor: "#0D2318",
    textColor: "#C8EDD2",
  },
  {
    name: "Kabam Plumbing Services",
    url: "https://www.kabamplumbingservices.com",
    displayUrl: "kabamplumbingservices.com",
    industry: "Plumbing Contractor",
    buildType: "Rebuild",
    story:
      "Full site rebuild for a plumbing contractor. Old site had no clear calls to action, no phone number above the fold, and was losing leads before they ever hit the contact form.",
    accentColor: "#1a3a5c",
    textColor: "#c8dded",
    screenshot: "/kabam-home-page.webp",
  },
  {
    name: "Earth Day Fresno",
    url: "https://www.earthdayfresno.org",
    displayUrl: "earthdayfresno.org",
    industry: "Nonprofit / Community Event",
    buildType: "From Scratch",
    story:
      "No website existed for this annual event before this build. Created a full site to handle vendor registration, event information, and sponsor outreach for an event drawing 5,000+ attendees and 80+ exhibitors.",
    highlight: "5,000+ attendees \u00b7 80+ vendors",
    accentColor: "#1a4a1a",
    textColor: "#c8edcc",
    screenshot: "/earthdayfresno.webp",
  },
  {
    name: "Mel's BBQ Catering",
    url: "https://www.melsbbq.catering",
    displayUrl: "melsbbq.catering",
    industry: "Food & Catering",
    buildType: "From Scratch",
    story:
      "A local BBQ caterer with no web presence at all. Built from zero to a site that showcases their menu, services, and booking process — giving them a professional presence they didn\u2019t have before.",
    accentColor: "#4a1a00",
    textColor: "#edd8c8",
    screenshot: "/melscatering.webp",
  },
  {
    name: "Skye Dreams",
    url: "https://www.skyedreams.com",
    displayUrl: "skyedreams.com",
    industry: "Drone Light Shows / Events",
    buildType: "Rebuild",
    story:
      "Replaced a 4-page WordPress site that was generating minimal traffic. The old site was too shallow to rank and gave visitors no reason to stay. Rebuilt with proper structure, content depth, and conversion paths.",
    accentColor: "#2a1a4a",
    textColor: "#d8c8ed",
    screenshot: "/skyedreams.webp",
  },
  {
    name: "Skye Mesh",
    url: "https://www.skyemesh.com",
    displayUrl: "skyemesh.com",
    industry: "Aerial Advertising / Drones",
    buildType: "From Scratch",
    story:
      "A sister company to Skye Dreams launching a new product line. Built from scratch to establish a clean brand presence and capture early interest before the full launch.",
    accentColor: "#1a2a4a",
    textColor: "#c8d8ed",
    screenshot: "/skyemesh.webp",
  },
];

const buildTypeBadge: Record<BuildType, { bg: string; text: string }> = {
  "From Scratch": { bg: "bg-[#C8EDD2]", text: "text-[#0D2318]" },
  Rebuild: { bg: "bg-amber-100", text: "text-amber-800" },
  "Own Site": { bg: "bg-gray-100", text: "text-gray-700" },
};

export default function WebsitesPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-[#0D2318] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="section-overline mb-4">Website Builds</p>
            <h1 className="font-serif text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Sites built to convert,<br className="hidden sm:block" /> not just look good.
            </h1>
            <p className="mt-6 text-xl leading-relaxed text-[#C8EDD2]/80">
              Every site here was built with the same question an operator asks: will this get
              the phone to ring? Phone number visible, booking path clear, no fluff in the way.
            </p>
          </div>
        </div>
      </section>

      {/* Approach strip */}
      <section className="bg-[#1A5C3A] py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-3 text-sm font-medium text-[#C8EDD2]/80">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#3A9E6A]" />
              Phone number above the fold
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#3A9E6A]" />
              Booking path in the first scroll
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#3A9E6A]" />
              Built for search, not just browsers
            </span>
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#3A9E6A]" />
              Mobile-first, fast load
            </span>
          </div>
        </div>
      </section>

      {/* Portfolio grid */}
      <section className="bg-[#fafaf8] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {sites.map((site) => {
              const badge = buildTypeBadge[site.buildType];
              return (
                <div
                  key={site.url}
                  className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-200 hover:shadow-md hover:-translate-y-0.5 flex flex-col"
                >
                  {/* Screenshot or color placeholder */}
                  {site.screenshot ? (
                    <div className="relative h-44 w-full overflow-hidden">
                      <Image
                        src={site.screenshot}
                        alt={`${site.name} website screenshot`}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  ) : (
                    <div
                      className="h-44 w-full flex items-center justify-center"
                      style={{ backgroundColor: site.accentColor }}
                    >
                      <span
                        className="font-serif text-2xl font-bold tracking-tight px-4 text-center"
                        style={{ color: site.textColor }}
                      >
                        {site.name}
                      </span>
                    </div>
                  )}

                  {/* Card body */}
                  <div className="flex flex-col flex-1 p-6">
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div>
                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide">
                          {site.industry}
                        </p>
                        <p className="text-sm font-medium text-gray-500 mt-0.5">
                          {site.displayUrl}
                        </p>
                      </div>
                      <span
                        className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold ${badge.bg} ${badge.text}`}
                      >
                        {site.buildType}
                      </span>
                    </div>

                    <p className="text-sm leading-relaxed text-gray-600 flex-1">
                      {site.story}
                    </p>

                    {site.highlight && (
                      <p className="mt-3 text-xs font-semibold text-[#1A5C3A]">
                        {site.highlight}
                      </p>
                    )}

                    <div className="mt-5 pt-4 border-t border-gray-100">
                      <a
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1A5C3A] hover:text-[#0D2318] transition-colors"
                      >
                        Visit site
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-10 text-center text-sm text-gray-400">
            All sites linked above are live. Screenshots being added as available.
          </p>
        </div>
      </section>

      {/* What goes into every build */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="section-overline mb-3">Every Build Includes</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a]">
              The same checklist I used to scale to $10M+
            </h2>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                title: "Phone number in the header",
                desc: "Visible without scrolling, on every page. Not buried in the footer.",
              },
              {
                title: "Conversion form above the fold",
                desc: "A contact or booking form where people can actually see it, not three screens down.",
              },
              {
                title: "Mobile-first layout",
                desc: "Most home service searches happen on a phone. The mobile experience is the real experience.",
              },
              {
                title: "Page speed optimized",
                desc: "Slow sites lose leads before they load. Core Web Vitals matter for both ranking and conversion.",
              },
              {
                title: "Local SEO structure",
                desc: "Schema markup, proper title tags, service area pages — built in from day one.",
              },
              {
                title: "Google Business integration",
                desc: "Reviews pulled in, directions linked, GBP and website working as one system.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-xl border border-gray-100 bg-[#fafaf8] p-5"
              >
                <div className="mt-0.5 h-5 w-5 shrink-0 rounded-full bg-[#C8EDD2] flex items-center justify-center">
                  <svg
                    className="h-3 w-3 text-[#1A5C3A]"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={3}
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm font-bold text-[#1a1a1a]">{item.title}</p>
                  <p className="mt-1 text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A5C3A] py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h2 className="font-serif text-2xl font-extrabold text-white sm:text-3xl">
            Need a site that actually gets calls?
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[#C8EDD2]/80">
            We start with an audit of what you have — or what you need. No proposals until
            we both know what the real problem is.
          </p>
          <div className="mt-8">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-8 py-4 text-base font-semibold text-[#1A5C3A] transition hover:bg-[#C8EDD2]"
            >
              Book a Free Strategy Call
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
