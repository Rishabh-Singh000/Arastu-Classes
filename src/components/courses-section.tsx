'use client';

import { School, Shield, CheckCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useReveal, useRevealStagger } from '@/hooks/use-reveal';

const courses = [
  {
    icon: Shield,
    title: 'Sainik School Entrance AISSEE',
    classes: 'Class 6th & Class 9th',
    color: 'arastu-orange',
    features: [
      'Complete Syllabus Coverage for AISSEE',
      'Weekly Mock Tests & Practice Papers',
      'Personality Development & Interview Prep',
      'Physical Fitness Guidance Included',
    ],
  },
  {
    icon: School,
    title: 'Jawahar Navodaya Vidyalaya JNVST',
    classes: 'Class 6th & Class 9th',
    color: 'arastu-green',
    features: [
      'Comprehensive JNVST Exam Preparation',
      'Mental Ability & Aptitude Training',
      'Previous Year Papers Analysis & Solutions',
      'Regular Progress Tracking & Reports',
    ],
  },
];

export default function CoursesSection() {
  const titleRef = useReveal<HTMLDivElement>();
  const gridRef = useRevealStagger<HTMLDivElement>();

  return (
    <section id="courses" className="py-10 sm:py-14 md:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div
          ref={titleRef}
          className="reveal-up text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="mobile-h2 text-[28px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-arastu-dark mb-4">
            Our Courses
          </h2>
          <div className="w-24 h-1 bg-arastu-green mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Expertly crafted courses for Sainik School and Navodaya Vidyalaya entrance exam preparation
          </p>
        </div>

        {/* Course Cards */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {courses.map((course, index) => (
            <div key={index} className="reveal-up" style={{ transitionDelay: `${index * 200}ms` }}>
              <Card className="group relative overflow-hidden border-2 hover:border-transparent transition-all duration-300 hover:shadow-2xl lg:hover:-translate-y-1 h-full">
                {/* Color accent bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 ${
                    course.color === 'arastu-orange' ? 'bg-arastu-orange' : 'bg-arastu-green'
                  }`}
                />

                <CardHeader className="pb-2">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-14 h-14 rounded-xl flex items-center justify-center shrink-0 ${
                        course.color === 'arastu-orange'
                          ? 'bg-arastu-orange/10'
                          : 'bg-arastu-green/10'
                      }`}
                    >
                      <course.icon
                        className={`size-7 ${
                          course.color === 'arastu-orange' ? 'text-arastu-orange' : 'text-arastu-green'
                        }`}
                      />
                    </div>
                    <div>
                      <CardTitle className="text-base sm:text-lg md:text-xl font-bold text-arastu-dark leading-tight">
                        {course.title}
                      </CardTitle>
                      <CardDescription className="text-sm font-medium mt-1">
                        {course.classes}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-2">
                  <ul className="space-y-3 mb-6">
                    {course.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle
                          className={`size-5 shrink-0 mt-0.5 ${
                            course.color === 'arastu-orange'
                              ? 'text-arastu-orange'
                              : 'text-arastu-green'
                          }`}
                        />
                        <span className="text-sm text-arastu-dark/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant="outline"
                    className={`group/btn w-full font-semibold min-h-[48px] transition-all ${
                      course.color === 'arastu-orange'
                        ? 'border-arastu-orange text-arastu-orange hover:bg-arastu-orange hover:text-white'
                        : 'border-arastu-green text-arastu-green hover:bg-arastu-green hover:text-white'
                    }`}
                  >
                    Explore Course
                    <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
