import { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Coordinates GSAP ScrollTrigger editorial animations across routes.
 * - Uses gsap.context() and gsap.matchMedia() for automatic cleanup.
 * - Respects prefers-reduced-motion (renders all content immediately with zero motion).
 * - Simplifies heavy parallax on mobile (< 768px) while preserving clean text & image reveals.
 */
export function useEditorialScrollMotion(routeKey: string) {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    let ctx: gsap.Context | undefined;

    const rafId = window.requestAnimationFrame(() => {
      ctx = gsap.context(() => {
        const mm = gsap.matchMedia();

        // Shared smooth reveal triggers across all viewports
        const headings = gsap.utils.toArray<HTMLElement>('[data-reveal="heading"]');
        headings.forEach((el) => {
          gsap.fromTo(
            el,
            { y: 26, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.85,
              ease: 'power3.out',
              clearProps: 'transform,opacity',
              scrollTrigger: {
                trigger: el,
                start: 'top 88%',
                once: true,
              },
            }
          );
        });

        const fades = gsap.utils.toArray<HTMLElement>('[data-reveal="fade"]');
        fades.forEach((el) => {
          gsap.fromTo(
            el,
            { y: 20, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.72,
              ease: 'power2.out',
              clearProps: 'transform,opacity',
              scrollTrigger: {
                trigger: el,
                start: 'top 89%',
                once: true,
              },
            }
          );
        });

        const lines = gsap.utils.toArray<HTMLElement>('[data-reveal="line"]');
        lines.forEach((el) => {
          gsap.fromTo(
            el,
            { scaleX: 0, transformOrigin: 'left center' },
            {
              scaleX: 1,
              duration: 0.75,
              ease: 'power3.inOut',
              clearProps: 'transform',
              scrollTrigger: {
                trigger: el,
                start: 'top 90%',
                once: true,
              },
            }
          );
        });

        const groups = gsap.utils.toArray<HTMLElement>('[data-reveal="stagger-group"]');
        groups.forEach((group) => {
          const items = group.querySelectorAll<HTMLElement>('[data-reveal-item]');
          if (!items.length) return;
          gsap.fromTo(
            items,
            { y: 24, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.72,
              stagger: 0.08,
              ease: 'power3.out',
              clearProps: 'transform,opacity',
              scrollTrigger: {
                trigger: group,
                start: 'top 86%',
                once: true,
              },
            }
          );
        });

        const clips = gsap.utils.toArray<HTMLElement>('[data-reveal="clip-reveal"]');
        clips.forEach((el) => {
          const innerImg = el.querySelector<HTMLElement>('[data-reveal-img]');
          const tl = gsap.timeline({
            scrollTrigger: {
              trigger: el,
              start: 'top 86%',
              once: true,
            },
          });

          tl.fromTo(
            el,
            { clipPath: 'inset(14% 0% 14% 0%)', opacity: 0.3 },
            {
              clipPath: 'inset(0% 0% 0% 0%)',
              opacity: 1,
              duration: 0.9,
              ease: 'power3.out',
              clearProps: 'clipPath,opacity',
            },
            0
          );

          if (innerImg) {
            tl.fromTo(
              innerImg,
              { scale: 1.09 },
              {
                scale: 1,
                duration: 1.05,
                ease: 'power3.out',
                clearProps: 'transform',
              },
              0
            );
          }
        });

        // Desktop & landscape tablet (>= 768px): subtle scrubbed image parallax
        mm.add('(min-width: 768px)', () => {
          const parallaxEls = gsap.utils.toArray<HTMLElement>('[data-reveal="parallax"]');
          parallaxEls.forEach((el) => {
            gsap.fromTo(
              el,
              { yPercent: -5 },
              {
                yPercent: 5,
                ease: 'none',
                scrollTrigger: {
                  trigger: el.parentElement || el,
                  start: 'top bottom',
                  end: 'bottom top',
                  scrub: 0.8,
                },
              }
            );
          });
        });

        ScrollTrigger.refresh();
      });
    });

    return () => {
      window.cancelAnimationFrame(rafId);
      ctx?.revert();
    };
  }, [routeKey]);
}
