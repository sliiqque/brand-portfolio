"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "./Button";
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
          "w-full flex items-center justify-between p-2 rounded-full border border-white/5 transition-all duration-500",
          scrolled
            ? "bg-background/40 backdrop-blur-xl shadow-2xl"
            : "bg-white/5 backdrop-blur-md",
        )}
      >
        <Link
          href="/"
          className="px-6 py-2 text-xl font-bold tracking-tighter group"
          onClick={() => setIsOpen(false)}
        >
          SLIIQ
          <span className="text-accent-violet group-hover:text-accent-cyan transition-colors">
            QUE
          </span>
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
                  ? "text-white bg-white/10"
                  : "text-white/60 hover:text-white hover:bg-white/5",
              )}
            >
              {item.name}
              {pathname === item.href && (
                <motion.div
                  layoutId="nav-pill"
                  className="absolute inset-0 bg-white/10 rounded-full -z-10"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </Link>
          ))}
          <div className="pl-4 pr-1">
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
        <button
          className="md:hidden p-3 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
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
                    ? "text-accent-violet bg-white/5"
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
