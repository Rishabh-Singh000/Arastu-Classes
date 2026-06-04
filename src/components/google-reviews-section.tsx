'use client';

import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const googleReviews = [
  {
    name: 'Alok Mishra',
    text: 'Overall, ARASTU CLASSES is an excellent place for anyone who wants to learn and improve their skills! The faculty is very expert and knowledgeable.',
    rating: 5,
    time: '3 weeks ago',
  },
  {
    name: 'Vikash Kumar',
    text: 'Good Environment, Mr. R.V Singh sir is very knowledgeable person. Quality of coaching is incredible. Coaching is more on practical knowledge.',
    rating: 5,
    time: '1 month ago',
  },
  {
    name: 'Parent Review',
    text: 'The classes are fun and engaging, making learning enjoyable. My child felt supported in studies and confidence grew. Excellent coaching centre!',
    rating: 5,
    time: '1 month ago',
  },
  {
    name: 'Student',
    text: 'I had a great experience with ARASTU CLASSES. The teachers explain things clearly and help with every doubt. This coaching truly prioritizes student success!',
    rating: 5,
    time: '2 months ago',
  },
  {
    name: 'Ankit Yadav',
    text: 'Kudos to the team for their excellent work! The study material is top-notch and each chapter is explained with examples that make understanding easy.',
    rating: 5,
    time: '2 months ago',
  },
  {
    name: 'Saurabh Patel',
    text: 'Best coaching institute for Sainik and Navodaya preparation in Gorakhpur. The personal attention to every student is what sets them apart from others.',
    rating: 5,
    time: '3 months ago',
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

export default function GoogleReviewsSection() {
  return (
    <section className="py-10 sm:py-14 md:py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title with Google Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-[28px] sm:text-3xl md:text-4xl lg:text-5xl font-bold text-arastu-dark mb-4">
            What People <span className="text-arastu-orange">Say About Us</span>
          </h2>
          <div className="w-24 h-1 bg-arastu-green mx-auto rounded-full" />
          <p className="text-muted-foreground mt-4 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Real reviews from our students and parents on Google
          </p>

          {/* Google Rating Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-3 mt-6 px-5 py-3 bg-white rounded-2xl shadow-lg border border-gray-100"
          >
            <GoogleLogo className="size-8" />
            <div className="text-left">
              <div className="flex items-center gap-1">
                <span className="text-2xl font-bold text-arastu-dark">5.0</span>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="size-4 fill-[#FBBC04] text-[#FBBC04]" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-muted-foreground">Based on Google reviews</p>
            </div>
          </motion.div>
        </motion.div>

        {/* Reviews Grid / Mobile Scroll */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 scrollbar-hide -mx-4 px-4 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 lg:gap-6 md:overflow-visible md:pb-0 md:snap-none"
        >
          {googleReviews.map((review, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full border border-gray-100 shadow-sm hover:shadow-md transition-shadow min-w-[280px] md:min-w-0 shrink-0 snap-start md:shrink">
                <CardContent className="p-5 sm:p-6">
                  {/* Header: Google icon + Stars */}
                  <div className="flex items-center justify-between mb-4">
                    <GoogleLogo className="size-5 opacity-60" />
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`size-4 ${
                            i < review.rating
                              ? 'fill-[#FBBC04] text-[#FBBC04]'
                              : 'fill-gray-200 text-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Review Text */}
                  <p className="text-sm sm:text-[15px] text-arastu-dark/80 leading-relaxed mb-5">
                    &ldquo;{review.text}&rdquo;
                  </p>

                  {/* Reviewer */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-50">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-full bg-arastu-orange/10 flex items-center justify-center">
                        <span className="text-xs font-bold text-arastu-orange">
                          {review.name.split(' ').map((n) => n[0]).join('')}
                        </span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-arastu-dark">{review.name}</p>
                        <p className="text-xs text-muted-foreground">{review.time}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA: See All Reviews */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-8 sm:mt-10"
        >
          <a
            href="https://maps.app.goo.gl/31ELTmWUaCaqCF7A7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border-2 border-gray-200 text-arastu-dark font-semibold text-sm hover:border-arastu-orange hover:text-arastu-orange transition-colors shadow-sm"
          >
            <GoogleLogo className="size-5" />
            See All Reviews on Google
            <ExternalLink className="size-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
