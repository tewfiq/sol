import { useReveal } from '../hooks/useReveal';
import { FrenchText } from './FrenchText';
import { ft } from '../lib/frenchType';

const columns = [
  {
    title: 'Exigence analytique',
    text: ft(
      'Structurer rapidement des environnements complexes, identifier les vrais points de décision et rendre les arbitrages visibles.',
    ),
  },
  {
    title: 'Crédibilité métier',
    text: ft(
      'Dialoguer avec les dirigeants, les équipes métiers, Produit et IT sans opposer stratégie, technologie et exécution.',
    ),
  },
  {
    title: 'Culture du concret',
    text: ft(
      'Tester les hypothèses avec des prototypes, des agents et des workflows intégrés aux usages réels.',
    ),
  },
];

export function MoonFitSection() {
  const { ref, visible } = useReveal<HTMLDivElement>(0.15);

  return (
    <section id="moon" className="bg-light-surface px-6 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-green">
          Pourquoi MOON
        </p>
        <h2 className="mt-4 max-w-4xl text-3xl font-normal leading-[1.15] text-ink sm:text-4xl md:text-5xl">
          {ft('Une même conviction : l’IA doit produire des ')}
          <em
            className="not-italic"
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: 'italic',
            }}
          >
            décisions
          </em>
          {ft(' et des usages concrets.')}
        </h2>
        <FrenchText
          as="p"
          className="mt-6 max-w-3xl text-base leading-relaxed text-ink/70 md:text-lg"
        >
          L’approche de MOON — analyser les processus, challenger les
          organisations, prioriser les cas d’usage et construire des solutions
          réellement utiles — correspond à la manière dont j’aborde la
          transformation IA.
        </FrenchText>

        <div
          ref={ref}
          className={`mt-12 grid grid-cols-1 gap-8 transition-all duration-700 ease-out md:mt-16 md:grid-cols-3 md:gap-10 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {columns.map((col) => (
            <div
              key={col.title}
              className="border-t border-soft-border pt-6"
            >
              <h3 className="text-lg font-medium text-ink">{col.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70 md:text-base">
                {col.text}
              </p>
            </div>
          ))}
        </div>

        <FrenchText
          as="p"
          className="mt-14 max-w-3xl border-t border-soft-border pt-8 text-sm leading-relaxed text-ink/55 md:text-base"
        >
          Je ne me positionne pas comme ingénieur ML. J’apporte une capacité
          hybride de conseil, de structuration, de prototypage et d’adoption de
          l’IA générative.
        </FrenchText>
      </div>
    </section>
  );
}
