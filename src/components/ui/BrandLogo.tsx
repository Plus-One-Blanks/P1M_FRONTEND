import { LogoMark } from "@/components/ui/LogoMark";
import { cn } from "@/lib/utils";
import Link from "next/link";

type BrandLogoProps = {
  className?: string;
  /** Show on dark backgrounds (footer) */
  variant?: "default" | "onDark";
  size?: "sm" | "md" | "lg";
  onClick?: () => void;
  priority?: boolean;
};

export function BrandLogo({
  className,
  variant = "default",
  size = "md",
  onClick,
  priority = false,
}: BrandLogoProps) {
  return (
    <Link
      href="/"
      className={cn("flex min-w-0 items-center gap-2.5", className)}
      onClick={onClick}
    >
      <LogoMark size={size} priority={priority} />
      <span
        className={cn(
          "truncate font-semibold tracking-tight",
          size === "lg" ? "text-lg" : "text-base sm:text-lg",
          variant === "onDark" ? "text-card" : "text-foreground"
        )}
      >
        Plus One
        <span
          className={cn(
            "font-normal",
            variant === "onDark" ? "text-card/70" : "text-muted"
          )}
        >
          {" "}
          Mailers
        </span>
      </span>
    </Link>
  );
}
