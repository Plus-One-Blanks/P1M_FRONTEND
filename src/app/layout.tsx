import { ScrollToTopOnLoad } from "@/components/layout/ScrollToTopOnLoad";
import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  title: "Plus One Mailers | EDDM Flyers Made Simple",
  description:
    "The easiest way to ship Every Door Direct Mail (EDDM) flyers. Transparent pricing, instant estimates, and full-service print & mail for local businesses.",
  keywords: [
    "EDDM",
    "every door direct mail",
    "direct mail",
    "postcards",
    "local marketing",
    "flyers",
    "USPS mailers",
  ],
  openGraph: {
    title: "Plus One Mailers | EDDM Flyers Made Simple",
    description:
      "Ship EDDM flyers to every door in your market. Get a free instant estimate — no mailing lists required.",
    type: "website",
    locale: "en_US",
    siteName: "Plus One Mailers",
  },
  twitter: {
    card: "summary_large_image",
    title: "Plus One Mailers | EDDM Flyers Made Simple",
    description:
      "The easiest way to ship Every Door Direct Mail campaigns for local businesses.",
  },
  icons: {
    icon: [
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full scroll-smooth`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){if("scrollRestoration"in history)history.scrollRestoration="manual";var n=performance.getEntriesByType("navigation")[0];if(n&&n.type==="reload"){window.scrollTo(0,0);if(location.hash)history.replaceState(null,"",location.pathname+location.search)}})();`,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <ScrollToTopOnLoad />
        {children}
      </body>
    </html>
  );
}
