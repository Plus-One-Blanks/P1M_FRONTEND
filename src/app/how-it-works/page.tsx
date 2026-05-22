import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { HowItWorksPageContent } from "@/components/sections/how-it-works/HowItWorksPageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How It Works | Plus One Mailers",
  description:
    "Four simple steps from route selection to mailbox delivery. Full-service EDDM print, prep, and USPS delivery — zero paperwork on your end.",
  openGraph: {
    title: "How EDDM Works | Plus One Mailers",
    description:
      "Pick routes, design your mailer, we print and prep — your flyers reach every door on your carrier routes.",
    type: "website",
  },
};

export default function HowItWorksPage() {
  return (
    <>
      <Navbar />
      <main>
        <HowItWorksPageContent />
      </main>
      <Footer />
    </>
  );
}
