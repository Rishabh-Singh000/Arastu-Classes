'use client';

import { User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useReveal, useRevealStagger } from '@/hooks/use-reveal';

const educators = [
  {
    name: 'Rajesh Sharma',
    subject: 'Mathematics',
    initials: 'RS',
    bio: '15+ years of experience in teaching mathematics for competitive entrance exams. Expert in quantitative aptitude and problem-solving techniques.',
    color: 'bg-arastu-orange',
    borderColor: 'border-arastu-orange/20',
  },
  {
    name: 'Priya Verma',
    subject: 'General Knowledge',
    initials: 'PV',
    bio: '10+ years of expertise in GK and current affairs. Her students consistently score highest in the GK section of entrance exams.',
    color: 'bg-arastu-green',
    borderColor: 'border-arastu-green/20',
  },
  {
    name: 'Amit Kumar',
    subject: 'English & Reasoning',
    initials: 'AK',
    bio: '12+ years of teaching English grammar, vocabulary, and logical reasoning. Known for innovative teaching methods that make learning fun.',
    color: 'bg-arastu-gold',
    borderColor: 'border-arastu-gold/20',
  },
  {
    name: 'Sneha Patel',
    subject: 'Science & Hindi',
    initials: 'SP',
    bio: '8+ years of experience in science and Hindi language. Her interactive teaching style helps students grasp complex concepts easily.',
    color: 'bg-arastu-dark',
    borderColor: 'border-arastu-dark/20',
  },
];

export default function EducatorsSection() {
  const titleRef = useReveal<HTMLDivElement>();
  const gridRef = useRevealStagger<HTMLDivElement>();

  return (
    <section id="educators" className="py-10 sm:py-14 md:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div
          ref={titleRef}
          className="reveal-up text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-[28px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-arastu-dark mb-4">
            India&apos;s Top Educators to{' '}
            <span className="text-arastu-orange">Learn From</span>
          </h2>
          <div className="w-24 h-1 bg-arastu-green mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Learn from the best faculty with years of experience in entrance exam coaching
          </p>
        </div>

        {/* Educators Grid / Mobile Scroll */}
        <div
          ref={gridRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-6 lg:gap-8 md:overflow-visible md:pb-0 md:snap-none"
        >
          {educators.map((educator, index) => (
            <div key={index} className="reveal-up" style={{ transitionDelay: `${index * 150}ms` }}>
              <Card
                className={`h-full text-center border-2 ${educator.borderColor} min-w-[260px] md:min-w-0 shrink-0 snap-start md:shrink group hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out cursor-default`}
              >
                <CardContent className="p-5 sm:p-6">
                  {/* Avatar */}
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full ${educator.color} mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <User className="size-8 sm:size-10 text-white" />
                  </div>

                  {/* Name */}
                  <h3 className="text-base sm:text-lg font-bold text-arastu-dark group-hover:text-arastu-orange transition-colors duration-300">
                    {educator.name}
                  </h3>

                  {/* Subject */}
                  <p className="text-sm font-semibold text-arastu-orange mb-3">
                    {educator.subject}
                  </p>

                  {/* Bio */}
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {educator.bio}
                  </p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
