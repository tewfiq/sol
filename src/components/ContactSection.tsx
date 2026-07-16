import { Mail, FileText, MapPin, Phone, Globe } from 'lucide-react';
import { FrenchText } from './FrenchText';
import { ft } from '../lib/frenchType';

const contactItems = [
  { icon: MapPin, label: 'Paris, France' },
  { icon: Mail, label: 'tewfiqonline@gmail.com', href: 'mailto:tewfiqonline@gmail.com' },
  { icon: Phone, label: '+33 7 88 10 42 46', href: 'tel:+33788104246' },
  { icon: Globe, label: 'Français · Anglais · Arabe' },
];

export function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-deep-green px-6 py-24 md:py-40"
    >
      <div className="mx-auto max-w-5xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
          Contact
        </p>
        <h2 className="mt-5 max-w-3xl text-4xl font-normal leading-[1.1] text-off-white sm:text-5xl md:text-6xl lg:text-7xl">
          {ft('Parlons d’un problème ')}
          <em
            className="not-italic"
            style={{
              fontFamily: "'Instrument Serif', serif",
              fontStyle: 'italic',
            }}
          >
            réel
          </em>
          .
        </h2>
        <FrenchText
          as="p"
          className="mt-6 max-w-2xl text-base leading-relaxed text-off-white/70 md:text-lg"
        >
          Un processus difficile à structurer, un portefeuille de cas d’usage à
          prioriser ou un agent IA à tester dans les conditions du quotidien.
        </FrenchText>

        <div className="mt-10 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:gap-3">
          <a
            href="mailto:tewfiqonline@gmail.com"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-off-white px-5 py-2.5 text-xs font-medium text-ink transition-colors hover:bg-off-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:px-6 sm:py-3 sm:text-sm"
          >
            <span className="sm:hidden">{ft('Échanger')}</span>
            <span className="hidden sm:inline">{ft('Échanger avec Tewfiq')}</span>
          </a>
          <a
            href="/cv-tewfiq-ferahi.pdf"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full border border-white/25 px-5 py-2.5 text-xs font-medium text-off-white transition-colors hover:border-white/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:px-6 sm:py-3 sm:text-sm"
          >
            <FileText size={15} strokeWidth={1.5} aria-hidden="true" />
            <span className="ml-2">Voir le CV</span>
          </a>
        </div>

        <dl className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {contactItems.map(({ icon: Icon, label, href }) => {
            const content = (
              <div className="flex items-center gap-3 bg-deep-green/40 px-5 py-5 backdrop-blur-sm">
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-sage"
                >
                  <Icon size={16} strokeWidth={1.5} />
                </span>
                <span className="text-sm font-medium text-off-white">{label}</span>
              </div>
            );
            return href ? (
              <a key={label} href={href} className="block transition-colors hover:bg-white/5">
                {content}
              </a>
            ) : (
              <div key={label}>{content}</div>
            );
          })}
        </dl>

        <FrenchText
          as="p"
          className="mt-12 max-w-2xl text-base leading-relaxed text-off-white/60 md:text-lg"
        >
          Disponible pour rejoindre une équipe exigeante et construire des
          capacités IA opérationnelles.
        </FrenchText>
      </div>

      <footer className="mx-auto mt-20 max-w-5xl border-t border-white/10 pt-8">
        <p className="text-sm font-medium text-off-white">
          Tewfiq Ferahi — Senior AI Transformation Consultant
        </p>
        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-off-white/40">
          IA Strategy · Process · Product · Execution
        </p>
      </footer>
    </section>
  );
}
