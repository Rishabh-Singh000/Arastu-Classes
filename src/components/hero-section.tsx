'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Users, Trophy, CalendarDays } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const trustBadges = [
  { icon: Users, label: '5000+', sublabel: 'Students' },
  { icon: Trophy, label: '100+', sublabel: 'Selections' },
  { icon: CalendarDays, label: '5+', sublabel: 'Years' },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-banner.png"
          alt="Arastu Classes Hero Banner"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-arastu-dark/90 via-arastu-dark/70 to-arastu-dark/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-3xl">
          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <Badge className="animate-float bg-arastu-gold text-white px-4 py-1.5 text-sm font-semibold border-0 shadow-lg">
              🎓 Admissions Open 2025-26
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4"
          >
            Arastu{' '}
            <span className="text-arastu-orange">Classes</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-xl sm:text-2xl md:text-3xl font-semibold text-arastu-orange mb-6"
          >
            India&apos;s Premier Sainik &amp; Navodaya Coaching Institute
          </motion.p>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-base sm:text-lg text-gray-300 mb-8 max-w-xl leading-relaxed"
          >
            Comprehensive preparation for AISSEE (Sainik School) and JNVST (Jawahar
            Navodaya Vidyalaya) entrance exams. Join thousands of successful students
            who trusted Arastu Classes for their bright future.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9 }}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a href="#courses">
              <Button
                size="lg"
                className="bg-arastu-orange hover:bg-orange-600 text-white font-bold text-base px-8 py-6 shadow-xl shadow-arastu-orange/30"
              >
                Explore Courses
              </Button>
            </a>
            <a href="#demo">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-arastu-green text-arastu-green hover:bg-arastu-green hover:text-white font-bold text-base px-8 py-6 bg-transparent"
              >
                Book Free Demo
              </Button>
            </a>
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 1.1 }}
            className="flex flex-wrap gap-6 sm:gap-8"
          >
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
                  <badge.icon className="size-6 text-arastu-orange" />
                </div>
                <div>
                  <p className="text-xl sm:text-2xl font-bold text-white">{badge.label}</p>
                  <p className="text-sm text-gray-300">{badge.sublabel}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
