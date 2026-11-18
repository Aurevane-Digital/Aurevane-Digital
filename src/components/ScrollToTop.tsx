import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const useIsomorphicLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : useEffect;

export const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useIsomorphicLayoutEffect(() => {
    if (typeof window === 'undefined') return;

    if (hash) {
      const targetId = hash.slice(1);
      const rafId = window.requestAnimationFrame(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      });
      return () => window.cancelAnimationFrame(rafId);
    }

    ScrollTrigger.clearScrollMemory();
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    document.documentElement.scrollTop = 0;
  }, [pathname, hash]);

  return null;
};
