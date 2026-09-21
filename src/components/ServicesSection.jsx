import React from 'react';
import { ArrowRight, Monitor, Smartphone, Video, Sparkles, Cpu, Film } from 'lucide-react';

export default function ServicesSection() {
  const services = [
    {
      num: '01',
      title: 'WEBSITE DESIGN & DEVELOPMENT',
      headline: 'DIGITAL EXPERIENCES.',
      description: 'From simple static websites to sophisticated dynamic platforms, we design and develop responsive digital experiences tailored around real business goals.',
      icon: Monitor,
      tags: [
        'Static Websites',
        'Dynamic Websites',
        'Business Websites',
        'Landing Pages',
        'Portfolio Websites',
        'E-commerce Websites',
        'Interactive Websites',
        'Responsive Websites',
        'Custom Web Experiences'
      ],
      metrics: {
        focus: 'Design & Conversion',
        stack: 'Next.js / Vite / CSS',
        delivery: 'Bespoke'
      },
      visual: (
        <div className="relative w-full h-[340px] sm:h-[380px] rounded-2xl bg-gradient-to-br from-[#101014] to-[#050505] border border-white/10 p-4 sm:p-6 overflow-hidden flex flex-col justify-between shadow-2xl group">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />
          
          <div className="relative z-10 flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
            </div>
            <div className="text-[11px] font-mono text-white/50 px-3 py-0.5 rounded-full bg-white/5 border border-white/5 truncate max-w-[140px] sm:max-w-none">
              dinemotion.studio/web
            </div>
            <div className="w-8" />
          </div>

          <div className="relative z-10 my-auto flex flex-col gap-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-mono text-[#00D6FF]">
              <Sparkles className="w-3 h-3" />
              <span>RESPONSIVE ARCHITECTURE</span>
            </div>
            <h4 className="font-display text-lg sm:text-2xl font-semibold text-white tracking-tight leading-snug">
              Editorial Aesthetics Meets Sub-Millisecond Speed.
            </h4>
            <div className="grid grid-cols-3 gap-1.5 sm:gap-2.5 pt-2">
              <div className="p-2 sm:p-3 rounded-xl bg-white/[0.02] border border-white/5 text-center sm:text-left min-w-0">
                <span className="block text-base sm:text-lg font-semibold text-white font-display">100%</span>
                <span className="text-[9px] sm:text-[10px] text-white/50 font-mono truncate block">Performance</span>
              </div>
              <div className="p-2 sm:p-3 rounded-xl bg-white/[0.02] border border-white/5 text-center sm:text-left min-w-0">
                <span className="block text-base sm:text-lg font-semibold text-[#00D6FF] font-display">60 FPS</span>
                <span className="text-[9px] sm:text-[10px] text-white/50 font-mono truncate block">Fluid Motion</span>
              </div>
              <div className="p-2 sm:p-3 rounded-xl bg-white/[0.02] border border-white/5 text-center sm:text-left min-w-0">
                <span className="block text-base sm:text-lg font-semibold text-white font-display">Zero</span>
                <span className="text-[9px] sm:text-[10px] text-white/50 font-mono truncate block">Bloat</span>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-between pt-3 border-t border-white/10 text-[10px] sm:text-[11px] font-mono text-white/50">
            <span>DESIGN + CODE</span>
            <span className="text-[#00D6FF]">PRODUCTION-READY</span>
          </div>
        </div>
      )
    },
    {
      num: '02',
      title: 'WEB & APP DEVELOPMENT',
      headline: 'PRODUCTS PEOPLE USE.',
      description: 'We design and develop modern web applications, mobile applications and digital products engineered for usability, clean interfaces and reliable architecture.',
      icon: Smartphone,
      tags: [
        'Web Applications',
        'Mobile Applications',
        'Business Applications',
        'MVP Development',
        'Custom Digital Products',
        'UI/UX-Driven Applications'
      ],
      metrics: {
        focus: 'Utility & Retention',
        stack: 'React / APIs / Cloud',
        delivery: 'Modular'
      },
      visual: (
        <div className="relative w-full h-[340px] sm:h-[380px] rounded-2xl bg-gradient-to-br from-[#101014] to-[#050505] border border-white/10 p-4 sm:p-6 overflow-hidden flex flex-col justify-between shadow-2xl group">
          <div className="relative z-10 flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Cpu className="w-3.5 h-3.5 text-[#00D6FF]" />
              <span className="text-xs font-mono font-medium tracking-wide text-white">APPLICATION ENGINE</span>
            </div>
            <span className="text-[11px] font-mono text-[#0050FF]">ACTIVE STATE</span>
          </div>

          <div className="relative z-10 my-auto py-2">
            <div className="p-3 sm:p-4 rounded-xl bg-black/50 border border-white/10 backdrop-blur-md mb-3">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-white/60">REACTIVITY PIPELINE</span>
                <span className="text-[10px] font-mono text-[#00D6FF]">SUB-10MS</span>
              </div>
              <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden">
                <div className="bg-gradient-to-r from-[#0050FF] to-[#00D6FF] h-full w-[88%]" />
              </div>
            </div>

            <h4 className="font-display text-base sm:text-lg font-semibold text-white tracking-tight mb-2">
              Clean Systems, Complex Logic Simplified.
            </h4>
            <p className="text-xs text-white/60 leading-relaxed font-light">
              Built for rapid feature iteration, scale-ready deployments, and effortless user flows.
            </p>
          </div>

          <div className="relative z-10 flex items-center justify-between pt-3 border-t border-white/10 text-[10px] sm:text-[11px] font-mono text-white/50">
            <span>FULL STACK</span>
            <span className="text-white font-medium">MODULAR COMPOSITION</span>
          </div>
        </div>
      )
    },
    {
      num: '03',
      title: 'COMMERCIAL & PROMOTIONAL VIDEOS',
      headline: 'STORIES THAT MOVE.',
      description: 'We create cinematic commercial and promotional content designed to make products, brands and ideas impossible to ignore.',
      icon: Video,
      tags: [
        'Commercial Videos',
        'Promotional Videos',
        'Product Videos',
        'Brand Videos',
        'Social Media Promotional Videos',
        'Motion Graphics',
        'Cinematic Visual Content'
      ],
      metrics: {
        focus: 'Emotion & Identity',
        stack: 'Cinematography / 3D',
        delivery: 'Broadcast'
      },
      visual: (
        <div className="relative w-full h-[340px] sm:h-[380px] rounded-2xl bg-gradient-to-br from-[#101014] to-[#050505] border border-white/10 p-4 sm:p-6 overflow-hidden flex flex-col justify-between shadow-2xl group">
          <div className="relative z-10 flex items-center justify-between pb-3 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Film className="w-3.5 h-3.5 text-[#00D6FF]" />
              <span className="text-xs font-mono font-medium tracking-wide text-white">CINEMA PIPELINE</span>
            </div>
            <div className="flex items-center gap-1 text-[11px] font-mono text-red-400">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse" />
              <span>REC</span>
            </div>
          </div>

          <div className="relative z-10 my-auto py-2">
            <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3">
              <div className="p-2.5 sm:p-3 rounded-xl bg-black/40 border border-white/10 min-w-0">
                <span className="text-[9px] sm:text-[10px] font-mono text-white/40 block">RATIO</span>
                <span className="text-xs sm:text-sm font-semibold font-mono text-white truncate block">2.39 : 1 ANAMORPHIC</span>
              </div>
              <div className="p-2.5 sm:p-3 rounded-xl bg-black/40 border border-white/10 min-w-0">
                <span className="text-[9px] sm:text-[10px] font-mono text-white/40 block">GRADING</span>
                <span className="text-xs sm:text-sm font-semibold font-mono text-[#00D6FF] truncate block">STUDIO DI</span>
              </div>
            </div>

            <h4 className="font-display text-base sm:text-lg font-semibold text-white tracking-tight mb-1.5">
              Production Value that Compels.
            </h4>
            <p className="text-xs text-white/60 leading-relaxed font-light">
              Light, sound, timing and rhythm unified into cinematic commercials and promotional storytelling.
            </p>
          </div>

          <div className="relative z-10 flex items-center justify-between pt-3 border-t border-white/10 text-[10px] sm:text-[11px] font-mono text-white/50">
            <span>DIRECTION + EDITING</span>
            <span className="text-[#00D6FF]">VISUAL MEDIA</span>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="services" className="section bg-transparent border-t border-white/[0.08]">
      <div className="container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="section-label">SERVICES & CRAFT</span>
            <h2 className="section-heading-large !mb-0 text-white">
              WHAT WE DO.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-white/60 leading-relaxed font-light">
            Every medium is built with functional clarity, subtle aesthetics, and high-performance execution.
          </p>
        </div>

        <div className="flex flex-col gap-12 md:gap-16">
          {services.map((service, index) => {
            const isReversed = index % 2 === 1;

            return (
              <div
                key={service.num}
                className="relative rounded-3xl bg-[#0A0A0C] border border-white/[0.08] p-5 sm:p-8 md:p-12 transition-all duration-300 hover:border-white/15 shadow-[0_20px_60px_rgba(0,0,0,0.7)]"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-center ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  <div className={`lg:col-span-7 flex flex-col justify-between ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div>
                      <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-4 sm:mb-5">
                        <span className="text-xs font-mono font-medium text-[#00D6FF] px-2.5 py-0.5 rounded-full bg-[#0050FF]/15 border border-[#00D6FF]/25 flex-shrink-0">
                          {service.num}
                        </span>
                        <h3 className="text-[11px] sm:text-xs font-mono font-medium tracking-[0.10em] sm:tracking-[0.14em] uppercase text-white/70 break-words">
                          {service.title}
                        </h3>
                      </div>

                      <h4 className="font-display text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight mb-4">
                        {service.headline}
                      </h4>

                      <p className="text-sm sm:text-base text-white/65 leading-relaxed mb-6 max-w-lg font-light">
                        {service.description}
                      </p>

                      <div className="mb-8">
                        <span className="block text-[11px] font-mono uppercase tracking-wider text-white/40 mb-3">
                          CAPABILITIES INCLUDE:
                        </span>
                        <div className="flex flex-wrap gap-2">
                          {service.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-xs font-mono text-white/80 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.08]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="pt-5 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-white/50">
                      <div className="break-words">FOCUS: <strong className="text-white font-normal">{service.metrics.focus}</strong></div>
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-1.5 text-[#00D6FF] hover:text-white transition-colors"
                      >
                        <span>INQUIRE SERVICE</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  <div className={`lg:col-span-5 ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    {service.visual}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
