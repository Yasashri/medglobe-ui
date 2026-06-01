import { motion } from 'framer-motion';
import heroImg from '../assets/hero.png';

const Hero = () => {
  return (
    <section className="hero" id="home">
      {/* Absolute background image relative to container alignment */}
      <motion.div 
        className="hero__background"
        initial={{ opacity: 0, scale: 1.05 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
      >
        <img src={heroImg} alt="" className="hero__bg-img" />
        <div className="hero__fade-overlay"></div>
      </motion.div>

      <div className="container hero__container">
        <div className="hero__content">
          <motion.h1 
            className="hero__title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Connecting Sri Lankan Wellness to <span className="hero__title--highlight">the World</span>
          </motion.h1>
          <motion.p 
            className="hero__description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            MedGlobe (Pvt) Ltd is your trusted partner for exporting premium medical oils and wellness products from Sri Lanka to the world.
          </motion.p>
          <motion.div 
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
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
          </motion.div>
        </div>
        
        {/* Placeholder column to balance the grid layout */}
        <div className="hero__placeholder"></div>
      </div>
    </section>
  );
};

export default Hero;
