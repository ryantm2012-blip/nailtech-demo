import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ShieldCheck, Award, HeartHandshake, Compass, Coffee, CalendarCheck, LucideIcon } from 'lucide-react';
import { WHY_CHOOSE_DATA } from '../data';

// Map icon string names to dynamic lucide elements
const IconMap: { [key: string]: LucideIcon } = {
  ShieldCheck: ShieldCheck,
  Award: Award,
  HeartHandshake: HeartHandshake,
  Compass: Compass,
  Coffee: Coffee,
  CalendarCheck: CalendarCheck
};

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-24 sm:py-32 bg-cream-dark/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16" id="why-choose-header">
          <div className="inline-flex items-center space-x-2 px-3 py-1 mb-4 rounded-full bg-pink-100 border border-pink-200/50">
            <Sparkles className="w-3.5 h-3.5 text-rose-gold-dark" />
            <span className="font-mono text-[10px] tracking-widest text-[#703842] uppercase font-bold">Why Blush Studio</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-luxury-charcoal mb-4">
            Uncompromised <span className="font-normal italic text-rose-gold-dark">Standards</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-luxury-clay font-light leading-relaxed">
            We operate at the intersection of haute couture nail artistry and clinical hygiene to craft an unmatched, relaxing self-care getaway.
          </p>
        </div>

        {/* Bento Grid layout representing our unique selling propositions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="why-choose-cards-grid">
          {WHY_CHOOSE_DATA.map((item, index) => {
            const IconComponent = IconMap[item.iconName] || Award;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="group relative bg-white rounded-3xl p-8 border border-stone-100/80 shadow-md shadow-stone-100/50 overflow-hidden"
                id={`why-choose-card-${index}`}
              >
                {/* Background soft pastel blush circles that grow on hover */}
                <div className="absolute -right-10 -bottom-10 w-32 h-32 rounded-full bg-blush-50/40 opacity-50 group-hover:scale-150 transition-transform duration-700 ease-out -z-10" />
                <div className="absolute -left-6 -top-6 w-20 h-20 rounded-full bg-lavender-pastel/20 opacity-30 group-hover:scale-150 transition-transform duration-700 ease-out -z-10" />

                {/* Styled icon box */}
                <div className="mb-6 p-3 flex items-center justify-center w-max rounded-2xl bg-gradient-to-tr from-white to-pink-50 border border-blush-100/60 shadow-md shadow-rose-gold/5 group-hover:scale-115 transition-transform duration-300">
                  <IconComponent className="w-6 h-6 text-rose-gold-dark" />
                </div>

                {/* Card copy */}
                <h3 className="font-serif text-lg font-semibold text-luxury-charcoal mb-3 group-hover:text-rose-gold-dark transition-colors">
                  {item.title}
                </h3>
                
                <p className="font-sans text-xs sm:text-sm text-stone-500 font-light leading-relaxed">
                  {item.description}
                </p>

                {/* Decorative clean outline */}
                <div className="absolute top-0 left-0 h-[3px] w-0 bg-gradient-to-r from-rose-gold to-[#f092a2] group-hover:w-full transition-all duration-500 rounded-t-3xl" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
