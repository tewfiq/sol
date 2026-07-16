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
      className={`group flex flex-col rounded-2xl p-6 transition-all duration-500 ease-out md:p-8 ${
        featured
          ? 'bg-deep-green hover:-translate-y-1.5 hover:shadow-[0_16px_48px_-8px_rgba(23,42,28,0.45)]'
          : 'border border-soft-border bg-white hover:-translate-y-1.5 hover:shadow-[0_8px_28px_-4px_rgba(23,32,24,0.1)] hover:border-primary-green/20'
      } ${visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} ${className}`}
    >
      <div
        className={`mb-6 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110 ${
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
