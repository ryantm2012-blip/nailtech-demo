import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { SALON_CONTACT } from '../data';

export default function FloatingWhatsApp() {
  const whatsappUrl = `https://wa.me/27723456789?text=Hi%20Blush%20Nail%2520Studio,%2520I'd%2520like%2520to%2520enquire%2520about%2520booking%2520a%2520nail%2520appointment.`;

  return (
    <div className="fixed bottom-6 right-6 z-30 flex items-center justify-center">
      {/* Ripple Glow circle background */}
      <span className="absolute w-14 h-14 bg-emerald-500/25 rounded-full animate-ping pointer-events-none" />
      <span className="absolute w-16 h-16 bg-emerald-500/10 rounded-full animate-pulse pointer-events-none" style={{ animationDuration: '3s' }} />

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, translateY: -4 }}
        whileTap={{ scale: 0.95 }}
        className="w-13 h-13 rounded-full bg-emerald-500 hover:bg-emerald-600 flex items-center justify-center text-white shadow-xl shadow-emerald-500/30 border border-white/20 transition-colors"
        id="floating-whatsapp-btn"
        title="Chat on WhatsApp"
      >
        {/* Custom WhatsApp icon */}
        <svg className="w-6.5 h-6.5 fill-current" viewBox="0 0 24 24">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.01.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.488 2.028 14.024.975 11.99.975c-5.439 0-9.864 4.372-9.868 9.8s1.444 4.821 1.445 4.821L2.592 19l4.055-1.085z" />
        </svg>
      </motion.a>
    </div>
  );
}
