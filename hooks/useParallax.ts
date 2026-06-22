"use client";

import { useEffect } from "react";

/**
 * Drives the `--px` custom property on `[data-parallax]` depth layers from
 * their offset to the viewport centre, scaled by the element's speed.
 */
export function useParallax(reduced: boolean): void {
  useEffect(() => {
    if (reduced) return;

    const items = Array.from(document.querySelectorAll<HTMLElement>("[data-parallax]"));
    if (!items.length) return;

    let raf = 0;

    const update = () => {
      raf = 0;
      const viewport = window.innerHeight || 1;
      items.forEach((el) => {
        const speed = parseFloat(el.dataset.parallax || "0") || 0;
        const rect = el.getBoundingClientRect();
        const centerOffset = rect.top + rect.height / 2 - viewport / 2;
        el.style.setProperty("--px", `${(centerOffset * speed).toFixed(1)}px`);
      });
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
  }, [reduced]);
}
