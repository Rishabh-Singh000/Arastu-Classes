'use client';

import { Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MobileBottomBar() {
  return (
    <div className="md:hidden">
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 200, damping: 20 }}
        className="fixed bottom-0 left-0 right-0 z-30 bg-white border-t-2 border-arastu-orange safe-bottom shadow-[0_-4px_20px_rgba(0,0,0,0.1)]"
      >
        <div className="flex items-stretch">
          {/* Call Now */}
          <a
            href="tel:+919876543210"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-arastu-green hover:bg-green-700 transition-colors touch-target"
            aria-label="Call Now"
          >
            <Phone className="size-5 text-white" />
            <span className="text-white font-semibold text-[15px]">Call Now</span>
          </a>

          {/* Divider */}
          <div className="w-px bg-arastu-orange/20" />

          {/* WhatsApp */}
          <a
            href="https://wa.me/919876543210?text=Hello%20Sir%2C%20I%20would%20like%20information%20regarding%20admissions."
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-[#25D366] hover:bg-[#20BD5A] transition-colors touch-target"
            aria-label="Chat on WhatsApp"
          >
            <MessageCircle className="size-5 text-white" />
            <span className="text-white font-semibold text-[15px]">WhatsApp</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
}
