import { experiences } from '../data/experiences';
import { ExperienceCard } from './ExperienceCard';

export function ExperienceSection() {
  return (
    <section
      id="experience"
      className="bg-deep-green px-6 py-20 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
          Expérience
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-normal leading-[1.15] text-off-white sm:text-4xl md:text-5xl">
          Des environnements complexes. Des décisions concrètes.
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-off-white/70 md:text-lg">
          Banque, secteur public, énergie, télécommunications, industrie et
          SaaS.
        </p>

        <div className="mt-12 grid grid-cols-1 gap-6 md:mt-16 md:grid-cols-2 md:gap-8">
          {experiences.map((exp) => (
            <ExperienceCard key={exp.organization} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
