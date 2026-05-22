"use client";

import { EstimateCalculator } from "@/components/sections/EstimateCalculator";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/lib/cta";
import { MARKET_STATS } from "@/lib/pricing";
import { ROUTES, scrollToEstimateCalculator } from "@/lib/nav";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  Calculator,
  Check,
  CheckCircle2,
  Clock,
  CreditCard,
  Mail,
  MessageSquare,
  Shield,
  Sparkles,
} from "lucide-react";

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

const trustPoints = [
  {
    icon: Calculator,
    title: "Instant ballpark pricing",
    description:
      "Choose how many homes you want to reach — your all-in total updates live before you submit.",
  },
  {
    icon: CreditCard,
    title: "No payment to get a quote",
    description:
      "Submit your campaign details for free. We confirm routes, postage, and print specs before you commit.",
  },
  {
    icon: Clock,
    title: "Response within one business day",
    description:
      "A real person reviews your ZIPs and options, then sends a confirmed quote you can approve or tweak.",
  },
];

const afterSubmit = [
  {
    step: "1",
    title: "We review your routes",
    body: "We map your ZIP codes to USPS routes and confirm exactly how many homes you'll reach — so your quote matches reality.",
  },
  {
    step: "2",
    title: "You get a confirmed quote",
    body: "Your inbox gets a clear total — homes, per-home rate, optional design, and timing. No jargon, no surprise line items.",
  },
  {
    step: "3",
    title: "Approve & we handle the rest",
    body: "Once you're happy, we move to proof, print, USPS prep, and delivery to every door on your routes.",
  },
];

const included = [
  "Full-color printing",
  "USPS EDDM postage & prep",
  "Route mapping assistance",
  "Proof approval before print",
  "Bundling & facing slips",
];

const CONTACT_EMAIL = "hello@plusonemailers.com";

export function EstimatePageContent() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden border-b border-border/60"
        style={{ paddingTop: "var(--site-header-height)" }}
      >
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "var(--gradient-soft)" }}
        />
        <div className="absolute top-24 right-0 h-[480px] w-[480px] rounded-full bg-brand-primary/10 blur-3xl -z-10" />
        <div className="absolute bottom-0 left-0 h-[320px] w-[320px] rounded-full bg-brand-surface blur-3xl -z-10" />

        <div className="container-wide section-padding !pb-12 sm:!pb-16 lg:!pb-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="inline-flex max-w-full items-center gap-2 rounded-full glass px-3 py-2 sm:px-4 text-xs sm:text-sm mb-5 sm:mb-6">
              <Sparkles className="h-4 w-4 shrink-0 text-brand-primary" />
              <span className="text-muted truncate sm:whitespace-normal">
                Free EDDM estimate — no mailing lists required
              </span>
            </div>

            <h1 className="text-[1.75rem] leading-[1.12] sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-5 sm:mb-6">
              Build your campaign.{" "}
              <span className="gradient-text">See your price in seconds.</span>
            </h1>

            <p className="text-base sm:text-lg text-muted max-w-2xl leading-relaxed mb-8">
              Choose how many homes you want to reach — one flat price per
              household, everything included. Send your ZIPs for a confirmed
              quote. No complicated menus, just honest per-home pricing.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                size="lg"
                className="w-full sm:w-auto"
                onClick={scrollToEstimateCalculator}
              >
                {CTA.estimate}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto"
                href={`mailto:${CONTACT_EMAIL}`}
              >
                <Mail className="h-5 w-5 shrink-0" />
                Email us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="section-padding !pt-10 sm:!pt-14 lg:!pt-16 bg-background">
        <div className="container-narrow">
          <motion.div
            {...fadeUp}
            className="rounded-3xl border border-border bg-card p-6 sm:p-10 lg:p-12 shadow-sm"
          >
            <div className="grid sm:grid-cols-3 gap-5 sm:gap-6">
              {trustPoints.map((point) => {
                const Icon = point.icon;
                return (
                  <div
                    key={point.title}
                    className="rounded-2xl bg-brand-surface/60 border border-border/60 p-5 sm:p-6"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary/10 text-brand-primary mb-4">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="text-base font-semibold mb-2">{point.title}</h2>
                    <p className="text-sm text-muted leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Calculator */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <motion.div
            {...fadeUp}
            className="text-center max-w-2xl mx-auto mb-10 sm:mb-14"
          >
            <p className="text-sm font-medium text-brand-primary mb-3">
              Free estimate
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight mb-4">
              How many homes? That&apos;s your price.
            </h2>
            <p className="text-muted text-base sm:text-lg leading-relaxed">
              Slide to your home count and see your total instantly. Optional
              design help is the only add-on — we confirm the real address count
              on your ZIPs before you commit.
            </p>
          </motion.div>

          <EstimateCalculator embedded />
        </div>
      </section>

      {/* What happens next + contact */}
      <section className="section-padding bg-background">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-14 items-start">
            <motion.div {...fadeUp} className="lg:col-span-3">
              <p className="text-sm font-medium text-brand-primary mb-3">
                What happens next
              </p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight mb-8 sm:mb-10">
                From estimate to mailboxes
              </h2>
              <ol className="space-y-5 sm:space-y-6">
                {afterSubmit.map((item) => (
                  <li
                    key={item.step}
                    className="flex gap-4 rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-sm"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-primary text-white text-sm font-semibold">
                      {item.step}
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-semibold mb-1.5">{item.title}</h3>
                      <p className="text-sm text-muted leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </motion.div>

            <motion.aside
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="lg:col-span-2"
            >
              <div className="rounded-3xl bg-brand-ink text-white p-6 sm:p-8 shadow-2xl">
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary">
                    <MessageSquare className="h-5 w-5" />
                  </div>
                  <h2 className="text-lg font-semibold">Contact us</h2>
                </div>

                <p className="text-white/70 text-sm leading-relaxed mb-6">
                  Prefer to talk through routes or a tight timeline before you
                  build an estimate? Reach out — we&apos;re a family-owned team
                  that runs local businesses too.
                </p>

                <ul className="space-y-4 mb-8">
                  <ContactRow
                    icon={Mail}
                    label="Email"
                    href={`mailto:${CONTACT_EMAIL}`}
                  >
                    {CONTACT_EMAIL}
                  </ContactRow>
                  <ContactRow icon={Clock} label="Hours">
                    Mon–Fri, 9am–6pm PT
                  </ContactRow>
                  <ContactRow icon={Shield} label="Your info">
                    We only use your details to send your quote — no spam lists.
                  </ContactRow>
                </ul>

                <Button
                  variant="inverse"
                  className="w-full mb-3"
                  onClick={scrollToEstimateCalculator}
                >
                  {CTA.submit}
                </Button>
                <p className="text-xs text-white/50 text-center">
                  Or scroll up to use the calculator
                </p>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>

      {/* Included + links */}
      <section className="section-padding bg-card border-t border-border">
        <div className="container-narrow">
          <motion.div
            {...fadeUp}
            className="rounded-3xl border border-border bg-brand-surface/50 p-6 sm:p-10 lg:p-12 shadow-sm"
          >
            <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-6 mb-8 sm:mb-10">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-primary/10">
                <CheckCircle2 className="h-6 w-6 text-brand-primary" />
              </div>
              <div className="text-center sm:text-left">
                <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-2">
                  Every plan includes full-service EDDM
                </h2>
                <p className="text-muted text-sm sm:text-base leading-relaxed max-w-2xl">
                  Full-color print, USPS postage & prep, route mapping, proof
                  approval, bundling, and facing slips — all in one transparent
                  price per home. Minimum {MARKET_STATS.minOrder} homes.
                </p>
              </div>
            </div>

            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-8 sm:mb-10">
              {included.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 rounded-xl bg-card border border-border/80 px-4 py-3 text-sm text-muted"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-brand-primary/10 text-brand-primary">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 justify-center sm:justify-start">
              <Button variant="outline" href={ROUTES.pricing}>
                View pricing tiers
              </Button>
              <Button variant="outline" href={ROUTES.faq}>
                Common questions
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

function ContactRow({
  icon: Icon,
  label,
  href,
  children,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href?: string;
  children: React.ReactNode;
}) {
  const content = (
    <div>
      <p className="text-xs text-white/50 mb-0.5">{label}</p>
      <p
        className={cn(
          "text-sm font-medium",
          href && "hover:text-brand-primary transition-colors"
        )}
      >
        {children}
      </p>
    </div>
  );

  return (
    <li className="flex gap-3">
      <Icon className="h-5 w-5 shrink-0 text-brand-primary mt-0.5" />
      {href ? (
        <a href={href} className="min-w-0 break-all">
          {content}
        </a>
      ) : (
        content
      )}
    </li>
  );
}
