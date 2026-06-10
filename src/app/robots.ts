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
          "/v2", // A/B test variant — serve to users, not indexable
          // Calculators are intentionally indexable: both are in the sitemap,
          // the leak calculator is a homepage CTA destination with lead
          // capture, and the old disallows contradicted the sitemap.
        ],
      },
    ],
    sitemap: "https://www.sequoiageo.com/sitemap.xml",
  };
}
