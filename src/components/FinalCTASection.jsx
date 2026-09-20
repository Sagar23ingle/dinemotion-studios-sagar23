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
    <section className="relative min-h-[65vh] flex items-center justify-center bg-[#050505] border-t border-white/[0.08] overflow-hidden py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-[radial-gradient(circle,rgba(0,80,255,0.18)_0%,rgba(0,214,255,0.06)_50%,rgba(5,5,5,0)_70%)] blur-[100px] rounded-full animate-pulse" />
      </div>

      <div className="container relative z-10 text-center max-w-3xl mx-auto flex flex-col items-center">
        <span className="section-label mb-5">
          INITIATE COLLABORATION
        </span>

        <h2 className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl tracking-[-0.035em] text-white leading-tight mb-2 text-glow">
          HAVE AN IDEA?
        </h2>

        <h3 className="font-display font-semibold text-3xl sm:text-5xl md:text-6xl tracking-[-0.03em] text-gradient-cyan leading-tight mb-8">
          LET'S MAKE IT MOVE.
        </h3>

        <a
          href="#contact"
          onClick={scrollToContact}
          className="btn-gradient text-sm px-7 py-3.5"
        >
          <span>Start a Project</span>
          <ArrowRight className="w-4 h-4 btn-arrow text-[#00D6FF]" />
        </a>

        <p className="mt-6 text-[11px] font-mono tracking-wider text-white/50 uppercase">
          ESTIMATED PROJECT KICKOFF IN 5–7 BUSINESS DAYS
        </p>
      </div>
    </section>
  );
}
