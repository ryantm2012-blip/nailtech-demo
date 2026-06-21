import { ServiceCategory, WhyChooseItem, Testimonial, GalleryItem, InstagramPost } from './types';

import heroImageSrc from './assets/images/hero_nail_salon_1782042827350.jpg';
import aboutImageSrc from './assets/images/manicure_about_1782042843732.jpg';
import pedicureImageSrc from './assets/images/pedicure_treatment_1782042861586.jpg';
import nailArtImageSrc from './assets/images/nail_art_gallery_1782042877966.jpg';
import instagramImageSrc from './assets/images/social_instagram_1782042895963.jpg';
import acrylicNailsFlowerSrc from './assets/images/acrylic_nails_flower_1782044020847.jpg';
import gelNailsStarsSrc from './assets/images/gel_nails_stars_1782044035854.jpg';
import packagesCollageSrc from './assets/images/packages_collage_1782044048261.jpg';
import gelExtensionsPolishSrc from './assets/images/gel_extensions_polish_1782044062904.jpg';
import smilingClientNailsSrc from './assets/images/smiling_client_nails_1782044076538.jpg';

export const HERO_IMAGE = heroImageSrc;
export const ABOUT_IMAGE = aboutImageSrc;
export const PEDICURE_IMAGE = pedicureImageSrc;
export const NAIL_ART_IMAGE = nailArtImageSrc;
export const INSTAGRAM_IMAGE = instagramImageSrc;
export const ACRYLIC_NAILS_FLOWER = acrylicNailsFlowerSrc;
export const GEL_NAILS_STARS = gelNailsStarsSrc;
export const PACKAGES_COLLAGE = packagesCollageSrc;
export const GEL_EXTENSIONS_POLISH = gelExtensionsPolishSrc;
export const SMILING_CLIENT_NAILS = smilingClientNailsSrc;

export const SALON_CONTACT = {
  address: '45 Main Road, Cape Town, South Africa',
  phone: '+27 72 345 6789',
  whatsapp: '+27 72 345 6789',
  instagram: '@BlushNailStudioCT',
  email: 'hello@blushnailstudio.co.za',
  hours: {
    weekdays: '08:00–18:00',
    saturday: '08:00–16:00',
    sunday: '09:00–14:00'
  }
};

export const SERVICES_DATA: ServiceCategory[] = [
  {
    title: 'Manicures',
    description: 'Nourishing care for your hands and dynamic lacquer or gel polishes designed to glow.',
    image: ABOUT_IMAGE,
    icon: 'Sparkles',
    services: [
      { id: 'mani-classic', name: 'Classic Manicure', price: 180, duration: '30 mins', description: 'Essential nail shaping, cuticle care, hand hydration, and high-performance traditional polish.' },
      { id: 'mani-luxury', name: 'Luxury Manicure', price: 250, duration: '45 mins', description: 'Our signature nail rejuvenation including a sea-salt exfoliating scrub, hot towel wrap, massage, and polish.' },
      { id: 'mani-gel', name: 'Gel Manicure', price: 320, duration: '60 mins', description: 'Flawless long-wear gel polish cured under an eye-safe LED light. Highly durable and chip-resistant.' },
      { id: 'mani-french', name: 'French Manicure', price: 280, duration: '45 mins', description: 'Timeless clean luxury featuring elegant pink or nude bases paired with pristine white tips.' }
    ]
  },
  {
    title: 'Pedicures',
    description: 'Indulge in organic, botanical-certified baths and skin resurfacing treatments for your feet.',
    image: PEDICURE_IMAGE,
    icon: 'Footprints',
    services: [
      { id: 'pedi-classic', name: 'Classic Pedicure', price: 220, duration: '40 mins', description: 'Pampering warm soak, light filing, cuticle trim, massage, and high-gloss traditional polish.' },
      { id: 'pedi-luxury', name: 'Luxury Pedicure', price: 320, duration: '60 mins', description: 'Intriguing botanical-rich bubble bath, sugar skin scrub, clay foot mask, sensory massage, and polish.' },
      { id: 'pedi-gel', name: 'Gel Pedicure', price: 360, duration: '75 mins', description: 'Full soothing therapy combined with premium gel lacquer that stays pristine for up to 4+ weeks.' }
    ]
  },
  {
    title: 'Acrylic Nails',
    description: 'Custom sculpted and tip enhancements using premium premium non-toxic polymer powders.',
    image: ACRYLIC_NAILS_FLOWER,
    icon: 'Scissors',
    services: [
      { id: 'acrylic-set', name: 'Acrylic Full Set', price: 450, duration: '90 mins', description: 'Full architectural extensions styled into your preferred shape (almond, coffin, square) with premium color polish.' },
      { id: 'acrylic-fill', name: 'Acrylic Fill', price: 280, duration: '60 mins', description: 'Maintenance and gaps rebalancing. Includes re-shaping and color refresh (recommended every 2-3 weeks).' },
      { id: 'acrylic-rem', name: 'Acrylic Removal', price: 120, duration: '45 mins', description: 'Safe, moisturizing acetone soak-off that prevents natural nail bed damage, finished with keratin cuticle therapy.' }
    ]
  },
  {
    title: 'Gel Nails',
    description: 'Sleek, flexible, and ultra-glossy organic gel enhancements designed for strength and comfort.',
    image: GEL_NAILS_STARS,
    icon: 'FlameKindling',
    services: [
      { id: 'gel-overlay', name: 'Gel Overlay', price: 350, duration: '60 mins', description: 'Direct application of high-strength builder gel over raw natural nails to provide solid armor against cracks.' },
      { id: 'gel-ext', name: 'Gel Extensions', price: 480, duration: '90 mins', description: 'Soft-gel full tips applied with premium adhesive for immediate natural-looking length and pristine wear.' },
      { id: 'gel-rem', name: 'Gel Removal', price: 120, duration: '40 mins', description: 'Gentle, nourishing file and soak-off process that leaves nails hydrated, strong, and ready for fresh coats.' }
    ]
  },
  {
    title: 'Nail Art',
    description: 'Express your exquisite aesthetic through hand-drawn masterpieces engineered by elite artists.',
    image: NAIL_ART_IMAGE,
    icon: 'Palette',
    services: [
      { id: 'art-basic', name: 'Basic Nail Art', price: 80, duration: '15 mins', description: 'Minimalist accents, chic dots, geometric negative lines, or high-end foils on 2 accent nails.' },
      { id: 'art-detailed', name: 'Detailed Nail Art', price: 150, duration: '30 mins', description: 'Beautiful marble finishes, hand-painted floral graphics, or multi-tone ombre across all fingers.' },
      { id: 'art-custom', name: 'Custom Nail Art', price: 200, duration: '45 mins', description: 'Bring your conceptual reference! Unique crystals, 3D structures, gold leaf overlay, and bespoke illustration.' }
    ]
  },
  {
    title: 'Packages',
    description: 'Curated wellness pairings designed to deliver optimal luxury and self-care comfort.',
    image: PACKAGES_COLLAGE,
    icon: 'Gift',
    services: [
      { id: 'pkg-combo', name: 'Manicure + Pedicure Package', price: 450, duration: '100 mins', description: 'The absolute classic pairing: Classic Manicure overlay & Classic Pedicure bath for synchronized indulgence.' },
      { id: 'pkg-luxury', name: 'Luxury Spa Package', price: 650, duration: '120 mins', description: 'Our crown jewel. Includes our hot towel Luxury Manicure, premium Luxury Pedicure therapy with organic sugar scrubs, glowing massage, and customized herbal teas.' }
    ]
  }
];

export const WHY_CHOOSE_DATA: WhyChooseItem[] = [
  {
    title: 'Premium Products',
    description: 'We curate non-toxic, vegan, and professional-grade lacquer and gel formulations that nourish and protect your natural nail beds.',
    iconName: 'ShieldCheck'
  },
  {
    title: 'Skilled Nail Technicians',
    description: 'Our certified professionals undergo rigorous advanced art and structural styling training to paint and sculpt flawlessly.',
    iconName: 'Award'
  },
  {
    title: 'Hygienic & Safe Environment',
    description: 'We follow hospital-grade autoclave sterilization workflows for all metal instruments, with fresh single-use files for every appointment.',
    iconName: 'HeartHandshake'
  },
  {
    title: 'Trendy Nail Designs',
    description: 'From minimalist botanical lines to Korean 3D gels and luxury marble effects, we stay at the absolute forefront of global nail art waves.',
    iconName: 'Compass'
  },
  {
    title: 'Relaxing Atmosphere',
    description: 'Sip on premium organic cappuccino or mineral tea while melting into peaceful, rose-gold lit spaces paired with calming ambient melodies.',
    iconName: 'Coffee'
  },
  {
    title: 'Easy Online Booking',
    description: 'Coordinate appointments in real-time, select your preferred master artist, and lock in your relaxation slot in under a minute.',
    iconName: 'CalendarCheck'
  }
];

export const GALLERY_DATA: GalleryItem[] = [
  { id: 'g1', title: 'Elegant Lavender Acrylic Gels', category: 'acrylic', categoryLabel: 'Acrylic Nails', image: ACRYLIC_NAILS_FLOWER },
  { id: 'g2', title: 'Organic Sugar Pedicure Spa', category: 'pedicure', categoryLabel: 'Pedicures', image: PEDICURE_IMAGE },
  { id: 'g3', title: 'Minimalist Gold Leaf Botanicals', category: 'nail-art', categoryLabel: 'Nail Art', image: NAIL_ART_IMAGE },
  { id: 'g4', title: 'Flawless French Tip Gel Overlay', category: 'french', categoryLabel: 'French Tips', image: INSTAGRAM_IMAGE },
  { id: 'g5', title: 'Polishing Session of Gel Extensions', category: 'gel', categoryLabel: 'Gel Nails', image: GEL_EXTENSIONS_POLISH },
  { id: 'g6', title: 'Our Luxury Marble Saloon Tables', category: 'interior', categoryLabel: 'Salon Interior', image: HERO_IMAGE },
  { id: 'g7', title: 'Happy Nails and Smiling Clients', category: 'client', categoryLabel: 'Clients', image: SMILING_CLIENT_NAILS },
  { id: 'g8', title: 'Winter Glitter Rose Gold Trends', category: 'seasonal', categoryLabel: 'Seasonal Trends', image: GEL_NAILS_STARS }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    rating: 5,
    text: 'Absolutely love my nails every single time. The level of precision in their French manicures is truly exceptional. I feel like royalty sitting in those beautiful rose gold chairs.',
    author: 'Sarah J.',
    location: 'Green Point'
  },
  {
    id: 't2',
    rating: 5,
    text: 'The salon is absolutely beautiful and the staff are incredibly warm and amazing. Booking online is a breeze, and they prioritize high-intensity hygiene standards which I highly value.',
    author: 'Emily K.',
    location: 'Camps Bay'
  },
  {
    id: 't3',
    rating: 5,
    text: 'Best gel manicure I\'ve ever had. Usually my gel chips within a week elsewhere, but their structured overlays stay flawless and glossy for over a month. Highly recommended!',
    author: 'Jessica M.',
    location: 'Sea Point'
  }
];

export const INSTAGRAM_FEED_DATA: InstagramPost[] = [
  {
    id: 'insta-1',
    image: GEL_NAILS_STARS,
    likes: '1.4k',
    comments: '42',
    caption: 'Soft rose gold shades and perfect alignment. Perfect Sunday vibes ✨ #BlushManicure'
  },
  {
    id: 'insta-2',
    image: NAIL_ART_IMAGE,
    likes: '2.5k',
    comments: '89',
    caption: 'Hand-painted botanical gold leaf on custom cream gels. True artistry is in the details 🌿💅 #BespokeNailArt'
  },
  {
    id: 'insta-3',
    image: INSTAGRAM_IMAGE,
    likes: '4.8k',
    comments: '134',
    caption: 'A glowing smile to match that crisp, high-end French tip overlay. Our clients glow inside-out! 🌸💕 #HappyClient'
  },
  {
    id: 'insta-4',
    image: PEDICURE_IMAGE,
    likes: '1.9k',
    comments: '31',
    caption: 'Melt away stressful weeks with organic rose petals and lavender skin baths. Your feet deserve the best luxury 🛁🌹 #PediSpa'
  }
];
