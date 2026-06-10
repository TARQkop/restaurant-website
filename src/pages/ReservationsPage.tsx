import { useState } from 'react';
import { Calendar, Clock, Users, CheckCircle } from 'lucide-react';
import { SectionHeader, AnimatedSection } from '@/components/ui';
import type { ReservationFormData } from '@/types';
import { restaurantInfo } from '@/data/navigationData';

const timeSlots = [
  '12:00', '12:30', '13:00', '13:30', '14:00',
  '19:00', '19:30', '20:00', '20:30', '21:00', '21:30',
];

const occasions = [
  'Birthday', 'Anniversary', 'Business Dinner', 'Date Night',
  'Proposal', 'Family Gathering', 'Other',
];

export function ReservationsPage() {
  const [form, setForm] = useState<ReservationFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
    occasion: '',
    specialRequests: '',
  });
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [submitted, setSubmitted] = useState(false);

  const today = new Date().toISOString().split('T')[0];

  const inputClass = `w-full bg-charcoal-900 border border-charcoal-700 text-cream
    font-body text-base px-4 py-3 focus:outline-none focus:border-gold-500
    placeholder:text-charcoal-600 transition-colors duration-300`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center section-padding bg-charcoal-950">
        <div className="text-center max-w-lg">
          <CheckCircle size={60} className="text-gold-400 mx-auto mb-8" />
          <h2 className="font-display text-5xl text-cream mb-6">Reservation Confirmed</h2>
          <div className="w-12 h-px bg-gold-500 mx-auto mb-6" />
          <p className="font-body text-lg text-charcoal-300 leading-relaxed mb-4">
            Thank you, {form.firstName}. We have received your reservation request for{' '}
            <span className="text-gold-400">{form.guests} guests</span> on{' '}
            <span className="text-gold-400">{form.date}</span> at{' '}
            <span className="text-gold-400">{form.time}</span>.
          </p>
          <p className="font-body text-charcoal-400">
            A confirmation email will be sent to {form.email} within the next few minutes.
            We look forward to welcoming you to Maison.
          </p>
          <button
            onClick={() => { setSubmitted(false); setStep(1); setForm({ firstName: '', lastName: '', email: '', phone: '', date: '', time: '', guests: 2, occasion: '', specialRequests: '' }); }}
            className="btn-outline mt-10"
          >
            Make Another Reservation
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="relative pt-40 pb-20 section-padding">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1600&q=85"
            alt="Restaurant table setting"
            className="w-full h-full object-cover opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950 via-charcoal-950/92 to-charcoal-950" />
        </div>
        <AnimatedSection className="relative">
          <SectionHeader
            eyebrow="Reservations"
            title="Secure Your Table"
            subtitle="We accommodate groups of 1 to 12. For larger parties or private dining, please contact us directly."
            light
          />
        </AnimatedSection>
      </section>

      {/* Reservation Form */}
      <section className="pb-28 section-padding bg-charcoal-950">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <AnimatedSection>
              {/* Progress */}
              <div className="flex gap-0 mb-10 border border-charcoal-800">
                {(['Details', 'Date & Time', 'Confirm'] as const).map((label, i) => (
                  <div
                    key={label}
                    className={`flex-1 p-4 text-center font-sans text-xs tracking-widest uppercase transition-all duration-300
                      ${step === i + 1
                        ? 'bg-gold-500 text-charcoal-950'
                        : step > i + 1
                        ? 'bg-gold-500/20 text-gold-500'
                        : 'text-charcoal-500'
                      }`}
                  >
                    {label}
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit}>
                {/* Step 1: Personal Details */}
                {step === 1 && (
                  <div className="space-y-5">
                    <h3 className="font-display text-2xl text-cream mb-6">Your Details</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="font-sans text-xs tracking-widest uppercase text-charcoal-500 block mb-2">First Name *</label>
                        <input type="text" required value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} placeholder="First name" className={inputClass} />
                      </div>
                      <div>
                        <label className="font-sans text-xs tracking-widest uppercase text-charcoal-500 block mb-2">Last Name *</label>
                        <input type="text" required value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} placeholder="Last name" className={inputClass} />
                      </div>
                    </div>
                    <div>
                      <label className="font-sans text-xs tracking-widest uppercase text-charcoal-500 block mb-2">Email *</label>
                      <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} placeholder="your@email.com" className={inputClass} />
                    </div>
                    <div>
                      <label className="font-sans text-xs tracking-widest uppercase text-charcoal-500 block mb-2">Phone *</label>
                      <input type="tel" required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} placeholder="+1 (555) 000-0000" className={inputClass} />
                    </div>
                    <button
                      type="button"
                      onClick={() => form.firstName && form.lastName && form.email && form.phone && setStep(2)}
                      className="btn-primary w-full justify-center"
                    >
                      Continue
                    </button>
                  </div>
                )}

                {/* Step 2: Date & Time */}
                {step === 2 && (
                  <div className="space-y-6">
                    <h3 className="font-display text-2xl text-cream mb-6">Date, Time & Party</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="font-sans text-xs tracking-widest uppercase text-charcoal-500 block mb-2">
                          <Calendar size={12} className="inline mr-1" />Date *
                        </label>
                        <input type="date" required min={today} value={form.date} onChange={(e) => setForm({ ...form, date: e.target.value })} className={inputClass} />
                      </div>
                      <div>
                        <label className="font-sans text-xs tracking-widest uppercase text-charcoal-500 block mb-2">
                          <Users size={12} className="inline mr-1" />Guests *
                        </label>
                        <select value={form.guests} onChange={(e) => setForm({ ...form, guests: Number(e.target.value) })} className={`${inputClass} cursor-pointer`}>
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => (
                            <option key={n} value={n}>{n} {n === 1 ? 'Guest' : 'Guests'}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="font-sans text-xs tracking-widest uppercase text-charcoal-500 block mb-3">
                        <Clock size={12} className="inline mr-1" />Time *
                      </label>
                      <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                        {timeSlots.map((slot) => (
                          <button
                            key={slot}
                            type="button"
                            onClick={() => setForm({ ...form, time: slot })}
                            className={`py-3 text-sm font-sans transition-all duration-300
                              ${form.time === slot
                                ? 'bg-gold-500 text-charcoal-950'
                                : 'border border-charcoal-700 text-charcoal-400 hover:border-gold-500/50 hover:text-cream'
                              }`}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="font-sans text-xs tracking-widest uppercase text-charcoal-500 block mb-2">Occasion</label>
                      <select value={form.occasion} onChange={(e) => setForm({ ...form, occasion: e.target.value })} className={`${inputClass} cursor-pointer`}>
                        <option value="">Select occasion (optional)</option>
                        {occasions.map((o) => <option key={o} value={o}>{o}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="font-sans text-xs tracking-widest uppercase text-charcoal-500 block mb-2">Special Requests</label>
                      <textarea rows={3} value={form.specialRequests} onChange={(e) => setForm({ ...form, specialRequests: e.target.value })} placeholder="Dietary requirements, allergies, seating preferences..." className={`${inputClass} resize-none`} />
                    </div>
                    <div className="flex gap-4">
                      <button type="button" onClick={() => setStep(1)} className="btn-outline flex-1 justify-center">Back</button>
                      <button
                        type="button"
                        onClick={() => form.date && form.time && setStep(3)}
                        className="btn-primary flex-1 justify-center"
                      >
                        Review
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Confirm */}
                {step === 3 && (
                  <div>
                    <h3 className="font-display text-2xl text-cream mb-6">Confirm Your Reservation</h3>
                    <div className="border border-charcoal-800 divide-y divide-charcoal-800 mb-8">
                      {[
                        { label: 'Name', value: `${form.firstName} ${form.lastName}` },
                        { label: 'Email', value: form.email },
                        { label: 'Phone', value: form.phone },
                        { label: 'Date', value: form.date },
                        { label: 'Time', value: form.time },
                        { label: 'Guests', value: `${form.guests} ${form.guests === 1 ? 'guest' : 'guests'}` },
                        ...(form.occasion ? [{ label: 'Occasion', value: form.occasion }] : []),
                        ...(form.specialRequests ? [{ label: 'Requests', value: form.specialRequests }] : []),
                      ].map(({ label, value }) => (
                        <div key={label} className="flex gap-4 p-4">
                          <span className="font-sans text-xs tracking-widest uppercase text-charcoal-500 w-24 shrink-0 pt-1">{label}</span>
                          <span className="font-body text-cream text-base">{value}</span>
                        </div>
                      ))}
                    </div>
                    <p className="font-body text-charcoal-400 text-sm mb-8">
                      By confirming, you agree to our reservation policy. We hold tables for 15 minutes.
                      Cancellations must be made 24 hours in advance.
                    </p>
                    <div className="flex gap-4">
                      <button type="button" onClick={() => setStep(2)} className="btn-outline flex-1 justify-center">Edit</button>
                      <button type="submit" className="btn-primary flex-1 justify-center">Confirm Reservation</button>
                    </div>
                  </div>
                )}
              </form>
            </AnimatedSection>
          </div>

          {/* Sidebar Info */}
          <div>
            <AnimatedSection direction="left" delay={200}>
              <div className="sticky top-28 space-y-8">
                <div className="border border-charcoal-800 p-8">
                  <h4 className="font-sans text-xs tracking-widest uppercase text-gold-500 mb-6">Hours</h4>
                  <div className="space-y-3 font-body text-charcoal-400">
                    <p className="text-cream font-medium">Lunch</p>
                    <p className="text-sm">{restaurantInfo.hours.lunch}</p>
                    <p className="text-cream font-medium mt-4">Dinner</p>
                    <p className="text-sm">{restaurantInfo.hours.dinner}</p>
                    <p className="text-sm italic mt-4 text-charcoal-500">{restaurantInfo.hours.closed}</p>
                  </div>
                </div>
                <div className="border border-charcoal-800 p-8">
                  <h4 className="font-sans text-xs tracking-widest uppercase text-gold-500 mb-4">Large Groups</h4>
                  <p className="font-body text-charcoal-400 text-sm leading-relaxed mb-4">
                    For parties of 12 or more, or private dining room bookings, please contact us directly.
                  </p>
                  <a href={`tel:${restaurantInfo.phone}`} className="font-display text-gold-400 text-xl">
                    {restaurantInfo.phone}
                  </a>
                </div>
                <div className="border border-gold-500/20 bg-gold-500/5 p-8">
                  <h4 className="font-sans text-xs tracking-widest uppercase text-gold-500 mb-4">Chef's Tasting Menu</h4>
                  <p className="font-body text-charcoal-400 text-sm leading-relaxed">
                    The 8-course tasting menu is available for the full table and must be requested at time of booking.
                  </p>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </>
  );
}
