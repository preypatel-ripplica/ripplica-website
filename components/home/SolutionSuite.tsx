import { Container } from "@/components/layout/Container";
import { solutions } from "@/components/home/home-data";

export function SolutionSuite() {
  return (
    <section id="solutions" className="scroll-mt-[92px] bg-white py-24">
      <Container className="max-w-[1180px]">
        <div className="max-w-[720px]">
          <p className="text-[15px] font-semibold tracking-[0.08em] text-brand">
            What we build
          </p>
          <h2 className="mt-3 text-[40px] font-medium leading-tight tracking-normal text-ink sm:text-[48px]">
            AI solutions across industries
          </h2>
          <p className="mt-5 text-[18px] leading-8 text-muted">
            From healthcare to content, marketing, automation, and QA — Ripplica builds AI
            tools that take real work off your team’s plate.
          </p>
        </div>

        <ul className="mt-14 grid gap-10 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {solutions.map((solution) => (
            <li key={solution.name}>
              <h3 className="text-[22px] font-semibold text-ink">{solution.name}</h3>
              <p className="mt-3 text-[15px] leading-6 text-muted">
                {solution.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
