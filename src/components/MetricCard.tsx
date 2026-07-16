import type { Metric } from '../data/metrics';
import { useReveal } from '../hooks/useReveal';

export function MetricCard({ metric }: { metric: Metric }) {
  const { ref, visible } = useReveal<HTMLDivElement>(0.2);

  return (
    <div
      ref={ref}
      className={`border-t border-soft-border py-6 transition-all duration-700 ease-out ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
      }`}
    >
      <p className="text-3xl font-medium text-ink sm:text-4xl lg:text-[44px]">
        {metric.value}
      </p>
      <p className="mt-2 text-sm font-semibold uppercase tracking-wide text-ink">
        {metric.label}
      </p>
      <p className="mt-1 text-sm text-ink/60">{metric.caption}</p>
    </div>
  );
}
