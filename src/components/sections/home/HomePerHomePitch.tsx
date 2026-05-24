"use client";

import { Button } from "@/components/ui/Button";
import { BrandImageFrame } from "@/components/ui/BrandImageFrame";
import { CTA } from "@/lib/cta";
import { images, srcFrom } from "@/lib/images";
import { fadeUp } from "@/lib/motion";
import { ROUTES, estimateHref } from "@/lib/nav";
import { MARKET_STATS } from "@/lib/pricing";
import { motion } from "framer-motion";
import { Home, Sparkles } from "lucide-react";

const points = [
  {
    title: "You pick the homes",
    body: "500, 2,000, 5,000 — however many households you want your flyer in front of.",
  },
  {
    title: "We match real addresses",
    body: "We map your ZIPs to USPS routes so your count matches real mailboxes, not guesses.",
  },
  {
    title: "One all-in price",
    body: `From ${MARKET_STATS.costPerHomeLow}–${MARKET_STATS.costPerHomeHigh} per home. Print, postage, prep, and delivery included.`,
  },
];

export function HomePerHomePitch() {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          {...fadeUp}
          className="rounded-3xl border border-border bg-card p-8 sm:p-12 lg:p-14 shadow-md shadow-brand-primary/5 overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-primary/10 px-4 py-2 text-sm font-medium text-brand-primary mb-5">
                <Sparkles className="h-4 w-4" />
                Why we&apos;re different
              </div>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
                One price per home.{" "}
                <span className="gradient-text">No confusing menus.</span>
              </h2>
              <p className="text-muted leading-relaxed mb-6">
                Most mail vendors bury you in routes, piece counts, and upgrades.
                We keep it simple: choose how many homes you want to reach — we
                make sure that many households get your flyer.
              </p>
              <motion.div
                {...fadeUp}
                className="flex flex-col sm:flex-row gap-3"
              >
                <Button href={estimateHref()} size="lg" className="w-full sm:w-auto">
                  {CTA.estimate}
                </Button>
                <Button
                  href={ROUTES.pricing}
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  {CTA.pricing}
                </Button>
              </motion.div>
            </div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="space-y-4"
            >
              <BrandImageFrame
                src={srcFrom(images.conversion.teamPlanning, 700)}
                alt={images.conversion.teamPlanning.alt}
                aspect="4/3"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <ul className="grid gap-3 sm:grid-cols-3 lg:grid-cols-1">
                {points.map((point) => (
                  <li
                    key={point.title}
                    className="rounded-2xl bg-brand-surface/80 border border-border/80 p-4"
                  >
                    <Home className="h-4 w-4 text-brand-primary mb-1.5" />
                    <p className="font-medium text-sm text-foreground mb-0.5">
                      {point.title}
                    </p>
                    <p className="text-xs text-muted leading-relaxed">{point.body}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
