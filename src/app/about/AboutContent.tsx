"use client";

import { motion } from "framer-motion";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { PHILOSOPHY_ITEMS } from "@/lib/constants";

interface PhilosophyCardProps {
  title: string;
  desc: string;
  color: string;
  index: number;
}

function PhilosophyCard({ title, desc, color, index }: PhilosophyCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="bento-card p-10 h-full flex flex-col group hover:-translate-y-2 transition-all duration-500">
        <div
          className={`w-12 h-1 bg-${color} mb-8 group-hover:w-20 transition-all duration-500`}
        />
        <h3 className="text-3xl font-bold mb-6">{title}</h3>
        <p className="text-lg text-foreground/60 leading-relaxed font-medium">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

function FloatingStat({
  value,
  label,
  colorClass,
  delay = 0,
  yRange = [0, -20, 0],
  positionClass,
}: {
  value: string;
  label: string;
  colorClass: string;
  delay?: number;
  yRange?: number[];
  positionClass: string;
}) {
  return (
    <motion.div
      animate={{ y: yRange }}
      transition={{
        duration: 4 + delay,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={`absolute ${positionClass} p-6 rounded-3xl bg-background/80 backdrop-blur-xl border border-white/10 shadow-2xl`}
    >
      <div className={`text-3xl font-black ${colorClass}`}>{value}</div>
      <div className="text-[10px] font-bold uppercase tracking-widest text-foreground/40">
        {label}
      </div>
    </motion.div>
  );
}

export function AboutContent() {
  return (
    <div className="pb-20">
      <section className="pt-32 pb-32 relative overflow-hidden">
        {/* Background Mesh */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-violet/5 blur-[120px] rounded-full -z-10" />

        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-7"
            >
              <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-10 leading-[0.8]">
                BUILDING THE <br />
                <span className="text-gradient-accent">FUTURE</span>
              </h1>
              <div className="space-y-8 text-xl md:text-2xl text-foreground/60 leading-relaxed max-w-2xl font-medium">
                <p>
                  I&apos;m SLIIQQUE, a senior Frontend and Web3 Engineer with
                  over 8 years of experience building digital products that
                  scale.
                </p>
                <p>
                  My mission is to bridge the gap between complex technology and
                  intuitive user experiences. I believe that high-performance
                  engineering is the foundation of every successful product.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative"
            >
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden border border-white/5 bg-white/5 relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-violet/20 to-accent-cyan/20 mix-blend-overlay opacity-50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-[200px] font-black text-white/[0.02] rotate-12 select-none">
                    S
                  </span>
                </div>
                {/* Floating Elements */}
                <FloatingStat
                  value="8+"
                  label="Years Exp."
                  colorClass="text-accent-violet"
                  positionClass="top-10 right-10"
                />
                <FloatingStat
                  value="50+"
                  label="Projects"
                  colorClass="text-accent-cyan"
                  delay={1}
                  yRange={[0, 20, 0]}
                  positionClass="bottom-10 left-10"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-40 relative">
        <div className="absolute inset-0 bg-white/[0.02]" />
        <div className="container mx-auto max-w-[1200px] px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-20">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-6">
                MY <span className="text-gradient-accent">PHILOSOPHY</span>
              </h2>
              <p className="text-xl text-foreground/60 font-medium">
                The core principles that drive every line of code I write and
                every pixel I place.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PHILOSOPHY_ITEMS.map((item, i) => (
              <PhilosophyCard key={i} index={i} {...item} />
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
