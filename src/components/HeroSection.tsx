import { useEffect, useRef, useState } from 'react';
import { FrenchText } from './FrenchText';
import { ft } from '../lib/frenchType';

const heroVideoSrc = '/assets/vid/hero.mp4';
const heroPosterSrc = '/assets/hero-still.jpg';

function getScrollVh() {
  return typeof window !== 'undefined' && window.innerWidth < 768 ? 2 : 3;
}

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const [videoReady, setVideoReady] = useState(false);
  const [progress, setProgress] = useState(0);
  const [scrollVh, setScrollVh] = useState(getScrollVh);
  const seekingRef = useRef(false);
  const rafRef = useRef<number>(0);
  const blobUrlRef = useRef<string | null>(null);

  // Update scroll distance on resize
  useEffect(() => {
    const onResize = () => setScrollVh(getScrollVh());
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Load video — try blob for seekability, fallback to direct URL
  useEffect(() => {
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
      if (blobUrlRef.current) {
        URL.revokeObjectURL(blobUrlRef.current);
      }
    };
  }, []);

  const handleVideoReady = () => setVideoReady(true);

  // Safety timeout: show content even if video events never fire
  useEffect(() => {
    if (videoReady) return;
    const t = setTimeout(() => setVideoReady(true), 8000);
    return () => clearTimeout(t);
  }, [videoReady]);

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
      style={{ height: `${scrollVh * 100}vh` }}
    >
      {/* Sticky viewport for the video + copy */}
      <div
        className="sticky top-0 min-h-[100dvh] w-full overflow-hidden"
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
            aria-hidden="true"
          />
        )}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/30" aria-hidden="true" />

        {/* Copy content */}
        <div
          className="relative z-10 flex h-full flex-col justify-center px-6 pb-16 pt-28 md:px-10 md:pb-32 md:pt-48"
          style={{
            opacity: copyOpacity,
            transform: `translateY(${progress * -30}px)`,
          }}
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
