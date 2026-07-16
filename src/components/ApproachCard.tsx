import {
  APPROACH_STACK_BASE,
  APPROACH_STACK_STEP,
  type ApproachCard as ApproachCardData,
} from '../data/approach';

export function ApproachCard({
  card,
  index,
}: {
  card: ApproachCardData;
  index: number;
}) {
  const stickyTop = APPROACH_STACK_BASE + index * APPROACH_STACK_STEP;
  const step = String(index + 1).padStart(2, '0');

  return (
    <div
      data-index={index}
      className="sticky"
      style={{
        top: stickyTop,
        zIndex: index + 1,
      }}
    >
      <article className="relative flex min-h-[min(72vh,38rem)] flex-col overflow-hidden rounded-[1.75rem] border border-white/[0.14] bg-gradient-to-br from-[#1e3524] via-deep-green to-[#0f1c13] p-7 shadow-[0_28px_80px_-28px_rgba(0,0,0,0.65)] md:min-h-[min(74vh,40rem)] md:p-10 lg:p-12">
        {/* Ambient glow */}
        <div
          className="pointer-events-none absolute -right-16 -top-20 h-64 w-64 rounded-full bg-primary-green/25 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -bottom-24 -left-12 h-56 w-56 rounded-full bg-sage/10 blur-3xl"
          aria-hidden="true"
        />

        {/* Giant watermark step */}
        <span
          className="pointer-events-none absolute -right-2 top-4 select-none font-serif text-[9rem] leading-none text-white/[0.04] md:top-2 md:text-[12rem] lg:text-[14rem]"
          aria-hidden="true"
        >
          {step}
        </span>

        {/* Top meta row */}
        <div className="relative flex items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2.5 rounded-xl border border-sage/30 bg-black/25 px-3.5 py-1.5 backdrop-blur-sm">
            <span className="font-mono text-xs font-semibold tabular-nums text-sage">
              {step}
            </span>
            <span className="h-1 w-1 rounded-full bg-sage/60" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-off-white/90">
              {card.title}
            </span>
          </div>

          <span
            className="hidden text-[10px] font-medium uppercase tracking-[0.22em] text-off-white/35 sm:inline"
            aria-hidden="true"
          >
            Étape {index + 1}/5
          </span>
        </div>

        {/* Main content — dense, top-aligned, no dead space */}
        <div className="relative mt-8 flex flex-1 flex-col md:mt-10">
          <h3 className="max-w-2xl text-[1.75rem] font-medium leading-[1.12] tracking-tight text-off-white sm:text-4xl md:text-[2.65rem] md:leading-[1.08]">
            {card.heading}
          </h3>

          {/* Accent rule */}
          <div
            className="mt-6 h-1 w-14 rounded-full bg-gradient-to-r from-sage to-primary-green md:mt-8"
            aria-hidden="true"
          />

          <p className="mt-6 max-w-2xl text-base font-normal leading-[1.55] text-off-white/85 sm:text-lg md:mt-8 md:text-xl md:leading-[1.5]">
            {card.description}
          </p>

          {/* Cue chips */}
          <ul className="mt-auto flex flex-wrap gap-2 pt-8 md:pt-10">
            {card.cues.map((cue) => (
              <li
                key={cue}
                className="rounded-lg border border-white/12 bg-white/[0.06] px-3.5 py-1.5 text-xs font-medium tracking-wide text-off-white/80 backdrop-blur-sm md:text-[13px]"
              >
                {cue}
              </li>
            ))}
          </ul>
        </div>
      </article>
    </div>
  );
}
