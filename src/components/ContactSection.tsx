import { useEffect, useRef, useState } from 'react';
import { Mail, FileText, MapPin, Phone, Globe } from 'lucide-react';
import { FrenchText } from './FrenchText';
import { ft } from '../lib/frenchType';
import { useLang } from '../lib/i18n/context';

const footerVideoSrc = '/assets/vid/footer.mp4';
const footerPosterSrc = '/assets/footer-still.jpg';

function FooterScrollVideo() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [blobUrl, setBlobUrl] = useState<string | null>(null);
  const [ready, setReady] = useState(false);
  const [enableVideo, setEnableVideo] = useState(
    () => typeof window !== 'undefined' && window.innerWidth >= 1024,
  );
  const seekingRef = useRef(false);
  const rafRef = useRef(0);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1024px)');
    const onChange = () => setEnableVideo(media.matches);
    media.addEventListener('change', onChange);
    return () => media.removeEventListener('change', onChange);
  }, []);

  useEffect(() => {
    if (!enableVideo) return;
    let cancelled = false;
    fetch(footerVideoSrc)
      .then((r) => (r.ok ? r.blob() : Promise.reject()))
      .then((blob) => {
        if (!cancelled) setBlobUrl(URL.createObjectURL(blob));
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [enableVideo]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !ready) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      rafRef.current = requestAnimationFrame(() => {
        ticking = false;
        const el = wrapRef.current;
        if (!el || !video) return;
        const rect = el.getBoundingClientRect();
        const vh = window.innerHeight;
        // Map: element top enters viewport → bottom leaves
        const t = Math.max(0, Math.min(1, (vh - rect.top) / (vh + rect.height)));

        if (seekingRef.current) return;
        const target = t * (video.duration || 1);
        if (Math.abs(video.currentTime - target) > 0.02) {
          seekingRef.current = true;
          video.currentTime = target;
        }
      });
    };

    const onSeeked = () => {
      seekingRef.current = false;
    };
    video.addEventListener('seeked', onSeeked);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      video.removeEventListener('seeked', onSeeked);
      cancelAnimationFrame(rafRef.current);
    };
  }, [ready]);

  return (
    <div ref={wrapRef} className="mt-16 overflow-hidden rounded-2xl border border-white/12">
      <div className="relative aspect-video w-full bg-black/40">
        <img
          src={footerPosterSrc}
          alt=""
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300"
          style={{ opacity: enableVideo && ready ? 0 : 1 }}
          aria-hidden="true"
        />
        {enableVideo && blobUrl && (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            src={blobUrl}
            muted
            playsInline
            preload="auto"
            onLoadedMetadata={() => setReady(true)}
            aria-hidden="true"
          />
        )}
      </div>
    </div>
  );
}

export function ContactSection() {
  useLang();
  const contactItems = [
    { icon: MapPin, label: 'Paris, France' },
    { icon: Mail, label: 'tewfiqonline@gmail.com', href: 'mailto:tewfiqonline@gmail.com' },
    { icon: Phone, label: '+33 7 88 10 42 46', href: 'tel:+33788104246' },
    { icon: Globe, label: ft('Français · Anglais') },
  ];
  return (
    <section
      id="contact"
      className="bg-deep-green px-6 py-24 md:px-10 md:py-40"
    >
      <div className="mx-auto max-w-6xl">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sage">
          {ft('Contact')}
        </p>
        <h2 className="mt-5 max-w-3xl text-4xl font-normal leading-[1.1] text-off-white sm:text-5xl md:text-6xl lg:text-7xl">
          {ft('Construisons le prochain produit ')}
          <em className="italic font-medium">
            AI Native
          </em>
          .
        </h2>
        <FrenchText
          as="p"
          className="mt-6 max-w-2xl text-base leading-relaxed text-off-white/70 md:text-lg"
        >
          Vous recherchez un Product Designer capable de relier
          recherche utilisateur, Design Systems, accessibilité
          et IA générative ?
        </FrenchText>
        <FrenchText
          as="p"
          className="mt-4 max-w-2xl text-base leading-relaxed text-off-white/70 md:text-lg"
        >
          Échangeons autour de vos produits,
          de vos équipes et de vos usages.
        </FrenchText>

        <div className="mt-10 flex flex-col gap-2.5 sm:flex-row sm:items-center sm:gap-3">
          <a
            href="mailto:tewfiqonline@gmail.com?subject=%C3%89change%20%E2%80%94%20AI%20Native%20Product%20Design"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-2xl bg-off-white px-5 py-2.5 text-xs font-medium text-ink transition-colors hover:bg-off-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:px-6 sm:py-3 sm:text-sm"
          >
            <span className="sm:hidden">{ft('Échanger')}</span>
            <span className="hidden sm:inline">{ft('Échanger avec Tewfiq')}</span>
          </a>
          <a
            href="/CV_Tewfiq_Ferahi_Onepoint_2026.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-2xl border border-white/25 px-5 py-2.5 text-xs font-medium text-off-white transition-colors hover:border-white/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:px-6 sm:py-3 sm:text-sm"
          >
            <FileText size={15} strokeWidth={1.5} aria-hidden="true" />
            <span className="ml-2">{ft('Voir le CV')}</span>
          </a>
        </div>

        <dl className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/12 bg-white/12 sm:grid-cols-2 lg:grid-cols-4">
          {contactItems.map(({ icon: Icon, label, href }) => {
            const content = (
              <div className="flex items-center gap-3 bg-deep-green/40 px-5 py-5 backdrop-blur-sm">
                <span
                  aria-hidden="true"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-sage"
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

        <FooterScrollVideo />

        <FrenchText
          as="p"
          className="mt-12 max-w-2xl text-base leading-relaxed text-off-white/50 md:text-lg"
        >
          Disponible pour rejoindre une équipe
          et concevoir des produits AI Native à fort impact.
        </FrenchText>
      </div>

      <footer className="mx-auto mt-20 max-w-6xl border-t border-white/12 pt-8">
        <p className="text-sm font-medium text-off-white">
          Tewfiq Ferahi — Lead AI Native Product Designer
        </p>
        <p className="mt-2 text-xs uppercase tracking-[0.2em] text-off-white/40">
            {ft('Product Design · Design Systems · IA générative')}
        </p>
        <p className="mt-3 text-xs text-off-white/30">
          © 2026 Tewfiq Ferahi
        </p>
      </footer>
    </section>
  );
}
