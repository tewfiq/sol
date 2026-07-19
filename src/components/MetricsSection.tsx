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
        <FrenchText
          as="p"
          className="mt-6 max-w-2xl text-base leading-relaxed text-ink/70 md:text-lg"
        >
          Recherche, conception, prototypage, expérimentation et transmission.
        </FrenchText>

        <div className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 md:mt-16">
          {metrics.map((metric, i) => (
            <MetricCard
              key={metric.label}
              metric={metric}
              featured={bento[i]?.featured ?? false}
              className={bento[i]?.className ?? ''}
            />
          ))}
        </div>

        <div className="mt-10 border-t border-soft-border pt-6">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/50">
            Pratique courante
          </p>
          <FrenchText
            as="p"
            className="mt-3 text-sm leading-relaxed text-ink/60 md:text-base"
          >
            Figma · Claude · ChatGPT · Gemini · Figma Make · Google Stitch · Cursor · Codex · MCP Figma
          </FrenchText>
        </div>
      </div>
    </section>
  );
}
