import React, { useRef, useState } from 'react';

interface MagneticWrapProps {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}

/**
 * Lightweight desktop-only magnetic hover attraction (±strength px) with crisp spring settle.
 * Automatically inert on touch devices or when prefers-reduced-motion: reduce is active.
 */
export const MagneticWrap: React.FC<MagneticWrapProps> = ({
  children,
  className = '',
  strength = 5,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const node = ref.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    setOffset({
      x: Math.round(relX * strength * 2 * 10) / 10,
      y: Math.round(relY * strength * 2 * 10) / 10,
    });
  };

  const handleMouseLeave = () => {
    if (offset.x !== 0 || offset.y !== 0) {
      setOffset({ x: 0, y: 0 });
    }
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `translate3d(${offset.x}px, ${offset.y}px, 0)`,
        transition:
          offset.x === 0 && offset.y === 0
            ? 'transform 0.45s cubic-bezier(0.16, 1, 0.3, 1)'
            : 'transform 0.14s ease-out',
      }}
      className={`inline-block ${className}`}
    >
      {children}
    </div>
  );
};
