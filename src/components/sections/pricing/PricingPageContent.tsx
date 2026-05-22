"use client";

import { PageCta } from "@/components/layout/PageCta";
import { PageHero } from "@/components/layout/PageHero";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/lib/cta";
import {
  MARKET_STATS,
  USPS_POSTAGE_PER_PIECE,
  VOLUME_TIERS,
} from "@/lib/pricing";
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
    name: "Professional design",
    price: "From $79",
    note: "Template-based or custom layout to EDDM specs",
  },
  {
    name: "Additional carrier routes",
    price: "+$25 each",
    note: "Expand beyond your first route set",
  },
  {
    name: "Rush production",
    price: "Quote on request",
    note: "Tighter timelines when print schedule allows",
  },
];

const breakdown = [
  {
    label: "Printing",
    desc: "Full-color on your chosen mailer size and sides",
  },
  {
    label: "USPS postage",
    desc: `${formatCurrencyDetailed(USPS_POSTAGE_PER_PIECE)}/piece at current retail EDDM rates`,
  },
  {
    label: "EDDM prep",
    desc: "Bundling, facing slips, and post office drop-off",
  },
  {
    label: "Route support",
    desc: "Mapping carrier routes and confirming piece counts",
  },
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
        description={`Rates include print, USPS postage (${formatCurrencyDetailed(USPS_POSTAGE_PER_PIECE)}/piece), prep, and drop-off. Volume discounts apply automatically — no surprise fees at checkout.`}
        actions={[
          { href: estimateHref(), label: CTA.estimate },
        ]}
      />

      <section className="section-padding bg-card">
        <div className="container-narrow">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
            {VOLUME_TIERS.map((tier, i) => (
              <motion.div
                key={tier.id}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.06 }}
                className={cn(
                  "relative rounded-3xl p-6 bg-background border transition-shadow",
                  tier.highlight
                    ? "border-brand-primary shadow-xl shadow-brand-primary/15 ring-2 ring-brand-primary/20"
                    : "border-border"
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
              Minimum order: {MARKET_STATS.minOrder} pieces
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
          <motion.div {...fadeUp} className="mb-10">
            <p className="text-sm font-medium text-brand-primary mb-3">Breakdown</p>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">
              Where your per-piece rate goes
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 gap-4 mb-14">
            {breakdown.map((row, i) => (
              <motion.div
                key={row.label}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.05 }}
                className="rounded-2xl bg-card border border-border p-5 sm:p-6"
              >
                <p className="font-semibold mb-1">{row.label}</p>
                <p className="text-sm text-muted leading-relaxed">{row.desc}</p>
              </motion.div>
            ))}
          </div>

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
        description="Use the estimate tool for quantity, mailer size, and routes — then we'll confirm every line item."
      />
    </>
  );
}
