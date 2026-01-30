"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-40 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-accent-violet/10 blur-[150px] rounded-full opacity-50" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Animated Marquee Background */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full opacity-[0.03] pointer-events-none -rotate-6 scale-110">
        <div className="flex whitespace-nowrap animate-marquee">
          {[1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className="text-[15vw] font-black tracking-tighter mx-8"
            >
              LET&apos;S BUILD THE FUTURE TOGETHER •
            </span>
          ))}
        </div>
      </div>

      <div className="container relative z-10 mx-auto max-w-[1200px] px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.9]">
            READY TO BUILD THE{" "}
            <span className="text-gradient-accent">FUTURE</span> OF THE WEB?
          </h2>
          <p className="text-xl md:text-2xl text-foreground/60 mb-16 leading-relaxed max-w-2xl mx-auto">
            Whether you&apos;re launching a Web3 protocol or optimizing SaaS, I&apos;m
            here to scale your vision.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button
              size="lg"
              className="w-full sm:w-auto h-16 px-10 text-lg group"
              asChild
            >
              <Link href="/contact" className="flex items-center">
                Book a Consultation
                <div className="ml-3 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-accent-violet transition-all duration-300">
                  <ArrowRight size={18} />
                </div>
              </Link>
            </Button>
            <Link
              href="mailto:hello@sliiique.com"
              className="text-foreground/40 hover:text-white transition-all duration-300 font-bold uppercase tracking-widest text-xs py-4 px-8 rounded-full border border-white/5 hover:border-white/20 hover:bg-white/5"
            >
              hello@sliiique.com
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
