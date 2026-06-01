import React from 'react';

const Highlights = () => {
  const highlightsList = [
    {
      id: 1,
      title: 'Trusted Partner',
      desc: 'Reliable export & logistics solutions',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <polyline points="9 11 11 13 15 9" />
        </svg>
      )
    },
    {
      id: 2,
      title: 'Global Reach',
      desc: 'Delivering products to global markets',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      )
    },
    {
      id: 3,
      title: 'Quality Assured',
      desc: 'International standards & compliance',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="8" r="7" />
          <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
        </svg>
      )
    },
    {
      id: 4,
      title: 'On-Time Delivery',
      desc: 'Safe, secure & timely shipments',
      icon: (
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#28a745" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="1" y="3" width="15" height="13" />
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8" />
          <circle cx="5.5" cy="18.5" r="2.5" />
          <circle cx="18.5" cy="18.5" r="2.5" />
        </svg>
      )
    }
  ];

  return (
    <section className="highlights">
      <div className="container">
        <div className="highlights__wrapper">
          {highlightsList.map((item) => (
            <div className="highlights__card" key={item.id}>
              <div className="highlights__icon-box">
                {item.icon}
              </div>
              <div className="highlights__text-box">
                <h3 className="highlights__card-title">{item.title}</h3>
                <p className="highlights__card-desc">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
