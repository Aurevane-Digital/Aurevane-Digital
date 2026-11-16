import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import { CASE_STUDIES } from '../data/caseStudies';
import { CaseStudy } from '../types';
import { getFrameUrl } from '../utils/frames';

gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.config({ ignoreMobileResize: true });

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

interface SelectedWorkProps {
  onSelectCaseStudy: (study: CaseStudy) => void;
}

/**
 * EDITABLE FRAME-TO-PROJECT MAPPING:
 * Adjust startFrame / endFrame to fine-tune transition points without rebuilding the animation.
 * Total frames in sequence: 289 (ezgif-frame-001.jpg to ezgif-frame-289.jpg)
 */
export const WORK_PROJECT_FRAMES = [
  {
    id: 'junk-bolt',
    number: '01',
    totalCount: '05',
    displayTitle: '01 — JUNK BOLT',
    category: 'Junk Removal & Hauling',
    startFrame: 1,
    endFrame: 146,
    tagline: 'Visual Truck Volume Calculator & Instant Booking Dispatch',
  },
  {
    id: 'vision-excavation',
    number: '02',
    totalCount: '05',
    displayTitle: '02 — VISION EXCAVATION',
    category: 'Excavation & Construction',
    startFrame: 147,
    endFrame: 180,
    tagline: 'Heavy Earthworks & Instant Site Scope Estimator',
  },
  {
    id: 'james-iron-steel',
    number: '03',
    totalCount: '05',
    displayTitle: '03 — JAMES IRON AND STEEL',
    category: 'Steel & Metal Services',
    startFrame: 181,
    endFrame: 216,
    tagline: 'AISC Certified Structural Steel & Fabrication Tenders',
  },
  {
    id: 'action-electrical',
    number: '04',
    totalCount: '05',
    displayTitle: '04 — ACTION ELECTRICAL',
    category: 'Electrical Services',
    startFrame: 217,
    endFrame: 247,
    tagline: 'High-Voltage Grid & Emergency Commercial MEP Service',
  },
  {
    id: 'storm-shield',
    number: '05',
    totalCount: '05',
    displayTitle: '05 — STORM SHIELD',
    category: 'Roofing & Exterior Services',
    startFrame: 248,
    endFrame: 289,
    tagline: 'Architectural Roofing Restoration & Automated Drone Intake',
  },
];

const TOTAL_FRAMES = 289;
const CROSS_FADE_WINDOW = 6;
const ANCHOR_FRAMES = [1, 147, 181, 217, 248, 289];

function getProjectOpacity(index: number, frame: number): number {
  const current = WORK_PROJECT_FRAMES[index];
  const { startFrame, endFrame } = current;

  if (index > 0 && frame < startFrame - CROSS_FADE_WINDOW) {
    return 0;
  }
  if (index < WORK_PROJECT_FRAMES.length - 1 && frame > endFrame + CROSS_FADE_WINDOW) {
    return 0;
  }
  if (index > 0 && frame < startFrame + CROSS_FADE_WINDOW) {
    const t = (frame - (startFrame - CROSS_FADE_WINDOW)) / (2 * CROSS_FADE_WINDOW);
    return Math.max(0, Math.min(1, t));
  }
  if (index < WORK_PROJECT_FRAMES.length - 1 && frame > endFrame - CROSS_FADE_WINDOW) {
    const t = (endFrame + CROSS_FADE_WINDOW - frame) / (2 * CROSS_FADE_WINDOW);
    return Math.max(0, Math.min(1, t));
  }
  return 1;
}

function getActiveProjectIndex(frame: number): number {
  const idx = WORK_PROJECT_FRAMES.findIndex(
    (p) => frame >= p.startFrame && frame <= p.endFrame
  );
  return idx >= 0 ? idx : 0;
}

function snapFrameForViewport(rawFrame: number, isMobile: boolean): number {
  let frameIdx = Math.max(1, Math.min(TOTAL_FRAMES, Math.round(rawFrame)));
  if (isMobile) {
    if (frameIdx % 2 !== 0) {
      frameIdx = frameIdx >= TOTAL_FRAMES ? frameIdx - 1 : frameIdx + 1;
    }
    frameIdx = Math.max(2, Math.min(TOTAL_FRAMES - 1, frameIdx));
  }
  return frameIdx;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectCaseStudy }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const overlayRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Decoded GPU-ready bitmaps (sliding window) + compressed JPEG blob cache (~17MB total)
  const bitmapsRef = useRef<Map<number, ImageBitmap>>(new Map());
  const fallbackImgsRef = useRef<Map<number, HTMLImageElement>>(new Map());
  const blobsRef = useRef<Map<number, Blob>>(new Map());
  const decodingSetRef = useRef<Set<number>>(new Set());
  const pinnedFramesRef = useRef<Set<number>>(new Set());

  // Animation refs (zero React re-renders per scroll frame)
  const targetFrameRef = useRef<number>(1);
  const currentFrameFloatRef = useRef<number>(1);
  const lastDrawnFrameRef = useRef<number>(0);
  const activeProjectIndexRef = useRef<number>(0);
  const isMobileRef = useRef<boolean>(
    typeof window !== 'undefined' ? window.innerWidth <= 768 : false
  );
  const isMountedRef = useRef<boolean>(true);

  const [activeProjectIndex, setActiveProjectIndex] = useState<number>(0);
  const [isFirstFrameReady, setIsFirstFrameReady] = useState<boolean>(false);

  const activeProject = WORK_PROJECT_FRAMES[activeProjectIndex] || WORK_PROJECT_FRAMES[0];

  const getCanvasContext = (): CanvasRenderingContext2D | null => {
    if (ctxRef.current) return ctxRef.current;
    const canvas = canvasRef.current;
    if (!canvas) return null;
    const ctx =
      canvas.getContext('2d', { alpha: false, desynchronized: true }) ||
      canvas.getContext('2d', { alpha: false }) ||
      canvas.getContext('2d');
    ctxRef.current = ctx;
    return ctx;
  };

  // Match canvas backing store to full 100vw x 100svh CSS size scaled by devicePixelRatio (max 2)
  const syncCanvasDimensions = (): { width: number; height: number } | null => {
    const canvas = canvasRef.current;
    if (!canvas) return null;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const cssWidth = canvas.clientWidth || window.innerWidth;
    const cssHeight =
      canvas.clientHeight ||
      containerRef.current?.clientHeight ||
      window.innerHeight;

    const targetW = Math.max(1, Math.round(cssWidth * dpr));
    const targetH = Math.max(1, Math.round(cssHeight * dpr));

    if (canvas.width !== targetW || canvas.height !== targetH) {
      canvas.width = targetW;
      canvas.height = targetH;
    }

    return { width: canvas.width, height: canvas.height };
  };

  // Draw requested frame (or closest decoded frame) using cover math so no black bars/letterboxing ever appear
  const drawFrame = (requestedFrame: number) => {
    const canvas = canvasRef.current;
    const ctx = getCanvasContext();
    if (!canvas || !ctx) return;

    const dims = syncCanvasDimensions();
    if (!dims) return;

    let source: ImageBitmap | HTMLImageElement | undefined =
      bitmapsRef.current.get(requestedFrame) || fallbackImgsRef.current.get(requestedFrame);

    if (!source) {
      let minDiff = 9999;
      bitmapsRef.current.forEach((bmp, f) => {
        const diff = Math.abs(f - requestedFrame);
        if (diff < minDiff) {
          minDiff = diff;
          source = bmp;
        }
      });
      if (!source) {
        fallbackImgsRef.current.forEach((img, f) => {
          if (img.complete && img.naturalWidth > 0) {
            const diff = Math.abs(f - requestedFrame);
            if (diff < minDiff) {
              minDiff = diff;
              source = img;
            }
          }
        });
      }
    }

    if (!source) return;

    const imgWidth =
      source instanceof ImageBitmap ? source.width : source.naturalWidth;
    const imgHeight =
      source instanceof ImageBitmap ? source.height : source.naturalHeight;

    if (imgWidth <= 0 || imgHeight <= 0) return;

    const canvasWidth = dims.width;
    const canvasHeight = dims.height;

    const scale = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
    const drawWidth = imgWidth * scale;
    const drawHeight = imgHeight * scale;
    const offsetX = (canvasWidth - drawWidth) / 2;
    const offsetY = (canvasHeight - drawHeight) / 2;

    ctx.drawImage(source, offsetX, offsetY, drawWidth, drawHeight);
    lastDrawnFrameRef.current = requestedFrame;
  };

  // Evict far-away decoded ImageBitmaps to stay memory-safe on mobile devices
  const evictFarBitmaps = (centerFrame: number) => {
    const maxBitmaps = isMobileRef.current ? 56 : 150;
    if (bitmapsRef.current.size <= maxBitmaps) return;

    const candidates: Array<{ frame: number; dist: number }> = [];
    bitmapsRef.current.forEach((_, f) => {
      if (!pinnedFramesRef.current.has(f)) {
        candidates.push({ frame: f, dist: Math.abs(f - centerFrame) });
      }
    });

    candidates.sort((a, b) => b.dist - a.dist);
    const excess = bitmapsRef.current.size - maxBitmaps;
    for (let i = 0; i < excess && i < candidates.length; i++) {
      const f = candidates[i].frame;
      const bmp = bitmapsRef.current.get(f);
      if (bmp && typeof bmp.close === 'function') {
        bmp.close();
      }
      bitmapsRef.current.delete(f);
    }
  };

  // Off-main-thread JPEG decoding into full-resolution ImageBitmap
  const decodeBlobFrame = async (frameNum: number) => {
    if (!isMountedRef.current) return;
    if (bitmapsRef.current.has(frameNum) || decodingSetRef.current.has(frameNum)) return;
    const blob = blobsRef.current.get(frameNum);
    if (!blob) return;

    decodingSetRef.current.add(frameNum);
    try {
      const bitmap = await createImageBitmap(blob);

      if (!isMountedRef.current) {
        if (typeof bitmap.close === 'function') bitmap.close();
        return;
      }

      bitmapsRef.current.set(frameNum, bitmap);
      evictFarBitmaps(targetFrameRef.current);

      const currentSnapped = snapFrameForViewport(
        currentFrameFloatRef.current,
        isMobileRef.current
      );
      if (frameNum === 1 || frameNum === 2 || Math.abs(frameNum - currentSnapped) <= 2) {
        setIsFirstFrameReady(true);
        drawFrame(currentSnapped);
      }
    } catch {
      const img = new Image();
      img.decoding = 'async';
      img.src = getFrameUrl(frameNum);
      try {
        if (typeof img.decode === 'function') {
          await img.decode();
        }
        if (isMountedRef.current) {
          fallbackImgsRef.current.set(frameNum, img);
          if (frameNum === 1 || frameNum === 2) {
            setIsFirstFrameReady(true);
            drawFrame(
              snapFrameForViewport(currentFrameFloatRef.current, isMobileRef.current)
            );
          }
        }
      } catch {
        // Ignore single-frame decode error
      }
    } finally {
      decodingSetRef.current.delete(frameNum);
    }
  };

  // Pre-decode fetched blobs around the active frame ahead of scroll
  const ensureAheadDecoded = (centerFrame: number) => {
    const step = isMobileRef.current ? 2 : 1;
    const radiusBack = isMobileRef.current ? 10 : 12;
    const radiusAhead = isMobileRef.current ? 18 : 20;

    for (let offset = 0; offset <= Math.max(radiusBack, radiusAhead); offset += step) {
      const fAhead = centerFrame + offset;
      if (offset <= radiusAhead && fAhead <= TOTAL_FRAMES) {
        const snapped = snapFrameForViewport(fAhead, isMobileRef.current);
        if (blobsRef.current.has(snapped) && !bitmapsRef.current.has(snapped)) {
          void decodeBlobFrame(snapped);
        }
      }
      if (offset > 0 && offset <= radiusBack) {
        const fBack = centerFrame - offset;
        if (fBack >= 1) {
          const snapped = snapFrameForViewport(fBack, isMobileRef.current);
          if (blobsRef.current.has(snapped) && !bitmapsRef.current.has(snapped)) {
            void decodeBlobFrame(snapped);
          }
        }
      }
    }
  };

  // Update visual overlays and progress bar directly in DOM without React reconciliation
  const applyVisualOverlays = (frameFloat: number, progress: number) => {
    if (progressBarRef.current) {
      progressBarRef.current.style.transform = `scaleX(${progress.toFixed(4)})`;
    }

    for (let i = 0; i < WORK_PROJECT_FRAMES.length; i++) {
      const el = overlayRefs.current[i];
      if (!el) continue;
      const opacity = getProjectOpacity(i, frameFloat);
      el.style.opacity = opacity <= 0.002 ? '0' : opacity.toFixed(3);
      el.style.visibility = opacity <= 0.002 ? 'hidden' : 'visible';
    }

    const snappedForProject = Math.max(1, Math.min(TOTAL_FRAMES, Math.round(frameFloat)));
    const nextProjectIdx = getActiveProjectIndex(snappedForProject);
    if (nextProjectIdx !== activeProjectIndexRef.current) {
      activeProjectIndexRef.current = nextProjectIdx;
      setActiveProjectIndex(nextProjectIdx);
    }
  };

  // Priority-based frame preloader (fetches nearest to user's scroll position first)
  useEffect(() => {
    isMountedRef.current = true;
    const controller = new AbortController();

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const isSaveData =
      typeof navigator !== 'undefined' &&
      Boolean(
        (navigator as unknown as { connection?: { saveData?: boolean } }).connection?.saveData
      );

    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;
    isMobileRef.current = isMobile;

    const pinnedList = isMobile
      ? ANCHOR_FRAMES.map((f) => (f === 1 ? 2 : f % 2 !== 0 ? f + 1 : f))
      : ANCHOR_FRAMES;
    pinnedFramesRef.current = new Set([1, ...pinnedList]);

    const fetchFrame = async (frameNum: number): Promise<void> => {
      if (!isMountedRef.current || blobsRef.current.has(frameNum)) return;
      try {
        const res = await fetch(getFrameUrl(frameNum), {
          signal: controller.signal,
          cache: 'force-cache',
        });
        if (!res.ok || !isMountedRef.current) return;
        const blob = await res.blob();
        blobsRef.current.set(frameNum, blob);

        const dist = Math.abs(frameNum - targetFrameRef.current);
        if (pinnedFramesRef.current.has(frameNum) || dist <= 26) {
          await decodeBlobFrame(frameNum);
        }
      } catch {
        // Ignore aborted or failed frame fetches
      }
    };

    if (prefersReducedMotion) {
      void fetchFrame(1);
      return () => {
        isMountedRef.current = false;
        controller.abort();
      };
    }

    if (isSaveData) {
      Promise.all(pinnedList.map((f) => fetchFrame(f)));
      return () => {
        isMountedRef.current = false;
        controller.abort();
      };
    }

    const allNeeded: number[] = [];
    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      if (isMobile && i % 2 !== 0) continue;
      allNeeded.push(i);
    }

    const pending = new Set<number>(allNeeded);
    const priorityHead = [
      isMobile ? 2 : 1,
      ...pinnedList,
      ...(isMobile ? [4, 6, 8, 10, 12, 14, 16, 18, 20] : [2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 14, 16]),
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

    const concurrency = isMobile ? 4 : 6;
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
  }, []);

  // GSAP ScrollTrigger pinned scrub timeline with matchMedia (150% desktop, 120% mobile)
  useIsomorphicLayoutEffect(() => {
    const section = containerRef.current;
    if (!section) return;

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    syncCanvasDimensions();

    if (prefersReducedMotion) {
      applyVisualOverlays(1, 0);
      drawFrame(1);
      return;
    }

    const frameState = { frame: 1, progress: 0 };

    const updateScrubbedFrame = () => {
      currentFrameFloatRef.current = frameState.frame;
      targetFrameRef.current = frameState.frame;

      const displayFrame = snapFrameForViewport(
        frameState.frame,
        isMobileRef.current
      );

      if (displayFrame !== lastDrawnFrameRef.current) {
        drawFrame(displayFrame);
        ensureAheadDecoded(displayFrame);
      }

      applyVisualOverlays(frameState.frame, frameState.progress);
    };

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      const setupTimeline = (endDistance: string) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: endDistance,
            pin: true,
            scrub: 0.8,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            refreshPriority: 1,
            onUpdate: (self) => {
              targetFrameRef.current = 1 + self.progress * (TOTAL_FRAMES - 1);
            },
          },
        });

        tl.to(frameState, {
          frame: TOTAL_FRAMES,
          progress: 1,
          ease: 'none',
          onUpdate: updateScrubbedFrame,
        });
      };

      mm.add('(min-width: 769px)', () => {
        isMobileRef.current = false;
        setupTimeline('+=150%');
      });

      mm.add('(max-width: 768px)', () => {
        isMobileRef.current = true;
        setupTimeline('+=120%');
      });
    }, section);

    let orientationTimer: number | undefined;
    const handleViewportChange = () => {
      isMobileRef.current = window.innerWidth <= 768;
      syncCanvasDimensions();
      const currentDisplay = snapFrameForViewport(
        currentFrameFloatRef.current,
        isMobileRef.current
      );
      drawFrame(currentDisplay);
      ScrollTrigger.refresh();
    };

    const handleOrientationChange = () => {
      handleViewportChange();
      window.clearTimeout(orientationTimer);
      orientationTimer = window.setTimeout(handleViewportChange, 150);
    };

    window.addEventListener('resize', handleViewportChange, { passive: true });
    window.addEventListener('orientationchange', handleOrientationChange, {
      passive: true,
    });

    ScrollTrigger.refresh();
    applyVisualOverlays(1, 0);

    return () => {
      window.clearTimeout(orientationTimer);
      window.removeEventListener('resize', handleViewportChange);
      window.removeEventListener('orientationchange', handleOrientationChange);
      ctx.revert();
    };
  }, []);

  const handleOpenCaseStudy = (projectId?: string) => {
    const idToFind = projectId || activeProject.id;
    const matchingStudy = CASE_STUDIES.find((s) => s.id === idToFind) || CASE_STUDIES[0];
    onSelectCaseStudy(matchingStudy);
  };

  return (
    <section id="work" className="relative w-full">
      <div
        ref={containerRef}
        className="relative w-full h-[100svh] overflow-hidden bg-[#0A0A0A]"
      >
      {/* FULL-SCREEN PINNED CANVAS (100vw x 100svh, cover-cropped with zero black bars) */}
      <canvas
        ref={canvasRef}
        role="img"
        aria-label="Interactive frame-by-frame contractor website showcase animation"
        className="absolute top-0 left-0 w-[100vw] h-[100svh] pointer-events-none select-none z-10 will-change-contents"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100svh',
          opacity: isFirstFrameReady ? 1 : 0,
        }}
      />

      {!isFirstFrameReady && (
        <img
          src={getFrameUrl(1)}
          alt="High-Converting Contractor Website Showcase Frame"
          width={1920}
          height={1080}
          loading="eager"
          decoding="async"
          className="pointer-events-none select-none z-10 object-cover object-center"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100svh',
          }}
        />
      )}

      {/* OVERLAY CHROME LAYER */}
      <div className="relative z-20 w-full h-full flex flex-col justify-between pointer-events-none select-none">
        {/* SUBTLE HORIZONTAL PROGRESS LINE (GPU scaleX transform — zero layout reflows) */}
        <div className="absolute top-20 md:top-24 left-0 right-0 h-[2px] bg-white/10 z-30 pointer-events-none">
          <div
            ref={progressBarRef}
            className="h-full w-full bg-[#B89255] origin-left will-change-transform"
            style={{ transform: 'scaleX(0)' }}
          />
        </div>

        {/* PROTECTIVE TOP CONTRAST SCRIM FOR TEXT OVER CANVAS FRAMES */}
        <div
          className="pointer-events-none absolute top-0 inset-x-0 h-52 bg-gradient-to-b from-[#0A0A0A]/85 via-[#0A0A0A]/45 to-transparent z-20"
          aria-hidden="true"
        />

        {/* PROTECTIVE BOTTOM CONTRAST SCRIM FOR TEXT OVER CANVAS FRAMES */}
        <div
          className="pointer-events-none absolute bottom-0 inset-x-0 h-56 bg-gradient-to-t from-[#0A0A0A]/90 via-[#0A0A0A]/55 to-transparent z-20"
          aria-hidden="true"
        />

        {/* TOP STATUS BAR */}
        <div className="w-full max-w-[1280px] mx-auto px-6 pt-24 md:pt-28 flex items-center justify-between gap-4 z-30 pointer-events-auto">
          <div className="flex items-center gap-2">
            <h2 className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.28em] text-[#FAFAFA]/85">
              Selected Work / Contractor Website Design Portfolio
            </h2>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-mono text-[#FAFAFA]/65">
              Project
            </span>
            <div className="font-mono text-sm sm:text-base tracking-widest text-[#FAFAFA] flex items-baseline gap-1 tabular-nums">
              <span className="text-[#B89255] font-bold">{activeProject.number}</span>
              <span className="text-white/40 text-xs">/</span>
              <span className="text-xs text-[#FAFAFA]/65">05</span>
            </div>
          </div>
        </div>

        {/* BOTTOM SECTION: SYNCHRONIZED HTML TEXT OVERLAYS */}
        <div className="w-full max-w-[1280px] mx-auto px-6 pb-8 sm:pb-12 z-30 pointer-events-auto">
          <div className="relative min-h-[100px] sm:min-h-[120px] flex items-end justify-between gap-6">
            <div className="relative flex-1 h-full">
              {WORK_PROJECT_FRAMES.map((project, idx) => (
                <div
                  key={project.id}
                  ref={(el) => {
                    overlayRefs.current[idx] = el;
                  }}
                  className="absolute bottom-0 left-0 w-full select-none will-change-[opacity]"
                  style={{
                    opacity: idx === 0 ? 1 : 0,
                    visibility: idx === 0 ? 'visible' : 'hidden',
                  }}
                >
                  <div className="mb-1.5 sm:mb-2">
                    <span className="inline-block font-mono text-[10px] uppercase tracking-[0.25em] text-[#B89255] font-semibold">
                      Concept Project
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-4xl md:text-5xl text-[#FAFAFA] font-semibold tracking-tight uppercase leading-none">
                    {project.displayTitle}
                  </h3>

                  <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm md:text-base text-[rgba(250,250,250,0.75)] tracking-wider uppercase font-mono">
                    {project.category}
                  </p>
                </div>
              ))}
            </div>

            <div className="shrink-0 mb-1 hidden sm:block">
              <button
                onClick={() => handleOpenCaseStudy()}
                aria-label={`Inspect ${activeProject.displayTitle} case study blueprint`}
                className="btn-editorial inline-flex items-center gap-2 px-6 py-3 bg-[#B89255] text-[#141210] hover:bg-[#cfa867] text-xs font-semibold uppercase tracking-[0.16em] rounded-sm transition-colors cursor-pointer group shadow-md"
              >
                <span>Inspect Case Study</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};
