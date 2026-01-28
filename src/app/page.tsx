import { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { TrustIndicators } from "@/components/sections/TrustIndicators";
import { Services } from "@/components/sections/Services";
import { SignatureOffer } from "@/components/sections/SignatureOffer";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { Process } from "@/components/sections/Process";
import { Testimonials } from "@/components/sections/Testimonials";
import { FinalCTA } from "@/components/sections/FinalCTA";

export const metadata: Metadata = {
  title:
    "Frontend & Web3 Engineer Building High-Performance Interfaces | SLIIQQUE",
  description:
    "I help startups and Web3 teams build fast, scalable, and user-friendly React and Web3 interfaces that drive growth and conversions.",
};

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
