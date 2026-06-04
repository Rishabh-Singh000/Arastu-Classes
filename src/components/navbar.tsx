'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';

const mobileNavLinks = [
  { label: 'Home', href: '#' },
  { label: 'Courses', href: '#courses' },
  { label: 'Faculty', href: '#educators' },
  { label: 'Results', href: '#results' },
  { label: 'About', href: '#courses' },
  { label: 'Contact', href: '#contact' },
];

const desktopNavLinks = [
  { label: 'Courses', href: '#courses' },
  { label: 'Features', href: '#features' },
  { label: 'Books', href: '#books' },
  { label: 'Results', href: '#results' },
  { label: 'Our Team', href: '#educators' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b-2 border-arastu-orange'
          : 'bg-white/80 backdrop-blur-sm border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0">
            <Image
              src="/logo.png"
              alt="Arastu Classes Logo"
              width={36}
              height={36}
              className="object-contain md:w-10 md:h-10"
            />
            <div className="flex flex-col">
              <span className="text-base md:text-lg lg:text-xl font-bold text-arastu-dark leading-tight">
                Arastu Classes
              </span>
              <span className="text-[9px] md:text-[10px] lg:text-xs text-arastu-green font-medium leading-tight">
                Sainik & Navodaya Coaching
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {desktopNavLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-arastu-dark hover:text-arastu-orange transition-colors rounded-md hover:bg-arastu-orange/5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a href="#demo">
              <Button className="bg-arastu-orange hover:bg-orange-600 text-white font-semibold">
                Book Free Demo
              </Button>
            </a>
            <a href="#demo">
              <Button className="bg-arastu-green hover:bg-green-700 text-white font-semibold">
                Enroll Now
              </Button>
            </a>
          </div>

          {/* Mobile: CTA Button + Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <a href="#demo" className="shrink-0">
              <Button
                size="sm"
                className="bg-arastu-orange hover:bg-orange-600 text-white font-semibold text-xs sm:text-sm px-3 sm:px-4 h-9 sm:h-10"
              >
                Book Free Demo
              </Button>
            </a>
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-arastu-dark touch-target w-10 h-10">
                  <Menu className="size-5 sm:size-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px] p-0">
                {/* Sheet Header with close button */}
                <SheetHeader className="p-5 sm:p-6 bg-arastu-orange text-white relative">
                  <SheetTitle className="flex items-center gap-2 text-white text-lg">
                    <Image
                      src="/logo.png"
                      alt="Logo"
                      width={28}
                      height={28}
                      className="object-contain"
                    />
                    Arastu Classes
                  </SheetTitle>
                </SheetHeader>

                {/* Navigation Links */}
                <nav className="flex flex-col p-3 gap-0.5 mt-2">
                  {mobileNavLinks.map((link, index) => (
                    <SheetClose asChild key={link.href}>
                      <a
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="px-4 py-3.5 text-base font-medium text-arastu-dark hover:bg-arastu-orange/10 hover:text-arastu-orange rounded-xl transition-colors touch-target"
                      >
                        {link.label}
                      </a>
                    </SheetClose>
                  ))}
                </nav>

                {/* CTA at bottom */}
                <div className="p-4 mt-auto border-t border-gray-100">
                  <SheetClose asChild>
                    <a href="#demo" onClick={() => setMobileOpen(false)}>
                      <Button className="w-full bg-arastu-orange hover:bg-orange-600 text-white font-semibold text-base h-12">
                        Book Free Demo
                      </Button>
                    </a>
                  </SheetClose>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
