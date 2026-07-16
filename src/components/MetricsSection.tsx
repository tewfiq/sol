import { metrics } from '../data/metrics';
import { MetricCard } from './MetricCard';
import { FrenchText } from './FrenchText';
import { ft } from '../lib/frenchType';

export function MetricsSection() {
  return (
    <section id="preuves" className="bg-cream px-6 py-20 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-green">
          Pratique documentée
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-normal leading-[1.15] text-ink sm:text-4xl md:text-5xl">
          {ft('Une expertise mesurée par l’usage.')}
        </h2>
        <div className="mt-8 max-w-2xl space-y-4 text-base leading-relaxed text-ink/70 md:text-lg">
          <FrenchText as="p">
            Dans un domaine où les repères restent encore limités, ces
            indicateurs documentent une pratique quotidienne de l’IA générative,
            du prototypage rapide, de l’expérimentation et de la transmission.
          </FrenchText>
          <FrenchText as="p">
            Ils ne remplacent pas la mesure d’impact métier. Ils donnent un
            repère concret sur l’intensité de pratique.
          </FrenchText>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-10 gap-y-0 sm:grid-cols-2 lg:grid-cols-3 md:mt-16">
          {metrics.map((metric) => (
            <MetricCard key={metric.label} metric={metric} />
          ))}
        </div>
      </div>
    </section>
  );
}
