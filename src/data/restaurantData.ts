import type { Review, GalleryImage, TeamMember, Award } from '@/types';

export const reviews: Review[] = [
  {
    id: 'r1',
    name: 'Isabelle Fontaine',
    role: 'Food Critic, Le Monde',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=120&q=80',
    rating: 5,
    text: 'An extraordinary dining experience that transcends the ordinary. Chef Laurent\'s mastery of French technique combined with global influences creates something truly singular. The wagyu tenderloin is the finest I\'ve had outside of Tokyo.',
    date: 'March 2024',
  },
  {
    id: 'r2',
    name: 'Marcus Holt',
    role: 'Michelin Guide Inspector',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&q=80',
    rating: 5,
    text: 'Maison represents everything a two-star establishment should be. Impeccable service, an environment that inspires, and cuisine that tells a story with every plate. The tasting menu is a must for any serious food lover.',
    date: 'January 2024',
  },
  {
    id: 'r3',
    name: 'Anika Sharma',
    role: 'Travel & Lifestyle Blogger',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=120&q=80',
    rating: 5,
    text: 'We celebrated our anniversary here and it was flawless from start to finish. The burrata was heavenly, the duck was perfection, and the chocolate fondant had my partner in tears — of joy. The sommelier\'s pairings were inspired.',
    date: 'February 2024',
  },
  {
    id: 'r4',
    name: 'Jean-Pierre Moreau',
    role: 'Executive Chef, L\'Ambiance',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80',
    rating: 5,
    text: 'As a chef myself, dining at Maison is both humbling and inspiring. The technique is rigorous, the sourcing impeccable, and the creativity genuine. The foie gras torchon alone warrants a special journey.',
    date: 'December 2023',
  },
  {
    id: 'r5',
    name: 'Sophie Chen',
    role: 'Corporate Events Director',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=120&q=80',
    rating: 5,
    text: 'We host all our executive dinners at Maison. The private dining room is stunning, the staff\'s discretion and professionalism are unmatched, and the food always impresses our most discerning international guests.',
    date: 'April 2024',
  },
];

export const galleryImages: GalleryImage[] = [
  {
    id: 'g1',
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=85',
    alt: 'Elegant plating of the tasting menu',
    category: 'food',
    span: 'wide',
  },
  {
    id: 'g2',
    src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600&q=85',
    alt: 'Restaurant interior at night',
    category: 'ambiance',
    span: 'tall',
  },
  {
    id: 'g3',
    src: 'https://images.unsplash.com/photo-1546833998-877b37c2e5c6?w=600&q=85',
    alt: 'Signature wagyu tenderloin',
    category: 'food',
  },
  {
    id: 'g4',
    src: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=600&q=85',
    alt: 'Chef at work in the kitchen',
    category: 'team',
  },
  {
    id: 'g5',
    src: 'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=85',
    alt: 'Bar and cocktail preparation',
    category: 'ambiance',
  },
  {
    id: 'g6',
    src: 'https://images.unsplash.com/photo-1484659619207-9165d119dafe?w=800&q=85',
    alt: 'Private dining room setup',
    category: 'events',
    span: 'wide',
  },
  {
    id: 'g7',
    src: 'https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&q=85',
    alt: 'Dessert plating',
    category: 'food',
    span: 'tall',
  },
  {
    id: 'g8',
    src: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600&q=85',
    alt: 'Wine cellar',
    category: 'ambiance',
  },
  {
    id: 'g9',
    src: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=85',
    alt: 'Artisan bread and butter',
    category: 'food',
  },
];

export const teamMembers: TeamMember[] = [
  {
    id: 'tm1',
    name: 'Étienne Laurent',
    role: 'Executive Chef & Founder',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=500&q=80',
    bio: 'Trained under Alain Ducasse and Joel Robuchon, Chef Laurent brings three decades of mastery to every plate. His philosophy: let the finest ingredients speak.',
  },
  {
    id: 'tm2',
    name: 'Camille Rousseau',
    role: 'Head Pastry Chef',
    image: 'https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=500&q=80',
    bio: 'A graduate of Le Cordon Bleu, Camille crafts desserts that are works of art. Her chocolate fondant has been called "transcendental" by critics.',
  },
  {
    id: 'tm3',
    name: 'Hiroshi Tanaka',
    role: 'Sommelier',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=500&q=80',
    bio: 'A master sommelier with expertise spanning Burgundy to Burgundy, Hiroshi curates our 1,200-bottle cellar with obsessive precision.',
  },
];

export const awards: Award[] = [
  { year: '2024', title: '2 Michelin Stars', organization: 'Michelin Guide' },
  { year: '2023', title: 'Restaurant of the Year', organization: 'The World\'s 50 Best' },
  { year: '2023', title: 'Best Wine Program', organization: 'Wine Spectator' },
  { year: '2022', title: 'James Beard Award', organization: 'Outstanding Chef' },
];
