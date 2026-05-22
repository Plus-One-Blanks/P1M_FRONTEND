import { cn } from "@/lib/utils";
import Image from "next/image";

type BrandImageAspect = "4/3" | "3/2" | "4/5" | "16/9";

const aspectClasses: Record<BrandImageAspect, string> = {
  "4/3": "aspect-[4/3]",
  "3/2": "aspect-[3/2]",
  "4/5": "aspect-[4/5]",
  "16/9": "aspect-video",
};

type BrandImageFrameProps = {
  src: string;
  alt: string;
  aspect?: BrandImageAspect;
  priority?: boolean;
  sizes?: string;
  className?: string;
  imageClassName?: string;
  children?: React.ReactNode;
};

/**
 * Consistent photo treatment: bordered card, brand-surface base, light blue wash.
 */
export function BrandImageFrame({
  src,
  alt,
  aspect = "4/3",
  priority = false,
  sizes = "(max-width: 1024px) 100vw, 50vw",
  className,
  imageClassName,
  children,
}: BrandImageFrameProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-border bg-brand-surface shadow-xl shadow-brand-primary/10",
        aspectClasses[aspect],
        className
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        className={cn(
          "object-cover object-center saturate-[0.88] contrast-[1.03]",
          imageClassName
        )}
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-brand-primary/12 via-transparent to-brand-surface/50"
        aria-hidden
      />
      {children}
    </div>
  );
}
