import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { FAQPageContent } from "@/components/sections/faq/FAQPageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | Plus One Mailers",
  description:
    "Common questions about EDDM, pricing, turnaround, mailing lists, and response rates — answered in plain language.",
  openGraph: {
    title: "FAQ | Plus One Mailers",
    description:
      "Everything small business owners ask about Every Door Direct Mail campaigns.",
    type: "website",
  },
};

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main>
        <FAQPageContent />
      </main>
      <Footer />
    </>
  );
}
