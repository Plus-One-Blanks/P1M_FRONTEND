"use client";

import { Button } from "@/components/ui/Button";
import { CTA } from "@/lib/cta";
import { ROUTES, estimateHref } from "@/lib/nav";
import { MARKET_STATS } from "@/lib/pricing";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { images, srcFrom } from "@/lib/images";
import Image from "next/image";

const heroStats = [
  {
    value: MARKET_STATS.avgResponseRate,
    label: "avg. response rate for local offers",
  },
  {
    value: MARKET_STATS.uspsPostage,
    label: "USPS postage per piece",
  },
  {
    value: MARKET_STATS.trustDirectMail,
    label: "trust direct mail over social ads",
  },
  {
    value: MARKET_STATS.typicalRoi,
    label: "typical ROI on targeted campaigns",
  },
];

const trustPoints = [
  `From ${MARKET_STATS.costPerHomeLow}/home all-in`,
  `${MARKET_STATS.minOrder.toLocaleString()} home minimum`,
  "48-hour turnaround available",
];

export function Hero() {
  const heroImage = images.conversion.mailboxDelivery;

  return (
    <section
      className="relative flex min-h-[min(100dvh,920px)] items-center overflow-hidden"
      style={{ paddingTop: "var(--site-header-height)" }}
    >
      <Image
        src={srcFrom(heroImage, 1920, 75)}
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
        aria-hidden
      />

      <div
        className="absolute inset-0 bg-gradient-to-r from-brand-ink/92 via-brand-ink/72 to-brand-ink/45"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-t from-brand-ink/50 via-transparent to-brand-ink/20"
        aria-hidden
      />

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 container-wide w-full px-5 sm:px-8 lg:px-12 py-12 sm:py-16 lg:py-20"
      >
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 xl:gap-16 items-center max-w-6xl mx-auto">
          <div className="text-left">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full glass-dark px-4 py-2 text-xs sm:text-sm mb-5 sm:mb-6">
              <Sparkles className="h-4 w-4 shrink-0 text-brand-blue" />
              <span className="text-white/90">
                EDDM made simple — no lists required
              </span>
            </div>

            <h1 className="text-[1.875rem] leading-[1.12] sm:text-[2.75rem] lg:text-5xl xl:text-[3.25rem] font-semibold tracking-tight text-white mb-4 sm:mb-5 max-w-xl">
              Ship EDDM flyers to every door.{" "}
              <span className="text-brand-blue">Without the headache.</span>
            </h1>

            <p className="text-base sm:text-lg text-white/80 max-w-lg mb-6 sm:mb-8 leading-relaxed">
              Pick how many homes you want to reach, see your price instantly,
              and we deliver a flyer to each one — print, postage, and prep
              included.
            </p>

            <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4 mb-6 sm:mb-8">
              <Button
                size="lg"
                className="w-full sm:w-auto shadow-lg shadow-brand-primary/25"
                href={estimateHref()}
              >
                {CTA.estimate}
                <ArrowRight className="h-5 w-5 shrink-0" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-white/30 bg-white/10 text-white hover:bg-white/15 hover:border-white/40 backdrop-blur-sm"
                href={ROUTES.pricing}
              >
                {CTA.pricing}
              </Button>
            </div>

            <ul className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:gap-x-6 sm:gap-y-2">
              {trustPoints.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-white/75"
                >
                  <CheckCircle2 className="h-4 w-4 text-brand-blue shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:max-w-md lg:ml-auto w-full">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl bg-slate-200/92 backdrop-blur-sm border border-white/40 px-4 py-4 sm:px-5 sm:py-5 shadow-sm"
              >
                <p className="text-2xl sm:text-3xl font-semibold text-brand-ink">
                  {stat.value}
                </p>
                <p className="text-xs sm:text-sm text-muted mt-1.5 leading-snug">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
