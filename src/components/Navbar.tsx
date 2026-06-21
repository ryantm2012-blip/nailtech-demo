import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Menu, X, CalendarDays } from 'lucide-react';

interface NavbarProps {
  onBookClick: () => void;
}

export default function Navbar({ onBookClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'testimonials', label: 'Testimonials' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Blur threshold
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Check which section is in view
      const scrollPosition = window.scrollY + 100;
      for (const link of navLinks) {
        const el = document.getElementById(link.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(link.id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'bg-cream/90 backdrop-blur-md shadow-sm border-b border-blush-100/40 py-3'
            : 'bg-transparent py-5'
        }`}
        id="main-nav-header"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Elegant Luxury Logo Accent */}
            <div
              onClick={() => scrollToSection('home')}
              className="flex items-center space-x-2 cursor-pointer group"
              id="nav-logo-container"
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md border border-blush-100/50 transition-all duration-300 group-hover:scale-105">
                <span className="font-serif text-lg font-light text-rose-gold tracking-widest pl-0.5">B</span>
                <Sparkles className="absolute -top-0.5 -right-0.5 w-3 h-3 text-rose-gold opacity-50 group-hover:opacity-100 transition-opacity" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-medium tracking-widest text-luxury-charcoal uppercase leading-none">
                  Blush
                </span>
                <span className="font-mono text-[9px] tracking-[0.25em] text-luxury-clay uppercase mt-0.5 leading-none">
                  Nail Studio
                </span>
              </div>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-8" id="nav-desktop-menu">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className={`relative font-sans text-xs font-medium tracking-widest uppercase transition-colors duration-300 ${
                    activeSection === link.id
                      ? 'text-rose-gold-dark'
                      : 'text-luxury-clay hover:text-rose-gold'
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-[1.5px] bg-rose-gold"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}

              <button
                onClick={onBookClick}
                className="relative inline-flex items-center justify-center px-5 py-2.5 overflow-hidden font-sans text-xs font-semibold tracking-widest text-white uppercase transition-all duration-300 rounded-full bg-linear-to-r from-rose-gold to-[#f092a2] hover:bg-linear-to-l shadow-md shadow-rose-gold/25 hover:shadow-lg hover:shadow-rose-gold/30 hover:scale-[1.02] active:scale-95 group"
                id="nav-book-button-desktop"
              >
                <CalendarDays className="w-4.5 h-4.5 mr-1.5 opacity-80" />
                Book Now
              </button>
            </nav>

            {/* Mobile Hamburger Trigger */}
            <div className="flex items-center lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-full text-luxury-charcoal hover:bg-blush-50 transition-colors focus:outline-hidden"
                aria-label="Toggle Menu"
                id="mobile-menu-trigger"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 bg-black/40 backdrop-blur-xs lg:hidden"
            onClick={() => setIsOpen(false)}
            id="mobile-drawer-overlay"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-4/5 max-w-sm bg-cream border-l border-blush-100 flex flex-col p-6 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              id="mobile-drawer"
            >
              <div className="flex items-center justify-between pb-6 border-b border-blush-100/60 mb-8 mt-14">
                <span className="font-serif text-lg tracking-widest text-luxury-charcoal uppercase">
                  Menu
                </span>
                <span className="font-mono text-[9px] tracking-widest text-rose-gold uppercase">
                  BLUSH SA
                </span>
              </div>

              <div className="flex flex-col space-y-5" id="nav-mobile-menu">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`text-left font-serif text-lg tracking-wider text-stone-700 hover:text-rose-gold py-2 transition-colors border-b border-stone-100 ${
                      activeSection === link.id ? 'text-rose-gold font-medium' : ''
                    }`}
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              <div className="mt-auto pt-6 border-t border-blush-100/60 pb-4">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onBookClick();
                  }}
                  className="w-full flex items-center justify-center py-3.5 font-sans text-xs font-semibold tracking-widest text-white uppercase rounded-full bg-linear-to-r from-[#e5b0a3] to-[#f092a2] shadow-md shadow-rose-gold/20"
                >
                  <CalendarDays className="w-4 h-4 mr-1.5" />
                  Book Now
                </button>
                <p className="text-center mt-4 text-[10px] text-stone-400 font-mono tracking-widest uppercase">
                  Cape Town • South Africa
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
