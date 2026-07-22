"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";

import { Container } from "@/components/layout/Container";
import { testimonials } from "@/components/home/home-data";

export function Testimonials() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  function scrollTestimonials(direction: "left" | "right") {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const nextIndex =
      direction === "right"
        ? Math.min(activeIndex + 1, testimonials.length - 4)
        : Math.max(activeIndex - 1, 0);
    const card = carousel.children[nextIndex] as HTMLElement | undefined;

    setActiveIndex(nextIndex);

    if (card) {
      carousel.scrollTo({
        left: card.offsetLeft,
        behavior: "smooth",
      });
      return;
    }

    carousel.scrollBy({
      left: direction === "right" ? 390 : -390,
      behavior: "smooth",
    });
  }

  return (
    <section className="scroll-mt-[140px] overflow-hidden bg-white pb-6 pt-[120px]">
      <Container className="max-w-[1420px]">
        <div className="text-center">
          <h2 className="text-[42px] font-medium leading-tight tracking-normal text-[#3c3c3f] sm:text-[50px]">
            Testimonials
          </h2>
          <p className="mt-4 text-[17px] text-[#7b7b86]">
            Read what our customers think about us.
          </p>
        </div>

        <div className="relative mt-12">
          <div
            ref={carouselRef}
            className="flex snap-x snap-mandatory gap-3 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((testimonial) => (
              <article
                key={`${testimonial.company}-${testimonial.role}`}
                className="flex min-h-[232px] min-w-[332px] snap-start flex-col justify-between rounded-[8px] border border-[#e5e5e5] bg-white px-8 py-7 sm:min-w-[348px]"
              >
                <p className="text-[17px] leading-7 text-[#737373]">
                  {testimonial.quote}
                </p>
                <div className="mt-7 flex items-center gap-4">
                  <span className="grid h-11 w-11 place-items-center overflow-hidden rounded-full bg-[#fafafa]">
                    <Image
                      src={testimonial.logo}
                      alt=""
                      width={44}
                      height={44}
                      className="h-8 w-8 object-contain grayscale"
                    />
                  </span>
                  <div className="text-[14px] leading-5 text-[#737373]">
                    <p className="font-medium text-[#555]">{testimonial.role}</p>
                    <p>{testimonial.company}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            className="absolute left-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#cfcfcf] text-white shadow-sm transition hover:bg-[#bdbdbd] disabled:opacity-0 lg:inline-flex"
            aria-label="Show previous testimonials"
            onClick={() => scrollTestimonials("left")}
            disabled={activeIndex === 0}
          >
            <ChevronRight size={30} className="rotate-180" aria-hidden />
          </button>
          <button
            type="button"
            className="absolute right-4 top-1/2 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#cfcfcf] text-white shadow-sm transition hover:bg-[#bdbdbd] lg:inline-flex"
            aria-label="Show more testimonials"
            onClick={() => scrollTestimonials("right")}
          >
            <ChevronRight size={30} aria-hidden />
          </button>
        </div>
      </Container>
    </section>
  );
}
