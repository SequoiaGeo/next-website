import Image from "next/image";
import Link from "next/link";

export default function OperatorStory() {
  return (
    <section aria-labelledby="operator-story-heading" className="border-y border-[#0D2318]/15 bg-[#f7f5ef] py-14 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-9 px-6 md:grid-cols-[0.8fr_1.2fr] md:items-center lg:gap-16 lg:px-8">
        <figure>
          <Image src="/images/aaron-crawlspace.jpg" alt="Aaron Husak wearing protective coveralls before heading into a crawlspace" width={1368} height={1824} sizes="(max-width: 767px) 90vw, 420px" className="max-h-[460px] w-full object-cover object-[center_30%]" />
          <figcaption className="mt-3 text-sm leading-relaxed text-gray-600">Before heading into a crawlspace, part of Aaron&rsquo;s hands-on home-services background.</figcaption>
        </figure>
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.15em] text-[#1A5C3A]">The experience behind the work</p>
          <h2 id="operator-story-heading" className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#0D2318] sm:text-4xl">Marketing decisions from someone who has run the business.</h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-700">An empty dispatch board is not an abstract marketing problem. Aaron spent 13 years owning and operating a home-services company before founding Sequoia GEO.</p>
          <p className="mt-4 text-base leading-relaxed text-gray-700">Today, he leads your engagement and remains your point of contact. You get clear priorities, an explanation of the work, and evidence of what changed. An AI mention is never presented as a booked job.</p>
          <Link href="/about-sequoia-geo" className="mt-6 inline-flex min-h-11 items-center font-bold text-[#1A5C3A] underline underline-offset-4">Meet Aaron and see his operating background</Link>
        </div>
      </div>
    </section>
  );
}
