import React, { useRef, useEffect, useState } from 'react';

const TOTAL_FRAMES = 240;

function getFrameUrl(index) {
  const frameNum = String(index + 1).padStart(3, '0');
  return `/Use_the_uploaded_image_as_the_frames/frame_${frameNum}.png`;
}

export default function BackgroundCanvas() {
  const canvasRef = useRef(null);
  const fallbackImgRef = useRef(null);
  const imagesRef = useRef([]);
  const currentFrameRef = useRef(0);
  const targetProgressRef = useRef(0);
  const currentProgressRef = useRef(0);
  const rafIdRef = useRef(null);
  const isReducedMotionRef = useRef(false);

  const [activeFrameIndex, setActiveFrameIndex] = useState(0);

  useEffect(() => {
    isReducedMotionRef.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  // High performance Canvas drawing
  const drawFrame = (frameIndex) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Fill background with deep charcoal so zero blank gaps occur
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
      // If still not found, look forward
      if (!renderImg || !renderImg.complete || !renderImg.naturalWidth) {
        for (let i = frameIndex + 1; i < TOTAL_FRAMES; i++) {
          const next = imagesRef.current[i];
          if (next && next.complete && next.naturalWidth) {
            renderImg = next;
            break;
          }
        }
      }
    }

    // Fallback if initial frames still fetching
    if ((!renderImg || !renderImg.complete || !renderImg.naturalWidth) && fallbackImgRef.current && fallbackImgRef.current.complete) {
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
        await new Promise((r) => setTimeout(r, 15));
      }
    };

    loadFrames();

    return () => {
      isMounted = false;
    };
  }, []);

  // Resize canvas handling with DPR support
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

  // Global scroll tracking for the ENTIRE website from start to finish
  useEffect(() => {
    const handleScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (docHeight <= 0) return;

      const progress = Math.max(0, Math.min(1, window.scrollY / docHeight));
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

      // Smooth interpolation for cinematic scroll video
      const diff = targetProgressRef.current - currentProgressRef.current;
      currentProgressRef.current += diff * 0.14;

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

      rafIdRef.current = requestAnimationFrame(animate);
    };

    rafIdRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0 overflow-hidden select-none">
      {/* Instant fallback img before canvas initialization */}
      <img
        ref={fallbackImgRef}
        src="/Use_the_uploaded_image_as_the_frames/frame_001.png"
        alt="Dinemotion Studios Cinematic Background"
        onLoad={() => drawFrame(0)}
        className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none z-0"
      />

      {/* Global full-site Canvas rendering scroll animation */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none z-10 max-w-full"
      />

      {/* Cinematic Dark Vignette & Ambient Translucent Overlays */}
      <div
        className="absolute inset-0 pointer-events-none z-20"
        style={{
          background: 'linear-gradient(to bottom, rgba(5,5,5,0.25) 0%, rgba(5,5,5,0.08) 35%, rgba(5,5,5,0.12) 70%, rgba(5,5,5,0.4) 100%)'
        }}
      />
      <div
        className="absolute inset-0 pointer-events-none z-20"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(5,5,5,0.04) 0%, rgba(5,5,5,0.5) 100%)'
        }}
      />

      {/* Floating Reel Frame Status Badge (Bottom Left, avoiding WhatsApp button on bottom right) */}
      <div className="fixed bottom-5 left-6 z-30 pointer-events-none hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-black/60 backdrop-blur-md text-[11px] font-mono text-white/70 shadow-lg">
        <span className="w-1.5 h-1.5 rounded-full bg-[#00D6FF] animate-pulse" />
        <span className="text-white/40 tracking-wider">REEL</span>
        <span className="text-[#00D6FF] font-medium font-mono">
          {String(activeFrameIndex + 1).padStart(3, '0')}
        </span>
        <span className="text-white/30">/</span>
        <span className="text-white/50">{String(TOTAL_FRAMES).padStart(3, '0')}</span>
      </div>
    </div>
  );
}
