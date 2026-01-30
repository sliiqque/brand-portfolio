"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Sparkles, MoveDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Intense "Shining" Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-accent-violet/20 blur-[160px] rounded-full animate-pulse-slow -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[800px] h-[800px] bg-accent-cyan/20 blur-[160px] rounded-full animate-pulse-slow delay-1000 -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/10 blur-[140px] rounded-full -z-10 opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] bg-[radial-gradient(circle_at_center,rgba(124,92,255,0.08)_0%,transparent_70%)] -z-10" />

      {/* Mesh Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />

      {/* Animated Marquee Background */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full opacity-[0.02] pointer-events-none -rotate-12 scale-125">
        <div className="flex whitespace-nowrap animate-marquee">
          {[1, 2, 3, 4].map((i) => (
            <span
              key={`hero-marquee-${i}`}
              className="text-[20vw] font-black tracking-tighter mx-8"
            >
              DIGITAL EXCELLENCE • CRAFTING THE FUTURE •
            </span>
          ))}
        </div>
      </div>

      <div className="container mx-auto max-w-[1200px] px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex items-center justify-center space-x-4 mb-12">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-white/60 text-xs font-black uppercase tracking-[0.2em]">
                <Sparkles size={14} className="text-accent-violet" />
                <span>Available for new projects</span>
              </div>
              <div className="hidden md:flex items-center space-x-2 px-4 py-2 rounded-full border border-white/10 bg-white/5">
                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                <span className="text-[10px] font-black uppercase tracking-widest text-white/40">
                  Verified Status
                </span>
              </div>
            </div>

            <h1 className="text-6xl md:text-8xl lg:text-[120px] font-black tracking-tighter mb-10 leading-[0.85] uppercase">
              BUILDING <br />
              <span className="text-gradient-accent">FUTURE-PROOF</span> <br />
              INTERFACES
            </h1>

            <p className="text-xl md:text-2xl text-foreground/60 mb-16 leading-relaxed max-w-2xl mx-auto font-medium italic">
              &ldquo;I engineer high-performance SaaS and Web3 interfaces that
              convert users and scale products.&rdquo;
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Button
                size="lg"
                className="w-full sm:w-auto h-16 px-10 text-lg group"
                asChild
              >
                <Link href="/contact" className="flex items-center">
                  Start a Project
                  <div className="ml-3 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-accent-violet transition-all duration-300">
                    <ArrowRight size={18} />
                  </div>
                </Link>
              </Button>
              <Link
                href="/work"
                className="text-foreground/40 hover:text-white transition-all duration-300 font-bold uppercase tracking-widest text-xs py-4 px-8 rounded-full border border-white/5 hover:border-white/20 hover:bg-white/5 flex items-center group"
              >
                See my work
                <MoveDown
                  className="ml-2 group-hover:translate-y-1 transition-transform"
                  size={16}
                />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center space-y-2"
      >
        <div className="w-[1px] h-12 bg-gradient-to-b from-accent-violet to-transparent" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/30 font-bold">
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
