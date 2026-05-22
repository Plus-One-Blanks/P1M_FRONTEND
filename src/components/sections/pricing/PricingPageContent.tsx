"use client";

import { PageCta } from "@/components/layout/PageCta";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/lib/cta";
import {
  DESIGN_FEE,
  exampleCampaignTotal,
  MARKET_STATS,
  MIN_ORDER_HOMES,
  VOLUME_TIERS,
} from "@/lib/pricing";
import { formatCurrency } from "@/lib/utils";
import { estimateHref } from "@/lib/nav";
import { cn, formatCurrencyDetailed } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, DollarSign, Info } from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

const included = [
  "Full-color printing",
  "USPS EDDM postage & prep",
  "Route mapping assistance",
  "Proof approval before print",
  "Bundling & facing slips",
];

const addons = [
  {
    name: "Mailer design",
    price: `$${DESIGN_FEE}`,
    note: "Flat rate — we create your EDDM-ready artwork to USPS specs",
  },
  {
    name: "Rush production",
    price: "Quote on request",
    note: "When your timeline is tight and print schedule allows",
  },
];

const includedDetail = [
  "Full-color printing & standard mailer size",
  "USPS EDDM postage (~$0.247/home — already in your rate)",
  "Route mapping so home count matches real addresses",
  "Bundling, facing slips, and post office drop-off",
];

export function PricingPageContent() {
  return (
    <>
      <PageHero
        badge={{ icon: DollarSign, label: "Transparent pricing" }}
        title={
          <>
            Know your all-in cost{" "}
            <span className="gradient-text">before you commit.</span>
          </>
        }
        description={`One price per home — from ${MARKET_STATS.costPerHomeLow} to ${MARKET_STATS.costPerHomeHigh} depending on volume. Pick how many households you want to reach; we handle print, postage, prep, and delivery. No piece math, no route fees.`}
        actions={[
          { href: estimateHref(), label: CTA.estimate },
        ]}
      />

      <section className="section-padding bg-card">
        <div className="container-narrow">
          <motion.p {...fadeUp} className="text-center text-muted mb-8 max-w-2xl mx-auto">
            You choose the number of homes. We make sure that many households get your
            flyer — one simple rate, everything included.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 mb-10">
            {VOLUME_TIERS.map((tier, i) => (
              <motion.div
                key={tier.id}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.06 }}
                className={cn(
                  "relative rounded-3xl p-6 bg-card border transition-shadow",
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
                <p className="text-sm text-muted mb-1">{tier.min.toLocaleString()} homes</p>
                <p className="text-3xl font-semibold mb-1">
                  {formatCurrencyDetailed(tier.ratePerHome)}
                  <span className="text-base font-normal text-muted">/home</span>
                </p>
                <p className="text-sm text-muted">
                  {tier.max
                    ? `${tier.min.toLocaleString()} – ${tier.max.toLocaleString()} homes`
                    : `${tier.min.toLocaleString()}+ homes`}
                </p>
                <p className="text-xs text-brand-primary font-medium mt-3">
                  e.g. {formatCurrency(exampleCampaignTotal(tier.min))} at {tier.min.toLocaleString()}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            {...fadeUp}
            className="rounded-3xl border border-border bg-brand-surface/50 p-6 sm:p-10 mb-12"
          >
            <h2 className="text-lg font-semibold mb-6 text-center sm:text-left">
              What&apos;s included in every tier
            </h2>
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
            <p className="text-center sm:text-left text-sm text-muted mt-6">
              Minimum {MIN_ORDER_HOMES.toLocaleString()} homes · Final count confirmed on your ZIPs before you pay
            </p>
          </motion.div>

          <div className="text-center">
            <Button size="lg" href={estimateHref()}>
              {CTA.submit}
            </Button>
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            {...fadeUp}
            className="rounded-3xl border border-border bg-brand-surface/50 p-6 sm:p-10 mb-14"
          >
            <h2 className="text-xl font-semibold tracking-tight mb-4 text-center sm:text-left">
              What&apos;s included in every per-home price
            </h2>
            <ul className="grid sm:grid-cols-2 gap-3">
              {includedDetail.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted">
                  <Check className="h-4 w-4 shrink-0 text-brand-primary mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            {...fadeUp}
            className="rounded-3xl border border-border bg-card p-6 sm:p-10"
          >
            <div className="flex items-start gap-3 mb-8">
              <Info className="h-5 w-5 text-brand-primary shrink-0 mt-0.5" />
              <div>
                <h2 className="text-lg font-semibold mb-1">Optional add-ons</h2>
                <p className="text-sm text-muted">
                  Added to your quote when selected — never buried in the base rate.
                </p>
              </div>
            </div>
            <div className="divide-y divide-border">
              {addons.map((addon) => (
                <div
                  key={addon.name}
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 py-4 first:pt-0 last:pb-0"
                >
                  <div>
                    <p className="font-medium">{addon.name}</p>
                    <p className="text-sm text-muted">{addon.note}</p>
                  </div>
                  <p className="text-brand-primary font-semibold shrink-0">
                    {addon.price}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <PageCta
        title="Get your exact number in seconds"
        description="Slide to your home count and see your total instantly — then we'll confirm addresses on your ZIPs."
      />
    </>
  );
}
