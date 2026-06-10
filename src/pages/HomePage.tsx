import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturedMenuSection } from '@/components/sections/FeaturedMenuSection';
import { StorySection } from '@/components/sections/StorySection';
import { ReviewsSection } from '@/components/sections/ReviewsSection';
import { CTABanner } from '@/components/sections/CTABanner';

export function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedMenuSection />
      <StorySection />
      <ReviewsSection />
      <CTABanner />
    </>
  );
}
