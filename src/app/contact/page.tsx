import ContactForm from "@/components/ContactForm";
import GHLWidget from "@/components/GHLWidget";
import BookingCalendar from "@/components/BookingCalendar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Sequoia GEO: Book a Strategy Call",
  description:
    "Ready to find out what your marketing is actually producing? Book a 15-minute strategy call with Aaron Husak. No pitch deck, no pressure, just a real operator's read on your situation.",
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
              Book a Strategy Call
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

      {/* Inline calendar — primary conversion path */}
      <section className="bg-[#fafaf8] py-10">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <BookingCalendar />
        </div>
      </section>

      {/* Divider */}
      <div className="mx-auto max-w-3xl px-6">
        <div className="flex items-center gap-4 py-4">
          <div className="flex-1 border-t border-gray-200" />
          <span className="text-sm text-gray-400">or fill out the form below</span>
          <div className="flex-1 border-t border-gray-200" />
        </div>
      </div>

      {/* Form as fallback */}
      <ContactForm />
      <GHLWidget />
    </>
  );
}
