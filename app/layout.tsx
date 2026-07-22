import type { Metadata } from "next";
import type { ReactNode } from "react";

import { Footer } from "@/components/site/Footer";
import { Navbar } from "@/components/site/Navbar";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Ripplica",
    template: "%s | Ripplica",
  },
  description:
    "Ripplica helps teams build, launch, and scale digital experiences with clarity.",
  metadataBase: new URL("https://ripplica.com"),
  openGraph: {
    title: "Ripplica",
    description:
      "Ripplica helps teams build, launch, and scale digital experiences with clarity.",
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
