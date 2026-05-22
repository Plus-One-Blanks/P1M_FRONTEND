import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { PricingPageContent } from "@/components/sections/pricing/PricingPageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing | Plus One Mailers",
  description:
    "Transparent all-in EDDM pricing — print, USPS postage, prep, and drop-off. Volume tiers from 200 pieces with no hidden fees.",
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
