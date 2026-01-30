"use client";

import { WorkHero } from "@/components/sections/work/WorkHero";
import { OtherProjects } from "@/components/sections/work/OtherProjects";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { FinalCTA } from "@/components/sections/FinalCTA";

export function WorkContent() {
  return (
    <div className="pb-20">
      <WorkHero />
      <CaseStudies />
      <OtherProjects />
      <FinalCTA />
    </div>
  );
}
