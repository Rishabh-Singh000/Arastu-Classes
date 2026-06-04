'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Menu, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';

const navLinks = [
  { label: 'Courses', href: '#courses' },
  { label: 'Features', href: '#features' },
  { label: 'Books', href: '#books' },
  { label: 'Results', href: '#results' },
  { label: 'Our Team', href: '#educators' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
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
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 shrink-0">
            <Image
              src="/logo.png"
              alt="Arastu Classes Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <div className="flex flex-col">
              <span className="text-lg md:text-xl font-bold text-arastu-dark leading-tight">
                Arastu Classes
              </span>
              <span className="text-[10px] md:text-xs text-arastu-green font-medium leading-tight">
                Sainik & Navodaya Coaching
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
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

          {/* Mobile Menu */}
          <div className="flex items-center gap-2 lg:hidden">
            <a href="tel:+919876543210" className="text-arastu-orange">
              <Phone className="size-5" />
            </a>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-arastu-dark">
                  <Menu className="size-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] p-0">
                <SheetHeader className="p-6 bg-arastu-orange text-white">
                  <SheetTitle className="flex items-center gap-2 text-white">
                    <Image
                      src="/logo.png"
                      alt="Logo"
                      width={32}
                      height={32}
                      className="object-contain"
                    />
                    Arastu Classes
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col p-4 gap-1">
                  {navLinks.map((link) => (
                    <SheetClose asChild key={link.href}>
                      <a
                        href={link.href}
                        className="px-4 py-3 text-base font-medium text-arastu-dark hover:bg-arastu-orange/10 hover:text-arastu-orange rounded-lg transition-colors"
                      >
                        {link.label}
                      </a>
                    </SheetClose>
                  ))}
                </nav>
                <div className="p-4 flex flex-col gap-3 mt-auto border-t">
                  <a href="#demo">
                    <SheetClose asChild>
                      <Button className="w-full bg-arastu-orange hover:bg-orange-600 text-white font-semibold">
                        Book Free Demo
                      </Button>
                    </SheetClose>
                  </a>
                  <a href="#demo">
                    <SheetClose asChild>
                      <Button className="w-full bg-arastu-green hover:bg-green-700 text-white font-semibold">
                        Enroll Now
                      </Button>
                    </SheetClose>
                  </a>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
