import Image from "next/image";

import { Container } from "@/components/layout/Container";
import type { CaseStudy } from "@/components/case-study/case-study-data";

type CaseStudyArticleProps = {
  study: CaseStudy;
};

export function CaseStudyArticle({ study }: CaseStudyArticleProps) {
  return (
    <article className="bg-white pb-28 pt-16">
      <Container className="max-w-[1260px]">
        <div className="border-t border-[#e7e7e7] pt-16">
          <div className="mx-auto max-w-[1040px]">
            <p className="text-[16px] text-[#777]">{study.eyebrow}</p>
            <h1 className="mt-6 text-[44px] font-semibold leading-[1.16] tracking-normal text-black md:text-[52px]">
              {study.title}
            </h1>
            <p className="mt-6 text-[16px] text-[#9a9a9a]">{study.date}</p>

            <div className="my-28 flex justify-center">
              <Image
                src={study.logo}
                alt={study.company}
                width={study.logoWidth}
                height={study.logoHeight}
                priority
                className="max-h-[160px] w-auto max-w-[420px] object-contain grayscale"
              />
            </div>

            <div className="space-y-14 text-[17px] leading-8 text-[#666]">
              {study.sections.map((section) => (
                <section key={section.heading}>
                  <h2 className="text-[30px] font-semibold leading-tight tracking-normal text-black">
                    {section.heading}
                  </h2>
                  {section.body && (
                    <p className="mt-7">
                      <RichText text={section.body} />
                    </p>
                  )}
                  {section.bullets && (
                    <ul className="mt-7 space-y-1 pl-6 [list-style-type:square] marker:text-[#777]">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>
                          <BulletText text={bullet} />
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.footer && (
                    <p className="mt-7">
                      <RichText text={section.footer} />
                    </p>
                  )}
                </section>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </article>
  );
}

function RichText({ text }: { text: string }) {
  const strongPhrases = getStrongPhrases(text);

  let parts: Array<string | { strong: string }> = [text];

  for (const phrase of strongPhrases) {
    parts = parts.flatMap((part) => {
      if (typeof part !== "string") {
        return [part];
      }

      const split = part.split(phrase);

      if (split.length === 1) {
        return [part];
      }

      return split.flatMap((chunk, index) =>
        index === split.length - 1 ? [chunk] : [chunk, { strong: phrase }],
      );
    });
  }

  return (
    <>
      {parts.map((part, index) =>
        typeof part === "string" ? (
          part
        ) : (
          <strong key={`${part.strong}-${index}`} className="font-semibold">
            {part.strong}
          </strong>
        ),
      )}
    </>
  );
}

function BulletText({ text }: { text: string }) {
  const labelMatch = text.match(/^([^:]+):\s(.+)$/);

  if (!labelMatch) {
    return <RichText text={text} />;
  }

  return (
    <>
      <strong className="font-semibold">{labelMatch[1]}:</strong>{" "}
      <RichText text={labelMatch[2]} />
    </>
  );
}

function getStrongPhrases(text: string) {
  return [
    "Our Client",
    "Alstonia",
    "speed to lead",
    "data integrity",
    "repeatable playbooks",
    "autonomous lead ops agent",
    "personalized first touch",
    "Inbound lead capture increased by 80%",
    "Turnaround time reduced by 95%",
    "First response conversion rate up by 10%",
    "Cleaner CRM",
    "artificial jewellery",
    "high-velocity creative production",
    "manual and slow",
    "AI-powered creative agent",
    "50% reduction in marketing cost per ad",
    "90% decrease in turnaround time",
    "Manodayam",
    "PHQ-9",
    "60% reduction in user drop-offs",
    "accurate P2P visibility",
    "on-time supplier coordination",
    "lightweight tools",
    "procure-to-pay (P2P)",
    "no centralized, real-time system",
    "AI agent",
    "WhatsApp",
    "ERPNext",
    "directly in chat",
    "DocTypes/fields",
    "reminder algorithm",
    "30% reduction in P2P cycle time",
    "Lighter MIS workload",
    "Higher data accuracy",
    "30 Sundays",
    "AirAsia",
    "20% reduction in turnaround time",
    "Tigerhall",
    "LinkedIn",
    "120+ hours saved per month",
    "Saarvay",
    "50% reduction in operations headcount",
    "2P2C",
    "70% reduction in workflow execution time",
    "95% improvement in data accuracy",
    "Business impact",
  ].filter((phrase) => text.includes(phrase));
}
