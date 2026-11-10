export const FRAME_EXT = 'jpg';

export function getFrameUrl(n: number): string {
  return `/frames/ezgif-frame-${String(n).padStart(3, '0')}.${FRAME_EXT}`;
}
