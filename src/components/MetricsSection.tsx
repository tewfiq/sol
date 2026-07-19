import { metrics } from '../data/metrics';
import { MetricCard } from './MetricCard';
import { FrenchText } from './FrenchText';
import { ft } from '../lib/frenchType';

const bento: { featured: boolean; className: string }[] = [
  { featured: true, className: 'sm:col-span-2' },
  { featured: false, className: '' },
  { featured: false, className: '' },
  { featured: false, className: '' },
  { featured: false, className: '' },
  { featured: true, className: 'sm:col-span-2' },
  { featured: false, className: '' },
  { featured: false, className: '' },
  { featured: false, className: '' },
];

export function MetricsSection() {
  return (
    <section id="preuves" className="bg-cream px-6 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-green">
          Pratique documentée
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-normal leading-[1.15] text-ink sm:text-4xl md:text-5xl">
          {ft('Une pratique quotidienne du AI Native Design.')}
        </h2>
        <div className="mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-ink/70 md:text-lg">
          <FrenchText as="p">
            Dans un domaine qui évolue rapidement, la maîtrise ne repose pas
            uniquement sur la veille. Elle se construit par une pratique continue
            de la recherche, de la conception, du prototypage, du Design
            Engineering et de la transmission.
          </FrenchText>
          <FrenchText as="p">
            Ces indicateurs ne remplacent pas la mesure de l&apos;impact produit. Ils
            donnent un repère concret sur l&apos;intensité de pratique,
            d&apos;expérimentation et de production.
          </FrenchText>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 md:mt-16">
          {metrics.map((metric, i) => (
            <MetricCard
              key={metric.label}
              metric={metric}
              featured={bento[i]?.featured ?? false}
              className={bento[i]?.className ?? ''}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
