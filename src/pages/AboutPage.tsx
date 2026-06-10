import { SectionHeader, AnimatedSection, GoldDivider } from '@/components/ui';
import { awards, teamMembers } from '@/data/restaurantData';
import { CTABanner } from '@/components/sections/CTABanner';

export function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="relative pt-40 pb-28 section-padding overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=1600&q=85"
            alt="Chef at work"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-charcoal-950 via-charcoal-950/80 to-charcoal-950" />
        </div>
        <div className="relative max-w-3xl">
          <AnimatedSection>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold-500 mb-6">
              Our Story
            </p>
            <h1 className="font-display text-6xl md:text-7xl text-cream leading-tight mb-6">
              A Philosophy
              <br />
              <em className="text-gradient-gold">of Excellence</em>
            </h1>
            <GoldDivider />
            <p className="font-body text-xl text-charcoal-300 leading-relaxed">
              Maison is more than a restaurant — it is a sanctuary of flavour, a place where
              every guest is treated as family, and every plate tells a story.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 section-padding bg-charcoal-900/50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <AnimatedSection direction="right">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=85"
                alt="Maison dining room"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute -bottom-5 -right-5 w-1/2 h-1/2 border border-gold-500/20 -z-10" />
            </div>
          </AnimatedSection>
          <AnimatedSection direction="left" delay={150}>
            <p className="font-sans text-xs tracking-[0.3em] uppercase text-gold-500 mb-4">
              The Beginning
            </p>
            <h2 className="font-display text-4xl text-cream mb-6">
              Founded on Passion
            </h2>
            <div className="space-y-5 font-body text-lg text-charcoal-300 leading-relaxed">
              <p>
                In 2009, Chef Étienne Laurent returned from a decade in Paris and Tokyo with a singular 
                vision: to create a restaurant that treated dining as a total art form — where architecture, 
                music, service, and cuisine existed in perfect harmony.
              </p>
              <p>
                He found a converted 19th-century warehouse in the heart of the city and spent two years 
                transforming it into Maison — a space that is simultaneously intimate and grand, where 
                exposed brick meets polished brass and candlelight dances across linen tablecloths.
              </p>
              <p>
                The first Michelin star came within two years. The second followed in 2016. But for 
                Chef Laurent, the greatest measure of success remains simpler: "When a guest leaves 
                with something they cannot explain — only feel."
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 section-padding bg-charcoal-950">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Our Principles"
            title="What We Believe"
            centered
            light
          />
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-4">
          {[
            {
              number: '01',
              title: 'Ingredient Integrity',
              body: 'We work with fewer than 40 suppliers — all known personally by Chef Laurent. Every ingredient has a name and a place of origin.',
            },
            {
              number: '02',
              title: 'Seasonal Truth',
              body: 'Our menu changes with the seasons, sometimes the week. We cook what is best today, not what is convenient.',
            },
            {
              number: '03',
              title: 'Genuine Hospitality',
              body: 'Service at Maison is not scripted. Our team is trained to read the room — to know when to speak and when to simply be present.',
            },
          ].map((value, i) => (
            <AnimatedSection key={value.number} delay={i * 120}>
              <div className="border border-charcoal-800 p-8 hover:border-gold-500/30 transition-all duration-500">
                <div className="font-display text-6xl text-gold-500/20 mb-4">{value.number}</div>
                <h3 className="font-display text-2xl text-cream mb-4">{value.title}</h3>
                <p className="font-body text-charcoal-400 leading-relaxed">{value.body}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-24 section-padding bg-charcoal-900/50">
        <AnimatedSection>
          <SectionHeader
            eyebrow="The Team"
            title="The Artisans Behind Every Plate"
            centered
            light
          />
        </AnimatedSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member, i) => (
            <AnimatedSection key={member.id} delay={i * 100}>
              <div className="group text-center">
                <div className="relative overflow-hidden mb-6 aspect-[3/4]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <p className="font-sans text-xs tracking-[0.2em] uppercase text-gold-500 mb-2">
                  {member.role}
                </p>
                <h3 className="font-display text-2xl text-cream mb-4">{member.name}</h3>
                <p className="font-body text-charcoal-400 leading-relaxed">{member.bio}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section className="py-24 section-padding bg-charcoal-950">
        <AnimatedSection>
          <SectionHeader
            eyebrow="Recognition"
            title="Honours & Awards"
            centered
            light
          />
        </AnimatedSection>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {awards.map((award, i) => (
            <AnimatedSection key={award.title} delay={i * 80}>
              <div className="border border-charcoal-800 p-8 text-center hover:border-gold-500/30 transition-all duration-500">
                <div className="font-sans text-xs tracking-widest text-gold-500 mb-3">{award.year}</div>
                <div className="font-display text-xl text-cream mb-2">{award.title}</div>
                <div className="font-sans text-xs text-charcoal-500">{award.organization}</div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>

      <CTABanner />
    </>
  );
}
