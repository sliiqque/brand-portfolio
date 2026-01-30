"use client";

import { motion } from "framer-motion";
import { TECH_STACK, TECH_STATS } from "@/lib/constants";

export function TrustIndicators() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-4">
            <h3 className="text-2xl font-bold mb-8 text-foreground/80">
              TRUSTED BY INNOVATORS <br />
              <span className="text-accent-violet">WORLDWIDE</span>
            </h3>
            <div className="flex gap-8">
              {TECH_STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-white mb-1">
                    {stat.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-foreground/40 font-bold">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8 relative">
            <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
              <motion.div
                animate={{ x: "-50%" }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="flex flex-nowrap gap-4 whitespace-nowrap"
              >
                {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
                  <div
                    key={`${tech}-${i}`}
                    className="px-6 py-3 rounded-2xl bg-white/5 border border-white/5 text-sm font-medium text-foreground/60 hover:text-accent-cyan hover:border-accent-cyan/30 transition-all cursor-default"
                  >
                    {tech}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
