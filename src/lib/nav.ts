/** Shared site routes */

export const ROUTES = {
  home: "/",
  about: "/about",
  howItWorks: "/how-it-works",
  pricing: "/pricing",
  industries: "/industries",
  faq: "/faq",
  estimate: "/estimate",
} as const;

export const navLinks = [
  { href: ROUTES.about, label: "About" },
  { href: ROUTES.howItWorks, label: "How it works" },
  { href: ROUTES.pricing, label: "Pricing" },
  { href: ROUTES.industries, label: "Industries" },
  { href: ROUTES.faq, label: "FAQ" },
] as const;

export const footerLinks = [
  { href: ROUTES.about, label: "About us" },
  { href: ROUTES.howItWorks, label: "How it works" },
  { href: ROUTES.pricing, label: "Pricing" },
  { href: ROUTES.industries, label: "Industries" },
  { href: ROUTES.estimate, label: "Free estimate" },
  { href: ROUTES.faq, label: "FAQ" },
] as const;

export const ESTIMATE_PAGE = ROUTES.estimate;

export function estimateHref() {
  return ROUTES.estimate;
}

/** Scroll to calculator — use only on the estimate page */
export function scrollToEstimateCalculator() {
  document.getElementById("estimate")?.scrollIntoView({ behavior: "smooth" });
}
