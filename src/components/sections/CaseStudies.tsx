"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRight, Linkedin, Github } from "lucide-react";
import Link from "next/link";

import { ProjectCard } from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/lib/constants";

export function CaseStudies() {
  return (
    <section className="py-32 relative" id="work">
      <div className="container mx-auto max-w-[1200px] px-6">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            SELECTED <br />
            <span className="text-gradient-accent">PROTOTYPES</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
