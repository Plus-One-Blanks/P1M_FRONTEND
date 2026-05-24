import { MARKET_STATS } from "@/lib/pricing";

const stats = [
  { value: MARKET_STATS.trustDirectMail, label: "trust direct mail over social ads" },
  { value: MARKET_STATS.typicalRoi, label: "typical ROI on well-targeted campaigns" },
  { value: "0", label: "mailing lists to buy or maintain" },
  { value: "100%", label: "of households reached on your routes" },
];

export function TrustBar() {
  return (
    <section className="relative z-10 -mt-10 sm:-mt-14 border-y border-border bg-card shadow-lg shadow-brand-ink/5">
      <div className="container-wide px-4 sm:px-8 lg:px-12 py-10 sm:py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8 sm:gap-10">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center lg:text-left">
              <p className="text-2xl sm:text-4xl font-semibold gradient-text">
                {stat.value}
              </p>
              <p className="text-xs sm:text-sm text-muted mt-2 max-w-[180px] sm:max-w-[220px] mx-auto lg:mx-0 leading-snug">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
