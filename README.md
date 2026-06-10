# Maison — Fine Dining Restaurant Website

A production-grade restaurant website built with React, TypeScript, and Tailwind CSS.

## Tech Stack

- **Framework**: React 18 + TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Routing**: React Router v6
- **Animations**: CSS animations + IntersectionObserver hook
- **Icons**: Lucide React
- **Build Tool**: Vite

## Project Structure

```
src/
├── components/
│   ├── layout/           # Navbar, Footer, Layout wrapper
│   ├── sections/         # Page-specific sections (Hero, CTABanner, etc.)
│   └── ui/               # Reusable UI components (MenuCard, ReviewCard, etc.)
├── data/                 # Static data (menu, restaurant info, gallery)
├── hooks/                # Custom React hooks
├── pages/                # Page components (one per route)
├── styles/               # Global CSS
├── types/                # TypeScript interfaces
├── App.tsx               # Router configuration
└── main.tsx              # Entry point
```

## Pages

| Route | Page |
|-------|------|
| `/` | Home — Hero, Featured Menu, Story, Reviews, CTA |
| `/about` | About — Story, Values, Team, Awards |
| `/menu` | Menu — Filterable menu with all categories |
| `/gallery` | Gallery — Masonry layout with lightbox |
| `/contact` | Contact — Form + map embed |
| `/reservations` | Reservations — Multi-step booking form |

## Getting Started

```bash
npm install
npm run dev
```

## Design System

- **Primary Font**: Playfair Display (display headings)
- **Secondary Font**: Cormorant Garamond (body, italic)
- **UI Font**: DM Sans (labels, buttons, UI)
- **Primary Color**: Gold (`#c99618`)
- **Background**: Charcoal (`#1a1816`)
- **Text**: Cream (`#faf6ef`)

## Customization

1. Update `src/data/restaurantData.ts` with real restaurant info
2. Update `src/data/menuData.ts` with real menu items
3. Update `src/data/navigationData.ts` with contact details
4. Replace Unsplash image URLs with actual restaurant photography
5. Connect form submissions to a real backend (Formspree, EmailJS, etc.)
6. Replace Google Maps embed with actual restaurant coordinates
