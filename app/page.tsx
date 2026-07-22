import { FeatureGrid } from "@/components/home/FeatureGrid";
import { Hero } from "@/components/home/Hero";
import { ProductDemo } from "@/components/home/ProductDemo";
import { Testimonials } from "@/components/home/Testimonials";
import { TrustedLogos } from "@/components/home/TrustedLogos";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustedLogos />
      <ProductDemo />
      <FeatureGrid />
      <Testimonials />
    </>
  );
}
