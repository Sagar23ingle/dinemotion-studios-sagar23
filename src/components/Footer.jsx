import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  const services = [
    'Website Design & Development',
    'Web & App Development',
    'Commercial & Promotional Videos'
  ];

  const socials = [
    { label: 'TWITTER / X', href: '#' },
    { label: 'INSTAGRAM', href: '#' },
    { label: 'LINKEDIN', href: '#' },
    { label: 'VIMEO', href: '#' },
    { label: 'GITHUB', href: '#' },
  ];

  return (
    <footer className="bg-black/75 backdrop-blur-xl border-t border-white/[0.08] pt-20 pb-12 text-white/50 relative z-10">
      <div className="container">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/[0.08]">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-display font-semibold text-lg sm:text-xl md:text-2xl tracking-[0.10em] sm:tracking-[0.16em] text-white break-words">
                DINEMOTION STUDIOS
              </span>
            </div>
            <p className="text-sm text-white/60 max-w-sm font-light leading-relaxed">
              Creative technology and visual media studio combining design, engineering, and cinematic storytelling for modern brands.
            </p>
            <div className="pt-2 text-xs font-mono text-[#6e6e73] break-words">
              "We design, build and produce digital experiences that help brands move forward."
            </div>
          </div>

          {/* Navigation Column */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-white block mb-4">
              NAVIGATION
            </span>
            <ul className="space-y-2.5 text-xs font-mono">
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-white transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-3 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-white block mb-4">
              STUDIO PILLARS
            </span>
            <ul className="space-y-2.5 text-xs font-mono">
              {services.map((svc) => (
                <li key={svc}>
                  <span className="text-white/60 hover:text-white transition-colors">
                    {svc}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials / Coordinates */}
          <div className="lg:col-span-2 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-white block mb-4">
              NETWORK
            </span>
            <ul className="space-y-2.5 text-xs font-mono">
              {socials.map((soc) => (
                <li key={soc.label}>
                  <a
                    href={soc.href}
                    className="hover:text-[#00D6FF] transition-colors duration-200"
                  >
                    [{soc.label}]
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#6e6e73] text-center sm:text-left">
          <div className="break-words">
            © {new Date().getFullYear()} DINEMOTION STUDIOS. ALL RIGHTS RESERVED.
          </div>

          <div className="flex flex-wrap items-center justify-center sm:justify-end gap-4 sm:gap-6">
            <span>LUXURY CREATIVE TECHNOLOGY</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-white hover:text-[#00D6FF] transition-colors cursor-pointer"
            >
              <span>BACK TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
