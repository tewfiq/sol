import { useEffect, useRef, useState } from 'react';
import { FrenchText } from './FrenchText';
import { ft } from '../lib/frenchType';
import { useLang } from '../lib/i18n/context';
import { HoldToPlayControl } from './HoldToPlayControl';

const heroVideoSrc = '/assets/vid/hero.mp4';
const heroMobileVideoSrc = '/assets/vid/hero-mobile.mp4';
const heroPosterSrc = '/assets/hero-still.jpg';

function isCompactWidth() {
  return typeof window !== 'undefined' && window.innerWidth < 1024;
}

export function HeroSection() {
  useLang();
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const copyRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef(0);
  const blobUrlRef = useRef<string | null>(null);

  const [isCompact, setIsCompact] = useState(isCompactWidth);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const onResize = () => setIsCompact(isCompactWidth());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Load as a blob for deterministic seeking on both touch and desktop.
  useEffect(() => {
    let cancelled = false;
    const source = isCompact ? heroMobileVideoSrc : heroVideoSrc;

    setVideoReady(false);
    setVideoSrc(null);

    const setSource = (src: string) => {
      if (!cancelled) setVideoSrc(src);
    };

    fetch(source)
      .then((r) => (r.ok ? r.blob() : Promise.reject()))
      .then((blob) => {
        if (!cancelled) {
          const url = URL.createObjectURL(blob);
          blobUrlRef.current = url;
          setVideoSrc(url);
        }
      })
      .catch(() => setSource(source));

    const timer = setTimeout(() => setSource(source), 4000);

    return () => {
      cancelled = true;
      clearTimeout(timer);
      if (blobUrlRef.current) {
        URL.revokeObjectURL(blobUrlRef.current);
        blobUrlRef.current = null;
      }
    };
  }, [isCompact]);

  const handleVideoReady = () => setVideoReady(true);

  // Scroll → video scrub via one RAF, without React re-renders. The time delta
  // guard is important on mobile: redundant seeks are expensive and cause lag.
  useEffect(() => {
    if (isCompact) return;
    const video = videoRef.current;
    if (!video || !videoReady) return;

    let rafId = 0;

    const applyFrame = () => {
      rafId = 0;
      const v = videoRef.current;
      const copy = copyRef.current;
      if (!v || !copy) return;

      const t = progressRef.current;

      const fadeOut = 1 - Math.min(1, t * 3.33);
      const fadeIn = Math.max(0, Math.min(1, (t - 0.7) * 3.33));
      copy.style.opacity = String(Math.max(fadeOut, fadeIn));

      const rise = Math.min(1, t * 2.5);
      const settle = Math.max(0, Math.min(1, (t - 0.6) * 2.5));
      copy.style.transform = `translateY(${(rise - settle) * -25}px)`;

      const targetTime = t * (v.duration || 1);
      if (Math.abs(v.currentTime - targetTime) >= 1 / 30) {
        v.currentTime = targetTime;
      }
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
  }, [videoReady, isCompact]);

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
      style={isCompact ? undefined : { height: '300vh' }}
    >
      <div
        className={isCompact
          ? 'relative min-h-dvh w-full overflow-hidden'
          : 'sticky top-0 min-h-dvh w-full overflow-hidden'}
      >
        {/* Poster (always visible on mobile) */}
        <img
          src={heroPosterSrc}
          alt=""
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300"
          style={{ opacity: videoReady ? 0 : 1 }}
          aria-hidden="true"
        />

        {/* Scroll-scrubbed video */}
        {videoSrc && (
          <video
            ref={videoRef}
            className="absolute inset-0 h-full w-full object-cover"
            src={videoSrc}
            muted
            playsInline
            preload="auto"
            onCanPlay={handleVideoReady}
            onLoadedData={handleVideoReady}
            loop={isCompact}
            aria-hidden="true"
          />
        )}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

        {isCompact && videoReady && (
          <HoldToPlayControl
            videoRef={videoRef}
            className="absolute bottom-20 left-1/2 -translate-x-1/2"
          />
        )}

        {/* Copy content */}
        <div
          ref={copyRef}
          className="relative z-10 flex min-h-dvh flex-col justify-center px-6 pb-16 pt-28 md:px-10 md:pb-32 md:pt-48"
          style={{ opacity: 1, transform: 'translateY(0)', willChange: 'opacity, transform' }}
        >
          <div className="mx-auto w-full max-w-6xl text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-off-white/80">
              Lead AI Native Product Designer
            </p>

            <h1 className="mt-4 max-w-5xl whitespace-pre-line text-3xl font-normal leading-[1.1] tracking-tight text-off-white sm:text-6xl md:text-7xl lg:text-[88px]">
              {ft('Je transforme\ndes possibilit\u00e9s IA\nen produits utiles.')}
            </h1>

            <FrenchText
              as="p"
              className="mt-6 max-w-xl text-sm font-medium text-off-white/80 md:text-base"
            >
              Product Designer senior, j&apos;aide les équipes à concevoir
              des expériences AI Native simples, accessibles
              et réellement adoptées.
            </FrenchText>

            <div className="mt-6 flex flex-wrap gap-2">
              {['12+ ans d\'expérience', 'Conseil', 'Grands comptes', 'Secteur public'].map((chip) => (
                <span key={chip} className="rounded-lg border border-white/[0.1] bg-white/[0.05] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-off-white/70 backdrop-blur-sm">
                  {ft(chip)}
                </span>
              ))}
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              {['Product Discovery', 'UX Research', 'Design Systems', 'Prototypage', 'Design Engineering'].map((chip) => (
                <span key={chip} className="rounded-lg border border-white/[0.07] bg-white/[0.03] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.1em] text-off-white/50 backdrop-blur-sm">
                  {ft(chip)}
                </span>
              ))}
            </div>

            <div className="mt-6 sm:mt-8 flex flex-col items-start gap-2.5 sm:flex-row sm:items-center sm:gap-3">
              <button
                type="button"
                onClick={handleCta}
                className="whitespace-nowrap rounded-2xl bg-off-white px-5 py-2.5 text-xs font-medium text-ink transition-colors hover:bg-off-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:px-6 sm:py-3 sm:text-sm"
              >
                {ft('Découvrir ma démarche')}
              </button>
              <button
                type="button"
                onClick={handleCvClick}
                className="whitespace-nowrap rounded-2xl border border-white/25 px-5 py-2.5 text-xs font-medium text-off-white transition-colors hover:border-white/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-white sm:px-6 sm:py-3 sm:text-sm"
              >
                {ft('Voir mon CV')}
              </button>
            </div>

            <p className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-semibold uppercase tracking-[0.25em] text-off-white/30 animate-fade-in-down">
              Scroll
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
