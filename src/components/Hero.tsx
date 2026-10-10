import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return <section className="border-b border-[#0D2318]/15 bg-[#f7f5ef] text-[#0D2318]">
    <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 lg:grid-cols-[1.2fr_1fr] lg:items-center lg:px-8 lg:py-24">
      <div>
        <p className="mb-5 text-base font-semibold text-[#1A5C3A]">Aaron Husak · Marketing for home-service contractors</p>
        <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-6xl">Build your marketing around<br /><span className="text-[#1A5C3A]">the jobs you want booked.</span></h1>
        <p className="mt-6 max-w-xl text-lg leading-relaxed text-[#34483b]">I spent 13 years owning and operating a home-service company. Now I work directly with HVAC, plumbing, roofing, and restoration owners on Google, AI search, advertising, and websites, with attention to the inquiries and jobs that follow.</p>
        <div className="mt-8 flex flex-wrap items-center gap-5">
          <Link href="/contact#book" className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#1A5C3A] px-6 py-3 font-bold text-white hover:bg-[#0D2318]">Book a 15-Minute Call</Link>
          <Link href="#inquiry" className="inline-flex min-h-12 items-center font-bold text-[#1A5C3A] underline underline-offset-4">Tell Me What Needs to Work Better</Link>
        </div>
        <p className="mt-6 text-sm leading-relaxed text-[#526156]">Work directly with Aaron Husak. Bring your marketing questions and get an owner&rsquo;s perspective on the next step.</p>
      </div>
      <figure className="mx-auto w-full max-w-xl lg:ml-auto lg:mr-0">
        <div>
          <Image src="/images/aaron-intro-hat-v3.png" alt="Meet Aaron Husak, wearing a black Sequoia GEO hat, with the words An owner's perspective" width={1672} height={941} priority sizes="(max-width: 1023px) 90vw, 560px" className="h-auto w-full" />
        </div>
        <figcaption className="mt-4 border-t border-[#0D2318]/20 pt-4 text-base leading-relaxed text-[#34483b]">
          <strong className="block text-[#0D2318]">The person you&rsquo;ll work with.</strong>
          Aaron Husak, founder of Sequoia GEO. <Link href="/about-sequoia-geo" className="font-semibold text-[#1A5C3A] underline underline-offset-4">Read my story</Link>.
        </figcaption>
      </figure>
    </div>
  </section>;
}
