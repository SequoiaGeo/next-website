import type { Metadata } from "next";
import Link from "next/link";
import { podcastVideos } from "@/data/podcast-videos";
export const metadata: Metadata = { title: "A Chat with Chat: Videos and Transcripts | Sequoia GEO", description: "Watch Sequoia GEO's conversations and walkthroughs about AI search and home service marketing, with complete timestamped transcripts.", alternates: { canonical: "https://www.sequoiageo.com/podcast" } };
export default function PodcastIndex() {
  return <section className="bg-[#fafaf8] py-16"><div className="mx-auto max-w-6xl px-6 lg:px-8">
    <Link href="/media" className="font-semibold text-[#1A5C3A] underline">Media and writing</Link>
    <h1 className="mt-6 text-4xl font-extrabold text-[#0D2318]">A Chat with Chat</h1>
    <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-700">Conversations and live walkthroughs about AI search and marketing for home service businesses. Watch each video, read the complete transcript, and explore the practical takeaways.</p>
    <div className="mt-10 grid gap-6 md:grid-cols-2">{podcastVideos.map(video => <Link key={video.slug} href={`/podcast/${video.slug}`} className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={`https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`} alt={video.title} width="480" height="360" loading="lazy" className="aspect-video w-full object-cover" />
      <div className="p-7"><p className="font-semibold text-[#1A5C3A]">{video.label} · {video.runtime}</p><h2 className="mt-3 text-2xl font-bold text-[#0D2318]">{video.title}</h2><p className="mt-4 leading-relaxed text-gray-600">{video.description}</p><span className="mt-5 inline-block font-semibold text-[#1A5C3A] underline underline-offset-4">Watch and read the transcript</span></div>
    </Link>)}</div>
  </div></section>;
}
