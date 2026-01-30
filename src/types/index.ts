import { LucideIcon } from "lucide-react";

export interface NavItem {
  id: string;
  name: string;
  href: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  metrics: string[];
  tags: string[];
  link: string;
  externalLink: string;
  platform: "linkedin" | "github" | "website";
  image: string;
  color: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
  stats: string;
  color: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  price: string;
  features: string[];
  gridSpan: string;
  color: string;
}

export interface ContactMethod {
  id: string;
  icon: LucideIcon;
  title: string;
  desc: string;
  action: string;
  href: string;
  textColor: string;
}

export interface TechStat {
  id: string;
  label: string;
  value: string;
}

export interface ProcessStep {
  id: string;
  number: string;
  title: string;
  description: string;
}

export interface SignatureFeature {
  id: string;
  icon: LucideIcon;
  label: string;
}

export interface PhilosophyItem {
  id: string;
  title: string;
  desc: string;
  color: string;
}
