"use client";

import { Button } from "@/components/ui/Button";
import { CTA } from "@/lib/cta";
import { estimateHref } from "@/lib/nav";
import { useEffect, useState } from "react";

/** Persistent mobile CTA — common on high-converting service sites */
export function StickyMobileCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="md:hidden fixed inset-x-0 bottom-0 z-40 p-4 pb-[max(1rem,env(safe-area-inset-bottom))] bg-card/95 backdrop-blur-md border-t border-border shadow-[0_-8px_30px_rgba(18,26,46,0.12)]"
      role="region"
      aria-label="Quick estimate"
    >
      <Button href={estimateHref()} size="lg" className="w-full shadow-lg">
        {CTA.estimate}
      </Button>
    </div>
  );
}
