import { useEffect, useRef, useState } from 'react';

const IS_COMPACT_VIEWPORT =
  typeof window !== 'undefined' && window.matchMedia('(max-width: 1023px)').matches;

export function useReveal<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.15,
  rootMargin = '0px 0px -10% 0px',
) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(IS_COMPACT_VIEWPORT);

  useEffect(() => {
    if (visible) return;

    // Reveals add little value on touch-sized layouts and can leave a large
    // empty block in view while a fast swipe waits for IntersectionObserver.
    if (window.matchMedia('(max-width: 1023px)').matches) {
      setVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin, visible]);

  return { ref, visible };
}
