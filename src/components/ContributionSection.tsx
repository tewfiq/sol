import {
  ScanSearch,
  Target,
  ListFilter,
  Users,
  Wrench,
  GraduationCap,
  type LucideIcon,
} from 'lucide-react';
import { contributions } from '../data/contribution';
import { useReveal } from '../hooks/useReveal';
import { FrenchText } from './FrenchText';
import { ft } from '../lib/frenchType';

const iconMap: Record<string, LucideIcon> = {
  ScanSearch,
  Target,
  ListFilter,
  Users,
  Wrench,
  GraduationCap,
};

export function ContributionSection() {
  return (
    <section
      id="contribution"
      className="bg-off-white px-6 py-20 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-green">
          Contribution
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-normal leading-[1.15] text-ink sm:text-4xl md:text-5xl">
          {ft('Relier analyse, ')}
          <em
            className="not-italic"
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: 'italic',
            }}
          >
            décision
          </em>
          {ft(' et exécution.')}
        </h2>
        <FrenchText
          as="p"
          className="mt-6 max-w-2xl text-base leading-relaxed text-ink/70 md:text-lg"
        >
          Une approche hybride pour passer d’un environnement flou à une
          capacité IA compréhensible, testable et durable.
        </FrenchText>

        <div className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-soft-border bg-soft-border sm:grid-cols-2 lg:grid-cols-3 md:mt-16">
          {contributions.map((c) => (
            <Card key={c.title} contribution={c} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({
  contribution,
}: {
  contribution: (typeof contributions)[number];
}) {
  const { ref, visible } = useReveal<HTMLDivElement>(0.15);
  const Icon = iconMap[contribution.icon] ?? Target;

  return (
    <div
      ref={ref}
      className={`bg-light-surface p-7 transition-all duration-700 ease-out md:p-10 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
      }`}
    >
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cream text-primary-green ring-1 ring-soft-border">
        <Icon size={20} strokeWidth={1.5} aria-hidden="true" />
      </span>
      <h3 className="mt-6 text-lg font-medium text-ink md:text-xl">
        {contribution.title}
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-ink/70 md:text-base">
        {contribution.description}
      </p>
    </div>
  );
}
