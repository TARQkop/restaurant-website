export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  image: string;
  tags?: string[];
  featured?: boolean;
}

export type MenuCategory =
  | 'starters'
  | 'mains'
  | 'desserts'
  | 'drinks'
  | 'tasting';

export interface Review {
  id: string;
  name: string;
  role: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
  category: 'food' | 'ambiance' | 'team' | 'events';
  span?: 'wide' | 'tall' | 'normal';
}

export interface ReservationFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  occasion?: string;
  specialRequests?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  bio: string;
}

export interface Award {
  year: string;
  title: string;
  organization: string;
}
