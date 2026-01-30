"use client";

import { motion } from "framer-motion";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { FinalCTA } from "@/components/sections/FinalCTA";

export function WorkContent() {
  return (
    <div className="pb-20">
      <section className="pt-20 pb-12">
        <div className="container mx-auto max-w-[1200px] px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">Selected Work</h1>
            <p className="text-xl text-foreground/60 leading-relaxed">
              A deep dive into the projects I&apos;ve built, the problems I&apos;ve solved, and the results I&apos;ve delivered for Web3 and SaaS companies.
            </p>
          </motion.div>
        </div>
      </section>
      
      <CaseStudies />
      
      <section className="py-20 border-t border-border-subtle">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-4">Other Projects</h3>
              <p className="text-foreground/60 mb-8">
                I&apos;ve worked on dozens of other projects ranging from small MVPs to large-scale enterprise applications.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center justify-between py-4 border-b border-border-subtle">
                  <span className="font-bold">Governance Protocol UI</span>
                  <span className="text-foreground/40 text-sm">Web3 / React</span>
                </li>
                <li className="flex items-center justify-between py-4 border-b border-border-subtle">
                  <span className="font-bold">E-commerce Headless Frontend</span>
                  <span className="text-foreground/40 text-sm">Next.js / Shopify</span>
                </li>
                <li className="flex items-center justify-between py-4 border-b border-border-subtle">
                  <span className="font-bold">Crypto Wallet Extension</span>
                  <span className="text-foreground/40 text-sm">Web3 / TypeScript</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white/5 rounded-2xl p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4">Want to see more?</h3>
              <p className="text-foreground/60 mb-8">
                Some of my work is under NDA or for private enterprise clients. I can share more details during a private consultation.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <FinalCTA />
    </div>
  );
}
