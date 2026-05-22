"use client";

import { PageCta } from "@/components/layout/PageCta";
import { PageHero } from "@/components/layout/PageHero";
import { industries } from "@/lib/content/industries";
import { CTA } from "@/lib/cta";
import { ROUTES, estimateHref } from "@/lib/nav";
import { srcFrom } from "@/lib/images";
import { motion } from "framer-motion";
import { Building2, Sparkles } from "lucide-react";
import Image from "next/image";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

export function IndustriesPageContent() {
  return (
    <>
      <PageHero
        badge={{ icon: Building2, label: "Local businesses" }}
        title={
          <>
            Built for businesses that{" "}
            <span className="gradient-text">live on neighborhood customers.</span>
          </>
        }
        description="If your customers come from nearby homes and businesses, EDDM is one of the highest-ROI channels you're probably not using yet. We help owners in every industry put a tangible offer in every mailbox on the routes that matter."
        actions={[
          { href: estimateHref(), label: CTA.estimate },
          { href: ROUTES.howItWorks, label: "How it works", variant: "outline" },
        ]}
      />

      <section className="section-padding bg-card">
        <div className="container-narrow space-y-16 sm:space-y-20">
          {industries.map((industry, i) => (
            <motion.article
              key={industry.name}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.04 }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            >
              <div
                className={
                  i % 2 === 1 ? "lg:order-2" : ""
                }
              >
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border bg-brand-surface shadow-xl shadow-brand-primary/10">
                  <Image
                    src={srcFrom(industry.image)}
                    alt={industry.image.alt}
                    fill
                    className="object-cover object-center saturate-[0.88] contrast-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-brand-primary/12 via-transparent to-brand-surface/50"
                    aria-hidden
                  />
                </div>
              </div>

              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-3">
                  {industry.name}
                </h2>
                <p className="text-muted text-lg leading-relaxed mb-6">
                  {industry.description}
                </p>
                <div className="rounded-2xl bg-brand-surface border border-border p-5 sm:p-6 mb-6">
                  <p className="text-sm font-medium text-brand-primary mb-2">
                    Why EDDM works here
                  </p>
                  <p className="text-muted leading-relaxed">{industry.whyEddm}</p>
                </div>
                <p className="text-sm font-medium text-foreground mb-3">
                  Example offers that perform
                </p>
                <ul className="space-y-2">
                  {industry.exampleOffers.map((offer) => (
                    <li
                      key={offer}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-primary" />
                      {offer}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            {...fadeUp}
            className="rounded-3xl border border-border bg-brand-surface/60 p-8 sm:p-12 text-center"
          >
            <Sparkles className="h-8 w-8 text-brand-primary mx-auto mb-4" />
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-3">
              Don&apos;t see your industry?
            </h2>
            <p className="text-muted max-w-xl mx-auto leading-relaxed">
              If you serve customers in a defined geographic area — retail,
              professional services, nonprofits, schools, and more — EDDM can
              work. Tell us about your business on the estimate form and
              we&apos;ll map routes that fit.
            </p>
          </motion.div>
        </div>
      </section>

      <PageCta
        title="Reach the neighborhoods that feed your business"
        description="Share your ZIP codes and offer — we'll show you piece counts, pricing, and timing."
      />
    </>
  );
}
