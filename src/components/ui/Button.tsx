"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-primary text-white hover:bg-brand-primary-hover active:bg-brand-primary-hover shadow-sm hover:shadow-md",
  secondary:
    "bg-brand-ink text-white hover:bg-brand-ink/90 active:bg-brand-ink shadow-sm hover:shadow-md",
  ghost:
    "bg-transparent text-foreground hover:bg-brand-primary/8 active:bg-brand-primary/12",
  outline:
    "border-2 border-brand-primary/30 bg-card text-foreground hover:bg-brand-surface hover:border-brand-primary/50 active:bg-brand-surface",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-full",
  md: "px-6 py-3 text-base rounded-full",
  lg: "px-8 py-4 text-lg rounded-full font-medium",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 font-medium whitespace-nowrap transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
