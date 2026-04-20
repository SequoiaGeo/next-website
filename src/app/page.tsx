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
      <Testimonials />
      <FirstThirtyDays />
      <FAQ />
      <LSABanner />
      <ContactForm />
    </>
  );
}
