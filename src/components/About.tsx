import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Trophy, ShieldCheck, Heart } from 'lucide-react';
import { ABOUT_IMAGE } from '../data';

export default function About() {
  const achievements = [
    { icon: <Sparkles className="w-5 h-5 text-rose-gold" />, title: 'Bespoke Nail Art', desc: 'Sensationally detailed custom hand-painted sets.' },
    { icon: <Trophy className="w-5 h-5 text-rose-gold" />, title: 'Award-Winning Techs', desc: 'Vetted artists with decades of collective experience.' },
    { icon: <ShieldCheck className="w-5 h-5 text-rose-gold" />, title: 'Autoclave Hygiene', desc: 'Hospital-sterilized equipment ensuring peerless safety.' }
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-cream-dark/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Image Column with luxury bordering */}
          <div className="lg:col-span-5 relative" id="about-image-wrapper">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10"
            >
              <div className="relative rounded-2xl overflow-hidden aspect-4/3 sm:aspect-1/1 shadow-2xl shadow-rose-gold/15 border border-white">
                <img
                  src={ABOUT_IMAGE}
                  alt="Elegant manicure luxury nails detailing"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Glass floating overlay card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/80 backdrop-blur-md px-6 py-4 rounded-xl border border-white/40 shadow-lg flex items-center justify-between">
                  <div>
                    <span className="block font-serif text-lg font-medium text-luxury-charcoal">Cape Town Boutique</span>
                    <span className="block font-mono text-[9px] tracking-wider text-luxury-clay uppercase mt-0.5">EST. 2021 | Cape Town, SA</span>
                  </div>
                  <div className="flex items-center space-x-1 text-rose-gold-dark">
                    <Heart className="w-4 h-4 fill-rose-gold" />
                    <span className="font-serif text-sm font-semibold">100% Love</span>
                  </div>
                </div>
              </div>

              {/* Ornamental Floating Borders (Rose Gold theme) */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-rose-gold opacity-40 rounded-tl-2xl -z-10" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-rose-gold opacity-40 rounded-br-2xl -z-10" />
            </motion.div>
          </div>

          {/* Copy editorial Column */}
          <div className="lg:col-span-7" id="about-text-content">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center space-x-2 px-3 py-1 mb-4 rounded-full bg-blush-100 border border-blush-200/50">
                <Sparkles className="w-3.5 h-3.5 text-rose-gold-dark" />
                <span className="font-mono text-[10px] tracking-widest text-[#703842] uppercase font-bold">Our Philosophy</span>
              </div>
              
              <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-luxury-charcoal leading-tight mb-6">
                About <span className="font-normal italic text-rose-gold-dark">Blush Nail Studio</span>
              </h2>

              <p className="font-sans text-sm sm:text-base text-luxury-clay font-light leading-relaxed mb-6">
                At Blush Nail Studio, we believe that self-care is not a luxury, but an essential ritual of confidence. Located in the heart of Cape Town, we specialize in luxury nail care, meticulous acrylics, gel nails, fine custom hand-painted nail art, therapeutic manicures, and indulgent pedicures.
              </p>

              <p className="font-sans text-sm sm:text-base text-luxury-clay font-light leading-relaxed mb-8">
                Every detail of our salon has been curated to create an aesthetic oasis. From our hospital-grade sterilizing standards to our custom soft seating, we combine meticulous talent with premium, non-toxic products to deliver an uncompromised pampering session.
              </p>

              {/* Highlights List */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-stone-200">
                {achievements.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex flex-col"
                    id={`achievement-card-${index}`}
                  >
                    <div className="mb-2.5 p-1 px-2.5 w-max rounded-lg bg-pink-50 border border-pink-100">
                      {item.icon}
                    </div>
                    <span className="font-serif text-sm font-semibold text-luxury-charcoal mb-1">
                      {item.title}
                    </span>
                    <span className="font-sans text-xs text-stone-500 font-light leading-snug">
                      {item.desc}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
