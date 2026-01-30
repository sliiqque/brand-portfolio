import Link from "next/link";
import { Github, Twitter, Linkedin, ArrowUpRight } from "lucide-react";

import { NAVIGATION, SERVICES } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="relative border-t border-border-subtle bg-background py-24 overflow-hidden">
      {/* Background Watermark */}
      <div className="absolute -bottom-24 -right-24 text-[20vw] font-black text-foreground/[0.02] select-none pointer-events-none tracking-tighter leading-none">
        SLIIQQUE
      </div>

      <div className="container relative z-10 mx-auto max-w-[1200px] px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
          <div className="md:col-span-5">
            <Link
              href="/"
              className="text-3xl font-black tracking-tighter mb-8 block group"
              aria-label="SLIIQQUE Home"
            >
              SLIIQ
              <span className="text-accent-violet group-hover:text-accent-cyan transition-colors duration-500">
                QUE
              </span>
            </Link>
            <p className="text-xl text-foreground/60 max-w-md mb-10 leading-relaxed">
              Engineering high-performance SaaS and Web3 interfaces that convert
              users and scale products.
            </p>
            <div className="flex space-x-4">
              {[
                {
                  id: "social-github",
                  icon: Github,
                  href: "https://github.com/sliiqque",
                  label: "GitHub",
                },
                {
                  id: "social-twitter",
                  icon: Twitter,
                  href: "https://twitter.com/sliiqque",
                  label: "Twitter",
                },
                {
                  id: "social-linkedin",
                  icon: Linkedin,
                  href: "https://linkedin.com/in/sliiqque",
                  label: "LinkedIn",
                },
              ].map((social) => (
                <Link
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-2xl border border-border-subtle bg-foreground/5 flex items-center justify-center hover:bg-accent-violet hover:border-accent-violet transition-all duration-500 group"
                  aria-label={social.label}
                >
                  <social.icon
                    size={20}
                    className="group-hover:scale-110 transition-transform"
                  />
                </Link>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 md:col-start-8">
            <h4 className="font-bold mb-6 uppercase text-xs tracking-[0.2em] text-foreground/40">
              Navigation
            </h4>
            <ul className="space-y-4">
              {NAVIGATION.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.href}
                    className="text-foreground/60 hover:text-foreground transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-[1px] bg-accent-violet mr-0 group-hover:mr-2 transition-all duration-300" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-bold mb-6 uppercase text-xs tracking-[0.2em] text-foreground/40">
              Services
            </h4>
            <ul className="space-y-4">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    href="/services"
                    className="text-foreground/60 hover:text-foreground transition-colors flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-[1px] bg-accent-violet mr-0 group-hover:mr-2 transition-all duration-300" />
                    {service.title}
                    <ArrowUpRight
                      size={14}
                      className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-12 border-t border-border-subtle flex flex-col md:flex-row items-center justify-between text-sm text-foreground/40">
          <p className="font-medium">
            © {new Date().getFullYear()} SLIIQQUE. DESIGNED & BUILT BY SLIIQQUE.
          </p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <Link
              href="/privacy"
              className="hover:text-foreground transition-colors uppercase tracking-widest text-[10px] font-bold"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-foreground transition-colors uppercase tracking-widest text-[10px] font-bold"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
