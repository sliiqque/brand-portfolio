"use client";

import { motion } from "framer-motion";
import { PHILOSOPHY_ITEMS } from "@/lib/constants";

interface PhilosophyCardProps {
  title: string;
  desc: string;
  color: string;
  index: number;
}

function PhilosophyCard({ title, desc, color, index }: PhilosophyCardProps) {
  const colorMap: Record<string, string> = {
    "accent-violet": "bg-accent-violet",
    "accent-cyan": "bg-accent-cyan",
    white: "bg-white",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
    >
      <div className="bento-card p-10 h-full flex flex-col group hover:-translate-y-2 transition-all duration-500">
        <div
          className={`w-12 h-1 ${
            colorMap[color] || "bg-foreground"
          } mb-8 group-hover:w-20 transition-all duration-500`}
        />
        <h3 className="text-3xl font-bold mb-6">{title}</h3>
        <p className="text-lg text-foreground/60 leading-relaxed font-medium">
          {desc}
        </p>
      </div>
    </motion.div>
  );
}

export function Philosophy() {
  return (
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
            <PhilosophyCard key={item.id} index={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
