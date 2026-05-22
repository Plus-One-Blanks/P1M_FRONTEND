"use client";

import { Button } from "@/components/ui/Button";
import { CTA } from "@/lib/cta";
import { cn, formatCurrencyDetailed } from "@/lib/utils";
import {
  MARKET_STATS,
  USPS_POSTAGE_PER_PIECE,
  VOLUME_TIERS,
} from "@/lib/pricing";
import { Check } from "lucide-react";
import { motion } from "framer-motion";

const included = [
  "Full-color printing",
  "USPS EDDM postage & prep",
  "Route mapping assistance",
  "Proof approval before print",
  "Bundling & facing slips",
];

export function Pricing() {
  return (
    <section id="pricing" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-medium text-brand-primary mb-3">Pricing</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            Transparent rates. No surprises at checkout.
          </h2>
          <p className="text-muted text-base sm:text-lg">
            All-in pricing includes print, postage (
            {formatCurrencyDetailed(USPS_POSTAGE_PER_PIECE)}/piece USPS rate),
            prep, and drop-off. Volume discounts apply automatically.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {VOLUME_TIERS.map((tier, i) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={cn(
                "relative rounded-3xl p-6 bg-card border transition-shadow",
                tier.highlight
                  ? "border-brand-primary shadow-xl shadow-brand-primary/15 ring-2 ring-brand-primary/20"
                  : "border-border hover:shadow-lg"
              )}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand-primary px-3 py-1 text-xs font-medium text-white">
                  Most popular
                </span>
              )}
              <p className="text-sm text-muted mb-1">{tier.name}</p>
              <p className="text-3xl font-semibold mb-1">
                {formatCurrencyDetailed(tier.ratePerPiece)}
                <span className="text-base font-normal text-muted">/piece</span>
              </p>
              <p className="text-sm text-muted">
                {tier.max
                  ? `${tier.min.toLocaleString()} – ${tier.max.toLocaleString()} pieces`
                  : `${tier.min.toLocaleString()}+ pieces`}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="rounded-3xl bg-card border border-border p-5 sm:p-8 mb-10">
          <h3 className="text-lg font-semibold mb-6 text-center">
            Every plan includes
          </h3>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {included.map((item) => (
              <li key={item} className="flex items-center gap-3 text-muted">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                  <Check className="h-3.5 w-3.5" />
                </span>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-center text-sm text-muted mt-6">
            Minimum order: {MARKET_STATS.minOrder} pieces · Design from $79 ·
            Extra routes +$25 each
          </p>
        </div>

        <div className="text-center">
          <Button
            size="lg"
            className="w-full sm:w-auto"
            onClick={() =>
              document
                .getElementById("estimate")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            {CTA.submit}
          </Button>
        </div>
      </div>
    </section>
  );
}
