import { Hero } from "@/components/sections/Hero";
import { TrustIndicators } from "@/components/sections/TrustIndicators";
import { Services } from "@/components/sections/Services";
import { SignatureOffer } from "@/components/sections/SignatureOffer";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustIndicators />
      <Services />
      <SignatureOffer />
      <CaseStudies />
      <Process />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
