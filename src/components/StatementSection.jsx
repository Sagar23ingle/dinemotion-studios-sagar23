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
      className="relative z-10 py-24 md:py-36 bg-[#050505] overflow-hidden"
    >
      <div className="container">
        {/* Editorial Eyebrow */}
        <div
          className="mb-6 transition-all duration-700 ease-out"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(16px)'
          }}
        >
          <span className="section-label">
            STUDIO PHILOSOPHY
          </span>
        </div>

        {/* Minimal Apple Editorial Headline */}
        <div className="max-w-4xl">
          <h2
            className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.08] tracking-[-0.028em] text-[#f5f5f7] mb-10 transition-all duration-700 delay-100 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
            }}
          >
            <span className="block text-[#86868b]">
              IDEAS DESERVE
            </span>
            <span className="block text-white">
              MORE THAN
            </span>
            <span className="block text-[#f5f5f7]">
              ORDINARY EXECUTION.
            </span>
          </h2>

          {/* Supporting Statement */}
          <div
            className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6 border-t border-white/[0.08] transition-all duration-700 delay-200 ease-out"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(16px)'
            }}
          >
            <div className="md:col-span-4">
              <span className="text-[11px] font-mono tracking-wider text-[#6e6e73] uppercase">
                THE APPROACH
              </span>
            </div>
            <div className="md:col-span-8">
              <p className="text-base sm:text-lg font-light text-[#a1a1a6] leading-relaxed">
                We combine design, technology and visual storytelling to create digital experiences and content built around <span className="text-white font-normal">real business goals</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
