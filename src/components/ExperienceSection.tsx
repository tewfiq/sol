import { experiences } from '../data/experiences';
import { ExperienceCard } from './ExperienceCard';
import { FrenchText } from './FrenchText';
import { ft } from '../lib/frenchType';
import { useLang } from '../lib/i18n/context';

export function ExperienceSection() {
  useLang();
  return (
    <section
      id="experience"
      className="bg-deep-green px-6 py-20 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mt-4 max-w-3xl text-3xl font-normal leading-[1.15] text-off-white sm:text-4xl md:text-5xl">
          {ft('Concevoir dans des environnements complexes.')}
        </h2>
        <div
          className="mt-5 h-px w-12 bg-gradient-to-r from-sage/40 to-transparent"
          aria-hidden="true"
        />
        <FrenchText
          as="p"
          className="mt-6 max-w-2xl text-base leading-relaxed text-off-white/70 md:text-lg"
        >
          Conseil, secteur public, énergie, banque, télécommunications,
          industrie et services numériques.
        </FrenchText>

        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 md:gap-8">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.organization} experience={exp} />
          ))}
        </div>

        <div className="mt-16 border-t border-white/8 pt-10">
          <p className="mb-8 text-[11px] font-semibold uppercase tracking-[0.2em] text-sage/50">
            {ft('Entreprises & organisations accompagnées')}
          </p>
          <img
            src="/partners/partners-dark.webp"
            alt={ft("Logos des entreprises et organisations accompagnées")}
            className="w-full opacity-50"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
