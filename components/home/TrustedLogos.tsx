import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { primaryLogos, secondaryLogos } from "@/components/home/home-data";

const productHuntBadges = [
  {
    period: "daily",
    label: "#1 Product of the Day",
    src: "https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=1043491&theme=neutral&period=daily&t=1784801734546",
  },
  {
    period: "weekly",
    label: "#1 Product of the Week",
    src: "https://api.producthunt.com/widgets/embed-image/v1/top-post-badge.svg?post_id=1043491&theme=neutral&period=weekly&t=1784801734546",
  },
] as const;

export function TrustedLogos() {
  const logos = [...secondaryLogos, ...primaryLogos];

  return (
    <section className="overflow-hidden bg-white pb-14 pt-16">
      <Container>
        <p className="text-center text-[18px] font-medium text-[#7d7d86]">
          Trusted by customers at
        </p>
        <LogoMarquee logos={logos} className="mt-9" />

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          {productHuntBadges.map((badge) => (
            <a
              key={badge.period}
              href="https://www.producthunt.com/products/ripplica/launches/ripplica?embed=true&utm_source=badge-top-post-badge&utm_medium=badge&utm_campaign=badge-ripplica"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex transition hover:opacity-90"
            >
              <img
                src={badge.src}
                alt={`Ripplica — ${badge.label} on Product Hunt`}
                width={250}
                height={54}
                className="h-[54px] w-[250px]"
              />
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

type Logo = {
  name: string;
  src: string;
  width: number;
  height: number;
};

type LogoMarqueeProps = {
  logos: Logo[];
  className?: string;
};

function LogoMarquee({ logos, className = "" }: LogoMarqueeProps) {
  const marqueeLogos = [...logos, ...logos];

  return (
    <div
      className={`relative left-1/2 w-screen -translate-x-1/2 overflow-hidden opacity-70 grayscale ${className}`}
      aria-label="Trusted company logos"
    >
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-28 bg-gradient-to-r from-white to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-28 bg-gradient-to-l from-white to-transparent"
        aria-hidden
      />
      <div className="animate-marquee-left flex w-max items-center gap-14 will-change-transform">
        {marqueeLogos.map((logo, index) => (
          <Image
            key={`${logo.name}-${index}`}
            src={logo.src}
            alt={index < logos.length ? logo.name : ""}
            width={logo.width}
            height={logo.height}
            className="max-h-[58px] w-auto shrink-0 object-contain"
          />
        ))}
      </div>
    </div>
  );
}
