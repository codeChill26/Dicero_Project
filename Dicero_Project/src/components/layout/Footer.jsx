import { DiceIcon } from '../common/Icons'

function FooterColumn({ title, items }) {
  return (
    <article>
      <h4>{title}</h4>
      <ul>
        {items.map((item) => (
          <li key={item}>
            <a href="#">{item}</a>
          </li>
        ))}
      </ul>
    </article>
  )
}

function Footer({ columns }) {
  return (
    <footer className="main-footer">
      <section className="footer-newsletter">
        <div className="shell footer-newsletter-inner">
          <div>
            <h3>Stay in the Game</h3>
            <p>Get notified about new listings, deals, and community events.</p>
          </div>
          <form onSubmit={(event) => event.preventDefault()}>
            <label htmlFor="newsletter" className="visually-hidden">
              Enter your email
            </label>
            <input id="newsletter" type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </section>

      <section className="shell footer-grid-wrap">
        <article className="footer-brand">
          <a className="brand" href="#top">
            <span className="brand-logo">
              <DiceIcon />
            </span>
            <span className="brand-copy">
              <strong>Dicero</strong>
              <small>Marketplace</small>
            </span>
          </a>
          <p>
            Vietnam&apos;s leading board game marketplace. Buy, sell, and rent board
            games. Connect with fellow gamers and build your collection.
          </p>
          <div className="social-links">
            <a href="#" aria-label="Facebook">
              Fb
            </a>
            <a href="#" aria-label="Instagram">
              Ig
            </a>
            <a href="#" aria-label="YouTube">
              Yt
            </a>
          </div>
        </article>

        {columns.map((column) => (
          <FooterColumn key={column.title} title={column.title} items={column.items} />
        ))}

        <article>
          <h4>Contact</h4>
          <ul>
            <li>District 1, Ho Chi Minh City, Vietnam</li>
            <li>+84 28 1234 5678</li>
            <li>hello@dicero.vn</li>
          </ul>
        </article>
      </section>

      <section className="shell footer-bottom">
        <p>© 2026 Dicero. All rights reserved.</p>
        <p>Made with care for the gaming community</p>
      </section>
    </footer>
  )
}

export default Footer
