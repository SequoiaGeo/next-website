import type { Metadata } from "next";
import Link from "next/link";
import PodcastGuestForm from "@/components/PodcastGuestForm";

const description = "Apply to be a guest on A Chat with Chat. Share practical AI, search, marketing, and growth experience that home service business owners can use.";
export const metadata: Metadata = {
  title: "Apply to Be a Podcast Guest | A Chat with Chat | Sequoia GEO",
  description,
  alternates: { canonical: "https://www.sequoiageo.com/podcast/apply" },
  openGraph: { title: "Be a Guest on A Chat with Chat", description, url: "https://www.sequoiageo.com/podcast/apply", type: "website" },
};

export default function PodcastGuestApplicationPage() {
  return <>
    <section className="bg-[#0D2318] py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <Link href="/podcast" className="font-semibold text-[#C8EDD2] underline underline-offset-4">Explore the podcast</Link>
        <h1 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl">Apply to be a podcast guest</h1>
        <p className="mt-5 max-w-3xl text-xl leading-relaxed text-white/85">Bring your experience to A Chat with Chat, hosted by Aaron Husak with ChatGPT as an AI co-host.</p>
        <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/85">Our listeners own or market local home service businesses, including HVAC, plumbing, roofing, electrical, landscaping, pest control, and garage doors. Help them make a better decision or put a useful idea into practice.</p>
      </div>
    </section>
    <section className="bg-[#fafaf8] py-12 sm:py-16">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[1fr_1.5fr] lg:px-8">
        <div>
          <h2 className="text-2xl font-bold text-[#0D2318]">What makes a strong guest?</h2>
          <p className="mt-4 leading-relaxed text-gray-700">We welcome credible operators, founders, marketers, and technology or service providers who work with home service companies. Topics include AI search, customer trust, marketing, customer acquisition, and business growth.</p>
          <ul className="mt-5 list-disc space-y-3 pl-5 leading-relaxed text-gray-700">
            <li>Firsthand experience and concrete examples.</li>
            <li>A clear connection to the decisions contractors face.</li>
            <li>One actionable tip listeners can implement right away.</li>
          </ul>
          <h2 className="mt-9 text-2xl font-bold text-[#0D2318]">What to expect</h2>
          <p className="mt-4 leading-relaxed text-gray-700">A weekly, 30 to 45 minute video podcast with practical conversation and follow-up questions from our AI co-host. Applications are reviewed for fit. Applying does not reserve a recording time or guarantee an appearance.</p>
          <p className="mt-5 leading-relaxed text-gray-700">We use your details to review and respond to your application. This form does not subscribe you to marketing emails.</p>
          <Link href="/privacy-policy" className="mt-4 inline-block font-semibold text-[#1A5C3A] underline underline-offset-4">Read our privacy policy</Link>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8">
          <h2 className="text-2xl font-bold text-[#0D2318]">Tell us what you would bring</h2>
          <p className="mt-3 text-sm text-gray-600">All fields are required except the website or LinkedIn link.</p>
          <PodcastGuestForm />
        </div>
      </div>
    </section>
  </>;
}
