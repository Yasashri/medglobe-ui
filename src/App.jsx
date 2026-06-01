import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Services from './components/Services';
import About from './components/About';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <main>
        <Hero />
        <Highlights />
        <Services />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
