import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/ui/Navbar";
import { Footer } from "@/components/ui/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SLIIQQUE — Frontend & Web3 Engineer",
    template: "%s | SLIIQQUE",
  },
  description:
    "SLIIQQUE is a senior Frontend & Web3 Engineer building high-performance React, Next.js, and Web3 interfaces that scale products and convert users.",
  keywords: [
    "frontend engineer",
    "web3 developer",
    "react developer",
    "next.js expert",
    "dapp developer",
    "blockchain frontend",
    "saas frontend engineer",
  ],
  authors: [{ name: "Gabriel Njoabozia", url: "https://sliiqque.space" }],
  creator: "Gabriel Njoabozia",
  metadataBase: new URL("https://sliiqque.space"),
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "SLIIQQUE — Frontend & Web3 Engineer",
    description:
      "Elegant, scalable React and Web3 interfaces for startups and Web3 teams.",
    url: "https://sliiqque.space",
    siteName: "SLIIQQUE",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SLIIQQUE — Frontend & Web3 Engineer",
    description:
      "Building elegant, high-performance React and Web3 interfaces.",
    creator: "@sliiqque",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Gabriel Njoabozia",
    alternateName: "SLIIQQUE",
    url: "https://sliiqque.space",
    jobTitle: "Senior Frontend & Web3 Engineer",
    description:
      "Frontend and Web3 engineer specializing in high-performance React, Next.js, and decentralized application interfaces.",
    sameAs: [
      "https://www.linkedin.com/in/sliiqque",
      "https://github.com/sliiqque",
      "https://twitter.com/sliiqque",
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans bg-background text-foreground antialiased`}
      >
        <Navbar />
        <main className="min-h-screen pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
