"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "SLIIQQUE is a rare talent who understands both the technical complexities of Web3 and the nuances of high-converting UI design. A true partner in our success.",
    author: "Alex Rivers",
    role: "CEO at Nexus Labs",
    avatar: "AR",
  },
  {
    quote:
      "The speed and quality of delivery were exceptional. Our frontend performance increased by 60% after the migration. Highly recommended for any serious SaaS founder.",
    author: "Sarah Chen",
    role: "CTO at CloudScale",
    avatar: "SC",
  },
  {
    quote:
      "Working with SLIIQQUE felt like having a co-founder. The technical consulting alone saved us months of development time and thousands in infrastructure costs.",
    author: "Marcus Thorne",
    role: "Founder of EtherFlow",
    avatar: "MT",
  },
];

export function Testimonials() {
  return (
    <section className="py-32 overflow-hidden">
      <div className="container mx-auto max-w-[1200px] px-6 mb-20">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8">
          <div className="max-w-2xl">
            <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-none">
              CLIENT <span className="text-gradient-accent">FEEDBACK</span>
            </h2>
            <p className="text-xl text-foreground/60 leading-relaxed">
              Don't just take my word for it. Here's what founders and CTOs have
              to say about our collaboration.
            </p>
          </div>
          <div className="hidden md:block pb-2">
            <div className="flex items-center space-x-2 text-accent-violet">
              <span className="text-xs font-black uppercase tracking-[0.3em]">
                Scroll to explore
              </span>
              <div className="w-12 h-[1px] bg-accent-violet" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="flex whitespace-nowrap animate-marquee hover:[animation-play-state:paused] py-4">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <div
              key={`${testimonial.author}-${index}`}
              className="inline-block w-[400px] md:w-[500px] mx-4 whitespace-normal"
            >
              <div className="bento-card h-full flex flex-col p-10 relative bg-card-bg/30 border-white/5 group hover:border-accent-violet/30 transition-all duration-500">
                <Quote
                  className="text-accent-violet/10 absolute top-8 right-8 group-hover:text-accent-violet/20 transition-colors"
                  size={60}
                />
                <p className="text-xl md:text-2xl text-foreground/80 font-medium mb-12 relative z-10 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center mt-auto">
                  <div className="w-14 h-14 rounded-2xl bg-accent-violet/10 flex items-center justify-center text-accent-violet font-black text-xl mr-6 border border-accent-violet/20">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-xl text-white">
                      {testimonial.author}
                    </div>
                    <div className="text-sm font-bold uppercase tracking-widest text-foreground/40 mt-1">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gradient Overlays for Marquee */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
