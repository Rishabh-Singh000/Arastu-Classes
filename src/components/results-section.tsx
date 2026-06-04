'use client';

import { useEffect, useState, useCallback } from 'react';
import { GraduationCap, Medal, TrendingUp, Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useReveal, useHasBeenInView } from '@/hooks/use-reveal';

const stats = [
  { icon: GraduationCap, value: 5000, suffix: '+', label: 'Students Trained' },
  { icon: Medal, value: 500, suffix: '+', label: 'Selections' },
  { icon: TrendingUp, value: 95, suffix: '%', label: 'Success Rate' },
  { icon: Star, value: 50, suffix: '+', label: 'Top 100 Ranks' },
];

const toppers = [
  {
    name: 'Aarav Patel',
    exam: 'AISSEE 2024',
    rank: 'AIR 12',
    score: '96%',
    color: 'arastu-orange',
  },
  {
    name: 'Priya Singh',
    exam: 'JNVST 2024',
    rank: 'AIR 5',
    score: '98%',
    color: 'arastu-green',
  },
  {
    name: 'Rohit Kumar',
    exam: 'AISSEE 2024',
    rank: 'AIR 23',
    score: '94%',
    color: 'arastu-orange',
  },
  {
    name: 'Ananya Sharma',
    exam: 'JNVST 2024',
    rank: 'AIR 8',
    score: '97%',
    color: 'arastu-green',
  },
  {
    name: 'Vikram Yadav',
    exam: 'AISSEE 2024',
    rank: 'AIR 15',
    score: '95%',
    color: 'arastu-orange',
  },
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
    <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white">
      {inView ? count.toLocaleString() : '0'}
      {suffix}
    </span>
  );
}

export default function ResultsSection() {
  const titleRef = useReveal<HTMLDivElement>();
  const statsRef = useReveal<HTMLDivElement>();
  const toppersRef = useReveal<HTMLDivElement>();
  const { ref: counterRef, observe } = useHasBeenInView<HTMLDivElement>();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const cleanup = observe(() => setInView(true));
    return cleanup;
  }, [observe]);

  return (
    <section id="results" ref={counterRef} className="py-10 sm:py-14 md:py-16 lg:py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-arastu-green via-green-800 to-arastu-dark" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMSIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjA1KSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3QgZmlsbD0idXJsKCNnKSIgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIvPjwvc3ZnPg==')] opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div
          ref={titleRef}
          className="reveal-up text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-[28px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Record Breaking <span className="text-arastu-gold">Results</span>
          </h2>
          <div className="w-24 h-1 bg-arastu-gold mx-auto rounded-full" />
          <p className="text-green-100 mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Our students consistently achieve top ranks in both Sainik School and JNV
            entrance exams
          </p>
        </div>

        {/* Stats Counters */}
        <div
          ref={statsRef}
          className="reveal-up grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-10 sm:mb-12 md:mb-16"
          style={{ transitionDelay: '200ms' }}
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 sm:p-5 md:p-6 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-3">
                <stat.icon className="size-6 text-arastu-gold" />
              </div>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} inView={inView} />
              <p className="text-green-100 text-xs sm:text-sm mt-2 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Toppers Showcase */}
        <div
          ref={toppersRef}
          className="reveal-up"
          style={{ transitionDelay: '300ms' }}
        >
          <h3 className="text-center text-xl sm:text-2xl font-bold text-white mb-8">
            🏆 Recent Toppers
          </h3>
          <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:pb-4">
            {toppers.map((topper, index) => (
              <Card
                key={index}
                className="min-w-[200px] sm:min-w-[220px] md:min-w-[260px] shrink-0 snap-start border border-white/20 bg-white/10 backdrop-blur-sm"
              >
                <CardContent className="p-4 sm:p-5 text-center">
                  {/* Avatar */}
                  <div
                    className={`w-16 h-16 rounded-full mx-auto mb-3 flex items-center justify-center text-xl font-bold text-white ${
                      topper.color === 'arastu-orange' ? 'bg-arastu-orange' : 'bg-arastu-green'
                    }`}
                  >
                    {topper.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </div>
                  <h4 className="text-lg font-bold text-white">{topper.name}</h4>
                  <p className="text-sm text-green-200 mb-3">{topper.exam}</p>
                  <div className="flex justify-center gap-4">
                    <div>
                      <p
                        className={`text-xl font-bold ${
                          topper.color === 'arastu-orange' ? 'text-arastu-orange' : 'text-green-300'
                        }`}
                      >
                        {topper.rank}
                      </p>
                      <p className="text-xs text-green-200">Rank</p>
                    </div>
                    <div className="w-px bg-white/20" />
                    <div>
                      <p className="text-xl font-bold text-arastu-gold">{topper.score}</p>
                      <p className="text-xs text-green-200">Score</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
