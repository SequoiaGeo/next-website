import type { Metadata } from "next";
import Link from "next/link";
import DragonsClient from "./dragons-client";

// Landing page for the $50 full-page ad in the Selma Arts Center program for
// How to Train Your Dragon The Musical Jr. The audience is parents and kids in
// their seats before curtain, reached by QR. So the page is a toy first: a
// cheer-sign maker with a real job in the room, and a dragon name generator
// for the kids. The business card sits quietly at the bottom.
//
// Same construction as /immanuel: chrome suppressed via ChromeGate, not in the
// sitemap, linked from nowhere, so every session is attributable to the
// program ad. No DreamWorks names, characters, or artwork anywhere on this
// page; the show title appears only as a factual good-luck line.

export const metadata: Metadata = {
  title: "The Dragon Den | Sequoia GEO",
  description:
    "A little pre-show fun for families at the Selma Arts Center: make a glowing cheer sign for your favorite cast member and find your dragon name.",
  alternates: { canonical: "https://www.sequoiageo.com/dragons" },
};

export default function DragonsPage() {
  return (
    <div className="min-h-screen bg-[#0f0c33] pb-16">
      <section className="mx-auto max-w-xl px-5 pt-6 sm:px-6 sm:pt-10">
        <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#FF6B35] sm:text-sm">
          You found the ad in the program 🐉
        </p>

        <h1 className="mt-1.5 text-[28px] font-extrabold leading-[1.1] tracking-tight text-white sm:text-4xl">
          Break a leg to the whole cast!
        </h1>

        <p className="mt-3 text-[15px] leading-snug text-[#b8b2e6] sm:text-lg">
          We have a kid up there too, so here is some pre-show fun for yours.
          Two things to do before the lights go down.
        </p>
      </section>

      <section className="mx-auto mt-6 max-w-xl px-5 sm:px-6">
        <DragonsClient />
      </section>

      <section className="mx-auto mt-8 max-w-xl px-5 sm:px-6">
        <div className="rounded-2xl border border-[#2b2564] bg-[#141040] p-5">
          <p className="text-[13px] leading-relaxed text-[#b8b2e6]">
            <span className="font-bold text-white">The grown-up part, kept short.</span>{" "}
            This page was built by Aaron Husak, a show parent from right here in
            the valley. I spent 13 years running an HVAC company in Fresno,
            grew it to 130+ employees and four straight years on the Inc. 5000,
            and now I run a small marketing practice helping local home service
            businesses get found. If you own one, or your brother does, the
            first look is free and there is no pitch at the show.
          </p>
          <Link
            href="/audit?utm_source=httyd_program&utm_medium=print"
            className="mt-4 block rounded-xl border border-[#FFD166] py-3 text-center text-sm font-extrabold text-[#FFD166]"
          >
            See what AI says about your business
          </Link>
        </div>

        <p className="mt-6 text-center text-[12px] text-[#6c66a8]">
          Good luck to the cast and crew of How to Train Your Dragon The
          Musical Jr. at the Selma Arts Center. Now silence that phone. 🎭
        </p>
      </section>
    </div>
  );
}
