import { useReveal } from '../hooks/useReveal';
import { FrenchText } from './FrenchText';
import { ft } from '../lib/frenchType';

const principles = ['Compris', 'Testé', 'Documenté', 'Transmis'];

const doItems = [
  ft('Comprendre les besoins utilisateurs et métiers'),
  ft('Conduire la Product Discovery et l\u2019UX Research'),
  ft('Cartographier les parcours et les points de friction'),
  ft('Faciliter les ateliers de cadrage et de co-conception'),
  ft('Concevoir les interactions et parcours AI Native'),
  ft('Créer et faire évoluer des Design Systems'),
  ft('Prototyper rapidement des expériences fonctionnelles'),
  ft('Tester les hypothèses avec les utilisateurs'),
  ft('Collaborer avec Produit, Data, Engineering et métiers'),
  ft('Documenter les décisions de conception'),
  ft('Diffuser les bonnes pratiques'),
  ft('Faire monter les équipes en autonomie'),
];

const methodSteps = [
  {
    step: '01',
    title: 'Découvrir',
    description: ft('Utilisateurs, besoins, parcours, irritants et contraintes.'),
  },
  {
    step: '02',
    title: 'Cadrer',
    description: ft('Valeur, faisabilité, risques et priorités.'),
  },
  {
    step: '03',
    title: 'Concevoir',
    description: ft('Parcours, interfaces, composants et prototypes.'),
  },
  {
    step: '04',
    title: 'Valider',
    description: ft('Tests utilisateurs, confiance et itération.'),
  },
  {
    step: '05',
    title: 'Transmettre',
    description: ft('Documentation, Design System et autonomie.'),
  },
];

export function PositioningSection() {
  const { ref: cardRef, visible: cardVisible } = useReveal<HTMLDivElement>(0.15);

  return (
    <section
      id="positioning"
      className="bg-deep-green px-6 py-20 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
          AI Native Product Design
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-normal leading-[1.15] text-off-white sm:text-4xl md:text-5xl">
          {ft('Je conçois depuis l\u2019intérieur des équipes.')}
        </h2>
        <FrenchText
          as="p"
          className="mt-6 max-w-2xl text-base leading-relaxed text-off-white/70 md:text-lg"
        >
          Je rejoins les équipes Produit pour transformer des besoins
          utilisateurs, enjeux métiers et possibilités technologiques en
          expériences numériques utiles, désirables, accessibles et déployables.
        </FrenchText>
        <FrenchText
          as="p"
          className="mt-4 max-w-2xl text-base leading-relaxed text-off-white/70 md:text-lg"
        >
          Mon rôle consiste autant à concevoir le produit qu&apos;à aider les équipes
          à construire une nouvelle manière de travailler avec l&apos;IA.
        </FrenchText>

        <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 md:mt-16">
          {principles.map((p) => (
            <span
              key={p}
              className="text-sm font-medium uppercase tracking-wider text-sage"
            >
              {p}
            </span>
          ))}
        </div>

        <div
          ref={cardRef}
          id="methode"
          className={`mt-12 grid grid-cols-1 gap-6 transition-all duration-700 ease-out md:mt-16 md:grid-cols-2 md:gap-8 ${
            cardVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
              Ce que je fais
            </p>
            <ul className="mt-6 space-y-3">
              {doItems.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-relaxed text-off-white/85 md:text-base"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1 w-1 shrink-0 rounded-full bg-sage"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 border-t border-white/10 pt-6 text-lg font-medium text-off-white">
              {ft('Puis le produit continue à évoluer sans dépendre de moi.')}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
              La méthode
            </p>
            <ol className="mt-6 space-y-6">
              {methodSteps.map((s) => (
                <li key={s.step} className="flex gap-5">
                  <span className="text-sm font-semibold text-sage">
                    {s.step}
                  </span>
                  <div>
                    <p className="text-base font-medium text-off-white md:text-lg">
                      {s.title}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-off-white/70">
                      {s.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
