import React, { useRef, useEffect, useState } from 'react';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';

const TOTAL_FRAMES = 240;

function getFrameUrl(index) {
  const frameNum = String(index + 1).padStart(3, '0');
  return `/Use_the_uploaded_image_as_the_frames/frame_${frameNum}.png`;
}

function getBeatMetrics(progress, start, end, fadeInLen = 0.035, fadeOutLen = 0.035) {
  if (progress < start || progress > end) {
    return { opacity: 0, translateY: progress < start ? 24 : -24, active: false };
  }
  let opacity = 1;
  let translateY = 0;
  if (progress < start + fadeInLen) {
    const t = (progress - start) / fadeInLen;
    opacity = t;
    translateY = (1 - t) * 24;
  } else if (progress > end - fadeOutLen && end < 1) {
    const t = (end - progress) / fadeOutLen;
    opacity = t;
    translateY = (1 - t) * -24;
  }
  return {
    opacity: Math.max(0, Math.min(1, opacity)),
    translateY,
    active: opacity > 0.005
  };
}

export default function HeroCanvas() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const fallbackImgRef = useRef(null);
  const imagesRef = useRef([]);
  const currentFrameRef = useRef(0);
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const rafIdRef = useRef(null);
  const isReducedMotionRef = useRef(false);

  const [activeFrameIndex, setActiveFrameIndex] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Check prefers-reduced-motion
  useEffect(() => {
    isReducedMotionRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  // High performance Canvas drawing with seamless background matching
  const drawFrame = (frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Fill background with exact deep charcoal #050505 so zero gaps can occur
    ctx.fillStyle = '#050505';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let renderImg = imagesRef.current[frameIndex];
    if (!renderImg || !renderImg.complete || !renderImg.naturalWidth) {
      // Look back for nearest loaded frame
      for (let i = frameIndex - 1; i >= 0; i--) {
        const prev = imagesRef.current[i];
        if (prev && prev.complete && prev.naturalWidth) {
          renderImg = prev;
          break;
        }
      }
    }

    // Fallback if initial frames still fetching
    if ((!renderImg || !renderImg.complete) && fallbackImgRef.current && fallbackImgRef.current.complete) {
      renderImg = fallbackImgRef.current;
    }

    if (!renderImg || !renderImg.naturalWidth) return;

    const w = canvas.width;
    const h = canvas.height;
    const imgW = renderImg.naturalWidth;
    const imgH = renderImg.naturalHeight;

    // Scale to cover while preserving aspect ratio and centering
    const hRatio = w / imgW;
    const vRatio = h / imgH;
    const ratio = Math.max(hRatio, vRatio);

    const shiftX = (w - imgW * ratio) / 2;
    const shiftY = (h - imgH * ratio) / 2;

    ctx.drawImage(
      renderImg,
      0,
      0,
      imgW,
      imgH,
      shiftX,
      shiftY,
      imgW * ratio,
      imgH * ratio
    );
  };

  // Preload frames strategy: instant frame 1, then batched background loading
  useEffect(() => {
    const images = new Array(TOTAL_FRAMES);
    imagesRef.current = images;
    let isMounted = true;

    // Load first frame immediately
    const firstImg = new Image();
    firstImg.src = getFrameUrl(0);
    firstImg.onload = () => {
      if (isMounted) {
        images[0] = firstImg;
        drawFrame(0);
      }
    };
    images[0] = firstImg;

    // Preload remaining frames in small batches
    const loadFrames = async () => {
      const batchSize = 12;
      for (let i = 1; i < TOTAL_FRAMES; i += batchSize) {
        if (!isMounted) break;
        const end = Math.min(i + batchSize, TOTAL_FRAMES);
        const batchPromises = [];

        for (let j = i; j < end; j++) {
          const p = new Promise((resolve) => {
            const img = new Image();
            img.src = getFrameUrl(j);
            img.onload = () => {
              images[j] = img;
              resolve();
            };
            img.onerror = () => resolve();
            images[j] = img;
          });
          batchPromises.push(p);
        }

        await Promise.all(batchPromises);
        await new Promise((r) => setTimeout(r, 12));
      }
    };

    loadFrames();

    return () => {
      isMounted = false;
    };
  }, []);

  // Resize canvas handling with DPR support (capped at 2 for smoothness)
  useEffect(() => {
    const handleResize = () => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const displayWidth = window.innerWidth;
      const displayHeight = window.innerHeight;

      canvas.width = displayWidth * dpr;
      canvas.height = displayHeight * dpr;
      canvas.style.width = `${displayWidth}px`;
      canvas.style.height = `${displayHeight}px`;

      drawFrame(currentFrameRef.current);
    };

    handleResize();
    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Scroll tracking and smooth interpolation loop
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollDistance = containerRef.current.offsetHeight - window.innerHeight;
      if (totalScrollDistance <= 0) return;

      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollDistance));
      targetProgressRef.current = progress;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    let lastRenderedFrame = -1;

    const animate = () => {
      if (isReducedMotionRef.current) {
        drawFrame(0);
        return;
      }

      // Smooth interpolation for cinematic scroll video (lerp factor 0.16)
      const diff = targetProgressRef.current - currentProgressRef.current;
      currentProgressRef.current += diff * 0.16;

      const progress = currentProgressRef.current;

      const frameIndex = Math.min(
        TOTAL_FRAMES - 1,
        Math.max(0, Math.round(progress * (TOTAL_FRAMES - 1)))
      );

      if (frameIndex !== lastRenderedFrame) {
        currentFrameRef.current = frameIndex;
        drawFrame(frameIndex);
        lastRenderedFrame = frameIndex;
        setActiveFrameIndex(frameIndex);
      }

      setScrollProgress(progress);
      rafIdRef.current = requestAnimationFrame(animate);
    };

    rafIdRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  const handleCtaClick = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Compute states for each of the 5 storytelling beats
  const beat1 = getBeatMetrics(scrollProgress, 0.0, 0.15, 0.02, 0.035);
  const beat2 = getBeatMetrics(scrollProgress, 0.15, 0.39, 0.035, 0.035);
  const beat3 = getBeatMetrics(scrollProgress, 0.39, 0.64, 0.035, 0.035);
  const beat4 = getBeatMetrics(scrollProgress, 0.64, 0.85, 0.035, 0.035);
  const beat5 = getBeatMetrics(scrollProgress, 0.85, 1.0, 0.035, 0.02);

  return (
    <div
      ref={containerRef}
      id="hero-track"
      className="relative w-full bg-[#050505]"
      style={{
        height: '460vh'
      }}
    >
      {/* Pinned Fullscreen Canvas Area */}
      <div className="sticky top-0 left-0 w-full h-screen overflow-hidden bg-[#050505]">
        {/* Instant Dark Fallback Frame 1 */}
        <img
          ref={fallbackImgRef}
          src="/Use_the_uploaded_image_as_the_frames/frame_001.png"
          alt="Dinemotion Studio Hero Background"
          onLoad={() => drawFrame(0)}
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none z-0"
        />

        {/* High performance Canvas rendering the scroll-driven frame animation */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none z-10"
        />

        {/* Cinematic Dark Vignette Overlays for deep contrast & text readability */}
        <div
          className="absolute inset-0 pointer-events-none z-20"
          style={{
            background: 'linear-gradient(to top, #050505 0%, rgba(5,5,5,0.25) 30%, rgba(5,5,5,0.3) 70%, rgba(5,5,5,0.85) 100%)'
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none z-20"
          style={{
            background: 'linear-gradient(to right, rgba(5,5,5,0.8) 0%, rgba(5,5,5,0.15) 30%, rgba(5,5,5,0.15) 70%, rgba(5,5,5,0.7) 100%)'
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none z-20"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(5,5,5,0.2) 0%, rgba(5,5,5,0.75) 100%)'
          }}
        />

        {/* ---------------------------------------------------- */}
        {/* BEAT 1: HERO / INTRO (0–15% scroll) - Centered       */}
        {/* ---------------------------------------------------- */}
        <div
          className={`absolute inset-0 z-30 flex flex-col justify-center items-center container text-center px-4 transition-all duration-200 ${
            beat1.active ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
          style={{
            opacity: beat1.opacity,
            transform: `translateY(${beat1.translateY}px)`
          }}
        >
          {/* Subtle dark backdrop card for 100% crystal-clear readability */}
          <div className="max-w-3xl flex flex-col items-center p-6 sm:p-10 rounded-3xl bg-black/40 backdrop-blur-md border border-white/[0.08] shadow-[0_25px_60px_rgba(0,0,0,0.7)]">
            {/* Eyebrow Label */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] font-mono tracking-widest text-[#a1a1a6] bg-black/60 border border-white/10 backdrop-blur-md mb-6 shadow-md">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D6FF] shadow-[0_0_8px_#00D6FF]" />
              <span>CREATIVE TECHNOLOGY & MEDIA STUDIO</span>
            </div>

            {/* Large Display Headline */}
            <h1 className="font-display font-bold tracking-[-0.035em] leading-[1.03] text-white text-4xl sm:text-6xl md:text-7xl lg:text-[5rem] mb-6 text-glow">
              <span className="block text-gradient-white">WE CREATE.</span>
              <span className="block text-white">WE BUILD.</span>
              <span className="block text-gradient-cyan">WE MOVE.</span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl md:text-2xl text-white font-medium tracking-tight max-w-2xl mb-3 drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
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
                className="btn-gradient"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-3.5 h-3.5 btn-arrow text-[#00D6FF]" />
              </a>

              <a
                href="#work"
                onClick={(e) => handleCtaClick(e, '#work')}
                className="btn-secondary"
              >
                <span>View Our Work</span>
                <ArrowRight className="w-3.5 h-3.5 btn-arrow" />
              </a>
            </div>

            {/* Subtle scroll cue */}
            <div className="mt-10 flex items-center gap-2 text-[11px] font-mono tracking-widest text-white/60 uppercase">
              <span className="w-5 h-5 rounded-full border border-white/20 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-bounce">
                <ChevronDown className="w-3 h-3 text-[#00D6FF]" />
              </span>
              <span>SCROLL TO EXPLORE STORY</span>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------------------- */}
        {/* BEAT 2: DIGITAL EXPERIENCE REVEAL (15–40% scroll) - Left-aligned */}
        {/* ---------------------------------------------------------------- */}
        <div
          className={`absolute inset-0 z-30 flex flex-col justify-center container px-6 md:px-12 transition-all duration-200 ${
            beat2.active ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
          style={{
            opacity: beat2.opacity,
            transform: `translateY(${beat2.translateY}px)`
          }}
        >
          <div className="max-w-2xl bg-black/40 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
            <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-[#00D6FF] mb-3 uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>01 / WEBSITE DESIGN & DEVELOPMENT</span>
            </div>

            <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl text-white tracking-[-0.03em] leading-tight mb-4 text-glow">
              Digital experiences,<br />
              <span className="text-gradient-cyan">designed to move.</span>
            </h2>

            <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light mb-6">
              From simple static websites to sophisticated dynamic platforms, we design and develop digital experiences around real business goals.
            </p>

            {/* Supporting points pills */}
            <div className="flex flex-wrap gap-2">
              {[
                'Static websites',
                'Dynamic websites',
                'Business websites',
                'Landing pages',
                'E-commerce',
                'Interactive web experiences'
              ].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-full text-xs font-mono text-white/80 bg-white/[0.04] border border-white/10 hover:border-[#00D6FF]/40 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------ */}
        {/* BEAT 3: WEB & APP DEVELOPMENT (40–65% scroll) - Right-aligned */}
        {/* ------------------------------------------------------------ */}
        <div
          className={`absolute inset-0 z-30 flex flex-col justify-center items-end container px-6 md:px-12 transition-all duration-200 ${
            beat3.active ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
          style={{
            opacity: beat3.opacity,
            transform: `translateY(${beat3.translateY}px)`
          }}
        >
          <div className="max-w-2xl bg-black/40 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.6)] text-right">
            <div className="inline-flex items-center gap-2 text-[11px] font-mono tracking-widest text-[#00D6FF] mb-3 uppercase">
              <span>02 / WEB & APPLICATION ENGINEERING</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#00D6FF]" />
            </div>

            <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl text-white tracking-[-0.03em] leading-tight mb-4 text-glow">
              Products people use.
            </h2>

            <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light mb-6">
              Modern product development, usability, clean interfaces and technology engineered for longevity and seamless adoption.
            </p>

            {/* Supporting points pills */}
            <div className="flex flex-wrap justify-end gap-2">
              {[
                'Web applications',
                'Mobile applications',
                'Business applications',
                'MVP development',
                'Custom digital products',
                'UI/UX-focused experiences'
              ].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-full text-xs font-mono text-white/80 bg-white/[0.04] border border-white/10 hover:border-[#0050FF]/50 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ------------------------------------------------------------------------- */}
        {/* BEAT 4: COMMERCIAL & PROMOTIONAL CONTENT (65–85% scroll) - Left/Editorial */}
        {/* ------------------------------------------------------------------------- */}
        <div
          className={`absolute inset-0 z-30 flex flex-col justify-center container px-6 md:px-12 transition-all duration-200 ${
            beat4.active ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
          style={{
            opacity: beat4.opacity,
            transform: `translateY(${beat4.translateY}px)`
          }}
        >
          <div className="max-w-2xl bg-black/40 backdrop-blur-xl p-8 sm:p-10 rounded-3xl border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
            <div className="flex items-center gap-2 text-[11px] font-mono tracking-widest text-[#00D6FF] mb-3 uppercase">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span>03 / COMMERCIAL & PROMOTIONAL PRODUCTION</span>
            </div>

            <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl text-white tracking-[-0.03em] leading-tight mb-4 text-glow">
              Stories that move.
            </h2>

            <p className="text-sm sm:text-base text-white/70 leading-relaxed font-light mb-6">
              We create cinematic commercial and promotional content designed to make products, brands and ideas impossible to ignore.
            </p>

            {/* Supporting points pills */}
            <div className="flex flex-wrap gap-2">
              {[
                'Commercial videos',
                'Promotional videos',
                'Product videos',
                'Brand content',
                'Social media promotional content',
                'Motion graphics'
              ].map((item) => (
                <span
                  key={item}
                  className="px-3 py-1.5 rounded-full text-xs font-mono text-white/80 bg-white/[0.04] border border-white/10 hover:border-[#00D6FF]/40 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* BEAT 5: REVEAL / FINAL CTA (85–100% scroll) - Centered */}
        {/* ---------------------------------------------------- */}
        <div
          className={`absolute inset-0 z-30 flex flex-col justify-center items-center container text-center px-4 transition-all duration-200 ${
            beat5.active ? 'pointer-events-auto' : 'pointer-events-none'
          }`}
          style={{
            opacity: beat5.opacity,
            transform: `translateY(${beat5.translateY}px)`
          }}
        >
          <div className="max-w-2xl p-8 sm:p-12 rounded-3xl bg-black/40 backdrop-blur-2xl border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.7)] flex flex-col items-center">
            <span className="inline-block text-[11px] font-mono tracking-widest text-[#00D6FF] uppercase mb-4">
              READY TO COLLABORATE
            </span>

            <h2 className="font-display font-semibold text-4xl sm:text-5xl md:text-6xl text-white tracking-[-0.035em] leading-tight mb-2 text-glow">
              Have an idea?
            </h2>

            <h3 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl tracking-[-0.03em] text-white/80 leading-tight mb-8">
              Let’s make it move.
            </h3>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
              <a
                href="#contact"
                onClick={(e) => handleCtaClick(e, '#contact')}
                className="btn-gradient text-sm px-6 py-3.5"
              >
                <span>Start a Project</span>
                <ArrowRight className="w-4 h-4 btn-arrow text-[#00D6FF]" />
              </a>

              <a
                href="#work"
                onClick={(e) => handleCtaClick(e, '#work')}
                className="btn-secondary text-sm px-6 py-3.5"
              >
                <span>View Our Work</span>
                <ArrowRight className="w-4 h-4 btn-arrow" />
              </a>
            </div>

            <p className="text-[11px] font-mono tracking-widest text-white/40 uppercase">
              Websites. Apps. Commercials.
            </p>
          </div>
        </div>

        {/* Minimal Bottom Bar: Frame Counter & Status */}
        <div className="absolute bottom-6 left-0 right-0 z-30 pointer-events-none">
          <div className="container flex items-center justify-between">
            {/* Scroll Indicator */}
            <div className="flex items-center gap-2 text-[10px] sm:text-[11px] font-mono text-white/50 tracking-wider">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#00D6FF] animate-pulse" />
              <span>SCROLL AXIS</span>
            </div>

            {/* Frame Counter Badge */}
            <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-black/60 backdrop-blur-md text-[11px] font-mono text-white/60">
              <span className="text-[#00D6FF] font-medium">
                {String(activeFrameIndex + 1).padStart(3, '0')}
              </span>
              <span>/</span>
              <span>{String(TOTAL_FRAMES).padStart(3, '0')}</span>
            </div>
          </div>
        </div>

        {/* Seamless bottom fade into next section */}
        <div className="absolute bottom-0 left-0 right-0 h-28 pointer-events-none z-20 bg-gradient-to-b from-transparent to-[#050505]" />
      </div>
    </div>
  );
}
