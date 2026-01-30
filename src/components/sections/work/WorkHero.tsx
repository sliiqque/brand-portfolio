"use client";

import { motion } from "framer-motion";

export function WorkHero() {
  return (
    <section className="pt-20 pb-12">
      <div className="container mx-auto max-w-[1200px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Selected Work
          </h1>
          <p className="text-xl text-foreground/60 leading-relaxed">
            A deep dive into the projects I&apos;ve built, the problems I&apos;ve
            solved, and the results I&apos;ve delivered for Web3 and SaaS
            companies.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
