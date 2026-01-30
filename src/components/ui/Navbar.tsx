"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "./Button";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

import { NAVIGATION } from "@/lib/constants";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-[800px] px-6">
      <nav
        className={cn(
          "w-full flex items-center justify-between p-2 rounded-full border border-border-subtle transition-all duration-500",
          scrolled
            ? "bg-background/40 backdrop-blur-xl shadow-2xl"
            : "bg-foreground/5 backdrop-blur-md",
        )}
      >
        <Link
          href="/"
          className="px-4 py-2 flex items-center gap-2 group"
          onClick={() => setIsOpen(false)}
        >
          <div className="relative w-24 h-10 overflow-hidden rounded-lg">
            <Image
              src="/logo.webp"
              alt="SLIIQQUE Logo"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* <span className="text-2xl font-bold tracking-tighter">
            SLIIQ
            <span className="text-accent-violet group-hover:text-accent-cyan transition-colors">
              QUE
            </span>
          </span> */}
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-1">
          {NAVIGATION.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full transition-all relative group",
                pathname === item.href
                  ? "text-foreground bg-foreground/10"
                  : "text-foreground/60 hover:text-foreground hover:bg-foreground/5",
              )}
            >
              {item.name}
              {pathname === item.href && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-foreground/10 rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          ))}
          <div className="flex items-center space-x-2 pl-4">
            <ThemeToggle />
            <Button
              variant="primary"
              size="sm"
              className="rounded-full px-6"
              asChild
            >
              <Link href="/contact">Book</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center space-x-2">
          <ThemeToggle />
          <button
            className="p-3 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 10 }}
            className="md:hidden absolute top-full left-6 right-6 mt-4 p-6 glass-card rounded-3xl space-y-4"
          >
            {NAVIGATION.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "block px-4 py-3 text-lg font-medium rounded-2xl",
                  pathname === item.href
                    ? "text-accent-violet bg-foreground/5"
                    : "text-foreground/70",
                )}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant="primary"
              className="w-full py-6 rounded-2xl"
              asChild
            >
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                Book a Consultation
              </Link>
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
