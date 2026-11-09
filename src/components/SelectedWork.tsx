import React, { useEffect, useRef, useState, useMemo } from 'react';
import { ArrowRight } from 'lucide-react';
import { CASE_STUDIES } from '../data/caseStudies';
import { CaseStudy } from '../types';

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
    domain: 'junkbolt-logistics.com',
    tagline: 'Visual Truck Volume Calculator & Instant Booking Dispatch',
    stats: [
      { label: 'Online Bookings', value: '3.4x' },
      { label: 'Intake Overhead', value: '-40%' },
    ],
  },
  {
    id: 'vision-excavation',
    number: '02',
    totalCount: '05',
    displayTitle: '02 — VISION EXCAVATION',
    category: 'Excavation & Construction',
    startFrame: 147,
    endFrame: 180,
    domain: 'visionexcavation.com',
    tagline: 'Heavy Earthworks & Instant Site Scope Estimator',
    stats: [
      { label: 'Direct Bid Volume', value: '$2.4M' },
      { label: 'Conversion Rate', value: '94%' },
    ],
  },
  {
    id: 'james-iron-steel',
    number: '03',
    totalCount: '05',
    displayTitle: '03 — JAMES IRON AND STEEL',
    category: 'Steel & Metal Services',
    startFrame: 181,
    endFrame: 216,
    domain: 'jamesironsteel.com',
    tagline: 'AISC Certified Structural Steel & Fabrication Tenders',
    stats: [
      { label: 'Commercial RFPs', value: '+180%' },
      { label: 'Tender Close', value: '38%' },
    ],
  },
  {
    id: 'action-electrical',
    number: '04',
    totalCount: '05',
    displayTitle: '04 — ACTION ELECTRICAL',
    category: 'Electrical Services',
    startFrame: 217,
    endFrame: 247,
    domain: 'actionelectrical-tx.com',
    tagline: 'High-Voltage Grid & Emergency Commercial MEP Service',
    stats: [
      { label: 'Direct Bid Pipeline', value: '$1.8M' },
      { label: 'Response Latency', value: '< 15min' },
    ],
  },
  {
    id: 'storm-shield',
    number: '05',
    totalCount: '05',
    displayTitle: '05 — STORM SHIELD',
    category: 'Roofing & Exterior Services',
    startFrame: 248,
    endFrame: 289,
    domain: 'stormshield-exteriors.com',
    tagline: 'Architectural Roofing Restoration & Automated Drone Intake',
    stats: [
      { label: 'Qualified Inspections', value: '+214%' },
      { label: 'Load Index', value: '0.6s' },
    ],
  },
];

const TOTAL_FRAMES = 289;
const CROSS_FADE_WINDOW = 6; // +/- 6 frames transition buffer for smooth cross-fade

function formatFrameNumber(num: number): string {
  return String(num).padStart(3, '0');
}

function getFrameUrl(frameNum: number): string {
  return `/frames/ezgif-frame-${formatFrameNumber(frameNum)}.jpg`;
}

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

    // Load initial 25 frames immediately for instant responsiveness
    const loadBatch = async (start: number, end: number) => {
      for (let i = start; i <= end; i++) {
        if (isCancelled) return;
        const img = new Image();
        img.src = getFrameUrl(i);
        img.onload = () => {
          loadedImages.set(i, img);
          imagesRef.current = loadedImages;
          if (i === 1) {
            setIsImagesLoaded(true);
            drawFrame(1);
          }
        };
      }
    };

    // Load priority frames (initial + anchor frames for each project)
    loadBatch(1, 30).then(() => {
      [147, 181, 217, 248, 289].forEach((frame) => {
        const img = new Image();
        img.src = getFrameUrl(frame);
        img.onload = () => {
          loadedImages.set(frame, img);
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

  // Scroll listener strictly locked within #work section
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!containerRef.current) return;

      const rect = containerRef.current.getBoundingClientRect();
      const scrollableDistance = containerRef.current.offsetHeight - window.innerHeight;

      if (scrollableDistance <= 0) return;

      // Distance scrolled into the section
      const scrolled = -rect.top;
      // Progress between 0 and 1 strictly within this section
      const progress = Math.max(0, Math.min(1, scrolled / scrollableDistance));

      setScrollProgress(progress);

      // Map progress directly to frame index: 1 to TOTAL_FRAMES
      const frameIdx = Math.max(1, Math.min(TOTAL_FRAMES, Math.round(1 + progress * (TOTAL_FRAMES - 1))));
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
      className="relative w-full h-[460vh] bg-[#FAF5EE]"
    >
      {/* 
        STICKY FULL-SCREEN VIEWPORT:
        Pins firmly when #work enters top of viewport,
        unpins cleanly when #work finishes.
        Zero leftover frames or pinned overlays after this section.
      */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between z-20 pointer-events-none select-none">
        
        {/* SUBTLE HORIZONTAL PROGRESS LINE (Advances precisely as visitor scrolls) */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#D9D0C3]/30 z-30 pointer-events-none">
          <div
            className="h-full bg-[#9E5249] transition-all duration-75 ease-out"
            style={{ width: `${Math.round(scrollProgress * 100)}%` }}
          />
        </div>

        {/* TOP STATUS BAR: Subtle Archive Header & Minimal Project Indicator */}
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-14 pt-8 sm:pt-10 flex items-center justify-between z-30 pointer-events-auto">
          {/* Section Heading */}
          <div className="flex items-center gap-2">
            <h2 className="text-[10px] sm:text-xs font-mono uppercase tracking-[0.25em] text-[#827C75]">
              Selected Work / Contractor Website Design Portfolio
            </h2>
          </div>

          {/* Minimal Project Progress Number: 01 / 05, 02 / 05, etc. */}
          <div className="flex items-center gap-3">
            <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-mono text-[#59544E]">
              Project
            </span>
            <div className="font-mono text-sm sm:text-base tracking-widest text-[#141210] flex items-baseline gap-1">
              <span className="text-[#9E5249] font-bold">{activeProject.number}</span>
              <span className="text-[#827C75] text-xs">/</span>
              <span className="text-xs text-[#59544E]">05</span>
            </div>
          </div>
        </div>

        {/* 
          FULL BLEED FRAME ANIMATION VIEWPORT:
          Uses object-cover to completely fill the side sections and viewport edge-to-edge,
          ensuring zero empty margins on any screen width.
        */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none select-none z-10 overflow-hidden">
          {/* High-Performance Canvas */}
          <canvas
            ref={canvasRef}
            className="w-full h-full object-cover min-w-full min-h-full pointer-events-none select-none"
            style={{
              display: isImagesLoaded ? 'block' : 'none',
            }}
          />

          {/* Initial buffer fallback */}
          {!isImagesLoaded && (
            <img
              src={getFrameUrl(currentFrame)}
              alt="High-Converting Contractor Website Showcase Frame"
              width={1920}
              height={1080}
              loading="lazy"
              className="w-full h-full object-cover min-w-full min-h-full pointer-events-none select-none"
            />
          )}
        </div>

        {/* 
          BOTTOM SECTION: SYNCHRONIZED HTML TEXT OVERLAYS
          Each project title and category fades in when its website appears
          and fades out when the next begins.
        */}
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-10 md:px-14 pb-8 sm:pb-12 z-30 pointer-events-auto">
          <div className="relative min-h-[90px] sm:min-h-[110px] md:min-h-[125px] flex items-end justify-between gap-6">
            
            {/* Absolute Stacking for Seamless Cross-Fade */}
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
                    {/* Project Title H3 */}
                    <h3 className="font-serif text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-[#141210] font-normal tracking-tight uppercase leading-none">
                      {project.displayTitle}
                    </h3>
                    
                    {/* Project Category */}
                    <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm md:text-base text-[#59544E] font-sans font-light tracking-wider uppercase">
                      {project.category}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Action Trigger: Inspect Case Study */}
            <div className="shrink-0 mb-1 hidden sm:block">
              <button
                onClick={() => handleOpenCaseStudy()}
                aria-label={`Inspect ${activeProject.displayTitle} case study blueprint`}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#141210] text-[#FAF6F0] text-[11px] font-semibold uppercase tracking-[0.18em] rounded-sm hover:bg-[#34302D] transition-colors cursor-pointer group shadow-xs"
              >
                <span>Inspect Case Study</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
