import Link from "next/link";
import Image from "next/image";

const services = [
  { label: "ChatGPT Ads", href: "/chatgpt-ads" },
  { label: "HVAC SEO", href: "/hvac-seo" },
  { label: "Plumbing SEO", href: "/plumbing-seo" },
  { label: "Roofing SEO", href: "/roofing-seo" },
  { label: "LSA Management", href: "/lsa-management" },
  { label: "Operator-Led Marketing", href: "/fractional-cmo" },
  { label: "AI Automation", href: "/ai-automation" },
  { label: "AI SEO / Search Visibility", href: "/geo-agency" },
  { label: "AI Search Assessment", href: "/ai-search-assessment" },
  { label: "AI SEO for HVAC", href: "/ai-seo-for-hvac" },
  { label: "AI SEO for Plumbers", href: "/geo-for-plumbers" },
  { label: "AI SEO for Roofers", href: "/ai-seo-for-roofers" },
  { label: "AI SEO for Restoration", href: "/geo-for-restoration" },
  { label: "Fresno SEO Agency", href: "/seo-agency-fresno" },
];

const resources = [
  { label: "Free LSA Guide", href: "/lsa-guide" },
  { label: "AI SEO Guide", href: "/ai-website-seo-guide" },
  { label: "GEO & AI SEO Pricing", href: "/ai-seo-pricing" },
  { label: "Sequoia Proof System", href: "/proof-system" },
  { label: "AI Search Measurement Method", href: "/ai-search-methodology" },
  { label: "AI and Client Data Policy", href: "/ai-and-client-data-policy" },
  { label: "Hicks Paving AI Search Snapshot", href: "/case-studies/ai-search-readiness" },
  { label: "AI SEO Agency Comparison", href: "/best-ai-seo-agencies-home-services" },
  { label: "GitHub Tools for Home Services", href: "/github-repos-home-service-businesses" },
  { label: "HVAC Statistics 2026", href: "/hvac-statistics" },
  { label: "Plumbing Statistics 2026", href: "/plumbing-statistics" },
  { label: "LSA Statistics 2026", href: "/local-services-ads-statistics" },
  { label: "Best HVAC Agencies", href: "/best-hvac-marketing-agencies" },
  { label: "Best Plumbing Agencies", href: "/best-plumbing-marketing-agencies" },
  { label: "Best Roofing Agencies", href: "/best-roofing-marketing-agencies" },
  { label: "Leaving Your Agency?", href: "/leaving-my-marketing-agency" },
];

const markets = [
  { label: "AI SEO Markets", href: "/geo-agency#markets" },
  { label: "Boise, ID", href: "/hvac-marketing/boise-id" },
  { label: "Colorado Springs, CO", href: "/hvac-marketing/colorado-springs-co" },
  { label: "Knoxville, TN", href: "/hvac-marketing/knoxville-tn" },
  { label: "Bakersfield, CA", href: "/hvac-marketing/bakersfield-ca" },
  { label: "All Markets", href: "/hvac-marketing" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "AI and Client Data Policy", href: "/ai-and-client-data-policy" },
  { label: "Terms & Conditions", href: "/terms-conditions" },
];

export default function Footer() {
  return (
    <footer className="bg-dark-green text-white">
      <div className="container-narrow py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/logo.png"
                alt="Sequoia GEO logo"
                width={40}
                height={40}
                className="rounded-lg brightness-110"
              />
              <span className="text-xl font-bold tracking-tight">
                Sequoia GEO
              </span>
            </div>
            <p className="text-pale-green/80 text-sm leading-relaxed max-w-md mb-4">
              Growth operations for home service companies doing $2M to $15M.
              Founded by Aaron Husak, whose home-services career began in 2006 and includes 13 years as an owner and operator.
            </p>
            <p className="text-pale-green/60 text-xs leading-relaxed max-w-md mb-6">
              4x Inc 5000 (2021 to 2024) &middot; Former California contractor qualifier &middot; Fresno, CA &middot; Serving Nationwide
            </p>
            <div className="flex flex-col gap-2 text-sm">
              <Link href="/contact#book" className="font-semibold text-white hover:text-accent-green transition-colors">
                Choose a Time With Aaron
              </Link>
              <a href="tel:5595213122" className="text-pale-green/70 hover:text-white transition-colors">
                (559) 521-3122
              </a>
              <a href="mailto:Aaron@sequoiageo.com" className="text-pale-green/70 hover:text-white transition-colors">
                Aaron@sequoiageo.com
              </a>
              <Link href="/case-studies" className="text-pale-green/70 hover:text-white transition-colors mt-1">
                Case Studies
              </Link>
              <Link href="/about-sequoia-geo" className="text-pale-green/70 hover:text-white transition-colors">
                About
              </Link>
              <Link href="/media" className="text-pale-green/70 hover:text-white transition-colors">
                Media and Writing
              </Link>
              <Link href="/blog" className="text-pale-green/70 hover:text-white transition-colors">
                Blog
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-green mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-pale-green/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-green mb-4">
              Resources
            </h3>
            <ul className="space-y-2.5">
              {resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-pale-green/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Markets */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent-green mb-4">
              Markets
            </h3>
            <ul className="space-y-2.5">
              {markets.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-pale-green/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-accent-green mb-2">
                Business Hours
              </p>
              <p className="text-sm text-pale-green/70">
                Mon to Fri, 9AM to 7PM Pacific
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-narrow py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-pale-green/50">
            &copy; 2026 Sequoia GEO. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {legalLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-pale-green/50 hover:text-white transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
