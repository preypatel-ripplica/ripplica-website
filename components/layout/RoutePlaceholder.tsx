import { Container } from "@/components/layout/Container";

type RoutePlaceholderProps = {
  title: string;
};

export function RoutePlaceholder({ title }: RoutePlaceholderProps) {
  return (
    <Container className="py-24">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
          Coming next
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-normal text-ink md:text-5xl">
          {title}
        </h1>
        <p className="mt-5 text-lg leading-8 text-muted">
          This route is ready for the matching Framer section rebuild.
        </p>
      </div>
    </Container>
  );
}
