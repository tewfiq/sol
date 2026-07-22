import { Pause, Play } from 'lucide-react';
import { useEffect, useRef, useState, type PointerEvent, type RefObject } from 'react';
import { ft } from '../lib/frenchType';

const HOLD_THRESHOLD_MS = 350;

export function HoldToPlayControl({
  videoRef,
  className = '',
}: {
  videoRef: RefObject<HTMLVideoElement>;
  className?: string;
}) {
  const pressedAtRef = useRef(0);
  const wasPlayingRef = useRef(false);
  const [playing, setPlaying] = useState(false);
  const [holding, setHolding] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onPlay = () => setPlaying(true);
    const onPause = () => setPlaying(false);
    video.addEventListener('play', onPlay);
    video.addEventListener('pause', onPause);
    video.addEventListener('ended', onPause);

    return () => {
      video.removeEventListener('play', onPlay);
      video.removeEventListener('pause', onPause);
      video.removeEventListener('ended', onPause);
    };
  }, [videoRef]);

  const play = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.ended) video.currentTime = 0;
    void video.play().catch(() => setPlaying(false));
  };

  const pause = () => videoRef.current?.pause();

  const handlePointerDown = (event: PointerEvent<HTMLButtonElement>) => {
    if (!event.isPrimary) return;
    event.currentTarget.setPointerCapture(event.pointerId);
    pressedAtRef.current = performance.now();
    wasPlayingRef.current = !(videoRef.current?.paused ?? true);
    setHolding(true);
    play();
  };

  const handlePointerUp = (event: PointerEvent<HTMLButtonElement>) => {
    if (!event.isPrimary) return;
    const heldFor = performance.now() - pressedAtRef.current;
    setHolding(false);

    if (heldFor >= HOLD_THRESHOLD_MS || wasPlayingRef.current) {
      pause();
    } else {
      play();
    }
  };

  const handlePointerCancel = () => {
    setHolding(false);
    pause();
  };

  const handleKeyboardClick = (detail: number) => {
    if (detail !== 0) return;
    if (videoRef.current?.paused) play();
    else pause();
  };

  const label = holding
    ? ft('Relâcher pour figer')
    : playing
      ? ft('Toucher pour mettre en pause')
      : ft('Maintenir pour lire');

  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={playing}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerCancel}
      onClick={(event) => handleKeyboardClick(event.detail)}
      onContextMenu={(event) => event.preventDefault()}
      className={`group z-20 inline-flex touch-manipulation select-none items-center gap-2.5 rounded-full border border-white/20 bg-black/45 px-4 py-2.5 text-xs font-medium text-white shadow-lg backdrop-blur-md transition-[background-color,transform] duration-200 active:scale-[0.97] ${className}`}
    >
      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-ink">
        {playing ? <Pause size={13} fill="currentColor" /> : <Play size={13} fill="currentColor" />}
      </span>
      <span>{label}</span>
    </button>
  );
}
