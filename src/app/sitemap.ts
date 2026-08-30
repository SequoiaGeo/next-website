import { MetadataRoute } from "next";
import { blogPostsMeta } from "@/data/blog-posts";
import { cities } from "./hvac-marketing/city-data";

const BASE_URL = "https://www.sequoiageo.com";

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages with stable lastModified dates (not new Date() which changes every build)
  const staticPages: MetadataRoute.Sitemap = [
    // Core pages
    { url: BASE_URL, lastModified: "2026-04-18", changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/about-sequoia-geo`, lastModified: "2026-08-21", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/media`, lastModified: "2026-08-21", changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/contact`, lastModified: "2026-04-18", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/how-it-works`, lastModified: "2026-08-20", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/services`, lastModified: "2026-04-18", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/github-repos-home-service-businesses`, lastModified: "2026-08-20", changeFrequency: "monthly", priority: 0.7 },

    // Service pages
    { url: `${BASE_URL}/chatgpt-ads`, lastModified: "2026-07-27", changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE_URL}/geo-agency`, lastModified: "2026-08-29", changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/ai-search-assessment`, lastModified: "2026-08-30", changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/geo-for-plumbers`, lastModified: "2026-08-29", changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/geo-for-restoration`, lastModified: "2026-08-29", changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/ai-seo-for-hvac`, lastModified: "2026-08-29", changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/ai-seo-for-roofers`, lastModified: "2026-08-29", changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/geo-agency/fresno-ca`, lastModified: "2026-08-29", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/geo-agency/colorado-springs-co`, lastModified: "2026-08-29", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/geo-agency/boise-id`, lastModified: "2026-08-29", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/geo-agency/chattanooga-tn`, lastModified: "2026-08-29", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/geo-agency/reno-nv`, lastModified: "2026-08-29", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/fractional-cmo`, lastModified: "2026-04-18", changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/lsa-management`, lastModified: "2026-04-18", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/ai-automation`, lastModified: "2026-04-18", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/websites`, lastModified: "2026-04-18", changeFrequency: "monthly", priority: 0.8 },

    // Trade-specific SEO pages
    { url: `${BASE_URL}/hvac-seo`, lastModified: "2026-04-18", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/plumbing-seo`, lastModified: "2026-04-18", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/roofing-seo`, lastModified: "2026-07-18", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/restoration-seo`, lastModified: "2026-04-18", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/hvac-marketing`, lastModified: "2026-04-18", changeFrequency: "monthly", priority: 0.8 },

    // Fresno local pages
    { url: `${BASE_URL}/seo-agency-fresno`, lastModified: "2026-06-01", changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/local-seo-fresno`, lastModified: "2026-06-01", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/google-ads-fresno`, lastModified: "2026-06-01", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/web-design-fresno`, lastModified: "2026-06-01", changeFrequency: "monthly", priority: 0.8 },

    // Trade-specific comparison pages
    { url: `${BASE_URL}/best-hvac-marketing-agencies`, lastModified: "2026-08-19", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/best-plumbing-marketing-agencies`, lastModified: "2026-08-19", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/best-roofing-marketing-agencies`, lastModified: "2026-08-19", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/best-ai-seo-agencies-home-services`, lastModified: "2026-08-30", changeFrequency: "monthly", priority: 0.8 },

    // Case studies
    { url: `${BASE_URL}/case-studies`, lastModified: "2026-08-30", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/case-studies/balanced-comfort`, lastModified: "2026-08-29", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/case-studies/firemans-chimney-sweep`, lastModified: "2026-07-07", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/case-studies/kabam-plumbing`, lastModified: "2026-07-08", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/case-studies/luma-exteriors`, lastModified: "2026-07-08", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/case-studies/window-insulation-company`, lastModified: "2026-07-08", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/case-studies/ai-search-readiness`, lastModified: "2026-08-30", changeFrequency: "monthly", priority: 0.8 },

    // Guides and resources
    { url: `${BASE_URL}/lsa-guide`, lastModified: "2026-04-18", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/ai-website-seo-guide`, lastModified: "2026-08-20", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/contractors-guide-ai-search`, lastModified: "2026-08-20", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/proof-system`, lastModified: "2026-08-29", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/ai-search-methodology`, lastModified: "2026-08-29", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/ai-and-client-data-policy`, lastModified: "2026-08-30", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/leaving-my-marketing-agency`, lastModified: "2026-04-18", changeFrequency: "monthly", priority: 0.6 },

    // Question pages (answer-first, built for the queries contractors type into ChatGPT and Google)
    { url: `${BASE_URL}/how-much-should-hvac-companies-spend-on-marketing`, lastModified: "2026-08-03", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/how-much-should-plumbers-spend-on-marketing`, lastModified: "2026-08-03", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/how-much-do-hvac-plumbing-leads-cost`, lastModified: "2026-08-03", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/how-much-does-seo-cost-for-contractors`, lastModified: "2026-08-03", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/ai-seo-pricing`, lastModified: "2026-08-20", changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/google-lsa-changes-2026`, lastModified: "2026-08-03", changeFrequency: "weekly", priority: 0.8 },

    // Statistics pages
    { url: `${BASE_URL}/hvac-statistics`, lastModified: "2026-07-18", changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/plumbing-statistics`, lastModified: "2026-04-18", changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/local-services-ads-statistics`, lastModified: "2026-04-18", changeFrequency: "monthly", priority: 0.6 },

    // Tools
    { url: `${BASE_URL}/sales-training`, lastModified: "2026-04-18", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/audit`, lastModified: "2026-08-30", changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/csr-calculator`, lastModified: "2026-04-18", changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/marketing-leak-calculator`, lastModified: "2026-04-18", changeFrequency: "monthly", priority: 0.6 },

    // Blog index
    { url: `${BASE_URL}/blog`, lastModified: "2026-07-08", changeFrequency: "weekly", priority: 0.6 },
  ];

  // Programmatic HVAC city pages, generated from the same source list that
  // generates the pages so the sitemap never drifts out of sync.
  const cityPages: MetadataRoute.Sitemap = cities.map((c) => ({
    url: `${BASE_URL}/hvac-marketing/${c.slug}`,
    lastModified: "2026-06-09",
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  // Individual blog post pages, generated from the shared blog metadata
  const blogPages: MetadataRoute.Sitemap = blogPostsMeta.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: post.dateISO,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticPages, ...cityPages, ...blogPages];
}
