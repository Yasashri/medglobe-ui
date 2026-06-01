import React from 'react';

const Logo = ({ light = false }) => {
  const textColor = light ? '#ffffff' : '#051b34';
  const subtitleColor = light ? '#a2e0af' : '#28a745';
  
  return (
    <div className={`logo ${light ? 'logo--light' : ''}`} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Globe Background */}
        <circle cx="50" cy="50" r="32" fill="#e0f2fe" />
        
        {/* Globe Grid Lines */}
        <ellipse cx="50" cy="50" rx="32" ry="12" stroke="#0077b6" strokeWidth="2.5" strokeDasharray="3 3" opacity="0.6" />
        <ellipse cx="50" cy="50" rx="12" ry="32" stroke="#0077b6" strokeWidth="2.5" strokeDasharray="3 3" opacity="0.6" />
        
        {/* Abstract Green Continents/Leaves Wrapping Globe */}
        <path d="M35 25C40 22 48 20 55 24C62 28 68 35 65 42C62 49 52 50 48 55C44 60 40 68 35 70C30 72 25 65 24 58C23 51 28 42 30 35C32 28 30 28 35 25Z" fill="#28a745" fillOpacity="0.85" />
        <path d="M55 45C60 40 65 38 72 40C79 42 82 48 80 54C78 60 72 65 68 70C64 75 58 78 52 75C46 72 48 65 50 60C52 55 50 50 55 45Z" fill="#239c3e" fillOpacity="0.9" />
        
        {/* Golden wellness center point */}
        <circle cx="50" cy="50" r="4" fill="#fbbf24" />
      </svg>
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: '1.15' }}>
        <span style={{ 
          fontSize: '1.4rem', 
          fontWeight: '800', 
          color: textColor,
          fontFamily: "'Outfit', sans-serif",
          letterSpacing: '0.5px'
        }}>
          MEDGLOBE
        </span>
        <span style={{ 
          fontSize: '0.65rem', 
          fontWeight: '700', 
          color: textColor,
          fontFamily: "'Outfit', sans-serif",
          letterSpacing: '1px',
          opacity: 0.8
        }}>
          (PVT) LTD
        </span>
        <span style={{ 
          fontSize: '0.6rem', 
          fontWeight: '600', 
          color: subtitleColor,
          marginTop: '2px',
          fontFamily: "'Outfit', sans-serif"
        }}>
          Bridging Quality, Delivering Wellness
        </span>
      </div>
    </div>
  );
};

export default Logo;
