
import { motion } from 'framer-motion';
import ctaBottlesImg from '../assets/cta_bottles.png';

const CTA = () => {
  return (
    <section className="cta-section" id="quality">
      <div className="container">
        <motion.div 
          className="cta" 
          style={{ backgroundImage: `url(${ctaBottlesImg})` }}
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="cta__bg-overlay"></div>
          <div className="cta__grid">
            {/* Left placeholder to make space for the background bottles */}
            <div className="cta__placeholder"></div>

            {/* Center: Title & Description */}
            <div className="cta__content">
              <h2 className="cta__title">Let's Grow Together</h2>
              <p className="cta__description">
                Partner with MedGlobe (Pvt) Ltd for reliable export and logistics solutions from Sri Lanka to the world.
              </p>
            </div>

            {/* Vertical Divider line */}
            <div className="cta__vertical-divider"></div>

            {/* Right Side: Quick Contact & Button */}
            <div className="cta__contact-actions">
              <div className="cta__contact-info">
                <a href="tel:+94771234567" className="cta__contact-item">
                  <div className="cta__contact-icon cta__contact-icon--phone">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" stroke="#ffffff" strokeWidth="2" fill="none" />
                      <path d="M15.05 13.1c-.24.24-.65.2-.95-.08-.47-.45-1.12-1.1-1.57-1.57-.28-.3-.32-.71-.08-.95l.48-.48c.2-.2.24-.52.08-.76-.32-.48-.68-1.04-.92-1.44-.16-.27-.48-.35-.77-.2l-.65.33c-.55.28-.86.87-.72 1.48.24 1 .8 2.2 1.8 3.2s2.2 1.56 3.2 1.8c.6.14 1.2-.17 1.48-.72l.33-.65c.15-.3.07-.6-.2-.77-.4-.24-.96-.6-1.44-.92-.24-.16-.56-.12-.76.08l-.48.48z" fill="#28a745" stroke="none" />
                    </svg>
                  </div>
                  <span className="cta__contact-text">+94 77 123 4567</span>
                </a>
                <a href="mailto:info@medglobe.lk" className="cta__contact-item">
                  <div className="cta__contact-icon cta__contact-icon--email">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </div>
                  <span className="cta__contact-text">info@medglobe.lk</span>
                </a>
              </div>
              <button className="btn btn--primary cta__btn">
                <span>Get a Quote</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="22" y1="2" x2="11" y2="13" />
                  <polygon points="22 2 15 22 11 13 2 9 22 2" />
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
