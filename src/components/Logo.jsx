import logoImg from '../assets/logo.png';

const Logo = ({ light = false, className = '' }) => {
  return (
    <div className={`logo ${light ? 'logo--light' : ''} ${className}`}>
      <img src={logoImg} alt="MedGlobe Logo" />
    </div>
  );
};

export default Logo;
