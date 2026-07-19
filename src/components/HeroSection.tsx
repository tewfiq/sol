import { useEffect, useRef, useState } from 'react';
import { FrenchText } from './FrenchText';
import { ft } from '../lib/frenchType';

const heroVideoSrc = '/assets/vid/hero.mp4';
const heroPosterSrc = '/assets/hero-still.jpg';
const heroPills = ['Paris & hybride', '12+ ans d\u2019expérience', 'Conseil · Grands comptes · Secteur public'];

// How many viewport heights the hero occupies (scroll distance)
const SCROLL_VH = 3;

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [blobUrl, setBlobUrl] = useState<string | null>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [progress, setProgress] = useState(0);
  const seekingRef = useRef(false);
  const rafRef = useRef<number>(0);

  // Load video as blob for guaranteed seekability
  useEffect(() => {
    let cancelled = false;
    fetch(heroVideoSrc)
      .then((r) => (r.ok ? r.blob() : Promise.reject()))
      .then((blob) => {
        if (!cancelled) setBlobUrl(URL.createObjectURL(blob));
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, []);

  // Scroll → video scrub
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !videoReady) return;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      rafRef.current = requestAnimationFrame(() => {
        ticking = false;
        const el = containerRef.current;
        if (!el || !video) return;
        const rect = el.getBoundingClientRect();
        const trackHeight = el.offsetHeight - window.innerHeight;
        const scrolled = -rect.top;
        const t = Math.max(0, Math.min(1, scrolled / trackHeight));
        setProgress(t);

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
  }, [videoReady]);

  const handleCta = () => {
    document
      .querySelector('#approche')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleCvClick = () => {
    window.open('/CV_Tewfiq_Ferahi_Onepoint_2026.pdf', '_blank');
  };

  // Copy fades out as you scroll deeper into the video
  const copyOpacity = Math.max(0, 1 - progress * 2.5);

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative bg-deep-green"
      style={{ height: `${SCROLL_VH * 100}vh` }}
    >
      {/* Sticky viewport for the video + copy */}
      <div
        className="sticky top-0 h-screen w-full overflow-hidden"
      >
        {/* Poster (visible until video paints) */}
        <img
          src={heroPosterSrc}
          alt=""
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300"
          style={{ opacity: videoReady ? 0 : 1 }}
          aria-hidden="true"
        />

        {/* Scrubbed video */}
        {blobUrl && (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            src={blobUrl}
            muted
            playsInline
            preload="auto"
            onLoadedMetadata={() => setVideoReady(true)}
            aria-hidden="true"
          />
        )}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

        {/* Scroll hint */}
        <div
          className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-off-white/60 transition-opacity duration-300"
          style={{ opacity: progress < 0.05 ? 1 : 0 }}
        >
          <span className="text-[10px] font-medium uppercase tracking-[0.2em]">
            Scroll
          </span>
          <svg
            width="20"
            height="32"
            viewBox="0 0 20 32"
            fill="none"
            className="opacity-60"
          >
            <rect
              x="1"
              y="1"
              width="18"
              height="30"
              rx="9"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <circle cx="10" cy="10" r="2.5" fill="currentColor" className="animate-bounce" />
          </svg>
        </div>

        {/* Copy content */}
        <div
          className="relative z-10 flex h-full flex-col justify-end px-6 pb-12 md:px-10 md:pb-16"
          style={{
            opacity: copyOpacity,
            transform: `translateY(${progress * -30}px)`,
          }}
        >
          <div className="mx-auto w-full max-w-6xl text-left">
            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-off-white/80 sm:text-xs">
              AI Native Design · Product · Systems
            </p>

            <h1 className="mt-5 max-w-4xl text-4xl font-normal leading-[1.1] tracking-tight text-off-white sm:text-6xl md:text-7xl lg:text-[88px]">
              {ft('Concevoir les produits que l\u2019IA rend désormais possibles.')}
            </h1>

            <FrenchText
              as="p"
              className="mt-6 max-w-xl text-sm font-medium text-off-white/80 md:text-base"
            >
              Je conçois des produits AI Native utiles, accessibles
              et prêts à être adoptés par les utilisateurs comme par les équipes.
            </FrenchText>

            <div className="mt-8 flex flex-col items-start gap-3 sm:gap-4">
              <div className="flex flex-wrap items-center justify-start gap-1.5 sm:gap-2">
                {heroPills.map((pill) => (
                  <span
                    key={pill}
                    className="rounded-lg border border-white/20 bg-black/20 px-2.5 py-1 text-[11px] font-medium text-off-white/90 backdrop-blur-sm sm:px-3.5 sm:py-1.5 sm:text-xs"
                  >
                    {pill}
                  </span>
                ))}
              </div>

              <div className="flex w-full flex-col items-start sm:w-auto sm:flex-row sm:items-center sm:gap-2 sm:rounded-2xl sm:bg-black/25 sm:p-1.5 sm:pl-5 sm:backdrop-blur-md">
                <FrenchText
                  as="p"
                  className="mb-2 text-left text-xs font-medium text-off-white/75 sm:mb-0 sm:hidden"
                >
                  Product Discovery · UX Research · Design Systems · Prototypage · Design Engineering
                </FrenchText>
                <FrenchText
                  as="p"
                  className="hidden text-sm font-medium text-off-white sm:block"
                >
                  Product Discovery · UX Research · Design Systems · Prototypage · Design Engineering
                </FrenchText>
                <button
                  type="button"
                  onClick={handleCta}
                  className="whitespace-nowrap rounded-2xl bg-off-white px-4 py-2.5 text-xs font-medium text-ink transition-colors hover:bg-off-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:px-5 sm:text-sm"
                >
                  <span className="sm:hidden">{ft('Voir mon approche')}</span>
                  <span className="hidden sm:inline">
                    {ft('D\u00e9couvrir mon approche')}
                  </span>
                </button>
                <button
                  type="button"
                  onClick={handleCvClick}
                  className="mt-2 whitespace-nowrap rounded-2xl border border-white/25 px-4 py-2.5 text-xs font-medium text-off-white transition-colors hover:border-white/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:mt-0 sm:px-5 sm:text-sm"
                >
                  Voir mon CV
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
