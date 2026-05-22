"use client";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type HomeSectionTeaserProps = {
  eyebrow: string;
  title: string;
  description: string;
  href: string;
  linkLabel: string;
  className?: string;
  variant?: "default" | "card";
};

export function HomeSectionTeaser({
  eyebrow,
  title,
  description,
  href,
  linkLabel,
  className,
  variant = "default",
}: HomeSectionTeaserProps) {
  return (
    <section
      className={cn(
        "section-padding",
        variant === "card" ? "bg-card" : "bg-background",
        className
      )}
    >
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-sm font-medium text-brand-primary mb-3">{eyebrow}</p>
          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
            {title}
          </h2>
          <p className="text-muted text-base sm:text-lg leading-relaxed mb-8">
            {description}
          </p>
          <Button href={href} variant="outline" size="lg" className="w-full sm:w-auto">
            {linkLabel}
            <ArrowRight className="h-5 w-5 shrink-0" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
