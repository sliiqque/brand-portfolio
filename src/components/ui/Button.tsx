import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", asChild = false, ...props },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    const variants = {
      primary:
        "bg-accent-violet text-white glow-button hover:bg-accent-violet/90 hover:scale-[1.02] active:scale-[0.98]",
      secondary:
        "bg-accent-cyan text-background glow-button-cyan hover:bg-accent-cyan/90 hover:scale-[1.02] active:scale-[0.98]",
      outline:
        "border border-white/10 bg-white/5 text-foreground hover:bg-white/10 hover:border-white/20 active:scale-[0.98]",
      ghost:
        "bg-transparent text-foreground hover:bg-white/5 active:scale-[0.98]",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg font-bold",
      icon: "p-3",
    };

    return (
      <Comp
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-medium transition-all focus:outline-none focus:ring-2 focus:ring-accent-violet/50 disabled:opacity-50 disabled:pointer-events-none",
          variants[variant],
          sizes[size],
          className,
        )}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button };
