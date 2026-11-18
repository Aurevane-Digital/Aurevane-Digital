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

const ANCHOR_FRAMES = [0, 45, 90, 135, 180];

export const WorkShowcase: React.FC = () => {
  const pinContainerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const preloaderBadgeRef = useRef<HTMLDivElement>(null);
  const preloaderTextRef = useRef<HTMLSpanElement>(null);

  // Compressed blobs (~7.4MB total) + sliding GPU ImageBitmap cache + fallback HTMLImageElements
  const blobsRef = useRef<Map<number, Blob>>(new Map());
  const bitmapsRef = useRef<Map<number, ImageBitmap>>(new Map());
  const fallbackImgsRef = useRef<Map<number, HTMLImageElement>>(new Map());
  const decodingSetRef = useRef<Set<number>>(new Set());
  const isMountedRef = useRef<boolean>(true);

  const targetFrameRef = useRef<number>(0);
  const currentFrameRef = useRef<number>(0);
  const lastDrawnFrameRef = useRef<number>(-1);
  const loadedCountRef = useRef<number>(0);
  const canvasSizeRef = useRef<{ w: number; h: number }>({ w: 0, h: 0 });
  const panelCacheRef = useRef<
    Array<{ opacity: string; y: string; vis: string; interactive: boolean }>
  >([]);

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

  const getCanvasContext = useCallback((): CanvasRenderingContext2D | null => {
    if (ctxRef.current) return ctxRef.current;
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const ctx =
      canvas.getContext('2d', { alpha: false, desynchronized: true }) ||
      canvas.getContext('2d', { alpha: false }) ||
      canvas.getContext('2d');
    ctxRef.current = ctx;
    return ctx;
  }, []);

  /**
   * Draw specific frame onto canvas using GPU-ready ImageBitmap (0.1ms blit) or nearest fallback.
   */
  const drawFrame = useCallback(
    (frameIndex: number) => {
      const canvas = canvasRef.current;
      const ctx = getCanvasContext();
      if (!canvas || !ctx) return;

      let source: ImageBitmap | HTMLImageElement | undefined =
        bitmapsRef.current.get(frameIndex) || fallbackImgsRef.current.get(frameIndex);

      if (!source) {
        let minDiff = Infinity;
        bitmapsRef.current.forEach((bmp, idx) => {
          const diff = Math.abs(idx - frameIndex);
          if (diff < minDiff) {
            minDiff = diff;
            source = bmp;
          }
        });
        if (!source) {
          fallbackImgsRef.current.forEach((img, idx) => {
            if (img.complete && img.naturalWidth > 0) {
              const diff = Math.abs(idx - frameIndex);
              if (diff < minDiff) {
                minDiff = diff;
                source = img;
              }
            }
          });
        }
      }

      if (!source) return;

      const clientWidth = canvas.clientWidth;
      const clientHeight = canvas.clientHeight;
      if (clientWidth <= 0 || clientHeight <= 0) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const rawW = clientWidth * dpr;
      const rawH = clientHeight * dpr;
      const maxDimScale = Math.min(1, 2240 / Math.max(1, rawW), 1440 / Math.max(1, rawH));
      const targetW = Math.max(1, Math.round(rawW * maxDimScale));
      const targetH = Math.max(1, Math.round(rawH * maxDimScale));

      if (canvasSizeRef.current.w !== targetW || canvasSizeRef.current.h !== targetH) {
        canvas.width = targetW;
        canvas.height = targetH;
        canvasSizeRef.current = { w: targetW, h: targetH };
      }

      const imgW =
        source instanceof ImageBitmap ? source.width : source.naturalWidth || 1920;
      const imgH =
        source instanceof ImageBitmap ? source.height : source.naturalHeight || 1080;
      const isMobile = clientWidth < 768;

      const scale = isMobile
        ? Math.min(targetW / imgW, targetH / imgH)
        : Math.max(targetW / imgW, targetH / imgH);

      const drawW = imgW * scale;
      const drawH = imgH * scale;
      const drawX = (targetW - drawW) / 2;
      const drawY = (targetH - drawH) / 2;

      if (drawX > 0.5 || drawY > 0.5) {
        ctx.fillStyle = '#FFF8F1';
        ctx.fillRect(0, 0, targetW, targetH);
      }

      ctx.drawImage(source, drawX, drawY, drawW, drawH);
      lastDrawnFrameRef.current = frameIndex;
    },
    [getCanvasContext]
  );

  const evictFarBitmaps = useCallback((centerFrame: number) => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const maxBitmaps = isMobile ? 54 : 110;
    if (bitmapsRef.current.size <= maxBitmaps) return;

    const pinned = new Set(ANCHOR_FRAMES);
    const candidates: Array<{ frame: number; dist: number }> = [];
    bitmapsRef.current.forEach((_, idx) => {
      if (!pinned.has(idx)) {
        candidates.push({ frame: idx, dist: Math.abs(idx - centerFrame) });
      }
    });

    candidates.sort((a, b) => b.dist - a.dist);
    const excess = bitmapsRef.current.size - maxBitmaps;
    for (let i = 0; i < excess && i < candidates.length; i++) {
      const idx = candidates[i].frame;
      const bmp = bitmapsRef.current.get(idx);
      if (bmp && typeof bmp.close === 'function') bmp.close();
      bitmapsRef.current.delete(idx);
    }
  }, []);

  const decodeFrame = useCallback(
    async (frameIndex: number) => {
      if (!isMountedRef.current) return;
      if (bitmapsRef.current.has(frameIndex) || decodingSetRef.current.has(frameIndex)) return;
      const blob = blobsRef.current.get(frameIndex);
      if (!blob) return;

      decodingSetRef.current.add(frameIndex);
      try {
        const bitmap = await createImageBitmap(blob);
        if (!isMountedRef.current) {
          if (typeof bitmap.close === 'function') bitmap.close();
          return;
        }
        bitmapsRef.current.set(frameIndex, bitmap);
        evictFarBitmaps(targetFrameRef.current);

        const activeRounded = Math.round(currentFrameRef.current);
        if (frameIndex === 0 || Math.abs(frameIndex - activeRounded) <= 2) {
          if (frameIndex === 0) setIsFirstFrameReady(true);
          drawFrame(activeRounded);
        }
      } catch {
        const img = new Image();
        img.decoding = 'async';
        img.src = getWorkFrameUrl(frameIndex);
        try {
          if (typeof img.decode === 'function') await img.decode();
          if (isMountedRef.current) {
            fallbackImgsRef.current.set(frameIndex, img);
            if (frameIndex === 0) {
              setIsFirstFrameReady(true);
              drawFrame(Math.round(currentFrameRef.current));
            }
          }
        } catch {
          // Ignore single decode error
        }
      } finally {
        decodingSetRef.current.delete(frameIndex);
      }
    },
    [drawFrame, evictFarBitmaps]
  );

  const ensureAheadDecoded = useCallback(
    (centerFrame: number) => {
      const radiusBack = 16;
      const radiusAhead = 32;
      for (let offset = 0; offset <= radiusAhead; offset++) {
        const fAhead = centerFrame + offset;
        if (fAhead < TOTAL_WORK_FRAMES && blobsRef.current.has(fAhead) && !bitmapsRef.current.has(fAhead)) {
          void decodeFrame(fAhead);
        }
        if (offset > 0 && offset <= radiusBack) {
          const fBack = centerFrame - offset;
          if (fBack >= 0 && blobsRef.current.has(fBack) && !bitmapsRef.current.has(fBack)) {
            void decodeFrame(fBack);
          }
        }
      }
    },
    [decodeFrame]
  );

  /**
   * Priority-based frame preloader:
   * - Fetches frame 0 + anchors [45, 90, 135, 180] + runway [1..24] immediately.
   * - Workers always fetch nearest frame to user's scroll position next.
   * - Updates badge directly in DOM (zero React re-renders per loaded frame).
   */
  useEffect(() => {
    isMountedRef.current = true;
    const controller = new AbortController();
    loadedCountRef.current = 0;

    const updateProgressBadgeDom = (count: number) => {
      if (preloaderTextRef.current) {
        const pct = Math.min(100, Math.round((count / TOTAL_WORK_FRAMES) * 100));
        preloaderTextRef.current.textContent = `Preloading Frame Archive: ${pct}% (${count}/${TOTAL_WORK_FRAMES})`;
      }
      if (preloaderBadgeRef.current && count >= TOTAL_WORK_FRAMES) {
        preloaderBadgeRef.current.style.opacity = '0';
        preloaderBadgeRef.current.style.visibility = 'hidden';
      }
    };

    const fetchFrame = async (index: number): Promise<void> => {
      if (!isMountedRef.current || blobsRef.current.has(index)) return;
      try {
        const res = await fetch(getWorkFrameUrl(index), {
          signal: controller.signal,
          cache: 'force-cache',
        });
        if (!res.ok || !isMountedRef.current) return;
        const blob = await res.blob();
        if (!isMountedRef.current) return;

        blobsRef.current.set(index, blob);
        loadedCountRef.current += 1;
        updateProgressBadgeDom(loadedCountRef.current);

        const dist = Math.abs(index - targetFrameRef.current);
        if (ANCHOR_FRAMES.includes(index) || dist <= 36) {
          await decodeFrame(index);
        }
      } catch {
        // Ignore aborted or failed frame fetches
      }
    };

    const pending = new Set<number>();
    for (let i = 0; i < TOTAL_WORK_FRAMES; i++) {
      pending.add(i);
    }

    const priorityHead = [
      0,
      ...ANCHOR_FRAMES,
      ...Array.from({ length: 24 }, (_, k) => k + 1),
    ];

    const pickNextFrame = (): number | null => {
      for (const pf of priorityHead) {
        if (pending.has(pf)) {
          pending.delete(pf);
          return pf;
        }
      }
      if (pending.size === 0) return null;

      const target = targetFrameRef.current;
      let bestFrame = -1;
      let bestDist = Infinity;
      pending.forEach((f) => {
        const d = Math.abs(f - target);
        if (d < bestDist) {
          bestDist = d;
          bestFrame = f;
        }
      });
      if (bestFrame !== -1) {
        pending.delete(bestFrame);
        return bestFrame;
      }
      return null;
    };

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const concurrency = isMobile ? 6 : 8;

    const runWorker = async () => {
      while (isMountedRef.current && !controller.signal.aborted) {
        const next = pickNextFrame();
        if (next === null) break;
        await fetchFrame(next);
      }
    };

    for (let w = 0; w < concurrency; w++) {
      void runWorker();
    }

    return () => {
      isMountedRef.current = false;
      controller.abort();
      bitmapsRef.current.forEach((bmp) => {
        if (typeof bmp.close === 'function') bmp.close();
      });
      bitmapsRef.current.clear();
      blobsRef.current.clear();
    };
  }, [decodeFrame]);

  // Redraw active frame cleanly on resize
  useEffect(() => {
    const handleResize = () => {
      canvasSizeRef.current = { w: 0, h: 0 };
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
   * GSAP's scrub ticker updates canvas & panels directly when scroll changes (zero idle RAF loop).
   */
  useIsomorphicLayoutEffect(() => {
    if (prefersReducedMotion) return;

    const pinContainer = pinContainerRef.current;
    const canvas = canvasRef.current;
    if (!pinContainer || !canvas) return;

    const updatePanels = (frame: number) => {
      for (let idx = 0; idx < WORK_PROJECTS.length; idx++) {
        const el = panelRefs.current[idx];
        if (!el) continue;

        const { opacity, y } = getProjectOverlayState(
          WORK_PROJECTS[idx],
          idx,
          WORK_PROJECTS.length,
          frame
        );
        const isVisible = opacity > 0.005;
        const isInteractive = opacity > 0.15;
        const opStr = opacity <= 0.005 ? '0' : opacity.toFixed(3);
        const yStr = y.toFixed(2);
        const visStr = isVisible ? 'visible' : 'hidden';

        const prev = panelCacheRef.current[idx];
        if (prev && prev.vis === 'hidden' && visStr === 'hidden') {
          continue;
        }
        if (prev && prev.opacity === opStr && prev.y === yStr && prev.vis === visStr) {
          continue;
        }

        el.style.opacity = opStr;
        el.style.transform = `translate3d(0, ${yStr}px, 0)`;
        el.style.visibility = visStr;
        if (!prev || prev.interactive !== isInteractive) {
          el.style.pointerEvents = isInteractive ? 'auto' : 'none';
          el.setAttribute('aria-hidden', isInteractive ? 'false' : 'true');
        }
        panelCacheRef.current[idx] = {
          opacity: opStr,
          y: yStr,
          vis: visStr,
          interactive: isInteractive,
        };
      }
    };

    panelCacheRef.current = [];
    const scrubProxy = { frame: 0 };

    const ctx = gsap.context(() => {
      gsap.to(scrubProxy, {
        frame: TOTAL_WORK_FRAMES - 1,
        ease: 'none',
        scrollTrigger: {
          trigger: pinContainer,
          start: 'top top',
          end: SCROLL_DISTANCE,
          pin: true,
          scrub: 0.45,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          refreshPriority: 1,
          onUpdate: (self) => {
            targetFrameRef.current = Math.round(self.progress * (TOTAL_WORK_FRAMES - 1));
          },
        },
        onUpdate: () => {
          currentFrameRef.current = scrubProxy.frame;
          const frameToDraw = Math.min(
            TOTAL_WORK_FRAMES - 1,
            Math.max(0, Math.round(scrubProxy.frame))
          );

          if (frameToDraw !== lastDrawnFrameRef.current) {
            drawFrame(frameToDraw);
            ensureAheadDecoded(frameToDraw);
          }

          updatePanels(scrubProxy.frame);
        },
      });
    }, pinContainer);

    ScrollTrigger.refresh();
    updatePanels(0);
    drawFrame(0);

    return () => {
      ctx.revert();
    };
  }, [prefersReducedMotion, drawFrame, ensureAheadDecoded]);

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

          {/* Subtle preloading progress indicator (updated directly via DOM refs — zero React re-renders) */}
          <div
            ref={preloaderBadgeRef}
            className={`absolute bottom-4 left-6 z-20 flex items-center gap-3 transition-opacity duration-700 pointer-events-none ${
              isFirstFrameReady ? 'opacity-35 hover:opacity-100' : 'opacity-90'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#9E5249] animate-pulse" />
            <span
              ref={preloaderTextRef}
              className="text-[10px] uppercase font-mono tracking-widest text-[#59544E]"
            >
              Preloading Frame Archive: 0% (0/{TOTAL_WORK_FRAMES})
            </span>
          </div>
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
