import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="forest-hero" aria-labelledby="hero-heading">
      <Image src="/images/sequoia-painted-landscape-hero.webp" alt="" fill priority sizes="100vw" className="forest-hero-image" />
      <div className="forest-hero-shade" aria-hidden="true" />
      <div className="forest-hero-content">
        <p className="forest-eyebrow">For home-service owners</p>
        <h1 id="hero-heading">Home Service Marketing and Fractional CMO Leadership</h1>
        <p className="forest-hero-promise">Your marketing. One accountable leader.</p>
        <ul className="forest-hero-evidence" aria-label="Why work with Aaron">
          <li>20 years in home services, including 13 years building and leading a company.</li>
          <li>Scaled the team from zero to 133 employees</li>
          <li>Four consecutive Inc. 5000 appearances</li>
          <li>Work directly with Aaron on strategy and performance</li>
        </ul>
        <p className="mt-4 text-base leading-relaxed text-white">Selected for <a href="https://www.contractingbusiness.com/columns/article/21277790/introducing-contracting-business-influencer-team" className="font-semibold underline underline-offset-4">Contracting Business&rsquo;s 2024 Team of Influencers</a>.</p>
        <div className="forest-hero-actions">
          <Link href="/contact#book" className="forest-button">Book a call <span aria-hidden="true">&#8599;</span></Link>
          <Link href="#client-case-studies" className="forest-hero-proof-link">See client results <span aria-hidden="true">&#8595;</span></Link>
        </div>
        <p className="forest-hero-trades">HVAC <span aria-hidden="true">&middot;</span> Plumbing <span aria-hidden="true">&middot;</span> Roofing <span aria-hidden="true">&middot;</span> Restoration <span aria-hidden="true">&middot;</span> Electrical <span aria-hidden="true">&middot;</span> Home Services</p>
      </div>
    </section>
  );
}
