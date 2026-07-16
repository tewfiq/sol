import type { ApproachCard } from '../data/approach';
import { useReveal } from '../hooks/useReveal';

export function ApproachCard({
  card,
  index,
}: {
  card: ApproachCard;
  index: number;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>(0.15);

  return (
    <article
      ref={ref}
      data-index={index}
      className={`min-h-[60vh] rounded-3xl border border-white/10 bg-black/25 p-6 backdrop-blur-md transition-all duration-700 ease-out md:min-h-[70vh] md:p-10 ${
        visible ? 'translate-x-0 opacity-100' : 'translate-x-16 opacity-0'
      }`}
    >
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
        {String(index + 1).padStart(2, '0')} — {card.title}
      </p>
      <h3 className="mt-4 text-2xl font-normal leading-[1.2] text-off-white md:text-3xl">
        {card.heading}
      </h3>
      <p className="mt-6 text-sm leading-relaxed text-off-white/70 md:text-base">
        {card.description}
      </p>
    </article>
  );
}
