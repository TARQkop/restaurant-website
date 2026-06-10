import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { Star } from 'lucide-react';

// ─── Section Header ──────────────────────────────────────────────────────────
interface SectionHeaderProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  centered = false,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`mb-14 ${centered ? 'text-center' : ''}`}>
      {eyebrow && (
        <p className={`font-sans text-xs tracking-[0.3em] uppercase mb-4
          ${light ? 'text-gold-400' : 'text-gold-500'}`}
        >
          {eyebrow}
        </p>
      )}
      <h2 className={`font-display text-4xl md:text-5xl lg:text-6xl leading-tight
        ${light ? 'text-cream' : 'text-charcoal-950'}
        ${centered ? '' : ''}`}
      >
        {title}
      </h2>
      {eyebrow && (
        <div className={`w-14 h-px bg-gold-500 mt-5 ${centered ? 'mx-auto' : ''}`} />
      )}
      {subtitle && (
        <p className={`font-body text-lg mt-6 max-w-2xl leading-relaxed
          ${light ? 'text-charcoal-300' : 'text-charcoal-600'}
          ${centered ? 'mx-auto' : ''}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ─── Animated Section ────────────────────────────────────────────────────────
interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'left' | 'right' | 'none';
}

export function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation();

  const getTransform = () => {
    if (direction === 'left') return 'translateX(30px)';
    if (direction === 'right') return 'translateX(-30px)';
    if (direction === 'none') return 'none';
    return 'translateY(30px)';
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translate(0)' : getTransform(),
        transition: `opacity 0.8s ease ${delay}ms, transform 0.8s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Star Rating ─────────────────────────────────────────────────────────────
interface StarRatingProps {
  rating: number;
  max?: number;
}

export function StarRating({ rating, max = 5 }: StarRatingProps) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? 'text-gold-400 fill-gold-400' : 'text-charcoal-600'}
        />
      ))}
    </div>
  );
}

// ─── Gold Divider ────────────────────────────────────────────────────────────
export function GoldDivider({ centered = false }: { centered?: boolean }) {
  return (
    <div className={`flex items-center gap-3 my-6 ${centered ? 'justify-center' : ''}`}>
      <div className="w-12 h-px bg-gold-500" />
      <div className="w-1.5 h-1.5 bg-gold-500 rotate-45" />
      <div className="w-12 h-px bg-gold-500" />
    </div>
  );
}

// ─── Badge ───────────────────────────────────────────────────────────────────
interface BadgeProps {
  label: string;
  variant?: 'gold' | 'outline';
}

export function Badge({ label, variant = 'outline' }: BadgeProps) {
  return (
    <span
      className={`inline-block font-sans text-[10px] tracking-widest uppercase px-3 py-1
        ${variant === 'gold'
          ? 'bg-gold-500/20 text-gold-400 border border-gold-500/30'
          : 'border border-charcoal-700 text-charcoal-400'
        }`}
    >
      {label}
    </span>
  );
}
