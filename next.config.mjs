/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // === ABOUT ===
      { source: "/about", destination: "/about-sequoia-geo", permanent: true },

      // === GEO SERVICE PAGES ===
      { source: "/services/plumbing-geo", destination: "/plumbing-seo", permanent: true },
      { source: "/services/hvac-geo", destination: "/hvac-seo", permanent: true },
      { source: "/services/electrical-geo", destination: "/#services", permanent: false },
      { source: "/services/electrical-seo", destination: "/#services", permanent: false },
      { source: "/services/roofing-geo", destination: "/roofing-seo", permanent: true },

      // === OLD MANUS URL STRUCTURES ===
      { source: "/seo-ppc-trade-pages/:path*", destination: "/#services", permanent: true },
      { source: "/sequoia-geo-seo-services/:path*", destination: "/#services", permanent: true },
      { source: "/services-seo-ppc/:path*", destination: "/#services", permanent: true },
      { source: "/service-page/:path*", destination: "/#services", permanent: true },

      // === GEO LANDING PAGES ===
      { source: "/geo-agency", destination: "/", permanent: true },
      { source: "/geo-for-plumbers", destination: "/plumbing-seo", permanent: true },
      { source: "/geo-audit", destination: "/#contact", permanent: false },
      { source: "/geo-agency-seattle", destination: "/", permanent: true },

      // === SERVICE PAGES with no dedicated page yet ===
      { source: "/google-business-profile", destination: "/#services", permanent: false },
      // /ai-automation, /fractional-cmo, /restoration-seo now have real pages — no redirect needed
      { source: "/website-design", destination: "/#services", permanent: false },
      { source: "/website-design-landing", destination: "/#services", permanent: false },
      { source: "/business-automation", destination: "/ai-automation", permanent: true },
      { source: "/cleaning-seo", destination: "/#services", permanent: false },
      { source: "/landscaping-seo", destination: "/#services", permanent: false },
      { source: "/painting-seo", destination: "/#services", permanent: false },
      { source: "/pest-control-seo", destination: "/#services", permanent: false },
      { source: "/garage-door-seo", destination: "/#services", permanent: false },
      { source: "/electrical-seo", destination: "/#services", permanent: false },
      // /hvac-marketing now has its own index page — no redirect needed
      { source: "/google-ads-management", destination: "/#services", permanent: false },
      { source: "/local-service-ads", destination: "/#services", permanent: false },
      { source: "/social-media-marketing", destination: "/#services", permanent: false },
      { source: "/reputation-management", destination: "/#services", permanent: false },
      { source: "/content-marketing", destination: "/#services", permanent: false },
      { source: "/email-marketing", destination: "/#services", permanent: false },
      { source: "/reporting-analytics", destination: "/#services", permanent: false },
      { source: "/contractor-seo-services", destination: "/#services", permanent: false },

      // === RESOURCE / GUIDE PAGES ===
      { source: "/free-seo-checklist", destination: "/blog", permanent: false },
      { source: "/nearby-city-ranking-guide", destination: "/blog", permanent: false },
      { source: "/lsa-ppc-changes-2026", destination: "/blog", permanent: false },
      { source: "/contractor-marketing-guide", destination: "/blog", permanent: false },
      { source: "/marketing-reports-guide", destination: "/blog", permanent: false },
      { source: "/fake-reviews-guide", destination: "/blog", permanent: false },
      { source: "/resources/plumbing-keywords", destination: "/blog", permanent: false },
      { source: "/resources/hvac-keywords", destination: "/blog", permanent: false },
      { source: "/resources/roofing-keywords", destination: "/blog", permanent: false },
      { source: "/contractor-seo-playbooks", destination: "/blog", permanent: false },
      { source: "/speed-to-lead-7-touch-follow-up", destination: "/blog", permanent: false },
      { source: "/45-day-growth-sprint-seo-ppc", destination: "/blog", permanent: false },

      // === WORKSHOP / ACADEMY PAGES ===
      { source: "/workshops", destination: "/", permanent: true },
      { source: "/workshops/:path*", destination: "/", permanent: true },
      { source: "/academy", destination: "/", permanent: true },
      { source: "/factory", destination: "/", permanent: true },
      { source: "/launch-day-sequoia-geo", destination: "/about-sequoia-geo", permanent: true },

      // === BLOG — redirect /post/* to /blog/slug ===
      { source: "/post/:slug*", destination: "/blog/:slug*", permanent: true },

      // === BLOG CATEGORY PAGES ===
      { source: "/blog/categories/:path*", destination: "/blog", permanent: true },

      // === LOCATION PAGES — redirect to relevant service pages ===
      { source: "/plumber-seo-stockton", destination: "/plumbing-seo", permanent: true },
      { source: "/hvac-seo-stockton", destination: "/hvac-seo", permanent: true },
      { source: "/plumber-seo-riverside", destination: "/plumbing-seo", permanent: true },
      { source: "/hvac-seo-riverside", destination: "/hvac-seo", permanent: true },
      { source: "/plumber-seo-bakersfield", destination: "/plumbing-seo", permanent: true },
      { source: "/hvac-seo-bakersfield", destination: "/hvac-seo", permanent: true },
      { source: "/plumber-seo-modesto", destination: "/plumbing-seo", permanent: true },
      { source: "/hvac-seo-modesto", destination: "/hvac-seo", permanent: true },

      // === OTHER OLD PAGES ===
      { source: "/testimonials", destination: "/#testimonials", permanent: true },
      { source: "/portfolio", destination: "/case-studies", permanent: true },
      { source: "/faq", destination: "/#faq", permanent: true },
      { source: "/seo-company-california", destination: "/", permanent: true },
      { source: "/digital-marketing-fresno", destination: "/", permanent: true },
      { source: "/geo-for-plumbers", destination: "/plumbing-seo", permanent: true },
      { source: "/privacy-policy-sequoia-geo", destination: "/privacy-policy", permanent: true },
      { source: "/accessibility-statement-sequoia-geo", destination: "/accessibility-statement", permanent: true },
    ];
  },
};

export default nextConfig;
