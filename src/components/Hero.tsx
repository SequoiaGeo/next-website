import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="forest-hero" aria-labelledby="hero-heading">
      <Image src="/images/sequoia-painted-landscape-hero.webp" alt="" fill priority sizes="100vw" className="forest-hero-image" />
      <div className="forest-hero-shade" aria-hidden="true" />
      <div className="forest-hero-content">
        <p className="forest-eyebrow">Fractional CMO for home-service owners</p>
        <h1 id="hero-heading">Your marketing.<br />One accountable leader.</h1>
        <p className="forest-hero-promise">A clear plan. Coordinated execution.<br className="sm:hidden" /> Numbers you can trust.</p>
        <p className="forest-hero-context">I&rsquo;m Aaron Husak. I lead your marketing plan, budget priorities, team and providers. Keep the people you trust, or add Sequoia execution to carry out the plan.</p>
        <div className="forest-hero-actions">
          <Link href="/contact#book" className="forest-button">Talk marketing with Aaron <span aria-hidden="true">&#8599;</span></Link>
          <Link href="#proof" className="forest-hero-proof-link">See client results <span aria-hidden="true">&#8595;</span></Link>
        </div>
        <p className="forest-hero-trades">HVAC <span aria-hidden="true">&middot;</span> Plumbing <span aria-hidden="true">&middot;</span> Roofing <span aria-hidden="true">&middot;</span> Restoration</p>
      </div>
    </section>
  );
}
