"use client";

import { Button } from "@/components/ui/Button";
import { BrandImageFrame } from "@/components/ui/BrandImageFrame";
import { fadeUp } from "@/lib/motion";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ImageTextBlockProps = {
  imageSrc: string;
  imageAlt: string;
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  bullets?: string[];
  cta?: { href: string; label: string };
  reverse?: boolean;
  variant?: "default" | "card";
};

export function ImageTextBlock({
  imageSrc,
  imageAlt,
  eyebrow,
  title,
  description,
  bullets,
  cta,
  reverse = false,
  variant = "default",
}: ImageTextBlockProps) {
  return (
    <div
      className={cn(
        "grid lg:grid-cols-2 gap-10 lg:gap-14 items-center",
        variant === "card" && "rounded-3xl border border-border bg-card p-6 sm:p-10"
      )}
    >
      <motion.div
        {...fadeUp}
        className={cn(reverse && "lg:order-2")}
      >
        <BrandImageFrame
          src={imageSrc}
          alt={imageAlt}
          aspect="4/3"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </motion.div>

      <motion.div
        {...fadeUp}
        transition={{ ...fadeUp.transition, delay: 0.08 }}
        className={cn(reverse && "lg:order-1")}
      >
        <p className="text-sm font-medium text-brand-primary mb-3">{eyebrow}</p>
        <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
          {title}
        </h2>
        <p className="text-muted leading-relaxed mb-6">{description}</p>
        {bullets && bullets.length > 0 && (
          <ul className="space-y-2.5 mb-8">
            {bullets.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-sm text-muted"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                {item}
              </li>
            ))}
          </ul>
        )}
        {cta && (
          <Button href={cta.href} variant="outline" size="lg" className="w-full sm:w-auto">
            {cta.label}
            <ArrowRight className="h-5 w-5 shrink-0" />
          </Button>
        )}
      </motion.div>
    </div>
  );
}
