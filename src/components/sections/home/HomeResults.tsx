"use client";

import { Button } from "@/components/ui/Button";
import { BrandImageFrame } from "@/components/ui/BrandImageFrame";
import { CTA } from "@/lib/cta";
import { images, srcFrom } from "@/lib/images";
import { fadeUp } from "@/lib/motion";
import { estimateHref } from "@/lib/nav";
import { MARKET_STATS } from "@/lib/pricing";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp } from "lucide-react";

const metrics = [
  { value: MARKET_STATS.avgResponseRate, label: "typical local offer response rate" },
  { value: MARKET_STATS.typicalRoi, label: "ROI on well-targeted campaigns" },
  { value: "0", label: "mailing lists required" },
];

export function HomeResults() {
  return (
    <section className="section-padding bg-brand-surface border-y border-border/60">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          <motion.div {...fadeUp}>
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 px-4 py-2 text-sm font-medium text-brand-primary mb-5">
              <TrendingUp className="h-4 w-4" />
              Results that matter
            </div>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
              Turn neighborhood reach into{" "}
              <span className="gradient-text">real customers</span>
            </h2>
            <p className="text-muted leading-relaxed mb-8">
              EDDM works when your offer is clear and your routes match where you
              sell. Use a trackable CTA — unique promo, QR, or phone — and many
              owners see strong returns by the second or third drop to the same
              streets.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-2xl bg-card border border-border px-3 py-4 text-center"
                >
                  <p className="text-xl sm:text-2xl font-semibold gradient-text">
                    {m.value}
                  </p>
                  <p className="text-[10px] sm:text-xs text-muted mt-1 leading-snug">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>

            <Button href={estimateHref()} size="lg" className="w-full sm:w-auto">
              {CTA.estimate}
              <ArrowRight className="h-5 w-5 shrink-0" />
            </Button>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
          >
            <BrandImageFrame
              src={srcFrom(images.howItWorks.delivery, 800)}
              alt={images.howItWorks.delivery.alt}
              aspect="4/3"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
