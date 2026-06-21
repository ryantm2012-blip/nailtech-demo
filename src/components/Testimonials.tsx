import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Star, MessageSquareQuote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 sm:py-32 bg-cream-dark/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" id="testimonials-header">
          <div className="inline-flex items-center space-x-2 px-3 py-1 mb-4 rounded-full bg-linear-to-r from-blush-50 to-pink-100 border border-blush-100">
            <Sparkles className="w-3.5 h-3.5 text-rose-gold-dark" />
            <span className="font-mono text-[10px] tracking-widest text-[#703842] uppercase font-bold">Kind Words</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-luxury-charcoal mb-4">
            Guest <span className="font-normal italic text-rose-gold-dark">Therapy Reviews</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-luxury-clay font-light leading-relaxed">
            Read stories of relaxation from our valued community in Green Point, Camps Bay, and Sea Point.
          </p>
        </div>

        {/* Testimonials Sliding Row Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" id="testimonials-grid">
          {TESTIMONIALS_DATA.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: index * 0.15, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white rounded-3xl p-8 border border-stone-100 flex flex-col justify-between shadow-lg shadow-rose-gold/5 relative group"
              id={`testimonial-card-${testimonial.id}`}
            >
              {/* Giant backdrop decorative quotes */}
              <div className="absolute top-6 right-8 text-rose-gold/15 select-none pointer-events-none transition-transform duration-500 group-hover:scale-115">
                <MessageSquareQuote className="w-12 h-12" />
              </div>

              <div>
                {/* Shining rating stars */}
                <div className="flex items-center space-x-1 mb-6" id={`stars-group-${testimonial.id}`}>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.div
                      animate={{ rotate: [0, 10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                      key={i}
                    >
                      <Star className="w-4.5 h-4.5 fill-[#e5b0a3] text-[#e5b0a3]" />
                    </motion.div>
                  ))}
                </div>

                {/* Main feedback copy */}
                <p className="font-serif text-sm sm:text-base text-stone-700 italic font-light leading-relaxed mb-8 relative z-10">
                  "{testimonial.text}"
                </p>
              </div>

              {/* Author name & locality column */}
              <div className="border-t border-stone-100 pt-5 flex items-center justify-between">
                <div>
                  <span className="block font-serif text-sm font-semibold text-luxury-charcoal">
                    {testimonial.author}
                  </span>
                  {testimonial.location && (
                    <span className="block font-mono text-[9px] tracking-wider text-rose-gold-dark uppercase mt-0.5">
                      {testimonial.location}, CPT
                    </span>
                  )}
                </div>

                <div className="w-8 h-8 rounded-full bg-blush-50 border border-blush-100 flex items-center justify-center font-serif text-xs font-semibold text-rose-gold-dark select-none">
                  {testimonial.author[0]}
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
