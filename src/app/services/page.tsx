import { Metadata } from "next";
import { ServicesContent } from "./ServicesContent";

export const metadata: Metadata = {
  title: "Frontend & Web3 Development Services | SLIIQQUE",
  description: "Professional frontend and Web3 development services including React, Next.js, dApp interfaces, wallet integrations, and performance optimization.",
};

export default function ServicesPage() {
  return <ServicesContent />;
}
