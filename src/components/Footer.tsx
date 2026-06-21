import React from 'react';
import { Sparkles, Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';
import { SALON_CONTACT } from '../data';

interface FooterProps {
  onBookClick: () => void;
}

export default function Footer({ onBookClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-stone-950 text-stone-200 border-t border-stone-800 relative z-10" id="main-footer">
      {/* Decorative shimmering border stripe */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-rose-gold via-[#ffa1af] to-rose-gold" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Column 1: Brand & Bio */}
          <div className="lg:col-span-4" id="footer-column-brand">
            <div className="flex items-center space-x-2 mb-6 cursor-pointer" onClick={() => scrollToSection('home')}>
              <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-white shadow-md border border-blush-100/50">
                <span className="font-serif text-lg font-light text-rose-gold tracking-widest pl-1">B</span>
                <Sparkles className="absolute -top-0.5 -right-0.5 w-3 h-3 text-rose-gold" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg font-medium tracking-widest text-white uppercase leading-none">
                  Blush
                </span>
                <span className="font-mono text-[9px] tracking-[0.25em] text-stone-400 uppercase mt-0.5 leading-none">
                  Nail Studio
                </span>
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-stone-400 font-light leading-relaxed mb-6">
              Cape Cape Town's premier luxury beauty destination. Specializing in high-fashion custom nail aesthetics and curated wellness therapies to elevate your personal style.
            </p>

            {/* Social Icons Row */}
            <div className="flex items-center space-x-4">
              <a
                href="https://instagram.com/BlushNailStudioCT"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-stone-900 border border-stone-800 text-stone-400 hover:text-[#f8c0c8] hover:border-[#f8c0c8] transition-all hover:scale-105"
                aria-label="Instagram Link"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-stone-900 border border-stone-800 text-stone-400 hover:text-[#f8c0c8] hover:border-[#f8c0c8] transition-all hover:scale-105"
                aria-label="Facebook Link"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/27723456789"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-stone-900 border border-stone-800 text-stone-400 hover:text-green-400 hover:border-green-400 transition-all hover:scale-105"
                aria-label="WhatsApp Link"
              >
                {/* Custom WhatsApp Icon using SVG */}
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.01.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.965C16.488 2.028 14.024.975 11.99.975c-5.439 0-9.864 4.372-9.868 9.8s1.444 4.821 1.445 4.821L2.592 19l4.055-1.085z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 md:col-span-1" id="footer-column-quicklinks">
            <h4 className="font-serif text-sm font-semibold text-white tracking-wider uppercase mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3 font-sans text-xs sm:text-sm text-stone-400 font-light">
              {['About', 'Services', 'Gallery', 'Pricing', 'Testimonials', 'Contact'].map((sec) => (
                <li key={sec}>
                  <button
                    onClick={() => scrollToSection(sec.toLowerCase())}
                    className="hover:text-rose-gold transition-colors block text-left text-neutral-400"
                  >
                    {sec}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services Index */}
          <div className="lg:col-span-3 md:col-span-1" id="footer-column-services">
            <h4 className="font-serif text-sm font-semibold text-white tracking-wider uppercase mb-5">
              Our Services
            </h4>
            <ul className="space-y-3 font-sans text-xs sm:text-sm text-stone-400 font-light">
              {['Manicures', 'Pedicures', 'Acrylic Nails', 'Gel Nails', 'Custom Nail Art', 'Indulgence Packages'].map((ser, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection('services')}
                    className="hover:text-rose-gold transition-colors block text-left text-neutral-400"
                  >
                    {ser}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Hours */}
          <div className="lg:col-span-3" id="footer-column-hours">
            <h4 className="font-serif text-sm font-semibold text-white tracking-wider uppercase mb-5">
              Opening Hours
            </h4>
            <ul className="space-y-3 font-sans text-xs text-stone-400 font-light mb-6">
              <li className="flex justify-between border-b border-stone-900 pb-1.5">
                <span>Monday – Friday</span>
                <span className="font-semibold text-stone-200">{SALON_CONTACT.hours.weekdays}</span>
              </li>
              <li className="flex justify-between border-b border-stone-900 pb-1.5">
                <span>Saturday</span>
                <span className="font-semibold text-stone-200">{SALON_CONTACT.hours.saturday}</span>
              </li>
              <li className="flex justify-between pb-1.5">
                <span>Sunday</span>
                <span className="font-semibold text-stone-200">{SALON_CONTACT.hours.sunday}</span>
              </li>
            </ul>

            <div className="space-y-2 mt-4 font-sans text-xs text-stone-400 font-light">
              <div className="flex items-center space-x-2">
                <MapPin className="w-3.5 h-3.5 text-rose-gold shrink-0" />
                <span className="line-clamp-1">{SALON_CONTACT.address}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-3.5 h-3.5 text-rose-gold shrink-0" />
                <span>{SALON_CONTACT.phone}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="border-t border-stone-900 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono tracking-widest text-[#78716c] uppercase">
          <p>© {currentYear} Blush Nail Studio. All Rights Reserved.</p>
          <div className="flex items-center space-x-1 mt-4 sm:mt-0">
            <span>Designed in South Africa • Vetted for Hygiene</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
