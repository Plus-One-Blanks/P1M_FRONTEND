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
    a: "USPS requires a minimum of 200 pieces per mailing. Our calculator starts at 200 and scales up to 10,000+ for larger campaigns.",
  },
  {
    category: "pricing",
    q: "How is pricing calculated?",
    a: "Your estimate includes full-color printing, USPS postage ($0.247/piece at current retail rates), EDDM prep (bundling, facing slips), and drop-off. Design and extra routes are added separately so you always know what you're paying for.",
  },
  {
    category: "pricing",
    q: "Are there hidden fees?",
    a: "No surprise line items at checkout. Your quote breaks out print, postage, prep, routes, and optional design. If something changes (extra routes, rush print), we confirm before you approve.",
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
