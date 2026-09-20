import React from 'react';
import Navigation from './components/Navigation';
import HeroCanvas from './components/HeroCanvas';
import StatementSection from './components/StatementSection';
import ServicesSection from './components/ServicesSection';
import SelectedWork from './components/SelectedWork';
import CapabilitiesSection from './components/CapabilitiesSection';
import ProcessSection from './components/ProcessSection';
import AboutSection from './components/AboutSection';
import WhyUsSection from './components/WhyUsSection';
import FinalCTASection from './components/FinalCTASection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

export default function App() {
  return (
    <div className="site-wrapper bg-[#050505] text-[#f5f5f7]">
      {/* Desktop subtle custom cursor */}
      <CustomCursor />

      {/* Sticky navigation header */}
      <Navigation />

      {/* Main Studio Journey */}
      <main>
        {/* 1. Cinematic Scroll Hero (240 pinned frames playing in background on scroll) */}
        <HeroCanvas />

        {/* 2. Big Brand Statement */}
        <StatementSection />

        {/* 3. Services (3 Large Immersive Experiences) */}
        <ServicesSection />

        {/* 4. Selected Work (2 Websites + 1 Web App with horizontal scroll on desktop) */}
        <SelectedWork />

        {/* 5. Capabilities / Services Detail (Typography-driven) */}
        <CapabilitiesSection />

        {/* 6. Process (5 stages with scroll-linked timeline) */}
        <ProcessSection />

        {/* 7. About Studio */}
        <AboutSection />

        {/* 8. Why Dinemotion (4 Principles) */}
        <WhyUsSection />

        {/* 9. Final CTA */}
        <FinalCTASection />

        {/* 10. Contact Inquiry */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
