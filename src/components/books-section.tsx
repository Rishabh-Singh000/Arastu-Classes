'use client';

import { BookOpen, ShoppingCart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useReveal, useRevealStagger } from '@/hooks/use-reveal';

const books = [
  {
    title: 'Complete Study Guide Class 6 - Sainik School',
    description:
      'Comprehensive guide covering Mathematics, English, GK, and Intelligence for AISSEE Class 6 entrance exam.',
    tag: 'Sainik School',
  },
  {
    title: 'Complete Study Guide Class 9 - Sainik School',
    description:
      'Detailed study material for AISSEE Class 9 including Maths, English, Science, Social Science, and Intelligence.',
    tag: 'Sainik School',
  },
  {
    title: 'JNV Entrance Exam Guide Class 6',
    description:
      'All-in-one preparation book for JNVST Class 6 with Mental Ability, Arithmetic, and Language sections.',
    tag: 'JNV',
  },
  {
    title: 'JNV Entrance Exam Guide Class 9',
    description:
      'Thorough preparation guide for JNVST Class 9 covering Hindi, English, Maths, and Science subjects.',
    tag: 'JNV',
  },
  {
    title: 'Previous Year Solved Papers',
    description:
      'Collection of last 10 years solved papers for both Sainik School and JNV entrance exams with answer keys.',
    tag: 'Practice',
  },
  {
    title: 'Subject-wise Preparation Combo',
    description:
      'Bundle of subject-specific books for targeted preparation. Covers all subjects for both exams at best price.',
    tag: 'Combo Pack',
  },
];

export default function BooksSection() {
  const titleRef = useReveal<HTMLDivElement>();
  const gridRef = useRevealStagger<HTMLDivElement>();

  return (
    <section id="books" className="py-10 sm:py-14 md:py-16 lg:py-24 bg-arastu-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div
          ref={titleRef}
          className="reveal-up text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-[28px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-arastu-dark mb-4">
            Study Resources for{' '}
            <span className="text-arastu-orange">Exam Preparation</span>
          </h2>
          <div className="w-24 h-1 bg-arastu-green mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Expertly curated books and study material designed by our experienced faculty
          </p>
        </div>

        {/* Books Grid / Mobile Carousel */}
        <div
          ref={gridRef}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide -mx-4 px-4 sm:mx-0 sm:px-0 sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:gap-4 sm:overflow-visible sm:pb-0 sm:snap-none"
        >
          {books.map((book, index) => (
            <div key={index} className="reveal-up min-w-[280px] sm:min-w-0 shrink-0 snap-start" style={{ transitionDelay: `${index * 100}ms` }}>
              <Card className="group h-full border-0 shadow-md hover:shadow-2xl transition-all duration-300 lg:hover:-translate-y-1 bg-white">
                <CardContent className="p-4 sm:p-5 md:p-6">
                  {/* Book Icon */}
                  <div className="w-16 h-20 rounded-lg bg-arastu-orange/10 flex items-center justify-center mb-4 group-hover:bg-arastu-orange/20 transition-colors">
                    <BookOpen className="size-8 text-arastu-orange" />
                  </div>

                  {/* Tag */}
                  <span className="inline-block px-2 py-0.5 text-xs font-semibold rounded bg-arastu-green/10 text-arastu-green mb-3">
                    {book.tag}
                  </span>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-bold text-arastu-dark mb-2 leading-tight">
                    {book.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {book.description}
                  </p>

                  {/* Buy Button */}
                  <Button className="w-full min-h-[48px] bg-arastu-green hover:bg-green-700 text-white font-semibold">
                    <ShoppingCart className="size-4 mr-2" />
                    Buy Now
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
