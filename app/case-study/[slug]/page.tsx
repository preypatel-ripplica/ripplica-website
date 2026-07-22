import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { CaseStudyArticle } from "@/components/case-study/CaseStudyArticle";
import { caseStudies, getCaseStudy } from "@/components/case-study/case-study-data";

type CaseStudyDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return caseStudies.map((study) => ({
    slug: study.slug,
  }));
}

export async function generateMetadata({
  params,
}: CaseStudyDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    return {
      title: "Case Study",
    };
  }

  return {
    title: study.company,
    description: study.title,
  };
}

export default async function CaseStudyDetailPage({
  params,
}: CaseStudyDetailPageProps) {
  const { slug } = await params;
  const study = getCaseStudy(slug);

  if (!study) {
    notFound();
  }

  return <CaseStudyArticle study={study} />;
}
