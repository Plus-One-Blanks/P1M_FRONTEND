import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { EstimatePageContent } from "@/components/sections/estimate/EstimatePageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free EDDM Estimate | Plus One Mailers",
  description:
    "Build your Every Door Direct Mail campaign and get an instant price estimate. Submit for a confirmed quote — no credit card, no mailing lists required.",
  openGraph: {
    title: "Free EDDM Estimate | Plus One Mailers",
    description:
      "Configure quantity, mailer size, routes, and design — see your all-in campaign cost in seconds.",
    type: "website",
  },
};

export default function EstimatePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <EstimatePageContent />
      </main>
      <Footer />
    </>
  );
}
