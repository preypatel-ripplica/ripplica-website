import { Hero } from "@/components/home/Hero";
import { IndustryUseCases } from "@/components/home/IndustryUseCases";
import { SolutionSuite } from "@/components/home/SolutionSuite";
import { Testimonials } from "@/components/home/Testimonials";
import { TrustedLogos } from "@/components/home/TrustedLogos";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedLogos />
      <SolutionSuite />
      <IndustryUseCases />
      <Testimonials />
    </>
  );
}
