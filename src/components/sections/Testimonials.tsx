"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/Button";

import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % TESTIMONIALS.length);
  const prev = () =>
    setActive((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  const glowColors: Record<string, string> = {
    "accent-violet": "var(--accent-violet)",
    "accent-cyan": "var(--accent-cyan)",
    white: "var(--foreground)",
  };

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Dynamic Background Glow */}
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[160px] opacity-10 -z-10`}
          style={{
            backgroundColor:
              glowColors[TESTIMONIALS[active].color] || "var(--foreground)",
          }}
        />
      </AnimatePresence>

      <div className="container mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-none">
              CLIENT <span className="text-gradient-accent">FEEDBACK</span>
            </h2>
            <p className="text-xl text-foreground/60 leading-relaxed font-medium">
              Real results for real founders. Our work speaks through the
              success of our partners.
            </p>
          </div>

          <div className="flex space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              aria-label="Previous testimonial"
              className="rounded-full w-14 h-14 border-border-subtle hover:border-foreground/20 hover:bg-foreground/5"
            >
              <ChevronLeft size={24} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              aria-label="Next testimonial"
              className="rounded-full w-14 h-14 border-border-subtle hover:border-foreground/20 hover:bg-foreground/5"
            >
              <ChevronRight size={24} />
            </Button>
          </div>
        </div>

        <div className="relative min-h-[500px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, y: -20 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="w-full"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                {/* Main Content Card */}
                <div className="lg:col-span-8 bento-card p-10 md:p-16 relative overflow-hidden bg-card-bg/40 border-border-subtle group">
                  <Quote className="absolute -top-4 -right-4 text-foreground/5 w-64 h-64 -rotate-12 group-hover:text-foreground/10 transition-all duration-700" />

                  <div className="relative z-10">
                    <div className="flex space-x-1 mb-10">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star
                          key={s}
                          size={18}
                          className="fill-accent-cyan text-accent-cyan"
                        />
                      ))}
                    </div>

                    <p className="text-3xl md:text-5xl font-bold leading-[1.2] tracking-tight text-foreground mb-12 italic">
                      &ldquo;{TESTIMONIALS[active].quote}&rdquo;
                    </p>

                    <div className="flex items-center">
                      <div className="w-20 h-20 rounded-3xl bg-foreground/5 flex items-center justify-center text-3xl font-black text-gradient-accent border border-border-subtle mr-8">
                        {TESTIMONIALS[active].avatar}
                      </div>
                      <div>
                        <div className="text-2xl font-black text-foreground uppercase tracking-tight">
                          {TESTIMONIALS[active].author}
                        </div>
                        <div className="text-sm font-black uppercase tracking-[0.2em] text-foreground/40 mt-1">
                          {TESTIMONIALS[active].role}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sidebar Stats Card */}
                <div className="lg:col-span-4 flex flex-col gap-8">
                  <div className="flex-1 bento-card p-10 flex flex-col justify-center items-center text-center bg-accent-violet/5 border-accent-violet/20 hover:bg-accent-violet/10 group">
                    <div className="text-sm font-black uppercase tracking-[0.3em] text-accent-violet mb-6">
                      Impact Result
                    </div>
                    <div className="text-4xl md:text-5xl font-black text-foreground mb-4 group-hover:scale-110 transition-transform duration-500">
                      {TESTIMONIALS[active].stats.split(" ")[0]}
                    </div>
                    <div className="text-lg font-bold text-foreground/60 leading-tight">
                      {TESTIMONIALS[active].stats.split(" ").slice(1).join(" ")}
                    </div>
                  </div>

                  <div className="bento-card p-10 bg-foreground/5 border-border-subtle hover:border-foreground/20 transition-all">
                    <div className="flex items-center justify-between mb-6">
                      <div className="text-sm font-black uppercase tracking-[0.2em] text-foreground/40">
                        Verified
                      </div>
                      <div className="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                    </div>
                    <p className="text-sm text-foreground/60 font-medium leading-relaxed">
                      This testimonial is verified via LinkedIn and company
                      project logs.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex space-x-3">
            {TESTIMONIALS.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2 transition-all duration-500 rounded-full ${
                  active === i
                    ? "w-12 bg-accent-violet"
                    : "w-2 bg-foreground/10 hover:bg-foreground/20"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
