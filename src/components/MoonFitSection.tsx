import { useReveal } from '../hooks/useReveal';
import { FrenchText } from './FrenchText';
import { ft } from '../lib/frenchType';

const columns = [
  {
    title: 'Exigence de conception',
    text: ft(
      'Transformer des besoins complexes en expériences simples, cohérentes, accessibles et défendables.',
    ),
  },
  {
    title: 'Culture du conseil',
    text: ft(
      'Dialoguer avec les décideurs, les métiers, les designers et les équipes techniques sans opposer stratégie et exécution.',
    ),
  },
  {
    title: 'Pratique AI Native',
    text: ft(
      'Utiliser quotidiennement l\u2019IA pour explorer, prototyper, produire, tester et documenter, tout en conservant un contrôle humain explicite.',
    ),
  },
  {
    title: 'Transmission',
    text: ft(
      'Faire monter les équipes en compétence et transformer les expérimentations en capacités durables.',
    ),
  },
];

export function MoonFitSection() {
  const { ref, visible } = useReveal<HTMLDivElement>(0.15);

  return (
    <section id="onepoint" className="bg-light-surface px-6 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-green">
          Pourquoi Onepoint
        </p>
        <h2 className="mt-4 max-w-4xl text-3xl font-normal leading-[1.15] text-ink sm:text-4xl md:text-5xl">
          {ft('Une même ambition\u202f: transformer l\u2019')}
          <em
            className="not-italic"
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: 'italic',
            }}
          >
            innovation
          </em>
          {ft(' en usage.')}
        </h2>
        <FrenchText
          as="p"
          className="mt-6 max-w-3xl text-base leading-relaxed text-ink/70 md:text-lg"
        >
          La rencontre entre Design, Produit, Data et Engineering correspond à
          la manière dont j&apos;aborde les produits numériques : comprendre les
          usages avant de construire, expérimenter avant de généraliser et faire
          de la transmission une condition de réussite.
        </FrenchText>
        <div className="mt-4 max-w-3xl space-y-4 text-base leading-relaxed text-ink/70 md:text-lg">
          <FrenchText as="p">
            Je souhaite contribuer à la conception de produits AI Native, à
            l&apos;évolution de Design Systems et à la diffusion de nouvelles
            pratiques de conception auprès d&apos;équipes pluridisciplinaires.
          </FrenchText>
          <FrenchText as="p">
            Mon expérience du conseil, des grands comptes et du secteur public me
            permet d&apos;intervenir aussi bien dans la conception que dans la
            facilitation, la structuration des méthodes et l&apos;accompagnement des
            équipes.
          </FrenchText>
        </div>

        <div
          ref={ref}
          className={`mt-12 grid grid-cols-1 gap-8 transition-all duration-700 ease-out md:mt-16 md:grid-cols-2 lg:grid-cols-4 md:gap-10 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {columns.map((col) => (
            <div
              key={col.title}
              className="border-t border-soft-border pt-6"
            >
              <h3 className="text-lg font-medium text-ink">{col.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70 md:text-base">
                {col.text}
              </p>
            </div>
          ))}
        </div>

        <FrenchText
          as="p"
          className="mt-14 max-w-3xl border-t border-soft-border pt-8 text-sm leading-relaxed text-ink/55 md:text-base"
        >
          Je me positionne comme un Lead Product Designer capable de relier
          recherche utilisateur, Design Systems, conseil et intelligence
          artificielle générative pour construire des produits réellement adoptés.
        </FrenchText>
      </div>
    </section>
  );
}
