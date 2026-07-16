import { useReveal } from '../hooks/useReveal';
import { FrenchText } from './FrenchText';
import { ft } from '../lib/frenchType';

const organizations = [
  'ECV Paris',
  'Digital College',
  'EDC Paris Business School',
  'Ascencia',
  'École Conte',
];

const topics = [
  'IA générative',
  'Prompt Engineering',
  'Agents IA',
  'Product Discovery',
  'Product Design',
  'Automatisation',
  'Prototypage',
  'Innovation',
  'Workshops',
  'Mentorat',
];

export function TeachingSection() {
  const { ref, visible } = useReveal<HTMLDivElement>(0.15);

  return (
    <section id="teaching" className="bg-cream px-6 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-green">
          Transmission
        </p>
        <h2 className="mt-4 max-w-3xl whitespace-pre-line text-3xl font-normal leading-[1.15] text-ink sm:text-4xl md:text-5xl">
          {ft('Construire, documenter,\ntransmettre.')}
        </h2>
        <FrenchText
          as="p"
          className="mt-6 max-w-2xl text-base leading-relaxed text-ink/70 md:text-lg"
        >
          Depuis 2023, j’enseigne l’IA générative, le Product Design,
          l’automatisation et les méthodes d’innovation auprès d’étudiants en
          Bachelor, Master et MBA.
        </FrenchText>

        <div
          ref={ref}
          className={`mt-12 grid grid-cols-1 gap-10 transition-all duration-700 ease-out md:mt-16 md:grid-cols-2 md:gap-16 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/50">
              Établissements
            </p>
            <ul className="mt-5 space-y-3">
              {organizations.map((org) => (
                <li
                  key={org}
                  className="flex items-baseline gap-3 text-base text-ink md:text-lg"
                >
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary-green"
                  />
                  {org}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/50">
              Sujets enseignés
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {topics.map((topic) => (
                <span
                  key={topic}
                  className="rounded-xl border border-soft-border bg-light-surface px-3.5 py-1.5 text-sm font-medium text-ink"
                >
                  {topic}
                </span>
              ))}
            </div>

            <div className="mt-10 rounded-2xl bg-deep-green p-7 md:p-9">
              <p className="text-4xl font-medium text-off-white md:text-5xl">
                1 500+
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-sage">
                {ft('personnes formées')}
              </p>
              <FrenchText
                as="p"
                className="mt-4 text-sm leading-relaxed text-off-white/70"
              >
                Vulgariser sans appauvrir, structurer sans rigidifier et
                transmettre des méthodes directement applicables.
              </FrenchText>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
