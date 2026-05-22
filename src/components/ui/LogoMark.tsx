import { cn } from "@/lib/utils";
import Image from "next/image";

type LogoMarkProps = {
  className?: string;
  /** Visual height of the mailbox mark (width scales automatically) */
  size?: "sm" | "md" | "lg";
  priority?: boolean;
};

const sizeClasses = {
  sm: "h-8 w-auto",
  md: "h-9 w-auto",
  lg: "h-11 w-auto",
} as const;

export function LogoMark({
  className,
  size = "md",
  priority = false,
}: LogoMarkProps) {
  return (
    <Image
      src="/logo.png"
      alt=""
      width={63}
      height={72}
      className={cn("shrink-0 object-contain", sizeClasses[size], className)}
      priority={priority}
      unoptimized
    />
  );
}
