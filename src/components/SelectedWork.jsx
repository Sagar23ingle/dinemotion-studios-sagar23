import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight, Globe, Layout, Code2 } from 'lucide-react';

export default function SelectedWork() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isDesktop, setIsDesktop] = useState(() => 
    typeof window !== 'undefined' ? window.innerWidth >= 1024 : false
  );

  // Exactly 2 Website Projects and 1 Web Application Project
  const projects = [
    {
      num: '01',
      category: 'WEBSITE',
      title: 'PROJECT 01 — EDITORIAL ARCHITECTURAL PLATFORM',
      subtitle: 'Static & Dynamic Portfolio Website',
      description: 'A minimalist digital flagship showcasing spatial architecture and bespoke design with fluid page transitions, editorial typography, and precision layouts.',
      tags: ['Website', 'Editorial Design', 'Interactive Canvas', 'Responsive Web'],
      icon: Globe,
      color: '#00D6FF',
      visual: (
        <div className="w-full h-full rounded-2xl bg-gradient-to-br from-white/[0.06] to-black/35 backdrop-blur-md border border-white/10 p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden group shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 relative z-10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00D6FF] shadow-[0_0_8px_#00D6FF]" />
              <span className="text-[11px] font-mono text-[#a1a1a6]">PORTFOLIO EXHIBIT</span>
            </div>
            <span className="text-[11px] font-mono text-[#00D6FF]">01 / 03</span>
          </div>

          <div className="relative z-10 my-auto py-3 sm:py-4">
            <span className="text-[10px] font-mono text-[#6e6e73] uppercase tracking-widest block mb-1.5">
              SPATIAL MONOGRAPH
            </span>
            <h5 className="font-display text-lg sm:text-2xl font-semibold text-white tracking-tight mb-2">
              Form Follows Frictionless Motion.
            </h5>
            <div className="h-[1px] w-12 bg-[#0050FF] mb-3" />
            <p className="text-xs text-white/60 max-w-xs leading-relaxed">
              Custom page choreography, bespoke grid structure, responsive typography, and sub-second load times.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-white/10 relative z-10 text-[10px] sm:text-[11px] font-mono text-white/50">
            <span>DESIGN & DEVELOPMENT</span>
            <span className="text-[#00D6FF] group-hover:text-white transition-colors">ACTIVE PROTOTYPE</span>
          </div>
        </div>
      )
    },
    {
      num: '02',
      category: 'WEBSITE',
      title: 'PROJECT 02 — LUXURY COMMERCE & ATELIER',
      subtitle: 'Dynamic E-Commerce & Editorial Experience',
      description: 'An immersive digital flagship designed for modern luxury, combining high-resolution visual storytelling with frictionless product purchasing and brand positioning.',
      tags: ['Website', 'E-Commerce', 'Bespoke UI', 'Responsive Design'],
      icon: Layout,
      color: '#0050FF',
      visual: (
        <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#0050FF]/10 to-black/35 backdrop-blur-md border border-white/10 p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden group shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 relative z-10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#0050FF] shadow-[0_0_8px_#0050FF]" />
              <span className="text-[11px] font-mono text-[#a1a1a6]">FLAGSHIP COMMERCE</span>
            </div>
            <span className="text-[11px] font-mono text-[#0050FF]">02 / 03</span>
          </div>

          <div className="relative z-10 my-auto py-3 sm:py-4">
            <span className="text-[10px] font-mono text-[#6e6e73] uppercase tracking-widest block mb-1.5">
              DIGITAL ATELIER
            </span>
            <h5 className="font-display text-lg sm:text-2xl font-semibold text-white tracking-tight mb-2">
              Tactile Luxury at Digital Scale.
            </h5>
            <div className="h-[1px] w-12 bg-[#0050FF] mb-3" />
            <p className="text-xs text-white/60 max-w-xs leading-relaxed">
              Tailored micro-interactions, rapid catalog transitions, and cinematic storytelling woven through every surface.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-white/10 relative z-10 text-[10px] sm:text-[11px] font-mono text-white/50">
            <span>COMMERCE & STORYTELLING</span>
            <span className="text-[#00D6FF] group-hover:text-white transition-colors">ACTIVE PROTOTYPE</span>
          </div>
        </div>
      )
    },
    {
      num: '03',
      category: 'WEB APPLICATION',
      title: 'PROJECT 03 — WORKFLOW INTELLIGENCE APPLICATION',
      subtitle: 'Real-Time Enterprise Web Platform',
      description: 'A real-time collaborative workspace and data analytics web app engineered for modern creative teams and enterprise productivity with reactive state synchronization.',
      tags: ['Web Application', 'Cloud Platform', 'Data Architecture', 'UI/UX System'],
      icon: Code2,
      color: '#00D6FF',
      visual: (
        <div className="w-full h-full rounded-2xl bg-gradient-to-br from-[#00D6FF]/10 to-black/35 backdrop-blur-md border border-white/10 p-4 sm:p-6 flex flex-col justify-between relative overflow-hidden group shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 pb-3 relative z-10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#00D6FF] shadow-[0_0_8px_#00D6FF]" />
              <span className="text-[11px] font-mono text-[#a1a1a6]">ENTERPRISE APP</span>
            </div>
            <span className="text-[11px] font-mono text-[#00D6FF]">03 / 03</span>
          </div>

          <div className="relative z-10 my-auto py-3 sm:py-4">
            <span className="text-[10px] font-mono text-[#6e6e73] uppercase tracking-widest block mb-1.5">
              CLOUD PLATFORM
            </span>
            <h5 className="font-display text-lg sm:text-2xl font-semibold text-white tracking-tight mb-2">
              Complex Workflows, Rendered Effortless.
            </h5>
            <div className="h-[1px] w-12 bg-[#00D6FF] mb-3" />
            <p className="text-xs text-white/60 max-w-xs leading-relaxed">
              Low-latency data pipeline, instant state updates, modular design system, and multi-tenant security architecture.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-white/10 relative z-10 text-[10px] sm:text-[11px] font-mono text-white/50">
            <span>FULL-STACK APPLICATION</span>
            <span className="text-[#00D6FF] group-hover:text-white transition-colors">ACTIVE PROTOTYPE</span>
          </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkDesktop();
    window.addEventListener('resize', checkDesktop, { passive: true });
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScroll = containerRef.current.offsetHeight - window.innerHeight;
      if (totalScroll <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScroll));
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isDesktop]);

  return (
    <section id="work" className="relative bg-transparent border-t border-white/[0.08]">
      <div
        ref={containerRef}
        className="relative w-full"
        style={{
          height: isDesktop ? '280vh' : 'auto'
        }}
      >
        <div
          className={`${
            isDesktop
              ? 'sticky top-0 left-0 w-full h-screen overflow-hidden flex flex-col justify-between py-10'
              : 'py-12 sm:py-16 px-3 sm:px-4'
          }`}
        >
          {/* Header */}
          <div className="container mb-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-4">
              <div>
                <span className="section-label">CURATED PORTFOLIO</span>
                <h2 className="section-heading-large !mb-0 text-white">
                  SELECTED CREATIONS.
                </h2>
              </div>
              <div className="text-[11px] sm:text-xs font-mono text-white/50 tracking-wider">
                <span>2 WEBSITES • 1 WEB APPLICATION</span>
              </div>
            </div>
          </div>

          {/* Desktop Pinned Horizontal Portfolio Track */}
          {isDesktop ? (
            <div className="relative w-full flex-1 flex items-center overflow-hidden">
              <div
                ref={trackRef}
                className="flex items-center gap-10 px-[max(2rem,calc((100vw-1240px)/2))] will-change-transform"
                style={{
                  transform: `translateX(-${scrollProgress * 62}%)`,
                  transition: 'transform 0.12s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                {projects.map((project, idx) => (
                  <div
                    key={project.num}
                    className="w-[780px] flex-shrink-0 rounded-3xl glass-card border border-white/[0.08] p-8 transition-all duration-300 hover:border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.8)]"
                    style={{
                      transform: `scale(${1 - Math.abs(scrollProgress - idx * 0.35) * 0.04})`,
                      opacity: Math.max(0.75, 1 - Math.abs(scrollProgress - idx * 0.35) * 0.45)
                    }}
                  >
                    <div className="grid grid-cols-12 gap-6 items-stretch h-[390px]">
                      {/* Project Info */}
                      <div className="col-span-6 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2.5 mb-4">
                            <span className="text-[11px] font-mono font-medium text-[#00D6FF] px-2.5 py-0.5 rounded-full bg-[#0050FF]/15 border border-[#00D6FF]/30">
                              0{project.num}
                            </span>
                            <span className="text-[11px] font-mono uppercase tracking-widest text-white/70">
                              {project.category}
                            </span>
                          </div>

                          <h3 className="font-display text-xl font-semibold text-white tracking-tight leading-snug mb-3">
                            {project.title}
                          </h3>

                          <p className="text-xs sm:text-sm text-white/60 leading-relaxed mb-5 font-light">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-1.5 mb-4">
                            {project.tags.map((t) => (
                              <span
                                key={t}
                                className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.03] border border-white/5 text-white/50"
                              >
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="pt-3 border-t border-white/10">
                          <a
                            href="#contact"
                            className="group inline-flex items-center gap-2 text-xs font-mono font-medium text-white hover:text-[#00D6FF] transition-colors"
                          >
                            <span>View Project →</span>
                          </a>
                        </div>
                      </div>

                      {/* Project Visual */}
                      <div className="col-span-6 h-full">
                        {project.visual}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            /* Mobile Elegant Vertical Stack */
            <div className="container flex flex-col gap-5 sm:gap-8">
              {projects.map((project) => (
                <div
                  key={project.num}
                  className="rounded-3xl glass-card border border-white/[0.08] p-4 sm:p-6 flex flex-col gap-4 sm:gap-5 shadow-2xl"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-medium text-[#00D6FF] px-2.5 py-0.5 rounded-full bg-[#0050FF]/15 border border-[#00D6FF]/30">
                      0{project.num}
                    </span>
                    <span className="text-[10px] sm:text-[11px] font-mono text-white/60 uppercase tracking-wider">
                      {project.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display text-base sm:text-lg font-semibold text-white mb-2 break-words">
                      {project.title}
                    </h3>
                    <p className="text-xs text-white/60 leading-relaxed mb-3.5 font-light">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.tags.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.03] border border-white/5 text-white/50"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="min-h-[250px] sm:h-[270px]">
                    {project.visual}
                  </div>

                  <div className="pt-3 border-t border-white/10">
                    <a
                      href="#contact"
                      className="group inline-flex items-center gap-2 text-xs font-mono font-medium text-[#00D6FF] hover:text-white transition-colors"
                    >
                      <span>View Project →</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Desktop Progress Bar */}
          {isDesktop && (
            <div className="container flex items-center justify-between pt-4 border-t border-white/[0.08] text-[11px] font-mono text-white/50">
              <div className="flex items-center gap-3">
                <span>PORTFOLIO AXIS</span>
                <div className="w-36 h-[2px] bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-[#0050FF] to-[#00D6FF] transition-all duration-150"
                    style={{ width: `${Math.round(scrollProgress * 100)}%` }}
                  />
                </div>
              </div>
              <span>SCROLL TO ADVANCE</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
