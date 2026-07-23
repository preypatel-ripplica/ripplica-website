import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { features } from "@/components/home/home-data";

export function FeatureGrid() {
  return (
    <section id="features" className="scroll-mt-[92px] bg-white pb-28 pt-2">
      <Container className="max-w-[1180px]">
        <div className="mb-10 max-w-[720px]">
          <p className="text-[15px] font-semibold tracking-[0.08em] text-brand">
            Browser automation
          </p>
          <h2 className="mt-3 text-[34px] font-medium leading-tight text-ink sm:text-[40px]">
            Built to run where your work already lives
          </h2>
        </div>
        <div className="grid gap-5">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="grid overflow-hidden rounded-[8px] bg-[#f7f7f7] p-4 md:grid-cols-[0.78fr_1.22fr]"
            >
              <div className="flex min-h-[260px] items-center justify-center overflow-hidden rounded-[6px] bg-white md:min-h-[260px]">
                <Image
                  src={feature.image}
                  alt={feature.alt}
                  width={460}
                  height={268}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex min-h-[260px] flex-col justify-center px-8 py-10 sm:px-12 md:min-h-[260px]">
                <h3 className="max-w-[680px] text-[31px] font-medium leading-[1.18] tracking-normal text-black md:text-[34px]">
                  {feature.title}
                </h3>
                <p className="mt-5 max-w-[680px] text-[18px] leading-8 text-[#7f7f88]">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
