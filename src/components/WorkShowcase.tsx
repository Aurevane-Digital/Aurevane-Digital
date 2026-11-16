import React, { useEffect, useLayoutEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShowcaseSite, WorkPanel } from './WorkPanel';
import { getWorkFrameUrl, TOTAL_WORK_FRAMES } from '../utils/frames';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

/**
 * ============================================================================
 * CENTRAL WORK PROJECTS CONFIGURATION OBJECT
 * ============================================================================
 *
 * Sequence has 181 frames: f_000.webp through f_180.webp (1920x1080 resolution).
 *
 * Verified keyframe positions from animation timeline:
 * - Frame 0: JUNK BOLT (Initial hold state)
 * - Frame 45: VISION EXCAVATION (Arrival hold state)
 * - Frame 90: JAMES IRON AND STEEL (Arrival hold state)
 * - Frame 135: ACTION ELECTRICAL (Arrival hold state)
 * - Frame 180: STORM SHIELD (Final hold state)
 *
 * Editable transition boundaries:
 * Adjust startFrame / endFrame to modify the transition windows for each title overlay.
 */
export interface WorkProjectItem extends ShowcaseSite {
  startFrame: number;
  endFrame: number;
  peakFrame: number;
}

export const WORK_PROJECTS: WorkProjectItem[] = [
  {
    id: 'junk-bolt',
    counter: '01 / 05',
    title: '01 — JUNK BOLT',
    category: 'Junk Removal & Hauling',
    description:
      'A bold, conversion-focused site for a hauling and junk removal crew. Clear pricing, one-tap calling, and a hero built to get the phone ringing.',
    url: 'https://junk-bolt.vercel.app/',
    startFrame: 0,
    endFrame: 38,
    peakFrame: 0,
    textSide: 'right',
    verticalPercent: 30,
  },
  {
    id: 'vision-excavation',
    counter: '02 / 05',
    title: '02 — VISION EXCAVATION',
    category: 'Excavation & Construction',
    description:
      'A rugged, cinematic site for residential and commercial earthworks, with quote requests and phone calls front and centre.',
    url: 'https://vision-excavation.vercel.app/',
    startFrame: 28,
    endFrame: 82,
    peakFrame: 45,
    textSide: 'left',
    verticalPercent: 40,
  },
  {
    id: 'james-iron-steel',
    counter: '03 / 05',
    title: '03 — JAMES IRON AND STEEL',
    category: 'Steel & Metal Services',
    description:
      'Seven decades of craft presented with a confident, premium look. Services, certifications and free estimates at a glance.',
    url: 'https://jamesironsteelinc.vercel.app/',
    startFrame: 72,
    endFrame: 127,
    peakFrame: 90,
    textSide: 'right',
    verticalPercent: 51,
  },
  {
    id: 'action-electrical',
    counter: '04 / 05',
    title: '04 — ACTION ELECTRICAL',
    category: 'Electrical Services',
    description:
      'A trust-first site for commercial contractors. Licences, 24/7 dispatch and safety standards upfront.',
    url: 'https://action-electrical.vercel.app/',
    startFrame: 117,
    endFrame: 172,
    peakFrame: 135,
    textSide: 'left',
    verticalPercent: 62,
  },
  {
    id: 'storm-shield-roofing',
    counter: '05 / 05',
    title: '05 — STORM SHIELD',
    category: 'Roofing & Exterior Services',
    description:
      'A premium, claims-focused site for a storm damage and insurance restoration roofer. Free inspections and estimates made easy to book.',
    url: 'https://storm-shield-roofing-restoration.vercel.app/',
    startFrame: 162,
    endFrame: 180,
    peakFrame: 180,
    textSide: 'right',
    verticalPercent: 73,
  },
];

// Backwards-compatible alias
export const SHOWCASE_SITES: ShowcaseSite[] = WORK_PROJECTS;

const SCROLL_DISTANCE = '+=450%';
const FADE_IN_FRAMES = 10;
const FADE_OUT_FRAMES = 10;

/**
 * Calculates smooth opacity & vertical translation for project text overlays
 * based on current frame position.
 */
function getProjectOverlayState(
  project: WorkProjectItem,
  index: number,
  totalCount: number,
  frame: number
): { opacity: number; y: number } {
  const { startFrame, endFrame } = project;
  const isFirst = index === 0;
  const isLast = index === totalCount - 1;

  if (frame < startFrame || (!isLast && frame > endFrame)) {
    return { opacity: 0, y: frame < startFrame ? 28 : -28 };
  }

  // Fade-in window
  if (!isFirst && frame < startFrame + FADE_IN_FRAMES) {
    const progress = Math.max(0, Math.min(1, (frame - startFrame) / FADE_IN_FRAMES));
    const eased = 1 - Math.pow(1 - progress, 3);
    return { opacity: eased, y: 28 * (1 - eased) };
  }

  // Fade-out window
  if (!isLast && frame > endFrame - FADE_OUT_FRAMES) {
    const progress = Math.max(0, Math.min(1, (frame - (endFrame - FADE_OUT_FRAMES)) / FADE_OUT_FRAMES));
    const eased = progress * progress;
    return { opacity: 1 - eased, y: -28 * eased };
  }

  return { opacity: 1, y: 0 };
}

export const WorkShowcase: React.FC = () => {
  const pinContainerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Cached HTMLImageElement map: frameIndex -> Image
  const imagesMapRef = useRef<Map<number, HTMLImageElement>>(new Map());
  const targetFrameRef = useRef<number>(0);
  const currentFrameRef = useRef<number>(0);
  const lastDrawnFrameRef = useRef<number>(-1);

  const [loadedCount, setLoadedCount] = useState<number>(0);
  const [isFirstFrameReady, setIsFirstFrameReady] = useState<boolean>(false);

  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = () => setPrefersReducedMotion(mediaQuery.matches);
    handleChange();
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  /**
   * Draw specific frame onto canvas with high-DPI scaling and aspect-ratio preservation.
   */
  const drawFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Retrieve requested image or find nearest loaded fallback
    let img = imagesMapRef.current.get(frameIndex);
    if (!img || !img.complete || img.naturalWidth === 0) {
      let minDiff = Infinity;
      let nearest: HTMLImageElement | null = null;
      imagesMapRef.current.forEach((cachedImg, idx) => {
        if (cachedImg.complete && cachedImg.naturalWidth > 0) {
          const diff = Math.abs(idx - frameIndex);
          if (diff < minDiff) {
            minDiff = diff;
            nearest = cachedImg;
          }
        }
      });
      img = nearest || undefined;
    }

    if (!img || !img.complete || img.naturalWidth === 0) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const clientWidth = canvas.clientWidth;
    const clientHeight = canvas.clientHeight;
    const targetW = Math.round(clientWidth * dpr);
    const targetH = Math.round(clientHeight * dpr);

    if (canvas.width !== targetW || canvas.height !== targetH) {
      canvas.width = targetW;
      canvas.height = targetH;
    }

    ctx.save();
    ctx.scale(dpr, dpr);

    // Warm canvas background fill
    ctx.fillStyle = '#FFF8F1';
    ctx.fillRect(0, 0, clientWidth, clientHeight);

    // Original aspect ratio: 1920 / 1080 = 16:9
    const imgW = img.naturalWidth || 1920;
    const imgH = img.naturalHeight || 1080;
    const isMobile = clientWidth < 768;

    // Desktop: cover to fill cinematic monitor space; Mobile: contain
    const scale = isMobile
      ? Math.min(clientWidth / imgW, clientHeight / imgH)
      : Math.max(clientWidth / imgW, clientHeight / imgH);

    const drawW = imgW * scale;
    const drawH = imgH * scale;
    const drawX = (clientWidth - drawW) / 2;
    const drawY = (clientHeight - drawH) / 2;

    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(img, drawX, drawY, drawW, drawH);
    ctx.restore();

    lastDrawnFrameRef.current = frameIndex;
  }, []);

  /**
   * Preload animation frames intelligently:
   * 1. Frame 0 loads immediately so canvas displays on first render.
   * 2. Key anchor frames (0, 45, 90, 135, 180) load next.
   * 3. Remainder load sequentially in background.
   */
  useEffect(() => {
    let isCancelled = false;
    let localLoaded = 0;

    const loadImage = (index: number): Promise<HTMLImageElement> => {
      return new Promise((resolve) => {
        const existing = imagesMapRef.current.get(index);
        if (existing && existing.complete) {
          resolve(existing);
          return;
        }

        const img = new Image();
        img.src = getWorkFrameUrl(index);
        img.onload = () => {
          if (!isCancelled) {
            imagesMapRef.current.set(index, img);
            localLoaded += 1;
            setLoadedCount(localLoaded);
            if (index === 0) {
              setIsFirstFrameReady(true);
              drawFrame(0);
            }
          }
          resolve(img);
        };
        img.onerror = () => {
          // Resolve on error to avoid blocking chain
          resolve(img);
        };
      });
    };

    const startPreload = async () => {
      // Step 1: Immediate priority frame 0
      await loadImage(0);
      if (isCancelled) return;

      // Step 2: Key anchor arrival frames
      const anchors = [45, 90, 135, 180];
      await Promise.all(anchors.map((idx) => loadImage(idx)));
      if (isCancelled) return;

      // Step 3: Concurrently batch load remaining frames
      const remaining: number[] = [];
      for (let i = 1; i < TOTAL_WORK_FRAMES; i++) {
        if (!anchors.includes(i)) remaining.push(i);
      }

      // Batch load in chunks of 6 to prevent connection saturation
      const chunkSize = 6;
      for (let i = 0; i < remaining.length; i += chunkSize) {
        if (isCancelled) break;
        const chunk = remaining.slice(i, i + chunkSize);
        await Promise.all(chunk.map((idx) => loadImage(idx)));
      }
    };

    startPreload();

    return () => {
      isCancelled = true;
    };
  }, [drawFrame]);

  // Initial draw and window resize listener
  useEffect(() => {
    const handleResize = () => {
      drawFrame(Math.round(currentFrameRef.current));
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', handleResize, { passive: true });
    return () => window.removeEventListener('resize', handleResize);
  }, [drawFrame]);

  /**
   * GSAP ScrollTrigger Scroll-Controlled Frame Pinning
   * Uses useLayoutEffect + inner pin container so GSAP's .pin-spacer never
   * reparents React's root <section> node (prevents NotFoundError: removeChild on route change).
   */
  useIsomorphicLayoutEffect(() => {
    if (prefersReducedMotion) return;

    const pinContainer = pinContainerRef.current;
    const canvas = canvasRef.current;
    if (!pinContainer || !canvas) return;

    let rafId = 0;
    let ctx: gsap.Context | undefined;
    let isCleanedUp = false;

    const updatePanels = (frame: number) => {
      WORK_PROJECTS.forEach((project, idx) => {
        const el = panelRefs.current[idx];
        if (!el) return;

        const { opacity, y } = getProjectOverlayState(project, idx, WORK_PROJECTS.length, frame);
        const isVisible = opacity > 0.005;
        const isInteractive = opacity > 0.15;

        el.style.opacity = opacity.toFixed(3);
        el.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
        el.style.visibility = isVisible ? 'visible' : 'hidden';
        el.style.pointerEvents = isInteractive ? 'auto' : 'none';
        el.setAttribute('aria-hidden', isInteractive ? 'false' : 'true');
      });
    };

    const setupScroller = () => {
      if (isCleanedUp) return;

      const scrubProxy = { frame: 0 };

      ctx = gsap.context(() => {
        gsap.to(scrubProxy, {
          frame: TOTAL_WORK_FRAMES - 1,
          ease: 'none',
          scrollTrigger: {
            trigger: pinContainer,
            start: 'top top',
            end: SCROLL_DISTANCE,
            pin: true,
            scrub: 0.4,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const progress = self.progress;
              const target = Math.min(
                TOTAL_WORK_FRAMES - 1,
                Math.max(0, Math.round(progress * (TOTAL_WORK_FRAMES - 1)))
              );
              targetFrameRef.current = target;
            },
          },
        });
      }, pinContainer);

      ScrollTrigger.refresh();
      updatePanels(0);
      drawFrame(0);

      // RAF loop for buttery 60/120fps display
      const tick = () => {
        if (isCleanedUp) return;

        const target = targetFrameRef.current;
        const current = currentFrameRef.current;
        const diff = target - current;

        if (Math.abs(diff) > 0.05) {
          currentFrameRef.current += diff * 0.25;
        } else {
          currentFrameRef.current = target;
        }

        const frameToDraw = Math.round(currentFrameRef.current);
        if (frameToDraw !== lastDrawnFrameRef.current) {
          drawFrame(frameToDraw);
        }

        updatePanels(frameToDraw);
        rafId = window.requestAnimationFrame(tick);
      };

      rafId = window.requestAnimationFrame(tick);
    };

    setupScroller();

    return () => {
      isCleanedUp = true;
      if (rafId) window.cancelAnimationFrame(rafId);
      ctx?.revert();
    };
  }, [prefersReducedMotion, drawFrame]);

  // Reduced motion static fallback
  if (prefersReducedMotion) {
    return (
      <section
        id="work"
        aria-label="Client Website Showcase"
        className="w-full bg-[#FFF8F1] py-16 md:py-24 px-6 md:px-12 lg:px-16 border-t border-b border-[#D9D0C3]/50"
      >
        <div className="max-w-5xl mx-auto">
          <div className="w-full aspect-video rounded-sm overflow-hidden bg-[#FFF8F1] border border-[#D9D0C3]/60 mb-12">
            <img
              src={getWorkFrameUrl(0)}
              alt="Desktop monitor showcase preview"
              className="w-full h-full object-contain bg-[#FFF8F1]"
            />
          </div>

          <div className="divide-y divide-[#D9D0C3]/60">
            {WORK_PROJECTS.map((site) => (
              <WorkPanel key={site.id} site={site} isStatic />
            ))}
          </div>
        </div>
      </section>
    );
  }

  const loadPercent = Math.round((loadedCount / TOTAL_WORK_FRAMES) * 100);

  return (
    <section
      id="work"
      aria-label="Interactive Scroll-Driven Work Showcase"
      className="relative w-full"
    >
      <div
        ref={pinContainerRef}
        className="relative w-full h-screen bg-[#FFF8F1] overflow-hidden flex flex-col pt-20 md:pt-0 md:block"
      >
        {/* HTML Canvas Frame Sequence Container */}
        <div className="w-full aspect-video shrink-0 md:aspect-auto md:absolute md:inset-0 md:h-full bg-[#FFF8F1] relative">
          <canvas
            ref={canvasRef}
            className="w-full h-full block pointer-events-none select-none"
            aria-label="Scroll-controlled sequence of 5 contractor websites"
          />

          {/* Subtle preloading progress indicator (fades out after initial frames load) */}
          {loadedCount < TOTAL_WORK_FRAMES && (
            <div
              className={`absolute bottom-4 left-6 z-20 flex items-center gap-3 transition-opacity duration-700 pointer-events-none ${
                isFirstFrameReady ? 'opacity-35 hover:opacity-100' : 'opacity-90'
              }`}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#9E5249] animate-pulse" />
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#59544E]">
                Preloading Frame Archive: {loadPercent}% ({loadedCount}/{TOTAL_WORK_FRAMES})
              </span>
            </div>
          )}
        </div>

        {/* Synchronized Project Title Overlays */}
        <div className="relative flex-1 w-full md:static md:w-auto md:h-full pointer-events-none">
          {WORK_PROJECTS.map((site, idx) => (
            <WorkPanel
              key={site.id}
              site={site}
              panelRef={(el) => {
                panelRefs.current[idx] = el;
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
