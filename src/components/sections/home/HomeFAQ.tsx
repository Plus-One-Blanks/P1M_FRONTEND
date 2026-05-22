"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { faqItems } from "@/lib/content/faq";
import { fadeUp } from "@/lib/motion";
import { ROUTES, estimateHref } from "@/lib/nav";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

/** Key questions for the home page — full list on /faq */
const HOME_FAQ_COUNT = 8;
const homeFaqs = faqItems.slice(0, HOME_FAQ_COUNT);

export function HomeFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-background scroll-mt-28">
      <div className="container-narrow max-w-3xl">
        <SectionHeader
          eyebrow="FAQ"
          title="Common questions"
          description="Straight answers about EDDM, pricing, timing, and results — no postal jargon."
          href={ROUTES.faq}
          linkLabel="Read all FAQs"
        />

        <div className="space-y-3">
          {homeFaqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.04 }}
              className="rounded-2xl bg-card border border-border overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="group w-full flex items-center justify-between gap-4 p-5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-primary/30"
              >
                <span className="font-medium pr-4 text-sm sm:text-base">{faq.q}</span>
                <ChevronDown
                  className={cn(
                    "h-5 w-5 shrink-0 text-muted transition-all duration-200",
                    openIndex === i
                      ? "rotate-180 text-brand-primary"
                      : "group-hover:rotate-180 group-hover:text-brand-primary"
                  )}
                />
              </button>
              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <p className="px-5 pb-5 text-muted text-sm sm:text-base leading-relaxed">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.p
          {...fadeUp}
          className="text-center text-sm text-muted mt-10"
        >
          Still have questions?{" "}
          <a
            href="mailto:hello@plusonemailers.com"
            className="text-brand-primary font-medium hover:underline"
          >
            Email us
          </a>{" "}
          or{" "}
          <a
            href={estimateHref()}
            className="text-brand-primary font-medium hover:underline"
          >
            get a free estimate
          </a>
          .
        </motion.p>
      </div>
    </section>
  );
}
