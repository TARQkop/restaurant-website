import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { navLinks, restaurantInfo } from '@/data/navigationData';
import { useScrollPosition } from '@/hooks/useScrollPosition';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { isAtTop, scrollDirection } = useScrollPosition();
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const isHidden = scrollDirection === 'down' && !isAtTop && !mobileOpen;

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500
          ${isHidden ? '-translate-y-full' : 'translate-y-0'}
          ${isAtTop ? 'bg-transparent' : 'bg-charcoal-950/95 backdrop-blur-md border-b border-gold-500/10'}
        `}
      >
        <div className="section-padding flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex flex-col leading-none group">
            <span className="font-display text-2xl text-cream tracking-wider group-hover:text-gold-400 transition-colors duration-300">
              {restaurantInfo.name}
            </span>
            <span className="font-sans text-[9px] tracking-[0.3em] text-gold-500 uppercase mt-0.5">
              Fine Dining
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.filter(l => l.label !== 'Reservations').map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`font-sans text-xs tracking-[0.15em] uppercase transition-all duration-300
                  ${location.pathname === link.href
                    ? 'text-gold-400'
                    : 'text-charcoal-300 hover:text-cream'
                  }
                  relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-px
                  after:bg-gold-500 after:scale-x-0 after:transition-transform after:duration-300
                  ${location.pathname === link.href ? 'after:scale-x-100' : 'hover:after:scale-x-100'}
                `}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/reservations" className="btn-primary text-xs py-3 px-6">
              Reserve a Table
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-cream hover:text-gold-400 transition-colors p-1"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-charcoal-950 flex flex-col transition-all duration-500
          ${mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
        `}
      >
        <div className="section-padding flex flex-col justify-center h-full gap-8 pt-20">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              to={link.href}
              className={`font-display text-4xl text-cream hover:text-gold-400 transition-all duration-300
                ${mobileOpen ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'}
              `}
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4">
            <p className="font-sans text-xs tracking-widest uppercase text-charcoal-400 mb-2">
              Reservations
            </p>
            <a
              href={`tel:${restaurantInfo.phone}`}
              className="font-display text-xl text-gold-400"
            >
              {restaurantInfo.phone}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
