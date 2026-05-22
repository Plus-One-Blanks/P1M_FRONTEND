"use client";

import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "What is EDDM (Every Door Direct Mail)?",
    a: "EDDM is a USPS program that lets you mail flyers to every address on selected carrier routes — without buying a mailing list. You pick the neighborhoods; we handle print, bundling, and delivery to the post office.",
  },
  {
    q: "What's the minimum order?",
    a: "USPS requires a minimum of 200 pieces per mailing. Our calculator starts at 200 and scales up to 10,000+ for larger campaigns.",
  },
  {
    q: "How is pricing calculated?",
    a: "Your estimate includes full-color printing, USPS postage ($0.247/piece at current retail rates), EDDM prep (bundling, facing slips), and drop-off. Design and extra routes are added separately so you always know what you're paying for.",
  },
  {
    q: "How long until my mailers are delivered?",
    a: "Typical turnaround is 5–10 business days from proof approval, depending on quantity and print schedule. Rush options may be available — mention your timeline in the estimate form.",
  },
  {
    q: "Do I need a mailing list?",
    a: "No. That's the biggest advantage of EDDM. You target by geographic route, so every residential and business address on those routes receives your mailer.",
  },
  {
    q: "Can I pay online right now?",
    a: "We're launching online checkout soon. For now, submit a free estimate and we'll send a confirmed quote within one business day. No payment required to get started.",
  },
  {
    q: "What response rate should I expect?",
    a: "Most local businesses see 0.5–3% response rates depending on offer strength, season, and repetition. Combining direct mail with Facebook ads typically boosts overall campaign performance significantly.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="section-padding bg-background">
      <div className="container-narrow max-w-3xl">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-brand-primary mb-3">FAQ</p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Common questions
          </h2>
        </div>

        <MotionSafeFaqList openIndex={openIndex} setOpenIndex={setOpenIndex} />
      </div>
    </section>
  );
}

function MotionSafeFaqList({
  openIndex,
  setOpenIndex,
}: {
  openIndex: number | null;
  setOpenIndex: (i: number | null) => void;
}) {
  return (
    <div className="space-y-3">
      {faqs.map((faq, i) => (
        <div
          key={faq.q}
          className="rounded-2xl bg-card border border-border overflow-hidden"
        >
          <button
            type="button"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 p-5 text-left"
          >
            <span className="font-medium pr-4">{faq.q}</span>
            <ChevronDown
              className={cn(
                "h-5 w-5 shrink-0 text-muted transition-transform duration-200",
                openIndex === i && "rotate-180"
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
                <p className="px-5 pb-5 text-muted leading-relaxed">{faq.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
