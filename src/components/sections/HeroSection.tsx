import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { restaurantInfo } from '@/data/navigationData';

export function HeroSection() {
  const scrollDown = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1800&q=90"
          alt="Maison restaurant interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950/95 via-charcoal-950/70 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/60 via-transparent to-charcoal-950/20" />
      </div>

      {/* Noise Texture */}
      <div className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`
        }}
      />

      {/* Decorative vertical lines */}
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold-500 to-transparent opacity-30" />

      {/* Content */}
      <div className="relative section-padding w-full pt-20">
        <div className="max-w-2xl">
          {/* Eyebrow */}
          <div
            className="flex items-center gap-3 mb-8"
            style={{ animation: 'fadeUp 0.8s ease 0.1s both' }}
          >
            <div className="w-8 h-px bg-gold-500" />
            <span className="font-sans text-xs tracking-[0.3em] uppercase text-gold-400">
              ✦ Michelin Two Stars ✦
            </span>
          </div>

          {/* Headline */}
          <h1
            className="font-display text-6xl md:text-7xl lg:text-8xl text-cream leading-[0.9] mb-8"
            style={{ animation: 'fadeUp 0.8s ease 0.25s both' }}
          >
            Where Art
            <br />
            <em className="text-gradient-gold not-italic">Meets</em>
            <br />
            Gastronomy
          </h1>

          {/* Divider */}
          <div
            className="w-16 h-px bg-gold-500 mb-8"
            style={{ animation: 'fadeUp 0.8s ease 0.4s both' }}
          />

          {/* Description */}
          <p
            className="font-body text-xl text-charcoal-300 leading-relaxed mb-12 max-w-lg"
            style={{ animation: 'fadeUp 0.8s ease 0.55s both' }}
          >
            {restaurantInfo.description}
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-4"
            style={{ animation: 'fadeUp 0.8s ease 0.7s both' }}
          >
            <Link to="/reservations" className="btn-primary">
              Reserve a Table
              <ArrowRight size={16} />
            </Link>
            <Link to="/menu" className="btn-outline">
              Explore Menu
            </Link>
          </div>

         {/* Stats */}
            <div
              className="flex items-start gap-8 sm:gap-12 lg:gap-16 mt-5 pt-4 border-t border-charcoal-800/60"
              style={{ animation: 'fadeUp 0.8s ease 0.85s both' }}
            >
              {[
                { value: '2★', label: 'Michelin Stars' },
                { value: '15+', label: 'Years of Excellence' },
                { value: '1200', label: 'Bottles in Cellar' },
              ].map(({ value, label }) => (
                <div key={label} className="min-w-0">
                  <div className="font-display text-3xl sm:text-4xl lg:text-5xl text-gold-400 leading-none">
                    {value}
                  </div>

                  <div className="font-sans text-[10px] sm:text-xs text-charcoal-400 uppercase tracking-[0.18em] mt-2 leading-relaxed">
                    {label}
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollDown}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-charcoal-400
          hover:text-gold-400 transition-colors duration-300 flex flex-col items-center gap-2 group"
      >
        <span className="font-sans text-[10px] tracking-widest uppercase opacity-60">Scroll</span>
        <ChevronDown size={16} className="animate-bounce" />
      </button>
    </section>
  );
}
