"use client";

import { motion } from "framer-motion";
import { Heart, Shield, Zap } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Radically simple",
    description:
      "No jargon, no hidden fees. You see your price before you talk to anyone — because that's how buying should work.",
  },
  {
    icon: Shield,
    title: "Built on USPS EDDM",
    description:
      "We specialize in Every Door Direct Mail — the most cost-effective way to reach every home and business on a carrier route.",
  },
  {
    icon: Heart,
    title: "Local business first",
    description:
      "Restaurants, salons, contractors, dentists — if you serve a neighborhood, EDDM puts your offer in every mailbox.",
  },
];

export function Mission() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-ink" />
      <div className="absolute inset-0 bg-gradient-to-br from-brand-ink via-brand-ink/95 to-brand-primary/30" />
      <div
        className="absolute inset-0 opacity-[0.35] bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')]"
        aria-hidden
      />

      <div className="container-narrow relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-sm font-medium text-brand-primary mb-3">
              Our mission
            </p>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-card mb-6">
              Make direct mail feel as easy as ordering online.
            </h2>
            <p className="text-card/70 text-lg leading-relaxed mb-6">
              Most small businesses never try EDDM because it feels complicated —
              route maps, facing slips, bundling rules, print specs. Plus One
              Mailers exists to remove every friction point so you can focus on
              your offer, not the post office.
            </p>
            <p className="text-card/70 text-lg leading-relaxed">
              We&apos;re starting with instant estimates and white-glove campaign
              support. Online checkout is coming soon — for now, every estimate
              gets a personal follow-up within one business day.
            </p>
          </motion.div>

          <div className="space-y-4">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="glass-dark rounded-2xl p-6 flex gap-4"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-primary">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-card mb-1">
                      {value.title}
                    </h3>
                    <p className="text-card/60 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
