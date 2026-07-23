import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Ripplica — AI tools for every industry",
    template: "%s | Ripplica",
  },
  description:
    "Ripplica builds AI tools for healthcare, content creation, marketing, browser automation, and QA — serving 1000+ customers. VC-backed, built by gold medalists from IITs and BITS.",
  metadataBase: new URL("https://ripplica.com"),
  openGraph: {
    title: "Ripplica — AI tools for every industry",
    description:
      "Ripplica builds AI tools for healthcare, content creation, marketing, browser automation, and QA — serving 1000+ customers. VC-backed, built by gold medalists from IITs and BITS.",
    url: "https://ripplica.com",
    siteName: "Ripplica",
    type: "website",
  },
  icons: {
    icon: "/assets/brand/ripplica-mark.png",
    shortcut: "/assets/brand/ripplica-mark.png",
    apple: "/assets/brand/ripplica-mark.png",
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-surface text-ink">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 pt-[74px]">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
