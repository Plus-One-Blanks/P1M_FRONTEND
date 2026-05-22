"use client";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

export type PageHeroAction = {
  href: string;
  label: string;
  variant?: "primary" | "secondary" | "outline";
};

type PageHeroProps = {
  badge?: { icon: LucideIcon; label: string };
  title: React.ReactNode;
  description: string;
  actions?: PageHeroAction[];
  className?: string;
};

export function PageHero({
  badge,
  title,
  description,
  actions,
  className,
}: PageHeroProps) {
  const BadgeIcon = badge?.icon;

  return (
    <section
      className={cn("relative overflow-hidden", className)}
      style={{ paddingTop: "var(--site-header-height)" }}
    >
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-soft)" }}
      />
      <div className="absolute top-20 right-0 h-[420px] w-[420px] rounded-full bg-brand-primary/10 blur-3xl -z-10" />

      <div className="container-wide section-padding !pb-12 sm:!pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          {badge && BadgeIcon && (
            <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm mb-6">
              <BadgeIcon className="h-4 w-4 text-brand-primary shrink-0" />
              <span className="text-muted">{badge.label}</span>
            </div>
          )}

          <h1 className="text-[1.75rem] leading-[1.12] sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-5 sm:mb-6">
            {title}
          </h1>

          <p className="text-base sm:text-lg text-muted leading-relaxed mb-8 max-w-2xl">
            {description}
          </p>

          {actions && actions.length > 0 && (
            <div className="flex flex-col sm:flex-row gap-3">
              {actions.map((action) => (
                <Button
                  key={action.href + action.label}
                  href={action.href}
                  size="lg"
                  variant={action.variant ?? "primary"}
                  className="w-full sm:w-auto"
                >
                  {action.label}
                </Button>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
