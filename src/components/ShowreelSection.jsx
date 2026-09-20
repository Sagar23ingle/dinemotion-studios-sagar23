import React, { useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize2, ArrowRight, Film } from 'lucide-react';

export default function ShowreelSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  return (
    <section className="section bg-transparent border-t border-white/[0.08] overflow-hidden">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="section-label justify-center">
            CINEMATIC SHOWCASE
          </span>
          <h2 className="font-display font-black text-4xl sm:text-5xl md:text-6xl text-white tracking-tight mb-4">
            SEE DINEMOTION STUDIOS IN MOTION.
          </h2>
          <p className="text-base sm:text-lg text-[#a1a1a6]">
            A compilation of high-fidelity visual direction, motion graphics, and digital choreography.
          </p>
        </div>

        {/* Large Showreel Cinema Frame */}
        <div className="relative w-full max-w-5xl mx-auto rounded-3xl overflow-hidden border border-white/10 bg-[#0c0c10] shadow-[0_24px_80px_rgba(0,0,0,0.8)] aspect-[16/9] sm:aspect-[21/9] flex items-center justify-center group">
          {/* Ambient Glow Background */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#2997ff]/10 via-[#070709]/80 to-[#ff3b30]/5 pointer-events-none" />

          {/* Cinematic Frame Image Placeholder from the project frames */}
          <img
            src="/Use_the_uploaded_image_as_the_frames/frame_060.png"
            alt="Dinemotion Studios Cinematic Showreel Preview"
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              isPlaying ? 'scale-105 filter brightness-105' : 'scale-100 opacity-60 filter brightness-90 group-hover:opacity-75'
            }`}
          />

          {/* Letterboxing Vignette */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/60 pointer-events-none" />

          {/* Center Play Button Overlay (when paused) */}
          {!isPlaying && (
            <div className="relative z-10 flex flex-col items-center gap-5 text-center">
              <button
                onClick={() => setIsPlaying(true)}
                aria-label="Play showreel"
                className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white text-black flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-[0_0_40px_rgba(255,255,255,0.4)] cursor-pointer"
              >
                <Play className="w-8 h-8 fill-black translate-x-0.5" />
              </button>
              <div>
                <span className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-white uppercase font-bold">
                  <span>PLAY SHOWREEL</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
                <span className="block text-[11px] font-mono text-[#86868b] mt-1">
                  2026 STUDIO REEL • 4K ULTRA HD
                </span>
              </div>
            </div>
          )}

          {/* Active Player Controls (when playing) */}
          {isPlaying && (
            <div className="absolute bottom-6 left-6 right-6 z-20 flex items-center justify-between p-3 rounded-2xl bg-black/70 backdrop-blur-md border border-white/10 text-white text-xs font-mono">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsPlaying(false)}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  <Pause className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <span className="text-[#a1a1a6]">DINEMOTION_REEL_MASTER_4K</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-[10px] text-[#2997ff] border border-[#2997ff]/30 px-2 py-0.5 rounded bg-[#2997ff]/10">
                  PLAYING
                </span>
                <button
                  onClick={() => setIsPlaying(false)}
                  className="hover:text-[#2997ff] transition-colors"
                >
                  CLOSE
                </button>
              </div>
            </div>
          )}

          {/* Clearly marked editable placeholder notification */}
          <div className="absolute top-4 right-4 z-10">
            <span className="text-[10px] font-mono tracking-wider text-[#a1a1a6] bg-black/60 backdrop-blur-md border border-white/10 px-3 py-1 rounded-full flex items-center gap-1.5">
              <Film className="w-3 h-3 text-[#2997ff]" />
              EDITABLE SHOWREEL PLAYER
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
