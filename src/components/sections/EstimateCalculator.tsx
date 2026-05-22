"use client";

import { Button, choiceButtonStyles } from "@/components/ui/Button";
import { CTA } from "@/lib/cta";
import {
  calculateEstimate,
  DESIGN_FEE,
  DESIGN_OPTIONS,
  type DesignChoice,
  MIN_ORDER_HOMES,
} from "@/lib/pricing";
import { cn, formatCurrency, formatCurrencyDetailed } from "@/lib/utils";
import { motion } from "framer-motion";
import {
  Calculator,
  CheckCircle2,
  Home,
  Loader2,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";
import { useMemo, useState } from "react";

const HOME_PRESETS = [500, 1000, 2000, 3000, 5000];

type EstimateCalculatorProps = {
  embedded?: boolean;
};

export function EstimateCalculator({ embedded = false }: EstimateCalculatorProps) {
  const [homes, setHomes] = useState(2000);
  const [designChoice, setDesignChoice] = useState<DesignChoice>("own");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [business, setBusiness] = useState("");
  const [zipCodes, setZipCodes] = useState("");
  const [notes, setNotes] = useState("");

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const estimate = useMemo(
    () => calculateEstimate({ homes, designChoice }),
    [homes, designChoice]
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setSubmitting(true);

    try {
      const res = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          contact: { name, email, phone, business, zipCodes, notes },
          campaign: { homes, designChoice },
          estimate,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(
          (data as { error?: string }).error ??
            "Something went wrong. Please try again."
        );
      }

      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Submission failed");
    } finally {
      setSubmitting(false);
    }
  }

  const content = (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8 lg:items-start">
      <div className="lg:col-span-3 space-y-6 order-2 lg:order-1">
        <div className="rounded-3xl bg-card border border-border p-6 sm:p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary text-white">
              <Calculator className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold">How many homes?</h3>
          </div>
          <p className="text-sm text-muted mb-8 pl-[3.25rem] sm:pl-0 sm:ml-0">
            One flat price per home — we match your count to real addresses on
            USPS routes. No piece counts, route math, or hidden multipliers.
          </p>

          <div className="space-y-8">
            <HomesControl homes={homes} setHomes={setHomes} />
            <DesignControl
              designChoice={designChoice}
              setDesignChoice={setDesignChoice}
            />
          </div>
        </div>

        <LeadForm
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          phone={phone}
          setPhone={setPhone}
          business={business}
          setBusiness={setBusiness}
          zipCodes={zipCodes}
          setZipCodes={setZipCodes}
          notes={notes}
          setNotes={setNotes}
          submitting={submitting}
          submitted={submitted}
          error={error}
          onSubmit={handleSubmit}
        />
      </div>

      <EstimateSummary estimate={estimate} />
    </div>
  );

  if (embedded) {
    return (
      <div id="estimate" className="scroll-mt-28">
        {content}
      </div>
    );
  }

  return (
    <section id="estimate" className="section-padding scroll-mt-28">
      <div className="container-narrow">{content}</div>
    </section>
  );
}

function HomesControl({
  homes,
  setHomes,
}: {
  homes: number;
  setHomes: (v: number) => void;
}) {
  return (
    <div>
      <div className="flex justify-between items-baseline mb-3">
        <label className="text-sm font-medium flex items-center gap-2">
          <Home className="h-4 w-4 text-brand-primary" />
          Homes to reach
        </label>
        <span className="text-2xl font-semibold gradient-text">
          {homes.toLocaleString()}
        </span>
      </div>
      <input
        type="range"
        min={MIN_ORDER_HOMES}
        max={10000}
        step={100}
        value={homes}
        onChange={(e) => setHomes(Number(e.target.value))}
        className="w-full"
        aria-label="Number of homes"
      />
      <div className="flex flex-wrap gap-2 mt-3">
        {HOME_PRESETS.map((preset) => (
          <button
            key={preset}
            type="button"
            onClick={() => setHomes(preset)}
            className={cn(
              choiceButtonStyles.pill,
              homes === preset
                ? choiceButtonStyles.selected
                : choiceButtonStyles.unselected
            )}
          >
            {preset.toLocaleString()}
          </button>
        ))}
      </div>
      <p className="text-xs text-muted mt-3">
        Minimum {MIN_ORDER_HOMES.toLocaleString()} homes. We confirm the exact
        count on your ZIPs before you pay.
      </p>
    </div>
  );
}

function DesignControl({
  designChoice,
  setDesignChoice,
}: {
  designChoice: DesignChoice;
  setDesignChoice: (v: DesignChoice) => void;
}) {
  return (
    <div>
      <label className="text-sm font-medium block mb-1">Design (optional)</label>
      <p className="text-xs text-muted mb-3">
        Need artwork? Professional mailer design is a flat{" "}
        {formatCurrency(DESIGN_FEE)} — your per-home rate stays the same.
      </p>
      <div className="space-y-2">
        {DESIGN_OPTIONS.map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => setDesignChoice(option.id)}
            className={cn(
              choiceButtonStyles.base,
              "w-full p-3 text-left flex justify-between items-center",
              designChoice === option.id
                ? choiceButtonStyles.selected
                : choiceButtonStyles.unselected
            )}
          >
            <span className="text-sm">{option.label}</span>
            <span className="text-sm font-medium">
              {option.price === 0 ? "Included" : `+${formatCurrency(option.price)}`}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function EstimateSummary({
  estimate,
}: {
  estimate: ReturnType<typeof calculateEstimate>;
}) {
  const { homes, ratePerHome, tier } = estimate;

  return (
    <div className="lg:col-span-2 order-1 lg:order-2 w-full">
      <div className="rounded-3xl bg-brand-ink text-white p-5 sm:p-8 shadow-2xl">
        <p className="text-sm text-white/60 mb-2">Estimated total</p>
        <p className="text-3xl sm:text-5xl font-semibold mb-1">
          {formatCurrency(estimate.estimatedTotal)}
        </p>
        <p className="text-white/60 text-sm mb-8">
          {formatCurrencyDetailed(estimate.perHome)} per home · {tier.name}{" "}
          tier ({formatCurrencyDetailed(ratePerHome)}/home)
        </p>

        <ul className="space-y-3 mb-8 border-t border-white/10 pt-6">
          <SummaryRow
            label={`${homes.toLocaleString()} homes × ${formatCurrencyDetailed(ratePerHome)}`}
            value={formatCurrency(estimate.campaignTotal)}
          />
          {estimate.designFee > 0 && (
            <SummaryRow
              label={`Design (${formatCurrency(DESIGN_FEE)} flat)`}
              value={formatCurrency(estimate.designFee)}
            />
          )}
        </ul>

        <div className="rounded-2xl bg-card/10 p-4 text-sm text-white/80 space-y-2">
          <p>
            <strong className="text-white">Simple math:</strong> You pay for{" "}
            {homes.toLocaleString()} homes — we deliver {homes.toLocaleString()}{" "}
            flyers to those addresses. Print, postage, and prep are included.
          </p>
          <p className="text-white/60 text-xs">
            At a 2% response rate, that&apos;s about{" "}
            <strong className="text-brand-primary">
              {Math.round(homes * 0.02)} potential leads
            </strong>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <li className="flex justify-between gap-4 text-sm">
      <span className="text-white/70">{label}</span>
      <span className="font-medium shrink-0">{value}</span>
    </li>
  );
}

function LeadForm({
  name,
  setName,
  email,
  setEmail,
  phone,
  setPhone,
  business,
  setBusiness,
  zipCodes,
  setZipCodes,
  notes,
  setNotes,
  submitting,
  submitted,
  error,
  onSubmit,
}: {
  name: string;
  setName: (v: string) => void;
  email: string;
  setEmail: (v: string) => void;
  phone: string;
  setPhone: (v: string) => void;
  business: string;
  setBusiness: (v: string) => void;
  zipCodes: string;
  setZipCodes: (v: string) => void;
  notes: string;
  setNotes: (v: string) => void;
  submitting: boolean;
  submitted: boolean;
  error: string;
  onSubmit: (e: React.FormEvent) => void;
}) {
  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        className="rounded-3xl bg-card border border-border p-8 text-center"
      >
        <CheckCircle2 className="h-14 w-14 text-brand-primary mx-auto mb-4" />
        <h3 className="text-xl font-semibold mb-2">Estimate submitted!</h3>
        <p className="text-muted max-w-md mx-auto">
          We&apos;ll confirm home counts for your ZIP codes and follow up within
          one business day with your quote.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl bg-card border border-border p-6 sm:p-8 shadow-sm"
    >
      <h3 className="text-lg font-semibold mb-2">
        Get your confirmed quote — it&apos;s free
      </h3>
      <p className="text-sm text-muted mb-6">
        Tell us where you want to mail. We&apos;ll verify the number of homes and
        send a final price — no surprises.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <FormField
          icon={User}
          label="Your name"
          value={name}
          onChange={setName}
          required
          placeholder="Jane Smith"
        />
        <FormField
          icon={Mail}
          label="Email"
          type="email"
          value={email}
          onChange={setEmail}
          required
          placeholder="jane@business.com"
        />
        <FormField
          icon={Phone}
          label="Phone"
          type="tel"
          value={phone}
          onChange={setPhone}
          placeholder="(555) 123-4567"
        />
        <FormField
          label="Business name"
          value={business}
          onChange={setBusiness}
          placeholder="Smith's Pizza"
        />
      </div>

      <FormField
        icon={MapPin}
        label="Target ZIP code(s)"
        value={zipCodes}
        onChange={setZipCodes}
        required
        placeholder="90210, 90211"
        className="mb-4"
      />

      <div className="mb-6">
        <label className="text-sm font-medium block mb-2">
          Anything else we should know?
        </label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={3}
          className="w-full rounded-xl border border-border px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary resize-none"
          placeholder="Your offer, timeline, or neighborhoods you want to hit..."
        />
      </div>

      {error && (
        <p className="text-sm text-red-500 mb-4" role="alert">
          {error}
        </p>
      )}

      <Button type="submit" size="lg" className="w-full" disabled={submitting}>
        {submitting ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            {CTA.sending}
          </>
        ) : (
          CTA.submit
        )}
      </Button>

      <p className="text-xs text-muted text-center mt-4">
        No spam. No credit card. We&apos;ll only use this to send your quote.
      </p>
    </form>
  );
}

function FormField({
  icon: Icon,
  label,
  value,
  onChange,
  type = "text",
  required,
  placeholder,
  className,
}: {
  icon?: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
  placeholder?: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <label className="text-sm font-medium block mb-1.5">{label}</label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted" />
        )}
        <input
          type={type}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          required={required}
          placeholder={placeholder}
          className={cn(
            "w-full rounded-xl border border-border py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/30 focus:border-brand-primary",
            Icon ? "pl-10 pr-4" : "px-4"
          )}
        />
      </div>
    </div>
  );
}
