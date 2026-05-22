"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/lib/cta";
import { fadeUp } from "@/lib/motion";
import { ROUTES, estimateHref } from "@/lib/nav";
import {
  exampleCampaignTotal,
  MARKET_STATS,
  DESIGN_FEE,
  MIN_ORDER_HOMES,
  VOLUME_TIERS,
} from "@/lib/pricing";
import { cn, formatCurrency, formatCurrencyDetailed } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

const included = [
  "Full-color printing",
  "USPS EDDM postage & prep",
  "Route mapping & home count confirmation",
  "Proof approval before print",
  "Bundling, facing slips & drop-off",
];

export function HomePricing() {
  return (
    <section id="pricing" className="section-padding bg-background scroll-mt-28">
      <div className="container-narrow">
        <SectionHeader
          eyebrow="Pricing"
          title={
            <>
              Transparent per-home rates.{" "}
              <span className="gradient-text">No surprises.</span>
            </>
          }
          description={`One all-in price per household from ${MARKET_STATS.costPerHomeLow} to ${MARKET_STATS.costPerHomeHigh} depending on volume. You choose how many homes — we deliver that many flyers.`}
          href={ROUTES.pricing}
          linkLabel="View full pricing breakdown"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-10">
          {VOLUME_TIERS.map((tier, i) => (
            <motion.div
              key={tier.id}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.05 }}
              className={cn(
                "relative rounded-3xl p-5 sm:p-6 bg-card border transition-shadow",
                tier.highlight
                  ? "border-brand-primary shadow-xl shadow-brand-primary/15 ring-2 ring-brand-primary/20"
                  : "border-border"
              )}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-primary px-3 py-1 text-xs font-medium text-white whitespace-nowrap">
                  Most popular
                </span>
              )}
              <p className="text-sm text-muted mb-1">{tier.min.toLocaleString()}+ homes</p>
              <p className="text-2xl sm:text-3xl font-semibold mb-1">
                {formatCurrencyDetailed(tier.ratePerHome)}
                <span className="text-sm font-normal text-muted">/home</span>
              </p>
              <p className="text-xs text-brand-primary font-medium mt-2">
                {formatCurrency(exampleCampaignTotal(tier.min))} at{" "}
                {tier.min.toLocaleString()}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...fadeUp}
          className="rounded-3xl border border-border bg-card p-6 sm:p-10 mb-10"
        >
          <h3 className="text-lg font-semibold mb-6 text-center sm:text-left">
            Every tier includes
          </h3>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {included.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-muted">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-sm text-muted mt-6 text-center sm:text-left">
            {`Minimum ${MIN_ORDER_HOMES.toLocaleString()} homes · Optional mailer design — $${DESIGN_FEE} flat`}
          </p>
        </motion.div>

        <motion.div {...fadeUp} className="text-center">
          <Button size="lg" href={estimateHref()} className="w-full sm:w-auto">
            {CTA.estimate}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
