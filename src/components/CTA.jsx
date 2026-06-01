import React from 'react';
import ctaBottlesImg from '../assets/cta_bottles.png';

const CTA = () => {
  return (
    <section className="cta" id="quality">
      <div className="cta__bg-overlay"></div>
      <div className="container cta__container">
        {/* Left Side: Product Image overlapping edge */}
        <div className="cta__graphic">
          <img src={ctaBottlesImg} alt="MedGlobe Amber Dropper Bottles" className="cta__image" />
        </div>

        {/* Center: Title & Description */}
        <div className="cta__content">
          <h2 className="cta__title">Let's Grow Together</h2>
          <p className="cta__description">
            Partner with MedGlobe (Pvt) Ltd for reliable export and logistics solutions from Sri Lanka to the world.
          </p>
        </div>

        {/* Right Side: Quick Contact & Button */}
        <div className="cta__contact-actions">
          <div className="cta__contact-info">
            <a href="tel:+94771234567" className="cta__contact-item">
              <div className="cta__contact-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <span>+94 77 123 4567</span>
            </a>
            <a href="mailto:info@medglobe.lk" className="cta__contact-item">
              <div className="cta__contact-icon">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <span>info@medglobe.lk</span>
            </a>
          </div>
          <button className="btn btn--primary cta__btn pulse-btn">
            <span>Get a Quote</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="22" y1="2" x2="11" y2="13" />
              <polygon points="22 2 15 22 11 13 2 9 22 2" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
