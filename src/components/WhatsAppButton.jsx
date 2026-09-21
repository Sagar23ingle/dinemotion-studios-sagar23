import React, { useState } from 'react';

export default function WhatsAppButton() {
  const [isHovered, setIsHovered] = useState(false);
  const phoneNumber = '9209469877';
  const whatsappUrl = `https://wa.me/91${phoneNumber}?text=Hello%20Dinemotion%20Studios%2C%20I%20would%20like%20to%20inquire%20about%20a%20project.`;

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex items-center gap-2.5 pointer-events-auto select-none">
      {/* Tooltip on hover */}
      <div
        className={`hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/10 text-xs font-mono text-white/90 shadow-xl transition-all duration-300 pointer-events-none ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
        }`}
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
        <span>Chat on WhatsApp</span>
      </div>

      {/* Floating Action Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp with Dinemotion Studios (+91 9209469877)"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#128C7E] via-[#25D366] to-[#25D366] text-white shadow-[0_4px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_35px_rgba(37,211,102,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#25D366]/60"
      >
        {/* Subtle glowing animated pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping pointer-events-none" />

        {/* Official WhatsApp SVG Icon */}
        <svg
          className="w-6 h-6 sm:w-7 sm:h-7 fill-white relative z-10 transition-transform duration-300 group-hover:scale-110"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.507 14.307l-.009.075c-.286.99-1.206 1.776-2.222 1.896-.744.088-1.748-.093-3.238-.802-1.992-.95-3.522-2.735-4.385-3.957-.468-.662-.843-1.464-.843-2.235 0-.96.425-1.758.983-2.316.208-.208.455-.316.717-.316.143 0 .284.032.413.093.425.2.784.992.936 1.375.127.318.172.585.04.832-.08.152-.18.293-.284.417-.116.138-.22.25-.333.375-.125.138-.07.317.022.476.545.94 1.34 1.734 2.278 2.279.16.092.339.146.477.022.124-.112.237-.217.374-.333.125-.104.266-.204.418-.284.247-.132.514-.087.832.04.383.152 1.175.511 1.375.936.06.129.093.27.093.413 0 .262-.108.509-.316.717zM12 2C6.477 2 2 6.477 2 12c0 1.946.557 3.762 1.523 5.302L2.2 21.8l4.633-1.305C8.32 21.417 10.103 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.2c-1.636 0-3.17-.468-4.48-1.28l-.32-.198-3.08.868.867-3.08-.198-.32C4.168 14.97 3.7 13.536 3.7 12c0-4.577 3.723-8.3 8.3-8.3s8.3 3.723 8.3 8.3-3.723 8.3-8.3 8.3z" />
        </svg>
      </a>
    </div>
  );
}
