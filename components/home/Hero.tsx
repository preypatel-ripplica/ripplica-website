import { Medal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="bg-white">
      <Container className="grid min-h-[730px] items-start gap-12 pb-12 lg:grid-cols-[0.98fr_1.02fr]">
        <div className="animate-fade-slide-up pt-[208px]">
          <h1 className="max-w-[790px] text-[44px] font-semibold leading-[1.12] tracking-normal text-black sm:text-[58px] lg:text-[60px]">
            Automate any webapp With just a simple video.
          </h1>

          <p className="mt-5 flex items-center gap-3 text-[17px] font-medium text-[#7b7b86]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#b80000]" aria-hidden />
            Record it once. Never do it again.
          </p>

          <Link
            href={siteConfig.appUrl}
            className="mt-4 inline-flex rounded-full bg-[#5894ff] px-5 py-2.5 text-[18px] font-semibold text-white shadow-[0_2px_8px_rgba(88,148,255,0.35)] transition hover:bg-[#4a85ed]"
          >
            Sign in
          </Link>

          <div className="mt-[82px] grid max-w-[590px] gap-10 sm:grid-cols-2">
            <div className="flex items-center gap-4 rounded-lg border border-[#ff625c] px-4 py-3 text-[#ff625c]">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#f6c21f] text-white">
                <Medal size={24} aria-hidden />
              </span>
              <div>
                <p className="text-[10px] font-bold uppercase">Product Hunt</p>
                <p className="text-[17px] font-bold">#1 Product of the Day</p>
              </div>
            </div>
            <div className="flex items-center gap-4 rounded-lg border border-[#ff625c] px-4 py-3 text-[#ff625c]">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-[#ff625c] text-2xl font-bold text-white">
                P
              </span>
              <div>
                <p className="text-[10px] font-bold uppercase">#1 Product of the Week</p>
                <p className="text-[17px] font-bold">SaaS</p>
              </div>
            </div>
          </div>
        </div>

        <div className="animate-fade-slide-left animation-delay-300 relative ml-auto w-full max-w-[610px] pt-[118px]">
          <div className="rounded-[10px] bg-[#fafafa] p-3 shadow-[0_14px_38px_rgba(0,0,0,0.04)]">
            <Image
              src="/assets/hero/google-browser-demo.png"
              alt="Ripplica browser automation demo on Google"
              width={1120}
              height={860}
              priority
              className="h-auto w-full rounded-[8px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
