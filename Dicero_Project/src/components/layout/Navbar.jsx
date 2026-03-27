import { useState } from 'react'
import { BellIcon, DiceIcon, MessageIcon } from '../common/Icons'

function Navbar({ links, activePage, onNavigate, user, onLogout }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Lấy chữ cái đầu của email để làm avatar
  const userInitial = user?.email ? user.email.charAt(0).toUpperCase() : 'U';

  return (
    <header className="main-nav">
      <div className="shell nav-inner">
        <button className="brand plain-btn" type="button" onClick={() => onNavigate('home')}>
          <span className="brand-logo">
            <DiceIcon />
          </span>
          <span className="brand-copy">
            <strong>Dicero</strong>
            <small>Marketplace</small>
          </span>
        </button>

        <nav className="nav-links" aria-label="Main navigation">
          {links.map((link) => (
            <button
              key={link}
              type="button"
              className={
                (activePage === 'home' && link === 'Home') ||
                (activePage === 'marketplace' && link === 'Marketplace')
                  ? 'active'
                  : ''
              }
              onClick={() => {
                if (link === 'Home') onNavigate('home')
                if (link === 'Marketplace') onNavigate('marketplace')
              }}
            >
              {link}
            </button>
          ))}
        </nav>

        <div className="nav-actions">
          {user ? (
            <div style={{ position: 'relative' }}>
              <button 
                type="button"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                style={{ 
                  width: '40px', height: '40px', borderRadius: '50%', 
                  background: '#3b82f6', color: '#fff', border: 'none', 
                  fontWeight: 'bold', fontSize: '18px', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}
              >
                {userInitial}
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div style={{ 
                  position: 'absolute', top: '50px', right: '0', 
                  background: '#fff', border: '1px solid #ddd', borderRadius: '8px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)', minWidth: '150px', zIndex: 100 
                }}>
                  <button 
                    style={{ display: 'block', width: '100%', padding: '10px 16px', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', borderBottom: '1px solid #eee' }}
                    onClick={() => { setIsDropdownOpen(false); onNavigate('profile'); }}
                  >
                    Profile
                  </button>
                  <button 
                    style={{ display: 'block', width: '100%', padding: '10px 16px', textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer', color: 'red' }}
                    onClick={() => { setIsDropdownOpen(false); onLogout(); }}
                  >
                    Log out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <button 
                className="login-btn plain-btn" 
                type="button" 
                style={{ marginRight: '16px', fontWeight: '600' }}
                onClick={() => onNavigate('login')}
              >
                Login
              </button>
              <button 
                className="post-btn" 
                type="button"
                onClick={() => onNavigate('register')}
              >
                Register
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
