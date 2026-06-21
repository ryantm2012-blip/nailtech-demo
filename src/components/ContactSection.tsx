import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sparkles, MapPin, Phone, MessageSquare, Instagram, Mail, Navigation, Check, Copy } from 'lucide-react';
import { SALON_CONTACT } from '../data';

export default function ContactSection() {
  const [copied, setCopied] = useState(false);

  const contactNodes = [
    {
      icon: <MapPin className="w-5 h-5 text-rose-gold-dark" />,
      label: 'Main Studio Address',
      value: SALON_CONTACT.address,
      actionLabel: 'Open in Maps',
      link: 'https://maps.google.com/?q=45+Main+Road,+Cape+Town,+South+Africa',
      helper: 'Valet parking options available'
    },
    {
      icon: <Phone className="w-5 h-5 text-rose-gold-dark" />,
      label: 'Telephone Line',
      value: SALON_CONTACT.phone,
      actionLabel: 'Call Frontdesk',
      link: `tel:${SALON_CONTACT.phone.replace(/\s/g, '')}`,
      helper: 'Available 08:00 - 18:00'
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-green-500" />,
      label: 'WhatsApp Quickchat',
      value: SALON_CONTACT.whatsapp,
      actionLabel: 'Message Studio',
      link: `https://wa.me/27723456789?text=Hi%20Blush%20Nail%20Studio,%20I'd%20like%20to%20enquire%20about%20booking%20a%20nail%20appointment.`,
      helper: 'Replies in under 5 minutes'
    },
    {
      icon: <Instagram className="w-5 h-5 text-rose-gold-dark" />,
      label: 'Instagram Feed',
      value: SALON_CONTACT.instagram,
      actionLabel: 'Follow Us',
      link: 'https://instagram.com/BlushNailStudioCT',
      helper: 'Daily nail inspo posts'
    },
    {
      icon: <Mail className="w-5 h-5 text-rose-gold-dark" />,
      label: 'Email Inquiries',
      value: SALON_CONTACT.email,
      actionLabel: 'Send Email',
      link: `mailto:${SALON_CONTACT.email}`,
      helper: 'For corporate events & bridal plans'
    }
  ];

  const copyAddress = () => {
    navigator.clipboard.writeText(SALON_CONTACT.address);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-cream-dark/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" id="contact-header">
          <div className="inline-flex items-center space-x-2 px-3 py-1 mb-4 rounded-full bg-linear-to-r from-blush-50 to-pink-100 border border-blush-100">
            <Sparkles className="w-3.5 h-3.5 text-rose-gold-dark" />
            <span className="font-mono text-[10px] tracking-widest text-[#703842] uppercase font-bold">Find & Chat</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-light tracking-tight text-luxury-charcoal mb-4">
            Connect With <span className="font-normal italic text-rose-gold-dark">Our Studio</span>
          </h2>
          <p className="font-sans text-sm sm:text-base text-luxury-clay font-light leading-relaxed">
            Reserve your consultation or make an instant call. We are conveniently situated along the Main Road of Cape Town.
          </p>
        </div>

        {/* Contact Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Card list of contact nodes */}
          <div className="lg:col-span-6 space-y-4" id="contact-details-box">
            {contactNodes.map((node, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
                className="bg-white rounded-2xl p-5 border border-stone-100 flex items-start gap-4 hover:border-rose-gold/20 hover:shadow-md transition-all duration-300"
                id={`contact-node-${index}`}
              >
                <div className="p-3 bg-stone-50 rounded-xl border border-stone-100 flex items-center justify-center shrink-0">
                  {node.icon}
                </div>

                <div className="flex-grow">
                  <span className="block font-mono text-[10px] font-semibold tracking-wider text-stone-400 uppercase">
                    {node.label}
                  </span>
                  
                  {/* Selectable human copy */}
                  <span className="block font-serif text-base font-semibold text-luxury-charcoal mt-1 hover:text-rose-gold transition-colors select-all">
                    {node.value}
                  </span>

                  <span className="block text-xs text-stone-400 font-light mt-0.5 leading-none">
                    {node.helper}
                  </span>

                  {/* Immediate Action element */}
                  <div className="mt-3 flex items-center space-x-4">
                    <a
                      href={node.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-1 font-sans text-[10px] font-bold tracking-widest text-[#a71b44] hover:text-[#c82c5a] uppercase"
                    >
                      <span>{node.actionLabel}</span>
                      <Navigation className="w-3 h-3 ml-0.5" />
                    </a>

                    {node.label === 'Main Studio Address' && (
                      <button
                        onClick={copyAddress}
                        className="inline-flex items-center space-x-1 font-sans text-[10px] font-bold tracking-widest text-luxury-clay hover:text-luxury-charcoal uppercase"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3 h-3 text-emerald-500" />
                            <span className="text-emerald-500">Copied!</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3 h-3" />
                            <span>Copy Address</span>
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

          {/* Luxury styled architectural map container */}
          <div className="lg:col-span-6" id="contact-map-wrapper">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl shadow-rose-gold/15 border border-white p-4 bg-white"
            >
              {/* Maps Cover simulating elegant designer layout of Cape Town bay */}
              <div className="relative aspect-4/3 rounded-2xl bg-[#EFEBE4] overflow-hidden border border-stone-200">
                {/* Visual grid blueprint paths */}
                <div className="absolute inset-0 bg-custom-grid" style={{
                  backgroundImage: `linear-gradient(#FAF6F0 1.5px, transparent 1.5px), linear-gradient(90deg, #FAF6F0 1.5px, transparent 1.5px)`,
                  backgroundSize: '30px 30px',
                  opacity: 0.65
                }} />

                {/* Ocean representation bar */}
                <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-blue-50 border-b border-l border-white rounded-bl-3xl opacity-60 flex items-center justify-center">
                  <span className="font-mono text-[8px] tracking-[0.3em] font-medium text-blue-500 uppercase rotate-45">Table Bay</span>
                </div>

                {/* Styled Roads block */}
                <div className="absolute left-0 bottom-1/4 w-full h-8 bg-white rotate-2 px-10 flex items-center justify-between border-y border-stone-200 shadow-xs">
                  <span className="font-mono text-[8px] tracking-[0.2em] text-stone-400 uppercase">Main Road</span>
                  <span className="font-mono text-[8px] tracking-[0.2em] text-stone-400 uppercase">Route M4</span>
                </div>

                <div className="absolute left-1/4 top-0 w-8 h-full bg-white -rotate-12 flex items-center justify-center border-x border-stone-200 shadow-xs">
                  <span className="font-mono text-[8px] tracking-[0.2em] text-stone-400 uppercase vertical-text">Somerset Rd</span>
                </div>

                {/* Main Studio Marker pointer with glowing ripple */}
                <div className="absolute left-[38%] bottom-[32%] z-10">
                  <div className="relative flex items-center justify-center">
                    <span className="absolute w-12 h-12 bg-rose-gold/30 rounded-full animate-ping" />
                    <span className="absolute w-20 h-20 bg-rose-gold/15 rounded-full animate-pulse" />
                    <div className="w-10 h-10 rounded-full bg-linear-to-tr from-rose-gold to-[#f092a2] border border-white shadow-lg flex items-center justify-center text-white">
                      <MapPin className="w-5.5 h-5.5" />
                    </div>
                  </div>
                </div>

                {/* Map Floating Card detailing Address coordinates */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-white/40 flex items-center justify-between">
                  <div>
                    <span className="block font-mono text-[9px] tracking-widest text-rose-gold-dark font-bold uppercase">Our Coordinates</span>
                    <span className="block font-serif text-sm font-semibold text-luxury-charcoal mt-0.5">45 Main Rd, Green Point</span>
                    <span className="block font-mono text-[9px] text-stone-400 uppercase leading-none mt-1">Cape Town, 8005</span>
                  </div>
                  
                  <a
                    href="https://maps.google.com/?q=45+Main+Road,+Cape+Town,+South+Africa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-rose-gold-dark hover:bg-rose-700 text-white rounded-xl shadow-md transition-colors"
                    aria-label="Direct Directions"
                  >
                    <Navigation className="w-4.5 h-4.5" />
                  </a>
                </div>

                {/* Watermark of Cape Town */}
                <div className="absolute top-4 left-4 font-mono text-[9px] tracking-widest text-luxury-clay uppercase opacity-40 bg-white/40 px-2 py-1 rounded-sm">
                  Table Mountain Area
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
