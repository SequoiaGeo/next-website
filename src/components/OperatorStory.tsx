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
          <h2 id="operator-story-heading" className="mt-4 text-3xl font-bold leading-tight tracking-tight text-[#0D2318] sm:text-4xl">I started by picking up the phone.</h2>
          <p className="mt-5 text-lg leading-relaxed text-gray-700">My home-services career began in 2006, cold calling for a solar company. I later spent 13 years owning and operating a home-service business, experiencing firsthand what it takes to generate opportunities, earn customers&rsquo; trust, and keep crews working.</p>
          <p className="mt-4 text-base leading-relaxed text-gray-700">I founded Sequoia GEO in October 2025 to bring that experience to other home-service owners.</p>
          <p className="mt-4 text-base leading-relaxed text-gray-700">Today, I help businesses get found through Google and AI search, with an owner&rsquo;s perspective on what matters after someone finds you: the inquiry, the conversation, and the job booked.</p>
          <p className="mt-4 text-sm font-semibold text-[#1A5C3A]">Aaron Husak, Founder of Sequoia GEO</p>
          <Link href="/about-sequoia-geo" className="mt-6 inline-flex min-h-11 items-center font-bold text-[#1A5C3A] underline underline-offset-4">Meet Aaron and see his operating background</Link>
        </div>
      </div>
    </section>
  );
}
