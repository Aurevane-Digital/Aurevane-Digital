import React, { useEffect, useState } from 'react';

export const LoadingScreen: React.FC = () => {
  const [phase, setPhase] = useState<'visible' | 'fading' | 'gone'>(() => {
    if (typeof window === 'undefined') return 'gone';
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)').matches) {
      return 'gone';
    }
    return 'visible';
  });

  useEffect(() => {
    if (phase !== 'visible') return;

    const fadeTimer = window.setTimeout(() => {
      setPhase('fading');
    }, 2400);

    const removeTimer = window.setTimeout(() => {
      setPhase('gone');
    }, 3000);

    return () => {
      window.clearTimeout(fadeTimer);
      window.clearTimeout(removeTimer);
    };
  }, [phase]);

  if (phase === 'gone') return null;

  return (
    <div
      aria-hidden="true"
      onClick={() => setPhase('fading')}
      className={`fixed inset-0 z-[100] bg-[#0A0A0A] flex flex-col items-center justify-center transition-opacity duration-600 ease-out ${
        phase === 'fading' ? 'opacity-0 pointer-events-none' : 'opacity-100 cursor-pointer'
      }`}
    >
      <div className="flex flex-col items-center gap-4 px-6 select-none">
        <div className="w-12 h-12 rounded-2xl border border-white/10 bg-white/[0.03] flex items-center justify-center">
          <svg
            viewBox="0 0 36 36"
            className="w-6 h-6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L8 29H12.2L14.6 23.2H21.4L23.8 29H28L18 6ZM16.1 19.6L18 14.8L19.9 19.6H16.1Z"
              fill="#FAFAFA"
            />
            <circle cx="27" cy="11" r="2.5" fill="var(--accent)" />
          </svg>
        </div>

        <span className="shimmer-wordmark font-sans text-2xl sm:text-3xl font-semibold tracking-[0.45em] pl-[0.45em] uppercase">
          AUREVANE
        </span>

        <span className="font-mono text-[11px] uppercase tracking-[0.35em] text-white/40">
          Digital Architecture
        </span>
      </div>
    </div>
  );
};
