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
import FAQ from "@/components/FAQ";
import LSABanner from "@/components/LSABanner";
import ContactForm from "@/components/ContactForm";

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

      {/* Why work with Sequoia GEO — video */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl px-6 lg:px-8">
          <div className="text-center mb-8">
            <p className="section-overline mb-3">Hear It From Aaron</p>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#1a1a1a] sm:text-4xl leading-tight">
              Why contractors work with Sequoia GEO
            </h2>
          </div>
          <div className="relative w-full overflow-hidden rounded-2xl shadow-xl" style={{ paddingBottom: "56.25%" }}>
            <iframe
              src="https://www.youtube.com/embed/_-VzBDgEYFY?rel=0&modestbranding=1"
              title="Why work with Sequoia GEO? Aaron Husak explains"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
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
