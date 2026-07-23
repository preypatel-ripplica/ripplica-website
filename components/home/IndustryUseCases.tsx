"use client";

import { useState } from "react";

import { Container } from "@/components/layout/Container";
import { industryUseCases } from "@/components/home/home-data";
import { cn } from "@/lib/cn";

export function IndustryUseCases() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = industryUseCases[activeIndex] ?? industryUseCases[0];

  return (
    <section id="use-cases" className="scroll-mt-[92px] bg-white py-24">
      <Container className="max-w-[1180px]">
        <div className="max-w-[720px]">
          <p className="text-[15px] font-semibold tracking-[0.08em] text-brand">
            Use cases
          </p>
          <h2 className="mt-3 text-[40px] font-medium leading-tight tracking-normal text-ink sm:text-[48px]">
            Where Ripplica shows up at work
          </h2>
          <p className="mt-5 text-[18px] leading-8 text-muted">
            Pick an industry or capability — see the workflows our AI already runs
            for customers.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[12px] border border-line bg-[#faf8f3]">
          <div
            className="relative z-10 flex gap-1 overflow-x-auto border-b border-line bg-white p-2"
            role="tablist"
            aria-label="Industries and capabilities"
          >
            {industryUseCases.map((item, index) => {
              const isActive = index === activeIndex;

              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`use-case-panel-${item.id}`}
                  id={`use-case-tab-${item.id}`}
                  onClick={() => setActiveIndex(index)}
                  className={cn(
                    "relative z-10 cursor-pointer shrink-0 rounded-full px-4 py-2.5 text-[15px] font-semibold transition",
                    isActive
                      ? "bg-brand text-white"
                      : "bg-transparent text-[#626262] hover:bg-[#f3f1eb] hover:text-ink",
                  )}
                >
                  {item.name}
                </button>
              );
            })}
          </div>

          <div
            key={active.id}
            id={`use-case-panel-${active.id}`}
            role="tabpanel"
            aria-labelledby={`use-case-tab-${active.id}`}
            className="grid gap-8 p-6 sm:p-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 lg:p-10"
          >
            <div>
              <p className="text-[14px] font-semibold uppercase tracking-[0.06em] text-accent">
                {active.name}
              </p>
              <h3 className="mt-3 text-[28px] font-semibold leading-tight text-ink sm:text-[32px]">
                {active.summary}
              </h3>
            </div>

            <ul className="grid gap-5">
              {active.cases.map((useCase, index) => (
                <li
                  key={useCase.title}
                  className="grid grid-cols-[auto_1fr] gap-4 border-t border-line pt-5 first:border-t-0 first:pt-0"
                >
                  <span className="mt-0.5 text-[14px] font-semibold text-brand">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h4 className="text-[18px] font-semibold text-ink">{useCase.title}</h4>
                    <p className="mt-1.5 text-[15px] leading-6 text-muted">
                      {useCase.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
