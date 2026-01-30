"use client";

import { AboutHero } from "@/components/sections/about/AboutHero";
import { Philosophy } from "@/components/sections/about/Philosophy";
import { FinalCTA } from "@/components/sections/FinalCTA";

export function AboutContent() {
  return (
    <div className="pb-20">
      <AboutHero />
      <Philosophy />
      <FinalCTA />
    </div>
  );
}
