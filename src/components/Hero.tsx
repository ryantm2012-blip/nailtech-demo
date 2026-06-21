import React from 'react';
import { motion } from 'motion/react';
import { CalendarDays, ArrowRight, Sparkles } from 'lucide-react';
import { HERO_IMAGE } from '../data';

interface HeroProps {
  onBookClick: () => void;
  onViewServicesClick: () => void;
}

export default function Hero({ onBookClick, onViewServicesClick }: HeroProps) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background Image with elegant pan/zoom animation and rose-toned ambient overlay */}
      <div className="absolute inset-0 z-0">
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
          className="w-full h-full"
        >
          <img
            src={HERO_IMAGE}
            alt="Blush Nail Studio Luxury Salon Interior"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        {/* Multilayer gradient: Dark-to-light, luxury blush scrim and vignette */}
        <div className="absolute inset-0 bg-gradient-to-tr from-luxury-charcoal/80 via-luxury-charcoal/40 to-cream/10 blend-multiply" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-luxury-charcoal/30 to-luxury-charcoal/90 opacity-80" />
        <div className="absolute inset-0 bg-linear-to-b from-stone-900/40 via-transparent to-cream" />
      </div>

      {/* Floating decorative luxury nodes */}
      <div className="absolute top-24 left-10 md:left-24 z-10 animate-float opacity-35 hidden sm:block">
        <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full">
          <Sparkles className="w-3.5 h-3.5 text-rose-gold" />
          <span className="font-mono text-[9px] tracking-widest text-white uppercase">Cape Town Elite</span>
        </div>
      </div>

      <div className="absolute bottom-24 right-10 md:right-24 z-10 animate-float opacity-35 hidden sm:block" style={{ animationDelay: '2s' }}>
        <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full">
          <span className="font-mono text-[9px] tracking-widest text-white uppercase">Hygiene Certified</span>
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-10 pb-20">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center space-x-2 px-4 py-2 mb-6 rounded-full bg-cream/90 backdrop-blur-md shadow-md shadow-rose-gold/10 border border-blush-200/50"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-rose-gold animate-ping" />
          <span className="font-mono text-[10px] sm:text-xs font-semibold tracking-[0.25em] text-rose-gold-dark uppercase">
            Experience Exquisite Beauty
          </span>
        </motion.div>

        {/* Dynamic Display Headline */}
        <h1 className="font-serif text-3xl sm:text-5xl md:text-7xl font-light tracking-tight text-white mb-6 leading-[1.12]">
          Beautiful Nails, <br />
          <span className="font-normal italic text-[#f8c0c8] text-glow select-none">
            Beautiful Confidence.
          </span>
        </h1>

        {/* Subheading */}
        <p className="max-w-2xl mx-auto font-sans text-sm sm:text-base md:text-lg text-stone-200/90 font-light leading-relaxed tracking-wide mb-10">
          Luxury manicures, pedicures, nail art, and self-care experiences <br className="hidden md:inline" />
          designed to help you look and feel your absolute best.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5" id="hero-actions">
          <button
            onClick={onBookClick}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 font-sans text-xs font-bold tracking-widest text-luxury-charcoal uppercase rounded-full bg-white shadow-xl shadow-black/15 transition-all duration-300 hover:bg-blush-50 hover:scale-[1.03] active:scale-95 group border border-white"
            id="hero-book-now"
          >
            <CalendarDays className="w-4.5 h-4.5 mr-2 text-rose-gold animate-pulse" />
            Book Appointment Now
          </button>

          <button
            onClick={onViewServicesClick}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 font-sans text-xs font-bold tracking-widest text-white uppercase rounded-full bg-white/10 backdrop-blur-md border border-white/25 shadow-lg transition-all duration-300 hover:bg-white/20 hover:scale-[1.03] active:scale-95 group"
            id="hero-view-services"
          >
            View Services
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>
      </div>

      {/* Luxury Floor Vignette & Arrow */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center">
        <span className="font-mono text-[8px] tracking-[0.3em] text-luxury-clay uppercase mb-2 opacity-60">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 border border-rose-gold/40 rounded-full flex items-start justify-center p-1 cursor-pointer"
          onClick={onViewServicesClick}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-rose-gold" />
        </motion.div>
      </div>
    </section>
  );
}
