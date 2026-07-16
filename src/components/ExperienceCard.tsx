import type { Experience } from '../data/experiences';
import { useReveal } from '../hooks/useReveal';

export function ExperienceCard({ experience }: { experience: Experience }) {
  const { ref, visible } = useReveal<HTMLDivElement>(0.15);

  return (
    <article
      ref={ref}
      className={`rounded-2xl border border-soft-border bg-white p-6 transition-all duration-700 ease-out md:p-10 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      {experience.logo && (
        <img
          src={experience.logo}
          alt={experience.organization}
          className="mb-5 h-7 w-auto"
          loading="lazy"
        />
      )}
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
        <h3 className="text-xl font-medium text-ink md:text-2xl">
          {experience.organization}
        </h3>
        {experience.period && (
          <span className="text-sm font-medium uppercase tracking-wider text-primary-green">
            {experience.period}
          </span>
        )}
      </div>
      <p className="mt-1 text-sm font-medium text-primary-green">{experience.role}</p>

      {experience.clients && (
        <p className="mt-4 text-sm leading-relaxed text-ink/60">
          {experience.clients}
        </p>
      )}

      <ul className="mt-6 space-y-2.5">
        {experience.content.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-sm leading-relaxed text-ink/70 md:text-base"
          >
            <span
              aria-hidden="true"
              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary-green"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <p className="mt-6 border-t border-soft-border pt-5 text-base font-medium text-ink md:text-lg">
        {experience.highlight}
      </p>
    </article>
  );
}
