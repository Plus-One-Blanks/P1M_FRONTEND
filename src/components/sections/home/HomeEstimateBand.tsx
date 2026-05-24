"use client";

import { Button } from "@/components/ui/Button";
import { BrandImageFrame } from "@/components/ui/BrandImageFrame";
import { CTA } from "@/lib/cta";
import { images, srcFrom } from "@/lib/images";
import { fadeUp } from "@/lib/motion";
import { estimateHref } from "@/lib/nav";
import { motion } from "framer-motion";
import { ArrowRight, Calculator } from "lucide-react";

export function HomeEstimateBand() {
  return (
    <section className="section-padding bg-brand-surface border-y border-border/60">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <motion.div {...fadeUp}>
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 px-4 py-2 text-sm font-medium text-brand-primary mb-5">
              <Calculator className="h-4 w-4" />
              Free estimate tool
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
              See your price in{" "}
              <span className="gradient-text">under 60 seconds</span>
            </h2>
            <p className="text-muted leading-relaxed mb-6 max-w-lg">
              Slide to your home count and get an instant all-in total. Submit
              your ZIPs for a confirmed quote — no credit card, no mailing lists,
              no complicated options.
            </p>
            <Button href={estimateHref()} size="lg" className="w-full sm:w-auto">
              {CTA.estimate}
              <ArrowRight className="h-5 w-5 shrink-0" />
            </Button>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.08 }}
          >
            <BrandImageFrame
              src={srcFrom(images.estimateBand, 700)}
              alt={images.estimateBand.alt}
              aspect="4/3"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
