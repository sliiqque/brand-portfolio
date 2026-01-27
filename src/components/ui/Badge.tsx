import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "violet" | "cyan" | "outline";
}

export function Badge({
  className,
  variant = "outline",
  ...props
}: BadgeProps) {
  const variants = {
    violet: "bg-accent-violet/10 text-accent-violet border-accent-violet/20",
    cyan: "bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20",
    outline:
      "border-white/10 bg-white/5 text-foreground/80 hover:bg-white/10 transition-all duration-300 hover:border-white/20",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider transition-all focus:outline-none",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
