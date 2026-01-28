import { Metadata } from "next";
import { WorkContent } from "./WorkContent";

export const metadata: Metadata = {
  title: "Case Studies — Frontend & Web3 Projects | SLIIQQUE",
  description: "Explore real-world frontend and Web3 projects showcasing performance gains, scalable architectures, and conversion-focused UI development.",
};

export default function WorkPage() {
  return <WorkContent />;
}
