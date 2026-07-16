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
        <div className="mx-auto w-full max-w-5xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-off-white/80 sm:text-xs">
            AI Strategy · Process · Execution
          </p>

          <h1 className="mt-5 text-4xl font-normal leading-[1.1] tracking-tight text-off-white sm:text-6xl md:text-7xl lg:text-[88px]">
            <span className="block">L’IA est disponible.</span>
            <span className="block">
              La{' '}
              <em
                className="not-italic"
                style={{
                  fontFamily: "'Instrument Serif', serif",
                  fontStyle: 'italic',
                }}
              >
                valeur
              </em>{' '}
              reste à construire.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-sm font-medium text-off-white/80 md:text-base">
            J’aide les directions à comprendre leurs processus, prioriser les
            cas d’usage IA et construire des capacités réellement utilisables
            par les équipes.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {heroPills.map((pill) => (
                <span
                  key={pill}
                  className="rounded-full border border-white/20 bg-black/20 px-3.5 py-1.5 text-xs font-medium text-off-white/90 backdrop-blur-sm"
                >
                  {pill}
                </span>
              ))}
            </div>

            <div className="flex items-center gap-2 rounded-2xl bg-black/25 p-1.5 pl-5 backdrop-blur-md">
              <p className="hidden text-sm font-medium text-off-white sm:block">
                Audit, cadrage, agents IA, POC et adoption opérationnelle.
              </p>
              <p className="text-sm font-medium text-off-white sm:hidden">
                De l’analyse à l’usage opérationnel.
              </p>
              <button
                type="button"
                onClick={handleCta}
                className="rounded-xl bg-off-white px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-off-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                Découvrir mon approche
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
