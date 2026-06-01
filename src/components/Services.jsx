import React from 'react';

const Services = () => {
  const servicesList = [
    {
      id: 1,
      title: 'Product Sourcing',
      desc: 'Quality suppliers & manufacturers',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#051b34" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Export & Logistics',
      desc: 'Air & sea freight solutions',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#051b34" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 17h20" />
          <path d="M6 17v-4a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v4" />
          <path d="M12 10V2" />
          <path d="M9 5l3-3 3 3" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Documentation & Compliance',
      desc: 'Complete export documentation',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#051b34" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'Customs Clearance',
      desc: 'Smooth export processing',
      highlight: true,
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#051b34" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0 1 10 0v4" />
        </svg>
      )
    },
    {
      id: 5,
      title: 'Packaging & Labeling',
      desc: 'Export standard packaging',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#051b34" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="22 12 16 12 14 15 10 15 8 12 2 12" />
          <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
        </svg>
      )
    },
    {
      id: 6,
      title: 'Global Delivery',
      desc: 'Safe delivery to your destination',
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#051b34" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      )
    }
  ];

  return (
    <section className="services section-padding" id="services">
      <div className="container">
        <div className="services__header">
          <h2 className="services__title">Our Core Services</h2>
          <p className="services__subtitle">End-to-end export and logistics solutions tailored for your business.</p>
        </div>
        <div className="services__grid">
          {servicesList.map((service) => (
            <div className="services__card" key={service.id}>
              <div className="services__card-icon">
                {service.icon}
              </div>
              <h3 className="services__card-title">{service.title}</h3>
              <p className={`services__card-desc ${service.highlight ? 'services__card-desc--highlight' : ''}`}>
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
