import Image from "next/image";
import Link from "next/link";

export default function FounderIntroduction() {
  return <section className="founder-introduction" aria-label="Meet your marketing leader">
    <div className="founder-introduction-inner">
      <span className="founder-portrait">
      <Image src="/aaron-husak.webp" alt="Aaron Husak, founder of Sequoia GEO" width={104} height={104} sizes="(max-width: 640px) 64px, 88px" className="founder-portrait-image" />
      </span>
      <div className="founder-introduction-copy">
        <p className="forest-kicker">An owner&rsquo;s perspective</p>
        <h2>I&rsquo;ve been on your side of the table.</h2>
        <p>13 years owning and operating a home-service company. Four consecutive Inc. 5000 appearances at Balanced Comfort, 2021 to 2024. Now, your direct marketing partner.</p>
      </div>
      <Link href="/about-sequoia-geo" className="founder-story-link">Meet Aaron <span aria-hidden="true">&#8599;</span></Link>
    </div>
  </section>;
}
