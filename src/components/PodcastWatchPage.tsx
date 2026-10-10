import type { Metadata } from "next";
import Link from "next/link";
import { podcastVideos, type PodcastVideo } from "@/data/podcast-videos";
import one from "@/data/podcast-transcripts/episode-1.json";
import two from "@/data/podcast-transcripts/episode-2.json";
import three from "@/data/podcast-transcripts/episode-3.json";
import plumbing from "@/data/podcast-transcripts/las-vegas-plumbing-ai-search.json";

const transcripts = { "episode-1": one, "episode-2": two, "episode-3": three, "las-vegas-plumbing-ai-search": plumbing };
const base = "https://www.sequoiageo.com";
export function watchMetadata(video: PodcastVideo): Metadata {
  return { title: `${video.title} | Sequoia GEO`, description: video.description,
    alternates: { canonical: `${base}/podcast/${video.slug}` },
    openGraph: { title: video.title, description: video.description, url: `${base}/podcast/${video.slug}`, type: "article", images: [{ url: `https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`, alt: video.title }] } };
}

export default function PodcastWatchPage({ video }: { video: PodcastVideo }) {
  const transcript = transcripts[video.slug];
  const url = `${base}/podcast/${video.slug}`;
  const schema = { "@context": "https://schema.org", "@type": "VideoObject", "@id": `${url}#video`, name: video.title, description: video.description,
    thumbnailUrl: `https://i.ytimg.com/vi/${video.videoId}/hqdefault.jpg`, uploadDate: video.date, duration: video.duration,
    embedUrl: `https://www.youtube-nocookie.com/embed/${video.videoId}`, url, inLanguage: "en", transcript: transcript.map(cue => cue.text).join(" "),
    publisher: { "@type": "Organization", name: "Sequoia GEO", url: base } };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
    <section className="bg-[#0D2318] py-12 sm:py-16">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <Link href="/podcast" className="font-semibold text-[#C8EDD2] underline underline-offset-4">All videos and transcripts</Link>
        <p className="mt-6 font-semibold text-[#C8EDD2]">{video.label} · {video.runtime} · Published <time dateTime={video.date}>{video.date}</time></p>
        <h1 className="mt-4 text-3xl font-extrabold leading-tight text-white sm:text-4xl">{video.title}</h1>
        <p className="mt-5 max-w-4xl text-lg leading-relaxed text-white/85">{video.description}</p>
        <div className="relative mt-8 aspect-video overflow-hidden rounded-xl bg-black">
          <iframe className="absolute inset-0 h-full w-full" src={`https://www.youtube-nocookie.com/embed/${video.videoId}`} title={video.title} allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" />
        </div>
        <div className="mt-5 flex flex-wrap gap-5 font-semibold text-[#C8EDD2]">
          <a href="#transcript" className="underline underline-offset-4">Read the full transcript</a>
          <a href={`https://www.youtube.com/watch?v=${video.videoId}`} target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Watch on YouTube</a>
          {video.slug === "episode-2" && <a href="https://www.buzzsprout.com/2651769/episodes/19889912" className="underline underline-offset-4">Listen to the audio episode</a>}
        </div>
      </div>
    </section>
    <section className="bg-white py-12">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-[#0D2318]">What this conversation covers</h2>
        <ul className="mt-5 list-disc space-y-3 pl-6 leading-relaxed text-gray-700">{video.takeaways.map(item => <li key={item}>{item}</li>)}</ul>
        <p className="mt-6 leading-relaxed text-gray-600">These conversations are exploratory. Guest experiences and claims in the recording are attributed to the speaker and have not all been independently verified. AI recommendations can change. A mention, a website visit, an inquiry, and a job booked are separate outcomes. ChatGPT participates as an AI co-host with a synthetic voice.</p>
        <div className="mt-7 flex flex-wrap gap-5 font-semibold text-[#1A5C3A]">
          {"article" in video && <Link href={`/blog/${video.article}`} className="underline underline-offset-4">Read the companion article</Link>}
          <Link href={video.service} className="underline underline-offset-4">Explore related services</Link>
          <Link href="/ai-search-assessment" className="underline underline-offset-4">Request an AI search assessment</Link>
        </div>
        <section id="transcript" className="mt-14 scroll-mt-24 border-t border-gray-200 pt-10">
          <h2 className="text-3xl font-bold text-[#0D2318]">Full transcript</h2>
          <p className="mt-4 leading-relaxed text-gray-600">From the published YouTube captions, lightly corrected for names. Automatic transcription may contain errors. Timestamps open the corresponding point on YouTube. The recording is the source of truth.</p>
          <a href={`/transcripts/${video.slug}.txt`} download className="mt-4 inline-block font-semibold text-[#1A5C3A] underline underline-offset-4">Download the text transcript</a>
          <div className="mt-8 space-y-6">{transcript.map(cue => <p key={cue.seconds} className="leading-8 text-gray-800"><a href={`https://www.youtube.com/watch?v=${video.videoId}&t=${cue.seconds}s`} target="_blank" rel="noopener noreferrer" aria-label={`Watch at ${cue.timestamp}`} className="mr-3 inline-block rounded bg-[#edf5ef] px-2 font-mono text-sm font-semibold text-[#1A5C3A]">{cue.timestamp}</a>{cue.text}</p>)}</div>
        </section>
        <nav aria-label="More episodes" className="mt-12 border-t border-gray-200 pt-8"><h2 className="text-2xl font-bold text-[#0D2318]">More from Sequoia GEO</h2><ul className="mt-5 space-y-4">{podcastVideos.filter(item => item.slug !== video.slug).map(item => <li key={item.slug}><Link className="font-semibold text-[#1A5C3A] underline underline-offset-4" href={`/podcast/${item.slug}`}>{item.title}</Link></li>)}</ul></nav>
      </div>
    </section>
  </>;
}
