import { useReveal } from '../hooks/useReveal';
import { FrenchText } from './FrenchText';
import { ft } from '../lib/frenchType';
import { useLang } from '../lib/i18n/context';

const statement =
  'Le défi n\u2019est pas d\u2019ajouter une fonctionnalité IA, mais de concevoir des expériences utiles, compréhensibles et contrôlables.';

const pillars = [
  { label: 'Usages', description: 'Comprendre avant d\u2019automatiser.' },
  { label: 'Confiance', description: 'Rendre l\u2019IA lisible et maîtrisable.' },
  { label: 'Systèmes', description: 'Préserver cohérence, accessibilité et contrôle.' },
];

const keyQuestions = [
  'Comment intégrer l\u2019IA sans complexifier l\u2019expérience\u202f?',
  'Comment concevoir la confiance, l\u2019erreur et la reprise en main\u202f?',
  'Comment passer du prototype au produit réellement adopté\u202f?',
];

export function BlockingPointSection() {
  useLang();
  const { ref, visible } = useReveal<HTMLDivElement>(0.2);

  return (
    <section
      id="approche"
      className="relative z-10 -mt-6 rounded-t-[25px] bg-cream px-6 py-20 md:px-10 md:py-32"
    >
      <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary-green">
            {ft('Le changement de paradigme')}
          </p>

        <h2 className="mt-4 max-w-3xl text-3xl font-normal leading-[1.15] text-ink sm:text-4xl md:text-5xl">
          {ft('Le design change. Sa responsabilité demeure.')}
        </h2>

        <FrenchText
          as="p"
          className="mt-6 max-w-2xl text-base leading-relaxed text-ink/70 md:text-lg"
        >
          L&apos;IA transforme la manière de comprendre les utilisateurs,
          d&apos;explorer des solutions et de produire des interfaces.
        </FrenchText>

        <div
          ref={ref}
          className={`mt-12 grid grid-cols-1 gap-12 md:mt-16 md:grid-cols-2 md:gap-20 md:transition-all md:duration-700 md:ease-out ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          <div>
              <p className="text-lg leading-relaxed text-ink md:text-xl">
                {ft(statement)}
              </p>

            <div className="mt-10 flex flex-wrap gap-6">
              {pillars.map((p) => (
                <div key={p.label}>
                  <p className="text-base font-medium text-ink">{ft(p.label)}</p>
                  <p className="mt-1 text-sm text-ink/50">{ft(p.description)}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-start">
            <p className="mb-6 text-sm font-semibold uppercase tracking-[0.18em] text-ink/50">
              {ft('Trois questions structurantes')}
            </p>
            <ul className="space-y-4">
              {keyQuestions.map((q, i) => (
                <li
                  key={i}
                  className="text-lg leading-relaxed text-ink md:text-xl"
                >
                  {ft(q)}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
