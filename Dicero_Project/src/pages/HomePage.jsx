import HeroSection from '../components/hero/HeroSection'
import HeroStats from '../components/hero/HeroStats'
import CategoriesSection from '../components/sections/CategoriesSection'
import GameGridSection from '../components/sections/GameGridSection'
import HowItWorksSection from '../components/sections/HowItWorksSection'
import TestimonialsSection from '../components/sections/TestimonialsSection'
import TrustFeaturesSection from '../components/sections/TrustFeaturesSection'
import CtaSection from '../components/sections/CtaSection'
import {
  heroQuickLinks,
  stats,
  categories,
  popularGames,
  rentGames,
  newListings,
  howItWorks,
  testimonials,
  trustFeatures,
} from '../data/siteData'

function HomePage() {
  return (
    <>
      <HeroSection quickLinks={heroQuickLinks} />
      <HeroStats stats={stats} />

      <main>
        <CategoriesSection categories={categories} />

        <GameGridSection
          title="Popular Games"
          subtitle="Most wanted by the community"
          actionLabel="View All"
          games={popularGames}
        />

        <GameGridSection
          title="Available for Rent"
          subtitle="Try before you buy"
          actionLabel="View Rentals"
          games={rentGames}
        />

        <GameGridSection
          title="New Listings"
          subtitle="Just added to the marketplace"
          games={newListings}
        />

        <HowItWorksSection steps={howItWorks} />
        <TestimonialsSection testimonials={testimonials} />
        <TrustFeaturesSection features={trustFeatures} />
        <CtaSection />
      </main>
    </>
  )
}

export default HomePage
