import { useEffect, useRef, useState } from 'react';

const IS_MOBILE =
  typeof window !== 'undefined' && window.matchMedia('(max-width: 767px)').matches;

export function useReveal<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.15,
  rootMargin = '0px 0px -10% 0px',
) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(IS_MOBILE);

  useEffect(() => {
    if (visible) return;

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
