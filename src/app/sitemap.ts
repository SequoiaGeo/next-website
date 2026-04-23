import { MetadataRoute } from "next";

const BASE_URL = "https://www.sequoiageo.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Core pages
    { url: BASE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/about-sequoia-geo`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/how-it-works`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/services`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },

    // Service pages
    { url: `${BASE_URL}/geo-agency`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/fractional-cmo`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/lsa-management`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/ai-automation`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/websites`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },

    // Trade-specific SEO pages
    { url: `${BASE_URL}/hvac-seo`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/plumbing-seo`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/roofing-seo`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/restoration-seo`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/hvac-marketing`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },

    // Trade-specific comparison pages
    { url: `${BASE_URL}/best-hvac-marketing-agencies`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/best-plumbing-marketing-agencies`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/best-roofing-marketing-agencies`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },

    // Case studies
    { url: `${BASE_URL}/case-studies`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/case-studies/balanced-comfort`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },

    // Guides and resources
    { url: `${BASE_URL}/lsa-guide`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/ai-website-seo-guide`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/contractors-guide-ai-search`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/leaving-my-marketing-agency`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },

    // Statistics pages
    { url: `${BASE_URL}/hvac-statistics`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/plumbing-statistics`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/local-services-ads-statistics`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },

    // Tools
    { url: `${BASE_URL}/sales-training`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/audit`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/csr-calculator`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/marketing-leak-calculator`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },

    // Blog
    { url: `${BASE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.6 },
  ];
}
