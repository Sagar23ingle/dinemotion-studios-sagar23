import React from 'react';

export default function AboutSection() {
  return (
    <section id="about" className="section bg-transparent border-t border-white/[0.08]">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4">
            <span className="section-label">ABOUT THE STUDIO</span>
            <span className="block text-xs font-mono text-[#6e6e73] tracking-wider mt-1 uppercase">
              CREATIVE TECHNOLOGY & MEDIA
            </span>
          </div>

          <div className="lg:col-span-8">
            <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl leading-tight tracking-tight text-white mb-6 text-glow">
              <span className="block text-white">DESIGN.</span>
              <span className="block text-white/90">TECHNOLOGY.</span>
              <span className="block text-[#00D6FF]">STORY.</span>
            </h2>

            <div className="space-y-4 max-w-xl text-base sm:text-lg font-light text-white/65 leading-relaxed">
              <p>
                Dinemotion Studios brings <strong className="text-white font-normal">design, development and visual production</strong> together under one unified creative roof.
              </p>
              <p>
                We build websites, applications and commercial promotional experiences designed around <span className="text-white font-normal">real business goals</span>.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.08] flex items-start sm:items-center gap-3 text-xs font-mono text-white/50">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D6FF] shadow-[0_0_8px_#00D6FF] flex-shrink-0 mt-1.5 sm:mt-0" />
              <span className="tracking-wider uppercase break-words">
                "We design, build and produce digital experiences that help brands move forward."
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
