import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-wider transition-all focus:outline-none",
  {
    variants: {
      variant: {
        violet: "bg-accent-violet/10 text-accent-violet border-accent-violet/20",
        cyan: "bg-accent-cyan/10 text-accent-cyan border-accent-cyan/20",
        outline:
          "border-white/10 bg-white/5 text-foreground/80 hover:bg-white/10 transition-all duration-300 hover:border-white/20",
      },
    },
    defaultVariants: {
      variant: "outline",
    },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div
      className={cn(badgeVariants({ variant, className }))}
      {...props}
    />
  );
}
