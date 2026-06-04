'use client';

import {
  Monitor,
  ClipboardCheck,
  FileText,
  HelpCircle,
  Users,
  Award,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useReveal, useRevealStagger } from '@/hooks/use-reveal';

const features = [
  {
    icon: Monitor,
    title: 'Live & Recorded Classes',
    description:
      'Attend interactive live sessions and access recorded lectures anytime. Never miss a class with flexible learning options.',
  },
  {
    icon: ClipboardCheck,
    title: 'Mock Tests & Quizzes',
    description:
      'Regular mock tests designed as per the latest exam pattern. Track your performance with detailed analysis and reports.',
  },
  {
    icon: FileText,
    title: 'Daily Practice Papers',
    description:
      'Curated daily practice sheets covering all subjects. Build strong fundamentals with consistent practice every day.',
  },
  {
    icon: HelpCircle,
    title: 'Doubt Solving Sessions',
    description:
      'Dedicated doubt clearing sessions with expert faculty. Get your queries resolved instantly for better understanding.',
  },
  {
    icon: Users,
    title: 'Parent-Teacher Meetings',
    description:
      'Regular PTMs to discuss student progress. Keep parents informed with detailed performance reports and feedback.',
  },
  {
    icon: Award,
    title: 'Expert Mentorship',
    description:
      'Learn from experienced educators with proven track records. Get personalized guidance for exam preparation strategy.',
  },
];

export default function FeaturesSection() {
  const titleRef = useReveal<HTMLDivElement>();
  const gridRef = useRevealStagger<HTMLDivElement>();

  return (
    <section id="features" className="py-10 sm:py-14 md:py-16 lg:py-24 bg-arastu-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div
          ref={titleRef}
          className="reveal-up text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-[28px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-arastu-dark mb-4">
            Why Choose <span className="text-arastu-orange">Arastu Classes?</span>
          </h2>
          <div className="w-24 h-1 bg-arastu-green mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            We provide everything your child needs to crack the toughest entrance exams
          </p>
        </div>

        {/* Features Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
        >
          {features.map((feature, index) => (
            <div key={index} className="reveal-up" style={{ transitionDelay: `${index * 150}ms` }}>
              <Card className="group h-full border-0 shadow-md hover:shadow-xl transition-all duration-300 lg:hover:-translate-y-1 bg-white">
                <CardContent className="p-5 sm:p-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-arastu-orange/10 flex items-center justify-center mb-4 group-hover:bg-arastu-orange/20 transition-colors">
                    <feature.icon className="size-7 text-arastu-orange" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-arastu-dark mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
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
