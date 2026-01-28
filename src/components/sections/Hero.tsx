"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight, Sparkles, MoveDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-accent-violet/10 blur-[120px] rounded-full animate-pulse-slow -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent-cyan/10 blur-[120px] rounded-full animate-pulse-slow delay-1000 -z-10" />

      {/* Mesh Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />

      <div className="container mx-auto max-w-[1200px] px-6 relative">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-8 leading-[0.9] text-gradient">
              BUILDING <br />
              <span className="text-gradient-accent">FUTURE-PROOF</span> <br />
              INTERFACES
            </h1>

            <p className="text-lg md:text-2xl text-foreground/50 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
              I engineer high-performance SaaS and Web3 interfaces that convert
              users and scale products.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Button
                size="lg"
                className="rounded-full px-10 h-16 text-lg"
                asChild
              >
                <Link href="/contact" className="flex items-center">
                  Start a Project <ArrowRight className="ml-2" size={20} />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="lg"
                className="rounded-full px-10 h-16 text-lg group"
                asChild
              >
                <Link href="/work" className="flex items-center">
                  See my work{" "}
                  <MoveDown
                    className="ml-2 group-hover:translate-y-1 transition-transform"
                    size={20}
                  />
                </Link>
              </Button>
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
