"use client";

import { Button } from "@/components/ui/Button";
import { CTA } from "@/lib/cta";
import { BrandImageFrame } from "@/components/ui/BrandImageFrame";
import { images, srcFrom } from "@/lib/images";
import { ROUTES, estimateHref } from "@/lib/nav";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  ArrowRight,
  HeartHandshake,
  Home,
  Mail,
  Sparkles,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
const fadeUp = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-40px" },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
};

const beliefs = [
  {
    icon: Users,
    title: "Operators, not observers",
    description:
      "We run our own family-owned service businesses every day. Plus One Mailers exists because we needed the same tools we're building for you — and we still use them.",
  },
  {
    icon: Mail,
    title: "EDDM we trust with our own brands",
    description:
      "Every Door Direct Mail isn't theory for us. We've grown our companies by putting offers in every mailbox on the routes that matter — and we've seen neighbors become customers.",
  },
  {
    icon: Target,
    title: "Visibility at a price that makes sense",
    description:
      "Big agencies weren't built for the shop on the corner. Our mission is to help every small business get in front of every customer's eyes for the most affordable cost we can offer.",
  },
];

const helps = [
  {
    step: "01",
    title: "Reach the whole neighborhood",
    body: "Pick your carrier routes and land in every home and business mailbox — no purchased lists, no wasted impressions outside your trade area.",
  },
  {
    step: "02",
    title: "Keep your budget grounded",
    body: "Transparent, all-in pricing so you know what a full drop costs before you commit. We built our model for owners who count every dollar.",
  },
  {
    step: "03",
    title: "Grow without the learning curve",
    body: "Print specs, facing slips, bundling, USPS rules — we handle the parts that usually stop small businesses from trying direct mail in the first place.",
  },
];

export function AboutContent() {
  return (
    <>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{ paddingTop: "var(--site-header-height)" }}
      >
        <div
          className="absolute inset-0 -z-10"
          style={{ background: "var(--gradient-soft)" }}
        />
        <div className="absolute top-24 right-0 h-[480px] w-[480px] rounded-full bg-brand-primary/10 blur-3xl -z-10" />

        <div className="container-wide section-padding !pb-14 sm:!pb-20">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <motion.div {...fadeUp}>
              <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-sm mb-6">
                <HeartHandshake className="h-4 w-4 text-brand-primary shrink-0" />
                <span className="text-muted">Family owned & operated</span>
              </div>

              <h1 className="text-[1.75rem] leading-[1.12] sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-5 sm:mb-6">
                We&apos;re small business people{" "}
                <span className="gradient-text">building for small business people.</span>
              </h1>

              <p className="text-base sm:text-lg text-muted max-w-xl leading-relaxed mb-8">
                Plus One Mailers started at our own kitchen table — not a boardroom.
                We run family-owned service companies, grew them with EDDM flyers, and
                built this so every owner like us can reach their whole market without
                the headache or the agency price tag.
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  href={estimateHref()}
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  {CTA.estimate}
                  <ArrowRight className="h-5 w-5 shrink-0" />
                </Button>
                <Button
                  href={ROUTES.howItWorks}
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto"
                >
                  See how it works
                </Button>
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.1 }}
              className="relative"
            >
              <BrandImageFrame
                src={srcFrom(images.about.hero, 900)}
                alt={images.about.hero.alt}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute -bottom-4 -left-2 sm:left-4 glass rounded-2xl px-5 py-4 shadow-lg max-w-[240px]">
                <p className="text-sm font-medium text-foreground leading-snug">
                  &ldquo;We mail for our own businesses first — then for yours.&rdquo;
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <motion.div {...fadeUp} className="order-2 lg:order-1">
              <p className="text-sm font-medium text-brand-primary mb-3">Our story</p>
              <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-6">
                Built by owners who&apos;ve been in your shoes
              </h2>
              <div className="space-y-5 text-muted text-base sm:text-lg leading-relaxed">
                <p>
                  We&apos;re not a faceless print shop. We&apos;re a family that wakes up
                  every day running small, service-based businesses — the same kind of
                  companies we built Plus One Mailers to serve.
                </p>
                <p>
                  For years we did what most owners do: hustle on referrals, post on
                  social, and hope the phone rang. Then we tried Every Door Direct Mail —
                  real postcards in real mailboxes on the streets where our customers
                  live. The response surprised us. So did how affordable it was compared
                  to almost everything else we&apos;d tried.
                </p>
                <p>
                  That experience changed how we think about growth. Not louder ads or
                  bigger budgets — just showing up where your neighbors already look:
                  their mailbox. We started Plus One Mailers so you don&apos;t have to
                  figure out the USPS side alone.
                </p>
              </div>
            </motion.div>

            <motion.div
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.08 }}
              className="order-1 lg:order-2"
            >
              <BrandImageFrame
                src={srcFrom(images.about.story, 800)}
                alt={images.about.story.alt}
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Proof strip */}
      <section className="section-padding">
        <div className="container-narrow">
          <motion.div
            {...fadeUp}
            className="rounded-3xl border border-border bg-card p-8 sm:p-12 shadow-sm"
          >
            <div className="flex items-start gap-4 mb-8">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-primary/10">
                <Sparkles className="h-6 w-6 text-brand-primary" />
              </div>
              <div>
                <h2 className="text-xl sm:text-2xl font-semibold tracking-tight mb-2">
                  Why we believe in EDDM
                </h2>
                <p className="text-muted leading-relaxed max-w-2xl">
                  When you serve a neighborhood, your best customers are already on the
                  block. EDDM puts your offer in every door — restaurants, salons,
                  contractors, dentists, shops like yours — without buying a list or
                  guessing who might see you online.
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
              {[
                {
                  icon: Home,
                  label: "Family-owned operators",
                  detail: "We run our own service businesses alongside this company.",
                },
                {
                  icon: TrendingUp,
                  label: "Proven on our routes",
                  detail: "EDDM flyers drove real growth before we ever sold a campaign.",
                },
                {
                  icon: HeartHandshake,
                  label: "Here to help you grow",
                  detail: "Every estimate gets a human follow-up — because that's how we'd want to be treated.",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="rounded-2xl bg-brand-surface/60 border border-border/60 p-5"
                  >
                    <Icon className="h-5 w-5 text-brand-primary mb-3" />
                    <p className="font-medium text-foreground mb-1">{item.label}</p>
                    <p className="text-sm text-muted leading-relaxed">{item.detail}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Beliefs */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-ink -z-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-ink via-brand-ink/95 to-brand-primary/20 -z-10" />

        <div className="container-narrow relative">
          <motion.div {...fadeUp} className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <p className="text-sm font-medium text-brand-primary mb-3">What we stand for</p>
            <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-card mb-4">
              Our mission is simple: help you get seen — affordably
            </h2>
            <p className="text-card/70 text-base sm:text-lg leading-relaxed">
              We want every small business owner to put their brand in front of every
              customer in their area without breaking the bank or drowning in postal
              paperwork. That&apos;s the whole reason Plus One exists.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5 sm:gap-6">
            {beliefs.map((belief, i) => {
              const Icon = belief.icon;
              return (
                <motion.div
                  key={belief.title}
                  {...fadeUp}
                  transition={{ ...fadeUp.transition, delay: i * 0.08 }}
                  className="glass-dark rounded-2xl p-6 sm:p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-primary mb-5">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-card mb-2">{belief.title}</h3>
                  <p className="text-card/65 leading-relaxed text-sm sm:text-base">
                    {belief.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How we help */}
      <section className="section-padding bg-brand-surface/50">
        <div className="container-narrow">
          <motion.div {...fadeUp} className="mb-10 sm:mb-14">
            <p className="text-sm font-medium text-brand-primary mb-3">How we help you grow</p>
            <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight max-w-xl">
              More than mail — a partner who wants your neighborhood to know your name
            </h2>
          </motion.div>

          <div className="space-y-4">
            {helps.map((item, i) => (
              <motion.div
                key={item.step}
                {...fadeUp}
                transition={{ ...fadeUp.transition, delay: i * 0.06 }}
                className={cn(
                  "rounded-2xl border border-border bg-card p-6 sm:p-8 flex flex-col sm:flex-row gap-5 sm:gap-8 sm:items-start"
                )}
              >
                <span className="text-3xl font-semibold text-brand-primary/30 tabular-nums shrink-0">
                  {item.step}
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted leading-relaxed">{item.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="section-padding !pt-0">
        <div className="container-narrow">
          <motion.div
            {...fadeUp}
            className="relative rounded-3xl sm:rounded-[2rem] overflow-hidden px-6 py-12 sm:px-16 sm:py-20 text-center bg-brand-primary"
          >
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djItaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6bTAtNHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
            <div className="relative">
              <h2 className="text-2xl sm:text-4xl font-semibold text-white tracking-tight mb-4">
                Let&apos;s grow your business together
              </h2>
              <p className="text-white/90 text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
                Tell us about your market and your offer. We&apos;ll send a free estimate
                and a real person will follow up within one business day — no pressure,
                just a conversation with people who get it.
              </p>
              <Button
                href={estimateHref()}
                size="lg"
                variant="secondary"
                className="w-full sm:w-auto !bg-white !text-brand-primary hover:!bg-white/95 shadow-xl"
              >
                {CTA.estimate}
                <ArrowRight className="h-5 w-5 shrink-0" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
