"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

import { CONTACT_METHODS } from "@/lib/constants";

export function ContactContent() {
  return (
    <div className="pb-20">
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Background Mesh */}
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-accent-violet/5 blur-[120px] rounded-full -z-10" />

        <div className="container mx-auto max-w-[1200px] px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-4xl"
          >
            <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-10 leading-[0.8]">
              LET&apos;S <span className="text-gradient-accent">CONNECT</span>
            </h1>
            <p className="text-xl md:text-2xl text-foreground/60 leading-relaxed max-w-2xl font-medium">
              Have a project in mind? Let&apos;s discuss how we can work
              together to build something exceptional.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 relative">
        <div className="container mx-auto max-w-[1200px] px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="lg:col-span-5"
            >
              <h2 className="text-3xl font-black uppercase tracking-[0.2em] mb-12 text-white/40">
                Get in touch
              </h2>
              <div className="space-y-6">
                {CONTACT_METHODS.map((item) => (
                  <div
                    key={item.id}
                    className="bento-card p-8 flex items-start space-x-6 group hover:border-white/20 transition-all duration-500"
                  >
                    <div
                      className={`p-4 rounded-2xl bg-white/5 ${item.textColor} group-hover:scale-110 transition-transform duration-500`}
                    >
                      <item.icon size={28} />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                      <p className="text-foreground/60 mb-6 leading-relaxed">
                        {item.desc}
                      </p>
                      <a
                        href={item.href}
                        target={
                          item.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          item.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className={`inline-flex items-center font-bold text-sm uppercase tracking-widest ${item.textColor} hover:opacity-70 transition-opacity`}
                        aria-label={item.title}
                      >
                        {item.action}
                        <ArrowRight className="ml-2" size={14} />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="lg:col-span-7"
            >
              <div className="bento-card p-8 md:p-12 h-full bg-card-bg/40">
                <h3 className="text-3xl font-black tracking-tight mb-10">
                  SEND A MESSAGE
                </h3>
                <form
                  className="space-y-8"
                  onSubmit={(e) => e.preventDefault()}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label
                        htmlFor="name"
                        className="text-xs font-black uppercase tracking-widest text-foreground/40"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent-violet/50 focus:bg-white/10 transition-all text-lg"
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div className="space-y-3">
                      <label
                        htmlFor="email"
                        className="text-xs font-black uppercase tracking-widest text-foreground/40"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent-violet/50 focus:bg-white/10 transition-all text-lg"
                        placeholder="john@example.com"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label
                      htmlFor="service"
                      className="text-xs font-black uppercase tracking-widest text-foreground/40"
                    >
                      Service Interest
                    </label>
                    <select
                      id="service"
                      className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent-violet/50 focus:bg-white/10 transition-all text-lg appearance-none cursor-pointer"
                    >
                      <option className="bg-background">
                        Frontend Engineering
                      </option>
                      <option className="bg-background">
                        Web3 Development
                      </option>
                      <option className="bg-background">
                        Technical Consulting
                      </option>
                      <option className="bg-background">Web3 Launch Kit</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label
                      htmlFor="message"
                      className="text-xs font-black uppercase tracking-widest text-foreground/40"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-4 focus:outline-none focus:border-accent-violet/50 focus:bg-white/10 transition-all h-48 resize-none text-lg"
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full h-16 text-lg group"
                    size="lg"
                  >
                    Send Message
                    <div className="ml-3 w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-accent-violet transition-all duration-300">
                      <ArrowRight size="18" />
                    </div>
                  </Button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
