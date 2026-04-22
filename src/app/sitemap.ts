import { MetadataRoute } from "next";
import { cities } from "./hvac-marketing/city-data";

const BASE_URL = "https://www.sequoiageo.com";

const blogSlugs = [
  { slug: "ai-red-flags-contractor-marketing", lastModified: "2026-04-18" },
  { slug: "gbp-utm-tracking-ga4", lastModified: "2026-04-18" },
  { slug: "gbp-suspension-reinstatement-playbook", lastModified: "2026-04-18" },
  { slug: "geoblocking-contractor-website", lastModified: "2026-04-18" },
  { slug: "contractor-marketing-services-local-seo", lastModified: "2026-04-18" },
  { slug: "fractional-cmo-vs-agency-vs-marketing-manager", lastModified: "2026-04-18" },
  { slug: "which-marketing-agency-specializes-in-contractors", lastModified: "2026-04-18" },
  { slug: "best-plumbing-seo-keywords", lastModified: "2026-04-18" },
  { slug: "google-removed-call-button-gbp", lastModified: "2026-03-12" },
  { slug: "how-much-does-a-fractional-cmo-cost-pricing-models-what-you-get", lastModified: "2026-03-04" },
  { slug: "roofing-seo-complete-guide-to-ranking", lastModified: "2026-02-05" },
  { slug: "remove-negative-google-reviews", lastModified: "2026-02-18" },
  { slug: "gmb-multi-location-strategy", lastModified: "2025-12-10" },
  { slug: "hvac-geo-ai-era", lastModified: "2025-11-18" },
  { slug: "plumber-geo-ai-search-optimization", lastModified: "2025-10-22" },
  { slug: "local-seo-competitor-analysis", lastModified: "2026-01-20" },
  { slug: "local-seo-for-plumbers", lastModified: "2025-09-15" },
  { slug: "dead-phone-number-lsa", lastModified: "2026-04-18" },
  { slug: "three-agencies-one-report", lastModified: "2026-04-18" },
  { slug: "ai-search-replacing-google-home-services", lastModified: "2026-04-18" },
  { slug: "what-is-a-geo-agency", lastModified: "2026-04-18" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const staticPages: MetadataRoute.Sitemap = [
    // Core
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/about-sequoia-geo`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/case-studies`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "yearly", priority: 0.7 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },

    // Service pages
    { url: `${BASE_URL}/hvac-seo`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/plumbing-seo`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/roofing-seo`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/restoration-seo`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/lsa-management`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/fractional-cmo`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/ai-automation`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/websites`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Free guides
    { url: `${BASE_URL}/lsa-guide`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/ai-website-seo-guide`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/contractors-guide-ai-search`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },

    // Statistics pages
    { url: `${BASE_URL}/hvac-statistics`, lastModified: now, changeFrequency: "monthly", priority: 0.82 },
    { url: `${BASE_URL}/plumbing-statistics`, lastModified: now, changeFrequency: "monthly", priority: 0.82 },
    { url: `${BASE_URL}/local-services-ads-statistics`, lastModified: now, changeFrequency: "monthly", priority: 0.82 },

    // Comparison pages
    { url: `${BASE_URL}/best-hvac-marketing-agencies`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/best-plumbing-marketing-agencies`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },
    { url: `${BASE_URL}/best-roofing-marketing-agencies`, lastModified: now, changeFrequency: "monthly", priority: 0.85 },

    // City marketing index
    { url: `${BASE_URL}/hvac-marketing`, lastModified: now, changeFrequency: "monthly", priority: 0.78 },
  ];

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map(({ slug, lastModified }) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(lastModified).toISOString(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const cityPages: MetadataRoute.Sitemap = cities.map((city) => ({
    url: `${BASE_URL}/hvac-marketing/${city.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.72,
  }));

  return [...staticPages, ...blogPages, ...cityPages];
}
