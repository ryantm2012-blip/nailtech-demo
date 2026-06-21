import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, ArrowRight, Gift, CalendarDays } from 'lucide-react';
import { SERVICES_DATA } from '../data';

interface PricingTableProps {
  onSelectService: (serviceId: string, serviceName: string) => void;
}

export default function PricingTable({ onSelectService }: PricingTableProps) {
  // Pull all packages and individual services
  const allCategories = SERVICES_DATA;

  return (
    <section id="pricing" className="py-24 sm:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" id="pricing-header">
          <div className="inline-flex items-center space-x-2 px-3 py-1 mb-4 rounded-full bg-linear-to-r from-blush-50 to-pink-100 border border-blush-100">
            <Sparkles className="w-3.5 h-3.5 text-rose-gold-dark" />
            <span className="font-mono text-[10px] tracking-widest text-[#703842] uppercase font-bold">Menu Prices</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-luxury-charcoal mb-4">
            Treatment <span className="font-normal italic text-rose-gold-dark">Price List</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-luxury-clay font-light leading-relaxed">
            Pristine luxury has a clear pricing ledger. Scroll through our core offerings or lock in custom treatment packages for an afternoon of pure bliss.
          </p>
        </div>

        {/* Spa Treatment Menu Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-start" id="pricing-menu-columns">
          {allCategories.map((category, index) => {
            const isPackagesCategory = category.title === 'Packages';

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className={`bg-white rounded-3xl p-8 border shadow-lg shadow-stone-100/50 relative overflow-hidden ${
                  isPackagesCategory 
                    ? 'border-rose-gold/40 ring-1 ring-rose-gold/20' 
                    : 'border-stone-100'
                }`}
                id={`pricing-category-box-${index}`}
              >
                {/* Visual Accent Ribbon in "Packages" card */}
                {isPackagesCategory && (
                  <div className="absolute top-4 right-4 bg-gradient-to-r from-rose-gold to-[#f092a2] text-white text-[9px] font-mono tracking-widest uppercase py-1 px-3 rounded-full shadow-md flex items-center space-x-1">
                    <Gift className="w-3 h-3 animate-spin style={{ animationDuration: '6s' }}" />
                    <span>Highly Recommended</span>
                  </div>
                )}

                <div className="flex items-center space-x-3 mb-6">
                  <span className="font-serif text-xl sm:text-2xl font-semibold text-luxury-charcoal">
                    {category.title}
                  </span>
                  <div className="h-[1px] flex-grow bg-stone-100" />
                  <span className="font-mono text-[10px] text-rose-gold-dark tracking-widest uppercase">
                    Blush SA
                  </span>
                </div>

                {/* Service Entries list with dotted dividers */}
                <div className="space-y-6" id={`pricing-list-${category.title}`}>
                  {category.services.map((service) => {
                    const isPopularPackage = service.id === 'pkg-luxury';

                    return (
                      <div
                        key={service.id}
                        className={`rounded-2xl p-4 transition-all duration-300 relative ${
                          isPopularPackage 
                            ? 'bg-gradient-to-r from-pink-50/70 via-rose-50/50 to-white border border-rose-gold/30 shadow-md ring-1 ring-rose-300/15'
                            : 'hover:bg-pink-50/40 border border-transparent hover:border-pink-100/30'
                        }`}
                        id={`pricing-item-${service.id}`}
                      >
                        {/* Highlighted Popular Tag */}
                        {isPopularPackage && (
                          <div className="inline-flex items-center space-x-1 mb-2 bg-gradient-to-r from-blush-500 to-rose-gold text-white font-mono text-[8px] tracking-widest uppercase px-2 py-0.5 rounded-full shadow-xs">
                            <Sparkles className="w-2.5 h-2.5" />
                            <span>Most Popular</span>
                          </div>
                        )}

                        {/* Top Line: Title DotDotDot Prices */}
                        <div className="flex items-center justify-between gap-4">
                          <span className="font-serif text-sm sm:text-base font-semibold text-luxury-charcoal">
                            {service.name}
                          </span>
                          <span className="font-serif text-sm sm:text-base font-semibold text-[#a71b44]">
                            R{service.price}
                          </span>
                        </div>

                        {/* Subline Option */}
                        <div className="flex items-center space-x-2 mt-1 mb-2 text-[10px] text-stone-400 font-mono tracking-wider uppercase">
                          <span>{service.duration || '45 mins'} Session</span>
                          <span>•</span>
                          <span>Includes Care Scrub</span>
                        </div>

                        {/* Description block */}
                        <p className="font-sans text-xs text-stone-500 font-light leading-relaxed mb-4">
                          {service.description}
                        </p>

                        {/* Quick reservation anchor */}
                        <button
                          onClick={() => onSelectService(service.id, service.name)}
                          className={`inline-flex items-center space-x-1.5 font-sans text-[10px] font-bold tracking-widest uppercase transition-colors duration-300 ${
                            isPopularPackage
                              ? 'text-rose-600 hover:text-rose-800'
                              : 'text-rose-gold-dark hover:text-rose-600'
                          }`}
                          id={`pricing-book-direct-${service.id}`}
                        >
                          <span>Instantly Book</span>
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </div>
                    );
                  })}
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
