import { reviews } from '@/data/restaurantData';
import { ReviewCard } from '@/components/ui/ReviewCard';
import { SectionHeader, AnimatedSection } from '@/components/ui';

export function ReviewsSection() {
  return (
    <section className="py-28 section-padding bg-charcoal-950">
      <AnimatedSection>
        <SectionHeader
          eyebrow="Guest Voices"
          title="Experiences That Echo"
          subtitle="What our guests say about evenings spent at Maison."
          centered
          light
        />
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviews.slice(0, 3).map((review, i) => (
          <AnimatedSection key={review.id} delay={i * 100}>
            <ReviewCard review={review} />
          </AnimatedSection>
        ))}
      </div>

      {/* Bottom stats bar */}
      <AnimatedSection delay={400}>
        <div className="mt-16 border border-charcoal-800 grid grid-cols-3 divide-x divide-charcoal-800">
          {[
            { value: '4.9', label: 'Average Rating' },
            { value: '2,400+', label: 'Happy Guests' },
            { value: '98%', label: 'Would Return' },
          ].map(({ value, label }) => (
            <div key={label} className="p-8 text-center">
              <div className="font-display text-4xl text-gold-400">{value}</div>
              <div className="font-sans text-xs text-charcoal-400 uppercase tracking-widest mt-2">{label}</div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
}
