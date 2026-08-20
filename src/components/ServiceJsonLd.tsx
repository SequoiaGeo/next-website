type ServiceJsonLdProps = {
  serviceType: string;
  description: string;
  url: string;
  /** Optional narrower area, e.g. a metro. Defaults to the United States. */
  areaServed?: { type: "Country" | "State" | "City"; name: string };
};

/**
 * Service structured data for a single service page.
 *
 * Mirrors the inline Service block already used on /geo-for-plumbers and
 * /geo-for-restoration so every service page emits the same shape.
 */
export default function ServiceJsonLd({
  serviceType,
  description,
  url,
  areaServed = { type: "Country", name: "United States" },
}: ServiceJsonLdProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType,
    description,
    url,
    provider: {
      "@type": "Organization",
      name: "Sequoia GEO",
      url: "https://www.sequoiageo.com",
      telephone: "+15595213122",
    },
    areaServed: { "@type": areaServed.type, name: areaServed.name },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
