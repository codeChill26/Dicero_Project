import React, { useState } from 'react'
import MarketplaceHeroBar from '../components/marketplace/MarketplaceHeroBar'
import MarketplaceFilters from '../components/marketplace/MarketplaceFilters'
import MarketplaceToolbar from '../components/marketplace/MarketplaceToolbar'
import MarketplaceGrid from '../components/marketplace/MarketplaceGrid'
import AddBoardgameModal from '../components/marketplace/AddBoardgameModal'
import {
  marketplaceQuickFilters,
  marketplaceFilters,
  marketplaceListings,
} from '../data/siteData'

function MarketplacePage({ user }) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <main>
      <MarketplaceHeroBar chips={marketplaceQuickFilters} onPostClick={() => setIsModalOpen(true)} />

      <section className="section shell-gap">
        <div className="shell market-layout">
          <MarketplaceFilters filters={marketplaceFilters} />

          <div className="market-content">
            <MarketplaceToolbar />
            <MarketplaceGrid listings={marketplaceListings} />
          </div>
        </div>
      </section>

      <AddBoardgameModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        user={user} 
        onAdded={() => {
          alert('Boardgame added successfully!')
          // Sau này có thể reload lại listings ở đây
        }} 
      />
    </main>
  )
}

export default MarketplacePage
