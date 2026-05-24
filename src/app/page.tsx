import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { StickyMobileCta } from "@/components/layout/StickyMobileCta";
import { CTABanner } from "@/components/sections/CTABanner";
import { Hero } from "@/components/sections/Hero";
import { HomeEstimateBand } from "@/components/sections/home/HomeEstimateBand";
import { HomeFAQ } from "@/components/sections/home/HomeFAQ";
import { HomeHowItWorks } from "@/components/sections/home/HomeHowItWorks";
import { HomeIndustries } from "@/components/sections/home/HomeIndustries";
import { HomeMailerShowcase } from "@/components/sections/home/HomeMailerShowcase";
import { HomeMidCta } from "@/components/sections/home/HomeMidCta";
import { HomePerHomePitch } from "@/components/sections/home/HomePerHomePitch";
import { HomePricing } from "@/components/sections/home/HomePricing";
import { HomeResults } from "@/components/sections/home/HomeResults";
import { HomeVisualStory } from "@/components/sections/home/HomeVisualStory";
import { HomeWhyUs } from "@/components/sections/home/HomeWhyUs";
import { Mission } from "@/components/sections/Mission";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pb-20 md:pb-0 bg-background">
        <Hero />
        <HomePerHomePitch />
        <HomeVisualStory />
        <HomeHowItWorks />
        <HomeMidCta />
        <Mission />
        <HomeMailerShowcase />
        <HomePricing />
        <HomeWhyUs />
        <HomeEstimateBand />
        <HomeResults />
        <HomeIndustries />
        <HomeMidCta
          title="Ready to put your offer in every mailbox?"
          description="Start with a free estimate — we confirm routes and home counts before you spend a dollar."
        />
        <Testimonials />
        <HomeFAQ />
        <CTABanner />
      </main>
      <Footer />
      <StickyMobileCta />
    </>
  );
}
