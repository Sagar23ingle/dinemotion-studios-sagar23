import React, { useRef, useEffect, useState } from 'react';

export default function ProcessSection() {
  const containerRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'DISCOVER',
      subtitle: 'Understand the business, idea and goals.',
      details: 'We begin with an exhaustive audit of your brand landscape, market dynamics, technical prerequisites, and user archetypes. No assumptions, only clarity.'
    },
    {
      num: '02',
      title: 'STRATEGY',
      subtitle: 'Define structure, creative direction and requirements.',
      details: 'We map the architecture, technical stack, narrative arc, and user flows. We establish clear KPIs and a decisive creative compass before touching a pixel.'
    },
    {
      num: '03',
      title: 'DESIGN',
      subtitle: 'Create the visual system and user experience.',
      details: 'We craft the aesthetic identity, typographic rhythm, design tokens, motion choreography, and high-fidelity prototypes. Built to feel natural and effortless.'
    },
    {
      num: '04',
      title: 'BUILD',
      subtitle: 'Develop the website, web application, mobile application or visual content.',
      details: 'Engineering meets cinematic craft. We write clean, performant, modern code and produce high-resolution media with rigorous attention to detail and speed.'
    },
    {
      num: '05',
      title: 'LAUNCH',
      subtitle: 'Test, refine and deliver the final experience.',
      details: 'Comprehensive cross-device stress testing, performance optimization, SEO auditing, and smooth handover. We ensure zero friction on day one.'
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const stepElements = containerRef.current.querySelectorAll('.process-step');
      const triggerY = window.innerHeight * 0.45;

      stepElements.forEach((el, index) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= triggerY && rect.bottom >= triggerY) {
          setActiveStep(index);
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="process" className="section bg-transparent border-t border-white/[0.08]">
      <div className="container" ref={containerRef}>
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="section-label">METHODOLOGY</span>
            <h2 className="section-heading-large !mb-0 text-white">
              HOW WE WORK.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-white/60 leading-relaxed font-light">
            A disciplined, 5-stage creative process that transforms ideas into production-ready digital experiences.
          </p>
        </div>

        {/* Timeline Layout */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Sticky Progress Overview (Desktop) */}
          <div className="hidden lg:block lg:col-span-4 sticky top-32">
            <div className="p-6 rounded-2xl bg-[#0A0A0C] border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              <span className="text-[11px] font-mono text-[#6e6e73] uppercase tracking-wider block mb-3">
                ACTIVE PHASE
              </span>
              <div className="text-3xl font-display font-semibold text-white mb-1">
                {steps[activeStep].num}
              </div>
              <h3 className="text-lg font-display font-semibold text-[#00D6FF] mb-2">
                {steps[activeStep].title}
              </h3>
              <p className="text-xs text-white/60 leading-relaxed mb-5 font-light">
                {steps[activeStep].subtitle}
              </p>

              {/* Progress Bar */}
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#0050FF] to-[#00D6FF] transition-all duration-300"
                  style={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                />
              </div>
              <div className="flex justify-between text-[10px] font-mono text-white/50 mt-2.5">
                <span>STAGE {activeStep + 1} OF 5</span>
                <span>{Math.round(((activeStep + 1) / steps.length) * 100)}%</span>
              </div>
            </div>
          </div>

          {/* Right Timeline Steps */}
          <div className="lg:col-span-8 timeline-track ml-2 sm:ml-0 flex flex-col gap-6 sm:gap-10 md:gap-14">
            {steps.map((step, index) => {
              const isActive = activeStep === index;
              const isPast = activeStep > index;

              return (
                <div
                  key={step.num}
                  className="process-step relative group cursor-pointer"
                  onClick={() => setActiveStep(index)}
                >
                  {/* Timeline Node Dot */}
                  <div
                    className={`timeline-node border ${
                      isActive
                        ? 'bg-[#00D6FF] border-[#00D6FF] text-black shadow-[0_0_16px_rgba(0,214,255,0.6)] scale-105'
                        : isPast
                        ? 'bg-[#050505] border-white/30 text-white/70'
                        : 'bg-[#050505] border-white/10 text-white/30'
                    }`}
                  >
                    <span className="text-[9px] font-mono font-bold">
                      {step.num}
                    </span>
                  </div>

                  {/* Step Card */}
                  <div
                    className={`p-4 sm:p-7 rounded-2xl border transition-all duration-300 ${
                      isActive
                        ? 'bg-[#0A0A0C] border-white/20 shadow-[0_16px_40px_rgba(0,0,0,0.7)]'
                        : 'bg-[#0A0A0C]/60 border-white/[0.05] hover:border-white/10'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`text-[11px] font-mono tracking-wider uppercase ${
                        isActive ? 'text-[#00D6FF]' : 'text-[#6e6e73]'
                      }`}>
                        PHASE {step.num}
                      </span>
                    </div>

                    <h4 className="font-display text-xl sm:text-2xl font-semibold text-white tracking-tight mb-2">
                      {step.title}
                    </h4>

                    <p className="text-sm font-medium text-white/90 mb-2.5">
                      {step.subtitle}
                    </p>

                    <p className="text-xs sm:text-sm text-white/60 leading-relaxed font-light">
                      {step.details}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
