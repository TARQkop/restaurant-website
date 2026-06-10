import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { navLinks, restaurantInfo } from '@/data/navigationData';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-950 border-t border-gold-500/10">
      {/* Main Footer */}
      <div className="section-padding py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <div className="font-display text-3xl text-cream">
                {restaurantInfo.name}
              </div>
              <div className="font-sans text-[9px] tracking-[0.3em] text-gold-500 uppercase mt-1">
                Fine Dining
              </div>
            </Link>
            <p className="font-body text-charcoal-400 leading-relaxed text-base mb-8">
              {restaurantInfo.tagline}. A two-Michelin-star dining experience crafted with passion.
            </p>
            {/* Social */}
            <div className="flex gap-4">
              {[
                { Icon: Instagram, href: '#', label: 'Instagram' },
                { Icon: Facebook, href: '#', label: 'Facebook' },
                { Icon: Twitter, href: '#', label: 'Twitter' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 border border-charcoal-700 flex items-center justify-center
                    text-charcoal-400 hover:border-gold-500 hover:text-gold-400
                    transition-all duration-300"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.25em] uppercase text-gold-500 mb-6">
              Explore
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="font-body text-charcoal-400 hover:text-cream transition-colors duration-300 text-base"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.25em] uppercase text-gold-500 mb-6">
              Hours
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Clock size={14} className="text-gold-500 mt-1 shrink-0" />
                <div>
                  <p className="font-body text-cream text-sm">Lunch</p>
                  <p className="font-body text-charcoal-400 text-sm">{restaurantInfo.hours.lunch}</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={14} className="text-gold-500 mt-1 shrink-0" />
                <div>
                  <p className="font-body text-cream text-sm">Dinner</p>
                  <p className="font-body text-charcoal-400 text-sm">{restaurantInfo.hours.dinner}</p>
                </div>
              </li>
              <li className="font-body text-charcoal-500 text-sm italic pl-5">
                {restaurantInfo.hours.closed}
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-sans text-xs tracking-[0.25em] uppercase text-gold-500 mb-6">
              Contact
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={14} className="text-gold-500 mt-1 shrink-0" />
                <p className="font-body text-charcoal-400 text-sm leading-relaxed">
                  {restaurantInfo.address}
                </p>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={14} className="text-gold-500 shrink-0" />
                <a
                  href={`tel:${restaurantInfo.phone}`}
                  className="font-body text-charcoal-400 hover:text-cream transition-colors text-sm"
                >
                  {restaurantInfo.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={14} className="text-gold-500 shrink-0" />
                <a
                  href={`mailto:${restaurantInfo.email}`}
                  className="font-body text-charcoal-400 hover:text-cream transition-colors text-sm"
                >
                  {restaurantInfo.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-charcoal-800">
        <div className="section-padding py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-sans text-charcoal-500 text-xs">
            © {year} {restaurantInfo.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {['Privacy Policy', 'Terms of Service', 'Accessibility'].map((item) => (
              <a
                key={item}
                href="#"
                className="font-sans text-charcoal-500 hover:text-charcoal-300 text-xs transition-colors duration-300"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
