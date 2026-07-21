import type { Experience } from '../data/experiences';
import { useReveal } from '../hooks/useReveal';
import { ft } from '../lib/frenchType';
import { useLang } from '../lib/i18n/context';

export function ExperienceCard({ experience }: { experience: Experience }) {
  useLang();
  const { ref, visible } = useReveal<HTMLDivElement>(0.15);
  const isDarkLogo = experience.logoTheme === 'dark';

  return (
    <article
      ref={ref}
      className={`group flex flex-col rounded-[1.75rem] border border-soft-border/60 bg-white shadow-sm md:transition-all md:duration-500 md:ease-out md:hover:-translate-y-1 md:hover:shadow-[0_16px_48px_-12px_rgba(15,30,46,0.1)] ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      {/* Rim light */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"
        aria-hidden="true"
      />

      {/* Logo + période */}
      <div className="flex items-start justify-between gap-4 px-6 pt-6 md:px-8 md:pt-8">
        {experience.logo ? (
          <div
            className={`flex items-center justify-center rounded-xl px-4 py-2.5 ${
              isDarkLogo
                ? 'bg-ink ring-1 ring-ink/10'
                : 'bg-cream ring-1 ring-soft-border'
            }`}
          >
            <img
              src={experience.logo}
              alt=""
              aria-hidden="true"
              className="h-7 w-auto max-w-[8rem] object-contain md:h-8 md:max-w-[10rem]"
            />
          </div>
        ) : (
          <div className="flex items-center gap-2.5">
            <span
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary-green/10 text-xs font-semibold tracking-tight text-primary-green ring-1 ring-primary-green/15"
              aria-hidden="true"
            >
              C&T
            </span>
            <span className="text-xs font-medium tracking-wide text-ink/50">
              {ft('Multi-clients')}
            </span>
          </div>
        )}

        {experience.period && (
          <span className="inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-cream/70 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.1em] text-ink/50 ring-1 ring-soft-border/60">
            <span
              className="h-1 w-1 rounded-full bg-primary-green/40"
              aria-hidden="true"
            />
            {ft(experience.period)}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col px-6 pb-6 pt-5 md:px-8 md:pb-8 md:pt-6">
        <h3 className="text-xl font-medium leading-snug tracking-tight text-ink md:text-2xl">
          {experience.organization}
        </h3>

        {experience.role && (
          <p className="mt-1.5 text-sm font-medium text-primary-green md:text-[15px]">
            {ft(experience.role)}
          </p>
        )}

        {experience.clients && (
          <p className="mt-3 text-xs leading-relaxed text-ink/40">
            {experience.clients}
          </p>
        )}

        <ul className="mt-5 space-y-2">
          {experience.content.map((item) => (
            <li
              key={item}
              className="flex gap-3 text-sm leading-relaxed text-ink/70 md:text-base"
            >
              <span
                aria-hidden="true"
                className="mt-[7px] h-0.5 w-0.5 shrink-0 rounded-full bg-primary-green/50"
              />
              <span>{ft(item)}</span>
            </li>
          ))}
        </ul>

        {/* Highlight traité en citation */}
        <div className="relative mt-auto pl-4 pt-6 md:pl-5">
          <div
            className="absolute bottom-0 left-0 top-0 w-px bg-gradient-to-b from-primary-green/30 via-primary-green/15 to-transparent"
            aria-hidden="true"
          />
          <p className="text-sm leading-relaxed text-ink/60 italic md:text-[15px]">
            {ft(experience.highlight)}
          </p>
        </div>
      </div>
    </article>
  );
}
