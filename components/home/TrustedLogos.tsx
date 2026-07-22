import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { primaryLogos, secondaryLogos } from "@/components/home/home-data";

export function TrustedLogos() {
  const logos = [...secondaryLogos, ...primaryLogos];

  return (
    <section className="overflow-hidden bg-white pb-10 pt-0">
      <Container>
        <p className="text-center text-[18px] font-medium text-[#7d7d86]">
          Trusted by people at
        </p>
        <LogoMarquee logos={logos} className="mt-9" />
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
