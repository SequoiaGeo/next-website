import Image from "next/image";
import YouTubeFacade from "@/components/YouTubeFacade";

// --- Asset readiness flags -------------------------------------------------
// Mel's BBQ video testimonial. Paste the YouTube video ID once the captioned
// video is uploaded, then redeploy.
const MELS_VIDEO_ID = "odPENhsu9lU";
// Luma Exteriors card. Flip to true once /public/clients/luma-exteriors.png is
// saved and the copy below is approved. Grid map + precise top-3 % to be added
// after the next local-ranking scan runs (the current scan is labeled baseline,
// so we are not publishing it; ~11 days out as of 2026-06-16).
const LUMA_READY = true;
// ---------------------------------------------------------------------------

export default function ClientResults() {
  if (!MELS_VIDEO_ID && !LUMA_READY) return null;

  return (
    <section className="bg-[#fafaf8] py-16 sm:py-20 border-y border-gray-100">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="text-center mb-10">
          <p className="section-overline mb-3 text-[#1A5C3A]">Real Results</p>
          <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl leading-tight">
            Real businesses. Real outcomes.
          </h2>
        </div>

        {/* Mel's BBQ, video testimonial */}
        {MELS_VIDEO_ID && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center max-w-5xl mx-auto">
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[300px] overflow-hidden rounded-2xl shadow-xl" style={{ paddingBottom: "177.78%" }}>
                <YouTubeFacade
                  videoId={MELS_VIDEO_ID}
                  title="Mel of Mel's BBQ on working with Sequoia GEO"
                  isShort
                />
              </div>
            </div>
            <div>
              <p className="text-base leading-relaxed text-gray-700">
                Mel runs Mel&rsquo;s BBQ. He had no website. He had a Google Business Profile, but it
                was tied to an old email he&rsquo;d lost access to, so he couldn&rsquo;t touch it, and
                he didn&rsquo;t think any of it mattered.
              </p>
              <p className="mt-4 text-base leading-relaxed text-gray-700">
                We got him back control of his Google profile, built{" "}
                <a
                  href="https://melsbbq.catering"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1A5C3A] underline underline-offset-2 font-medium hover:text-[#3A9E6A]"
                >
                  melsbbq.catering
                </a>
                , and connected the two so people searching for catering find him and book. Now
                he&rsquo;s booked out weeks ahead.
              </p>
              <blockquote className="mt-6 border-l-4 border-[#3A9E6A] pl-4">
                <p className="text-lg font-semibold text-[#1a1a1a] leading-snug">
                  &ldquo;Ever since my website was created, we&rsquo;ve had tremendous success.
                  We&rsquo;ve done a lot of catering gigs, and we&rsquo;ve got more coming up.&rdquo;
                </p>
                <footer className="mt-2 text-sm text-gray-500">Mel, Mel&rsquo;s BBQ</footer>
              </blockquote>
            </div>
          </div>
        )}

        {/* Luma Exteriors, GBP category repositioning + reviews */}
        {LUMA_READY && (
          <div className={`${MELS_VIDEO_ID ? "mt-12 pt-12 border-t border-gray-200" : ""} max-w-4xl mx-auto`}>
            <div className="rounded-2xl bg-white border border-gray-100 shadow-md p-7 sm:p-9">
              <div className="flex items-center gap-4 mb-5">
                <Image
                  src="/clients/luma-exteriors.png"
                  alt="Luma Exteriors"
                  width={107}
                  height={101}
                  className="h-14 w-auto"
                  unoptimized
                />
                <div>
                  <p className="text-base font-bold text-[#1a1a1a]">Luma Exteriors</p>
                  <p className="text-sm text-gray-500">Premium exterior remodeling, Austin, TX</p>
                </div>
              </div>
              <p className="text-base leading-relaxed text-gray-700">
                Their Google profile sat in a broad &ldquo;remodeler&rdquo; category, buried against
                every general contractor in the market. We moved them into a category that fits what
                they do best, siding and exteriors, where their customers are actually searching.
              </p>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-[#fafaf8] p-5">
                  <p className="text-3xl font-extrabold text-[#1A5C3A]">9 to 28</p>
                  <p className="mt-1 text-sm text-gray-600">
                    Five-star Google reviews. They did the work, we coached the ask.
                  </p>
                </div>
                <div className="rounded-xl bg-[#fafaf8] p-5">
                  <p className="text-3xl font-extrabold text-[#1A5C3A]">Top 3</p>
                  <p className="mt-1 text-sm text-gray-600">
                    Across about 90% of their service area for siding searches.
                  </p>
                </div>
              </div>
              <p className="mt-5 text-base leading-relaxed text-gray-700">
                Calls and website traffic are climbing right alongside it.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
