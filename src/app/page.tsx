import dynamic from "next/dynamic";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import CalculatorBanner from "@/components/CalculatorBanner";
import FullPicture from "@/components/FullPicture";
import HowItWorks from "@/components/HowItWorks";
import WhoIsItFor from "@/components/WhoIsItFor";
import AboutAaron from "@/components/AboutAaron";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import FirstThirtyDays from "@/components/FirstThirtyDays";
import LSABanner from "@/components/LSABanner";
import YouTubeFacade from "@/components/YouTubeFacade";

// Lazy-load below-fold interactive components — defers their JS until
// after the critical rendering path completes.
const FAQ = dynamic(() => import("@/components/FAQ"), { ssr: true });
const ContactForm = dynamic(() => import("@/components/ContactForm"), { ssr: true });

export default function Home() {
  return (
    <>
      <Hero />
      <Problem />
      <CalculatorBanner />
      <FullPicture />
      <HowItWorks />
      <WhoIsItFor />
      <AboutAaron />

      {/* Why work with Sequoia GEO — YouTube facade loads thumbnail only;
          iframe + YouTube JS load on click (saves ~500KB on initial load) */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="section-overline mb-3">Hear It From Aaron</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl leading-tight">
              Why contractors work with Sequoia GEO
            </h2>
          </div>
          <div className="relative w-full overflow-hidden rounded-2xl shadow-xl" style={{ paddingBottom: "56.25%" }}>
            <YouTubeFacade
              videoId="_-VzBDgEYFY"
              title="Why work with Sequoia GEO? Aaron Husak explains"
            />
          </div>
        </div>
      </section>

      <Services />

      {/* What Home Services Marketing Actually Covers */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              What <strong>Home Services Marketing</strong> Actually Covers
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              <strong>Digital marketing for home service companies</strong> is not a single channel. It is a coordinated system designed to generate <strong>qualified leads</strong> across the full customer journey — from the moment a homeowner searches for help to the moment they book.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                title: "Local SEO and Google Business Profile",
                body: "<strong>Local SEO</strong> is the foundation of <strong>home services marketing</strong> for any company that depends on local customers. <strong>Search engine optimization</strong> for contractors builds <strong>organic traffic</strong> from homeowners actively searching for your services. A fully optimized <strong>Google Business Profile</strong> puts you in the Map Pack for <strong>local search</strong> results — the position that generates more <strong>phone calls</strong> than any other channel for most <strong>home service businesses</strong>. <strong>Local businesses</strong> that invest in <strong>local SEO</strong> consistently outperform competitors relying solely on <strong>paid advertising</strong>.",
              },
              {
                title: "Paid Advertising and Google Local Services Ads",
                body: "<strong>Google Local Services Ads</strong> and <strong>pay-per-click advertising</strong> generate <strong>high quality leads</strong> immediately, before <strong>organic search</strong> rankings compound. <strong>Google Ads</strong> for <strong>home service companies</strong> work best when campaigns are built around job type, seasonality, and <strong>average ticket</strong> — not just keyword rankings. <strong>Paid advertising</strong> fills the pipeline while <strong>local SEO</strong> builds the long-term <strong>online presence</strong> that reduces <strong>cost per lead</strong> over time.",
              },
              {
                title: "Reputation Management and Online Reviews",
                body: "Your <strong>online reputation</strong> is the most important conversion factor in <strong>home services marketing</strong>. <strong>Potential customers</strong> comparing providers in the Map Pack look at star ratings before they call. A systematic <strong>review generation</strong> process that produces consistent <strong>new reviews</strong> improves your position in <strong>search results</strong> and converts more <strong>website visitors</strong> into calls. <strong>Brand visibility</strong> in local search is built through <strong>building relationships</strong> with past customers — not one-time campaigns.",
              },
              {
                title: "Attribution and Marketing ROI",
                body: "The most overlooked element of <strong>contractor marketing</strong> is <strong>marketing attribution</strong> — connecting every <strong>ad spend dollar</strong> to a <strong>booked job</strong>. Without <strong>call tracking</strong>, <strong>Google Analytics</strong>, and CRM integration, you cannot measure true <strong>marketing ROI</strong>. Most <strong>marketing agencies</strong> report on <strong>website traffic</strong> and <strong>cost per lead</strong>. A properly built <strong>digital marketing strategy</strong> reports on <strong>cost per booked job</strong> by channel — the only metric that tells you whether your <strong>marketing investment</strong> is producing revenue.",
              },
            ].map((item) => (
              <div key={item.title} className="rounded-2xl border border-gray-200 bg-[#fafaf8] p-7">
                <h3 className="text-base font-bold text-[#1a1a1a]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-600" dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why contractor marketing underperforms */}
      <section className="bg-[#fafaf8] py-20">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl">
              Why Most <strong>Contractor Marketing Programs</strong> Underperform
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              The gap between <strong>home service companies</strong> that grow and those that stay flat is rarely the <strong>marketing channel</strong>. It is almost always the connection — or lack of one — between the <strong>marketing strategy</strong>, the sales process, and the operations side of the business.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {[
              {
                number: "01",
                title: "No Revenue Attribution",
                body: "<strong>Digital marketing agencies</strong> for contractors report on <strong>website visitors</strong>, <strong>organic traffic</strong>, and <strong>cost per lead</strong>. Without <strong>call tracking</strong> connected to your dispatch system, none of those numbers tells you whether the <strong>marketing effort</strong> is producing <strong>booked jobs</strong>. <strong>Business owners</strong> in the <strong>home services industry</strong> who measure every channel by <strong>cost per closed job</strong> consistently outperform those who measure by lead volume.",
              },
              {
                number: "02",
                title: "Siloed Channel Management",
                body: "When your <strong>SEO company</strong>, <strong>Google Ads</strong> manager, and <strong>social media marketing</strong> team each optimize their own channel independently, nobody owns the revenue outcome. <strong>Email marketing</strong> to past customers, <strong>content marketing</strong> for <strong>organic search</strong>, and <strong>paid advertising</strong> for immediate leads all produce different results depending on how well they are coordinated. The <strong>home service companies</strong> that grow fastest have a single operator responsible for the full <strong>digital marketing strategy</strong>.",
              },
              {
                number: "03",
                title: "Weak Phone and Booking Conversion",
                body: "A <strong>home services marketing</strong> program that generates <strong>qualified leads</strong> but has a 35% CSR booking rate is leaving more than half of its <strong>marketing investment</strong> on the table. <strong>Potential customers</strong> who call and do not book are <strong>new customers</strong> your business already paid to generate. <strong>Phone handling</strong>, booking scripts, and <strong>CSR performance</strong> are part of the <strong>marketing strategy</strong> — not separate from it.",
              },
              {
                number: "04",
                title: "No Repeat Customer System",
                body: "<strong>Repeat customers</strong> convert at higher rates, have higher <strong>average tickets</strong>, and generate more referrals than <strong>new customers</strong>. Most <strong>contractor marketing programs</strong> focus entirely on new leads and ignore the past customer database. <strong>Email marketing</strong> campaigns and seasonal re-engagement sequences produce some of the highest <strong>marketing ROI</strong> available to any <strong>home service business</strong> — and most <strong>marketing agencies</strong> never build them.",
              },
            ].map((item) => (
              <div key={item.number} className="rounded-2xl border border-gray-200 bg-white p-7">
                <div className="mb-4 text-4xl font-black text-[#C8EDD2]">{item.number}</div>
                <h3 className="text-base font-bold text-[#1a1a1a]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600" dangerouslySetInnerHTML={{ __html: item.body }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />
      <FirstThirtyDays />
      <FAQ />
      <LSABanner />
      <ContactForm />
    </>
  );
}
