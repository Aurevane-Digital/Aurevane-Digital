import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Hls from 'hls.js';
import { ArrowRight } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import { HERO_POSTER_IMAGE } from '../data/homeMedia';

interface HeroProps {
  hlsStreamUrl?: string;
}

export const Hero: React.FC<HeroProps> = ({ hlsStreamUrl }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [videoReady, setVideoReady] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Optional HLS video stream setup with graceful fallback to high-res poster image
  useEffect(() => {
    const video = videoRef.current;
    if (!video || !hlsStreamUrl) return;

    let hls: Hls | null = null;

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = hlsStreamUrl;
      video.addEventListener('loadeddata', () => setVideoReady(true), { once: true });
    } else if (Hls.isSupported()) {
      hls = new Hls({ enableWorker: true, lowLatencyMode: false });
      hls.loadSource(hlsStreamUrl);
      hls.attachMedia(video);
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play().catch(() => {});
      });
      hls.on(Hls.Events.FRAG_LOADED, () => setVideoReady(true));
      hls.on(Hls.Events.ERROR, (_evt, data) => {
        if (data.fatal) {
          setVideoReady(false);
          hls?.destroy();
        }
      });
    }

    return () => {
      hls?.destroy();
    };
  }, [hlsStreamUrl]);

  // Subtle ambient dust particles canvas (skipped on reduced motion or mobile)
  useEffect(() => {
    if (prefersReducedMotion || typeof window === 'undefined') return;
    if (window.innerWidth < 768) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let rafId = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();

    const particles = Array.from({ length: 34 }, () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.4 + 0.4,
      vx: (Math.random() - 0.5) * 0.18,
      vy: -Math.random() * 0.22 - 0.06,
      alpha: Math.random() * 0.35 + 0.1,
    }));

    const render = () => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -8) p.y = window.innerHeight + 8;
        if (p.x < -8) p.x = window.innerWidth + 8;
        if (p.x > window.innerWidth + 8) p.x = -8;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212, 255, 79, ${p.alpha})`;
        ctx.fill();
      }
      rafId = window.requestAnimationFrame(render);
    };

    rafId = window.requestAnimationFrame(render);
    window.addEventListener('resize', resize);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener('resize', resize);
    };
  }, [prefersReducedMotion]);

  return (
    <section
      id="hero"
      className="relative min-h-[100svh] w-full flex items-center justify-center overflow-hidden bg-[#0A0A0A] pt-24 pb-16 px-6 border-b border-white/[0.06]"
    >
      {/* Full-bleed poster fallback + HLS video layer */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          src={HERO_POSTER_IMAGE}
          alt="Custom residential architecture crafted by US home-service contractors at dusk"
          width={1600}
          height={900}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          referrerPolicy="no-referrer"
          className={`w-full h-full object-cover object-center ${
            prefersReducedMotion ? '' : 'animate-hero-drift'
          }`}
        />

        <video
          ref={videoRef}
          poster={HERO_POSTER_IMAGE}
          playsInline
          muted
          loop
          autoPlay
          aria-hidden="true"
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            videoReady ? 'opacity-100' : 'opacity-0'
          }`}
        />

        {/* 50% Black Overlay + Atmospheric Scrim for AA Contrast */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/75 via-black/35 to-[#0A0A0A]" />
      </div>

      {/* Subtle Dust Particle Layer */}
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="absolute inset-0 z-10 w-full h-full pointer-events-none hidden md:block"
      />

      {/* Centered Content */}
      <motion.div
        initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 max-w-[1040px] mx-auto flex flex-col items-center text-center"
      >
        {/* Eyebrow */}
        <p className="font-mono text-[12px] sm:text-[13px] leading-[1.7] uppercase tracking-[0.4em] text-[var(--accent)] mb-6">
          WEB DESIGN FOR HOME SERVICES · 2026
        </p>

        {/* Single Page H1: Sans + Instrument Serif Italic Accent */}
        <h1 className="text-[clamp(36px,5vw,64px)] font-semibold tracking-[-0.025em] leading-[1.08] text-[#FAFAFA] text-balance max-w-4xl">
          Websites that{' '}
          <span className="font-serif italic font-normal text-[var(--accent)] text-[clamp(40px,5.6vw,74px)] leading-none">
            make your phone ring
          </span>
          , not just look good.
        </h1>

        {/* Subheadline */}
        <p className="mt-6 text-[16px] leading-[1.6] text-[rgba(250,250,250,0.64)] max-w-2xl font-normal">
          Premium, custom-built websites for roofers, excavators, junk removal, electricians and
          contractors across the US.
        </p>

        {/* Dual Action Row */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link
            to="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-4 bg-[var(--accent)] text-[#0A0A0A] text-[14px] font-semibold tracking-tight rounded-[16px] hover:scale-[1.02] transition-transform duration-200 whitespace-nowrap shrink-0 shadow-[0_0_32px_-8px_rgba(212,255,79,0.5)]"
          >
            <span>Get your free mockup</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>

          <Link
            to="/our-work"
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 bg-white/[0.04] backdrop-blur-xl border border-white/15 text-[#FAFAFA] text-[14px] font-medium tracking-tight rounded-[16px] hover:border-[var(--accent)]/60 hover:bg-white/[0.08] hover:scale-[1.02] transition-all duration-200 whitespace-nowrap shrink-0"
          >
            See our work
          </Link>
        </div>
      </motion.div>
    </section>
  );
};
