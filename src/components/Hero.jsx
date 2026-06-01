import React from 'react';
import heroImg from '../assets/hero.png';

const Hero = () => {
  return (
    <section className="hero" id="home">
      {/* Absolute background image relative to container alignment */}
      <div className="hero__background">
        <img src={heroImg} alt="" className="hero__bg-img" />
        <div className="hero__fade-overlay"></div>
      </div>

      <div className="container hero__container">
        <div className="hero__content">
          <h1 className="hero__title">
            Connecting Sri Lankan Wellness to <span className="hero__title--highlight">the World</span>
          </h1>
          <p className="hero__description">
            MedGlobe (Pvt) Ltd is your trusted partner for exporting premium medical oils and wellness products from Sri Lanka to the world.
          </p>
          <div className="hero__actions">
            <a href="#services" className="btn btn--secondary">
              <span>Our Services</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
            <a href="#contact" className="btn btn--outline">
              <span>Contact Us</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>
          </div>
        </div>
        
        {/* Placeholder column to balance the grid layout */}
        <div className="hero__placeholder"></div>
      </div>
    </section>
  );
};

export default Hero;
