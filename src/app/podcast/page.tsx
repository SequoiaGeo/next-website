import type { Metadata } from "next";
import Link from "next/link";
import { podcastVideos } from "@/data/podcast-videos";
const showName = "A Chat with Chat: Home Service Marketing and AI";
const description = "Marketing and AI conversations for home service owners, hosted by Aaron Husak and ChatGPT. Watch episodes and read complete timestamped transcripts.";
export const metadata: Metadata = { title: `${showName} | Sequoia GEO`, description, alternates: { canonical: "https://www.sequoiageo.com/podcast" }, openGraph: { title: showName, description, url: "https://www.sequoiageo.com/podcast", type: "website" } };
export default function PodcastIndex() {
  return <section className="bg-[#fafaf8] py-16"><div className="mx-auto max-w-6xl px-6 lg:px-8">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "PodcastSeries", "@id": "https://www.sequoiageo.com/podcast#series", name: showName, url: "https://www.sequoiageo.com/podcast", description, inLanguage: "en", publisher: { "@type": "Organization", name: "Sequoia GEO", url: "https://www.sequoiageo.com" } }).replace(/</g, "\\u003c") }} />
    <Link href="/media" className="font-semibold text-[#1A5C3A] underline">Media and writing</Link>
    <h1 className="mt-6 text-4xl font-extrabold text-[#0D2318]">A Chat with Chat</h1>
    <p className="mt-3 text-2xl font-semibold text-[#1A5C3A]">Home Service Marketing and AI</p>
    <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-700">Conversations and live walkthroughs about AI search and marketing for home service businesses. Watch each video, read the complete transcript, and explore the practical takeaways.</p>
    <div className="mt-10 grid gap-6 md:grid-cols-2">{[...podcastVideos].sort((a, b) => b.date.localeCompare(a.date)).map(video => <Link key={video.slug} href={`/podcast/${video.slug}`} className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`} alt={video.title} width="480" height="360" loading="lazy" className="aspect-video w-full object-cover" />
      <div className="p-7"><p className="font-semibold text-[#1A5C3A]">{video.label} · {video.runtime}</p><h2 className="mt-3 text-2xl font-bold text-[#0D2318]">{video.title}</h2><p className="mt-4 leading-relaxed text-gray-600">{video.description}</p><span className="mt-5 inline-block font-semibold text-[#1A5C3A] underline underline-offset-4">Watch and read the transcript</span></div>
    </Link>)}</div>
  </div></section>;
}
