"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We dive deep into your product goals, user needs, and technical requirements to define a clear roadmap.",
  },
  {
    number: "02",
    title: "Design & Architecture",
    description:
      "Creating high-fidelity interfaces and scalable system architectures that prioritize performance and security.",
  },
  {
    number: "03",
    title: "Development & Testing",
    description:
      "Clean, efficient coding with continuous integration and rigorous testing to ensure a flawless launch.",
  },
  {
    number: "04",
    title: "Deployment & Scale",
    description:
      "Launching your product and providing ongoing support to optimize performance and scale user growth.",
  },
];

export function Process() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="container mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
          <div className="lg:col-span-5">
            <div className="sticky top-32">
              <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-none">
                OUR <span className="text-gradient-accent">PROCESS</span>
              </h2>
              <p className="text-xl text-foreground/60 leading-relaxed mb-12">
                A systematic approach to engineering products that deliver real
                business value. From discovery to deployment, we prioritize
                speed, quality, and scalability.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-[1px] bg-accent-violet" />
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-accent-violet">
                  4 Steps to Excellence
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="flex items-start">
                  <span className="text-[120px] font-black leading-none text-white/[0.03] absolute -top-12 -left-12 group-hover:text-accent-violet/10 transition-colors duration-500 select-none">
                    {step.number}
                  </span>
                  <div className="relative z-10 pt-4">
                    <h3 className="text-3xl font-bold mb-6 flex items-center group-hover:text-accent-violet transition-colors duration-300">
                      <span className="w-8 h-[2px] bg-accent-violet/30 mr-4 group-hover:w-12 group-hover:bg-accent-violet transition-all duration-300" />
                      {step.title}
                    </h3>
                    <p className="text-xl text-foreground/60 leading-relaxed max-w-lg">
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
