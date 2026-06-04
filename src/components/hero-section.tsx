'use client';

import { useState } from 'react';
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
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section className="relative flex items-center overflow-hidden pt-24 pb-16 md:pt-32 md:pb-24 lg:min-h-[90vh]">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-banner.webp"
          alt="Arastu Classes Hero Banner"
          fill
          sizes="100vw"
          className={`object-cover object-center transition-opacity duration-700 ${imgLoaded ? 'opacity-100' : 'opacity-0'}`}
          quality={80}
          onLoad={() => setImgLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-arastu-dark/95 via-arastu-dark/80 to-arastu-dark/60 md:bg-gradient-to-r md:from-arastu-dark/90 md:via-arastu-dark/70 md:to-arastu-dark/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl mx-auto text-center">
          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <Badge className="animate-float bg-arastu-gold text-white px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-semibold border-0 shadow-lg">
              🎓 Admissions Open 2025-26
            </Badge>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-[34px] leading-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-4"
          >
            Arastu{' '}
            <span className="text-arastu-orange">Classes</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-base sm:text-lg md:text-xl font-semibold text-arastu-orange mb-4 md:mb-6"
          >
            India&apos;s Premier Sainik &amp; Navodaya Coaching Institute
          </motion.p>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="text-sm sm:text-base md:text-lg text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
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
            className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 mb-10 md:mb-12 w-full sm:w-auto"
          >
            <a href="#courses" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-arastu-orange hover:bg-orange-600 text-white font-bold text-base px-8 py-6 shadow-xl shadow-arastu-orange/30 mobile-btn"
              >
                Explore Courses
              </Button>
            </a>
            <a href="#demo" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto border-2 border-arastu-green text-white hover:bg-arastu-green hover:text-white font-bold text-base px-8 py-6 bg-transparent mobile-btn"
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
            className="grid grid-cols-3 gap-3 sm:gap-4 md:flex md:justify-center md:gap-8 text-center"
          >
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2 sm:gap-3 justify-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0">
                  <badge.icon className="size-5 sm:size-6 text-arastu-orange" />
                </div>
                <div>
                  <p className="text-lg sm:text-xl md:text-2xl font-bold text-white">{badge.label}</p>
                  <p className="text-xs sm:text-sm text-gray-300">{badge.sublabel}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
