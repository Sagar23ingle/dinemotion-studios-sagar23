import React from 'react';

export default function WhyUsSection() {
  const principles = [
    {
      num: '01',
      title: 'THOUGHTFUL DESIGN',
      description: 'Aesthetic restraint paired with intentional visual hierarchy. We craft interfaces that feel natural, memorable, and effortless to navigate.'
    },
    {
      num: '02',
      title: 'MODERN TECHNOLOGY',
      description: 'Engineered with contemporary web standards, responsive architecture, sub-second load performance, and clean modular codebases.'
    },
    {
      num: '03',
      title: 'VISUAL STORYTELLING',
      description: 'Pacing, framing, and cinematic motion that give brands a distinctive voice. We translate complex product narratives into visceral visuals.'
    },
    {
      num: '04',
      title: 'BUSINESS-FOCUSED EXECUTION',
      description: 'Creative work anchored in commercial reality. Every detail serves a purpose: conversion, user engagement, and lasting brand equity.'
    }
  ];

  return (
    <section className="section bg-transparent border-t border-white/[0.08] px-3 sm:px-4">
      <div className="container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-12 gap-4 sm:gap-6">
          <div>
            <span className="section-label">STUDIO PRINCIPLES</span>
            <h2 className="section-heading-large !mb-0 text-white">
              WHY DINEMOTION STUDIOS.
            </h2>
          </div>
          <p className="max-w-sm text-xs sm:text-sm text-white/60 leading-relaxed font-light">
            No exaggerated claims or superficial buzzwords. Four foundational standards that guide every engagement.
          </p>
        </div>

        {/* 4 Core Principles Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {principles.map((p) => (
            <div
              key={p.num}
              className="p-4 sm:p-7 rounded-2xl bg-[#0A0A0C] border border-white/[0.08] hover:border-white/20 transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <span className="text-xl sm:text-2xl font-display font-semibold text-[#00D6FF] block mb-3 sm:mb-4">
                  {p.num}
                </span>
                <h3 className="font-display text-base sm:text-lg font-semibold text-white tracking-tight leading-snug mb-2 sm:mb-3">
                  {p.title}
                </h3>
              </div>
              <p className="text-xs text-white/60 leading-relaxed pt-3 sm:pt-4 border-t border-white/10 font-light">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
