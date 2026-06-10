import { useState } from 'react';
import type { MenuItem } from '@/types';
import { Badge } from '@/components/ui';

interface MenuCardProps {
  item: MenuItem;
}

export function MenuCard({ item }: MenuCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <article className="group bg-charcoal-900 border border-charcoal-800 hover:border-gold-500/30
      transition-all duration-500 overflow-hidden flex flex-col card-hover">
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        {!imgError ? (
          <img
            src={item.image}
            alt={item.name}
            onError={() => setImgError(true)}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-charcoal-800 flex items-center justify-center">
            <span className="text-charcoal-600 font-display text-2xl">{item.name[0]}</span>
          </div>
        )}
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent" />
        {/* Price Badge */}
        <div className="absolute bottom-4 right-4 bg-charcoal-950/90 px-3 py-1 border border-gold-500/30">
          <span className="font-display text-gold-400 text-lg">${item.price}</span>
        </div>
        {item.featured && (
          <div className="absolute top-4 left-4">
            <Badge label="Signature" variant="gold" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <h3 className="font-display text-xl text-cream mb-2 group-hover:text-gold-300 transition-colors duration-300">
          {item.name}
        </h3>
        <p className="font-body text-charcoal-400 text-base leading-relaxed flex-1">
          {item.description}
        </p>
        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-4">
            {item.tags.map((tag) => (
              <Badge key={tag} label={tag} />
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
