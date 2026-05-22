import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { AboutContent } from "@/components/sections/about/AboutContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Plus One Mailers",
  description:
    "Family-owned and operated. We run small service businesses, grew them with EDDM flyers, and built Plus One Mailers to help every small business reach their neighborhood affordably.",
  openGraph: {
    title: "About Plus One Mailers",
    description:
      "A family-owned team helping small business owners get in front of every customer — affordably, with Every Door Direct Mail.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <AboutContent />
      </main>
      <Footer />
    </>
  );
}
