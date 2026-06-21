import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChooseUs from './components/WhyChooseUs';
import Gallery from './components/Gallery';
import PricingTable from './components/PricingTable';
import Testimonials from './components/Testimonials';
import BookingForm from './components/BookingForm';
import ContactSection from './components/ContactSection';
import SocialSection from './components/SocialSection';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import BackToTop from './components/BackToTop';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [selectedServiceId, setSelectedServiceId] = useState('');

  // Smooth scroll helper which automatically focuses input elements too
  const scrollToBooking = (serviceId?: string) => {
    if (serviceId) {
      setSelectedServiceId(serviceId);
    }
    const bookSection = document.getElementById('book-appointment');
    if (bookSection) {
      bookSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectServiceDirectly = (serviceId: string, serviceName: string) => {
    scrollToBooking(serviceId);
  };

  const clearSelectedService = () => {
    setSelectedServiceId('');
  };

  return (
    <>
      {/* 1. Luxurious preloader loading screen */}
      <LoadingScreen onComplete={() => setLoading(false)} />

      {/* Main website body (only displays elegantly once loaded) */}
      <AnimatePresence>
        {!loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.0, ease: 'easeOut' }}
            className="flex flex-col min-h-screen relative"
            id="app-loaded-root"
          >
            {/* 2. Acrylic Sticky Navigation bar */}
            <Navbar onBookClick={() => scrollToBooking()} />

            {/* 3. High-end display Hero banner */}
            <main className="flex-grow">
              
              <Hero
                onBookClick={() => scrollToBooking()}
                onViewServicesClick={() => {
                  const s = document.getElementById('services');
                  if (s) s.scrollIntoView({ behavior: 'smooth' });
                }}
              />

              {/* 4. Elegant Editorial About Block */}
              <About />

              {/* 5. Custom Services Filters & Treatment lists */}
              <Services onSelectService={handleSelectServiceDirectly} />

              {/* 6. High-contrast Bento Standards column */}
              <WhyChooseUs />

              {/* 7. Beautiful Zoom Lightbox Gallery */}
              <Gallery />

              {/* 8. Classical Menu dotted pricing structure */}
              <PricingTable onSelectService={handleSelectServiceDirectly} />

              {/* 9. Glowing Review Star carousel cards */}
              <Testimonials />

              {/* 10. Core Scheduler Form with reference numbers */}
              <BookingForm
                selectedServiceId={selectedServiceId}
                onClearSelectedService={clearSelectedService}
              />

              {/* 11. Clickable Social instagram Grid */}
              <SocialSection onBookClick={() => scrollToBooking()} />

              {/* 12. Styled interactive Cape Town maps and directions card */}
              <ContactSection />

            </main>

            {/* 13. Double-deck legal scheduling footer */}
            <Footer onBookClick={() => scrollToBooking()} />

            {/* Float quick-action panels */}
            <FloatingWhatsApp />
            <BackToTop />

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
