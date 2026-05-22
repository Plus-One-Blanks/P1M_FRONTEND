import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { IndustriesPageContent } from "@/components/sections/industries/IndustriesPageContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve | Plus One Mailers",
  description:
    "EDDM direct mail for restaurants, home services, health & beauty, retail, real estate, fitness, and more local businesses.",
  openGraph: {
    title: "Industries | Plus One Mailers",
    description:
      "See how Every Door Direct Mail helps local businesses reach every customer in their neighborhood.",
    type: "website",
  },
};

export default function IndustriesPage() {
  return (
    <>
      <Navbar />
      <main>
        <IndustriesPageContent />
      </main>
      <Footer />
    </>
  );
}
