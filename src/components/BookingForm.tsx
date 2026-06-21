import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, CheckCircle2, Calendar, Clock, Sparkle, Loader2, ListCollapse } from 'lucide-react';
import { SERVICES_DATA } from '../data';

interface BookingFormProps {
  selectedServiceId: string;
  onClearSelectedService: () => void;
}

export default function BookingForm({ selectedServiceId, onClearSelectedService }: BookingFormProps) {
  // Extract flat list of all services for dropdown menu
  const flatServices = SERVICES_DATA.flatMap((category) =>
    category.services.map((s) => ({
      id: s.id,
      name: s.name,
      price: s.price,
      category: category.title
    }))
  );

  // Form State
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [serviceId, setServiceId] = useState('');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [notes, setNotes] = useState('');

  // Status State
  const [submitting, setSubmitting] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [bookingReference, setBookingReference] = useState('');

  // Automatically sync when a service is chosen elsewhere on the website
  useEffect(() => {
    if (selectedServiceId) {
      setServiceId(selectedServiceId);
    }
  }, [selectedServiceId]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !email || !serviceId || !preferredDate || !preferredTime) {
      return;
    }

    setSubmitting(true);

    // Simulate an elegant server handshake
    setTimeout(() => {
      const selectedService = flatServices.find((s) => s.id === serviceId);
      const referenceCode = `BLUSH-${Math.floor(1000 + Math.random() * 9000)}`;
      
      const newBooking = {
        id: referenceCode,
        fullName,
        phone,
        email,
        serviceId,
        serviceName: selectedService?.name || 'Luxury Art Cure',
        preferredDate,
        preferredTime,
        notes,
        createdAt: new Date().toISOString()
      };

      // Persist in local storage
      const existingBookings = JSON.parse(localStorage.getItem('blush_appointments') || '[]');
      existingBookings.push(newBooking);
      localStorage.setItem('blush_appointments', JSON.stringify(existingBookings));

      // Clear selection helper
      onClearSelectedService();
      
      setSubmitting(false);
      setBookingConfirmed(true);
      setBookingReference(referenceCode);
    }, 1500);
  };

  const handleReset = () => {
    setFullName('');
    setPhone('');
    setEmail('');
    setServiceId('');
    setPreferredDate('');
    setPreferredTime('');
    setNotes('');
    setBookingConfirmed(false);
    setBookingReference('');
  };

  // Prevent back-dating bookings
  const todayString = new Date().toISOString().split('T')[0];

  return (
    <section id="book-appointment" className="py-24 sm:py-32 bg-cream scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Container styled like a luxurious high-end boutique invite card */}
        <div className="bg-white rounded-3xl shadow-2xl shadow-rose-gold/10 border border-blush-100 overflow-hidden relative">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-rose-gold via-pink-300 to-rose-gold" />
          
          <AnimatePresence mode="wait">
            {!bookingConfirmed ? (
              <motion.div
                key="booking-form-panel"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-8 sm:p-12"
              >
                {/* Header Information */}
                <div className="text-center max-w-xl mx-auto mb-10">
                  <div className="inline-flex items-center space-x-1.5 px-3 py-1 mb-3 rounded-full bg-pink-50 border border-pink-100">
                    <Sparkle className="w-3.5 h-3.5 text-rose-gold-dark animate-spin" style={{ animationDuration: '6s' }} />
                    <span className="font-mono text-[9px] tracking-widest text-[#703842] uppercase font-bold">Online Scheduler</span>
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl font-light text-luxury-charcoal mb-2">
                    Reserve Your <span className="font-normal italic text-rose-gold-dark">Therapy Slot</span>
                  </h2>
                  <p className="font-sans text-xs sm:text-sm text-stone-500 font-light leading-relaxed">
                    Choose your treatment, pick a convenient date, and inputs your details to lock down your pampering. No prepayment is required.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6" id="salon-booking-form">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Full Name */}
                    <div className="flex flex-col">
                      <label htmlFor="fullname" className="font-mono text-[10px] sm:text-xs font-semibold tracking-wider text-luxury-clay uppercase mb-2">
                        Full Name <span className="text-rose-600">*</span>
                      </label>
                      <input
                        id="fullname"
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="e.g. Sarah Jenkins"
                        disabled={submitting}
                        className="font-sans text-sm rounded-xl px-4 py-3 border border-stone-200 focus:outline-hidden focus:border-rose-gold focus:ring-1 focus:ring-rose-gold transition-colors bg-stone-50/50"
                      />
                    </div>

                    {/* Phone Number */}
                    <div className="flex flex-col">
                      <label htmlFor="phone" className="font-mono text-[10px] sm:text-xs font-semibold tracking-wider text-luxury-clay uppercase mb-2">
                        Phone Number <span className="text-rose-600">*</span>
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="e.g. +27 72 345 6789"
                        disabled={submitting}
                        className="font-sans text-sm rounded-xl px-4 py-3 border border-stone-200 focus:outline-hidden focus:border-rose-gold focus:ring-1 focus:ring-rose-gold transition-colors bg-stone-50/50"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Email Address */}
                    <div className="flex flex-col">
                      <label htmlFor="email" className="font-mono text-[10px] sm:text-xs font-semibold tracking-wider text-luxury-clay uppercase mb-2">
                        Email Address <span className="text-rose-600">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="e.g. sarah@example.com"
                        disabled={submitting}
                        className="font-sans text-sm rounded-xl px-4 py-3 border border-stone-200 focus:outline-hidden focus:border-rose-gold focus:ring-1 focus:ring-rose-gold transition-colors bg-stone-50/50"
                      />
                    </div>

                    {/* Service Selection Dropdown */}
                    <div className="flex flex-col">
                      <label htmlFor="service-select" className="font-mono text-[10px] sm:text-xs font-semibold tracking-wider text-luxury-clay uppercase mb-2">
                        Service Selection <span className="text-rose-600">*</span>
                      </label>
                      <div className="relative">
                        <select
                          id="service-select"
                          required
                          value={serviceId}
                          onChange={(e) => setServiceId(e.target.value)}
                          disabled={submitting}
                          className="w-full font-sans text-sm rounded-xl px-4 py-3 border border-stone-200 focus:outline-hidden focus:border-rose-gold focus:ring-1 focus:ring-rose-gold transition-colors bg-stone-50/50 appearance-none cursor-pointer"
                        >
                          <option value="">-- Choose a service --</option>
                          {SERVICES_DATA.map((cat) => (
                            <optgroup key={cat.title} label={cat.title}>
                              {cat.services.map((s) => (
                                <option key={s.id} value={s.id}>
                                  {s.name} (R{s.price})
                                </option>
                              ))}
                            </optgroup>
                          ))}
                        </select>
                        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400">
                          <ListCollapse className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Preferred Date */}
                    <div className="flex flex-col">
                      <label htmlFor="date" className="font-mono text-[10px] sm:text-xs font-semibold tracking-wider text-luxury-clay uppercase mb-2">
                        Preferred Date <span className="text-rose-600">*</span>
                      </label>
                      <input
                        id="date"
                        type="date"
                        required
                        min={todayString}
                        value={preferredDate}
                        onChange={(e) => setPreferredDate(e.target.value)}
                        disabled={submitting}
                        className="font-sans text-sm rounded-xl px-4 py-3 border border-stone-200 focus:outline-hidden focus:border-rose-gold focus:ring-1 focus:ring-rose-gold transition-colors bg-stone-50/50"
                      />
                    </div>

                    {/* Preferred Time */}
                    <div className="flex flex-col">
                      <label htmlFor="time" className="font-mono text-[10px] sm:text-xs font-semibold tracking-wider text-luxury-clay uppercase mb-2">
                        Preferred Time <span className="text-rose-600">*</span>
                      </label>
                      <select
                        id="time"
                        required
                        value={preferredTime}
                        onChange={(e) => setPreferredTime(e.target.value)}
                        disabled={submitting}
                        className="font-sans text-sm rounded-xl px-4 py-3 border border-stone-200 focus:outline-hidden focus:border-rose-gold focus:ring-1 focus:ring-rose-gold transition-colors bg-stone-50/50 appearance-none cursor-pointer"
                      >
                        <option value="">-- Choose a hour --</option>
                        <option value="08:00">08:00 AM</option>
                        <option value="09:00">09:00 AM</option>
                        <option value="10:00">10:00 AM</option>
                        <option value="11:00">11:00 AM</option>
                        <option value="12:00">12:00 PM (Noon)</option>
                        <option value="13:00">01:00 PM</option>
                        <option value="14:00">02:00 PM</option>
                        <option value="15:00">03:00 PM</option>
                        <option value="16:00">04:00 PM</option>
                        <option value="17:00">05:00 PM</option>
                      </select>
                    </div>
                  </div>

                  {/* Additional Notes */}
                  <div className="flex flex-col">
                    <label htmlFor="notes" className="font-mono text-[10px] sm:text-xs font-semibold tracking-wider text-luxury-clay uppercase mb-2">
                      Additional Notes / Custom Artwork requests
                    </label>
                    <textarea
                      id="notes"
                      rows={4}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="e.g. I would like short almond shape with pink builder gels. Please allocate standard nail tips."
                      disabled={submitting}
                      className="font-sans text-sm rounded-xl px-4 py-3 border border-stone-200 focus:outline-hidden focus:border-rose-gold focus:ring-1 focus:ring-rose-gold transition-colors bg-stone-50/50 resize-y"
                    />
                  </div>

                  {/* Submission triggers */}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full flex items-center justify-center py-4 px-6 md:py-4 bg-linear-to-r from-rose-gold to-[#f092a2] hover:bg-linear-to-l text-white font-sans text-xs font-bold tracking-[0.2em] uppercase rounded-full shadow-lg shadow-rose-gold/20 hover:shadow-xl hover:shadow-rose-gold/30 hover:scale-[1.01] active:scale-95 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    id="booking-submit-btn"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Securing Reservation...
                      </>
                    ) : (
                      <>
                        Book Appointment Now
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            ) : (
              /* High-end confirmation dashboard */
              <motion.div
                key="booking-success-panel"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="p-8 sm:p-12 text-center"
                id="booking-success-screen"
              >
                <div className="w-20 h-20 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mx-auto mb-6 shadow-xl shadow-emerald-50">
                  <CheckCircle2 className="w-10 h-10 text-emerald-500 animate-bounce" />
                </div>

                <div className="inline-flex items-center space-x-1 mb-2 bg-emerald-50 px-3 py-1 rounded-full text-[10px] font-mono tracking-widest text-emerald-700 uppercase">
                  <span>Locked & Confirmed</span>
                </div>

                <h3 className="font-serif text-2xl sm:text-4xl font-light text-luxury-charcoal mb-4">
                  Reservation Secured!
                </h3>

                <p className="font-sans text-sm text-stone-500 font-light max-w-md mx-auto leading-relaxed mb-8">
                  Thank you, <strong className="text-luxury-charcoal font-semibold">{fullName}</strong>. Your relaxation therapy is officially scheduled! We have sent a comprehensive itinerary to <strong className="text-luxury-charcoal font-semibold">{email}</strong>.
                </p>

                {/* Ticket Details card */}
                <div className="max-w-md mx-auto bg-stone-50 rounded-2xl p-6 border border-stone-200 mb-8 text-left space-y-4" id="confirmation-ticket">
                  <div className="flex items-center justify-between border-b border-dashed border-stone-200 pb-3 font-mono text-xs text-stone-400">
                    <span>Reference Code</span>
                    <span className="font-bold text-luxury-charcoal uppercase text-sm tracking-wider">
                      {bookingReference}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <span className="block text-[9px] font-mono text-stone-400 uppercase tracking-widest">Selected Treatment</span>
                      <span className="font-serif text-sm font-semibold text-luxury-charcoal leading-tight block mt-0.5">
                        {flatServices.find((s) => s.id === serviceId)?.name || 'Custom Cure'}
                      </span>
                    </div>
                    <div>
                      <span className="block text-[9px] font-mono text-stone-400 uppercase tracking-widest">Category Rate</span>
                      <span className="font-serif text-sm font-semibold text-[#a71b44] block mt-0.5">
                        R{flatServices.find((s) => s.id === serviceId)?.price || 'Rate Varies'}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 border-t border-dashed border-stone-200 pt-3">
                    <div className="flex items-start space-x-2">
                      <Calendar className="w-4 h-4 text-rose-gold mt-0.5" />
                      <div>
                        <span className="block text-[9px] font-mono text-stone-400 uppercase tracking-widest">Date</span>
                        <span className="font-sans text-xs font-medium text-luxury-charcoal block mt-0.5">
                          {preferredDate}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start space-x-2">
                      <Clock className="w-4 h-4 text-rose-gold mt-0.5" />
                      <div>
                        <span className="block text-[9px] font-mono text-stone-400 uppercase tracking-widest">Time Slot</span>
                        <span className="font-sans text-xs font-medium text-luxury-charcoal block mt-0.5">
                          {preferredTime}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct action triggers */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
                  <button
                    onClick={handleReset}
                    className="w-full sm:flex-1 py-3 bg-stone-100 hover:bg-stone-200 text-stone-700 font-sans text-xs font-bold tracking-widest uppercase rounded-full transition-colors"
                  >
                    Adjust Booking
                  </button>
                  <a
                    href="https://wa.me/27723456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:flex-1 py-3 bg-[#25d366]/90 hover:bg-[#25d366] text-white font-sans text-xs font-bold tracking-widest uppercase rounded-full flex items-center justify-center space-x-2"
                  >
                    <span>Notify on WhatsApp</span>
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </section>
  );
}
