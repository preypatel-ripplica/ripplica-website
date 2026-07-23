import Link from "next/link";
import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer id="contact" className="relative scroll-mt-[92px] overflow-hidden bg-white">
      <Container className="relative max-w-[1420px] pb-[72px] pt-14">
        <Image
          src="/assets/footer/footer-hand-dots.png"
          alt=""
          width={1748}
          height={1000}
          className="pointer-events-none absolute left-1/2 top-[-48px] z-0 hidden w-[1120px] -translate-x-1/2 opacity-20 lg:block"
        />

        <div className="relative z-10 grid min-h-[260px] gap-12 md:grid-cols-[1fr_220px]">
          <div className="flex flex-col justify-between">
            <h2 className="max-w-[520px] text-[32px] font-normal leading-tight tracking-normal text-black md:text-[36px]">
              Contact us
              <br />
              <a href="mailto:operations@ripplica.com">
                operations@ripplica.com
              </a>
            </h2>
            <Link href="/" className="mt-12 inline-flex">
              <Image
                src="/assets/brand/ripplica-mark.png"
                alt="Ripplica"
                width={54}
                height={54}
                className="h-12 w-12 object-contain"
              />
            </Link>
          </div>

          <nav
            className="flex flex-col gap-4 text-[21px] font-medium text-black"
            aria-label="Footer navigation"
          >
            <Link href={siteConfig.appUrl} className="text-[#858585]">
              Cloud automation engine
            </Link>
            <Link href="/#solutions">Solutions</Link>
            <Link href="/#use-cases">Use cases</Link>
            <Link href="/case-study">Case Study</Link>
            <Link href="#contact">Contact</Link>
          </nav>
        </div>

        <div className="relative z-10 mt-8 border-t border-[#d7d7d7] pt-6 text-center text-[14px] text-[#7e7e86]">
          <p>@Ripplica 2026 — AI for humans tired of busywork</p>
          <div className="mt-3 flex justify-center gap-6 text-black">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
