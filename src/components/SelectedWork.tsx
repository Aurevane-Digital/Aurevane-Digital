import React, { useEffect, useRef, useState, useMemo } from 'react';
import { ArrowRight } from 'lucide-react';
import { CASE_STUDIES } from '../data/caseStudies';
import { CaseStudy } from '../types';
import { getFrameUrl } from '../utils/frames';

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
const ANCHOR_FRAMES = [1, 147, 181, 217, 248, 289];

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectCaseStudy }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<Map<number, HTMLImageElement>>(new Map());

  const [currentFrame, setCurrentFrame] = useState<number>(1);
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
      img.src = getFrameUrl(1);
      img.onload = () => {
        if (isCancelled) return;
        loadedImages.set(1, img);
        imagesRef.current = loadedImages;
        setIsImagesLoaded(true);
        drawFrame(1);
      };
      return () => {
        isCancelled = true;
      };
    }

    // (b) If navigator.connection?.saveData is true, load only anchor frames and skip streaming
    if (isSaveData) {
      const framesToLoad = isMobile
        ? ANCHOR_FRAMES.map((f) => (f === 1 ? 1 : f % 2 !== 0 ? f + 1 : f))
        : ANCHOR_FRAMES;

      framesToLoad.forEach((frame) => {
        const img = new Image();
        img.src = getFrameUrl(frame);
        img.onload = () => {
          if (isCancelled) return;
          loadedImages.set(frame, img);
          imagesRef.current = loadedImages;
          if (frame === 1 || (!loadedImages.has(1) && loadedImages.size === 1)) {
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
        // (a) On screens under 768px, preload only even-numbered frames (plus frame 1 for initial render)
        if (isMobile && i % 2 !== 0 && i !== 1) {
          continue;
        }
        const img = new Image();
        img.src = getFrameUrl(i);
        img.onload = () => {
          if (isCancelled) return;
          loadedImages.set(i, img);
          imagesRef.current = loadedImages;
          if (i === 1) {
            setIsImagesLoaded(true);
            drawFrame(1);
          }
        };
      }
    };

    // Load initial 30 frames immediately for instant responsiveness
    loadBatch(1, 30).then(() => {
      if (isCancelled) return;
      [147, 181, 217, 248, 289].forEach((frame) => {
        const targetFrame = isMobile && frame % 2 !== 0 ? frame + 1 : frame;
        const img = new Image();
        img.src = getFrameUrl(targetFrame);
        img.onload = () => {
          if (isCancelled) return;
          loadedImages.set(targetFrame, img);
          imagesRef.current = loadedImages;
        };
      });

      // Stream background frames
      setTimeout(() => {
        if (!isCancelled) {
          loadBatch(31, TOTAL_FRAMES);
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

  // Scroll scrub smoothly across the intro strip viewport travel
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!containerRef.current) return;

      if (
        typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches
      ) {
        return;
      }

      const rect = containerRef.current.getBoundingClientRect();
      const totalTravel = window.innerHeight + rect.height;
      if (totalTravel <= 0) return;

      const progress = Math.max(0, Math.min(1, (window.innerHeight - rect.top) / totalTravel));
      setScrollProgress(progress);

      let frameIdx = Math.max(
        1,
        Math.min(TOTAL_FRAMES, Math.round(1 + progress * (TOTAL_FRAMES - 1)))
      );

      if (window.innerWidth < 768) {
        if (frameIdx % 2 !== 0) {
          frameIdx = frameIdx >= TOTAL_FRAMES ? frameIdx - 1 : frameIdx + 1;
        }
        frameIdx = Math.max(2, Math.min(TOTAL_FRAMES - 1, frameIdx));
      }

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
      aria-label="Architectural Frame Sequence Intro"
      className="relative w-full h-[36vh] sm:h-[42vh] min-h-[260px] max-h-[420px] bg-[#FAF5EE] border-b border-[#D9D0C3]/60 overflow-hidden"
    >
      {/* Subtle 289-frame background motion study */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none select-none overflow-hidden opacity-60">
        <canvas
          ref={canvasRef}
          role="img"
          aria-label="Subtle scroll-scrubbed architectural frame study"
          className="w-full h-full object-cover min-w-full min-h-full pointer-events-none select-none"
          style={{
            display: isImagesLoaded ? 'block' : 'none',
          }}
        />

        {!isImagesLoaded && (
          <img
            src={getFrameUrl(currentFrame)}
            alt="Contractor Website Frame Preview"
            width={1920}
            height={1080}
            loading="lazy"
            className="w-full h-full object-cover min-w-full min-h-full pointer-events-none select-none"
          />
        )}
      </div>

      {/* Soft parchment atmospheric veil for subtle editorial restraint */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-[#FAF6F0]/55 via-[#FAF6F0]/35 to-[#FAF6F0]/85 pointer-events-none"
      />

      {/* Quiet bottom progress line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#D9D0C3]/40 z-20 pointer-events-none">
        <div
          className="h-full bg-[#9E5249]/70 transition-all duration-75 ease-out"
          style={{ width: `${Math.round(scrollProgress * 100)}%` }}
        />
      </div>

      {/* Subtle architectural label & optional archive inspection */}
      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-6 flex flex-col justify-end">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="flex items-center gap-3 text-[11px] font-mono uppercase tracking-[0.22em] text-[#59544E]">
            <span>Motion Prelude</span>
            <span aria-hidden="true">·</span>
            <span>{activeProject.category}</span>
          </div>

          <button
            onClick={() => handleOpenCaseStudy()}
            aria-label={`Inspect ${activeProject.displayTitle} case study blueprint`}
            className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.18em] text-[#141210] hover:text-[#9E5249] transition-colors cursor-pointer group"
          >
            <span>Inspect {activeProject.number} / 05 Brief</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
