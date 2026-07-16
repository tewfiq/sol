import { FrenchText } from './FrenchText';
import { ft } from '../lib/frenchType';

const heroVideo =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260711_090308_1dd0cea7-f9ba-4db4-8147-c7d746061c9e.mp4';

const heroPills = ['Paris & hybride', 'Disponible rapidement', 'Français · Anglais'];

export function HeroSection() {
  const handleCta = () => {
    document
      .querySelector('#approche')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="top"
      className="relative h-screen overflow-hidden bg-deep-green"
    >
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster=""
        aria-hidden="true"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/25" aria-hidden="true" />

      <div className="relative z-10 flex h-full flex-col justify-end px-6 pb-12 md:px-10 md:pb-16">
        <div className="mx-auto w-full max-w-6xl text-left">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-off-white/80 sm:text-xs">
            AI Strategy · Process · Execution
          </p>

          <h1 className="mt-5 max-w-4xl text-4xl font-normal leading-[1.1] tracking-tight text-off-white sm:text-6xl md:text-7xl lg:text-[88px]">
            <span className="block">{ft('L’IA est disponible.')}</span>
            <span className="block">
              {ft('La ')}
              <em
                className="not-italic"
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: 'italic',
                }}
              >
                valeur
              </em>
              {ft(' reste à construire.')}
            </span>
          </h1>

          <FrenchText
            as="p"
            className="mt-6 max-w-xl text-sm font-medium text-off-white/80 md:text-base"
          >
            J’aide les directions à comprendre leurs processus, prioriser les
            cas d’usage IA et construire des capacités réellement utilisables
            par les équipes.
          </FrenchText>

          <div className="mt-8 flex flex-col items-start gap-3 sm:gap-4">
            <div className="flex flex-wrap items-center justify-start gap-1.5 sm:gap-2">
              {heroPills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-lg border border-white/20 bg-black/20 px-2.5 py-1 text-[11px] font-medium text-off-white/90 backdrop-blur-sm sm:px-3.5 sm:py-1.5 sm:text-xs"
                >
                  {pill}
                </span>
              ))}
            </div>

            <div className="flex w-full flex-col items-start sm:w-auto sm:flex-row sm:items-center sm:gap-2 sm:rounded-2xl sm:bg-black/25 sm:p-1.5 sm:pl-5 sm:backdrop-blur-md">
              <FrenchText
                as="p"
                className="mb-2 text-left text-xs font-medium text-off-white/75 sm:mb-0 sm:hidden"
              >
                De l’analyse à l’usage opérationnel.
              </FrenchText>
              <FrenchText
                as="p"
                className="hidden text-sm font-medium text-off-white sm:block"
              >
                Audit, cadrage, agents IA, POC et adoption opérationnelle.
              </FrenchText>
              <button
                type="button"
                onClick={handleCta}
                className="whitespace-nowrap rounded-2xl bg-off-white px-4 py-2.5 text-xs font-medium text-ink transition-colors hover:bg-off-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:px-5 sm:text-sm"
              >
                <span className="sm:hidden">{ft('Voir mon approche')}</span>
                <span className="hidden sm:inline">
                  {ft('Découvrir mon approche')}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
