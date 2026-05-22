"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost" | "outline" | "inverse";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
}

const buttonBase =
  "inline-flex items-center justify-center gap-2 font-medium whitespace-nowrap transition-all duration-200 cursor-pointer select-none disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/40 focus-visible:ring-offset-2 active:scale-[0.98]";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-primary text-white hover:bg-brand-primary-hover shadow-sm hover:shadow-md",
  secondary:
    "bg-brand-ink text-white hover:bg-brand-ink/90 shadow-sm hover:shadow-md",
  ghost:
    "bg-transparent text-foreground hover:bg-brand-primary/8 active:bg-brand-primary/12 active:scale-100",
  outline:
    "border-2 border-brand-primary/30 bg-card text-foreground hover:bg-brand-surface hover:border-brand-primary/50",
  inverse:
    "bg-white text-brand-primary hover:bg-white/95 shadow-lg hover:shadow-xl",
};

const sizes: Record<ButtonSize, string> = {
  sm: "min-h-9 px-4 py-2 text-sm rounded-full",
  md: "min-h-11 px-6 py-3 text-base rounded-full",
  lg: "min-h-12 px-8 py-4 text-lg rounded-full font-medium",
};

export const Button = forwardRef<
  HTMLButtonElement | HTMLAnchorElement,
  ButtonProps
>(({ className, variant = "primary", size = "md", href, children, onClick, ...props }, ref) => {
  const styles = cn(buttonBase, variants[variant], sizes[size], className);

  if (href) {
    return (
      <Link
        href={href}
        ref={ref as React.Ref<HTMLAnchorElement>}
        className={styles}
        onClick={onClick as React.MouseEventHandler<HTMLAnchorElement> | undefined}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={styles}
      {...props}
    >
      {children}
    </button>
  );
});

Button.displayName = "Button";

/** Shared styles for calculator / form option toggles */
export const choiceButtonStyles = {
  base: "rounded-xl border font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/40 focus-visible:ring-offset-2 active:scale-[0.98]",
  selected: "border-brand-primary bg-brand-primary text-white shadow-sm",
  unselected:
    "border-border text-muted hover:border-brand-primary/50 hover:bg-brand-surface/60",
  pill: "rounded-full px-3 py-1.5 text-xs font-medium border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary/40 focus-visible:ring-offset-2 active:scale-[0.98]",
} as const;
