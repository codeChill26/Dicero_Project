import { useMemo, useState } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import FloatingChatButton from './components/layout/FloatingChatButton'
import HomePage from './pages/HomePage'
import MarketplacePage from './pages/MarketplacePage'
import { navLinks, footerColumns } from './data/siteData'
import './App.css'

function App() {
  const [activePage, setActivePage] = useState('home')

  const CurrentPage = useMemo(
    () => (activePage === 'marketplace' ? MarketplacePage : HomePage),
    [activePage],
  )

  return (
    <div id="top" className="page">
      <Navbar links={navLinks} activePage={activePage} onNavigate={setActivePage} />
      <CurrentPage />

      <Footer columns={footerColumns} />
      <FloatingChatButton />
    </div>
  )
}

export default App
