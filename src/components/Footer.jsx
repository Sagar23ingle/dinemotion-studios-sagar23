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
    <footer className="bg-[#050505] border-t border-white/[0.08] pt-20 pb-12 text-white/50">
      <div className="container">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-white/[0.08]">
          {/* Brand Info */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="font-display font-medium text-2xl tracking-[0.16em] text-white">
                DINEMOTION
              </span>
              <span className="text-[10px] uppercase font-mono tracking-widest text-white/60 px-1.5 py-0.5 rounded border border-white/10">
                STUDIOS
              </span>
            </div>
            <p className="text-sm text-white/60 max-w-sm font-light leading-relaxed">
              Creative technology and visual media studio combining design, engineering, and cinematic storytelling for modern brands.
            </p>
            <div className="pt-2 text-xs font-mono text-[#6e6e73]">
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
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#6e6e73]">
          <div>
            © {new Date().getFullYear()} DINEMOTION STUDIOS. ALL RIGHTS RESERVED.
          </div>

          <div className="flex items-center gap-6">
            <span>LUXURY CREATIVE TECHNOLOGY</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 text-white hover:text-[#00D6FF] transition-colors"
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
