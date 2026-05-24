"use client";

import { Button } from "@/components/ui/Button";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { CTA } from "@/lib/cta";
import { images, srcFrom } from "@/lib/images";
import { fadeUp } from "@/lib/motion";
import { estimateHref } from "@/lib/nav";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export function HomeMailerShowcase() {
  return (
    <section className="section-padding bg-card border-y border-border/60">
      <div className="container-narrow">
        <SectionHeader
          eyebrow="What you get"
          title="Professional mailers your neighbors will notice"
          description="High-performing EDDM pieces use one dominant visual, one offer, and one action — we help you hit that standard."
        />

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          <motion.div
            {...fadeUp}
            className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border shadow-lg"
          >
            <Image
              src={srcFrom(images.howItWorks.design, 700)}
              alt={images.howItWorks.design.alt}
              fill
              className="object-cover saturate-[0.9] contrast-[1.02]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/70 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-5 right-5 text-card font-medium">
              Full-color postcards &amp; flyers — EDDM-ready specs
            </p>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.08 }}
            className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-border shadow-lg"
          >
            <Image
              src={srcFrom(images.conversion.mailboxDelivery, 700)}
              alt={images.conversion.mailboxDelivery.alt}
              fill
              className="object-cover saturate-[0.9] contrast-[1.02]"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/70 via-transparent to-transparent" />
            <p className="absolute bottom-5 left-5 right-5 text-card font-medium">
              Delivered to every door on your selected routes
            </p>
          </motion.div>
        </div>

        <motion.div
          {...fadeUp}
          className="rounded-3xl border border-border bg-brand-surface/60 p-6 sm:p-10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
        >
          <div className="max-w-xl">
            <h3 className="text-lg font-semibold mb-2">
              Bring your design or let us create it for $75 flat
            </h3>
            <p className="text-sm text-muted leading-relaxed">
              Upload print-ready artwork or add our one-time design fee. Either
              way, you approve a digital proof before we print a single piece.
            </p>
          </div>
          <Button href={estimateHref()} size="lg" className="w-full sm:w-auto shrink-0">
            {CTA.estimate}
            <ArrowRight className="h-5 w-5 shrink-0" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
