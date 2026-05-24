"use client";

import { Button } from "@/components/ui/Button";
import { CTA } from "@/lib/cta";
import { fadeUp } from "@/lib/motion";
import { estimateHref } from "@/lib/nav";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

type HomeMidCtaProps = {
  title?: string;
  description?: string;
};

export function HomeMidCta({
  title = "Know your cost before you commit",
  description = "Free estimate in under 60 seconds. A real person confirms your home count within one business day.",
}: HomeMidCtaProps) {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          {...fadeUp}
          className="rounded-3xl bg-brand-primary px-6 py-10 sm:px-12 sm:py-12 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 text-center sm:text-left shadow-xl shadow-brand-primary/25"
        >
          <div className="max-w-xl">
            <h2 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mb-2">
              {title}
            </h2>
            <p className="text-white/90 text-sm sm:text-base leading-relaxed">
              {description}
            </p>
          </div>
          <Button
            href={estimateHref()}
            size="lg"
            variant="inverse"
            className="w-full sm:w-auto shrink-0"
          >
            {CTA.estimate}
            <ArrowRight className="h-5 w-5 shrink-0" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
