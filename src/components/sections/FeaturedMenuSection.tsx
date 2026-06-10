import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { menuItems } from '@/data/menuData';
import { MenuCard } from '@/components/ui/MenuCard';
import { SectionHeader, AnimatedSection } from '@/components/ui';

export function FeaturedMenuSection() {
  const featured = menuItems.filter((item) => item.featured).slice(0, 4);

  return (
    <section className="py-28 section-padding bg-charcoal-950">
      <AnimatedSection>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <SectionHeader
            eyebrow="Our Signatures"
            title={`Crafted with\nPassion`}
            subtitle="Each dish is a canvas — where classical technique meets bold inspiration."
            light
          />
          <Link
            to="/menu"
            className="btn-outline shrink-0 self-start md:self-auto mb-14"
          >
            Full Menu
            <ArrowRight size={14} />
          </Link>
        </div>
      </AnimatedSection>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {featured.map((item, i) => (
          <AnimatedSection key={item.id} delay={i * 100}>
            <MenuCard item={item} />
          </AnimatedSection>
        ))}
      </div>
    </section>
  );
}
