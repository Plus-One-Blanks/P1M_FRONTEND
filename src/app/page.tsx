import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { CTABanner } from "@/components/sections/CTABanner";
import { Hero } from "@/components/sections/Hero";
import { HomeEstimateBand } from "@/components/sections/home/HomeEstimateBand";
import { HomeFAQ } from "@/components/sections/home/HomeFAQ";
import { HomeHowItWorks } from "@/components/sections/home/HomeHowItWorks";
import { HomeIndustries } from "@/components/sections/home/HomeIndustries";
import { HomePerHomePitch } from "@/components/sections/home/HomePerHomePitch";
import { HomePricing } from "@/components/sections/home/HomePricing";
import { Mission } from "@/components/sections/Mission";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustBar } from "@/components/sections/TrustBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <HomePerHomePitch />
        <HomeHowItWorks />
        <Mission />
        <HomePricing />
        <HomeEstimateBand />
        <HomeIndustries />
        <Testimonials />
        <HomeFAQ />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
