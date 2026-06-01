import React from 'react';
import logoImg from '../assets/logo.png';

const Logo = ({ light = false }) => {
  return (
    <div className={`logo ${light ? 'logo--light' : ''}`} style={{ display: 'inline-flex', alignItems: 'center' }}>
      <img 
        src={logoImg} 
        alt="MedGlobe Logo" 
        style={{ 
          height: light ? '86px' : '72px', 
          width: 'auto', 
          objectFit: 'contain',
          backgroundColor: light ? '#ffffff' : 'transparent',
          padding: light ? '6px 12px' : '0',
          borderRadius: light ? '8px' : '0',
          boxShadow: light ? '0 4px 10px rgba(0,0,0,0.06)' : 'none'
        }} 
      />
    </div>
  );
};

export default Logo;
