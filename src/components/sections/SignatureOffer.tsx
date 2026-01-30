"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Rocket, ArrowRight, LucideIcon } from "lucide-react";
import Link from "next/link";
import { SIGNATURE_FEATURES } from "@/lib/constants";

interface FeatureItemProps {
  icon: LucideIcon;
  label: string;
}

function FeatureItem({ icon: Icon, label }: FeatureItemProps) {
  return (
    <div className="flex items-center space-x-3 group/item">
      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-accent-cyan group-hover/item:bg-accent-cyan group-hover/item:text-black transition-all duration-500 border border-white/5">
        <Icon size={18} />
      </div>
      <span className="text-sm font-black uppercase tracking-widest text-white/60 group-hover/item:text-white transition-colors">
        {label}
      </span>
    </div>
  );
}

function StatCard({
  label,
  value,
  sublabel,
}: {
  label: string;
  value: string;
  sublabel: string;
}) {
  return (
    <div className="bento-card p-10 bg-accent-cyan/5 border-accent-cyan/20 hover:bg-accent-cyan/10 transition-all group/stat text-center">
      <div className="text-[10px] font-black uppercase tracking-[0.3em] text-accent-cyan mb-4">
        {label}
      </div>
      <div className="text-6xl font-black text-white mb-2 group-hover/stat:scale-110 transition-transform duration-500">
        {value}
      </div>
      <div className="text-[10px] font-bold text-foreground/40 uppercase tracking-widest">
        {sublabel}
      </div>
    </div>
  );
}

export function SignatureOffer() {
  return (
    <section className="py-40 relative overflow-hidden">
      {/* Intense "Shining" Background Glows - Inspired by Client Feedback */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1000px] bg-accent-cyan/20 blur-[160px] rounded-full -z-10 animate-pulse-slow" />
      <div className="absolute top-1/4 right-1/4 w-[800px] h-[800px] bg-accent-violet/15 blur-[140px] rounded-full -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/10 blur-[120px] rounded-full -z-10 opacity-60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_100%)] -z-10" />

      {/* Background Lines */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div className="container mx-auto max-w-[1200px] px-6 relative z-10">
        <div className="group relative bento-card p-0 overflow-hidden border border-white/10 bg-card-bg/40 backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            <div className="lg:col-span-7 p-8 md:p-20">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full border border-accent-cyan/20 bg-accent-cyan/5 text-accent-cyan text-xs font-black uppercase tracking-[0.2em] mb-12">
                <Rocket size={14} />
                <span>Signature Service</span>
              </div>

              <h2 className="text-5xl md:text-8xl font-black mb-10 tracking-tighter leading-[0.9] uppercase">
                WEB3 <span className="text-gradient-accent">LAUNCH</span> KIT
              </h2>
              <p className="text-xl md:text-2xl text-foreground/60 mb-16 leading-relaxed max-w-xl font-medium italic">
                &ldquo;Go from concept to mainnet in 4 weeks with a
                battle-tested technical stack.&rdquo;
              </p>

              <div className="flex flex-wrap gap-8 mb-16">
                {SIGNATURE_FEATURES.map((item) => (
                  <FeatureItem key={item.id} {...item} />
                ))}
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-16 px-10 text-lg group"
                  asChild
                >
                  <Link href="/contact" className="flex items-center">
                    Apply Now
                    <div className="ml-3 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-accent-violet transition-all duration-300">
                      <ArrowRight size={18} />
                    </div>
                  </Link>
                </Button>
                <div className="flex items-center space-x-2 px-4 py-2 rounded-full border border-white/10 bg-white/5">
                  <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-white/40">
                    Open for Q1
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative min-h-[400px] lg:min-h-full flex flex-col items-center justify-center p-8 overflow-hidden border-t lg:border-t-0 lg:border-l border-white/10">
              {/* Sidebar-style card inside bento */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent-cyan/10 via-transparent to-accent-violet/10 opacity-50" />

              <div className="relative z-10 w-full max-w-xs space-y-6">
                <StatCard label="Speed" value="28" sublabel="Days to Launch" />
              </div>

              {/* Decorative background elements */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 opacity-20">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 30,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-0 border border-accent-cyan/30 rounded-[40%]"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute inset-8 border border-accent-violet/30 rounded-[35%]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
