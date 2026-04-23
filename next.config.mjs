/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      // === ABOUT ===
      { source: "/about", destination: "/about-sequoia-geo", permanent: true },

      // === GEO SERVICE PAGES ===
      { source: "/services/plumbing-geo", destination: "/plumbing-seo", permanent: true },
      { source: "/services/hvac-geo", destination: "/hvac-seo", permanent: true },
      { source: "/services/electrical-geo", destination: "/services", permanent: true },
      { source: "/services/electrical-seo", destination: "/services", permanent: true },
      { source: "/services/roofing-geo", destination: "/roofing-seo", permanent: true },

      // === OLD MANUS URL STRUCTURES ===
      { source: "/seo-ppc-trade-pages/:path*", destination: "/services", permanent: true },
      { source: "/sequoia-geo-seo-services/:path*", destination: "/services", permanent: true },
      { source: "/services-seo-ppc/:path*", destination: "/services", permanent: true },
      { source: "/service-page/:path*", destination: "/services", permanent: true },

      // === GEO LANDING PAGES ===
      // /geo-agency now has its own page — no redirect needed
      { source: "/geo-for-plumbers", destination: "/plumbing-seo", permanent: true },
      { source: "/geo-audit", destination: "/contact", permanent: true },
      { source: "/geo-agency-seattle", destination: "/", permanent: true },

      // === SERVICE PAGES with no dedicated page yet ===
      { source: "/google-business-profile", destination: "/services", permanent: true },
      // /ai-automation, /fractional-cmo, /restoration-seo now have real pages — no redirect needed
      { source: "/website-design", destination: "/websites", permanent: true },
      { source: "/website-design-landing", destination: "/websites", permanent: true },
      { source: "/business-automation", destination: "/ai-automation", permanent: true },
      { source: "/cleaning-seo", destination: "/services", permanent: true },
      { source: "/landscaping-seo", destination: "/services", permanent: true },
      { source: "/painting-seo", destination: "/services", permanent: true },
      { source: "/pest-control-seo", destination: "/services", permanent: true },
      { source: "/garage-door-seo", destination: "/services", permanent: true },
      { source: "/electrical-seo", destination: "/services", permanent: true },
      // /hvac-marketing now has its own index page — no redirect needed
      { source: "/google-ads-management", destination: "/services", permanent: true },
      { source: "/local-service-ads", destination: "/lsa-management", permanent: true },
      { source: "/social-media-marketing", destination: "/services", permanent: true },
      { source: "/reputation-management", destination: "/services", permanent: true },
      { source: "/content-marketing", destination: "/services", permanent: true },
      { source: "/email-marketing", destination: "/services", permanent: true },
      { source: "/reporting-analytics", destination: "/services", permanent: true },
      { source: "/contractor-seo-services", destination: "/services", permanent: true },

      // === RESOURCE / GUIDE PAGES ===
      { source: "/free-seo-checklist", destination: "/blog", permanent: true },
      { source: "/nearby-city-ranking-guide", destination: "/blog", permanent: true },
      { source: "/lsa-ppc-changes-2026", destination: "/blog", permanent: true },
      { source: "/contractor-marketing-guide", destination: "/blog", permanent: true },
      { source: "/marketing-reports-guide", destination: "/blog", permanent: true },
      { source: "/fake-reviews-guide", destination: "/blog", permanent: true },
      { source: "/resources/plumbing-keywords", destination: "/blog", permanent: true },
      { source: "/resources/hvac-keywords", destination: "/blog", permanent: true },
      { source: "/resources/roofing-keywords", destination: "/blog", permanent: true },
      { source: "/contractor-seo-playbooks", destination: "/blog", permanent: true },
      { source: "/speed-to-lead-7-touch-follow-up", destination: "/blog", permanent: true },
      { source: "/45-day-growth-sprint-seo-ppc", destination: "/blog", permanent: true },

      // === WORKSHOP / ACADEMY PAGES ===
      { source: "/workshops", destination: "/", permanent: true },
      { source: "/workshops/:path*", destination: "/", permanent: true },
      { source: "/academy", destination: "/", permanent: true },
      { source: "/factory", destination: "/", permanent: true },
      { source: "/launch-day-sequoia-geo", destination: "/about-sequoia-geo", permanent: true },

      // === BLOG — redirect /post/* to correct destinations ===
      // Specific /post/ URLs → matching new blog post slugs
      { source: "/post/which-digital-marketing-agency-specializes-in-contractors-near-me", destination: "/blog/which-marketing-agency-specializes-in-contractors", permanent: true },
      { source: "/post/utm-tags-for-plumbing-and-hvac-companies-how-to-track-every-click-call", destination: "/blog/gbp-utm-tracking-ga4", permanent: true },
      { source: "/post/geoblocking-for-plumbing-and-hvac-websites-how-to-block-foreign-traffic-on-wordpress-wix-weebly", destination: "/blog/geoblocking-contractor-website", permanent: true },
      { source: "/post/google-business-profile-utm-call-tracking-ga4-setup", destination: "/blog/gbp-utm-tracking-ga4", permanent: true },
      // Specific /post/ URLs → relevant service pages
      { source: "/post/what-is-a-fractional-cmo-and-when-you-should-hire-one", destination: "/fractional-cmo", permanent: true },
      { source: "/post/unlocking-success-the-ultimate-guide-to-plumber-seo-for-boosting-your-business-online", destination: "/plumbing-seo", permanent: true },
      // Specific dead /post/ URLs with no matching content → /blog index
      { source: "/post/atmospheric-river-response-seo-for-roofing-central-coast-playbook", destination: "/blog", permanent: true },
      { source: "/post/why-the-wrong-gbp-primary-category-hurts", destination: "/blog", permanent: true },
      { source: "/post/the-micro-zip-intent-map-for-hvac-roofing-central-coast-ca", destination: "/blog", permanent: true },
      { source: "/post/boost-your-service-business-with-expert-seo-strategies", destination: "/blog", permanent: true },
      { source: "/post/google-business-profile-best-practices-for-residential-home-service-contractors", destination: "/blog", permanent: true },
      { source: "/post/google-business-profile-how-to-guide-for-realtors-and-real-estate-agencies", destination: "/blog", permanent: true },
      { source: "/post/transform-your-leads-effective-marketing-for-contractors", destination: "/blog", permanent: true },
      // Old /blog/ slugs that changed on the new site
      { source: "/blog/general-marketing-agency-vs-contractor-specialist-why-your-hvac-or-plumbing-business-needs-an-expe", destination: "/blog/which-marketing-agency-specializes-in-contractors", permanent: true },
      // Catch-all for /post/* that DO have matching blog posts at the same slug
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
      { source: "/testimonials", destination: "/case-studies", permanent: true },
      { source: "/portfolio", destination: "/case-studies", permanent: true },
      { source: "/faq", destination: "/about-sequoia-geo", permanent: true },
      { source: "/seo-company-california", destination: "/", permanent: true },
      { source: "/digital-marketing-fresno", destination: "/", permanent: true },
      { source: "/privacy-policy-sequoia-geo", destination: "/privacy-policy", permanent: true },
      { source: "/accessibility-statement-sequoia-geo", destination: "/accessibility-statement", permanent: true },
      { source: "/blank-4", destination: "/", permanent: true },
    ];
  },
};

export default nextConfig;
