import type { NavLink } from '@/types';

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Menu', href: '/menu' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
  { label: 'Reservations', href: '/reservations' },
];

export const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com', icon: 'instagram' },
  { label: 'Facebook', href: 'https://facebook.com', icon: 'facebook' },
  { label: 'Twitter', href: 'https://twitter.com', icon: 'twitter' },
];

export const restaurantInfo = {
  name: 'Maison',
  tagline: 'Where Art Meets Gastronomy',
  description: 'A two-Michelin-star dining experience in the heart of the city. Chef Étienne Laurent\'s vision — where classical French technique meets bold global inspiration.',
  address: '12 Rue de la Paix, 75001 Paris, France',
  phone: '+1 (555) 012-3456',
  email: 'reservations@maisonrestaurant.com',
  hours: {
    lunch: 'Tuesday – Saturday: 12:00 – 14:30',
    dinner: 'Tuesday – Sunday: 19:00 – 22:30',
    closed: 'Closed Monday',
  },
  coordinates: {
    lat: 48.8698,
    lng: 2.3308,
  },
};
