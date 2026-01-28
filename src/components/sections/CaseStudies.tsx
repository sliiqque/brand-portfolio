"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/Badge";
import { ArrowUpRight, Linkedin, Github } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    title: "BIZEDGE",
    description:
      "A robust, cost-effective HRMS and Business Management System built for SMEs. BizEdge centralizes core HR, smart payroll, performance appraisals, and attendance tracking into a secure cloud workspace, enabling businesses to automate complex operations with ease.",
    metrics: ["9+ Modules", "SME Scale", "Full Lifecycle"],
    tags: ["React", "TypeScript", "Tailwind", "Redux"],
    link: "https://www.bizedgeapp.com/",
    externalLink: "https://www.linkedin.com/company/bizedgeapp/",
    image: "bg-accent-teal/10",
    color: "teal",
  },
  {
    title: "NEPTUNE DEFI",
    description:
      "A high-performance multi-chain yield aggregator designed for the modern DeFi ecosystem. Features real-time portfolio analytics, automated risk assessment tools, and seamless liquidity provision across multiple protocols with sub-second synchronization.",
    metrics: ["$12M TVL", "45% Retention", "0.8s Sync"],
    tags: ["Next.js", "Solidity", "Subgraphs"],
    link: "/work/neptune",
    externalLink: "#",
    image: "bg-accent-violet/10",
    color: "violet",
  },
  {
    title: "ORIGIN NFT",
    description:
      "A next-generation generative art marketplace empowering creators with on-chain minting and sophisticated royalty management. Built with a focus on zero-slippage trading and decentralized storage via IPFS for permanent asset provenance.",
    metrics: ["10k+ Sales", "0% Slippage", "3x Growth"],
    tags: ["React", "Ethers.js", "IPFS"],
    link: "/work/origin",
    externalLink: "#",
    image: "bg-accent-cyan/10",
    color: "cyan",
  },
];

const colorVariants = {
  violet: {
    text: "group-hover:text-accent-violet",
    bg: "bg-accent-violet",
    shadow: "hover:shadow-glow",
  },
  cyan: {
    text: "group-hover:text-accent-cyan",
    bg: "bg-accent-cyan",
    shadow: "hover:shadow-glow-cyan",
  },
  teal: {
    text: "group-hover:text-accent-teal",
    bg: "bg-accent-teal",
    shadow: "hover:shadow-glow-teal",
  },
};

export function CaseStudies() {
  return (
    <section className="py-32 relative" id="work">
      <div className="container mx-auto max-w-[1200px] px-6">
        <div className="mb-20">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
            SELECTED <br />
            <span className="text-gradient-accent">PROTOTYPES</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => {
            const variant =
              colorVariants[project.color as keyof typeof colorVariants];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="group relative bento-card p-0 h-auto md:h-[500px] flex flex-col md:flex-row overflow-hidden border border-white/5">
                  {/* Content Side */}
                  <div className="flex-1 p-8 md:p-12 flex flex-col justify-between z-10">
                    <div>
                      <div className="flex gap-2 mb-6">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            className="bg-white/5 border-white/5 text-[10px] tracking-widest uppercase"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <h3
                        className={`text-4xl md:text-5xl font-bold mb-6 transition-colors ${variant.text}`}
                      >
                        {project.title}
                      </h3>
                      <p className="text-foreground/50 text-lg mb-8 max-w-md font-medium leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-8 items-center pt-8 border-t border-white/5">
                      {project.metrics.map((metric) => (
                        <div key={metric}>
                          <div className="text-xl font-bold text-white">
                            {metric.split(" ")[0]}
                          </div>
                          <div className="text-[10px] text-foreground/30 uppercase tracking-[0.2em] font-bold">
                            {metric.split(" ").slice(1).join(" ")}
                          </div>
                        </div>
                      ))}
                      <div className="ml-auto flex gap-4">
                        <Link
                          href={project.externalLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                        >
                          {project.title === "BIZEDGE" ? (
                            <Linkedin
                              size={20}
                              className="text-foreground/60"
                            />
                          ) : (
                            <Github size={20} className="text-foreground/60" />
                          )}
                        </Link>
                        <Link
                          href={project.link}
                          target={
                            project.link.startsWith("http")
                              ? "_blank"
                              : undefined
                          }
                          rel={
                            project.link.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className={`p-3 rounded-full text-white transition-all ${variant.bg} ${variant.shadow}`}
                        >
                          <ArrowUpRight size={20} />
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Visual Side */}
                  <div
                    className={`flex-1 relative ${project.image} overflow-hidden group-hover:scale-105 transition-transform duration-1000`}
                  >
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.05)_0%,transparent_70%)]" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-20 group-hover:opacity-40 transition-opacity">
                      <span className="text-9xl font-black tracking-tighter select-none">
                        {project.title.split(" ")[0]}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
