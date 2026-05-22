import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

type SectionHeaderProps = {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
  align?: "center" | "left";
  href?: string;
  linkLabel?: string;
};

export function SectionHeader({
  eyebrow,
  title,
  description,
  className,
  align = "center",
  href,
  linkLabel,
}: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <div
      className={cn(
        "mb-10 sm:mb-14",
        centered ? "text-center max-w-2xl mx-auto" : "max-w-2xl",
        className
      )}
    >
      <p className="text-sm font-medium text-brand-primary mb-3">{eyebrow}</p>
      <h2
        className={cn(
          "text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight",
          description && "mb-4"
        )}
      >
        {title}
      </h2>
      {description && (
        <p className="text-muted text-base sm:text-lg leading-relaxed">
          {description}
        </p>
      )}
      {href && linkLabel && (
        <div className={cn("mt-6", centered && "flex justify-center")}>
          <Button href={href} variant="outline" size="lg" className="w-full sm:w-auto">
            {linkLabel}
            <ArrowRight className="h-5 w-5 shrink-0" />
          </Button>
        </div>
      )}
    </div>
  );
}
