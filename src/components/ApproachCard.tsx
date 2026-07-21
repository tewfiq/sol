import {
  APPROACH_STACK_BASE,
  APPROACH_STACK_STEP,
  type ApproachCard as ApproachCardData,
} from '../data/approach';
import { ft } from '../lib/frenchType';
import { useLang } from '../lib/i18n/context';

export function ApproachCard({
  card,
  index,
}: {
  card: ApproachCardData;
  index: number;
}) {
  useLang();
  const stickyTop = APPROACH_STACK_BASE + index * APPROACH_STACK_STEP;
  const step = String(index + 1).padStart(2, '0');

  return (
    <div
      data-index={index}
      className="lg:sticky"
      style={{ top: stickyTop, zIndex: index + 1 }}
    >
      <article className="group relative flex min-h-[min(72vh,38rem)] flex-col overflow-hidden rounded-[1.75rem] bg-deep-green p-7 shadow-[0_28px_80px_-28px_rgba(0,0,0,0.65)] ring-1 ring-white/[0.06] md:min-h-[min(74vh,40rem)] md:p-10 lg:p-12">
        {/* Rim light — top edge */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.12] to-transparent"
          aria-hidden="true"
        />

        {/* Ambient glow — top-right */}
        <div
          className="pointer-events-none absolute -right-28 -top-28 h-72 w-72 rounded-full bg-primary-green/[0.07] blur-[100px]"
          aria-hidden="true"
        />

        {/* Ambient glow — bottom-left */}
        <div
          className="pointer-events-none absolute -bottom-28 -left-28 h-72 w-72 rounded-full bg-sage/[0.05] blur-[100px]"
          aria-hidden="true"
        />

        {/* Watermark step */}
        <span
          className="pointer-events-none absolute right-4 top-4 select-none text-[7rem] font-medium leading-none text-white/[0.03] md:right-6 md:top-6 md:text-[10rem] lg:text-[12rem]"
          aria-hidden="true"
        >
          {step}
        </span>

        {/* Top meta row */}
        <div className="relative flex items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/[0.08] bg-white/[0.04] px-4 py-1.5 backdrop-blur-xl">
            <span className="font-mono text-xs font-semibold tabular-nums text-sage">
              {step}
            </span>
            <span className="h-1 w-1 rounded-full bg-sage/50" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-off-white/80">
              {ft(card.title)}
            </span>
          </div>

          <span
            className="hidden text-[10px] font-medium uppercase tracking-[0.22em] text-off-white/30 sm:inline"
            aria-hidden="true"
          >
            {ft('Étape')} {index + 1}/5
          </span>
        </div>

        {/* Main content */}
        <div className="relative mt-8 flex flex-1 flex-col md:mt-10">
          <h3 className="max-w-3xl text-[1.75rem] font-medium leading-[1.12] tracking-tight text-off-white sm:text-4xl md:text-[2.65rem] md:leading-[1.08]">
            {ft(card.heading)}
          </h3>

          <div
            className="mt-6 h-px w-16 bg-gradient-to-r from-sage/60 to-primary-green/20 md:mt-8"
            aria-hidden="true"
          />

          <p className="mt-6 max-w-2xl text-base font-normal leading-[1.55] text-off-white/75 sm:text-lg md:mt-8 md:text-xl md:leading-[1.5]">
            {ft(card.description)}
          </p>

          <ul className="mt-auto flex flex-wrap gap-2 pt-8 md:pt-10">
            {card.cues.map((cue) => (
              <li
                key={cue}
                className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-3.5 py-1.5 text-xs font-medium tracking-wide text-off-white/55 transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.08] hover:text-off-white/85 md:text-[13px]"
              >
                {ft(cue)}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
}
