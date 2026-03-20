import MarketplaceHeroBar from '../components/marketplace/MarketplaceHeroBar'
import MarketplaceFilters from '../components/marketplace/MarketplaceFilters'
import MarketplaceToolbar from '../components/marketplace/MarketplaceToolbar'
import MarketplaceGrid from '../components/marketplace/MarketplaceGrid'
import {
  marketplaceQuickFilters,
  marketplaceFilters,
  marketplaceListings,
} from '../data/siteData'

function MarketplacePage() {
  return (
    <main>
      <MarketplaceHeroBar chips={marketplaceQuickFilters} />

      <section className="section shell-gap">
        <div className="shell market-layout">
          <MarketplaceFilters filters={marketplaceFilters} />

          <div className="market-content">
            <MarketplaceToolbar />
            <MarketplaceGrid listings={marketplaceListings} />
          </div>
        </div>
      </section>
    </main>
  )
}

export default MarketplacePage
