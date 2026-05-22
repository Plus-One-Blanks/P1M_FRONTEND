"use client";

import { PageCta } from "@/components/layout/PageCta";
import { PageHero } from "@/components/layout/PageHero";
import {
  howItWorksSteps,
  weHandle,
  youProvide,
} from "@/lib/content/how-it-works";
import { CTA } from "@/lib/cta";
import { ROUTES, estimateHref } from "@/lib/nav";
import { srcFrom } from "@/lib/images";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check, Route, Sparkles } from "lucide-react";
import Image from "next/image";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

export function HowItWorksPageContent() {
  return (
    <>
      <PageHero
        badge={{ icon: Route, label: "Simple process" }}
        title={
          <>
            From routes to mailboxes in{" "}
            <span className="gradient-text">four clear steps.</span>
          </>
        }
        description="We built Plus One Mailers so you never touch USPS paperwork, bundling rules, or print specs. You focus on your offer — we handle everything from route mapping to delivery."
        actions={[
          { href: estimateHref(), label: CTA.estimate },
          { href: ROUTES.pricing, label: CTA.pricing, variant: "outline" },
        ]}
      />

      <section className="section-padding bg-card">
        <div className="container-narrow">
          <div className="grid md:grid-cols-2 gap-8">
            {howItWorksSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.article
                  key={step.title}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.06 }}
                  className="rounded-3xl overflow-hidden bg-brand-surface border border-border"
                >
                  <div className="relative h-52 overflow-hidden bg-brand-surface">
                    <Image
                      src={srcFrom(step.image)}
                      alt={step.image.alt}
                      fill
                      className="object-cover object-center saturate-[0.88] contrast-[1.03]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div
                      className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-brand-primary/12 via-transparent to-brand-surface/40"
                      aria-hidden
                    />
                    <div className="absolute top-4 left-4 flex h-11 w-11 items-center justify-center rounded-xl bg-white/95 shadow text-brand-primary">
                      <Icon className="h-5 w-5" />
                      <span className="sr-only">Step {i + 1}</span>
                    </div>
                    <span className="absolute top-4 right-4 rounded-full bg-brand-ink/80 px-3 py-1 text-xs font-medium text-white">
                      Step {i + 1}
                    </span>
                  </div>
                  <div className="p-6 sm:p-8">
                    <h2 className="text-xl font-semibold mb-2">{step.title}</h2>
                    <p className="text-muted leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <p className="text-sm text-muted/90 leading-relaxed border-t border-border pt-4">
                      {step.detail}
                    </p>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            {...fadeUp}
            className="rounded-3xl border border-border bg-card p-8 sm:p-12"
          >
            <div className="flex items-start gap-4 mb-10">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-primary/10">
                <Sparkles className="h-6 w-6 text-brand-primary" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-2">
                  What you bring vs. what we handle
                </h2>
                <p className="text-muted leading-relaxed max-w-2xl">
                  You stay in control of the message and the neighborhoods. We
                  take care of the production and postal side so your campaign
                  ships on time and passes USPS requirements the first time.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold mb-4">You provide</h3>
                <ul className="space-y-3">
                  {youProvide.map((item) => (
                    <li key={item} className="flex gap-3 text-muted text-sm sm:text-base">
                      <Check className="h-5 w-5 shrink-0 text-brand-primary mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-brand-surface border border-border p-6">
                <h3 className="font-semibold mb-4">We handle</h3>
                <ul className="space-y-3">
                  {weHandle.map((item) => (
                    <li key={item} className="flex gap-3 text-muted text-sm sm:text-base">
                      <Check className="h-5 w-5 shrink-0 text-brand-primary mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-brand-surface/50">
        <div className="container-narrow">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto">
            <p className="text-sm font-medium text-brand-primary mb-3">Timeline</p>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
              Typical campaign timeline
            </h2>
            <p className="text-muted mb-10">
              Exact dates depend on quantity and proof rounds — we&apos;ll confirm
              on your quote.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { day: "Day 1", label: "Submit estimate", sub: "Routes & quantity reviewed" },
              { day: "Day 1–2", label: "Confirmed quote", sub: "Breakdown in your inbox" },
              { day: "Day 2–4", label: "Proof & approval", sub: "You sign off before print" },
              { day: "Day 5–10", label: "In mailboxes", sub: "USPS delivery on your routes" },
            ].map((item, i) => (
              <motion.div
                key={item.label}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.05 }}
                className={cn(
                  "rounded-2xl bg-card border border-border p-5 text-center sm:text-left"
                )}
              >
                <p className="text-xs font-medium text-brand-primary mb-2">{item.day}</p>
                <p className="font-semibold mb-1">{item.label}</p>
                <p className="text-sm text-muted">{item.sub}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PageCta
        title="See your price before you commit"
        description="Use the free estimate tool — pick your home count and get a confirmed quote from our team."
      />
    </>
  );
}
