"use client";

import { motion } from "framer-motion";
import { Services } from "@/components/sections/Services";
import { SignatureOffer } from "@/components/sections/SignatureOffer";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Card } from "@/components/ui/Card";
import { CheckCircle2 } from "lucide-react";

export default function ServicesPage() {
  return (
    <div className="pb-20">
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Mesh */}
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-accent-cyan/5 blur-[150px] rounded-full -z-10" />

        <div className="container mx-auto max-w-[1200px] px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-10 leading-[0.8]">
              OUR <span className="text-gradient-accent">EXPERTISE</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/60 leading-relaxed max-w-2xl font-medium">
              We provide specialized engineering and consulting services to help
              you build, launch, and scale high-performance products.
            </p>
          </motion.div>
        </div>
      </section>

      <Services />

      <SignatureOffer />

      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-white/[0.02]" />
        <div className="container mx-auto max-w-[1200px] px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-24">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">
                ADDITIONAL <span className="text-accent-cyan">POWER</span>
              </h2>
              <p className="text-xl text-foreground/60 font-medium">
                Beyond our core services, we offer specialized expertise in
                these critical areas.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              "Performance Audits",
              "A11y Compliance",
              "Smart Contract Integration",
              "System Architecture",
              "Technical Recruiting",
              "Unit & E2E Testing",
              "Design Systems",
              "Headless CMS",
              "CI/CD Pipelines",
            ].map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex items-center p-6 border border-white/5 rounded-2xl bg-background/50 backdrop-blur-sm group hover:border-accent-cyan/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-xl bg-accent-cyan/10 flex items-center justify-center text-accent-cyan mr-4 group-hover:scale-110 transition-transform">
                  <CheckCircle2 size={20} />
                </div>
                <span className="font-bold text-lg">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
