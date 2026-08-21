import Link from "next/link";
import type { Metadata } from "next";
import { podcastAppearances, tradeMedia, tradeWriting, type MediaItem } from "@/data/media";

export const metadata: Metadata = {
  title: "Aaron Husak Podcasts, Trade Media, and Industry Writing | Sequoia GEO",
  description:
    "Published podcast appearances and home-services trade writing from Aaron Husak, founder of Sequoia GEO and former Balanced Comfort operator.",
  alternates: { canonical: "https://www.sequoiageo.com/media" },
};

function MediaCard({ item }: { item: MediaItem }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-0.5 hover:border-[#3A9E6A]/50 hover:shadow-md"
    >
      <div className="flex items-center justify-between gap-4">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#1A5C3A]">
          {item.outlet}
        </p>
        <time dateTime={item.datePublished} className="text-xs text-gray-500">
          {item.displayDate}
        </time>
      </div>
      <h3 className="mt-4 text-xl font-bold leading-snug text-[#1a1a1a] transition-colors group-hover:text-[#1A5C3A]">
        {item.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600">{item.summary}</p>
      <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-[#1A5C3A]">
        View the original publication
        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
        </svg>
      </span>
    </a>
  );
}

export default function MediaPage() {
  return (
    <>
      <section className="bg-[#0D2318] py-20 sm:py-28">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <div className="section-overline mb-6">Media and Writing</div>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Conversations and trade writing grounded in operator experience.
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-[#C8EDD2]/80">
            Published discussions and articles featuring Aaron Husak&rsquo;s work in home services,
            local marketing, AI, and business operations. Every item links to the original publisher.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="section-overline mb-3">Featured Conversations</div>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a]">
              Podcasts about AI, local search, and running a home service business
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              This list includes public episodes only. A recorded interview is not listed until the
              publisher makes an episode available online.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {podcastAppearances.map((item) => (
              <MediaCard key={item.url} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fafaf8] py-20 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="section-overline mb-3">Trade Media</div>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a]">
              Independent industry inclusion and published writing
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600">
              These articles were published while Aaron led Balanced Comfort. They document the
              home-services operating experience behind Sequoia GEO&rsquo;s current work.
            </p>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {[...tradeMedia, ...tradeWriting].map((item) => (
              <MediaCard key={item.url} item={item} />
            ))}
          </div>
          <p className="mt-8 text-sm text-gray-600">
            View Aaron&rsquo;s archived contributor profile at{" "}
            <a
              href="https://www.contractingbusiness.com/residential-hvac/contact/21275479/aaron-husak"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[#1A5C3A] underline hover:text-[#0D2318]"
            >
              Contracting Business
            </a>
            .
          </p>
        </div>
      </section>

      <section className="bg-[#0D2318] py-16">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
            Need an operator&rsquo;s perspective on AI search or home-services marketing?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#C8EDD2]/75">
            Aaron works directly with local and home service businesses on visibility, measurement,
            and customer acquisition.
          </p>
          <Link
            href="/contact#book"
            className="mt-7 inline-flex items-center justify-center rounded-xl bg-[#3A9E6A] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#2f8659]"
          >
            Choose a time with Aaron
          </Link>
        </div>
      </section>
    </>
  );
}
