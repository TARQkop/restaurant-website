import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection } from '@/components/ui';

export function CTABanner() {
  return (
    <section className="relative py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1600&q=85"
          alt="Restaurant ambiance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal-950/80" />
      </div>

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-40" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500 to-transparent opacity-40" />

      <div className="relative section-padding text-center">
        <AnimatedSection>
          <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold-400 mb-6">
            Begin Your Experience
          </p>
          <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-cream leading-tight mb-8">
            Reserve Your
            <br />
            <em className="text-gradient-gold">Evening</em>
          </h2>
          <p className="font-body text-lg text-charcoal-300 max-w-lg mx-auto mb-12">
            Secure your table for an unforgettable dining experience. We welcome guests for
            both lunch and dinner service, Tuesday through Sunday.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/reservations" className="btn-primary">
              Make a Reservation
              <ArrowRight size={16} />
            </Link>
            <Link to="/contact" className="btn-outline">
              Private Events
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
