import { Metadata } from "next";
import { AboutContent } from "./AboutContent";

export const metadata: Metadata = {
  title: "About — Senior Frontend & Web3 Engineer | SLIIQQUE",
  description: "Learn more about SLIIQQUE, a senior frontend and Web3 engineer focused on building scalable, elegant, and high-impact digital products.",
};

export default function AboutPage() {
  return <AboutContent />;
}
