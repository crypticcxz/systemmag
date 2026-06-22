"use client";

import { useEffect } from "react";

/**
 * Drives the three CSS custom properties that power the v6.13 liquid-glass
 * scroll reveal on each `.market-card`:
 *   --liquid-progress  0→1  card entering viewport from below
 *   --liquid-center    0→1  peaks at 1 when card center = viewport center
 *   --liquid-y         px   parallax y offset (raw distance × scale factor)
 *
 * Also toggles `is-liquid-active` on whichever card is most centred.
 */
export function useMarketsLiquid(): void {
  useEffect(() => {
    const cards = Array.from(document.querySelectorAll<HTMLElement>(".market-card"));
    if (!cards.length) return;

    let raf = 0;

    const update = () => {
      raf = 0;
      const vph = window.innerHeight;
      let bestIdx = 0;
      let bestCenterDist = Infinity;

      cards.forEach((card, i) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;

        // progress: 0 when top edge at bottom of viewport → 1 when fully revealed
        const progress = Math.min(1, Math.max(0, (vph - rect.top) / (rect.height * 0.72)));

        // center: 1 when card centre aligns with viewport centre
        const dist = Math.abs(cardCenter - vph / 2);
        const center = Math.min(1, Math.max(0, 1 - dist / (vph * 0.62)));

        // liquidY: parallax offset that mirrors scroll position relative to screen centre
        const liquidY = (cardCenter - vph / 2) * 0.09;

        card.style.setProperty("--liquid-progress", progress.toFixed(3));
        card.style.setProperty("--liquid-center", center.toFixed(3));
        card.style.setProperty("--liquid-y", `${liquidY.toFixed(1)}px`);

        if (dist < bestCenterDist) {
          bestCenterDist = dist;
          bestIdx = i;
        }
      });

      cards.forEach((card, i) =>
        card.classList.toggle("is-liquid-active", i === bestIdx),
      );
    };

    const request = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", request);
    update();

    return () => {
      window.removeEventListener("scroll", request);
      window.removeEventListener("resize", request);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
}
