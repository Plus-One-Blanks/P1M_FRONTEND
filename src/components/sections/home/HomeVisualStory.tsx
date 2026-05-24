"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { images, srcFrom } from "@/lib/images";
import { ROUTES, estimateHref } from "@/lib/nav";
import { ImageTextBlock } from "./ImageTextBlock";

const stories = [
  {
    image: images.conversion.neighborhood,
    eyebrow: "Reach real neighborhoods",
    title: (
      <>
        Your offer lands in{" "}
        <span className="gradient-text">every mailbox on your routes</span>
      </>
    ),
    description:
      "EDDM targets carrier routes — not bought lists. Every home and business on those streets gets your flyer, so you saturate the areas where your customers already live.",
    bullets: [
      "No mailing lists to buy or maintain",
      "Target ZIP codes you already serve",
      "Residential and business addresses included",
    ],
    cta: { href: ROUTES.howItWorks, label: "See how it works" },
    reverse: false,
  },
  {
    image: images.conversion.localOwner,
    eyebrow: "Built for local owners",
    title: "Marketing that feels personal, not corporate",
    description:
      "Your postcard competes for attention in a real mailbox — not a crowded social feed. Strong offers win when neighbors can hold your business in their hands.",
    bullets: [
      "3-second offer test: headline + one clear CTA",
      "Optional $75 professional mailer design",
      "Proof approval before anything prints",
    ],
    cta: { href: ROUTES.about, label: "Our story" },
    reverse: true,
  },
  {
    image: images.howItWorks.print,
    eyebrow: "Full-service delivery",
    title: (
      <>
        We print, prep, and mail —{" "}
        <span className="gradient-text">you stay focused on your business</span>
      </>
    ),
    description:
      "Bundling, facing slips, and post office drop-off are where most owners get stuck. Plus One handles the USPS side so your campaign ships on time.",
    bullets: [
      "Full-color print to EDDM specs",
      "USPS postage and prep included in your per-home rate",
      "Typical delivery 5–10 business days after proof approval",
    ],
    cta: { href: estimateHref(), label: "Get free estimate" },
    reverse: false,
  },
];

export function HomeVisualStory() {
  return (
    <section className="section-padding bg-card border-y border-border/60">
      <div className="container-narrow">
        <SectionHeader
          eyebrow="Why direct mail still wins"
          title="Show up where your customers actually look"
          description="Top EDDM providers lead with visuals and simple steps — because owners need to see the journey from idea to mailbox before they order."
        />

        <div className="space-y-14 sm:space-y-20">
          {stories.map((story) => (
            <ImageTextBlock
              key={story.eyebrow}
              imageSrc={srcFrom(story.image, 800)}
              imageAlt={story.image.alt}
              eyebrow={story.eyebrow}
              title={story.title}
              description={story.description}
              bullets={story.bullets}
              cta={story.cta}
              reverse={story.reverse}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
