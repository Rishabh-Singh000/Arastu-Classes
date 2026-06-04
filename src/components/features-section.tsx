'use client';

import { motion } from 'framer-motion';
import {
  Monitor,
  ClipboardCheck,
  FileText,
  HelpCircle,
  Users,
  Award,
} from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function FeaturesSection() {
  return (
    <section id="features" className="py-16 md:py-24 bg-arastu-light">
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
            Why Choose <span className="text-arastu-orange">Arastu Classes?</span>
          </h2>
          <div className="w-24 h-1 bg-arastu-green mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
            We provide everything your child needs to crack the toughest entrance exams
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group h-full border-0 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-arastu-orange/10 flex items-center justify-center mb-4 group-hover:bg-arastu-orange/20 transition-colors">
                    <feature.icon className="size-7 text-arastu-orange" />
                  </div>
                  <h3 className="text-lg font-bold text-arastu-dark mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
