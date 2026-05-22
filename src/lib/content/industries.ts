import { images } from "@/lib/images";

export type Industry = {
  name: string;
  description: string;
  whyEddm: string;
  exampleOffers: string[];
  image: (typeof images.industries)[keyof typeof images.industries];
};

export const industries: Industry[] = [
  {
    name: "Restaurants & Food",
    description:
      "Grand openings, delivery promos, and coupon drops that fill tables.",
    whyEddm:
      "Hungry households live on your delivery routes. A postcard in every mailbox beats hoping they scroll past you on a delivery app.",
    exampleOffers: [
      "Free appetizer with entrée",
      "Grand opening — first 100 families",
      "Family night: kids eat free Tuesdays",
    ],
    image: images.industries.restaurant,
  },
  {
    name: "Home Services",
    description:
      "HVAC, plumbing, landscaping — reach every home on the routes you serve.",
    whyEddm:
      "Your best customers are homeowners on specific streets. Mail the routes you already drive instead of paying for clicks outside your service area.",
    exampleOffers: [
      "$49 tune-up before summer",
      "Free estimate + 10% off install",
      "Spring cleanup — book by [date]",
    ],
    image: images.industries.homeServices,
  },
  {
    name: "Health & Beauty",
    description:
      "Salons, dentists, and med spas drive new client appointments locally.",
    whyEddm:
      "New movers and loyal neighbors both check mail. A strong intro offer fills chairs when referrals slow down.",
    exampleOffers: [
      "New patient exam + X-rays special",
      "First visit 20% off color or cut",
      "Refer a friend — both save $25",
    ],
    image: images.industries.healthBeauty,
  },
  {
    name: "Retail & Auto",
    description:
      "Seasonal sales, tire shops, and boutiques — put your offer in every mailbox.",
    whyEddm:
      "Retail lives on foot traffic and repeat visits. EDDM puts your sale in hands the week you need the bump — not buried in email promos.",
    exampleOffers: [
      "Seasonal tire swap + alignment check",
      "Storewide 15% off this weekend",
      "Trade-in bonus on select inventory",
    ],
    image: images.industries.retail,
  },
  {
    name: "Real Estate",
    description:
      "Just listed, open houses, and agent branding in target neighborhoods.",
    whyEddm:
      "Farm the neighborhoods you want listings in. Sellers and buyers on the same routes see your brand before they search online.",
    exampleOffers: [
      "Free home valuation in [area]",
      "Open house — this Saturday 1–4",
      "Just sold — thinking of selling?",
    ],
    image: images.industries.realEstate,
  },
  {
    name: "Fitness & Wellness",
    description:
      "Gyms and studios fill classes with hyper-local membership offers.",
    whyEddm:
      "Membership is hyper-local. Mail the apartment complexes and subdivisions within a 10-minute drive of your studio.",
    exampleOffers: [
      "30 days for $30 — new members",
      "Bring a friend week — both join free",
      "Free intro class + studio tour",
    ],
    image: images.industries.fitness,
  },
];
