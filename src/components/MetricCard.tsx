import type { Metric } from '../data/metrics';
import { useReveal } from '../hooks/useReveal';
import { MetricBrandIcon } from './MetricIcons';

interface MetricCardProps {
  metric: Metric;
  featured?: boolean;
  className?: string;
}

export function MetricCard({ metric, featured = false, className = '' }: MetricCardProps) {
  const { ref, visible } = useReveal<HTMLDivElement>(0.15);

  return (
    <div
      ref={ref}
      className={`flex flex-col rounded-2xl p-6 transition-all duration-700 ease-out md:p-8 ${
        featured ? 'bg-deep-green' : 'border border-soft-border bg-white'
      } ${visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} ${className}`}
    >
      <div
        className={`mb-6 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
          featured ? 'bg-white/15' : 'bg-cream text-primary-green ring-1 ring-soft-border'
        }`}
      >
        <MetricBrandIcon name={metric.icon} size={18} />
      </div>
      <p
        className={`font-medium leading-none ${
          featured
            ? 'text-off-white text-4xl sm:text-5xl lg:text-[56px]'
            : 'text-ink text-3xl md:text-[38px]'
        }`}
      >
        {metric.value}
      </p>
      <p
        className={`mt-3 text-[11px] font-semibold uppercase tracking-[0.14em] ${
          featured ? 'text-sage' : 'text-ink/70'
        }`}
      >
        {metric.label}
      </p>
      <p
        className={`mt-1.5 text-sm leading-relaxed ${
          featured ? 'text-off-white/55' : 'text-ink/45'
        }`}
      >
        {metric.caption}
      </p>
    </div>
  );
}
