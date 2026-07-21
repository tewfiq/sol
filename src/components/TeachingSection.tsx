import { useReveal } from '../hooks/useReveal';
import { FrenchText } from './FrenchText';
import { ft } from '../lib/frenchType';
import { useLang } from '../lib/i18n/context';

const topics = [
  'Product Design',
  'UX Research',
  'Design Systems',
  'Figma',
  'Prompt Engineering',
  'Design Engineering',
  'Prototypage',
];

const slides = [
  { src: '/images/classroom_mba_2025.webp', alt: 'Cours MBA 2025' },
  { src: '/images/AI_product_buildong_masterclass.jpg', alt: 'Masterclass IA Product Building' },
  { src: '/images/Brainstorming_with_team.webp', alt: 'Brainstorming en équipe' },
  { src: '/images/at_bnl_bnpp_roma.webp', alt: 'Intervention BNL BNPP Rome' },
  { src: '/images/designsprint2.0_with_Le_Laptop.webp', alt: 'Design Sprint 2.0 avec Le Laptop' },
  { src: '/images/vibecoding_classroom.jpg', alt: 'Vibe Coding en classe' },
  { src: '/images/customer_journey_at_hachettelivres.jpeg', alt: 'Customer Journey Hachette Livres' },
  { src: '/images/me_at_belgium_bank.webp', alt: 'Intervention banque Belgique' },
  { src: '/images/vivatech2024_with_dimum.webp', alt: 'VivaTech 2024 avec la DINUM' },
  { src: '/images/mba_school_2025.png', alt: 'MBA 2025' },
  { src: '/images/photocall_at_la_dinum.webp', alt: 'Photocall à la DINUM' },
  { src: '/images/mobile_brainstorm.webp', alt: 'Brainstorming mobile' },
  { src: '/images/CJ_at_Philipmorris.jpeg', alt: 'Customer Journey chez Philip Morris' },
  { src: '/images/met_at_la_dinum.webp', alt: 'Rencontre à la DINUM' },
  { src: '/images/velvetconsulting_office.jpeg', alt: 'Bureau Velvet Consulting' },
];

export function TeachingSection() {
  useLang();
  const { ref, visible } = useReveal<HTMLDivElement>(0.15);

  return (
    <section id="transmission" className="overflow-hidden bg-cream py-20 md:py-32">
      {/* Header */}
      <div className="mx-auto max-w-6xl px-6 md:px-10">
        <h2 className="mt-4 max-w-3xl whitespace-pre-line text-3xl font-normal leading-[1.15] text-ink sm:text-4xl md:text-5xl">
          {ft('Construire. Partager.\nFaire grandir.')}
        </h2>
        <FrenchText
          as="p"
          className="mt-6 max-w-2xl text-base leading-relaxed text-ink/70 md:text-lg"
        >
          Depuis 2023, j&apos;enseigne le Product Design,
          l&apos;AI Native Design et l&apos;IA générative
          auprès d&apos;étudiants en Bachelor, Master et MBA.
        </FrenchText>
      </div>

      {/* Slideshow */}
      <div className="mx-auto mt-12 max-w-6xl overflow-hidden px-6 md:mt-16 md:px-10">
        <div
          className="flex gap-3 hover:[animation-play-state:paused]"
          style={{
            animation: 'marquee 90s linear infinite',
            width: 'max-content',
          }}
          aria-hidden="true"
        >
          {[...slides, ...slides].map((slide, i) => (
            <div
              key={i}
              className="h-64 w-[340px] shrink-0 overflow-hidden rounded-2xl sm:h-72 sm:w-[400px]"
            >
              <img
                src={slide.src}
                alt={slide.alt}
                className="h-full w-full object-cover"
                loading="lazy"
                draggable="false"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Content grid */}
      <div
        ref={ref}
        className={`mx-auto mt-12 max-w-6xl px-6 md:mt-16 md:px-10 md:transition-all md:duration-700 md:ease-out ${
          visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ink/50">
              {ft('Établissements')}
            </p>
            <img
              src="/partners/schools-light.webp"
              alt={ft("ECV Paris, Digital College, EDC Paris Business School, Ascencia, École Conte")}
              className="mt-5 w-full"
              loading="lazy"
            />

            <p className="mt-10 text-xs font-semibold uppercase tracking-[0.18em] text-ink/50">
              {ft('Sujets enseignés')}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {topics.map((topic) => (
                <span
                  key={topic}
                  className="rounded-xl border border-soft-border bg-light-surface px-3.5 py-1.5 text-sm font-medium text-ink"
                >
                  {ft(topic)}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-between gap-8">
            <div className="rounded-2xl bg-deep-green p-7 md:p-9">
              <p className="text-4xl font-medium text-off-white md:text-5xl">
                1 500+
              </p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-sage">
                {ft('personnes formées')}
              </p>
              <FrenchText
                as="p"
                className="mt-4 text-sm leading-relaxed text-off-white/70"
              >
                Vulgariser sans appauvrir, structurer sans rigidifier et
                transmettre des méthodes directement applicables.
              </FrenchText>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
