"use client";

import { Button } from "@/components/ui/Button";
import { CTA } from "@/lib/cta";
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
    <section className="section-padding bg-background border-b border-border/60">
      <div className="container-narrow">
        <motion.div
          {...fadeUp}
          className="rounded-3xl border border-border bg-card p-8 sm:p-12 lg:p-14 shadow-sm"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-10">
            <div className="max-w-xl">
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
              <div className="flex flex-col sm:flex-row gap-3">
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
              </div>
            </div>

            <ul className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 lg:max-w-sm lg:w-full shrink-0">
              {points.map((point, i) => (
                <motion.li
                  key={point.title}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.06 }}
                  className="rounded-2xl bg-brand-surface/80 border border-border/80 p-5"
                >
                  <Home className="h-5 w-5 text-brand-primary mb-2" />
                  <p className="font-medium text-foreground mb-1">{point.title}</p>
                  <p className="text-sm text-muted leading-relaxed">{point.body}</p>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
