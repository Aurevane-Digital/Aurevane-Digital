import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, ExternalLink } from 'lucide-react';
import haulingScreenshot from '../assets/images/placeholder_hauling_site_1794566802758.jpg';
import excavationScreenshot from '../assets/images/placeholder_excavation_site_1794566804084.jpg';
import roofingScreenshot from '../assets/images/placeholder_roofing_site_1794566803517.jpg';

gsap.registerPlugin(ScrollTrigger);

export interface JourneyProject {
  id: string;
  niche: string;
  name: string;
  result: string;
  tags: string[];
  stack: string;
  screenshot: string;
  liveUrl: string;
  accent: string;
}

export const PROJECTS: JourneyProject[] = [
  {
    id: 'haul-away-co',
    niche: 'Junk Removal',
    name: 'Haul Away Co.',
    result: 'Interactive truck-load volume pricing replacing phone-tag quotes.',
    tags: ['Volume Estimator', 'Zone Routing', 'Mobile Booking'],
    stack: 'React · TypeScript · Tailwind CSS',
    screenshot: haulingScreenshot,
    liveUrl: '/junk-removal-website-design',
    accent: '#9E5249',
  },
  {
    id: 'apex-civil',
    niche: 'Excavation',
    name: 'Apex Civil Contractors',
    result: 'Commercial fleet ledger and safety dossier built for general contractor bids.',
    tags: ['Fleet Specs', 'Tender Intake', 'Safety Compliance'],
    stack: 'React · TypeScript · GSAP ScrollTrigger',
    screenshot: excavationScreenshot,
    liveUrl: '/excavation-website-design',
    accent: '#B89255',
  },
  {
    id: 'apex-roofing',
    niche: 'Roofing & Exterior',
    name: 'Apex Roofing & Restoration',
    result: 'Two-step inspection scheduler paired with residential material guides.',
    tags: ['Material Guide', 'Storm Intake', 'Service Areas'],
    stack: 'React · TypeScript · Tailwind CSS',
    screenshot: roofingScreenshot,
    liveUrl: '/contractor-website-design',
    accent: '#2F5241',
  },
];

function getButtonTextColor(hex: string): string {
  const clean = hex.replace('#', '');
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.54 ? '#141210' : '#FAF6F0';
}

function getTintBackground(hex: string, alpha = 0.1): string {
  const clean = hex.replace('#', '');
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

function getTintBorder(hex: string, alpha = 0.32): string {
  const clean = hex.replace('#', '');
  const r = parseInt(clean.slice(0, 2), 16);
  const g = parseInt(clean.slice(2, 4), 16);
  const b = parseInt(clean.slice(4, 6), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
}

const LiveSiteButton: React.FC<{ project: JourneyProject }> = ({ project }) => {
  const isExternal = /^https?:\/\//i.test(project.liveUrl);
  const className =
    'inline-flex items-center justify-center gap-2 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] rounded-sm border transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#141210]';
  const style: React.CSSProperties = {
    borderColor: getTintBorder(project.accent, 0.45),
    color: '#141210',
    backgroundColor: getTintBackground(project.accent, 0.08),
  };

  if (isExternal) {
    return (
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        style={style}
      >
        <span>View live site</span>
        <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
      </a>
    );
  }

  return (
    <Link to={project.liveUrl} className={className} style={style}>
      <span>View live site</span>
      <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
    </Link>
  );
};

export const LaptopJourneyShowcase: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const laptopRef = useRef<HTMLDivElement>(null);
  const shadowRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const screenViewportRef = useRef<HTMLDivElement>(null);
  const screenLayerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const screenshotInnerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const desktopPanelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const mobilePanelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const finalCtaRef = useRef<HTMLDivElement>(null);
  const railFillRef = useRef<HTMLDivElement>(null);
  const railDotRefs = useRef<(HTMLDivElement | null)[]>([]);

  const [loadedCount, setLoadedCount] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Detect prefers-reduced-motion reactively
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setPrefersReducedMotion(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  // Refresh ScrollTrigger once all placeholder screenshots finish loading
  useEffect(() => {
    if (loadedCount > 0) {
      ScrollTrigger.refresh();
    }
  }, [loadedCount]);

  // Master scrubbed GSAP timeline inside gsap.context() + gsap.matchMedia()
  useEffect(() => {
    if (prefersReducedMotion) return;
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      const getScrollDist = (idx: number) => {
        const inner = screenshotInnerRefs.current[idx];
        const viewport = screenViewportRef.current;
        if (!inner || !viewport) return -180;
        const delta = inner.offsetHeight - viewport.clientHeight;
        return delta > 24 ? -delta : -140;
      };

      // DESKTOP (>= 768px): Zig-zag 3D laptop journey with opposite-side staggered panels
      mm.add('(min-width: 768px)', () => {
        const laptop = laptopRef.current;
        const shadow = shadowRef.current;
        const glow = glowRef.current;
        const cta = finalCtaRef.current;
        const railFill = railFillRef.current;
        if (!laptop || !shadow || !glow || !cta || !railFill) return;

        // Clear any mobile styles cleanly
        mobilePanelRefs.current.forEach((p) => {
          if (p) gsap.set(p, { clearProps: 'all' });
        });

        // Initial states at Stop 1
        gsap.set(laptop, {
          x: '-22vw',
          y: 0,
          rotateY: 8,
          rotateZ: -2,
          scale: 1,
          transformOrigin: 'center center',
        });
        gsap.set(shadow, {
          x: '-22vw',
          y: 0,
          scale: 1,
          opacity: 0.4,
        });
        gsap.set(glow, {
          x: '-22vw',
          y: 0,
          backgroundColor: PROJECTS[0].accent,
          opacity: 0.22,
          scale: 1,
        });

        screenLayerRefs.current.forEach((layer, idx) => {
          if (layer) gsap.set(layer, { autoAlpha: idx === 0 ? 1 : 0 });
        });
        screenshotInnerRefs.current.forEach((inner) => {
          if (inner) gsap.set(inner, { y: 0 });
        });

        desktopPanelRefs.current.forEach((panel, idx) => {
          if (!panel) return;
          const lines = panel.querySelectorAll('[data-panel-line]');
          if (idx === 0) {
            gsap.set(panel, { autoAlpha: 1, x: 0 });
            gsap.set(lines, { autoAlpha: 1, x: 0 });
          } else {
            gsap.set(panel, { autoAlpha: 0, x: 0 });
            gsap.set(lines, { autoAlpha: 0, x: idx % 2 === 1 ? -40 : 40 });
          }
        });

        gsap.set(cta, { autoAlpha: 0, y: 28 });
        gsap.set(railFill, { scaleY: 0, transformOrigin: 'top center' });

        const updateDots = (progress: number) => {
          const thresholds = [0, 0.34, 0.66];
          railDotRefs.current.forEach((dot, i) => {
            if (!dot) return;
            const active = progress >= thresholds[i];
            dot.style.backgroundColor = active ? PROJECTS[i].accent : '#FAF6F0';
            dot.style.borderColor = active ? PROJECTS[i].accent : '#B9B0A2';
            dot.style.transform = active ? 'scale(1.25)' : 'scale(1)';
          });
        };
        updateDots(0);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            pin: true,
            start: 'top top',
            end: '+=' + PROJECTS.length * 100 + '%',
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => updateDots(self.progress),
          },
        });

        // Beat 1: Browse Stop 1 (Project 01 screenshot scrolls slowly upward)
        tl.to(
          screenshotInnerRefs.current[0],
          {
            y: () => getScrollDist(0),
            duration: 1.2,
            ease: 'none',
          },
          0
        );

        // Beat 2: Zig-zag transition Stop 1 (left -22vw) -> Stop 2 (right +22vw)
        const move1Start = 1.2;
        const moveDur = 1.4;

        tl.to(
          laptop,
          {
            x: '22vw',
            rotateY: -8,
            duration: moveDur,
            ease: 'power2.inOut',
          },
          move1Start
        )
          .to(
            laptop,
            {
              keyframes: [
                { y: 42, rotateZ: 3, duration: moveDur / 2, ease: 'power2.in' },
                { y: 0, rotateZ: -2, duration: moveDur / 2, ease: 'power2.out' },
              ],
            },
            move1Start
          )
          .to(
            shadow,
            {
              x: '22vw',
              duration: moveDur,
              ease: 'power2.inOut',
            },
            move1Start
          )
          .to(
            shadow,
            {
              keyframes: [
                { scale: 0.72, opacity: 0.14, duration: moveDur / 2, ease: 'power2.in' },
                { scale: 1, opacity: 0.4, duration: moveDur / 2, ease: 'power2.out' },
              ],
            },
            move1Start
          )
          .to(
            glow,
            {
              x: '22vw',
              backgroundColor: PROJECTS[1].accent,
              duration: moveDur,
              ease: 'power2.inOut',
            },
            move1Start
          )
          // Screen crossfade at midpoint
          .to(
            screenLayerRefs.current[0],
            { autoAlpha: 0, duration: 0.35, ease: 'power1.inOut' },
            move1Start + moveDur * 0.45
          )
          .to(
            screenLayerRefs.current[1],
            { autoAlpha: 1, duration: 0.35, ease: 'power1.inOut' },
            move1Start + moveDur * 0.45
          )
          // Old panel (right) slides out 40px and fades
          .to(
            desktopPanelRefs.current[0],
            { autoAlpha: 0, x: 40, duration: 0.45, ease: 'power2.in' },
            move1Start
          );

        // New panel 1 (left) enters from opposite side with 0.1s stagger
        if (desktopPanelRefs.current[1]) {
          const panel1Lines = desktopPanelRefs.current[1].querySelectorAll('[data-panel-line]');
          tl.set(desktopPanelRefs.current[1], { autoAlpha: 1 }, move1Start + moveDur * 0.48).fromTo(
            panel1Lines,
            { autoAlpha: 0, x: -40 },
            {
              autoAlpha: 1,
              x: 0,
              duration: 0.45,
              stagger: 0.1,
              ease: 'power2.out',
            },
            move1Start + moveDur * 0.5
          );
        }

        // Beat 3: Browse Stop 2 (Project 02 screenshot scrolls upward)
        const stop2Start = move1Start + moveDur;
        tl.to(
          screenshotInnerRefs.current[1],
          {
            y: () => getScrollDist(1),
            duration: 1.2,
            ease: 'none',
          },
          stop2Start
        );

        // Beat 4: Zig-zag transition Stop 2 (right +22vw) -> Stop 3 (left -22vw)
        const move2Start = stop2Start + 1.2;

        tl.to(
          laptop,
          {
            x: '-22vw',
            rotateY: 8,
            duration: moveDur,
            ease: 'power2.inOut',
          },
          move2Start
        )
          .to(
            laptop,
            {
              keyframes: [
                { y: 42, rotateZ: 3, duration: moveDur / 2, ease: 'power2.in' },
                { y: 0, rotateZ: -2, duration: moveDur / 2, ease: 'power2.out' },
              ],
            },
            move2Start
          )
          .to(
            shadow,
            {
              x: '-22vw',
              duration: moveDur,
              ease: 'power2.inOut',
            },
            move2Start
          )
          .to(
            shadow,
            {
              keyframes: [
                { scale: 0.72, opacity: 0.14, duration: moveDur / 2, ease: 'power2.in' },
                { scale: 1, opacity: 0.4, duration: moveDur / 2, ease: 'power2.out' },
              ],
            },
            move2Start
          )
          .to(
            glow,
            {
              x: '-22vw',
              backgroundColor: PROJECTS[2].accent,
              duration: moveDur,
              ease: 'power2.inOut',
            },
            move2Start
          )
          // Screen crossfade at midpoint
          .to(
            screenLayerRefs.current[1],
            { autoAlpha: 0, duration: 0.35, ease: 'power1.inOut' },
            move2Start + moveDur * 0.45
          )
          .to(
            screenLayerRefs.current[2],
            { autoAlpha: 1, duration: 0.35, ease: 'power1.inOut' },
            move2Start + moveDur * 0.45
          )
          // Old panel (left) slides out 40px and fades
          .to(
            desktopPanelRefs.current[1],
            { autoAlpha: 0, x: -40, duration: 0.45, ease: 'power2.in' },
            move2Start
          );

        // New panel 2 (right) enters from opposite side with 0.1s stagger
        if (desktopPanelRefs.current[2]) {
          const panel2Lines = desktopPanelRefs.current[2].querySelectorAll('[data-panel-line]');
          tl.set(desktopPanelRefs.current[2], { autoAlpha: 1 }, move2Start + moveDur * 0.48).fromTo(
            panel2Lines,
            { autoAlpha: 0, x: 40 },
            {
              autoAlpha: 1,
              x: 0,
              duration: 0.45,
              stagger: 0.1,
              ease: 'power2.out',
            },
            move2Start + moveDur * 0.5
          );
        }

        // Beat 5: Browse Stop 3 (Project 03 screenshot scrolls upward)
        const stop3Start = move2Start + moveDur;
        tl.to(
          screenshotInnerRefs.current[2],
          {
            y: () => getScrollDist(2),
            duration: 1.2,
            ease: 'none',
          },
          stop3Start
        );

        // Beat 6: Finale — laptop centers & scales to 1.08, panel transitions to "Start your project" CTA
        const finaleStart = stop3Start + 1.2;
        tl.to(
          desktopPanelRefs.current[2],
          { autoAlpha: 0, x: 40, duration: 0.45, ease: 'power2.in' },
          finaleStart
        )
          .to(
            laptop,
            {
              x: 0,
              y: -36,
              rotateY: 0,
              rotateZ: 0,
              scale: 1.08,
              duration: 0.9,
              ease: 'power2.inOut',
            },
            finaleStart
          )
          .to(
            shadow,
            {
              x: 0,
              scale: 1.12,
              opacity: 0.44,
              duration: 0.9,
              ease: 'power2.inOut',
            },
            finaleStart
          )
          .to(
            glow,
            {
              x: 0,
              y: -36,
              scale: 1.15,
              opacity: 0.24,
              duration: 0.9,
              ease: 'power2.inOut',
            },
            finaleStart
          )
          .to(
            cta,
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.6,
              ease: 'power2.out',
            },
            finaleStart + 0.55
          )
          // Short readable hold before pin releases
          .to({}, { duration: 0.45 });

        // Progress rail tracks full timeline span from 0 to end
        tl.to(
          railFill,
          {
            scaleY: 1,
            duration: tl.duration(),
            ease: 'none',
          },
          0
        );
      });

      // MOBILE (< 768px): No zig-zag. Centered laptop at top (85% width), info panel below with vertical slide
      mm.add('(max-width: 767px)', () => {
        const laptop = laptopRef.current;
        const shadow = shadowRef.current;
        const glow = glowRef.current;
        const cta = finalCtaRef.current;
        const railFill = railFillRef.current;
        if (!laptop || !shadow || !glow || !cta || !railFill) return;

        // Clear desktop panel styles cleanly
        desktopPanelRefs.current.forEach((p) => {
          if (p) gsap.set(p, { clearProps: 'all' });
        });

        gsap.set(laptop, {
          x: 0,
          y: 0,
          rotateY: 0,
          rotateZ: 0,
          scale: 1,
          transformOrigin: 'center center',
        });
        gsap.set(shadow, {
          x: 0,
          y: 0,
          scale: 1,
          opacity: 0.35,
        });
        gsap.set(glow, {
          x: 0,
          y: 0,
          backgroundColor: PROJECTS[0].accent,
          opacity: 0.2,
          scale: 1,
        });

        screenLayerRefs.current.forEach((layer, idx) => {
          if (layer) gsap.set(layer, { autoAlpha: idx === 0 ? 1 : 0 });
        });
        screenshotInnerRefs.current.forEach((inner) => {
          if (inner) gsap.set(inner, { y: 0 });
        });

        mobilePanelRefs.current.forEach((panel, idx) => {
          if (!panel) return;
          const lines = panel.querySelectorAll('[data-panel-line]');
          if (idx === 0) {
            gsap.set(panel, { autoAlpha: 1, y: 0 });
            gsap.set(lines, { autoAlpha: 1, y: 0 });
          } else {
            gsap.set(panel, { autoAlpha: 0, y: 0 });
            gsap.set(lines, { autoAlpha: 0, y: 24 });
          }
        });

        gsap.set(cta, { autoAlpha: 0, y: 24 });
        gsap.set(railFill, { scaleY: 0, transformOrigin: 'top center' });

        const updateDots = (progress: number) => {
          const thresholds = [0, 0.34, 0.66];
          railDotRefs.current.forEach((dot, i) => {
            if (!dot) return;
            const active = progress >= thresholds[i];
            dot.style.backgroundColor = active ? PROJECTS[i].accent : '#FAF6F0';
            dot.style.borderColor = active ? PROJECTS[i].accent : '#B9B0A2';
            dot.style.transform = active ? 'scale(1.25)' : 'scale(1)';
          });
        };
        updateDots(0);

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            pin: true,
            start: 'top top',
            end: '+=' + PROJECTS.length * 100 + '%',
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => updateDots(self.progress),
          },
        });

        // Stop 1 scroll
        tl.to(
          screenshotInnerRefs.current[0],
          { y: () => getScrollDist(0), duration: 1.1, ease: 'none' },
          0
        );

        // Vertical transition 1 -> 2
        const t1 = 1.1;
        const moveDur = 1.0;
        tl.to(
          screenLayerRefs.current[0],
          { autoAlpha: 0, duration: 0.35, ease: 'power1.inOut' },
          t1 + 0.25
        )
          .to(
            screenLayerRefs.current[1],
            { autoAlpha: 1, duration: 0.35, ease: 'power1.inOut' },
            t1 + 0.25
          )
          .to(
            glow,
            { backgroundColor: PROJECTS[1].accent, duration: 0.5, ease: 'power1.inOut' },
            t1 + 0.2
          )
          .to(
            mobilePanelRefs.current[0],
            { autoAlpha: 0, y: -24, duration: 0.35, ease: 'power2.in' },
            t1
          );

        if (mobilePanelRefs.current[1]) {
          const lines1 = mobilePanelRefs.current[1].querySelectorAll('[data-panel-line]');
          tl.set(mobilePanelRefs.current[1], { autoAlpha: 1 }, t1 + 0.35).fromTo(
            lines1,
            { autoAlpha: 0, y: 24 },
            { autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.1, ease: 'power2.out' },
            t1 + 0.4
          );
        }

        // Stop 2 scroll
        const s2 = t1 + moveDur;
        tl.to(
          screenshotInnerRefs.current[1],
          { y: () => getScrollDist(1), duration: 1.1, ease: 'none' },
          s2
        );

        // Vertical transition 2 -> 3
        const t2 = s2 + 1.1;
        tl.to(
          screenLayerRefs.current[1],
          { autoAlpha: 0, duration: 0.35, ease: 'power1.inOut' },
          t2 + 0.25
        )
          .to(
            screenLayerRefs.current[2],
            { autoAlpha: 1, duration: 0.35, ease: 'power1.inOut' },
            t2 + 0.25
          )
          .to(
            glow,
            { backgroundColor: PROJECTS[2].accent, duration: 0.5, ease: 'power1.inOut' },
            t2 + 0.2
          )
          .to(
            mobilePanelRefs.current[1],
            { autoAlpha: 0, y: -24, duration: 0.35, ease: 'power2.in' },
            t2
          );

        if (mobilePanelRefs.current[2]) {
          const lines2 = mobilePanelRefs.current[2].querySelectorAll('[data-panel-line]');
          tl.set(mobilePanelRefs.current[2], { autoAlpha: 1 }, t2 + 0.35).fromTo(
            lines2,
            { autoAlpha: 0, y: 24 },
            { autoAlpha: 1, y: 0, duration: 0.4, stagger: 0.1, ease: 'power2.out' },
            t2 + 0.4
          );
        }

        // Stop 3 scroll
        const s3 = t2 + moveDur;
        tl.to(
          screenshotInnerRefs.current[2],
          { y: () => getScrollDist(2), duration: 1.1, ease: 'none' },
          s3
        );

        // Mobile finale: scale laptop to 1.08 centered and show CTA below
        const fin = s3 + 1.1;
        tl.to(
          mobilePanelRefs.current[2],
          { autoAlpha: 0, y: -24, duration: 0.35, ease: 'power2.in' },
          fin
        )
          .to(
            laptop,
            { scale: 1.08, y: 8, duration: 0.7, ease: 'power2.inOut' },
            fin
          )
          .to(
            cta,
            { autoAlpha: 1, y: 0, duration: 0.5, ease: 'power2.out' },
            fin + 0.4
          )
          .to({}, { duration: 0.4 });

        tl.to(
          railFill,
          { scaleY: 1, duration: tl.duration(), ease: 'none' },
          0
        );
      });
    }, section);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  // REDUCED MOTION: No pin, projects stacked cleanly in document flow
  if (prefersReducedMotion) {
    return (
      <section
        id="laptop-showcase"
        aria-label="Client Website Showcase"
        className="w-full py-20 px-6 md:px-12 lg:px-16 bg-[#FAF6F0] border-b border-[#D9D0C3]/60"
      >
        <div className="max-w-7xl mx-auto space-y-20">
          <div className="max-w-2xl">
            <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold block mb-3">
              Interactive Showcase
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#141210] font-normal">
              Built to Turn Visitors Into Booked Work.
            </h2>
          </div>

          <div className="space-y-16">
            {PROJECTS.map((project, idx) => {
              const indexLabel = String(idx + 1).padStart(2, '0');
              const isReversed = idx % 2 === 1;
              return (
                <div
                  key={project.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
                >
                  {/* Laptop frame */}
                  <div className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : ''}`}>
                    <div className="relative mx-auto max-w-[540px]">
                      <div
                        className="absolute -inset-6 rounded-full blur-3xl opacity-20 pointer-events-none"
                        style={{ backgroundColor: project.accent }}
                        aria-hidden="true"
                      />
                      <div className="relative bg-[#1B1816] rounded-t-xl p-2 sm:p-2.5 shadow-xl border border-[#3A3531]">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#3A3531] mx-auto mb-1.5" />
                        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-xs bg-[#F5EDE2]">
                          <img
                            src={project.screenshot}
                            alt={`${project.name} website preview`}
                            referrerPolicy="no-referrer"
                            className="w-full h-auto block object-cover object-top"
                          />
                        </div>
                      </div>
                      <div className="relative h-3 sm:h-3.5 w-[108%] -ml-[4%] rounded-b-xl bg-gradient-to-b from-[#45403B] via-[#2C2825] to-[#1A1715] border-t border-[#5A534C]/40 shadow-md">
                        <div className="w-14 h-1 rounded-b-full bg-[#141210]/70 mx-auto" />
                      </div>
                    </div>
                  </div>

                  {/* Info panel */}
                  <div className={`lg:col-span-5 space-y-4 ${isReversed ? 'lg:order-1' : ''}`}>
                    <div
                      className="font-mono text-xs font-semibold uppercase tracking-[0.2em] tabular-nums"
                      style={{ color: project.accent }}
                    >
                      {indexLabel} / {project.niche.toUpperCase()}
                    </div>
                    <h3 className="font-serif text-3xl sm:text-4xl text-[#141210] font-normal leading-tight">
                      {project.name}
                    </h3>
                    <p className="text-sm sm:text-base text-[#59544E] font-light leading-relaxed">
                      {project.result}
                    </p>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-[11px] font-medium px-2.5 py-1 rounded-xs border"
                          style={{
                            backgroundColor: getTintBackground(project.accent, 0.1),
                            borderColor: getTintBorder(project.accent, 0.32),
                            color: '#141210',
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs font-mono text-[#827C75] pt-1">{project.stack}</p>
                    <div className="flex flex-wrap items-center gap-3 pt-2">
                      <LiveSiteButton project={project} />
                      <Link
                        to="/contact"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] rounded-sm transition-opacity hover:opacity-90 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#141210]"
                        style={{
                          backgroundColor: project.accent,
                          color: getButtonTextColor(project.accent),
                        }}
                      >
                        <span>Get a site like this</span>
                        <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="pt-8 border-t border-[#D9D0C3] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <span className="text-[10px] uppercase tracking-[0.25em] text-[#9E5249] font-bold block mb-1">
                Ready When You Are
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-[#141210] font-normal">
                Start your project
              </h3>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-[#141210] text-[#FAF6F0] hover:bg-[#34302D] text-xs font-semibold uppercase tracking-[0.2em] rounded-sm transition-colors whitespace-nowrap shrink-0"
            >
              <span>Start your project</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={sectionRef}
      id="laptop-showcase"
      aria-label="Interactive Client Website Journey"
      className="relative w-full h-[100dvh] min-h-[640px] bg-[#FAF6F0] border-b border-[#D9D0C3]/60 overflow-hidden"
    >
      {/* Fixed-navbar top clearance + stage */}
      <div className="relative w-full h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 pt-22 md:pt-24 pb-8 flex flex-col md:flex-row items-center justify-start md:justify-center">
        {/* VERTICAL PROGRESS RAIL */}
        <div
          aria-hidden="true"
          className="hidden sm:flex flex-col items-center absolute right-4 md:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-30 pointer-events-none"
        >
          <div className="relative w-[2px] h-40 md:h-52 bg-[#D9D0C3]/80 rounded-full overflow-visible">
            <div
              ref={railFillRef}
              className="w-full h-full bg-[#141210] rounded-full origin-top"
            />
            {PROJECTS.map((project, idx) => {
              const topPct = idx === 0 ? '0%' : idx === 1 ? '50%' : '100%';
              return (
                <div
                  key={project.id}
                  ref={(el) => {
                    railDotRefs.current[idx] = el;
                  }}
                  style={{ top: topPct }}
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full border-2 border-[#B9B0A2] bg-[#FAF6F0] transition-transform duration-200"
                />
              );
            })}
          </div>
        </div>

        {/* STAGE CONTAINER FOR LAPTOP & OPPOSITE PANELS */}
        <div className="relative w-full h-full flex flex-col md:block items-center justify-start md:justify-center [perspective:1400px]">
          {/* LAPTOP STAGE AREA (top on mobile at 85% width; vertically centered on desktop & zig-zagged via GSAP x) */}
          <div className="relative w-[85%] max-w-[400px] md:max-w-none md:w-full md:h-full flex flex-col items-center justify-center shrink-0">
            {/* Subtle dynamic accent glow behind laptop */}
            <div
              ref={glowRef}
              aria-hidden="true"
              className="hidden md:block absolute w-[42vw] max-w-[540px] aspect-[16/10] rounded-full blur-3xl pointer-events-none opacity-20"
            />

            {/* CSS / TAILWIND LAPTOP MOCKUP */}
            <div
              ref={laptopRef}
              style={{ willChange: 'transform', transformStyle: 'preserve-3d' }}
              className="relative z-10 w-full md:w-[40vw] md:max-w-[540px]"
            >
              {/* Lid & Thin Bezel */}
              <div className="relative bg-[#1B1816] rounded-t-xl md:rounded-t-2xl p-2 sm:p-2.5 md:p-3 border border-[#3B3530] shadow-2xl">
                {/* Inner hairline lid highlight */}
                <div className="w-1.5 h-1.5 rounded-full bg-[#36312C] mx-auto mb-1.5 md:mb-2" />

                {/* Clipped 16:10 Screen Viewport */}
                <div
                  ref={screenViewportRef}
                  className="relative aspect-[16/10] w-full overflow-hidden rounded-xs bg-[#F5EDE2] ring-1 ring-black/20"
                >
                  {PROJECTS.map((project, idx) => (
                    <div
                      key={project.id}
                      ref={(el) => {
                        screenLayerRefs.current[idx] = el;
                      }}
                      className="absolute inset-0 w-full h-full overflow-hidden bg-[#F5EDE2]"
                    >
                      {/* Styled fallback underneath in case an image takes a beat */}
                      <div
                        className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center"
                        style={{
                          background: `linear-gradient(135deg, #F5EDE2 0%, ${getTintBackground(project.accent, 0.14)} 100%)`,
                        }}
                      >
                        <span className="font-serif text-lg text-[#141210]">{project.name}</span>
                        <span className="text-[11px] font-mono text-[#59544E] mt-1">
                          {project.niche}
                        </span>
                      </div>

                      {/* Tall vertically scrollable screenshot */}
                      <div
                        ref={(el) => {
                          screenshotInnerRefs.current[idx] = el;
                        }}
                        style={{ willChange: 'transform' }}
                        className="relative z-10 w-full"
                      >
                        <img
                          src={project.screenshot}
                          alt={`${project.name} website interface screenshot`}
                          referrerPolicy="no-referrer"
                          onLoad={() => setLoadedCount((c) => c + 1)}
                          className="w-full h-auto block select-none"
                        />
                      </div>
                    </div>
                  ))}

                  {/* Subtle glass sheen overlay */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 z-20 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.03] to-white/[0.08]"
                  />
                </div>
              </div>

              {/* Anodized Laptop Base / Deck */}
              <div className="relative h-3 md:h-4 w-[108%] -ml-[4%] rounded-b-xl bg-gradient-to-b from-[#4B453F] via-[#2C2824] to-[#171412] border-t border-[#6B635B]/45 shadow-lg">
                {/* Thumb opening notch */}
                <div className="w-12 md:w-16 h-1 md:h-1.5 rounded-b-full bg-[#141210]/80 mx-auto" />
              </div>
            </div>

            {/* Blurred Ground Shadow Ellipse */}
            <div
              ref={shadowRef}
              aria-hidden="true"
              style={{ willChange: 'transform, opacity' }}
              className="w-[76%] md:w-[34vw] md:max-w-[460px] h-5 md:h-7 mt-2 md:mt-5 rounded-full bg-[#141210]/35 blur-xl pointer-events-none"
            />
          </div>

          {/* DESKTOP OPPOSITE-SIDE INFO PANELS (>= 768px) */}
          {PROJECTS.map((project, idx) => {
            const indexLabel = String(idx + 1).padStart(2, '0');
            // Stop 1 (idx 0): laptop left -> panel right
            // Stop 2 (idx 1): laptop right -> panel left
            // Stop 3 (idx 2): laptop left -> panel right
            const isPanelOnLeft = idx % 2 === 1;

            return (
              <div
                key={`desktop-${project.id}`}
                ref={(el) => {
                  desktopPanelRefs.current[idx] = el;
                }}
                className={`hidden md:flex flex-col justify-center absolute top-1/2 -translate-y-1/2 z-20 w-[41%] max-w-[470px] space-y-4 ${
                  isPanelOnLeft ? 'left-0 lg:left-2' : 'right-6 lg:right-12'
                }`}
              >
                <div
                  data-panel-line
                  className="font-mono text-xs font-semibold uppercase tracking-[0.22em] tabular-nums"
                  style={{ color: project.accent }}
                >
                  {indexLabel} / {project.niche.toUpperCase()}
                </div>

                <h3
                  data-panel-line
                  className="font-serif text-3xl lg:text-4xl xl:text-[42px] text-[#141210] font-normal leading-[1.12]"
                >
                  {project.name}
                </h3>

                <p
                  data-panel-line
                  className="text-sm lg:text-base text-[#59544E] font-light leading-relaxed"
                >
                  {project.result}
                </p>

                <div data-panel-line className="flex flex-wrap gap-2 pt-1">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium px-2.5 py-1 rounded-xs border whitespace-nowrap"
                      style={{
                        backgroundColor: getTintBackground(project.accent, 0.1),
                        borderColor: getTintBorder(project.accent, 0.34),
                        color: '#141210',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p data-panel-line className="text-xs font-mono text-[#827C75] pt-0.5">
                  {project.stack}
                </p>

                <div data-panel-line className="flex flex-wrap items-center gap-3 pt-2">
                  <LiveSiteButton project={project} />
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-[11px] font-semibold uppercase tracking-[0.16em] rounded-sm transition-opacity hover:opacity-90 whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#141210]"
                    style={{
                      backgroundColor: project.accent,
                      color: getButtonTextColor(project.accent),
                    }}
                  >
                    <span>Get a site like this</span>
                    <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            );
          })}

          {/* MOBILE BELOW-LAPTOP INFO PANELS (< 768px) */}
          <div className="md:hidden relative w-full flex-1 mt-4">
            {PROJECTS.map((project, idx) => {
              const indexLabel = String(idx + 1).padStart(2, '0');
              return (
                <div
                  key={`mobile-${project.id}`}
                  ref={(el) => {
                    mobilePanelRefs.current[idx] = el;
                  }}
                  className="absolute inset-x-0 top-0 space-y-2.5 px-1"
                >
                  <div
                    data-panel-line
                    className="font-mono text-[11px] font-semibold uppercase tracking-[0.2em] tabular-nums"
                    style={{ color: project.accent }}
                  >
                    {indexLabel} / {project.niche.toUpperCase()}
                  </div>

                  <h3
                    data-panel-line
                    className="font-serif text-2xl text-[#141210] font-normal leading-tight"
                  >
                    {project.name}
                  </h3>

                  <p
                    data-panel-line
                    className="text-xs sm:text-sm text-[#59544E] font-light leading-relaxed"
                  >
                    {project.result}
                  </p>

                  <div data-panel-line className="flex flex-wrap gap-1.5 pt-0.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-medium px-2 py-0.5 rounded-xs border whitespace-nowrap"
                        style={{
                          backgroundColor: getTintBackground(project.accent, 0.1),
                          borderColor: getTintBorder(project.accent, 0.34),
                          color: '#141210',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p data-panel-line className="text-[11px] font-mono text-[#827C75]">
                    {project.stack}
                  </p>

                  <div data-panel-line className="flex flex-wrap items-center gap-2.5 pt-1">
                    <LiveSiteButton project={project} />
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 text-[11px] font-semibold uppercase tracking-[0.14em] rounded-sm whitespace-nowrap shrink-0 cursor-pointer"
                      style={{
                        backgroundColor: project.accent,
                        color: getButtonTextColor(project.accent),
                      }}
                    >
                      <span>Get a site like this</span>
                      <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>

          {/* FINAL CTA PANEL ("Start your project") */}
          <div
            ref={finalCtaRef}
            className="absolute inset-x-0 bottom-4 md:bottom-8 z-30 flex justify-center px-4"
          >
            <div className="bg-[#FAF6F0]/95 backdrop-blur-sm border border-[#D9D0C3] px-6 py-4 md:px-10 md:py-5 rounded-sm shadow-lg flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-center sm:text-left">
              <div>
                <span className="text-[10px] uppercase tracking-[0.22em] text-[#9E5249] font-bold block">
                  Commission Your Website
                </span>
                <p className="font-serif text-xl md:text-2xl text-[#141210]">
                  Ready for a platform built around booked jobs?
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#141210] text-[#FAF6F0] hover:bg-[#34302D] text-xs font-semibold uppercase tracking-[0.18em] rounded-sm transition-colors whitespace-nowrap shrink-0 cursor-pointer focus-visible:outline-2 focus-visible:outline-[#9E5249]"
              >
                <span>Start your project</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
