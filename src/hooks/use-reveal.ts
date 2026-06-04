'use client';

import { useEffect, useRef, useCallback } from 'react';

/**
 * Lightweight IntersectionObserver hook that adds a CSS class
 * when the element enters the viewport. Replaces framer-motion's
 * whileInView for simple fade/slide animations.
 *
 * Usage:
 *   const ref = useReveal<HTMLDivElement>();
 *   return <div ref={ref} className="reveal-up">...</div>
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options?: IntersectionObserverInit
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return ref;
}

/**
 * Reveals all children with staggered delay when the container
 * enters the viewport. Replaces framer-motion's staggerChildren.
 *
 * Usage:
 *   const ref = useRevealStagger();
 *   return (
 *     <div ref={ref}>
 *       {items.map((item, i) => (
 *         <div key={i} className="reveal-up" style={{ transitionDelay: `${i * 100}ms` }}>...</div>
 *       ))}
 *     </div>
 *   );
 */
export function useRevealStagger<T extends HTMLElement = HTMLDivElement>(
  options?: IntersectionObserverInit
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const children = entry.target.querySelectorAll(
            '.reveal-up, .reveal-left, .reveal-right, .reveal-scale'
          );
          children.forEach((child) => {
            child.classList.add('revealed');
          });
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.05, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return ref;
}

/**
 * Returns true once the element has been in view.
 * Useful for triggering JS-based animations (counters, etc.)
 * without importing framer-motion.
 */
export function useHasBeenInView<T extends HTMLElement = HTMLDivElement>(
  options?: IntersectionObserverInit
) {
  const ref = useRef<T>(null);
  const triggered = useRef(false);

  const observe = useCallback((onVisible: () => void) => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (!triggered.current) {
            triggered.current = true;
            onVisible();
          }
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2, ...options }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return { ref, observe };
}
