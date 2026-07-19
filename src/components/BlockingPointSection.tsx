import { useReveal } from '../hooks/useReveal';
import { FrenchText } from './FrenchText';
import { ft } from '../lib/frenchType';

const paragraphs = [
  ft('Le défi n\u2019est plus d\u2019ajouter une fonctionnalité IA ou de produire une démonstration spectaculaire.'),
  ft('Il consiste à concevoir des expériences compréhensibles, contrôlables et réellement utiles, dans lesquelles humains et systèmes intelligents collaborent naturellement.'),
  ft('Cela exige de relier besoins utilisateurs, contraintes métiers, qualité des données, cohérence des interfaces, faisabilité technique et conditions d\u2019adoption.'),
];

const pillars = [
  { label: 'Usages', description: ft('Comprendre avant d\u2019automatiser.') },
  { label: 'Conception', description: ft('Explorer sans déléguer le jugement.') },
  { label: 'Systèmes', description: ft('Maintenir cohérence, accessibilité et contrôle.') },
];

const keyQuestions = [
  ft('Comment intégrer l\u2019IA sans complexifier l\u2019expérience\u202f?'),
  ft('Comment rendre les résultats compréhensibles et contrôlables\u202f?'),
  ft('Comment concevoir les états d\u2019incertitude, d\u2019erreur et de reprise en main\u202f?'),
  ft('Comment faire évoluer un Design System dans un environnement génératif\u202f?'),
  ft('Comment accélérer la conception sans dégrader la qualité\u202f?'),
  ft('Comment transformer un prototype AI Native en produit réellement adopté\u202f?'),
];

export function BlockingPointSection() {
  const { ref, visible } = useReveal<HTMLDivElement>(0.2);

  return (
    <section
      id="approche"
      className="relative z-10 -mt-6 rounded-t-[25px] bg-cream px-6 py-20 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-green">
          Le changement de paradigme
        </p>

        <h2 className="mt-4 max-w-3xl text-3xl font-normal leading-[1.15] text-ink sm:text-4xl md:text-5xl">
          {ft('Le design change. Sa responsabilité demeure.')}
        </h2>

        <FrenchText
          as="p"
          className="mt-6 max-w-2xl text-base leading-relaxed text-ink/70 md:text-lg"
        >
          L&apos;IA ne remplace pas le Product Design. Elle transforme profondément la
          manière de comprendre les utilisateurs, d&apos;explorer des solutions, de
          produire des interfaces et de faire évoluer un produit.
        </FrenchText>

        <div
          ref={ref}
          className={`mt-12 grid grid-cols-1 gap-12 transition-all duration-700 ease-out md:mt-16 md:grid-cols-2 md:gap-20 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div>
            <ul className="space-y-3">
              {paragraphs.map((line, i) => (
                <li
                  key={i}
                  className={`text-lg leading-relaxed md:text-xl ${
                    i === paragraphs.length - 1
                      ? 'mt-6 border-t border-soft-border pt-6 text-ink'
                      : 'text-ink/70'
                  }`}
                >
                  {line}
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap gap-6">
              {pillars.map((p) => (
                <div key={p.label}>
                  <p className="text-base font-medium text-ink">{p.label}</p>
                  <p className="mt-1 text-sm text-ink/60">{p.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-start">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-ink/50">
              {ft('Les équipes Produit doivent aujourd\u2019hui répondre à de nouvelles questions.')}
            </p>
            <ul className="space-y-4">
              {keyQuestions.map((q, i) => (
                <li
                  key={i}
                  className="text-lg leading-relaxed text-ink md:text-xl"
                >
                  {q}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
