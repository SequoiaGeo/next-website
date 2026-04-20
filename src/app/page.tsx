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
      <Services />
      <Testimonials />
      <FirstThirtyDays />
      <FAQ />
      <LSABanner />
      <ContactForm />
    </>
  );
}
