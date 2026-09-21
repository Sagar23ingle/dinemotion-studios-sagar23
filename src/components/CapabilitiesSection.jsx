import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function CapabilitiesSection() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  const capabilities = [
    { name: 'WEBSITES', category: 'Digital Experiences', count: '01' },
    { name: 'WEB APPS', category: 'Product Systems', count: '02' },
    { name: 'MOBILE APPS', category: 'iOS & Android', count: '03' },
    { name: 'UI / UX', category: 'Interface Architecture', count: '04' },
    { name: 'COMMERCIALS', category: 'Cinematic Broadcast', count: '05' },
    { name: 'PROMOTIONAL CONTENT', category: 'Brand Media', count: '06' },
    { name: 'MOTION GRAPHICS', category: 'Visual Rhythm & Dynamics', count: '07' },
  ];

  return (
    <section className="section bg-transparent border-t border-white/[0.08]">
      <div className="container">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="section-label">TECHNICAL & CREATIVE SCOPE</span>
            <h2 className="section-heading-large !mb-0 text-white">
              CAPABILITIES.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-white/60 leading-relaxed font-light">
            Full-spectrum creative engineering: from custom web platforms to commercial film production.
          </p>
        </div>

        {/* Clean Minimal Typography List */}
        <div className="flex flex-col divide-y divide-white/[0.08] border-t border-b border-white/[0.08]">
          {capabilities.map((cap, index) => {
            const isHovered = hoveredIdx === index;
            const isAnyHovered = hoveredIdx !== null;

            return (
              <div
                key={cap.name}
                onMouseEnter={() => setHoveredIdx(index)}
                onMouseLeave={() => setHoveredIdx(null)}
                className={`group py-5 sm:py-6 flex flex-col sm:flex-row sm:items-center justify-between transition-all duration-200 cursor-pointer ${
                  isAnyHovered && !isHovered ? 'opacity-30' : 'opacity-100'
                }`}
              >
                <div className="flex items-baseline gap-3 sm:gap-8">
                  <span className="text-xs font-mono text-[#6e6e73] group-hover:text-[#00D6FF] transition-colors flex-shrink-0">
                    {cap.count}
                  </span>
                  <h3 className="font-display text-xl sm:text-3xl md:text-4xl font-semibold tracking-tight text-white group-hover:text-[#00D6FF] transition-colors duration-200 break-words">
                    {cap.name}
                  </h3>
                </div>

                <div className="mt-2 sm:mt-0 flex items-center justify-between sm:justify-end gap-5">
                  <span className="text-xs font-mono text-white/50 tracking-wider uppercase">
                    {cap.category}
                  </span>
                  <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:text-white group-hover:border-[#00D6FF] group-hover:bg-[#0050FF]/15 transition-all duration-200">
                    <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
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
