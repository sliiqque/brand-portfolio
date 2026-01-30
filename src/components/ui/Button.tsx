import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full font-medium transition-all focus:outline-none focus:ring-2 focus:ring-accent-violet/50 disabled:opacity-50 disabled:pointer-events-none",
  {
    variants: {
      variant: {
        primary:
          "bg-accent-violet text-white glow-button hover:bg-accent-violet/90 hover:scale-[1.02] active:scale-[0.98]",
        secondary:
          "bg-accent-cyan text-background glow-button-cyan hover:bg-accent-cyan/90 hover:scale-[1.02] active:scale-[0.98]",
        outline:
          "border border-border-subtle bg-foreground/5 text-foreground hover:bg-foreground/10 active:scale-[0.98]",
        ghost:
          "bg-transparent text-foreground hover:bg-foreground/5 active:scale-[0.98]",
      },
      size: {
        sm: "px-4 py-2 text-sm",
        md: "px-6 py-3 text-base",
        lg: "px-8 py-4 text-lg font-bold",
        icon: "p-3",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  },
);

Button.displayName = "Button";

export { Button, buttonVariants };
