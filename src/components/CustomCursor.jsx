import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on non-touch devices with fine pointer
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const isInteractive = target.closest('a, button, input, textarea, select, [role="button"], .cursor-pointer');
      setIsHovered(!!isInteractive);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="hidden lg:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer subtle follower ring */}
      <div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/30 transition-transform duration-150 ease-out -translate-x-1/2 -translate-y-1/2 will-change-transform pointer-events-none"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${isHovered ? 1.8 : 1})`,
          borderColor: isHovered ? 'rgba(41, 151, 255, 0.6)' : 'rgba(255, 255, 255, 0.25)',
          backgroundColor: isHovered ? 'rgba(41, 151, 255, 0.08)' : 'transparent',
          transition: 'transform 0.15s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.2s ease, background-color 0.2s ease'
        }}
      />
      {/* Center crisp dot */}
      <div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-white transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2 will-change-transform pointer-events-none"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          backgroundColor: isHovered ? '#2997ff' : '#ffffff'
        }}
      />
    </div>
  );
}
