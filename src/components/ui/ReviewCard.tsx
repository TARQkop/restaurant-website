import type { Review } from '@/types';
import { StarRating } from '@/components/ui';
import { Quote } from 'lucide-react';

interface ReviewCardProps {
  review: Review;
}

export function ReviewCard({ review }: ReviewCardProps) {
  return (
    <article className="bg-charcoal-900 border border-charcoal-800 p-8 flex flex-col
      hover:border-gold-500/20 transition-all duration-500 relative overflow-hidden group">
      {/* Background Quote Icon */}
      <Quote
        size={80}
        className="absolute -top-4 -right-4 text-gold-500/5 group-hover:text-gold-500/10
          transition-all duration-500 rotate-180"
      />

      <StarRating rating={review.rating} />

      <blockquote className="font-body text-lg text-charcoal-300 leading-relaxed mt-5 mb-8 flex-1 italic">
        "{review.text}"
      </blockquote>

      <div className="flex items-center gap-4 mt-auto pt-6 border-t border-charcoal-800">
        <img
          src={review.avatar}
          alt={review.name}
          className="w-12 h-12 rounded-full object-cover border-2 border-gold-500/20"
        />
        <div>
          <p className="font-sans text-sm text-cream font-medium">{review.name}</p>
          <p className="font-sans text-xs text-charcoal-500">{review.role}</p>
          <p className="font-sans text-xs text-gold-500 mt-0.5">{review.date}</p>
        </div>
      </div>
    </article>
  );
}
