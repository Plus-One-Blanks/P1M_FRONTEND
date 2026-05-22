"use client";

import { Button } from "@/components/ui/Button";
import { CTA } from "@/lib/cta";
import { cn, formatCurrency, formatCurrencyDetailed } from "@/lib/utils";
import {
  calculateEstimate,
  DESIGN_PACKAGES,
  MAILER_SIZES,
  PRINT_SIDES,
  type MailerSize,
  type PrintSides,
} from "@/lib/pricing";
import { motion } from "framer-motion";
import {
  Calculator,
  CheckCircle2,
  Loader2,
  Mail,
  MapPin,
  Phone,
  User,
} from "lucide-react";
import { useMemo, useState } from "react";

const QUANTITY_PRESETS = [500, 1000, 2500, 5000];
const HOUSEHOLDS_PER_ROUTE = 225;

export function EstimateCalculator() {
  const [quantity, setQuantity] = useState(2500);
  const [size, setSize] = useState<MailerSize>("6x9");
  const [sides, setSides] = useState<PrintSides>("double");
  const [routes, setRoutes] = useState(3);
  const [designPackageId, setDesignPackageId] =
    useState<(typeof DESIGN_PACKAGES)[number]["id"]>("template");

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
    () =>
      calculateEstimate({
        quantity,
        size,
        sides,
        routes,
        designPackageId,
      }),
    [quantity, size, sides, routes, designPackageId]
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
          campaign: { quantity, size, sides, routes, designPackageId },
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

  return (
    <section id="estimate" className="section-padding">
      <div className="container-narrow">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-medium text-brand-primary mb-3">
            Free estimate
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4">
            See your campaign cost in seconds
          </h2>
          <p className="text-muted text-lg">
            Adjust the sliders, then submit for a detailed quote. Perfect for
            testing offers from Facebook ads — no payment required yet.
          </p>
        </div>

        <MotionSafeEstimateGrid>
          <div className="lg:col-span-3 space-y-6 order-2 lg:order-1">
            <div className="rounded-3xl bg-card border border-border p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-primary text-white">
                  <Calculator className="h-5 w-5" />
                </div>
                <h3 className="text-lg font-semibold">Campaign builder</h3>
              </div>

              <div className="space-y-8">
                <QuantityControl
                  quantity={quantity}
                  setQuantity={setQuantity}
                />

                <SizeControl size={size} setSize={setSize} />
                <SidesControl sides={sides} setSides={setSides} />

                <RoutesControl routes={routes} setRoutes={setRoutes} />

                <DesignControl
                  designPackageId={designPackageId}
                  setDesignPackageId={setDesignPackageId}
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

          <EstimateSummary estimate={estimate} quantity={quantity} />
        </MotionSafeEstimateGrid>
      </div>
    </section>
  );
}

function MotionSafeEstimateGrid({ children }: { children: React.ReactNode }) {
  return <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-8">{children}</div>;
}

function QuantityControl({
  quantity,
  setQuantity,
}: {
  quantity: number;
  setQuantity: (v: number) => void;
}) {
  return (
    <div>
      <MotionSafeQuantityLabel quantity={quantity} />
      <input
        type="range"
        min={200}
        max={10000}
        step={100}
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
        className="w-full"
      />
      <div className="flex flex-wrap gap-2 mt-3">
        {QUANTITY_PRESETS.map((preset) => (
          <button
            key={preset}
            type="button"
            onClick={() => setQuantity(preset)}
            className={cn(
              "rounded-full px-3 py-1 text-xs font-medium border transition-colors",
            quantity === preset
              ? "border-brand-primary bg-brand-primary text-white"
              : "border-border text-muted hover:border-brand-primary/40"
            )}
          >
            {preset.toLocaleString()}
          </button>
        ))}
      </div>
    </div>
  );
}

function MotionSafeQuantityLabel({ quantity }: { quantity: number }) {
  return (
    <div className="flex justify-between items-baseline mb-3">
      <label className="text-sm font-medium">Quantity</label>
      <span className="text-2xl font-semibold gradient-text">
        {quantity.toLocaleString()}
      </span>
    </div>
  );
}

function SizeControl({
  size,
  setSize,
}: {
  size: MailerSize;
  setSize: (v: MailerSize) => void;
}) {
  return (
    <div>
      <label className="text-sm font-medium block mb-3">Mailer size</label>
      <div className="grid grid-cols-1 min-[420px]:grid-cols-3 gap-2">
        {(Object.keys(MAILER_SIZES) as MailerSize[]).map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => setSize(key)}
            className={cn(
              "rounded-xl border p-3 text-left transition-colors",
              size === key
                ? "border-brand-primary bg-brand-primary text-white"
                : "border-border hover:border-brand-primary/40"
            )}
          >
            <p className="text-sm font-medium whitespace-nowrap">
              {MAILER_SIZES[key].label}
            </p>
          </button>
        ))}
      </div>
    </div>
  );
}

function SidesControl({
  sides,
  setSides,
}: {
  sides: PrintSides;
  setSides: (v: PrintSides) => void;
}) {
  return (
    <MotionSafeSidesControl sides={sides} setSides={setSides} />
  );
}

function MotionSafeSidesControl({
  sides,
  setSides,
}: {
  sides: PrintSides;
  setSides: (v: PrintSides) => void;
}) {
  return (
    <div>
      <label className="text-sm font-medium block mb-3">Print sides</label>
      <div className="flex gap-2">
        {(Object.keys(PRINT_SIDES) as PrintSides[]).map((key) => (
          <button
            key={key}
            type="button"
            onClick={() => setSides(key)}
            className={cn(
              "flex-1 rounded-xl border py-3 text-sm font-medium whitespace-nowrap transition-colors",
              sides === key
                ? "border-brand-primary bg-brand-primary text-white"
                : "border-border hover:border-brand-primary/40"
            )}
          >
            {PRINT_SIDES[key].label}
          </button>
        ))}
      </div>
    </div>
  );
}

function RoutesControl({
  routes,
  setRoutes,
}: {
  routes: number;
  setRoutes: (v: number) => void;
}) {
  return (
    <div>
      <div className="flex justify-between items-baseline mb-3">
        <label className="text-sm font-medium flex items-center gap-2">
          <MapPin className="h-4 w-4 text-brand-primary" />
          Carrier routes
        </label>
        <span className="font-semibold">{routes}</span>
      </div>
      <input
        type="range"
        min={1}
        max={20}
        step={1}
        value={routes}
        onChange={(e) => setRoutes(Number(e.target.value))}
        className="w-full"
      />
      <p className="text-xs text-muted mt-2">
        ~{(routes * HOUSEHOLDS_PER_ROUTE).toLocaleString()} households estimated
      </p>
    </div>
  );
}

function DesignControl({
  designPackageId,
  setDesignPackageId,
}: {
  designPackageId: (typeof DESIGN_PACKAGES)[number]["id"];
  setDesignPackageId: (v: (typeof DESIGN_PACKAGES)[number]["id"]) => void;
}) {
  return (
    <div>
      <label className="text-sm font-medium block mb-3">Design help</label>
      <div className="space-y-2">
        {DESIGN_PACKAGES.map((pkg) => (
          <button
            key={pkg.id}
            type="button"
            onClick={() => setDesignPackageId(pkg.id)}
            className={cn(
              "w-full rounded-xl border p-3 text-left flex justify-between items-center transition-colors",
              designPackageId === pkg.id
                ? "border-brand-primary bg-brand-primary text-white"
                : "border-border hover:border-brand-primary/40"
            )}
          >
            <span className="text-sm whitespace-nowrap">{pkg.label}</span>
            <span className="text-sm font-medium">
              {pkg.price === 0 ? "Free" : `+$${pkg.price}`}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

function EstimateSummary({
  estimate,
  quantity,
}: {
  estimate: ReturnType<typeof calculateEstimate>;
  quantity: number;
}) {
  return (
    <div className="lg:col-span-2 order-1 lg:order-2">
      <div className="lg:sticky lg:top-28 rounded-3xl bg-brand-ink text-white p-5 sm:p-8 shadow-2xl">
        <p className="text-sm text-white/60 mb-2">Estimated total</p>
        <p className="text-3xl sm:text-5xl font-semibold mb-1">
          {formatCurrency(estimate.estimatedTotal)}
        </p>
        <p className="text-white/60 text-sm mb-8">
          {formatCurrencyDetailed(estimate.perPiece)} per piece ·{" "}
          {estimate.tier.name} tier
        </p>

        <ul className="space-y-3 mb-8 border-t border-white/10 pt-6">
          <SummaryRow
            label="Print & mail (all-in)"
            value={formatCurrency(estimate.printAndMailTotal)}
          />
          {estimate.designFee > 0 && (
            <SummaryRow
              label="Design"
              value={formatCurrency(estimate.designFee)}
            />
          )}
          {estimate.routeSetupFee > 0 && (
            <SummaryRow
              label="Extra routes"
              value={formatCurrency(estimate.routeSetupFee)}
            />
          )}
          <SummaryRow
            label="Est. households reached"
            value={estimate.estimatedReach.toLocaleString()}
            muted
          />
        </ul>

        <div className="rounded-2xl bg-card/10 p-4 text-sm text-white/80">
          <p>
            <strong className="text-white">Market insight:</strong> At a 2%
            response rate, {quantity.toLocaleString()} mailers could generate{" "}
            <strong className="text-brand-primary">
              {Math.round(quantity * 0.02)} leads
            </strong>
            . Many local campaigns see 100–200%+ ROI.
          </p>
        </div>
      </div>
    </div>
  );
}

function SummaryRow({
  label,
  value,
  muted,
}: {
  label: string;
  value: string;
  muted?: boolean;
}) {
  return (
    <li className="flex justify-between text-sm">
      <span className={muted ? "text-white/50" : "text-white/70"}>{label}</span>
      <span className={muted ? "text-white/50" : "font-medium"}>{value}</span>
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
          We&apos;ll review your campaign details and follow up within one
          business day with a confirmed quote. Check your inbox.
        </p>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-3xl bg-card border border-border p-6 sm:p-8 shadow-sm"
    >
      <h3 className="text-lg font-semibold mb-6">
        Get your detailed quote — it&apos;s free
      </h3>

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
          placeholder="Timeline, offer details, previous mail experience..."
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
