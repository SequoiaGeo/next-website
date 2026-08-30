import type { Metadata } from "next";
import { notFound } from "next/navigation";
import CityAiSearchHub from "@/components/CityAiSearchHub";
import { aiSearchCities, getAiSearchCity } from "@/lib/ai-search-cities";

export function generateStaticParams() {
  return aiSearchCities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = getAiSearchCity(slug);
  if (!city) return {};

  return {
    title: `AI SEO in ${city.city}, ${city.stateAbbr} | AI Search Visibility`,
    description: `Evidence-first AI SEO for home service and local businesses serving ${city.city}, ${city.state}. Verify public facts, observe AI answers, and measure each stage separately.`,
    alternates: {
      canonical: `https://www.sequoiageo.com/geo-agency/${city.slug}`,
    },
  };
}

export default async function AiSearchCityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: slug } = await params;
  const city = getAiSearchCity(slug);
  if (!city) notFound();

  return <CityAiSearchHub city={city} />;
}
