import { Footer } from "@/components/layout/Footer";
import { Navbar } from "@/components/layout/Navbar";
import { HomeSectionTeaser } from "@/components/sections/HomeSectionTeaser";
import { CTABanner } from "@/components/sections/CTABanner";
import { Hero } from "@/components/sections/Hero";
import { Mission } from "@/components/sections/Mission";
import { Testimonials } from "@/components/sections/Testimonials";
import { TrustBar } from "@/components/sections/TrustBar";
import { ROUTES } from "@/lib/nav";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <HomeSectionTeaser
          variant="card"
          eyebrow="How it works"
          title="Four steps. Zero USPS paperwork on your end."
          description="Pick your routes, approve your design, and we handle print, bundling, and delivery to every mailbox — usually within days of proof approval."
          href={ROUTES.howItWorks}
          linkLabel="See the full process"
        />
        <Mission />
        <HomeSectionTeaser
          eyebrow="Pricing"
          title="Transparent rates. No surprises."
          description="All-in per-piece pricing includes print, postage, prep, and drop-off. Volume discounts apply automatically from 200 pieces."
          href={ROUTES.pricing}
          linkLabel="View pricing details"
        />
        <HomeSectionTeaser
          variant="card"
          eyebrow="Who it's for"
          title="Built for businesses that live on local customers"
          description="Restaurants, home services, salons, retail, real estate, gyms — if your customers are nearby, EDDM puts your offer in every mailbox on your routes."
          href={ROUTES.industries}
          linkLabel="Explore industries"
        />
        <Testimonials />
        <HomeSectionTeaser
          eyebrow="FAQ"
          title="Questions before you mail?"
          description="Minimum orders, turnaround, mailing lists, pricing breakdowns, and what response rates to expect — answered in plain language."
          href={ROUTES.faq}
          linkLabel="Read all FAQs"
        />
        <CTABanner />
      </main>
      <Footer />
    </>
  );
}
