import { useEffect, useRef, useState } from 'react';

export function useActiveSection<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.6,
) {
  const ref = useRef<T | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof IntersectionObserver === 'undefined') {
      setActiveIndex(0);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(
              (entry.target as HTMLElement).dataset.index ?? '0',
            );
            setActiveIndex(index);
          }
        });
      },
      { threshold },
    );

    const cards = node.querySelectorAll<HTMLElement>('[data-index]');
    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, [threshold]);

  return { ref, activeIndex };
}
