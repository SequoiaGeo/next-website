import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/_next/",
          "/v2",                   // A/B test variant — serve to users, not indexable
          "/csr-calculator",       // Internal tool
          "/marketing-leak-calculator", // Internal tool
        ],
      },
    ],
    sitemap: "https://www.sequoiageo.com/sitemap.xml",
  };
}
