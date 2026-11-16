export const TOTAL_WORK_FRAMES = 181;

/**
 * Returns the URL for the supplied WebP animation frames (f_000.webp to f_180.webp).
 * 181 frames total, 1920x1080 resolution.
 */
export function getWorkFrameUrl(index: number): string {
  const clamped = Math.max(0, Math.min(TOTAL_WORK_FRAMES - 1, Math.round(index)));
  return `/frames/f_${String(clamped).padStart(3, '0')}.webp`;
}

export const FRAME_EXT = 'jpg';

/**
 * Legacy frame helper retained for case studies backwards compatibility.
 */
export function getFrameUrl(n: number): string {
  return `/frames/ezgif-frame-${String(n).padStart(3, '0')}.${FRAME_EXT}`;
}

