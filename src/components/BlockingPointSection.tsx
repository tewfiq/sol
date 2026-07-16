import { useReveal } from '../hooks/useReveal';
import { FrenchText } from './FrenchText';
import { ft } from '../lib/frenchType';

const leftLines = [
  ft('Les modèles sont disponibles.'),
  ft('Les licences sont déjà là.'),
  ft('Les équipes expérimentent.'),
  ft('Les premiers POC existent.'),
  ft(
    'Mais peu de cas d’usage deviennent des systèmes intégrés au travail quotidien.',
  ),
];

export function BlockingPointSection() {
  const { ref, visible } = useReveal<HTMLDivElement>(0.2);

  return (
    <section
      id="blocking-point"
      className="relative z-10 -mt-6 rounded-t-[25px] bg-cream px-6 py-20 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-green">
          Le point de blocage
        </p>

        <h2 className="mt-4 max-w-3xl text-3xl font-normal leading-[1.15] text-ink sm:text-4xl md:text-5xl">
          {ft('Le problème n’est plus l’IA.')}
        </h2>

        <div
          ref={ref}
          className={`mt-12 grid grid-cols-1 gap-12 transition-all duration-700 ease-out md:mt-16 md:grid-cols-2 md:gap-20 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div>
            <ul className="space-y-3">
              {leftLines.map((line, i) => (
                <li
                  key={line}
                  className={`text-lg leading-relaxed md:text-xl ${
                    i === leftLines.length - 1
                      ? 'mt-6 border-t border-soft-border pt-6 text-ink'
                      : 'text-ink/70'
                  }`}
                >
                  {line}
                </li>
              ))}
            </ul>

            <FrenchText
              as="p"
              className="mt-10 max-w-md text-base leading-relaxed text-ink/70 md:text-lg"
            >
              Ce qui manque n’est pas un outil supplémentaire. C’est une lecture
              claire des métiers, des décisions, des contraintes et des
              conditions réelles de déploiement.
            </FrenchText>
          </div>

          <div className="flex flex-col justify-start">
            <p className="text-4xl font-normal leading-[1.1] text-ink sm:text-5xl md:text-6xl lg:text-7xl">
              Processus.
            </p>
            <p className="mt-2 text-4xl font-normal leading-[1.1] text-ink sm:text-5xl md:text-6xl lg:text-7xl">
              Priorisation.
            </p>
            <p className="mt-2 text-4xl font-normal leading-[1.1] text-ink sm:text-5xl md:text-6xl lg:text-7xl">
              Exécution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
