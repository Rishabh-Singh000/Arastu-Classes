'use client';

import { useEffect, useState, useCallback } from 'react';
import { useReveal, useHasBeenInView } from '@/hooks/use-reveal';

const stats = [
  { value: 10000, suffix: '+', label: 'Students' },
  { value: 50000, suffix: '+', label: 'Subscribers' },
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 98, suffix: '%', label: 'Satisfaction' },
];

function AnimatedCounter({
  value,
  suffix,
  inView,
}: {
  value: number;
  suffix: string;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  const animateCount = useCallback(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  useEffect(() => {
    const cleanup = animateCount();
    return cleanup;
  }, [animateCount]);

  return (
    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-arastu-orange">
      {inView ? count.toLocaleString() : '0'}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const gridRef = useReveal<HTMLDivElement>();
  const { ref, observe } = useHasBeenInView<HTMLDivElement>();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const cleanup = observe(() => setInView(true));
    return cleanup;
  }, [observe]);

  return (
    <section ref={ref} className="py-10 sm:py-14 md:py-16 lg:py-20 bg-arastu-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={gridRef}
          className="reveal-up grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <AnimatedCounter
                value={stat.value}
                suffix={stat.suffix}
                inView={inView}
              />
              <p className="text-gray-300 text-xs sm:text-sm md:text-base mt-2 font-medium">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
