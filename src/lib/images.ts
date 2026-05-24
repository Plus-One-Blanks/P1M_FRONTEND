/**
 * Curated Unsplash imagery aligned with EDDM / direct mail and local business.
 * Replace with brand photography when available.
 */

export type UnsplashImage = {
  /** Unsplash CDN id, e.g. photo-1526554850534-7c78330d5f90 */
  photoId: string;
  alt: string;
  defaultWidth?: number;
  /** Unsplash+ assets are served from plus.unsplash.com */
  premium?: boolean;
};

export function unsplashSrc(
  photoId: string,
  width = 1200,
  quality = 80,
  premium = false
): string {
  const host = premium
    ? "https://plus.unsplash.com"
    : "https://images.unsplash.com";
  return `${host}/${photoId}?w=${width}&q=${quality}&auto=format&fit=crop`;
}

export function srcFrom(
  image: UnsplashImage,
  width?: number,
  quality = 80
): string {
  return unsplashSrc(
    image.photoId,
    width ?? image.defaultWidth ?? 1200,
    quality,
    image.premium ?? false
  );
}

export const images = {
  hero: {
    photoId: "photo-1526554850534-7c78330d5f90",
    alt: "Stacks of mail and printed flyers ready for Every Door Direct Mail delivery",
    defaultWidth: 720,
  },
  estimateBand: {
    photoId: "premium_photo-1661335205266-18d53e04710f",
    alt: "Business owner calculating costs with a calculator and financial documents at a desk",
    defaultWidth: 700,
    premium: true,
  },
  mission: {
    photoId: "photo-1768487451926-1964e0365d0e",
    alt: "Local storefront on a neighborhood street at dusk",
    defaultWidth: 1920,
  },
  conversion: {
    neighborhood: {
      photoId: "photo-1592595896551-12b371d546d5",
      alt: "Suburban neighborhood — the households your EDDM campaign reaches",
      defaultWidth: 800,
    },
    localOwner: {
      photoId: "photo-1556761175-b413da4baf72",
      alt: "Small business owner welcoming a customer",
      defaultWidth: 800,
    },
    teamPlanning: {
      photoId: "photo-1600880292203-757bb62b4baf",
      alt: "Local business team planning a marketing campaign together",
      defaultWidth: 800,
    },
    mailboxDelivery: {
      photoId: "photo-1578655083045-1974aed129e6",
      alt: "Residential mailboxes along a carrier route ready for delivery",
      defaultWidth: 900,
    },
  },
  howItWorks: {
    routes: {
      photoId: "photo-1578655083045-1974aed129e6",
      alt: "Row of residential mailboxes along a suburban carrier route",
      defaultWidth: 600,
    },
    design: {
      photoId: "photo-1605699717632-0b9b657ff3b5",
      alt: "Colorful EDDM postcards and flyers laid out for design and proofing",
      defaultWidth: 600,
    },
    print: {
      photoId: "photo-1693031630369-bd429a57f115",
      alt: "Commercial printing press producing stacked direct mail pieces",
      defaultWidth: 600,
    },
    delivery: {
      photoId: "photo-1523495706668-1fd3d480bc63",
      alt: "USPS blue street collection mailbox ready for outgoing mail",
      defaultWidth: 600,
    },
  },
  about: {
    hero: {
      photoId: "photo-1600880292203-757bb62b4baf",
      alt: "Small business team collaborating around a table",
      defaultWidth: 1200,
    },
    story: {
      photoId: "photo-1556761175-b413da4baf72",
      alt: "Family-owned shop owner greeting a customer at the counter",
      defaultWidth: 800,
    },
  },
  industries: {
    restaurant: {
      photoId: "photo-1761515397055-1bba63a150d3",
      alt: "Modern restaurant interior visible through glass doors at night",
      defaultWidth: 600,
    },
    homeServices: {
      photoId: "photo-1561400555-786780284b67",
      alt: "HVAC technician servicing equipment for a local home services business",
      defaultWidth: 600,
    },
    healthBeauty: {
      photoId: "photo-1521590832167-7bcbfaa6381f",
      alt: "Bright, welcoming hair salon interior with styling stations",
      defaultWidth: 600,
    },
    retail: {
      photoId: "photo-1441986300917-64674bd600d8",
      alt: "Independent retail shop with clothing displays and open floor plan",
      defaultWidth: 600,
    },
    realEstate: {
      photoId: "photo-1592595896551-12b371d546d5",
      alt: "Suburban home with manicured lawn — target neighborhood for real estate mailers",
      defaultWidth: 600,
    },
    fitness: {
      photoId: "photo-1766287453372-6e4737789b95",
      alt: "Athlete training with a barbell in a neighborhood gym",
      defaultWidth: 600,
    },
  },
} as const;
