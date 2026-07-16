import type { Experience } from '../data/experiences';
import { useReveal } from '../hooks/useReveal';

export function ExperienceCard({ experience }: { experience: Experience }) {
  const { ref, visible } = useReveal<HTMLDivElement>(0.15);

  return (
    <article
      ref={ref}
      className={`rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-sm transition-all duration-700 ease-out md:p-10 ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      {experience.logo && (
        <img
          src={experience.logo}
          alt={experience.organization}
          className="mb-5 h-7 w-auto opacity-80"
          loading="lazy"
        />
      )}
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-2">
        <h3 className="text-xl font-medium text-off-white md:text-2xl">
          {experience.organization}
        </h3>
        {experience.period && (
          <span className="text-sm font-medium uppercase tracking-wider text-sage">
            {experience.period}
          </span>
        )}
      </div>
      <p className="mt-1 text-sm font-medium text-sage">{experience.role}</p>

      {experience.clients && (
        <p className="mt-4 text-sm leading-relaxed text-off-white/60">
          {experience.clients}
        </p>
      )}

      <ul className="mt-6 space-y-2.5">
        {experience.content.map((item) => (
          <li
            key={item}
            className="flex gap-3 text-sm leading-relaxed text-off-white/80 md:text-base"
          >
            <span
              aria-hidden="true"
              className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sage"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <p className="mt-6 border-t border-white/10 pt-5 text-base font-medium text-off-white md:text-lg">
        {experience.highlight}
      </p>
    </article>
  );
}
