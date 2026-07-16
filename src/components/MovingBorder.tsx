import React, { useRef } from 'react';
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from 'framer-motion';

interface MovingBorderTrackProps {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
}

function MovingBorderTrack({
  children,
  duration = 3000,
  rx = '16',
  ry = '16',
}: MovingBorderTrackProps) {
  const pathRef = useRef<SVGRectElement>(null);
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).x);
  const y = useTransform(progress, (val) => pathRef.current?.getPointAtLength(val).y);
  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute inset-0 h-full w-full"
        width="100%"
        height="100%"
      >
        <rect fill="none" width="100%" height="100%" rx={rx} ry={ry} ref={pathRef} />
      </svg>
      <motion.div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          display: 'inline-block',
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
}

export interface MovingBorderProps {
  children: React.ReactNode;
  duration?: number;
  /** hex or rgba color of the traveling glow */
  color?: string;
  className?: string;
  innerClassName?: string;
}

/**
 * Wraps children with an animated border that travels around the perimeter.
 * The outer element is `relative overflow-hidden p-px rounded-2xl`.
 * Pass `className` to extend the outer container, `innerClassName` for the inner wrapper.
 */
export function MovingBorder({
  children,
  duration = 3000,
  color = '#326B45',
  className = '',
  innerClassName = '',
}: MovingBorderProps) {
  return (
    <div className={`relative overflow-hidden p-px ${className}`}>
      {/* Animated border track — lives in the 1 px outer strip */}
      <div className="pointer-events-none absolute inset-0" style={{ borderRadius: 'inherit' }}>
        <MovingBorderTrack duration={duration}>
          <div
            className="h-20 w-20 opacity-75"
            style={{
              background: `radial-gradient(${color} 40%, transparent 60%)`,
            }}
          />
        </MovingBorderTrack>
      </div>
      {/* Content */}
      <div className={`relative ${innerClassName}`} style={{ borderRadius: 'inherit' }}>
        {children}
      </div>
    </div>
  );
}
