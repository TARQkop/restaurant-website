import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { restaurantInfo } from '@/data/navigationData';
import { SectionHeader, AnimatedSection } from '@/components/ui';
import type { ContactFormData } from '@/types';

export function ContactPage() {
  const [form, setForm] = useState<ContactFormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, connect to your API/email service
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const inputClass = `w-full bg-charcoal-900 border border-charcoal-700 text-cream
    font-body text-base px-4 py-3 focus:outline-none focus:border-gold-500
    placeholder:text-charcoal-600 transition-colors duration-300`;

  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-40 pb-20 section-padding">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=1600&q=85"
            alt="Wine cellar"
            className="w-full h-full object-cover opacity-10"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950 via-charcoal-950/95 to-charcoal-950" />
        </div>
        <AnimatedSection className="relative">
          <SectionHeader
            eyebrow="Get in Touch"
            title="We'd Love to Hear From You"
            subtitle="Whether it's a question about the menu, a private event enquiry, or feedback — we're here."
            light
          />
        </AnimatedSection>
      </section>

      {/* Content */}
      <section className="pb-28 section-padding bg-charcoal-950">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <AnimatedSection direction="right">
            <div className="space-y-12">
              {/* Info Cards */}
              {[
                {
                  Icon: MapPin,
                  title: 'Address',
                  lines: [restaurantInfo.address],
                },
                {
                  Icon: Phone,
                  title: 'Reservations',
                  lines: [restaurantInfo.phone],
                  href: `tel:${restaurantInfo.phone}`,
                },
                {
                  Icon: Mail,
                  title: 'Email',
                  lines: [restaurantInfo.email],
                  href: `mailto:${restaurantInfo.email}`,
                },
                {
                  Icon: Clock,
                  title: 'Hours',
                  lines: [
                    restaurantInfo.hours.lunch,
                    restaurantInfo.hours.dinner,
                    restaurantInfo.hours.closed,
                  ],
                },
              ].map(({ Icon, title, lines, href }) => (
                <div key={title} className="flex gap-5">
                  <div className="w-12 h-12 border border-gold-500/30 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-gold-400" />
                  </div>
                  <div>
                    <h4 className="font-sans text-xs tracking-widest uppercase text-gold-500 mb-2">{title}</h4>
                    {lines.map((line, i) => href && i === 0 ? (
                      <a key={i} href={href} className="font-body text-cream hover:text-gold-300 transition-colors text-lg block">
                        {line}
                      </a>
                    ) : (
                      <p key={i} className="font-body text-charcoal-400 text-base">{line}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Map Embed */}
            <div className="mt-12 border border-charcoal-800 overflow-hidden h-64">
              <iframe
                title="Maison Restaurant Location"
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.142047744348!2d2.3308!3d48.8698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUyJzExLjMiTiAywrAxOSc1MC45IkU!5e0!3m2!1sen!2sfr!4v1615000000000!5m2!1sen!2sfr`}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection direction="left" delay={150}>
            <div className="border border-charcoal-800 p-8 md:p-10">
              <h3 className="font-display text-3xl text-cream mb-8">Send a Message</h3>

              {submitted && (
                <div className="bg-gold-500/10 border border-gold-500/30 text-gold-400 p-4 mb-6 font-body text-sm">
                  Thank you for your message. We'll be in touch within 24 hours.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-sans text-xs tracking-widest uppercase text-charcoal-500 block mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your full name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="font-sans text-xs tracking-widest uppercase text-charcoal-500 block mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      placeholder="your@email.com"
                      className={inputClass}
                    />
                  </div>
                </div>
                <div>
                  <label className="font-sans text-xs tracking-widest uppercase text-charcoal-500 block mb-2">
                    Subject *
                  </label>
                  <select
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className={`${inputClass} cursor-pointer`}
                  >
                    <option value="" disabled>Select a subject</option>
                    <option value="reservation">Reservation Enquiry</option>
                    <option value="private-event">Private Event</option>
                    <option value="feedback">Feedback</option>
                    <option value="press">Press & Media</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="font-sans text-xs tracking-widest uppercase text-charcoal-500 block mb-2">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="How can we help?"
                    className={`${inputClass} resize-none`}
                  />
                </div>
                <button type="submit" className="btn-primary w-full justify-center">
                  Send Message
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
