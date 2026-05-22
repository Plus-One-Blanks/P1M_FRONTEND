export type FaqItem = {
  q: string;
  a: string;
  category: "basics" | "pricing" | "process" | "results";
};

export const faqItems: FaqItem[] = [
  {
    category: "basics",
    q: "What is EDDM (Every Door Direct Mail)?",
    a: "EDDM is a USPS program that lets you mail flyers to every address on selected carrier routes — without buying a mailing list. You pick the neighborhoods; we handle print, bundling, and delivery to the post office.",
  },
  {
    category: "basics",
    q: "Do I need a mailing list?",
    a: "No. That's the biggest advantage of EDDM. You target by geographic route, so every residential and business address on those routes receives your mailer.",
  },
  {
    category: "basics",
    q: "Who is Plus One Mailers best for?",
    a: "Local businesses that rely on nearby customers — restaurants, home services, salons, retail, real estate, gyms, and more. If your customers live in neighborhoods you can draw on a map, EDDM is a strong fit.",
  },
  {
    category: "pricing",
    q: "What's the minimum order?",
    a: "USPS allows EDDM mailings as small as 200 addresses, but Plus One Mailers starts at 500 homes so we can deliver full-service print, prep, and drop-off at a fair all-in rate. Our calculator runs from 500 to 10,000+ homes with automatic volume discounts.",
  },
  {
    category: "pricing",
    q: "How is pricing calculated?",
    a: "Your all-in rate is one price per home — printing, USPS postage (~$0.247/home at current retail rates), EDDM prep, and drop-off included. Published tiers run from $0.85/home at 500 homes down to $0.65/home at 5,000+. Optional mailer design is a flat $75 if you want us to create your artwork.",
  },
  {
    category: "pricing",
    q: "Are there hidden fees?",
    a: "No surprise line items. You pay for a number of homes — we deliver that many flyers. Your quote shows homes × per-home rate, plus a flat $75 design fee only if you need us to create your mailer. If anything changes before print, we confirm with you first.",
  },
  {
    category: "process",
    q: "How long until my mailers are delivered?",
    a: "Typical turnaround is 5–10 business days from proof approval, depending on quantity and print schedule. Rush options may be available — mention your timeline in the estimate form.",
  },
  {
    category: "process",
    q: "What do I need to provide to get started?",
    a: "Your target area (ZIPs or neighborhoods), your offer, and artwork — or a design brief if you want us to create it. We map routes, send a proof, and mail after you approve.",
  },
  {
    category: "process",
    q: "Can I pay online right now?",
    a: "We're launching online checkout soon. For now, submit a free estimate and we'll send a confirmed quote within one business day. No payment required to get started.",
  },
  {
    category: "results",
    q: "What response rate should I expect?",
    a: "Most local businesses see 0.5–3% response rates depending on offer strength, season, and repetition. Combining direct mail with digital ads typically boosts overall campaign performance.",
  },
  {
    category: "results",
    q: "Should I mail once or repeat?",
    a: "One drop can work for a time-sensitive offer. Many owners see stronger results with 2–3 drops to the same routes over a quarter — familiarity builds trust. We'll recommend timing based on your goals and budget.",
  },
];

export const faqCategories = [
  { id: "basics" as const, label: "EDDM basics" },
  { id: "pricing" as const, label: "Pricing & orders" },
  { id: "process" as const, label: "Process & timing" },
  { id: "results" as const, label: "Results & strategy" },
];
