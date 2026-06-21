import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, Clock, ArrowRight, HeartPulse } from 'lucide-react';
import { SERVICES_DATA } from '../data';

interface ServicesProps {
  onSelectService: (serviceId: string, serviceName: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const [activeTab, setActiveTab] = useState('All');

  // Categories include 'All' and titles from SERVICES_DATA
  const categories = ['All', ...SERVICES_DATA.map((cat) => cat.title)];

  // Filter services list
  const filteredCategories = activeTab === 'All'
    ? SERVICES_DATA
    : SERVICES_DATA.filter((cat) => cat.title === activeTab);

  return (
    <section id="services" className="py-24 sm:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" id="services-header">
          <div className="inline-flex items-center space-x-2 px-3 py-1 mb-4 rounded-full bg-linear-to-r from-blush-50 to-pink-100 border border-blush-100">
            <Sparkles className="w-3.5 h-3.5 text-rose-gold-dark" />
            <span className="font-mono text-[10px] tracking-widest text-[#703842] uppercase font-bold">Menu & Treatments</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-luxury-charcoal mb-4">
            Our Luxury <span className="font-normal italic text-rose-gold-dark">Services</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-luxury-clay font-light leading-relaxed">
            Every treatment is customized to match your state of repair. Indulge in certified organic oils, hand-painted details, and premium non-toxic nail extensions.
          </p>
        </div>

        {/* Tab Switcher Buttons with smooth sliders */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 sm:mb-16" id="services-tabs">
          {categories.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative px-4 sm:px-6 py-2.5 rounded-full font-sans text-xs font-semibold tracking-widest uppercase transition-all duration-300 ${
                activeTab === tab
                  ? 'text-white'
                  : 'text-luxury-clay bg-white/60 hover:bg-white hover:text-rose-gold border border-stone-100 shadow-xs'
              }`}
            >
              <span className="relative z-10">{tab}</span>
              {activeTab === tab && (
                <motion.span
                  layoutId="activeCategoryTab"
                  className="absolute inset-0 rounded-full bg-linear-to-r from-rose-gold to-[#f092a2] shadow-md shadow-rose-gold/20"
                  transition={{ type: 'spring', stiffness: 350, damping: 28 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Services List Grid */}
        <div className="space-y-20" id="services-sections-grid">
          <AnimatePresence mode="wait">
            {filteredCategories.map((category) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start"
              >
                
                {/* Category Cover Column */}
                <div className="lg:col-span-4 lg:sticky lg:top-24">
                  <div className="rounded-2xl overflow-hidden bg-white border border-stone-100/80 shadow-xl shadow-rose-gold/5 p-4">
                    <div className="relative aspect-4/3 rounded-xl overflow-hidden mb-6">
                      <img
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <span className="absolute bottom-4 left-4 font-mono text-[10px] tracking-[0.2em] text-white uppercase font-bold bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                        {category.title} Selection
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-semibold text-luxury-charcoal mb-2">
                      {category.title}
                    </h3>
                    <p className="font-sans text-xs sm:text-sm text-luxury-clay leading-relaxed font-light mb-4">
                      {category.description}
                    </p>

                    <div className="border-t border-stone-100 pt-4 flex items-center justify-between text-stone-400 font-mono text-[10px] tracking-widest uppercase">
                      <span>Premium Therapy</span>
                      <HeartPulse className="w-4 h-4 text-rose-gold" />
                    </div>
                  </div>
                </div>

                {/* Individual Treatment Cards Column */}
                <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {category.services.map((service, index) => (
                    <motion.div
                      key={service.id}
                      whileHover={{ y: -6, shadow: '0 20px 25px -5px rgba(229, 176, 163, 0.15)' }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05, duration: 0.5 }}
                      className="bg-white rounded-2xl p-6 border border-stone-100 shadow-md shadow-stone-100 flex flex-col justify-between"
                      id={`service-card-${service.id}`}
                    >
                      <div>
                        {/* Header: Service Name & Price */}
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <h4 className="font-serif text-lg font-semibold text-luxury-charcoal hover:text-rose-gold transition-colors">
                            {service.name}
                          </h4>
                          <span className="font-serif text-base font-semibold text-[#a71b44] whitespace-nowrap bg-rose-50 px-2.5 py-1 rounded-md border border-rose-100">
                            R{service.price}
                          </span>
                        </div>

                        {/* Duration banner */}
                        {service.duration && (
                          <div className="flex items-center space-x-1.5 text-stone-400 mb-4">
                            <Clock className="w-3.5 h-3.5" />
                            <span className="font-mono text-[10px] tracking-wider uppercase">
                              {service.duration} Session
                            </span>
                          </div>
                        )}

                        {/* Description copy */}
                        <p className="font-sans text-xs text-stone-500 font-light leading-relaxed mb-6">
                          {service.description}
                        </p>
                      </div>

                      {/* Call-to-action button */}
                      <button
                        onClick={() => onSelectService(service.id, service.name)}
                        className="w-full flex items-center justify-center py-2.5 px-4 rounded-xl border border-rose-gold/30 text-rose-gold-dark font-sans text-xs font-semibold tracking-widest uppercase hover:bg-linear-to-r hover:from-rose-gold hover:to-[#f092a2] hover:text-white hover:border-transparent transition-all duration-300"
                        id={`btn-service-book-${service.id}`}
                      >
                        Book This Treatment
                        <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                      </button>
                    </motion.div>
                  ))}
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
