export interface ServiceItem {
  id: string;
  name: string;
  price: number;
  duration?: string;
  description: string;
}

export interface ServiceCategory {
  title: string;
  description: string;
  image: string;
  icon: string;
  services: ServiceItem[];
}

export interface Appointment {
  id: string;
  fullName: string;
  phone: string;
  email: string;
  serviceId: string;
  serviceName: string;
  preferredDate: string;
  preferredTime: string;
  notes?: string;
  createdAt: string;
  status: 'pending' | 'confirmed';
}

export interface Testimonial {
  id: string;
  rating: number;
  text: string;
  author: string;
  location?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'acrylic' | 'gel' | 'french' | 'nail-art' | 'pedicure' | 'interior' | 'client' | 'seasonal';
  categoryLabel: string;
  image: string;
}

export interface WhyChooseItem {
  title: string;
  description: string;
  iconName: string;
}

export interface InstagramPost {
  id: string;
  image: string;
  likes: string;
  comments: string;
  caption: string;
}
