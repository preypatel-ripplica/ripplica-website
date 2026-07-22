import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { caseStudies } from "@/components/case-study/case-study-data";

export function CaseStudyGrid() {
  return (
    <section className="bg-white pb-28 pt-16">
      <Container className="max-w-[1260px]">
        <div className="border-t border-[#e7e7e7] pt-10">
          <h1 className="text-[46px] font-semibold leading-tight tracking-normal text-black">
            Case Study
          </h1>
          <p className="mt-2 text-[17px] text-[#777]">
            Read real success stories from our customers.
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map((study) => (
            <Link
              key={study.slug}
              href={`/case-study/${study.slug}`}
              className="group overflow-hidden rounded-[6px] bg-[#f7f7f7] transition hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)]"
            >
              <div className="m-4 flex h-[160px] items-center justify-center bg-white">
                <Image
                  src={study.logo}
                  alt={study.company}
                  width={study.logoWidth}
                  height={study.logoHeight}
                  className="max-h-[116px] max-w-[78%] object-contain grayscale transition group-hover:grayscale-0"
                />
              </div>
              <div className="px-4 pb-8 pt-4">
                <h2 className="text-[24px] font-normal leading-tight tracking-normal text-black">
                  {study.title}
                </h2>
                <p className="mt-4 text-[16px] text-[#555]">{study.company}</p>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
