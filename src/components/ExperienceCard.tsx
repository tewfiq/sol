import type { Experience } from '../data/experiences';
import { useReveal } from '../hooks/useReveal';

export function ExperienceCard({ experience }: { experience: Experience }) {
  const { ref, visible } = useReveal<HTMLDivElement>(0.15);
  const isDarkLogo = experience.logoTheme === 'dark';

  return (
    <article
      ref={ref}
      className={`group flex flex-col rounded-2xl border border-soft-border bg-white transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-primary-green/20 hover:shadow-[0_8px_32px_-4px_rgba(23,32,24,0.1)] ${
        visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
      }`}
    >
      {/* Brand band — logos get real visual weight */}
      <div className="flex items-stretch gap-3 border-b border-soft-border p-5 md:gap-4 md:p-6">
        <div
          className={`flex min-h-[4.5rem] flex-1 items-center justify-start rounded-2xl px-5 py-4 md:min-h-[5.25rem] md:px-6 ${
            isDarkLogo
              ? 'bg-ink ring-1 ring-ink/10'
              : 'bg-cream ring-1 ring-soft-border'
          }`}
        >
          {experience.logo ? (
            <img
              src={experience.logo}
              alt=""
              aria-hidden="true"
              className="h-9 w-auto max-w-[min(100%,14rem)] object-contain object-left md:h-11 md:max-w-[16rem]"
              loading="lazy"
            />
          ) : (
            <div className="flex items-center gap-3">
              <span
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-green/10 text-sm font-semibold tracking-tight text-primary-green ring-1 ring-primary-green/15"
                aria-hidden="true"
              >
                C&T
              </span>
              <span className="text-sm font-medium tracking-wide text-ink/70">
                Multi-clients
              </span>
            </div>
          )}
        </div>

        {experience.period && (
          <div className="flex shrink-0 flex-col items-end justify-center rounded-2xl bg-cream/60 px-3.5 py-3 ring-1 ring-soft-border md:px-4">
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-ink/40">
              Période
            </span>
            <span className="mt-1 text-sm font-semibold tabular-nums text-primary-green md:text-base">
              {experience.period}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-6 md:p-8">
        <h3 className="text-xl font-medium leading-snug tracking-tight text-ink md:text-2xl">
          {experience.organization}
        </h3>

        {experience.role && (
          <p className="mt-2 text-sm font-medium text-primary-green md:text-[15px]">
            {experience.role}
          </p>
        )}

        {experience.clients && (
          <p className="mt-4 text-sm leading-relaxed text-ink/50">
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

        <p className="mt-auto border-t border-soft-border pt-5 text-base font-medium text-ink md:mt-8 md:text-lg">
          {experience.highlight}
        </p>
      </div>
    </article>
  );
}
