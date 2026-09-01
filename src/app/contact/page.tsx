import ContactForm from "@/components/ContactForm";
import BookingCalendar from "@/components/BookingCalendar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Request a Marketing Baseline Review | Sequoia GEO",
  description:
    "Find out what your marketing is actually producing. Request a 15-minute baseline review with Aaron Husak, built around leads, jobs booked, and the handoffs between them.",
  alternates: {
    canonical: "https://www.sequoiageo.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Page hero */}
      <section className="bg-[#fafaf8] pt-16 pb-0">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-5xl">
              Request a Marketing Baseline Review
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Tell me what you&rsquo;re spending on marketing. I&rsquo;ll tell you what it&rsquo;s actually producing.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-sm text-gray-500">
              <svg className="h-4 w-4 text-[#3A9E6A]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              15 minutes &bull; No pitch deck &bull; Real operator-level feedback
            </div>
          </div>
        </div>
      </section>

      {/* Trust strip: proof at the point of commitment */}
      <section className="bg-[#fafaf8] pt-8 pb-2">
        <div className="mx-auto max-w-2xl px-6 text-center">
          <div className="rounded-2xl border border-gray-200 bg-white px-6 py-6 shadow-sm">
            <div className="flex justify-center gap-1" aria-label="5 star review">
              {[0, 1, 2, 3, 4].map((i) => (
                <svg aria-hidden="true" key={i} className="h-4 w-4 text-[#3A9E6A]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="mt-3 text-base leading-relaxed text-[#1a1a1a]">
              &ldquo;From our website to SEO to call volume, the results were real and measurable. Not reports that look good. Actual jobs booked.&rdquo;
            </blockquote>
            <p className="mt-3 text-sm font-semibold text-gray-700">
              Michael Bissett <span className="font-normal text-gray-500">&bull; Owner, KABAM Plumbing Services</span>
            </p>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            A home-services career that began in 2006, including 13 years building and running Balanced Comfort and four straight years on the Inc. 5000.{" "}
            <a href="/case-studies" className="font-medium text-[#1A5C3A] underline underline-offset-2 hover:text-[#3A9E6A]">
              See the case studies
            </a>
          </p>
        </div>
      </section>

      {/* Inline calendar, primary conversion path. id="book" is the anchor
          success screens across the site link to ("Pick a time now"). */}
      <section id="book" className="bg-[#fafaf8] py-10 scroll-mt-20">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <div className="mb-6 text-center">
            <h2 className="text-2xl font-bold text-[#1a1a1a]">Choose a time for your call</h2>
            <p className="mt-2 text-sm text-gray-600">The baseline review takes 15 minutes and is held directly with Aaron.</p>
          </div>
          <BookingCalendar />
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-3xl px-6">
        <div className="flex items-center gap-4 py-4">
          <div className="flex-1 border-t border-gray-200" />
          <span className="text-sm text-gray-500">Prefer to share the context first?</span>
          <div className="flex-1 border-t border-gray-200" />
        </div>
      </div>

      {/* Form as fallback */}
      <ContactForm />
    </>
  );
}
