"use client";

import { Button } from "@/components/ui/Button";
import { CTA } from "@/lib/cta";
import { estimateHref } from "@/lib/nav";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTABanner() {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl sm:rounded-[2rem] overflow-hidden px-6 py-12 sm:px-16 sm:py-20 text-center bg-brand-primary shadow-xl shadow-brand-primary/25"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
          <div className="relative">
            <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight mb-4">
              Ready to reach every door in your market?
            </h2>
            <p className="text-white/90 text-base sm:text-lg max-w-xl mx-auto mb-6 sm:mb-8">
              Get a free estimate in under 60 seconds. No mailing lists. No
              hidden fees. Just neighbors reading your offer.
            </p>
            <Button
              size="lg"
              variant="inverse"
              className="w-full sm:w-auto"
              href={estimateHref()}
            >
              {CTA.estimate}
              <ArrowRight className="h-5 w-5 shrink-0" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
