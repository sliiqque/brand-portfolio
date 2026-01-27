"use client";

import { motion } from "framer-motion";
import { Code2, Globe, Cpu, CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const services = [
  {
    title: "Frontend Engineering",
    description:
      "High-performance, pixel-perfect web applications built with Next.js and React.",
    icon: Code2,
    price: "$5k+",
    features: ["Responsive Design", "Perf Optimization", "A11y Compliance"],
    gridSpan: "md:col-span-2",
    color: "violet",
  },
  {
    title: "Web3 Development",
    description: "Full-stack dApps and smart contract integration.",
    icon: Globe,
    price: "$8k+",
    features: ["Wallet Auth", "On-chain Data", "Token Gating"],
    gridSpan: "md:col-span-1",
    color: "cyan",
  },
  {
    title: "Technical Consulting",
    description:
      "Architecture reviews and product strategy for scaling startups.",
    icon: Cpu,
    price: "$250/hr",
    features: ["System Design", "Code Reviews", "Tech Strategy"],
    gridSpan: "md:col-span-1",
    color: "white",
  },
  {
    title: "Web3 Launch Kit",
    description:
      "The ultimate end-to-end solution for founders looking to launch their Web3 product in weeks.",
    icon: CheckCircle2,
    price: "Custom",
    features: ["Full Stack", "Security Audit", "Go-to-Market UI"],
    gridSpan: "md:col-span-2",
    color: "cyan",
  },
];

export function Services() {
  return (
    <section className="py-32" id="services">
      <div className="container mx-auto max-w-[1200px] px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
              SERVICES <br />
              <span className="text-foreground/30">& SOLUTIONS</span>
            </h2>
            <p className="text-foreground/50 text-lg font-medium">
              Focused on delivering measurable results through clean code and
              superior user experiences.
            </p>
          </div>
          <Button variant="outline" className="rounded-full group" asChild>
            <Link href="/services">
              View All Services{" "}
              <ArrowRight
                className="ml-2 group-hover:translate-x-1 transition-transform"
                size={18}
              />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${service.gridSpan}`}
            >
              <div className="bento-card p-8 h-full flex flex-col">
                <div
                  className={`w-14 h-14 rounded-2xl mb-8 flex items-center justify-center ${
                    service.color === "violet"
                      ? "bg-accent-violet/10 text-accent-violet"
                      : service.color === "cyan"
                        ? "bg-accent-cyan/10 text-accent-cyan"
                        : "bg-white/5 text-white"
                  }`}
                >
                  <service.icon size={28} />
                </div>

                <div className="flex-grow">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold">{service.title}</h3>
                    <span className="text-sm font-bold text-foreground/40">
                      {service.price}
                    </span>
                  </div>
                  <p className="text-foreground/50 mb-8 leading-relaxed font-medium">
                    {service.description}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-xs font-bold text-foreground/40 uppercase tracking-widest"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-violet/50 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <Link
                    href="/contact"
                    className="text-sm font-bold uppercase tracking-widest hover:text-accent-violet transition-colors"
                  >
                    Learn More
                  </Link>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all">
                    <ArrowRight size={14} />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
