import React, { useEffect, useRef, useState, useMemo } from 'react';
import { ArrowRight } from 'lucide-react';
import { CASE_STUDIES } from '../data/caseStudies';
import { CaseStudy } from '../types';
import { getWorkFrameUrl } from '../utils/frames';

interface SelectedWorkProps {
  onSelectCaseStudy: (study: CaseStudy) => void;
}

/**
 * EDITABLE FRAME-TO-PROJECT MAPPING:
 * Adjust startFrame / endFrame to fine-tune transition points.
 * Total frames in sequence: 181 (f_000.webp to f_180.webp)
 */
export const WORK_PROJECT_FRAMES = [
  {
    id: 'junk-bolt',
    number: '01',
    totalCount: '05',
    displayTitle: '01 — JUNK BOLT',
    category: 'Junk Removal & Hauling',
    startFrame: 0,
    endFrame: 38,
    tagline: 'Visual Truck Volume Calculator & Instant Booking Dispatch',
  },
  {
    id: 'vision-excavation',
    number: '02',
    totalCount: '05',
    displayTitle: '02 — VISION EXCAVATION',
    category: 'Excavation & Construction',
    startFrame: 28,
    endFrame: 82,
    tagline: 'Heavy Earthworks & Instant Site Scope Estimator',
  },
  {
    id: 'james-iron-steel',
    number: '03',
    totalCount: '05',
    displayTitle: '03 — JAMES IRON AND STEEL',
    category: 'Steel & Metal Services',
    startFrame: 72,
    endFrame: 127,
    tagline: 'AISC Certified Structural Steel & Fabrication Tenders',
  },
  {
    id: 'action-electrical',
    number: '04',
    totalCount: '05',
    displayTitle: '04 — ACTION ELECTRICAL',
    category: 'Electrical Services',
    startFrame: 117,
    endFrame: 172,
    tagline: 'High-Voltage Grid & Emergency Commercial MEP Service',
  },
  {
    id: 'storm-shield',
    number: '05',
    totalCount: '05',
    displayTitle: '05 — STORM SHIELD',
    category: 'Roofing & Exterior Services',
    startFrame: 162,
    endFrame: 180,
    tagline: 'Architectural Roofing Restoration & Automated Drone Intake',
  },
];

const TOTAL_FRAMES = 181;
const CROSS_FADE_WINDOW = 6;
const ANCHOR_FRAMES = [0, 45, 90, 135, 180];

/**
 * Calculates smooth cross-fade opacity for each project title overlay
 * based on current frame position.
 */
function getProjectOpacity(index: number, frame: number): number {
  const current = WORK_PROJECT_FRAMES[index];
  const { startFrame, endFrame } = current;

  // Before entrance cross-fade window
  if (index > 0 && frame < startFrame - CROSS_FADE_WINDOW) {
    return 0;
  }
  // After exit cross-fade window
  if (index < WORK_PROJECT_FRAMES.length - 1 && frame > endFrame + CROSS_FADE_WINDOW) {
    return 0;
  }

  // Entrance cross-fade (if not first project)
  if (index > 0 && frame < startFrame + CROSS_FADE_WINDOW) {
    const t = (frame - (startFrame - CROSS_FADE_WINDOW)) / (2 * CROSS_FADE_WINDOW);
    return Math.max(0, Math.min(1, t));
  }

  // Exit cross-fade (if not last project)
  if (index < WORK_PROJECT_FRAMES.length - 1 && frame > endFrame - CROSS_FADE_WINDOW) {
    const t = (endFrame + CROSS_FADE_WINDOW - frame) / (2 * CROSS_FADE_WINDOW);
    return Math.max(0, Math.min(1, t));
  }

  // Fully visible in center of range
  return 1;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectCaseStudy }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<Map<number, HTMLImageElement>>(new Map());

  const [currentFrame, setCurrentFrame] = useState<number>(1);
  const latestFrameRef = useRef<number>(1);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [isImagesLoaded, setIsImagesLoaded] = useState<boolean>(false);

  // Identify active project based on frame index
  const activeProject = useMemo(() => {
    const found = WORK_PROJECT_FRAMES.find(
      (p) => currentFrame >= p.startFrame && currentFrame <= p.endFrame
    );
    return found || WORK_PROJECT_FRAMES[0];
  }, [currentFrame]);

  // Preload frames progressively for high-fps smooth scrubbing
  useEffect(() => {
    let isCancelled = false;
    const loadedImages = new Map<number, HTMLImageElement>();

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const isSaveData =
      typeof navigator !== 'undefined' &&
      Boolean(
        (navigator as unknown as { connection?: { saveData?: boolean } }).connection?.saveData
      );

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

    // (c) If prefers-reduced-motion: reduce is set, show one static frame and skip streaming
    if (prefersReducedMotion) {
      const img = new Image();
      img.src = getWorkFrameUrl(0);
      img.onload = () => {
        if (isCancelled) return;
        loadedImages.set(0, img);
        imagesRef.current = loadedImages;
        setIsImagesLoaded(true);
        drawFrame(0);
      };
      return () => {
        isCancelled = true;
      };
    }

    // (b) If navigator.connection?.saveData is true, load only anchor frames and skip streaming
    if (isSaveData) {
      const framesToLoad = ANCHOR_FRAMES;

      framesToLoad.forEach((frame) => {
        const img = new Image();
        img.src = getWorkFrameUrl(frame);
        img.onload = () => {
          if (isCancelled) return;
          loadedImages.set(frame, img);
          imagesRef.current = loadedImages;
          if (frame === 0 || (!loadedImages.has(0) && loadedImages.size === 1)) {
            setIsImagesLoaded(true);
            drawFrame(frame);
          }
        };
      });
      return () => {
        isCancelled = true;
      };
    }

    // Standard preloading flow (desktop loads all frames, mobile loads only even frames)
    const loadBatch = async (start: number, end: number) => {
      for (let i = start; i <= end; i++) {
        if (isCancelled) return;
        if (isMobile && i % 2 !== 0 && i !== 0) {
          continue;
        }
        const img = new Image();
        img.src = getWorkFrameUrl(i);
        img.onload = () => {
          if (isCancelled) return;
          loadedImages.set(i, img);
          imagesRef.current = loadedImages;
          if (i === 0) {
            setIsImagesLoaded(true);
            drawFrame(latestFrameRef.current);
          }
        };
      }
    };

    // Load initial 30 frames immediately for instant responsiveness
    loadBatch(0, 30).then(() => {
      if (isCancelled) return;
      ANCHOR_FRAMES.forEach((frame) => {
        const targetFrame = frame;
        const img = new Image();
        img.src = getWorkFrameUrl(targetFrame);
        img.onload = () => {
          if (isCancelled) return;
          loadedImages.set(targetFrame, img);
          imagesRef.current = loadedImages;
        };
      });

      // Stream background frames
      setTimeout(() => {
        if (!isCancelled) {
          loadBatch(31, TOTAL_FRAMES - 1);
        }
      }, 400);
    });
        }
      }, 150);
    });

    return () => {
      isCancelled = true;
    };
  }, []);

  // Draw frame on canvas with aspect-ratio preservation
  const drawFrame = (frameNum: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let img = imagesRef.current.get(frameNum);
    if (!img || !img.complete) {
      // Find closest loaded frame
      let closestFrame = 1;
      let minDiff = 9999;
      imagesRef.current.forEach((loadedImg, f) => {
        if (loadedImg && loadedImg.complete) {
          const diff = Math.abs(f - frameNum);
          if (diff < minDiff) {
            minDiff = diff;
            closestFrame = f;
          }
        }
      });
      img = imagesRef.current.get(closestFrame);
    }

    if (img && img.complete && img.naturalWidth > 0) {
      if (canvas.width !== img.naturalWidth || canvas.height !== img.naturalHeight) {
        canvas.width = img.naturalWidth;
        canvas.height = img.naturalHeight;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);
    }
  };

  // Redraw when currentFrame changes
  useEffect(() => {
    drawFrame(currentFrame);
  }, [currentFrame]);

  // Scroll listener strictly locked within #work section
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!containerRef.current) return;

      // (c) If prefers-reduced-motion: reduce is set, skip scroll scrubbing
      if (
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ) {
        return;
      }

      const rect = containerRef.current.getBoundingClientRect();
      const scrollableDistance = containerRef.current.offsetHeight - window.innerHeight;

      if (scrollableDistance <= 0) return;

      // Distance scrolled into the section
      const scrolled = -rect.top;
      // Progress between 0 and 1 strictly within this section
      const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));

      setScrollProgress(progress);

      // Map progress directly to frame index: 1 to TOTAL_FRAMES
      let frameIdx = Math.max(1, Math.min(TOTAL_FRAMES, Math.round(1 + progress * (TOTAL_FRAMES - 1))));

      // (a) On screens under 768px wide, scrub only even-numbered frames
      if (window.innerWidth < 768) {
        if (frameIdx % 2 !== 0) {
          frameIdx = frameIdx >= TOTAL_FRAMES ? frameIdx - 1 : frameIdx + 1;
        }
        frameIdx = Math.max(2, Math.min(TOTAL_FRAMES - 1, frameIdx));
      }

      latestFrameRef.current = frameIdx;
      setCurrentFrame(frameIdx);

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(handleScroll);
        ticking = true;
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const handleOpenCaseStudy = (projectId?: string) => {
    const idToFind = projectId || activeProject.id;
    const matchingStudy = CASE_STUDIES.find((s) => s.id === idToFind) || CASE_STUDIES[0];
    onSelectCaseStudy(matchingStudy);
  };

  return (
    <section
      id="work"
      ref={containerRef}
      className="relative w-full h-[460vh] bg-[#0A0A0A]"
    >
      {/* 
        STICKY FULL-SCREEN VIEWPORT:
        Pins firmly when #work enters top of viewport,
        unpins cleanly when #work finishes.
        Zero leftover frames or pinned overlays after this section.
      */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between z-20 pointer-events-none select-none">
        
        {/* SUBTLE HORIZONTAL PROGRESS LINE (Advances cleanly below fixed navbar as visitor scrolls) */}
        <div className="absolute top-20 md:top-24 left-0 right-0 h-[2px] bg-white/10 z-30 pointer-events-none">
          <div
            className="h-full bg-[#B89255] transition-all duration-75 ease-out"
            style={{ width: `${Math.round(scrollProgress * 100)}%` }}
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

        {/* TOP STATUS BAR: Subtle Archive Header & Minimal Project Indicator */}
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

        {/* FULL BLEED FRAME ANIMATION VIEWPORT */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none select-none z-10 overflow-hidden">
          <canvas
            ref={canvasRef}
            role="img"
            aria-label="Interactive frame-by-frame contractor website showcase animation"
            className="w-full h-full object-cover min-w-full min-h-full pointer-events-none select-none"
            style={{
              display: isImagesLoaded ? 'block' : 'none',
            }}
          />

          {!isImagesLoaded && (
            <img
              src={getWorkFrameUrl(currentFrame)}
              alt="High-Converting Contractor Website Showcase Frame"
              width={1920}
              height={1080}
              loading="eager"
              className="w-full h-full object-cover min-w-full min-h-full pointer-events-none select-none"
            />
          )}
        </div>

        {/* BOTTOM SECTION: SYNCHRONIZED HTML TEXT OVERLAYS */}
        <div className="w-full max-w-[1280px] mx-auto px-6 pb-8 sm:pb-12 z-30 pointer-events-auto">
          <div className="relative min-h-[100px] sm:min-h-[120px] flex items-end justify-between gap-6">
            <div className="relative flex-1 h-full">
              {WORK_PROJECT_FRAMES.map((project, idx) => {
                const opacity = getProjectOpacity(idx, currentFrame);
                if (opacity <= 0.001) return null;

                return (
                  <div
                    key={project.id}
                    className="absolute bottom-0 left-0 w-full transition-opacity duration-150 ease-out select-none"
                    style={{ opacity }}
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
                );
              })}
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
    </section>
  );
};
