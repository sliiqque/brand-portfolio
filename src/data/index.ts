import {
  Code2,
  Globe,
  Cpu,
  CheckCircle2,
  Calendar,
  Mail,
  MessageSquare,
  Zap,
  Shield,
  BarChart3,
} from "lucide-react";
import {
  NavItem,
  TechStat,
  ProcessStep,
  SignatureFeature,
  PhilosophyItem,
  Project,
  Testimonial,
  Service,
  ContactMethod,
} from "@/types";

export const NAVIGATION: NavItem[] = [
  { id: "nav-home", name: "Home", href: "/" },
  { id: "nav-work", name: "Work", href: "/work" },
  { id: "nav-services", name: "Services", href: "/services" },
  { id: "nav-about", name: "About", href: "/about" },
];

export const TECH_STACK = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Solidity",
  "Ethers.js",
  "Viem",
  "The Graph",
  "Node.js",
  "PostgreSQL",
  "Framer Motion",
  "GraphQL",
  "Web3.js",
  "Hardhat",
  "Foundry",
  "Rust",
  "Go",
  "Docker",
];

export const TECH_STATS: TechStat[] = [
  { id: "stat-exp", label: "Years Exp", value: "8+" },
  { id: "stat-projects", label: "Projects", value: "50+" },
  { id: "stat-protocols", label: "Protocols", value: "5" },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: "step-01",
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We dive deep into your product goals, user needs, and technical requirements to define a clear roadmap.",
  },
  {
    id: "step-02",
    number: "02",
    title: "Design & Architecture",
    description:
      "Creating high-fidelity interfaces and scalable system architectures that prioritize performance and security.",
  },
  {
    id: "step-03",
    number: "03",
    title: "Development & Testing",
    description:
      "Clean, efficient coding with continuous integration and rigorous testing to ensure a flawless launch.",
  },
  {
    id: "step-04",
    number: "04",
    title: "Deployment & Scale",
    description:
      "Launching your product and providing ongoing support to optimize performance and scale user growth.",
  },
];

export const SIGNATURE_FEATURES: SignatureFeature[] = [
  { id: "feat-delivery", icon: Zap, label: "4 Week Delivery" },
  { id: "feat-audit", icon: Shield, label: "Audit Ready" },
  { id: "feat-conversion", icon: BarChart3, label: "Conversion Focused" },
];

export const PHILOSOPHY_ITEMS: PhilosophyItem[] = [
  {
    id: "phil-performance",
    title: "Performance First",
    desc: "Speed is a feature. I optimize every line of code to ensure the fastest possible load times and smooth interactions.",
    color: "accent-violet",
  },
  {
    id: "phil-user",
    title: "User-Centric",
    desc: "Technology should serve the user. I focus on creating interfaces that are accessible, intuitive, and conversion-focused.",
    color: "accent-cyan",
  },
  {
    id: "phil-scalable",
    title: "Scalable Systems",
    desc: "I build with the future in mind, using battle-tested architectures and clean code that can grow with your business.",
    color: "white",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "project-bizedge",
    title: "BIZEDGE",
    description:
      "A robust, cost-effective HRMS and Business Management System built for SMEs. BizEdge centralizes core HR, smart payroll, performance appraisals, and attendance tracking into a secure cloud workspace, enabling businesses to automate complex operations with ease.",
    metrics: ["9+ Modules", "SME Scale", "Full Lifecycle"],
    tags: ["React", "TypeScript", "Tailwind", "Redux"],
    link: "https://www.bizedgeapp.com/",
    externalLink: "https://www.linkedin.com/company/bizedgeapp/",
    platform: "linkedin",
    image: "bg-accent-teal/10",
    color: "teal",
  },
  {
    id: "project-neptune",
    title: "NEPTUNE DEFI",
    description:
      "A high-performance multi-chain yield aggregator designed for the modern DeFi ecosystem. Features real-time portfolio analytics, automated risk assessment tools, and seamless liquidity provision across multiple protocols with sub-second synchronization.",
    metrics: ["$12M TVL", "45% Retention", "0.8s Sync"],
    tags: ["Next.js", "Solidity", "Subgraphs"],
    link: "/work/neptune",
    externalLink: "#",
    platform: "github",
    image: "bg-accent-violet/10",
    color: "violet",
  },
  {
    id: "project-origin",
    title: "ORIGIN NFT",
    description:
      "A next-generation generative art marketplace empowering creators with on-chain minting and sophisticated royalty management. Built with a focus on zero-slippage trading and decentralized storage via IPFS for permanent asset provenance.",
    metrics: ["10k+ Sales", "0% Slippage", "3x Growth"],
    tags: ["React", "Ethers.js", "IPFS"],
    link: "/work/origin",
    externalLink: "#",
    platform: "github",
    image: "bg-accent-cyan/10",
    color: "cyan",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-alex",
    quote:
      "SLIIQQUE is a rare talent who understands both the technical complexities of Web3 and the nuances of high-converting UI design. A true partner in our success.",
    author: "Alex Rivers",
    role: "CEO at Nexus Labs",
    avatar: "AR",
    stats: "60% Conversion Increase",
    color: "accent-violet",
  },
  {
    id: "test-sarah",
    quote:
      "The speed and quality of delivery were exceptional. Our frontend performance increased by 60% after the migration. Highly recommended for any founder.",
    author: "Sarah Chen",
    role: "CTO at CloudScale",
    avatar: "SC",
    stats: "2.4s Faster LCP",
    color: "accent-cyan",
  },
  {
    id: "test-marcus",
    quote:
      "Working with SLIIQQUE felt like having a co-founder. The technical consulting alone saved us months of development time and thousands in infrastructure costs.",
    author: "Marcus Thorne",
    role: "Founder of EtherFlow",
    avatar: "MT",
    stats: "$40k Saved in OpEx",
    color: "white",
  },
];

export const SERVICES: Service[] = [
  {
    id: "svc-frontend",
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
    id: "svc-web3",
    title: "Web3 Development",
    description: "Full-stack dApps and smart contract integration.",
    icon: Globe,
    price: "$8k+",
    features: ["Wallet Auth", "On-chain Data", "Token Gating"],
    gridSpan: "md:col-span-1",
    color: "cyan",
  },
  {
    id: "svc-consulting",
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
    id: "svc-launchkit",
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

export const CONTACT_METHODS: ContactMethod[] = [
  {
    id: "contact-calendly",
    icon: Calendar,
    title: "Book a Consultation",
    desc: "Schedule a free 30-minute discovery call to discuss your project.",
    action: "Schedule on Calendly",
    href: "https://calendly.com/sliiqque",
    textColor: "text-accent-violet",
  },
  {
    id: "contact-email",
    icon: Mail,
    title: "Email Me",
    desc: "For general inquiries or long-form project briefs.",
    action: "hello@sliiqque.com",
    href: "mailto:hello@sliiqque.com",
    textColor: "text-accent-cyan",
  },
  {
    id: "contact-social",
    icon: MessageSquare,
    title: "Social Media",
    desc: "Follow me on Twitter for Web3 and engineering insights.",
    action: "@sliiqque",
    href: "https://twitter.com/sliiqque",
    textColor: "text-foreground",
  },
];
