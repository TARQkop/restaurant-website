import { useState } from 'react';
import { galleryImages } from '@/data/restaurantData';
import { SectionHeader, AnimatedSection } from '@/components/ui';
import type { GalleryImage } from '@/types';
import { X } from 'lucide-react';

type GalleryCategory = 'all' | GalleryImage['category'];

const categories: { key: GalleryCategory; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'food', label: 'Food & Drink' },
  { key: 'ambiance', label: 'Ambiance' },
  { key: 'team', label: 'Our Team' },
  { key: 'events', label: 'Events' },
];

export function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');
  const [lightboxImage, setLightboxImage] = useState<GalleryImage | null>(null);

  const filtered = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-40 pb-20 section-padding overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1484659619207-9165d119dafe?w=1600&q=85"
            alt="Gallery header"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950 via-charcoal-950/90 to-charcoal-950" />
        </div>
        <AnimatedSection className="relative">
          <SectionHeader
            eyebrow="Gallery"
            title="Moments at Maison"
            subtitle="A visual journey through the flavours, spaces, and people that define our experience."
            light
          />
        </AnimatedSection>
      </section>

      {/* Gallery */}
      <section className="pb-28 section-padding bg-charcoal-950">
        {/* Filters */}
        <AnimatedSection>
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`font-sans text-xs tracking-widest uppercase px-5 py-2.5 transition-all duration-300
                  ${activeCategory === key
                    ? 'bg-gold-500 text-charcoal-950'
                    : 'border border-charcoal-700 text-charcoal-400 hover:border-gold-500/50 hover:text-cream'
                  }`}
              >
                {label}
              </button>
            ))}
          </div>
        </AnimatedSection>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {filtered.map((image, i) => (
            <AnimatedSection key={image.id} delay={(i % 3) * 80} className="break-inside-avoid">
              <div
                className="relative group overflow-hidden cursor-pointer"
                onClick={() => setLightboxImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105
                    ${image.span === 'tall' ? 'aspect-[2/3]' : image.span === 'wide' ? 'aspect-video' : 'aspect-square'}
                  `}
                />
                <div className="absolute inset-0 bg-charcoal-950/0 group-hover:bg-charcoal-950/40
                  transition-all duration-500 flex items-center justify-center">
                  <span className="font-display text-cream text-lg opacity-0 group-hover:opacity-100
                    transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                    {image.alt}
                  </span>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-charcoal-950/95 flex items-center justify-center p-8"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-cream hover:text-gold-400 transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <X size={32} />
          </button>
          <img
            src={lightboxImage.src}
            alt={lightboxImage.alt}
            className="max-w-full max-h-[85vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
          <p className="absolute bottom-8 left-1/2 -translate-x-1/2 font-body text-charcoal-400 text-sm">
            {lightboxImage.alt}
          </p>
        </div>
      )}
    </>
  );
}
