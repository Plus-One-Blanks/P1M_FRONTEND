"use client";

import { motion } from "framer-motion";
import { images, srcFrom } from "@/lib/images";
import Image from "next/image";

const industries = [
  {
    name: "Restaurants & Food",
    description:
      "Grand openings, delivery promos, and coupon drops that fill tables.",
    image: images.industries.restaurant,
  },
  {
    name: "Home Services",
    description:
      "HVAC, plumbing, landscaping — reach every home on the routes you serve.",
    image: images.industries.homeServices,
  },
  {
    name: "Health & Beauty",
    description:
      "Salons, dentists, and med spas drive new client appointments locally.",
    image: images.industries.healthBeauty,
  },
  {
    name: "Retail & Auto",
    description:
      "Seasonal sales, tire shops, and boutiques — put your offer in every mailbox.",
    image: images.industries.retail,
  },
  {
    name: "Real Estate",
    description:
      "Just listed, open houses, and agent branding in target neighborhoods.",
    image: images.industries.realEstate,
  },
  {
    name: "Fitness & Wellness",
    description:
      "Gyms and studios fill classes with hyper-local membership offers.",
    image: images.industries.fitness,
  },
];

export function Industries() {
  return (
    <section id="industries" className="section-padding bg-card">
      <div className="container-narrow">
        <MotionSafeIndustriesHeader />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="group relative rounded-3xl overflow-hidden aspect-[4/3]"
            >
              <Image
                src={srcFrom(industry.image)}
                alt={industry.image.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-lg font-semibold text-card mb-1">
                  {industry.name}
                </h3>
                <p className="text-sm text-card/75">{industry.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MotionSafeIndustriesHeader() {
  return (
    <div className="text-center max-w-2xl mx-auto mb-14">
      <p className="text-sm font-medium text-brand-primary mb-3">Who it&apos;s for</p>
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
        Built for businesses that live on local customers
      </h2>
      <p className="text-muted text-lg">
        If your customers come from nearby neighborhoods, EDDM is one of the
        highest-ROI channels you&apos;re probably not using yet.
      </p>
    </div>
  );
}
