'use client';

import { useRef, useEffect, useState, useCallback } from 'react';
import { motion, useInView } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';

const testimonials = [
  {
    name: 'Rahul Gupta',
    exam: 'AISSEE - Sainik School',
    text: 'Arastu Classes transformed my preparation completely. The mock tests and doubt sessions were incredibly helpful. I secured AIR 28 in my first attempt!',
    rating: 5,
  },
  {
    name: 'Meera Joshi',
    exam: 'JNVST - Navodaya',
    text: 'The teachers at Arastu Classes are amazing. They explain every concept so clearly. The daily practice papers made me confident for the exam.',
    rating: 5,
  },
  {
    name: 'Arjun Verma',
    exam: 'AISSEE - Sainik School',
    text: 'I joined Arastu Classes in Class 5 and it was the best decision my parents made. The structured curriculum and regular tests helped me crack the exam.',
    rating: 5,
  },
  {
    name: 'Sneha Reddy',
    exam: 'JNVST - Navodaya',
    text: 'The study material provided by Arastu Classes is top-notch. Each chapter is explained with examples that make understanding easy. Highly recommend!',
    rating: 5,
  },
  {
    name: 'Karan Singh',
    exam: 'AISSEE - Sainik School',
    text: 'What sets Arastu Classes apart is their personal attention to every student. The mentorship program helped me stay focused and motivated throughout.',
    rating: 4,
  },
  {
    name: 'Pooja Yadav',
    exam: 'JNVST - Navodaya',
    text: 'Thanks to Arastu Classes, I got selected in JNV with excellent marks. The teachers go above and beyond to ensure every student succeeds. Best coaching!',
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="py-16 md:py-24 bg-arastu-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-arastu-dark mb-4">
            Our <span className="text-arastu-orange">Success Stories</span>
          </h2>
          <div className="w-24 h-1 bg-arastu-green mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
            Hear from students who achieved their dreams with Arastu Classes
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            plugins={[
              Autoplay({
                delay: 4000,
                stopOnInteraction: true,
              }),
            ]}
          >
            <CarouselContent className="-ml-4">
              {testimonials.map((testimonial, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow bg-white">
                    <CardContent className="p-6">
                      {/* Quote Icon */}
                      <Quote className="size-8 text-arastu-orange/20 mb-3" />

                      {/* Stars */}
                      <div className="flex gap-1 mb-4">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className={`size-4 ${
                              i < testimonial.rating
                                ? 'fill-arastu-gold text-arastu-gold'
                                : 'fill-gray-200 text-gray-200'
                            }`}
                          />
                        ))}
                      </div>

                      {/* Quote Text */}
                      <p className="text-sm text-arastu-dark/80 leading-relaxed mb-6">
                        &ldquo;{testimonial.text}&rdquo;
                      </p>

                      {/* Student Info */}
                      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                        <div className="w-10 h-10 rounded-full bg-arastu-orange/10 flex items-center justify-center">
                          <span className="text-sm font-bold text-arastu-orange">
                            {testimonial.name
                              .split(' ')
                              .map((n) => n[0])
                              .join('')}
                          </span>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-arastu-dark">
                            {testimonial.name}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {testimonial.exam}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-12 top-1/3" />
            <CarouselNext className="hidden md:flex -right-12 top-1/3" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}
