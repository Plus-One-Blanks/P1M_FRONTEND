"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { howItWorksSteps, weHandle, youProvide } from "@/lib/content/how-it-works";
import { fadeUp } from "@/lib/motion";
import { ROUTES } from "@/lib/nav";
import { srcFrom } from "@/lib/images";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";

export function HomeHowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-card scroll-mt-28">
      <div className="container-narrow">
        <SectionHeader
          eyebrow="How it works"
          title={
            <>
              Four steps.{" "}
              <span className="gradient-text">Zero USPS paperwork on your end.</span>
            </>
          }
          description="We built Plus One Mailers so you can go from idea to mailbox in days — not weeks of back-and-forth with printers and post offices."
          href={ROUTES.howItWorks}
          linkLabel="See the full process"
        />

        <div className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {howItWorksSteps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.article
                key={step.title}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.06 }}
                className="rounded-3xl overflow-hidden bg-brand-surface border border-border"
              >
                <div className="relative h-48 sm:h-52 overflow-hidden">
                  <Image
                    src={srcFrom(step.image, 600)}
                    alt={step.image.alt}
                    fill
                    className="object-cover object-center saturate-[0.88] contrast-[1.03]"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-brand-primary/12 via-transparent to-brand-surface/40"
                    aria-hidden
                  />
                  <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 shadow text-brand-primary">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="absolute top-4 right-4 rounded-full bg-brand-ink/80 px-3 py-1 text-xs font-medium text-white">
                    Step {i + 1}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-muted text-sm sm:text-base leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          {...fadeUp}
          className="rounded-3xl border border-border bg-background p-6 sm:p-10"
        >
          <h3 className="text-lg font-semibold text-center sm:text-left mb-8">
            What you bring vs. what we handle
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="space-y-3">
              <p className="text-sm font-medium text-brand-primary mb-2">You provide</p>
              {youProvide.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted">
                  <Check className="h-4 w-4 shrink-0 text-brand-primary mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
            <ul
              className={cn(
                "space-y-3 rounded-2xl bg-card border border-border p-5 sm:p-6"
              )}
            >
              <p className="text-sm font-medium text-brand-primary mb-2">We handle</p>
              {weHandle.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-muted">
                  <Check className="h-4 w-4 shrink-0 text-brand-primary mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
