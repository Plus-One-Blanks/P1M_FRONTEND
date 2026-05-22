"use client";

import { BrandLogo } from "@/components/ui/BrandLogo";
import { Button } from "@/components/ui/Button";
import { CTA } from "@/lib/cta";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
  { href: "#industries", label: "Industries" },
  { href: "#faq", label: "FAQ" },
];

function scrollToEstimate() {
  document.getElementById("estimate")?.scrollIntoView({ behavior: "smooth" });
}

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <span className="relative flex h-5 w-5 items-center justify-center" aria-hidden>
      <span
        className={cn(
          "absolute h-0.5 w-5 rounded-full bg-foreground transition-all duration-300",
          open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-1"
        )}
      />
      <span
        className={cn(
          "absolute top-1/2 h-0.5 w-5 -translate-y-1/2 rounded-full bg-foreground transition-all duration-300",
          open ? "opacity-0 scale-0" : "opacity-100"
        )}
      />
      <span
        className={cn(
          "absolute h-0.5 w-5 rounded-full bg-foreground transition-all duration-300",
          open ? "bottom-1/2 translate-y-1/2 -rotate-45" : "bottom-1"
        )}
      />
    </span>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const closeMenu = () => setMobileOpen(false);

  return (
    <header className="site-header fixed inset-x-0 top-0 z-50">
      <div className="site-header-inner container-wide px-5 sm:px-8 lg:px-12">
        <nav
          className={cn(
            "flex items-center justify-between gap-3 rounded-2xl px-4 py-3 sm:px-5 transition-all duration-300",
            scrolled
              ? "glass shadow-lg shadow-black/5 border border-border/80"
              : "border border-transparent bg-transparent shadow-none"
          )}
          aria-label="Main navigation"
        >
          <BrandLogo onClick={closeMenu} priority className="min-w-0" />

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:block shrink-0">
            <Button size="sm" onClick={scrollToEstimate}>
              {CTA.estimate}
            </Button>
          </div>

          <button
            type="button"
            className={cn(
              "md:hidden relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-card shadow-sm transition-colors",
              mobileOpen && "border-brand-primary/40 bg-brand-surface"
            )}
            onClick={() => setMobileOpen((open) => !open)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            <HamburgerIcon open={mobileOpen} />
          </button>
        </nav>

        {mobileOpen && (
          <div
            id="mobile-nav"
            className="md:hidden mt-2 glass rounded-2xl border border-border p-4 shadow-xl"
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-xl px-4 py-3.5 text-base font-medium text-foreground hover:bg-brand-surface active:bg-brand-surface transition-colors"
                  onClick={closeMenu}
                >
                  {link.label}
                </Link>
              ))}
            </div>
            <div className="pt-3 mt-2 border-t border-border">
              <Button
                className="w-full"
                size="lg"
                onClick={() => {
                  closeMenu();
                  scrollToEstimate();
                }}
              >
                {CTA.estimate}
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
