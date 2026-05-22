"use client";

import { motion } from "framer-motion";
import { MapPin, Palette, Rocket, Route } from "lucide-react";
import { images, srcFrom } from "@/lib/images";
import Image from "next/image";

const steps = [
  {
    icon: MapPin,
    title: "Pick your routes",
    description:
      "Tell us your ZIP codes or target area. We map USPS carrier routes so you reach the right neighborhoods — no list purchase needed.",
    image: images.howItWorks.routes,
  },
  {
    icon: Palette,
    title: "Design your mailer",
    description:
      "Upload your artwork, start from a template, or let our team design it. We handle bleed, sizing, and USPS EDDM specs.",
    image: images.howItWorks.design,
  },
  {
    icon: Route,
    title: "We print & prep",
    description:
      "Full-color printing, bundling, and facing slips — everything USPS requires. You approve a proof before we mail.",
    image: images.howItWorks.print,
  },
  {
    icon: Rocket,
    title: "Delivered to every door",
    description:
      "Your flyers hit mailboxes within days. Track your drop and start measuring calls, coupons, and foot traffic.",
    image: images.howItWorks.delivery,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="section-padding bg-card">
      <div className="container-narrow">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-medium text-brand-primary mb-3">How it works</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            Four steps. Zero USPS paperwork on your end.
          </h2>
          <p className="text-muted text-lg">
            We built Plus One Mailers so you can go from idea to mailbox in days —
            not weeks of back-and-forth with printers and post offices.
          </p>
        </div>

        <MotionSafeSteps />
      </div>
    </section>
  );
}

function MotionSafeSteps() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {steps.map((step, i) => (
        <motion.div
          key={step.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: i * 0.1, duration: 0.5 }}
          className="group relative rounded-3xl overflow-hidden bg-brand-surface border border-border hover:shadow-xl hover:shadow-brand-primary/10 transition-shadow duration-300"
        >
          <div className="relative h-48 overflow-hidden">
            <Image
              src={srcFrom(step.image)}
              alt={step.image.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <MotionSafeStepOverlay step={step} index={i} />
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
            <p className="text-muted leading-relaxed">{step.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function MotionSafeStepOverlay({
  step,
  index,
}: {
  step: (typeof steps)[number];
  index: number;
}) {
  const Icon = step.icon;
  return (
    <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 backdrop-blur text-brand-primary shadow">
      <Icon className="h-5 w-5" />
      <span className="sr-only">Step {index + 1}</span>
    </div>
  );
}
