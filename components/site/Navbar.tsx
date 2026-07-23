"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Container } from "@/components/layout/Container";
import { cn } from "@/lib/cn";
import { primaryNav, siteConfig } from "@/lib/site";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="animate-fade-slide-up fixed left-0 top-0 z-50 w-full border-b border-[#ececec] bg-white/95 backdrop-blur">
      <Container>
        <nav
          className="flex h-[74px] items-center justify-between gap-6"
          aria-label="Primary navigation"
        >
          <Link
            href="/"
            className="inline-flex items-center"
            onClick={() => setIsOpen(false)}
          >
            <Image
              src="/assets/brand/ripplica-wordmark.png"
              alt="Ripplica"
              width={140}
              height={40}
              priority
              className="h-[39px] w-auto"
            />
          </Link>

          <div className="ml-auto hidden items-center gap-8 md:flex">
            <div className="flex items-center gap-7">
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "text-[16px] font-medium text-[#666] transition-colors hover:text-black",
                    pathname === item.href && "text-black",
                  )}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <Link
              href={siteConfig.appUrl}
              className="rounded-full bg-black px-5 py-3 text-[14px] font-medium text-white transition-colors hover:bg-[#222] sm:px-6 sm:text-[15px]"
            >
              Cloud automation engine
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#ececec] bg-white text-black md:hidden"
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X aria-hidden size={20} /> : <Menu aria-hidden size={20} />}
          </button>
        </nav>

        {isOpen && (
          <div
            id="mobile-navigation"
            className="border-t border-[#ececec] py-5 md:hidden"
          >
            <div className="flex flex-col gap-1">
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-md px-3 py-3 text-base font-medium text-[#6d6d6d] transition-colors hover:bg-[#f7f7f7] hover:text-black",
                    pathname === item.href && "bg-[#f7f7f7] text-black",
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
            <div className="mt-5 grid gap-3">
              <Link
                href={siteConfig.appUrl}
                className="rounded-full bg-black px-5 py-3 text-center text-sm font-semibold text-white"
                onClick={() => setIsOpen(false)}
              >
                Cloud automation engine
              </Link>
            </div>
          </div>
        )}
      </Container>
    </header>
  );
}
