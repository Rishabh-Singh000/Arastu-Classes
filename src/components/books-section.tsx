'use client';

import { motion } from 'framer-motion';
import { BookOpen, ShoppingCart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function BooksSection() {
  return (
    <section id="books" className="py-16 md:py-24 bg-arastu-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-arastu-dark mb-4">
            Study Resources for{' '}
            <span className="text-arastu-orange">Exam Preparation</span>
          </h2>
          <div className="w-24 h-1 bg-arastu-green mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
            Expertly curated books and study material designed by our experienced faculty
          </p>
        </motion.div>

        {/* Books Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {books.map((book, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group h-full border-0 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 bg-white">
                <CardContent className="p-6">
                  {/* Book Icon */}
                  <div className="w-16 h-20 rounded-lg bg-arastu-orange/10 flex items-center justify-center mb-4 group-hover:bg-arastu-orange/20 transition-colors">
                    <BookOpen className="size-8 text-arastu-orange" />
                  </div>

                  {/* Tag */}
                  <span className="inline-block px-2 py-0.5 text-xs font-semibold rounded bg-arastu-green/10 text-arastu-green mb-3">
                    {book.tag}
                  </span>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-arastu-dark mb-2 leading-tight">
                    {book.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {book.description}
                  </p>

                  {/* Buy Button */}
                  <Button className="w-full bg-arastu-green hover:bg-green-700 text-white font-semibold">
                    <ShoppingCart className="size-4 mr-2" />
                    Buy Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
