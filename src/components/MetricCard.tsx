import type { Metric } from '../data/metrics';
import { useReveal } from '../hooks/useReveal';
import { MetricBrandIcon } from './MetricIcons';
import { ft } from '../lib/frenchType';
import { useLang } from '../lib/i18n/context';

interface MetricCardProps {
  metric: Metric;
  featured?: boolean;
  className?: string;
}

export function MetricCard({ metric, featured = false, className = '' }: MetricCardProps) {
  useLang();
  const { ref, visible } = useReveal<HTMLDivElement>(0.15);

  return (
    <div
      ref={ref}
      className={`group flex flex-col rounded-2xl p-6 md:p-8 md:transition-all md:duration-500 md:ease-out ${
        featured
          ? 'bg-deep-green ring-1 ring-white/[0.06] md:hover:-translate-y-1.5 md:hover:shadow-[0_20px_56px_-12px_rgba(23,42,28,0.5)]'
          : 'border border-soft-border bg-gradient-to-br from-cream/50 to-white md:hover:-translate-y-1.5 md:hover:border-primary-green/20 md:hover:shadow-[0_8px_32px_-4px_rgba(23,32,24,0.1)]'
      } ${visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'} ${className}`}
    >
      {featured && (
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.1] to-transparent"
          aria-hidden="true"
        />
      )}

      <div
        className={`mb-5 flex h-11 w-11 shrink-0 items-center justify-center rounded-xl md:transition-all md:duration-300 md:group-hover:scale-110 ${
          featured
            ? 'bg-white/[0.07] text-sage ring-1 ring-white/[0.08]'
            : 'bg-cream text-primary-green ring-1 ring-soft-border'
        }`}
      >
        <MetricBrandIcon name={metric.icon} size={featured ? 20 : 18} />
      </div>

      <p
        className={`font-semibold leading-none tracking-tight ${
          featured
            ? 'text-off-white text-4xl sm:text-5xl lg:text-[56px]'
            : 'text-ink text-3xl md:text-[38px]'
        }`}
      >
        {ft(metric.value)}
      </p>

      <p
        className={`mt-3 text-[11px] font-semibold uppercase tracking-[0.15em] ${
          featured ? 'text-sage' : 'text-ink/70'
        }`}
      >
        {ft(metric.label)}
      </p>

      {metric.caption && (
        <p
          className={`mt-2 text-sm leading-relaxed ${
            featured ? 'text-off-white/45' : 'text-ink/50'
          }`}
        >
          {metric.caption}
        </p>
      )}
    </div>
  );
}
