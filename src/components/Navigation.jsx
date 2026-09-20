import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent background scrolling when mobile menu is active
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'py-3 bg-[rgba(5,5,5,0.78)] backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.5)]'
            : 'py-5 bg-transparent border-b border-transparent'
        }`}
        style={{
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
        }}
      >
        <div className="container flex items-center justify-between">
          {/* Left: Logo "DINEMOTION STUDIOS" in clean, premium font */}
          <a
            href="#"
            className="flex items-center gap-2 group focus:outline-none"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <span className="font-display font-semibold text-[15px] sm:text-[17px] tracking-[0.18em] text-white group-hover:text-[#00D6FF] transition-colors duration-300 drop-shadow-md">
              DINEMOTION STUDIOS
            </span>
          </a>

          {/* Center: Minimalist navigation links: Work, Services, Process, About, Contact */}
          <nav className="nav-links-desktop" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="hover:text-white transition-colors duration-300 relative py-1 focus:outline-none focus-visible:text-white"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#00D6FF] transition-all duration-300 hover:w-full opacity-0 hover:opacity-100" />
              </a>
            ))}
          </nav>

          {/* Right: Primary CTA button "Start a Project" with subtle gradient border & hover glow */}
          <div className="hidden md:block">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="group relative inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium tracking-wide text-white/90 bg-white/[0.03] transition-all duration-300 hover:text-white"
              style={{
                border: '1px solid transparent',
                backgroundImage: 'linear-gradient(rgba(5, 5, 5, 0.9), rgba(5, 5, 5, 0.9)), linear-gradient(135deg, #0050FF 0%, #00D6FF 100%)',
                backgroundOrigin: 'border-box',
                backgroundClip: 'padding-box, border-box',
                boxShadow: '0 0 15px rgba(0, 80, 255, 0.15)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 0 25px rgba(0, 214, 255, 0.35)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 0 15px rgba(0, 80, 255, 0.15)';
              }}
            >
              <span>Start a Project</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300 text-[#00D6FF]" />
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            className="md:hidden text-white/90 p-2 rounded-lg bg-white/5 border border-white/10 focus:outline-none"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Fullscreen Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-40 bg-[#050505]/98 backdrop-blur-3xl md:hidden flex flex-col justify-between p-8 pt-28 transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-6">
          <span className="text-[11px] uppercase font-mono tracking-widest text-[#6e6e73]">
            STUDIO MENU
          </span>
          {navLinks.map((link, idx) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              style={{
                transitionDelay: `${idx * 40}ms`
              }}
              className="font-display text-2xl font-semibold tracking-tight text-[#f5f5f7] hover:text-[#00D6FF] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col gap-4">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="btn-gradient w-full justify-between py-3.5"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <p className="text-xs text-[#6e6e73] text-center font-mono">
            © {new Date().getFullYear()} DINEMOTION STUDIOS
          </p>
        </div>
      </div>
    </>
  );
}
