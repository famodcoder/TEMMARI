import type { Metadata } from 'next'
import Hero               from '@/components/sections/Hero'
import Ticker             from '@/components/ui/Ticker'
import FeaturedCollection from '@/components/sections/FeaturedCollection'
import BrandStory         from '@/components/sections/BrandStory'
import Categories         from '@/components/sections/Categories'
import BespokeTeaser      from '@/components/sections/BespokeTeaser'
import CtaStrip           from '@/components/sections/CtaStrip'

export const metadata: Metadata = {
  title: 'Temmari — Limitless Classic Styling',
  description:
    'Shop the So Fly debut collection. Sophisticated, inclusive fashion for every body and every budget. Bespoke tailoring available.',
}

export default function HomePage() {
  return (
    <>
      {/* 1. Hero — split editorial layout */}
      <Hero />

      {/* 2. Animated ticker strip */}
      <Ticker />

      {/* 3. So Fly product grid */}
      <FeaturedCollection />

      {/* 4. Brand story — dark panel */}
      <BrandStory />

      {/* 5. Category browse */}
      <Categories />

      {/* 6. Bespoke teaser — warm background */}
      <div className="bespoke-wrapper">
        <BespokeTeaser />
      </div>

      {/* 7. CTA strip */}
      <CtaStrip />
    </>
  )
}
