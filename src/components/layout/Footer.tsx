import { BrandLogo } from "@/components/ui/BrandLogo";
import { footerLinks } from "@/lib/nav";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-brand-ink text-card/70">
      <div className="container-wide px-5 sm:px-8 lg:px-12 py-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          <div>
            <BrandLogo variant="onDark" size="lg" className="mb-4" />
            <p className="text-sm leading-relaxed max-w-xs">
              The easiest way to ship EDDM flyers. Print, prep, and deliver to
              every door on your routes — without the USPS headache.
            </p>
          </div>

          <div>
            <h4 className="text-card font-medium mb-4 text-sm">Quick links</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-card transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-card font-medium mb-4 text-sm">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:hello@plusonemailers.com"
                  className="hover:text-card transition-colors"
                >
                  hello@plusonemailers.com
                </a>
              </li>
              <li>Mon–Fri, 9am–6pm PT</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between gap-4 text-xs text-center sm:text-left">
          <p suppressHydrationWarning>
            © {new Date().getFullYear()} Plus One Mailers. All rights reserved.
          </p>
          <p className="max-w-md sm:max-w-none mx-auto sm:mx-0">
            EDDM® is a trademark of the United States Postal Service. Plus One
            Mailers is an independent mail service provider.
          </p>
        </div>
      </div>
    </footer>
  );
}
