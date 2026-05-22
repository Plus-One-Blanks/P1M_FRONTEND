import { images } from "@/lib/images";
import type { LucideIcon } from "lucide-react";
import { MapPin, Palette, Rocket, Route } from "lucide-react";

export type HowItWorksStep = {
  icon: LucideIcon;
  title: string;
  description: string;
  detail: string;
  image: (typeof images.howItWorks)[keyof typeof images.howItWorks];
};

export const howItWorksSteps: HowItWorksStep[] = [
  {
    icon: MapPin,
    title: "Pick your routes",
    description:
      "Tell us your ZIP codes or target area. We map USPS carrier routes so you reach the right neighborhoods — no list purchase needed.",
    detail:
      "Share your ideal trade area — a radius around your location, specific ZIPs, or neighborhoods you already serve. We pull carrier route data, piece counts, and residential vs. business mix so you know exactly how many doors you're mailing before you print a single piece.",
    image: images.howItWorks.routes,
  },
  {
    icon: Palette,
    title: "Design your mailer",
    description:
      "Upload your artwork, start from a template, or let our team design it. We handle bleed, sizing, and USPS EDDM specs.",
    detail:
      "EDDM has strict size and layout rules. We validate your file (or design one for you) so it passes proof without surprises — correct dimensions, safe zones, and a clear offer that reads in three seconds at the mailbox.",
    image: images.howItWorks.design,
  },
  {
    icon: Route,
    title: "We print & prep",
    description:
      "Full-color printing, bundling, and facing slips — everything USPS requires. You approve a proof before we mail.",
    detail:
      "After you approve the proof, we print, cut, bundle by route, and prepare facing slips and paperwork. You never touch a bundle or stand in line at the post office — that's the whole point of working with a full-service mail partner.",
    image: images.howItWorks.print,
  },
  {
    icon: Rocket,
    title: "Delivered to every door",
    description:
      "Your flyers hit mailboxes within days. Track your drop and start measuring calls, coupons, and foot traffic.",
    detail:
      "USPS delivers to every address on your selected routes. Most campaigns land within 5–10 business days of proof approval. Track redemption codes, unique phone numbers, or coupon mentions to see what's working.",
    image: images.howItWorks.delivery,
  },
];

export const youProvide = [
  "Target ZIP codes or neighborhood description",
  "Your offer (discount, grand opening, seasonal promo, etc.)",
  "Artwork or a design brief — we can design your mailer for a flat $75",
  "Approval on the digital proof before print",
];

export const weHandle = [
  "USPS carrier route mapping & piece counts",
  "EDDM-compliant sizing, bleed, and file prep",
  "Full-color print, bundling & facing slips",
  "Post office drop-off and delivery coordination",
];
