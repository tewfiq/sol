import { useReveal } from '../hooks/useReveal';
import { FrenchText } from './FrenchText';
import { ft } from '../lib/frenchType';

const degrees = [
  {
    title: 'DEA E-Management & TIC',
    school: 'Université Paris Dauphine',
  },
  {
    title: 'Maîtrise Économie Internationale',
    school: 'Université Paris I Panthéon-Sorbonne',
  },
  {
    title: 'Licence Économétrie',
    school: 'Université Paris I Panthéon-Sorbonne',
  },
];

const training = ['Design Sprint 2.0 — Le Laptop', 'Design Thinking — Thiga'];

export function EducationSection() {
  const { ref, visible } = useReveal<HTMLDivElement>(0.15);

  return (
    <section id="formation" className="bg-off-white px-6 py-20 md:px-10 md:py-28">
      <div className="mx-auto max-w-6xl">
        <h2 className="mt-4 max-w-3xl text-3xl font-normal leading-[1.15] text-ink sm:text-4xl md:text-5xl">
          {ft('Analyse, management et conception.')}
        </h2>

        <div
          ref={ref}
          className={`mt-8 grid grid-cols-1 gap-10 transition-all duration-700 ease-out md:mt-12 md:grid-cols-[1.4fr_1fr] md:gap-16 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <div className="space-y-8">
            {degrees.map((d) => (
              <div
                key={d.title}
                className="border-t border-soft-border pt-5"
              >
                  <h3 className="text-xl font-medium text-ink md:text-2xl">
                    {ft(d.title)}
                  </h3>
                <p className="mt-1 text-sm text-ink/50 md:text-base">{d.school}</p>
              </div>
            ))}
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/50">
              {ft('Formation professionnelle')}
            </p>
            <ul className="mt-5 space-y-3">
              {training.map((t) => (
                <li
                  key={t}
                  className="flex items-baseline gap-3 text-base text-ink md:text-lg"
                >
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary-green"
                  />
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <FrenchText
          as="p"
          className="mt-12 max-w-2xl text-base leading-relaxed text-ink/70 md:text-lg"
        >
          Un parcours combinant économie, analyse quantitative, management
          numérique et conception de produits — enrichi par plus de douze ans de
          pratique du Product Design et de l&apos;IA générative.
        </FrenchText>
      </div>
    </section>
  );
}
