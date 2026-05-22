"use client";

import { Button } from "@/components/ui/Button";
import { BrandImageFrame } from "@/components/ui/BrandImageFrame";
import { CTA } from "@/lib/cta";
import { ROUTES, estimateHref } from "@/lib/nav";
import { MARKET_STATS } from "@/lib/pricing";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Mail, Sparkles } from "lucide-react";
import { images, srcFrom } from "@/lib/images";

const heroStats = [
  {
    value: "1–3%",
    label: "avg. response rate for local offers",
    highlight: true,
  },
  {
    value: MARKET_STATS.uspsPostage,
    label: "USPS postage per piece",
    highlight: false,
  },
];

export function Hero() {
  return (
    <section
      className="relative min-h-[100dvh] flex items-center pb-12 sm:pb-16 overflow-hidden"
      style={{ paddingTop: "var(--site-header-height)" }}
    >
      <div
        className="absolute inset-0 -z-10"
        style={{ background: "var(--gradient-soft)" }}
      />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] rounded-full bg-brand-primary/12 blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-brand-surface blur-3xl -z-10" />

      <div className="container-wide section-padding !pt-10 sm:!pt-14 !pb-12 sm:!pb-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex max-w-full items-center gap-2 rounded-full glass px-3 py-2 sm:px-4 text-xs sm:text-sm mb-5 sm:mb-6">
              <Sparkles className="h-4 w-4 shrink-0 text-brand-primary" />
              <span className="text-muted truncate sm:whitespace-normal">
                EDDM made simple — no lists required
              </span>
            </div>

            <h1 className="text-[1.75rem] leading-[1.12] sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-5 sm:mb-6">
              Ship EDDM flyers to every door.{" "}
              <span className="gradient-text">Without the headache.</span>
            </h1>

            <p className="text-base sm:text-lg text-muted max-w-xl mb-6 sm:mb-8 leading-relaxed">
              Plus One Mailers is the easiest way for local businesses to launch
              Every Door Direct Mail campaigns — pick how many homes you want to
              reach, see your price instantly, and we deliver a flyer to each one.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10">
              <Button
                size="lg"
                className="w-full sm:w-auto"
                href={estimateHref()}
              >
                {CTA.estimate}
                <ArrowRight className="h-5 w-5 shrink-0" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto"
                href={ROUTES.pricing}
              >
                {CTA.pricing}
              </Button>
            </div>

            <ul className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6 sm:gap-y-2 lg:flex-nowrap lg:gap-x-8">
              {[
                `From ${MARKET_STATS.costPerHomeLow}/home all-in`,
                `${MARKET_STATS.minOrder.toLocaleString()} home minimum`,
                "48-hour turnaround available",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-muted whitespace-nowrap shrink-0"
                >
                  <CheckCircle2 className="h-4 w-4 text-brand-primary shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg mx-auto lg:max-w-none"
          >
            <BrandImageFrame
              src={srcFrom(images.hero, 720, 75)}
              alt={images.hero.alt}
              aspect="4/3"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            >
              <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 rounded-2xl glass px-4 py-3 shadow-lg">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-primary text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <p className="text-sm font-medium text-foreground leading-snug">
                  Every home on your routes gets your flyer.
                </p>
              </div>
            </BrandImageFrame>

            <div className="grid grid-cols-2 gap-3 mt-4">
              {heroStats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-border bg-card px-4 py-3.5 shadow-sm"
                >
                  <p
                    className={
                      stat.highlight
                        ? "text-xl sm:text-2xl font-semibold gradient-text"
                        : "text-xl sm:text-2xl font-semibold text-foreground"
                    }
                  >
                    {stat.value}
                  </p>
                  <p className="text-[11px] sm:text-xs text-muted mt-1 leading-snug">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
