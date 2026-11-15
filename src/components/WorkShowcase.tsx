import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShowcaseSite, WorkPanel } from './WorkPanel';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Fine-tunable video timeline & panel placement configuration.
 * Video: 1920x1080, 12.5s total duration.
 */
export const SHOWCASE_SITES: ShowcaseSite[] = [
  {
    id: 'junk-bolt',
    counter: '01 / 05',
    title: 'Junk Bolt',
    category: 'Hauling & Removal',
    description:
      'A bold, conversion-focused site for a hauling and junk removal crew. Clear pricing, one-tap calling, and a hero built to get the phone ringing.',
    url: 'https://junk-bolt.vercel.app/',
    holdStart: 0.0,
    holdEnd: 1.3,
    textSide: 'right',
    verticalPercent: 30,
  },
  {
    id: 'vision-excavation',
    counter: '02 / 05',
    title: 'Vision Excavation',
    category: 'Earthworks · Kingston & Eastern Ontario',
    description:
      'A rugged, cinematic site for residential and commercial earthworks, with quote requests and phone calls front and centre.',
    url: 'https://vision-excavation.vercel.app/',
    holdStart: 2.8,
    holdEnd: 4.1,
    textSide: 'left',
    verticalPercent: 40,
  },
  {
    id: 'james-iron-steel',
    counter: '03 / 05',
    title: 'James Iron & Steel',
    category: 'Structural Steel · Monroe, NC',
    description:
      'Seven decades of craft presented with a confident, premium look. Services, certifications and free estimates at a glance.',
    url: 'https://jamesironsteelinc.vercel.app/',
    holdStart: 5.6,
    holdEnd: 6.9,
    textSide: 'right',
    verticalPercent: 51,
  },
  {
    id: 'action-electrical',
    counter: '04 / 05',
    title: 'Action Electrical',
    category: 'Commercial Electrical & Mechanical · Northeast Florida',
    description:
      'A trust-first site for commercial contractors. Licences, 24/7 dispatch and safety standards upfront.',
    url: 'https://action-electrical.vercel.app/',
    holdStart: 8.4,
    holdEnd: 9.7,
    textSide: 'left',
    verticalPercent: 62,
  },
  {
    id: 'storm-shield-roofing',
    counter: '05 / 05',
    title: 'Storm Shield Roofing',
    category: 'Roofing & Restoration',
    description:
      'A premium, claims-focused site for a storm damage and insurance restoration roofer. Free inspections and estimates made easy to book.',
    url: 'https://storm-shield-roofing-restoration.vercel.app/',
    holdStart: 11.2,
    holdEnd: 12.5,
    textSide: 'right',
    verticalPercent: 73,
  },
];

const PRIMARY_VIDEO_SRC = '/assets/aistudio/aurevane-single-monitor-zigzag_87f120e1.mp4';
const FALLBACK_VIDEO_SRC = '/videos/aurevane-showcase.mp4';
const VIDEO_POSTER_SRC = '/videos/aurevane-showcase-poster.jpg';
const LERP_FACTOR = 0.12;
const SCROLL_DISTANCE = '+=500%';
const FADE_IN_DURATION = 0.5;
const FADE_OUT_DURATION = 0.3;

function easeOutCubic(t: number): number {
  return 1 - Math.pow(1 - t, 3);
}

function easeInQuad(t: number): number {
  return t * t;
}

function getPanelState(
  site: ShowcaseSite,
  index: number,
  totalCount: number,
  time: number
): { opacity: number; y: number } {
  const { holdStart, holdEnd } = site;
  const holdSpan = Math.max(0.1, holdEnd - holdStart);
  const fadeInDuration = Math.min(FADE_IN_DURATION, holdSpan * 0.5);
  const fadeOutDuration = Math.min(FADE_OUT_DURATION, holdSpan * 0.35);
  const isLast = index === totalCount - 1;

  if (time < holdStart || (!isLast && time >= holdEnd)) {
    return { opacity: 0, y: time < holdStart ? 30 : -30 };
  }

  const fadeInEnd = holdStart + fadeInDuration;
  if (time < fadeInEnd) {
    const progress = Math.max(0, Math.min(1, (time - holdStart) / fadeInDuration));
    const eased = easeOutCubic(progress);
    return { opacity: eased, y: 30 * (1 - eased) };
  }

  if (!isLast) {
    const fadeOutStart = Math.max(fadeInEnd, holdEnd - fadeOutDuration);
    if (time > fadeOutStart) {
      const progress = Math.max(0, Math.min(1, (time - fadeOutStart) / fadeOutDuration));
      const eased = easeInQuad(progress);
      return { opacity: 1 - eased, y: -30 * eased };
    }
  }

  return { opacity: 1, y: 0 };
}

export const WorkShowcase: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const panelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const targetTimeRef = useRef<number>(0);
  const currentTimeRef = useRef<number>(0);

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

  useEffect(() => {
    if (prefersReducedMotion) return;

    const section = sectionRef.current;
    const video = videoRef.current;
    if (!section || !video) return;

    video.muted = true;

    let rafId = 0;
    let ctx: gsap.Context | undefined;
    let isCleanedUp = false;

    const updatePanels = (time: number) => {
      SHOWCASE_SITES.forEach((site, idx) => {
        const el = panelRefs.current[idx];
        if (!el) return;

        const { opacity, y } = getPanelState(site, idx, SHOWCASE_SITES.length, time);
        const isVisible = opacity > 0.005;
        const isInteractive = opacity > 0.15;

        el.style.opacity = opacity.toFixed(3);
        el.style.transform = `translate3d(0, ${y.toFixed(2)}px, 0)`;
        el.style.visibility = isVisible ? 'visible' : 'hidden';
        el.style.pointerEvents = isInteractive ? 'auto' : 'none';
        el.setAttribute('aria-hidden', isInteractive ? 'false' : 'true');
      });
    };

    const setupShowcase = () => {
      if (isCleanedUp) return;

      const duration =
        Number.isFinite(video.duration) && video.duration > 0 ? video.duration : 12.5;

      try {
        video.currentTime = 0;
      } catch {
        // Ignore seek errors before buffer is ready
      }

      const scrubProxy = { time: 0 };

      ctx = gsap.context(() => {
        gsap.to(scrubProxy, {
          time: duration,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: SCROLL_DISTANCE,
            pin: true,
            scrub: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
          onUpdate: () => {
            targetTimeRef.current = scrubProxy.time;
          },
        });
      }, section);

      ScrollTrigger.refresh();
      updatePanels(0);

      const tick = () => {
        if (isCleanedUp) return;

        const diff = targetTimeRef.current - currentTimeRef.current;
        if (Math.abs(diff) > 0.0005) {
          currentTimeRef.current += diff * LERP_FACTOR;
        } else {
          currentTimeRef.current = targetTimeRef.current;
        }

        const clampedTime = Math.max(0, Math.min(duration, currentTimeRef.current));
        if (!video.seeking && Math.abs(video.currentTime - clampedTime) > 0.006) {
          try {
            video.currentTime = clampedTime;
          } catch {
            // Ignore transient seek guard errors
          }
        }

        updatePanels(clampedTime);
        rafId = window.requestAnimationFrame(tick);
      };

      rafId = window.requestAnimationFrame(tick);
    };

    const handleLoadedMetadata = () => {
      setupShowcase();
    };

    if (video.readyState >= 1 && Number.isFinite(video.duration) && video.duration > 0) {
      setupShowcase();
    } else {
      video.addEventListener('loadedmetadata', handleLoadedMetadata, { once: true });
    }

    return () => {
      isCleanedUp = true;
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      if (rafId) {
        window.cancelAnimationFrame(rafId);
      }
      ctx?.revert();
    };
  }, [prefersReducedMotion]);

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
              src={VIDEO_POSTER_SRC}
              alt="Desktop monitor showcase preview"
              className="w-full h-full object-contain bg-[#FFF8F1]"
            />
          </div>

          <div className="divide-y divide-[#D9D0C3]/60">
            {SHOWCASE_SITES.map((site) => (
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
      ref={sectionRef}
      aria-label="Interactive Scroll-Driven Work Showcase"
      className="relative w-full h-screen bg-[#FFF8F1] overflow-hidden flex flex-col pt-20 md:pt-0 md:block"
    >
      {/* Scrubbed 16:9 Studio Monitor Video */}
      <div className="w-full aspect-video shrink-0 md:aspect-auto md:absolute md:inset-0 md:h-full bg-[#FFF8F1]">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          poster={VIDEO_POSTER_SRC}
          className="w-full h-full object-contain md:object-cover object-center pointer-events-none select-none"
          aria-label="Scroll-scrubbed showcase of five contractor websites"
        >
          <source src={PRIMARY_VIDEO_SRC} type="video/mp4" />
          <source src={FALLBACK_VIDEO_SRC} type="video/mp4" />
        </video>
      </div>

      {/* Synchronized Text Panels (One Visible at a Time in Opposite Space / Stacked Below on Mobile) */}
      <div className="relative flex-1 w-full md:static md:w-auto md:h-full pointer-events-none">
        {SHOWCASE_SITES.map((site, idx) => (
          <WorkPanel
            key={site.id}
            site={site}
            panelRef={(el) => {
              panelRefs.current[idx] = el;
            }}
          />
        ))}
      </div>
    </section>
  );
};
