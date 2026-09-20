import React from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function HeroSection() {
  const handleCtaClick = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-20 px-4 z-10">
      <div className="container flex flex-col items-center text-center">
        {/* Subtle glassmorphic card for 100% crisp legibility over the continuous video background */}
        <div className="max-w-4xl w-full flex flex-col items-center p-8 sm:p-12 md:p-14 rounded-3xl bg-black/40 backdrop-blur-md border border-white/[0.08] shadow-[0_25px_60px_rgba(0,0,0,0.7)]">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[11px] font-mono tracking-widest text-[#a1a1a6] bg-black/60 border border-white/10 backdrop-blur-md mb-6 shadow-md">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D6FF] shadow-[0_0_8px_#00D6FF]" />
            <span>DINEMOTION STUDIOS • CREATIVE TECHNOLOGY & MEDIA</span>
          </div>

          {/* Large Display Headline */}
          <h1 className="font-display font-bold tracking-[-0.035em] leading-[1.03] text-white text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] mb-6 text-glow">
            <span className="block text-gradient-white">WE CREATE.</span>
            <span className="block text-white">WE BUILD.</span>
            <span className="block text-gradient-cyan">WE MOVE.</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-white font-medium tracking-tight max-w-2xl mb-4 drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
            Digital experiences, applications and visual stories.
          </p>

          {/* Supporting line */}
          <p className="text-xs sm:text-sm md:text-base text-white/80 font-light max-w-xl leading-relaxed mb-8 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            Dinemotion Studios combines design, technology and visual storytelling to create experiences for modern brands.
          </p>

          {/* Intro CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="#contact"
              onClick={(e) => handleCtaClick(e, '#contact')}
              className="btn-gradient px-7 py-3 text-sm"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 btn-arrow text-[#00D6FF]" />
            </a>

            <a
              href="#work"
              onClick={(e) => handleCtaClick(e, '#work')}
              className="btn-secondary px-7 py-3 text-sm"
            >
              <span>View Our Work</span>
              <ArrowRight className="w-4 h-4 btn-arrow" />
            </a>
          </div>

          {/* Scroll cue */}
          <div className="mt-12 flex items-center gap-2 text-[11px] font-mono tracking-widest text-white/60 uppercase">
            <span className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-bounce">
              <ChevronDown className="w-3.5 h-3.5 text-[#00D6FF]" />
            </span>
            <span>SCROLL TO EXPLORE STORY</span>
          </div>
        </div>
      </div>
    </section>
  );
}
