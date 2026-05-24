"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { images, srcFrom } from "@/lib/images";
import { fadeUp } from "@/lib/motion";
import { ROUTES } from "@/lib/nav";
import { motion } from "framer-motion";
import Image from "next/image";

const reasons = [
  {
    title: "Family-owned operators",
    body: "We run local service businesses too — we built the tool we wished we had.",
    image: images.about.story,
  },
  {
    title: "One price per home",
    body: "No route math, no piece-count surprises. You pick homes; we match real addresses.",
    image: images.conversion.teamPlanning,
  },
  {
    title: "White-glove USPS prep",
    body: "Bundling, facing slips, and drop-off handled — you never touch postal paperwork.",
    image: images.howItWorks.print,
  },
  {
    title: "Fast, clear quotes",
    body: "Instant estimate online plus a human follow-up within one business day.",
    image: images.estimateBand,
  },
];

export function HomeWhyUs() {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <SectionHeader
          eyebrow="Why Plus One"
          title="Everything competitors split into upsells — included upfront"
          description="Sites that convert best show trust, visuals, and transparent pricing together. That is the experience we built."
          href={ROUTES.about}
          linkLabel="Meet our team"
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {reasons.map((item, i) => (
            <motion.article
              key={item.title}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.06 }}
              className="rounded-3xl overflow-hidden border border-border bg-card shadow-sm"
            >
              <div className="relative h-44 sm:h-48">
                <Image
                  src={srcFrom(item.image, 600, 75)}
                  alt={item.image.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/80 via-brand-ink/20 to-transparent" />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-muted leading-relaxed">{item.body}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
