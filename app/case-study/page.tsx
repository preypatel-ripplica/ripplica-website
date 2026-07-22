import type { Metadata } from "next";

import { CaseStudyGrid } from "@/components/case-study/CaseStudyGrid";

export const metadata: Metadata = {
  title: "Case Study",
};

export default function CaseStudyPage() {
  return <CaseStudyGrid />;
}
