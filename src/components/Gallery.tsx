import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, ZoomIn, X, ChevronLeft, ChevronRight, Eye } from 'lucide-react';
import { GALLERY_DATA } from '../data';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'All Designs' },
    { id: 'acrylic', label: 'Acrylic' },
    { id: 'gel', label: 'Gel Nails' },
    { id: 'french', label: 'French Tips' },
    { id: 'nail-art', label: 'Nail Art' },
    { id: 'pedicure', label: 'Pedicures' },
    { id: 'interior', label: 'Interior' }
  ];

  const filteredItems = activeCategory === 'all'
    ? GALLERY_DATA
    : GALLERY_DATA.filter(item => item.category === activeCategory);

  const openLightbox = (imageIndex: number) => {
    // Map filtered item index to original GALLERY_DATA index for navigation consistency,
    // or keep it scoped to the active list
    setSelectedImageIndex(imageIndex);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const navigateLightbox = (direction: 'prev' | 'next') => {
    if (selectedImageIndex === null) return;
    
    let nextIndex = direction === 'next' ? selectedImageIndex + 1 : selectedImageIndex - 1;
    
    if (nextIndex >= filteredItems.length) {
      nextIndex = 0;
    } else if (nextIndex < 0) {
      nextIndex = filteredItems.length - 1;
    }
    
    setSelectedImageIndex(nextIndex);
  };

  return (
    <section id="gallery" className="py-24 sm:py-32 bg-cream-dark/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16" id="gallery-header">
          <div className="inline-flex items-center space-x-2 px-3 py-1 mb-4 rounded-full bg-linear-to-r from-blush-50 to-pink-100 border border-blush-100">
            <Sparkles className="w-3.5 h-3.5 text-rose-gold-dark" />
            <span className="font-mono text-[10px] tracking-widest text-[#703842] uppercase font-bold">Inspiration Gallery</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-luxury-charcoal mb-4">
            Instagram-Worthy <span className="font-normal italic text-rose-gold-dark">Manicures</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-luxury-clay font-light leading-relaxed">
            Browse our gorgeous premium edits. Live feeds of hand-drawn stars, encapsulated dried botanicals, and high-fashion chrome scales.
          </p>
        </div>

        {/* Gallery Filter Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12" id="gallery-filters">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setActiveCategory(cat.id);
                setSelectedImageIndex(null);
              }}
              className={`px-4 py-2 rounded-full font-sans text-xs font-semibold tracking-wider uppercase transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-rose-gold text-white shadow-md shadow-rose-gold/25'
                  : 'text-luxury-clay hover:text-rose-gold bg-white/50 hover:bg-white border border-stone-100/50'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Mosaic Image Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          id="gallery-images-masonry"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                onClick={() => openLightbox(index)}
                key={item.id}
                className="group relative overflow-hidden bg-stone-100 rounded-3xl aspect-1/1 shadow-md border border-white cursor-pointer"
                id={`gallery-item-${item.id}`}
              >
                {/* Clean Referrer-Safe image with scale transition */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />

                {/* Elegant overlay screen visible on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-charcoal/85 via-luxury-charcoal/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                  <span className="font-mono text-[9px] tracking-[0.2em] text-[#f8c0c8] uppercase font-bold mb-1.5">
                    {item.categoryLabel}
                  </span>
                  <h3 className="font-serif text-base font-semibold text-white leading-snug mb-3">
                    {item.title}
                  </h3>
                  
                  <div className="flex items-center space-x-1.5 font-sans text-[10px] tracking-widest text-[#ffe3e6] uppercase">
                    <Eye className="w-3.5 h-3.5" />
                    <span>View Closer</span>
                  </div>
                </div>

                {/* Shimmer sparkle top corners */}
                <div className="absolute top-4 right-4 p-1.5 bg-white/20 backdrop-blur-md rounded-full shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/25">
                  <ZoomIn className="w-4 h-4 text-white" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Beautiful Lightbox Modal */}
        <AnimatePresence>
          {selectedImageIndex !== null && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-stone-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
              onClick={closeLightbox}
              id="gallery-lightbox-overlay"
            >
              <div className="absolute top-4 right-4 flex items-center space-x-2 z-10">
                <span className="font-mono text-xs tracking-widest text-stone-400">
                  {selectedImageIndex + 1} / {filteredItems.length}
                </span>
                <button
                  onClick={closeLightbox}
                  className="p-2 sm:p-3 rounded-full bg-white/10 text-white hover:bg-white/20 hover:scale-105 transition-all text-xs border border-white/10 focus:outline-hidden"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Navigation Left */}
              <button
                onClick={(e) => { e.stopPropagation(); navigateLightbox('prev'); }}
                className="absolute left-2 sm:left-4 p-2 sm:p-3 rounded-full bg-white/10 text-white hover:bg-white/20 hover:scale-105 transition-all border border-white/10 z-10 focus:outline-hidden"
                aria-label="Previous Image"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              {/* Main Expanded Image Container */}
              <motion.div
                initial={{ scale: 0.9, y: 10 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 10 }}
                transition={{ type: 'spring', damping: 25, stiffness: 220 }}
                className="relative max-w-3xl max-h-[75vh] md:max-h-[80vh] overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
                id="gallery-lightbox-card"
              >
                <img
                  src={filteredItems[selectedImageIndex].image}
                  alt={filteredItems[selectedImageIndex].title}
                  className="max-w-full max-h-[70vh] object-contain rounded-t-2xl"
                  referrerPolicy="no-referrer"
                />

                <div className="bg-stone-900 border-t border-stone-800 p-5 rounded-b-2xl">
                  <span className="font-mono text-[9px] tracking-[0.2em] text-[#f8c0c8] uppercase font-bold block mb-1">
                    {filteredItems[selectedImageIndex].categoryLabel}
                  </span>
                  <p className="font-serif text-base text-stone-100 font-medium">
                    {filteredItems[selectedImageIndex].title}
                  </p>
                </div>
              </motion.div>

              {/* Navigation Right */}
              <button
                onClick={(e) => { e.stopPropagation(); navigateLightbox('next'); }}
                className="absolute right-2 sm:right-4 p-2 sm:p-3 rounded-full bg-white/10 text-white hover:bg-white/20 hover:scale-105 transition-all border border-white/10 z-10 focus:outline-hidden"
                aria-label="Next Image"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
