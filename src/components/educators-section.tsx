'use client';

import { motion } from 'framer-motion';
import { User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function EducatorsSection() {
  return (
    <section id="educators" className="py-16 md:py-24 bg-white">
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
            India&apos;s Top Educators to{' '}
            <span className="text-arastu-orange">Learn From</span>
          </h2>
          <div className="w-24 h-1 bg-arastu-green mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
            Learn from the best faculty with years of experience in entrance exam coaching
          </p>
        </motion.div>

        {/* Educators Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
        >
          {educators.map((educator, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                className={`group h-full text-center border-2 ${educator.borderColor} hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
              >
                <CardContent className="p-6">
                  {/* Avatar */}
                  <div
                    className={`w-20 h-20 rounded-full ${educator.color} mx-auto mb-4 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform`}
                  >
                    <User className="size-10 text-white" />
                  </div>

                  {/* Name */}
                  <h3 className="text-lg font-bold text-arastu-dark">
                    {educator.name}
                  </h3>

                  {/* Subject */}
                  <p className="text-sm font-semibold text-arastu-orange mb-3">
                    {educator.subject}
                  </p>

                  {/* Bio */}
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {educator.bio}
                  </p>

                  {/* View Profile Button */}
                  <Button
                    variant="outline"
                    className="text-sm font-medium hover:bg-arastu-orange hover:text-white hover:border-arastu-orange transition-colors"
                  >
                    View Profile
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
