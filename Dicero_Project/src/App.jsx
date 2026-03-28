import { useMemo, useState } from 'react'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import FloatingChatButton from './components/layout/FloatingChatButton'
import HomePage from './pages/HomePage'
import MarketplacePage from './pages/MarketplacePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProfilePage from './pages/ProfilePage'
import { navLinks, footerColumns } from './data/siteData'
import './App.css'

function App() {
  const [activePage, setActivePage] = useState('home')
  const [user, setUser] = useState(null) // Quản lý người dùng đang đăng nhập

  const handleLogout = () => {
    setUser(null);
    setActivePage('home');
  }

  const renderPage = () => {
    switch (activePage) {
      case 'marketplace':
        return <MarketplacePage user={user} />
      case 'login':
        return <LoginPage onNavigate={setActivePage} onLogin={setUser} />
      case 'register':
        return <RegisterPage onNavigate={setActivePage} />
      case 'profile':
        return <ProfilePage user={user} />
      case 'home':
      default:
        return <HomePage />
    }
  }

  return (
    <div id="top" className="page">
      <Navbar links={navLinks} activePage={activePage} onNavigate={setActivePage} user={user} onLogout={handleLogout} />
      {renderPage()}

      <Footer columns={footerColumns} />
      <FloatingChatButton />
    </div>
  )
}

export default App
