"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "We ran 2,500 postcards for our grand opening and tracked 180 redemptions in the first two weeks. The ROI paid for the campaign three times over.",
    author: "Maria R.",
    role: "Owner, neighborhood pizzeria",
    rating: 5,
  },
  {
    quote:
      "I used to think direct mail was dead. EDDM brought us 40+ new HVAC service calls from routes we actually service. Way better than cold lists.",
    author: "James T.",
    role: "HVAC company, Phoenix metro",
    rating: 5,
  },
  {
    quote:
      "The estimate tool made it easy to budget before we committed. No surprises, no jargon — just a clear price per mailbox.",
    author: "Lisa K.",
    role: "Salon owner",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="section-padding bg-card border-y border-border">
      <div className="container-narrow">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-medium text-brand-primary mb-3">
            Why businesses switch
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
            Real results from local campaigns
          </h2>
          <p className="text-muted mt-4 text-sm">
            Illustrative examples based on industry benchmarks. Your results will
            vary by offer, market, and follow-up.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.author}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-3xl bg-background border border-border p-6"
            >
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star
                    key={j}
                    className="h-4 w-4 fill-brand-primary text-brand-primary"
                  />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6">
                &ldquo;{t.quote}&rdquo;
              </p>
              <footer>
                <p className="font-medium text-sm">{t.author}</p>
                <p className="text-xs text-muted">{t.role}</p>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
