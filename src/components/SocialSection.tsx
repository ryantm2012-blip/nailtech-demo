import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Instagram, MessageSquare, CalendarCheck, Heart, MessageCircle } from 'lucide-react';
import { INSTAGRAM_FEED_DATA } from '../data';

interface SocialSectionProps {
  onBookClick: () => void;
}

export default function SocialSection({ onBookClick }: SocialSectionProps) {
  return (
    <section id="social" className="py-24 sm:py-32 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" id="social-header">
          <div className="inline-flex items-center space-x-2 px-3 py-1 mb-4 rounded-full bg-linear-to-r from-blush-50 to-pink-100 border border-blush-100">
            <Sparkles className="w-3.5 h-3.5 text-rose-gold-dark" />
            <span className="font-mono text-[10px] tracking-widest text-[#703842] uppercase font-bold">Social Feed</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-luxury-charcoal mb-4">
            Follow Our <span className="font-normal italic text-rose-gold-dark">Nail Art Journey</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-luxury-clay font-light leading-relaxed">
            Get daily inspo directly from our Cape Town manicurists. Explore matching sets, extensions, and nail designs that set global trends.
          </p>
        </div>

        {/* Action Triggers Row */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12" id="social-action-triggers">
          <a
            href="https://instagram.com/BlushNailStudioCT"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full border border-rose-gold/40 text-rose-gold-dark hover:bg-rose-gold hover:text-white transition-all duration-300 font-sans text-xs font-semibold tracking-widest uppercase"
          >
            <Instagram className="w-4 h-4 mr-2" />
            Follow on Instagram
          </a>

          <a
            href="https://wa.me/27723456789"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full border border-green-400/40 text-green-600 hover:bg-green-500 hover:text-white transition-all duration-300 font-sans text-xs font-semibold tracking-widest uppercase"
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Chat on WhatsApp
          </a>

          <button
            onClick={onBookClick}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 rounded-full bg-linear-to-r from-rose-gold to-[#f092a2] hover:bg-linear-to-l text-white font-sans text-xs font-bold tracking-widest uppercase shadow-md shadow-rose-gold/20"
          >
            <CalendarCheck className="w-4 h-4 mr-2" />
            Book Appointment
          </button>
        </div>

        {/* Instagram Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" id="social-insta-grid">
          {INSTAGRAM_FEED_DATA.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
              whileHover={{ scale: 1.02 }}
              className="group relative rounded-3xl overflow-hidden shadow-lg border border-white aspect-1/1 bg-stone-100 cursor-pointer"
              id={`instagram-card-${post.id}`}
            >
              <img
                src={post.image}
                alt={post.caption}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                referrerPolicy="no-referrer"
              />

              {/* Stats Hover overlay screen */}
              <div className="absolute inset-0 bg-black/55 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-between p-6">
                
                {/* Top social network tag */}
                <div className="flex items-center justify-between font-mono text-[9px] text-[#f8c0c8] uppercase tracking-widest">
                  <span>@BlushNailStudioCT</span>
                  <Instagram className="w-4 h-4 text-white" />
                </div>

                {/* Inside statistics counters */}
                <div className="flex items-center justify-center space-x-6 text-white text-sm font-semibold">
                  <div className="flex items-center space-x-1.5">
                    <Heart className="w-5 h-5 fill-rose-gold text-rose-gold" />
                    <span>{post.likes}</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <MessageCircle className="w-5 h-5 fill-white" />
                    <span>{post.comments}</span>
                  </div>
                </div>

                {/* Subtitle Caption preview */}
                <p className="font-sans text-[11px] text-stone-200 line-clamp-2 leading-relaxed">
                  {post.caption}
                </p>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
