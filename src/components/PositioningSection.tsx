import { useReveal } from '../hooks/useReveal';

const principles = ['Construite', 'Utilisée', 'Documentée', 'Transmise'];

const doItems = [
  'Comprendre le problème métier réel',
  'Cartographier les processus, flux et contraintes',
  'Identifier les cas d’usage IA',
  'Prioriser selon valeur, faisabilité et adoption',
  'Arbitrer entre construire, acheter ou composer',
  'Concevoir avec les équipes',
  'Documenter et transmettre',
  'Préparer mon retrait',
];

const methodSteps = [
  {
    step: '01',
    title: 'Comprendre',
    description: 'Contextes, métiers, données, irritants et décisions.',
  },
  {
    step: '02',
    title: 'Structurer',
    description: 'Processus, priorités, risques et responsabilités.',
  },
  {
    step: '03',
    title: 'Construire',
    description: 'Agent, workflow, assistant, prototype ou POC.',
  },
  {
    step: '04',
    title: 'Déployer',
    description: 'Tester dans les conditions du travail quotidien.',
  },
  {
    step: '05',
    title: 'Transmettre',
    description: 'Documentation, formation et autonomie.',
  },
];

export function PositioningSection() {
  const { ref: cardRef, visible: cardVisible } = useReveal<HTMLDivElement>(0.15);

  return (
    <section
      id="positioning"
      className="bg-deep-green px-6 py-20 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
          Forward Deployed AI
        </p>
        <h2 className="mt-4 max-w-3xl text-3xl font-normal leading-[1.15] text-off-white sm:text-4xl md:text-5xl">
          Je construis depuis l’intérieur.
        </h2>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-off-white/70 md:text-lg">
          Je rejoins temporairement les équipes pour comprendre le contexte,
          structurer les usages, construire les premiers systèmes et rendre
          l’organisation autonome.
        </p>

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
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm md:p-10">
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
              Puis le système continue sans moi.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm md:p-10">
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
