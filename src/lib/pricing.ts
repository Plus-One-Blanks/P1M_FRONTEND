/**
 * Plus One Mailers pricing model (2026)
 * Based on USPS EDDM retail postage ($0.247/piece) + competitive print/mail bundling.
 * Transparent breakdown builds trust for Facebook ad traffic.
 */

export const USPS_POSTAGE_PER_PIECE = 0.247;

export type MailerSize = "6x9" | "6.5x9" | "8.5x11";
export type PrintSides = "single" | "double";

export const MAILER_SIZES: Record<
  MailerSize,
  { label: string; description: string; printMultiplier: number }
> = {
  "6x9": {
    label: '6×9 Postcard',
    description: "Most popular",
    printMultiplier: 1,
  },
  "6.5x9": {
    label: '6.5×9 Postcard',
    description: "Larger footprint",
    printMultiplier: 1.08,
  },
  "8.5x11": {
    label: '8.5×11 Flyer',
    description: "Max impact",
    printMultiplier: 1.35,
  },
};

export const PRINT_SIDES: Record<PrintSides, { label: string; multiplier: number }> = {
  single: { label: "One side", multiplier: 1 },
  double: { label: "Two sides", multiplier: 1.45 },
};

export interface VolumeTier {
  id: string;
  name: string;
  min: number;
  max: number | null;
  ratePerPiece: number;
  highlight?: boolean;
}

/** All-in per-piece rates (postage + print + prep + drop-ship) */
export const VOLUME_TIERS: VolumeTier[] = [
  {
    id: "starter",
    name: "Starter",
    min: 200,
    max: 999,
    ratePerPiece: 0.52,
  },
  {
    id: "growth",
    name: "Growth",
    min: 1000,
    max: 2499,
    ratePerPiece: 0.44,
    highlight: true,
  },
  {
    id: "scale",
    name: "Scale",
    min: 2500,
    max: 4999,
    ratePerPiece: 0.38,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    min: 5000,
    max: null,
    ratePerPiece: 0.34,
  },
];

export const DESIGN_PACKAGES = [
  { id: "diy", label: "Own design", price: 0 },
  { id: "template", label: "Template", price: 79 },
  { id: "custom", label: "Custom design", price: 149 },
] as const;

export function getTierForQuantity(quantity: number): VolumeTier {
  const tier =
    [...VOLUME_TIERS].reverse().find((t) => quantity >= t.min) ?? VOLUME_TIERS[0];
  return tier;
}

export interface EstimateInput {
  quantity: number;
  size: MailerSize;
  sides: PrintSides;
  routes: number;
  designPackageId: (typeof DESIGN_PACKAGES)[number]["id"];
}

export interface EstimateBreakdown {
  tier: VolumeTier;
  quantity: number;
  postageTotal: number;
  printAndMailTotal: number;
  designFee: number;
  routeSetupFee: number;
  subtotal: number;
  estimatedTotal: number;
  perPiece: number;
  estimatedReach: number;
  /** Rough households per route (USPS average) */
  householdsPerRoute: number;
}

const ROUTE_SETUP_FEE = 25;
const HOUSEHOLDS_PER_ROUTE = 225;

export function calculateEstimate(input: EstimateInput): EstimateBreakdown {
  const tier = getTierForQuantity(input.quantity);
  const sizeConfig = MAILER_SIZES[input.size];
  const sidesConfig = PRINT_SIDES[input.sides];
  const designPkg = DESIGN_PACKAGES.find((d) => d.id === input.designPackageId)!;

  const sizeAdjustedRate =
    tier.ratePerPiece * sizeConfig.printMultiplier * sidesConfig.multiplier;

  const postageTotal = input.quantity * USPS_POSTAGE_PER_PIECE;
  const printAndMailTotal = input.quantity * sizeAdjustedRate;
  const designFee = designPkg.price;
  const routeSetupFee = Math.max(0, input.routes - 1) * ROUTE_SETUP_FEE;
  const estimatedTotal = printAndMailTotal + designFee + routeSetupFee;
  const perPiece = estimatedTotal / input.quantity;
  const estimatedReach = input.routes * HOUSEHOLDS_PER_ROUTE;

  return {
    tier,
    quantity: input.quantity,
    postageTotal,
    printAndMailTotal,
    designFee,
    routeSetupFee,
    subtotal: printAndMailTotal,
    estimatedTotal,
    perPiece,
    estimatedReach,
    householdsPerRoute: HOUSEHOLDS_PER_ROUTE,
  };
}

/** Industry benchmarks for ROI messaging */
export const MARKET_STATS = {
  avgResponseRate: "1–3%",
  trustDirectMail: "76%",
  costPerPieceLow: "$0.34",
  uspsPostage: "$0.247",
  minOrder: 200,
  typicalRoi: "100–200%+",
} as const;
