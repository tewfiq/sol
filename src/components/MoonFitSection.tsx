import { useReveal } from '../hooks/useReveal';
import { FrenchText } from './FrenchText';
import { ft } from '../lib/frenchType';
import { useLang } from '../lib/i18n/context';

const columns = [
  {
    title: 'Exigence de conception',
    text: 'Transformer des besoins complexes en expériences simples et accessibles.',
  },
  {
    title: 'Culture du conseil',
    text: 'Relier décideurs, métiers, designers et équipes techniques.',
  },
  {
    title: 'Pratique AI Native',
    text: 'Utiliser l\u2019IA pour explorer, prototyper et produire sans déléguer le jugement.',
  },
];

export function MoonFitSection() {
  useLang();
  const { ref, visible } = useReveal<HTMLDivElement>(0.15);

  return (
    <section id="onepoint" className="bg-light-surface px-6 py-20 md:px-10 md:py-32">
      <div className="mx-auto max-w-6xl">
        <h2 className="mt-4 max-w-4xl text-3xl font-normal leading-[1.15] text-ink sm:text-4xl md:text-5xl">
          {ft('Transformer l\u2019innovation en usage.')}
        </h2>
        <FrenchText
          as="p"
          className="mt-6 max-w-3xl text-base leading-relaxed text-ink/70 md:text-lg"
        >
          Onepoint réunit Design, Produit, Data et Engineering
          autour d&apos;une même ambition : transformer l&apos;innovation
          en produits utiles et adoptés.
        </FrenchText>
        <FrenchText
          as="p"
          className="mt-4 max-w-3xl text-base leading-relaxed text-ink/70 md:text-lg"
        >
          C&apos;est précisément la manière dont je travaille :
          comprendre, expérimenter, structurer et transmettre.
        </FrenchText>

        <div
          ref={ref}
          className={`mt-12 grid grid-cols-1 gap-8 transition-all duration-700 ease-out md:mt-16 md:grid-cols-3 md:gap-10 ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
          }`}
        >
          {columns.map((col) => (
            <div
              key={col.title}
              className="border-t border-soft-border pt-6"
            >
              <h3 className="text-lg font-medium text-ink">{ft(col.title)}</h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/70 md:text-base">
                {ft(col.text)}
              </p>
            </div>
          ))}
        </div>

        <FrenchText
          as="p"
          className="mt-14 max-w-3xl border-t border-soft-border pt-8 text-sm leading-relaxed text-ink/50 md:text-base"
        >
          Je souhaite contribuer à la conception de produits AI Native
          et à l&apos;évolution des pratiques Design au sein de Onepoint.
        </FrenchText>
      </div>
    </section>
  );
}
