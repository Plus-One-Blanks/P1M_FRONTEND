/**
 * Plus One Mailers pricing — simple per-home (all-in).
 * One price per house: print, USPS postage, prep, and delivery included.
 * You choose how many homes; we ensure that many households receive your flyer.
 */

export const USPS_POSTAGE_PER_PIECE = 0.247;

/** Minimum campaign size */
export const MIN_ORDER_HOMES = 500;

export interface VolumeTier {
  id: string;
  name: string;
  min: number;
  max: number | null;
  ratePerHome: number;
  highlight?: boolean;
}

/** Published all-in rates per home */
export const VOLUME_TIERS: VolumeTier[] = [
  {
    id: "tier-500",
    name: "500+",
    min: 500,
    max: 999,
    ratePerHome: 0.85,
  },
  {
    id: "tier-1000",
    name: "1,000+",
    min: 1000,
    max: 1999,
    ratePerHome: 0.8,
  },
  {
    id: "tier-2000",
    name: "2,000+",
    min: 2000,
    max: 2999,
    ratePerHome: 0.75,
    highlight: true,
  },
  {
    id: "tier-3000",
    name: "3,000+",
    min: 3000,
    max: 4999,
    ratePerHome: 0.7,
  },
  {
    id: "tier-5000",
    name: "5,000+",
    min: 5000,
    max: null,
    ratePerHome: 0.65,
  },
];

/** Flat rate when Plus One creates your mailer artwork */
export const DESIGN_FEE = 75;

export const DESIGN_OPTIONS = [
  { id: "own", label: "I have my own artwork", price: 0 },
  { id: "plus-one", label: "We design your mailer", price: DESIGN_FEE },
] as const;

export type DesignChoice = (typeof DESIGN_OPTIONS)[number]["id"];

export function getTierForHomes(homes: number): VolumeTier {
  const qty = Math.max(MIN_ORDER_HOMES, homes);
  return (
    [...VOLUME_TIERS].reverse().find((t) => qty >= t.min) ?? VOLUME_TIERS[0]
  );
}

export interface EstimateInput {
  /** Number of homes / mailboxes to reach */
  homes: number;
  designChoice: DesignChoice;
}

export interface EstimateBreakdown {
  tier: VolumeTier;
  homes: number;
  ratePerHome: number;
  campaignTotal: number;
  designFee: number;
  estimatedTotal: number;
  perHome: number;
}

export function calculateEstimate(input: EstimateInput): EstimateBreakdown {
  const homes = Math.max(MIN_ORDER_HOMES, input.homes);
  const tier = getTierForHomes(homes);
  const ratePerHome = tier.ratePerHome;
  const designOption = DESIGN_OPTIONS.find((d) => d.id === input.designChoice)!;

  const campaignTotal = homes * ratePerHome;
  const designFee = designOption.price;
  const estimatedTotal = campaignTotal + designFee;
  const perHome = estimatedTotal / homes;

  return {
    tier,
    homes,
    ratePerHome,
    campaignTotal,
    designFee,
    estimatedTotal,
    perHome,
  };
}

/** @deprecated Use MIN_ORDER_HOMES */
export const MIN_ORDER_QUANTITY = MIN_ORDER_HOMES;

/** @deprecated Use getTierForHomes */
export function getTierForQuantity(quantity: number): VolumeTier {
  return getTierForHomes(quantity);
}

export const MARKET_STATS = {
  avgResponseRate: "1–3%",
  trustDirectMail: "76%",
  costPerHomeLow: "$0.65",
  costPerHomeHigh: "$0.85",
  /** @deprecated Use costPerHomeLow */
  costPerPieceLow: "$0.65",
  uspsPostage: "$0.247",
  minOrder: MIN_ORDER_HOMES,
  typicalRoi: "100–200%+",
} as const;

export function exampleCampaignTotal(homes: number): number {
  const tier = getTierForHomes(homes);
  return homes * tier.ratePerHome;
}
