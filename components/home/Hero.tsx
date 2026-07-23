import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { credibilityStats } from "@/components/home/home-data";
import { siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(221,236,230,0.7),_transparent_55%),radial-gradient(ellipse_at_bottom_left,_rgba(248,220,202,0.35),_transparent_50%)]"
        aria-hidden
      />

      <Container className="relative grid min-h-[640px] items-center gap-12 pb-16 pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:pb-20 lg:pt-28">
        <div className="animate-fade-slide-up">
          <p className="text-[15px] font-semibold tracking-[0.08em] text-brand">
            Ripplica
          </p>

          <h1 className="mt-4 max-w-[720px] text-[42px] font-semibold leading-[1.1] tracking-normal text-ink sm:text-[54px] lg:text-[58px]">
            AI tools for the industries that run on busywork.
          </h1>

          <p className="mt-5 max-w-[540px] text-[18px] leading-8 text-muted">
            Serving 1000+ customers with AI. VC-backed. Built by gold medalists
            from IITs and BITS.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href={siteConfig.appUrl}
              className="inline-flex rounded-full bg-brand px-6 py-3 text-[17px] font-semibold text-white transition hover:bg-brand-dark"
            >
              Cloud automation engine
            </Link>
            <Link
              href="/#use-cases"
              className="inline-flex rounded-full border border-line px-6 py-3 text-[17px] font-semibold text-ink transition hover:border-brand hover:text-brand"
            >
              See use cases
            </Link>
          </div>

          <ul className="mt-12 grid max-w-[560px] gap-4 sm:grid-cols-3">
            {credibilityStats.map((stat) => (
              <li key={stat.label} className="border-t border-line pt-4">
                <p className="text-[22px] font-semibold text-ink">{stat.value}</p>
                <p className="mt-1 text-[14px] leading-5 text-muted">{stat.label}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="animate-fade-slide-left animation-delay-300 relative w-full max-w-[610px] justify-self-end">
          <div className="rounded-[10px] bg-[#fafafa] p-3 shadow-soft">
            <Image
              src="/assets/hero/google-browser-demo.png"
              alt="Ripplica AI automation across browser workflows"
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
