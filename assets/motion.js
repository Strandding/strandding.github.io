// A small line drawing that changes perspective with the pointer.
export function knotPath(turnX = 0, turnY = 0) {
  const ax = 0.42 + turnX, ay = 0.32 + turnY;
  const cx = Math.cos(ax), sx = Math.sin(ax);
  const cy = Math.cos(ay), sy = Math.sin(ay);
  const points = [];
  for (let i = 0; i <= 180; i++) {
    const t = i / 180 * Math.PI * 2;
    const x = Math.sin(t) + 2 * Math.sin(2 * t);
    const y = Math.cos(t) - 2 * Math.cos(2 * t);
    const z = -Math.sin(3 * t);
    const ry = y * cx - z * sx;
    const rz = y * sx + z * cx;
    const rx = x * cy + rz * sy;
    points.push(`${i ? 'L' : 'M'}${(80 + rx * 18).toFixed(2)},${(54 + ry * 16).toFixed(2)}`);
  }
  return points.join(' ') + ' Z';
}

function initMotion() {
  const mark = document.querySelector('[data-motion-mark]');
  const path = mark?.querySelector('path');
  if (!path) return;
  const media = matchMedia('(hover: hover) and (pointer: fine) and (min-width: 421px) and (prefers-reduced-motion: no-preference)');
  let x = 0, y = 0, targetX = 0, targetY = 0, frame = 0, previous = 0;

  function draw() { path.setAttribute('d', knotPath(x, y)); }
  function stop() {
    cancelAnimationFrame(frame);
    frame = previous = 0;
  }
  function reset() {
    stop();
    x = y = targetX = targetY = 0;
    draw();
  }
  function tick(now) {
    frame = 0;
    if (!media.matches || document.hidden) { reset(); return; }
    const elapsed = previous ? Math.min(now - previous, 64) : 16;
    previous = now;
    const ease = 1 - Math.exp(-elapsed / 140);
    x += (targetX - x) * ease;
    y += (targetY - y) * ease;
    if (Math.abs(targetX - x) + Math.abs(targetY - y) < 0.0005) {
      x = targetX; y = targetY;
      previous = 0;
    } else {
      frame = requestAnimationFrame(tick);
    }
    draw();
  }
  function requestDraw() {
    if (!frame && media.matches && !document.hidden) frame = requestAnimationFrame(tick);
  }
  function rest() {
    targetX = targetY = 0;
    requestDraw();
  }
  window.addEventListener('pointermove', event => {
    if (!media.matches || document.hidden || event.pointerType !== 'mouse' || event.buttons) return;
    targetX = (Math.max(0, Math.min(1, event.clientY / innerHeight)) - 0.5) * -0.5;
    targetY = (Math.max(0, Math.min(1, event.clientX / innerWidth)) - 0.5) * 0.6;
    requestDraw();
  }, { passive: true });
  document.documentElement.addEventListener('pointerleave', rest);
  window.addEventListener('blur', reset);
  window.addEventListener('resize', reset, { passive: true });
  document.addEventListener('visibilitychange', reset);
  media.addEventListener('change', reset);
  draw();
}

if (typeof document !== 'undefined') initMotion();
