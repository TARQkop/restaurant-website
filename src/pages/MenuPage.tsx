import { useState } from 'react';
import { menuItems, menuCategories } from '@/data/menuData';
import { MenuCard } from '@/components/ui/MenuCard';
import { SectionHeader, AnimatedSection } from '@/components/ui';
import type { MenuCategory } from '@/types';
import { CTABanner } from '@/components/sections/CTABanner';

export function MenuPage() {
  const [activeCategory, setActiveCategory] = useState<'all' | MenuCategory>('all');

  const filtered = activeCategory === 'all'
    ? menuItems
    : menuItems.filter((item) => item.category === activeCategory);

  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-40 pb-20 section-padding overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1600891964092-4316c288032e?w=1600&q=85"
            alt="Food spread"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950 via-charcoal-950/90 to-charcoal-950" />
        </div>
        <AnimatedSection className="relative">
          <SectionHeader
            eyebrow="The Menu"
            title={`A Season on\na Plate`}
            subtitle="Our menu changes with the seasons. What you see today reflects the finest produce available right now."
            light
          />
        </AnimatedSection>
      </section>

      {/* Menu Section */}
      <section className="py-12 section-padding bg-charcoal-950">
        {/* Category Filters */}
        <AnimatedSection>
          <div className="flex flex-wrap gap-2 mb-14 border-b border-charcoal-800 pb-8">
            {menuCategories.map(({ key, label }) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key as 'all' | MenuCategory)}
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

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((item, i) => (
            <AnimatedSection key={item.id} delay={(i % 4) * 80}>
              <MenuCard item={item} />
            </AnimatedSection>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20">
            <p className="font-body text-charcoal-500 text-xl">No items in this category</p>
          </div>
        )}
      </section>

      {/* Tasting Menu CTA */}
      <section className="py-20 section-padding bg-charcoal-900/50">
        <AnimatedSection>
          <div className="border border-gold-500/30 p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold-500 mb-3">
                The Pinnacle Experience
              </p>
              <h3 className="font-display text-4xl text-cream mb-4">
                Chef's Tasting Menu
              </h3>
              <p className="font-body text-charcoal-300 max-w-lg">
                Eight courses that tell a story — from sea to earth, from simplicity to complexity.
                Available with optional wine pairings curated by Sommelier Hiroshi Tanaka.
              </p>
            </div>
            <div className="text-center shrink-0">
              <div className="font-display text-6xl text-gold-400 mb-1">$195</div>
              <div className="font-sans text-xs text-charcoal-500 tracking-widest uppercase">per person</div>
              <a href="/reservations" className="btn-primary mt-6">
                Reserve for Tasting
              </a>
            </div>
          </div>
        </AnimatedSection>
      </section>

      <CTABanner />
    </>
  );
}
