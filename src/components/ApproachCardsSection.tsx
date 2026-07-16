import { useRef } from 'react';
import { approachCards, approachNav } from '../data/approach';
import { ApproachCard } from './ApproachCard';
import { useActiveSection } from '../hooks/useActiveSection';

const sectionBackground =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260709_082449_46df5cc4-ad98-4541-9236-a2659c1478a4.png&w=1920&q=85';

export function ApproachCardsSection() {
  const { ref, activeIndex } = useActiveSection<HTMLDivElement>(0.6);
  const cardsRef = useRef<HTMLDivElement>(null);

  const handleNavClick = (index: number) => {
    const container = cardsRef.current;
    if (!container) return;
    const card = container.querySelector<HTMLElement>(`[data-index="${index}"]`);
    card?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const handleCta = () => {
    document
      .querySelector('#contact')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="approche"
      className="relative overflow-hidden bg-deep-green"
    >
      <div
        className="absolute inset-0 -z-10 bg-cover bg-fixed bg-center"
        style={{ backgroundImage: `url(${sectionBackground})` }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 -z-10 bg-deep-green/80"
        aria-hidden="true"
      />

      <div className="px-5 py-20 md:px-10 md:py-32 lg:px-16 lg:py-40">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 lg:grid-cols-[440px_1fr] lg:gap-24 xl:grid-cols-[480px_1fr] xl:gap-48">
          <div className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:flex-col lg:justify-between lg:py-32">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
                De l’ambiguïté à l’usage
              </p>
              <h2 className="mt-4 text-2xl font-normal leading-[1.2] text-off-white sm:text-3xl lg:text-[42px]">
                Construire une capacité opérationnelle, pas une démonstration.
              </h2>

              <nav
                aria-label="Navigation de l’approche"
                className="mt-10 hidden lg:block"
              >
                <ul className="space-y-2">
                  {approachNav.map((label, i) => (
                    <li key={label}>
                      <button
                        type="button"
                        onClick={() => handleNavClick(i)}
                        className={`w-full rounded-xl bg-black/20 px-4 py-3 text-left text-sm font-medium transition-colors ${
                          activeIndex === i
                            ? 'text-off-white'
                            : 'text-off-white/40 hover:text-off-white/70'
                        }`}
                      >
                        {String(i + 1).padStart(2, '0')} — {label}
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="mt-10 hidden lg:block">
              <p className="text-sm text-off-white/70">
                Pas de démonstration artificielle. Partons d’un processus réel.
              </p>
              <button
                type="button"
                onClick={handleCta}
                className="mt-5 rounded-xl bg-off-white px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-off-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Parler d’un contexte
              </button>
            </div>
          </div>

          <div ref={cardsRef} className="flex flex-col gap-8">
            <div className="lg:hidden">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
                De l’ambiguïté à l’usage
              </p>
              <h2 className="mt-3 text-2xl font-normal leading-[1.2] text-off-white sm:text-3xl">
                Construire une capacité opérationnelle, pas une démonstration.
              </h2>
            </div>
            <div ref={ref} className="flex flex-col gap-8">
              {approachCards.map((card, i) => (
                <ApproachCard key={card.title} card={card} index={i} />
              ))}
            </div>
            <div className="lg:hidden">
              <button
                type="button"
                onClick={handleCta}
                className="rounded-xl bg-off-white px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-off-white/90"
              >
                Parler d’un contexte
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
