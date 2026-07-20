import { useEffect, useRef, useState } from 'react';
import { FrenchText } from './FrenchText';
import { ft } from '../lib/frenchType';

const heroVideoSrc = '/assets/vid/hero.mp4';
const heroPosterSrc = '/assets/hero-still.jpg';

function isMobileWidth() {
  return typeof window !== 'undefined' && window.innerWidth < 768;
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);
  const blobUrlRef = useRef<string | null>(null);

  const [isMobile, setIsMobile] = useState(isMobileWidth);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const onResize = () => setIsMobile(isMobileWidth());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Desktop only: load video — try blob for seekability, fallback direct URL
  useEffect(() => {
    if (isMobile) return;
    let cancelled = false;

    const setSource = (src: string) => {
      if (!cancelled) setVideoSrc(src);
    };

    fetch(heroVideoSrc)
      .then((r) => (r.ok ? r.blob() : Promise.reject()))
      .then((blob) => {
        if (!cancelled) {
          const url = URL.createObjectURL(blob);
          blobUrlRef.current = url;
          setVideoSrc(url);
        }
      })
      .catch(() => setSource(heroVideoSrc));

    const timer = setTimeout(() => setSource(heroVideoSrc), 4000);

    return () => {
      cancelled = true;
      clearTimeout(timer);
      if (blobUrlRef.current) URL.revokeObjectURL(blobUrlRef.current);
    };
  }, [isMobile]);

  const handleVideoReady = () => setVideoReady(true);

  // Desktop only: safety timeout for videoReady
  useEffect(() => {
    if (videoReady || isMobile) return;
    const t = setTimeout(() => setVideoReady(true), 8000);
    return () => clearTimeout(t);
  }, [videoReady, isMobile]);

  // Desktop only: scroll → smooth video scrub via RAF loop (no React re-renders)
  useEffect(() => {
    if (isMobile) return;
    const video = videoRef.current;
    if (!video || !videoReady) return;

    let rafId = 0;

    const applyFrame = () => {
      rafId = 0;
      const v = videoRef.current;
      const copy = copyRef.current;
      if (!v || !copy) return;

      const t = progressRef.current;

      copy.style.opacity = String(Math.max(0, 1 - t * 2.5));
      copy.style.transform = `translateY(${t * -30}px)`;

      v.currentTime = t * (v.duration || 1);
    };

    const onScroll = () => {
      const el = containerRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const trackHeight = el.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      progressRef.current = Math.max(0, Math.min(1, scrolled / trackHeight));

      if (!rafId) rafId = requestAnimationFrame(applyFrame);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(rafId);
    };
  }, [videoReady, isMobile]);

  const handleCta = () => {
    document
      .querySelector('#approche')
      ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const handleCvClick = () => {
    window.open('/CV_Tewfiq_Ferahi_Onepoint_2026.pdf', '_blank');
  };

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative bg-deep-green"
      style={isMobile ? undefined : { height: '300vh' }}
    >
      <div
        className={
          isMobile
            ? 'relative min-h-dvh w-full overflow-hidden'
            : 'sticky top-0 min-h-dvh w-full overflow-hidden'
        }
      >
        {/* Poster (always visible on mobile) */}
        <img
          src={heroPosterSrc}
          alt=""
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300"
          style={{ opacity: isMobile ? 1 : videoReady ? 0 : 1 }}
          aria-hidden="true"
        />

        {/* Desktop only: scrubbed video */}
        {!isMobile && videoSrc && (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            src={videoSrc}
            muted
            playsInline
            preload="auto"
            onCanPlay={handleVideoReady}
            onLoadedData={handleVideoReady}
            aria-hidden="true"
          />
        )}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

        {/* Copy content */}
        <div
          ref={copyRef}
          className="relative z-10 flex min-h-dvh flex-col justify-center px-6 pb-16 pt-28 md:px-10 md:pb-32 md:pt-48"
          style={isMobile ? undefined : { opacity: 1, transform: 'translateY(0)' }}
        >
          <div className="mx-auto w-full max-w-6xl text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-off-white/80">
              AI Native Design · Product · Systems
            </p>

            <h1 className="mt-4 max-w-4xl text-3xl font-normal leading-[1.1] tracking-tight text-off-white sm:text-6xl md:text-7xl lg:text-[88px]">
              {ft('Concevoir les produits que l\u2019IA rend désormais possibles.')}
            </h1>

            <FrenchText
              as="p"
              className="mt-6 max-w-xl text-sm font-medium text-off-white/80 md:text-base"
            >
              Je conçois des produits AI Native utiles, accessibles
              et prêts à être adoptés par les utilisateurs comme par les équipes.
            </FrenchText>

            <div className="mt-6 sm:mt-8 flex flex-col items-start gap-2.5 sm:flex-row sm:items-center sm:gap-3">
              <button
                type="button"
                onClick={handleCta}
                className="whitespace-nowrap rounded-2xl bg-off-white px-5 py-2.5 text-xs font-medium text-ink transition-colors hover:bg-off-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:px-6 sm:py-3 sm:text-sm"
              >
                <span className="sm:hidden">{ft('Voir mon approche')}</span>
                <span className="hidden sm:inline">
                  {ft('Découvrir mon approche')}
                </span>
              </button>
              <button
                type="button"
                onClick={handleCvClick}
                className="whitespace-nowrap rounded-2xl border border-white/25 px-5 py-2.5 text-xs font-medium text-off-white transition-colors hover:border-white/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:px-6 sm:py-3 sm:text-sm"
              >
                Voir mon CV
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
