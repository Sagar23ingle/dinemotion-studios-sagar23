import React, { useEffect, useRef, useState } from 'react';

export default function StatementSection() {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-10 py-16 sm:py-24 md:py-36 bg-transparent overflow-hidden px-3 sm:px-4"
    >
      <div className="container">
        {/* Editorial Eyebrow */}
        <div
          className="mb-4 sm:mb-6 transition-all duration-700 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(16px)'
          }}
        >
          <span className="section-label">
            STUDIO PHILOSOPHY
          </span>
        </div>

        {/* Minimal Apple Editorial Headline Card */}
        <div className="max-w-4xl p-4 sm:p-8 md:p-14 rounded-3xl bg-black/45 backdrop-blur-xl border border-white/[0.08] shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
          <h2
            className="font-display font-semibold text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] tracking-[-0.028em] text-[#f5f5f7] mb-6 sm:mb-10 transition-all duration-700 delay-100 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            <span className="block text-[#a1a1a6]">
              IDEAS DESERVE
            </span>
            <span className="block text-white">
              MORE THAN
            </span>
            <span className="block text-gradient-cyan">
              ORDINARY EXECUTION.
            </span>
          </h2>

          {/* Supporting Statement */}
          <div
            className="grid grid-cols-1 md:grid-cols-12 gap-3 sm:gap-6 pt-4 sm:pt-6 border-t border-white/[0.08] transition-all duration-700 delay-200 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(16px)'
            }}
          >
            <div className="md:col-span-4">
              <span className="text-[10px] sm:text-[11px] font-mono tracking-wider text-[#00D6FF] uppercase">
                THE APPROACH
              </span>
            </div>
            <div className="md:col-span-8">
              <p className="text-sm sm:text-lg font-light text-white/85 leading-relaxed">
                We combine design, technology and visual storytelling to create digital experiences and content built around <span className="text-white font-medium">real business goals</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
