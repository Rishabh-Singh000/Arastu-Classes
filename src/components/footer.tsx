'use client';

import Image from 'next/image';
import { Facebook, Instagram, Youtube, Twitter, Phone, Mail, MapPin } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#' },
  { label: 'About Us', href: '#' },
  { label: 'Courses', href: '#courses' },
  { label: 'Results', href: '#results' },
  { label: 'Contact', href: '#contact' },
];

const courseLinks = [
  { label: 'Sainik School Class 6', href: '#courses' },
  { label: 'Sainik School Class 9', href: '#courses' },
  { label: 'JNV Class 6', href: '#courses' },
  { label: 'JNV Class 9', href: '#courses' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

export default function Footer() {
  return (
    <footer className="bg-arastu-dark text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {/* Column 1: Logo & Social */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo.png"
                alt="Arastu Classes Logo"
                width={36}
                height={36}
                className="object-contain"
              />
              <div>
                <p className="text-lg font-bold text-white">Arastu Classes</p>
                <p className="text-xs text-arastu-green font-medium">
                  Sainik & Navodaya Coaching
                </p>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-gray-400">
              India&apos;s premier coaching institute for Sainik School and Jawahar
              Navodaya Vidyalaya entrance exams. Building futures since 2020.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-white/10 hover:bg-arastu-orange flex items-center justify-center transition-colors"
                >
                  <social.icon className="size-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-base font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-arastu-orange transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Courses */}
          <div>
            <h3 className="text-base font-bold text-white mb-4">Courses</h3>
            <ul className="space-y-3">
              {courseLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-arastu-orange transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-base font-bold text-white mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="size-4 text-arastu-orange shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">
                  Arastu Classes Building, Main Road, Near Bus Stand, District - 250001
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 text-arastu-orange shrink-0" />
                <span className="text-sm text-gray-400">+91 98765 43210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 text-arastu-orange shrink-0" />
                <span className="text-sm text-gray-400">info@arastuclasses.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-sm text-gray-500">
              Copyright &copy; 2025 Arastu Classes. All Rights Reserved.
            </p>
            <div className="flex gap-4 text-sm text-gray-500">
              <a href="#" className="hover:text-arastu-orange transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-arastu-orange transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
