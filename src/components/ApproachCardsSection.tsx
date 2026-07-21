import { useEffect, useRef, useState } from 'react';
import {
  APPROACH_STACK_BASE,
  APPROACH_STACK_STEP,
  approachCards,
  approachNav,
} from '../data/approach';
import { ft } from '../lib/frenchType';
import { ApproachCard } from './ApproachCard';
import { FrenchText } from './FrenchText';
import { useLang } from '../lib/i18n/context';

const sectionBackground =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260709_082449_46df5cc4-ad98-4541-9236-a2659c1478a4.png&w=1920&q=85';

export function ApproachCardsSection() {
  useLang();
  const cardsRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Active nav item = card currently resting at the sticky stack line
  // Only runs on lg+ where sticky cards are active
  useEffect(() => {
    if (!window.matchMedia('(min-width: 1024px)').matches) return;

    const container = cardsRef.current;
    if (!container) return;

    const cards = Array.from(
      container.querySelectorAll<HTMLElement>('[data-index]'),
    );
    if (cards.length === 0) return;

    let frame = 0;

    const update = () => {
      frame = 0;
      let next = 0;

      for (const card of cards) {
        const index = Number(card.dataset.index ?? 0);
        const stickyLine = APPROACH_STACK_BASE + index * APPROACH_STACK_STEP;
        if (card.getBoundingClientRect().top <= stickyLine + 8) {
          next = index;
        }
      }

      setActiveIndex((prev) => (prev === next ? prev : next));
    };

    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  const handleNavClick = (index: number) => {
    const container = cardsRef.current;
    if (!container) return;
    const card = container.querySelector<HTMLElement>(`[data-index="${index}"]`);
    if (!card) return;

    const top = card.getBoundingClientRect().top + window.scrollY;
    const offset = APPROACH_STACK_BASE + index * APPROACH_STACK_STEP;
    window.scrollTo({ top: Math.max(0, top - offset), behavior: 'smooth' });
  };

  const handleCta = () => {
    document
      .querySelector('#contact')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="methode" className="relative overflow-clip bg-deep-green">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-scroll bg-center lg:bg-fixed"
        style={{ backgroundImage: `url(${sectionBackground})` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-deep-green/80"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10 md:py-28 lg:py-0">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[minmax(0,22rem)_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[minmax(0,26rem)_minmax(0,1fr)] xl:gap-24">
          {/* Left rail — locked to the section viewport */}
          <aside className="lg:sticky lg:top-0 lg:flex lg:h-svh lg:flex-col lg:justify-between lg:py-28">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
                {ft('La méthode')}
              </p>
              <h2 className="mt-4 whitespace-pre-line text-2xl font-normal leading-[1.2] text-off-white sm:text-3xl lg:text-[2.5rem] lg:leading-[1.15]">
                {ft(
                  'Du besoin réel\nau produit utilisé.',
                )}
              </h2>
              <FrenchText
                as="p"
                className="mt-5 max-w-xs text-sm leading-relaxed text-off-white/70"
              >
                Je rejoins les équipes Produit pour transformer besoins utilisateurs,
                enjeux métiers et possibilités technologiques en expériences
                testables, accessibles et déployables.
              </FrenchText>

              <nav
                aria-label={ft("Navigation de l'approche")}
                className="mt-10 hidden lg:block"
              >
                <ul className="space-y-1.5">
                  {approachNav.map((label, i) => {
                    const active = activeIndex === i;
                    return (
                      <li key={label}>
                        <button
                          type="button"
                          onClick={() => handleNavClick(i)}
                          aria-current={active ? 'true' : undefined}
                          className={`group flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-medium transition-colors duration-300 ${
                            active
                              ? 'bg-black/25 text-off-white'
                              : 'text-off-white/40 hover:bg-black/15 hover:text-off-white/70'
                          }`}
                        >
                          <span
                            className={`tabular-nums transition-colors duration-300 ${
                              active ? 'text-sage' : 'text-off-white/30'
                            }`}
                          >
                            {String(i + 1).padStart(2, '0')}
                          </span>
                          <span
                            className={`h-px shrink-0 transition-all duration-300 ${
                              active
                                ? 'w-5 bg-sage'
                                : 'w-3 bg-off-white/20 group-hover:bg-off-white/40'
                            }`}
                            aria-hidden="true"
                          />
                          <span>{ft(label)}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            </div>

            <div className="mt-10 hidden lg:block">
              <FrenchText
                as="p"
                className="max-w-xs text-sm leading-relaxed text-off-white/70"
              >
                Partons d&apos;un besoin, d&apos;un parcours ou d&apos;un produit réel.
              </FrenchText>
              <button
                type="button"
                onClick={handleCta}
                className="mt-5 rounded-2xl bg-off-white px-5 py-2.5 text-sm font-medium text-ink transition-colors duration-300 hover:bg-off-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {ft('Parler d\u2019un contexte')}
              </button>
            </div>
          </aside>

          {/* Stack viewport — each card sticks and covers the previous */}
          <div
            ref={cardsRef}
            className="relative flex flex-col gap-5 pb-6 md:gap-6 lg:gap-8 lg:pb-36 lg:pt-28"
          >
            {approachCards.map((card, i) => (
              <ApproachCard key={card.title} card={card} index={i} />
            ))}

            <div className="pt-2 lg:hidden">
              <button
                type="button"
                onClick={handleCta}
                className="rounded-2xl bg-off-white px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-off-white/90"
              >
                {ft('Parler d\u2019un contexte')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
