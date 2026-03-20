import { BellIcon, DiceIcon, MessageIcon } from '../common/Icons'

function Navbar({ links, activePage, onNavigate }) {
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
          <button className="icon-btn" type="button" aria-label="Notifications">
            <BellIcon />
            <span>3</span>
          </button>
          <button className="icon-btn" type="button" aria-label="Messages">
            <MessageIcon />
            <span>2</span>
          </button>
          <button className="post-btn" type="button">
            Post Game
          </button>
          <button className="profile" type="button" aria-label="Profile">
            PK
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
