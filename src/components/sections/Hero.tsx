"use client";

import { Button } from "@/components/ui/Button";
import { CTA } from "@/lib/cta";
import { ROUTES, estimateHref } from "@/lib/nav";
import { MARKET_STATS } from "@/lib/pricing";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { images, srcFrom } from "@/lib/images";
import Image from "next/image";

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
              Every Door Direct Mail campaigns — pick your routes, see your price
              instantly, and we handle print, prep, and USPS delivery.
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

            <ul className="flex flex-col sm:flex-row gap-4 sm:gap-8">
              {[
                `From ${MARKET_STATS.costPerPieceLow}/piece all-in`,
                "200 piece minimum",
                "48-hour turnaround available",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 text-sm text-muted"
                >
                  <CheckCircle2 className="h-4 w-4 text-brand-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-lg mx-auto"
          >
            <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-2xl shadow-brand-primary/15">
              <Image
                src={srcFrom(images.hero)}
                alt={images.hero.alt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/55 via-transparent to-transparent" />
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="hidden sm:block absolute left-2 sm:-left-8 top-1/4 glass rounded-2xl p-3 sm:p-4 shadow-xl max-w-[180px] sm:max-w-[200px]"
            >
              <p className="text-xl sm:text-2xl font-semibold gradient-text">1–3%</p>
              <p className="text-xs text-muted mt-1">
                avg. response rate for local offers
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.65, duration: 0.5 }}
              className="hidden sm:block absolute right-2 sm:-right-6 bottom-1/4 glass rounded-2xl p-3 sm:p-4 shadow-xl"
            >
              <p className="text-xl sm:text-2xl font-semibold">{MARKET_STATS.uspsPostage}</p>
              <p className="text-xs text-muted mt-1">USPS postage per piece</p>
            </motion.div>

            <div className="sm:hidden grid grid-cols-2 gap-3 mt-4">
              <div className="glass rounded-2xl p-3 text-center">
                <p className="text-xl font-semibold gradient-text">1–3%</p>
                <p className="text-[11px] text-muted mt-0.5">Avg. response rate</p>
              </div>
              <div className="glass rounded-2xl p-3 text-center">
                <p className="text-xl font-semibold">{MARKET_STATS.uspsPostage}</p>
                <p className="text-[11px] text-muted mt-0.5">USPS per piece</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
