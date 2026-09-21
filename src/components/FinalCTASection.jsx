import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function FinalCTASection() {
  const scrollToContact = (e) => {
    e.preventDefault();
    const contact = document.querySelector('#contact');
    if (contact) {
      contact.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[65vh] flex items-center justify-center bg-transparent border-t border-white/[0.08] overflow-hidden py-16 sm:py-24 px-3 sm:px-4">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[550px] h-[250px] sm:h-[350px] bg-[radial-gradient(circle,rgba(0,80,255,0.22)_0%,rgba(0,214,255,0.08)_50%,transparent_70%)] blur-[80px] sm:blur-[100px] rounded-full animate-pulse" />
      </div>

      <div className="container relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center">
        <div className="w-full flex flex-col items-center p-4 sm:p-10 md:p-14 rounded-3xl glass-card border border-white/[0.08] shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
          <span className="section-label mb-4 sm:mb-5">
            INITIATE COLLABORATION
          </span>

          <h2 className="font-display font-semibold text-2xl sm:text-5xl md:text-6xl tracking-[-0.035em] text-white leading-tight mb-2 text-glow">
            HAVE AN IDEA?
          </h2>

          <h3 className="font-display font-semibold text-xl sm:text-5xl md:text-6xl tracking-[-0.03em] text-gradient-cyan leading-tight mb-6 sm:mb-8">
            LET'S MAKE IT MOVE.
          </h3>

          <a
            href="#contact"
            onClick={scrollToContact}
            className="btn-gradient text-sm px-7 py-3.5 w-full sm:w-auto justify-center touch-target"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4 btn-arrow text-[#00D6FF]" />
          </a>

          <p className="mt-5 sm:mt-6 text-[10px] sm:text-[11px] font-mono tracking-wider text-white/50 uppercase break-words max-w-full">
            ESTIMATED PROJECT KICKOFF IN 5–7 BUSINESS DAYS
          </p>
        </div>
      </div>
    </section>
  );
}
