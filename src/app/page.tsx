'use client';

import dynamic from 'next/dynamic';
import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero-section';
import { SectionSkeleton, FullWidthSkeleton } from '@/components/section-skeleton';

// Above-fold: loaded synchronously
// Below-fold: lazy-loaded with dynamic imports + loading skeletons

const CoursesSection = dynamic(
  () => import('@/components/courses-section').then((m) => m.default),
  { loading: () => <SectionSkeleton />, ssr: false }
);

const FeaturesSection = dynamic(
  () => import('@/components/features-section').then((m) => m.default),
  { loading: () => <SectionSkeleton />, ssr: false }
);

const DemoSection = dynamic(
  () => import('@/components/demo-section').then((m) => m.default),
  { loading: () => <SectionSkeleton />, ssr: false }
);

const BooksSection = dynamic(
  () => import('@/components/books-section').then((m) => m.default),
  { loading: () => <SectionSkeleton />, ssr: false }
);

const ResultsSection = dynamic(
  () => import('@/components/results-section').then((m) => m.default),
  { loading: () => <SectionSkeleton />, ssr: false }
);

const EducatorsSection = dynamic(
  () => import('@/components/educators-section').then((m) => m.default),
  { loading: () => <SectionSkeleton />, ssr: false }
);

const TestimonialsSection = dynamic(
  () => import('@/components/testimonials-section').then((m) => m.default),
  { loading: () => <SectionSkeleton />, ssr: false }
);

const GoogleReviewsSection = dynamic(
  () => import('@/components/google-reviews-section').then((m) => m.default),
  { loading: () => <SectionSkeleton />, ssr: false }
);

const StatsSection = dynamic(
  () => import('@/components/stats-section').then((m) => m.default),
  { loading: () => <FullWidthSkeleton />, ssr: false }
);

const ContactSection = dynamic(
  () => import('@/components/contact-section').then((m) => m.default),
  { loading: () => <SectionSkeleton />, ssr: false }
);

const Footer = dynamic(
  () => import('@/components/footer').then((m) => m.default),
  { loading: () => <div className="h-48" />, ssr: false }
);

const FloatingButtons = dynamic(
  () => import('@/components/floating-buttons').then((m) => m.default),
  { ssr: false }
);

const MobileBottomBar = dynamic(
  () => import('@/components/mobile-bottom-bar').then((m) => m.default),
  { ssr: false }
);

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1 mobile-bottom-offset pb-16 md:pb-0">
        <HeroSection />
        <CoursesSection />
        <FeaturesSection />
        <DemoSection />
        <BooksSection />
        <ResultsSection />
        <EducatorsSection />
        <TestimonialsSection />
        <GoogleReviewsSection />
        <StatsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingButtons />
      <MobileBottomBar />
    </div>
  );
}
