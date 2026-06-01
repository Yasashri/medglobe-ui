import React from 'react';
import aboutImg from '../assets/about.png';
import worldMapImg from '../assets/world_map.png';

const About = () => {
  const checkIcon = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
      <circle cx="12" cy="12" r="10" fill="#28a745" stroke="#28a745" />
      <polyline points="7.5 12 10.5 15 16.5 9" />
    </svg>
  );

  const features = [
    'New & Dedicated Export Partner',
    'Strong focus on Quality & Compliance',
    'Professional Logistics Network',
    'Transparent & Reliable Operations',
    'Customer-Centric Approach',
    'Commitment to Long-term Partnerships'
  ];

  return (
    <section className="about section-padding" id="about">
      <div className="container about__container">
        {/* Left Side: About Info & Image */}
        <div className="about__left">
          <div className="about__content">
            <h2 className="about__title">About MedGlobe (Pvt) Ltd</h2>
            <div className="about__underline"></div>
            <p className="about__desc">
              MedGlobe (Pvt) Ltd is a Sri Lankan export and logistics company dedicated to connecting high-quality medical oils and wellness products, especially to the USA.
            </p>
            <p className="about__desc">
              We ensure quality, compliance, and reliability in every shipment, serving as your premier gateway to global wellness markets.
            </p>
            <a href="#contact" className="btn btn--primary about__btn">
              <span>Learn More About Us</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
          <div className="about__graphic">
            <div className="about__image-frame">
              <img src={aboutImg} alt="Sri Lankan Port Logistics" className="about__image" />
            </div>
          </div>
        </div>

        {/* Right Side: Why Choose Us Dark Box */}
        <div className="about__right">
          <div className="why-choose-us" style={{ backgroundImage: `url(${worldMapImg})` }}>
            <div className="why-choose-us__overlay"></div>
            <div className="why-choose-us__content">
              <h2 className="why-choose-us__title">Why Choose Us?</h2>
              <div className="why-choose-us__divider"></div>
              <ul className="why-choose-us__list">
                {features.map((feature, idx) => (
                  <li className="why-choose-us__item" key={idx}>
                    <div className="why-choose-us__icon-wrapper">
                      {checkIcon}
                    </div>
                    <span className="why-choose-us__text">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
