import { useState } from 'react';
import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';
import Logo from './Logo';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="site-header">
      <div className="site-header__container">
        {/* Left Side: Brand Logo */}
        <div className="site-header__logo-area">
          <Logo />
        </div>

        {/* Right Side: Contact info top + Capsule Navbar bottom */}
        <div className="site-header__main-area">
          
          {/* Top Contact Details & Socials */}
          <div className="top-info">
            <div className="top-info__contact">
              <a href="mailto:info@medglobe.lk" className="top-info__link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span>info@medglobe.lk</span>
              </a>
              <a href="tel:+94771234567" className="top-info__link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>+94 77 123 4567</span>
              </a>
              <span className="top-info__link">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>Colombo, Sri Lanka</span>
              </span>
            </div>
            <div className="top-info__socials">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="top-info__social-badge">
                <FaLinkedin size={12} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="top-info__social-badge">
                <FaFacebook size={12} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="top-info__social-badge">
                <FaInstagram size={12} />
              </a>
            </div>
          </div>

          {/* Floating Capsule Navigation Bar */}
          <nav className="nav-capsule">
            {/* Desktop Menu links */}
            <ul className={`nav-capsule__menu ${mobileMenuOpen ? 'nav-capsule__menu--open' : ''}`}>
              <li><a href="#home" className="nav-capsule__link nav-capsule__link--active" onClick={() => setMobileMenuOpen(false)}>Home</a></li>
              <li><a href="#about" className="nav-capsule__link" onClick={() => setMobileMenuOpen(false)}>About Us</a></li>
              <li><a href="#products" className="nav-capsule__link" onClick={() => setMobileMenuOpen(false)}>Our Products</a></li>
              <li><a href="#services" className="nav-capsule__link" onClick={() => setMobileMenuOpen(false)}>Export Services</a></li>
              <li><a href="#quality" className="nav-capsule__link" onClick={() => setMobileMenuOpen(false)}>Quality & Compliance</a></li>
              <li><a href="#contact" className="nav-capsule__link" onClick={() => setMobileMenuOpen(false)}>Contact Us</a></li>
              <li className="nav-capsule__mobile-btn-container">
                <button className="btn btn--primary nav-capsule__mobile-btn">
                  <span>Get a Quote</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                </button>
              </li>
            </ul>

            <div className="nav-capsule__actions">
              <button className="btn btn--primary nav-capsule__btn">
                <span>Get a Quote</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>

              {/* Mobile menu toggle inside capsule */}
              <button className="nav-capsule__toggle" onClick={toggleMobileMenu} aria-label="Toggle Menu">
                {mobileMenuOpen ? (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                ) : (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                  </svg>
                )}
              </button>
            </div>
          </nav>

        </div>
      </div>
    </header>
  );
};

export default Header;
