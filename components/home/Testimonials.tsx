"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import { Container } from "@/components/layout/Container";
import { testimonials } from "@/components/home/home-data";

export function Testimonials() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  function updateScrollState() {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const maxScroll = carousel.scrollWidth - carousel.clientWidth;
    setCanScrollLeft(carousel.scrollLeft > 4);
    setCanScrollRight(carousel.scrollLeft < maxScroll - 4);
  }

  function scrollTestimonials(direction: "left" | "right") {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    const card = carousel.querySelector("article");
    const styles = window.getComputedStyle(carousel);
    const gap = Number.parseFloat(styles.columnGap || styles.gap || "12") || 12;
    const amount = (card?.getBoundingClientRect().width ?? 348) + gap;

    carousel.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  }

  useEffect(() => {
    const carousel = carouselRef.current;

    if (!carousel) {
      return;
    }

    updateScrollState();
    carousel.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);

    return () => {
      carousel.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, []);

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
            className="flex gap-3 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((testimonial) => (
              <article
                key={`${testimonial.company}-${testimonial.role}`}
                className="flex min-h-[232px] w-[min(348px,85vw)] shrink-0 flex-col justify-between rounded-[8px] border border-[#e5e5e5] bg-white px-8 py-7"
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
            className="absolute left-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#cfcfcf] text-white shadow-sm transition hover:bg-[#bdbdbd] disabled:pointer-events-none disabled:opacity-0 lg:inline-flex"
            aria-label="Show previous testimonials"
            onClick={() => scrollTestimonials("left")}
            disabled={!canScrollLeft}
          >
            <ChevronRight size={30} className="rotate-180" aria-hidden />
          </button>
          <button
            type="button"
            className="absolute right-4 top-1/2 z-20 hidden h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#cfcfcf] text-white shadow-sm transition hover:bg-[#bdbdbd] disabled:pointer-events-none disabled:opacity-0 lg:inline-flex"
            aria-label="Show more testimonials"
            onClick={() => scrollTestimonials("right")}
            disabled={!canScrollRight}
          >
            <ChevronRight size={30} aria-hidden />
          </button>
        </div>
      </Container>
    </section>
  );
}
