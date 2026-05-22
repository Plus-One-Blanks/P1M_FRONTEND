import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PricingPageContent } from "@/components/sections/pricing/PricingPageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Plus One Mailers",
  description:
    "Transparent all-in EDDM pricing from $0.65–$0.85 per home. Print, USPS postage, prep, and drop-off included. Volume tiers from 500 pieces.",
  openGraph: {
    title: "EDDM Pricing | Plus One Mailers",
    description:
      "See per-piece rates, what's included, and optional add-ons. Get a free instant estimate.",
    type: "website",
  },
};

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main>
        <PricingPageContent />
      </main>
      <Footer />
    </>
  );
}
