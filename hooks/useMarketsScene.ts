"use client";

import { useEffect } from "react";

/**
 * Drives the v6.14 sticky markets carousel every rAF frame.
 * Running on every frame (not only on scroll events) is intentional —
 * Lenis smooth-scroll can silently drop native scroll events, so an
 * event-triggered approach misses frames. The per-frame cost is trivial:
 * ~18 style.setProperty calls on 6 cards at 60 fps.
 *
 * CSS vars written on each card:
 *   --card-near   0→1  opacity / reveal intensity
 *   --card-x      %    horizontal offset from center
 *   --card-y      %    vertical offset (0 unless overridden)
 *   --card-tilt   deg  rotateY tilt
 *   --card-active 0|1  convenience flag
 *
 * CSS var written on .market-gallery:
 *   --scene-progress  0→1  overall section progress (drives bg glow)
 *
 * Classes toggled on active card:
 *   is-scene-active   restores pointer-events
 *   is-liquid-active  triggers morphing keyframe animations
 */
export function useMarketsScene(): void {
  useEffect(() => {
    const section = document.querySelector<HTMLElement>(".applications");
    const gallery = document.querySelector<HTMLElement>(".market-gallery");
    const cards = Array.from(document.querySelectorAll<HTMLElement>(".market-card"));

    if (!section || !gallery || !cards.length) return;

    const count = cards.length;
    const maxIndex = count - 1;
    // hold pads both ends so the first and last cards each get a full dwell beat
    const hold = 0.6;

    const update = () => {
      const vph = window.innerHeight;
      const sectionTop = section.getBoundingClientRect().top;
      const scrollRoom = Math.max(1, section.offsetHeight - vph);
      const scrolled = Math.max(0, -sectionTop);
      const progress = Math.min(1, scrolled / scrollRoom);

      const floatIndex = Math.min(
        maxIndex,
        Math.max(0, progress * (maxIndex + hold * 2) - hold),
      );

      // Set on both gallery (children read it) and section (sibling heading reads it via inheritance)
      gallery.style.setProperty("--scene-progress", progress.toFixed(4));
      section.style.setProperty("--scene-progress", progress.toFixed(4));

      let bestIdx = 0;
      let bestDist = Infinity;

      for (let i = 0; i < count; i++) {
        const offset = floatIndex - i; // 0=active, >0=past(left), <0=future(right)
        const near = Math.max(0, 1 - Math.abs(offset));
        const cardX = (-offset * 56).toFixed(2);
        const cardTilt = (offset * 6).toFixed(2);

        const card = cards[i];
        card.style.setProperty("--card-near", near.toFixed(4));
        card.style.setProperty("--card-x", `${cardX}%`);
        card.style.setProperty("--card-y", "0%");
        card.style.setProperty("--card-tilt", `${cardTilt}deg`);
        card.style.setProperty("--card-active", near > 0.5 ? "1" : "0");

        const dist = Math.abs(offset);
        if (dist < bestDist) {
          bestDist = dist;
          bestIdx = i;
        }
      }

      for (let i = 0; i < count; i++) {
        const active = i === bestIdx;
        cards[i].classList.toggle("is-scene-active", active);
        cards[i].classList.toggle("is-liquid-active", active);
      }
    };

    // Pointer glow: track cursor position on the active card
    const onPointerMove = (e: PointerEvent) => {
      const card = (e.target as Element).closest<HTMLElement>(".market-card.is-scene-active");
      if (!card) return;
      const rect = card.getBoundingClientRect();
      card.style.setProperty(
        "--card-glow-x",
        `${(((e.clientX - rect.left) / rect.width) * 100).toFixed(1)}%`,
      );
    };

    document.addEventListener("pointermove", onPointerMove);

    // Continuous rAF loop — runs every frame, not only on scroll events.
    // This is required because Lenis smooth-scroll can silently drop
    // native window 'scroll' events while still animating the scroll position.
    let running = true;
    let ready = false;
    const loop = () => {
      if (!running) return;
      update();
      if (!ready) {
        // CSS rule `body:not(.js-markets-ready) .market-card:not(:first-child) { opacity: 0 }` hides
        // cards 2–6 until this class is present. Add it after the first rAF so initial positions
        // are committed before the cards become visible.
        document.body.classList.add("js-markets-ready");
        ready = true;
      }
      requestAnimationFrame(loop);
    };
    requestAnimationFrame(loop);

    return () => {
      running = false;
      document.body.classList.remove("js-markets-ready");
      document.removeEventListener("pointermove", onPointerMove);
    };
  }, []);
}
