import Navbar from '@/components/navbar';
import HeroSection from '@/components/hero-section';
import CoursesSection from '@/components/courses-section';
import FeaturesSection from '@/components/features-section';
import DemoSection from '@/components/demo-section';
import BooksSection from '@/components/books-section';
import ResultsSection from '@/components/results-section';
import EducatorsSection from '@/components/educators-section';
import TestimonialsSection from '@/components/testimonials-section';
import StatsSection from '@/components/stats-section';
import ContactSection from '@/components/contact-section';
import Footer from '@/components/footer';
import FloatingButtons from '@/components/floating-buttons';
import MobileBottomBar from '@/components/mobile-bottom-bar';

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
        <StatsSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingButtons />
      <MobileBottomBar />
    </div>
  );
}
