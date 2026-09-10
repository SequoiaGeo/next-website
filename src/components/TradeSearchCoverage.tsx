import Link from "next/link";

const coverage = {
  plumbing: {
    heading: "Plumbing SEO Strategy: Match the Search to the Job",
    intro: "A plumbing website needs more than a list of services. Keyword research, local SEO, on-page optimization, and technical work should help a customer find the right service in an area your team actually covers.",
    sections: [
      {
        title: "Plumbing keyword research across your service mix",
        body: "Separate emergency plumber searches from drain cleaning, sewer line repair, leak detection, repiping, and water heater installation. Someone with a recurring kitchen blockage has a different question from someone comparing tankless water heaters. Map each group to an existing service page before creating another page. Prioritize work your team provides, and distinguish residential from commercial plumbing where the scope differs.",
      },
      {
        title: "Local SEO for plumbing companies and service areas",
        body: "Check that the website, Google Business Profile, and business listings describe the same company, hours, contact details, and service area. A location page should explain actual coverage and relevant local work, not imply an office that does not exist. Where there is useful local evidence, include permissioned project examples and practical service details. Avoid duplicating a page with only the city name changed.",
      },
      {
        title: "On-page SEO for plumbing service pages",
        body: "Give each page a clear service-focused title, heading, explanation, and next step. Describe the symptoms the service addresses, how an inspection or estimate works, and what the customer needs to know before booking. Link related services when they help the reader, such as leak detection and repiping. Use page-specific FAQs to resolve questions rather than repeating the same answers across the site.",
      },
      {
        title: "Technical SEO, reviews, and lead measurement",
        body: "Check whether important pages can be crawled, rendered, and indexed, whether old URLs redirect to relevant replacements, and whether mobile visitors can call or request service. Keep business listings accurate and request honest reviews without screening out unhappy customers. Report organic inquiries separately from paid leads, repeat customers, and tests. Only connect an inquiry to a booked job when the records support that connection.",
      },
    ],
    links: [
      { href: "/blog/best-plumbing-seo-keywords", label: "Plumbing keyword research guide" },
      { href: "/blog/local-seo-for-plumbers", label: "Local SEO for plumbers" },
      { href: "/geo-for-plumbers", label: "AI-search visibility for plumbers" },
    ],
  },
  hvac: {
    heading: "HVAC SEO Strategy: Service, Equipment, and Local Search",
    intro: "Useful HVAC search coverage connects the equipment a customer owns, the problem they are experiencing, and the locations you serve. These details make a service page more useful than a generic promise to improve rankings.",
    sections: [
      {
        title: "HVAC keyword research tied to buyer intent",
        body: "Separate AC repair, furnace repair, heat pump installation, ductless systems, maintenance, and replacement estimates. Emergency repair searches need a clear service and availability path. Replacement shoppers need help understanding options and the assessment process. Review the actual queries reaching your site and match them to your capabilities before adding content. Residential and commercial needs may warrant different pages when the services genuinely differ.",
      },
      {
        title: "Heating and cooling service-area coverage",
        body: "Build local coverage around places your technicians serve. Useful location information can include available services, operating hours, relevant project examples, and a clear way to request help. Do not invent offices or create interchangeable city pages. Keep Google Business Profile details consistent with the website, and explain limitations such as service boundaries or emergency availability accurately.",
      },
      {
        title: "On-page SEO and mobile website performance",
        body: "Make the service clear in the page title and main heading, then answer the customer's question in readable text. Describe repair symptoms, replacement evaluation, or maintenance scope as appropriate. Connect related pages with descriptive internal links. Check mobile navigation, phone links, forms, page speed, and crawl access to scripts and styles. A technical change should be tested on the live page, not assumed successful because a build passed.",
      },
      {
        title: "Seasonal demand, reviews, and search reporting",
        body: "Review heating and cooling demand separately so seasonal changes do not look like an SEO win or failure. Compare the same queries, locations, and pages over time, alongside year-over-year data when available. Check genuine review feedback and accurate trade or supplier listings. Keep impressions and rankings separate from inquiries, qualified leads, and jobs booked, and report attribution gaps instead of filling them with assumptions.",
      },
    ],
    links: [
      { href: "/hvac-statistics", label: "HVAC market and measurement context" },
      { href: "/blog/local-seo-competitor-analysis", label: "How to assess local search competitors" },
      { href: "/ai-seo-for-hvac", label: "AI-search visibility for HVAC companies" },
    ],
  },
  roofing: {
    heading: "Roofing SEO Strategy: From Search Terms to Estimates",
    intro: "Roofing SEO should distinguish the services, materials, and locations a company actually handles. A repair inquiry, replacement estimate, and commercial roofing project need different information before a customer can decide whom to contact.",
    sections: [
      {
        title: "Roofing keyword research and service-page coverage",
        body: "Group searches around roof repair, roof replacement, leak inspection, storm damage, and the roofing systems you install. Separate residential and commercial work where the scope differs. Match each group to a useful page that explains the service and estimate process. Do not add material or manufacturer claims unless they reflect the company's actual capabilities and current credentials.",
      },
      {
        title: "Local SEO, Google Maps, and business listings",
        body: "Keep your business name, contact details, hours, and service area consistent across the website and relevant listings. Location pages should reflect real coverage, with permissioned project examples or other useful local details where available. A page for every city is not automatically a better strategy. Do not suggest an office exists where it does not, or substitute repeated city names for substantive information.",
      },
      {
        title: "On-page SEO for roofing estimates",
        body: "Use a descriptive title, main heading, and service explanation that help the visitor understand whether you handle their project. Explain what an inspection covers, how an estimate is prepared, and which details the homeowner should have ready. Link repair, replacement, and related service pages where that helps the decision. Display approved project photos and accurate warranty information without promising insurance coverage or an outcome you cannot control.",
      },
      {
        title: "Technical audits and roofing-company accountability",
        body: "Review crawl access, canonical URLs, redirects, sitemap accuracy, mobile usability, and the estimate-request path. Preserve relevant URLs and links when redesigning the site. Check legitimate local references and customer reviews alongside the technical work. Compare the same commercial queries over time, and distinguish seasonal or storm-driven demand from ranking changes. Report qualified roofing inquiries and booked jobs separately from visibility metrics.",
      },
    ],
    links: [
      { href: "/blog/local-seo-competitor-analysis", label: "Local SEO competitor review" },
      { href: "/best-roofing-marketing-agencies", label: "Compare roofing marketing providers" },
      { href: "/ai-seo-for-roofers", label: "AI-search visibility for roofing companies" },
    ],
  },
} as const;

export default function TradeSearchCoverage({ trade }: { trade: keyof typeof coverage }) {
  const content = coverage[trade];
  return (
    <section aria-labelledby={`${trade}-search-coverage`} className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <h2 id={`${trade}-search-coverage`} className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">{content.heading}</h2>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-600">{content.intro}</p>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {content.sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-xl font-bold text-[#1a1a1a]">{section.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-gray-600">{section.body}</p>
            </div>
          ))}
        </div>
        <ul className="mt-8 flex flex-col gap-3 text-base">
          {content.links.map((link) => <li key={link.href}><Link href={link.href} className="font-semibold text-[#1A5C3A] underline underline-offset-4 hover:text-[#0D2318]">{link.label}</Link></li>)}
        </ul>
      </div>
    </section>
  );
}
