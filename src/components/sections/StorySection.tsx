import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection, GoldDivider } from '@/components/ui';
import { awards } from '@/data/restaurantData';

export function StorySection() {
  return (
    <section className="py-28 section-padding bg-charcoal-900/50">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image Column */}
        <AnimatedSection direction="right" className="relative">
          <div className="relative aspect-[3/4] max-w-md mx-auto lg:max-w-none">
            <img
              src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=700&q=85"
              alt="Chef Étienne Laurent"
              className="w-full h-full object-cover"
            />
            {/* Decorative frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-gold-500/30 -z-10" />
            {/* Award badge */}
            <div className="absolute -bottom-4 -left-4 bg-charcoal-950 border border-gold-500/40 p-6">
              <div className="font-display text-4xl text-gold-400 leading-none">2★</div>
              <div className="font-sans text-[10px] tracking-widest uppercase text-charcoal-400 mt-1">
                Michelin
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Text Column */}
        <AnimatedSection direction="left" delay={150}>
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold-500 mb-4">
            Our Story
          </p>
          <h2 className="font-display text-5xl lg:text-6xl text-cream leading-tight mb-6">
            A Journey of
            <br />
            <em className="text-gradient-gold">Flavour</em>
          </h2>
          <GoldDivider />
          <div className="space-y-5 font-body text-lg text-charcoal-300 leading-relaxed">
            <p>
              Founded in 2009 by Chef Étienne Laurent, Maison was born from a simple conviction:
              that fine dining should feel like poetry — precise, emotional, and unforgettable.
            </p>
            <p>
              Trained in the kitchens of Ducasse and Robuchon, Chef Laurent returned to the city
              with a vision to create something deeply personal — a restaurant that tells a story
              with every course.
            </p>
            <p>
              Today, Maison holds two Michelin stars and is recognized among the world's finest
              dining destinations, yet our philosophy remains unchanged: hospitality is an art form.
            </p>
          </div>

          {/* Awards */}
          <div className="grid grid-cols-2 gap-4 mt-10">
            {awards.map((award) => (
              <div key={award.title} className="border border-charcoal-800 p-4">
                <p className="font-sans text-xs text-gold-500">{award.year}</p>
                <p className="font-display text-cream text-sm mt-1">{award.title}</p>
                <p className="font-sans text-xs text-charcoal-500 mt-0.5">{award.organization}</p>
              </div>
            ))}
          </div>

          <Link to="/about" className="btn-outline mt-10 inline-flex">
            Our Full Story
            <ArrowRight size={14} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
