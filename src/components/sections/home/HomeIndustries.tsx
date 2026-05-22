"use client";

import { SectionHeader } from "@/components/ui/SectionHeader";
import { industries } from "@/lib/content/industries";
import { fadeUp } from "@/lib/motion";
import { ROUTES } from "@/lib/nav";
import { srcFrom } from "@/lib/images";
import { motion } from "framer-motion";
import Image from "next/image";

export function HomeIndustries() {
  return (
    <section id="industries" className="section-padding bg-card scroll-mt-28">
      <div className="container-narrow">
        <SectionHeader
          eyebrow="Who it's for"
          title="Built for businesses that live on local customers"
          description="If your customers come from nearby neighborhoods, EDDM is one of the highest-ROI channels you're probably not using yet."
          href={ROUTES.industries}
          linkLabel="Explore all industries"
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, i) => (
            <motion.div
              key={industry.name}
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: i * 0.05 }}
              className="group relative rounded-3xl overflow-hidden aspect-[4/3] border border-border shadow-md hover:shadow-xl transition-shadow"
            >
              <Image
                src={srcFrom(industry.image, 600)}
                alt={industry.image.alt}
                fill
                className="object-cover object-center transition-transform duration-500 group-hover:scale-[1.03] saturate-[0.88] contrast-[1.03]"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-ink via-brand-ink/50 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6">
                <h3 className="text-lg font-semibold text-card mb-1.5">
                  {industry.name}
                </h3>
                <p className="text-sm text-card/80 leading-relaxed line-clamp-2">
                  {industry.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
