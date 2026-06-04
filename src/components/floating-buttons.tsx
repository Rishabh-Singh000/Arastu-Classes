'use client';

import { motion } from 'framer-motion';
import { Phone, MessageCircle } from 'lucide-react';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-20 md:bottom-6 right-3 md:right-6 z-40 flex flex-col items-center gap-3">
      {/* Call Button */}
      <motion.a
        href="tel:+919876543210"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-arastu-green hover:bg-green-700 shadow-lg shadow-green-600/30 flex items-center justify-center transition-colors"
        aria-label="Call Arastu Classes"
      >
        <Phone className="size-6 text-white" />
      </motion.a>

      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919876543210?text=Hello%20Sir%2C%20I%20would%20like%20information%20regarding%20admissions."
        target="_blank"
        rel="noopener noreferrer"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 1.2, type: 'spring', stiffness: 200 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BD5A] shadow-lg shadow-green-500/30 flex items-center justify-center transition-colors"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="size-6 text-white" />
      </motion.a>
    </div>
  );
}
