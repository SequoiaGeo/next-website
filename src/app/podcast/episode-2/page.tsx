import type { Metadata } from "next";
import Link from "next/link";
import YouTubeFacade from "@/components/YouTubeFacade";

const title = "Same Prompt, Different HVAC Picks: What Our AI Search Test Revealed";
const url = "https://www.sequoiageo.com/podcast/episode-2";
const description = "Aaron and his ChatGPT co-host compare Gemini HVAC recommendations, recurring companies, changing sources, and what one AI answer can and cannot tell a home service business.";

export const metadata: Metadata = {
  title: `${title} | A Chat with Chat Episode 2`, description,
  alternates: { canonical: url },
  openGraph: { title, description, url, type: "article", images: [{ url: "https://www.sequoiageo.com/images/podcast/episode-2.png", alt: "A Chat with Chat episode 2: Would AI pick your HVAC company?" }] },
};

export default function EpisodeTwo() {
  const schema = { "@context": "https://schema.org", "@type": "PodcastEpisode", name: title,
    url, description, episodeNumber: 2, datePublished: "2026-09-30", duration: "PT27M26S",
    image: "https://www.sequoiageo.com/images/podcast/episode-2.png",
    partOfSeries: { "@type": "PodcastSeries", name: "A Chat with Chat" },
    associatedMedia: { "@type": "VideoObject", name: title, description,
      thumbnailUrl: "https://www.sequoiageo.com/images/podcast/episode-2.png",
      embedUrl: "https://www.youtube.com/embed/7Xggxnh3ulY", duration: "PT27M26S" } };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <section className="bg-[#0D2318] py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <Link href="/media#our-podcast" className="text-sm font-semibold text-[#C8EDD2] underline underline-offset-4">Media and podcasts</Link>
        <p className="mt-8 text-sm font-bold uppercase tracking-widest text-[#C8EDD2]">A Chat with Chat · Episode 2</p>
        <h1 className="mt-4 max-w-4xl text-3xl font-extrabold leading-tight text-white sm:text-5xl">{title}</h1>
        <p className="mt-6 text-[#C8EDD2]"><time dateTime="2026-09-30">September 30, 2026</time> · 27 minutes · Aaron Husak and ChatGPT</p>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/80">{description}</p>
      </div>
    </section>
    <section className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="relative aspect-video overflow-hidden rounded-2xl bg-black"><YouTubeFacade videoId="7Xggxnh3ulY" title={title} /></div>
        <div className="mt-6 flex flex-wrap gap-5 font-semibold text-[#1A5C3A]">
          <a className="underline underline-offset-4" href="https://youtu.be/7Xggxnh3ulY" target="_blank" rel="noopener noreferrer">Watch on YouTube</a>
          <a className="underline underline-offset-4" href="https://www.buzzsprout.com/2651769/episodes/19889912" target="_blank" rel="noopener noreferrer">Listen to the audio episode</a>
        </div>
        <h2 className="mt-12 text-2xl font-bold text-[#0D2318]">What we explore</h2>
        <ul className="mt-5 list-disc space-y-3 pl-6 text-gray-700">
          <li>How the companies and visible sources vary across Gemini Flash and Pro runs.</li>
          <li>The difference between a mention, a citation, and a fixed search ranking.</li>
          <li>What service pages communicate, and why that does not prove what caused a recommendation.</li>
          <li>Why capturing the actual prompts customers use can improve your next test.</li>
        </ul>
        <p className="mt-6 text-sm leading-relaxed text-gray-600">This episode documents an exploratory test, not a controlled experiment or a guarantee of AI recommendations. ChatGPT participates as an AI co-host with a synthetic voice. Product descriptions, company claims, and figures discussed in the recording have not been independently verified for this page.</p>
      </div>
    </section>
  </>;
}
