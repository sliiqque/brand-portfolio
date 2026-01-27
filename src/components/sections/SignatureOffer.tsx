"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Rocket, Zap, Shield, BarChart3, ArrowRight } from "lucide-react";
import Link from "next/link";

export function SignatureOffer() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background Mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[800px] bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.05)_0%,transparent_70%)] -z-10" />

      <div className="container mx-auto max-w-[1200px] px-6">
        <div className="group relative bento-card p-0 overflow-hidden border border-white/5 bg-card-bg/40">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 p-8 md:p-16">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-accent-cyan/20 bg-accent-cyan/5 text-accent-cyan text-xs font-black uppercase tracking-widest mb-10">
                <Rocket size={14} />
                <span>Premium Service</span>
              </div>

              <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-none">
                WEB3 <span className="text-accent-cyan">LAUNCH</span> KIT
              </h2>
              <p className="text-xl text-foreground/60 mb-12 leading-relaxed max-w-xl">
                The ultimate end-to-end solution for founders looking to launch
                their Web3 product in weeks, not months. Battle-tested
                architecture and high-converting UI.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
                {[
                  {
                    icon: Zap,
                    title: "Rapid Delivery",
                    desc: "Launch-ready in 4 weeks",
                    color: "text-accent-cyan",
                  },
                  {
                    icon: Shield,
                    title: "Secure-First",
                    desc: "Audit-ready code standards",
                    color: "text-accent-cyan",
                  },
                  {
                    icon: BarChart3,
                    title: "Growth-Optimized",
                    desc: "Conversion-focused UX",
                    color: "text-accent-cyan",
                  },
                  {
                    icon: Rocket,
                    title: "Scalable Tech",
                    desc: "Next.js & Solidity experts",
                    color: "text-accent-cyan",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-start space-x-4 group/item"
                  >
                    <div
                      className={`p-3 rounded-2xl bg-white/5 ${item.color} group-hover/item:scale-110 transition-transform duration-300`}
                    >
                      <item.icon size={24} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                      <p className="text-sm text-foreground/40 font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Button
                variant="secondary"
                size="lg"
                className="h-16 px-10 text-lg shadow-glow-cyan/20"
                asChild
              >
                <Link href="/contact" className="flex items-center">
                  Apply for Launch Kit
                  <ArrowRight size={20} className="ml-2" />
                </Link>
              </Button>
            </div>

            <div className="lg:col-span-5 relative min-h-[400px] lg:min-h-full bg-gradient-to-br from-accent-cyan/10 to-accent-violet/10 flex items-center justify-center overflow-hidden border-t lg:border-t-0 lg:border-l border-white/5">
              {/* Creative Visual */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681485-074b7f938ba0?q=80&w=2832&auto=format&fit=crop')] bg-cover bg-center opacity-10 grayscale mix-blend-overlay" />

              <div className="relative z-10 w-80 h-80">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 border-[1px] border-accent-cyan/20 rounded-[40%] animate-pulse-slow"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-8 border-[1px] border-accent-violet/20 rounded-[35%]"
                />
                <div className="absolute inset-16 bg-background/80 backdrop-blur-2xl rounded-3xl border border-white/10 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-700">
                  <div className="text-center">
                    <Rocket
                      size={64}
                      className="text-accent-cyan mx-auto mb-4 animate-float"
                    />
                    <div className="text-xs font-black tracking-[0.3em] text-white/40 uppercase">
                      System Active
                    </div>
                  </div>
                </div>

                {/* Floating Particles */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                    className="absolute w-2 h-2 bg-accent-cyan rounded-full blur-[1px]"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
