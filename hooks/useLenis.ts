"use client";

import { useEffect } from "react";

/**
 * Initialises Lenis smooth scroll and runs the rAF update loop.
 * Uses a `mounted` flag to prevent the async import from initialising
 * a second Lenis instance when React Strict Mode double-invokes effects.
 */
export function useLenis(): void {
  useEffect(() => {
    let mounted = true;
    let rafId = 0;
    let destroyLenis: (() => void) | undefined;

    (async () => {
      const { default: Lenis } = await import("lenis");
      if (!mounted) return; // strict-mode unmounted before import resolved

      const lenis = new Lenis({ lerp: 0.085, smoothWheel: true, syncTouch: false });
      document.documentElement.classList.add("lenis", "lenis-smooth");

      const raf = (time: number) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };
      rafId = requestAnimationFrame(raf);

      destroyLenis = () => {
        cancelAnimationFrame(rafId);
        lenis.destroy();
        document.documentElement.classList.remove("lenis", "lenis-smooth");
      };
    })();

    const onClick = (e: MouseEvent) => {
      const a = (e.target as Element).closest("a[href^='#']") as HTMLAnchorElement | null;
      if (!a) return;
      const id = a.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (target) e.preventDefault();
      // Lenis will pick up the native scroll-to once it initialises;
      // for now fall back to native smooth scroll.
      target?.scrollIntoView({ behavior: "smooth" });
    };

    document.addEventListener("click", onClick);

    return () => {
      mounted = false;
      document.removeEventListener("click", onClick);
      destroyLenis?.();
    };
  }, []);
}
