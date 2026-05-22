"use client";

import { PageCta } from "@/components/layout/PageCta";
import { PageHero } from "@/components/layout/PageHero";
import { faqCategories, faqItems } from "@/lib/content/faq";
import { CTA } from "@/lib/cta";
import { ROUTES, estimateHref } from "@/lib/nav";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useState } from "react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

export function FAQPageContent() {
  const [openKey, setOpenKey] = useState<string | null>("basics-0");
  const [activeCategory, setActiveCategory] = useState<
    (typeof faqCategories)[number]["id"] | "all"
  >("all");

  const filtered =
    activeCategory === "all"
      ? faqItems
      : faqItems.filter((f) => f.category === activeCategory);

  return (
    <>
      <PageHero
        badge={{ icon: HelpCircle, label: "Help center" }}
        title={
          <>
            Answers before you{" "}
            <span className="gradient-text">mail a single piece.</span>
          </>
        }
        description="Everything we hear from small business owners about EDDM, pricing, timing, and results — in plain language, no postal jargon."
        actions={[
          { href: estimateHref(), label: CTA.estimate },
          { href: ROUTES.pricing, label: CTA.pricing, variant: "outline" },
        ]}
      />

      <section className="section-padding bg-card">
        <div className="container-narrow max-w-3xl">
          <motion.div {...fadeUp} className="flex flex-wrap gap-2 justify-center mb-10">
            <button
              type="button"
              onClick={() => setActiveCategory("all")}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                activeCategory === "all"
                  ? "bg-brand-primary text-white"
                  : "bg-brand-surface text-muted hover:text-foreground"
              )}
            >
              All
            </button>
            {faqCategories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition-colors",
                  activeCategory === cat.id
                    ? "bg-brand-primary text-white"
                    : "bg-brand-surface text-muted hover:text-foreground"
                )}
              >
                {cat.label}
              </button>
            ))}
          </motion.div>

          <div className="space-y-3">
            {filtered.map((faq, i) => {
              const key = `${faq.category}-${i}`;
              const isOpen = openKey === key;
              return (
                <motion.div
                  key={key}
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="rounded-2xl bg-background border border-border overflow-hidden"
                >
                  <button
                    type="button"
                    onClick={() => setOpenKey(isOpen ? null : key)}
                    className="w-full flex items-center justify-between gap-4 p-5 text-left transition-colors hover:bg-brand-surface/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-brand-primary/30"
                  >
                    <span className="font-medium pr-4">{faq.q}</span>
                    <ChevronDown
                      className={cn(
                        "h-5 w-5 shrink-0 text-muted transition-transform duration-200",
                        isOpen && "rotate-180"
                      )}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <p className="px-5 pb-5 text-muted leading-relaxed">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
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
            <a href={estimateHref()} className="text-brand-primary font-medium hover:underline">
              request a free estimate
            </a>
            .
          </motion.p>
        </div>
      </section>

      <PageCta />
    </>
  );
}
