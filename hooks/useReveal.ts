"use client";

import { useEffect } from "react";

/**
 * Scroll-reveal: adds `is-visible` to every `[data-reveal]` element as it
 * enters the viewport, and seeds `--reveal-i` on grouped children so the CSS
 * can stagger them. Mirrors the original IntersectionObserver behaviour.
 */
export function useReveal(): void {
  useEffect(() => {
    document.documentElement.classList.add("js-enabled");

    const revealItems = Array.from(
      document.querySelectorAll<HTMLElement>("[data-reveal]"),
    );

    document.querySelectorAll<HTMLElement>("[data-reveal-group]").forEach((group) => {
      group.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el, i) => {
        el.style.setProperty("--reveal-i", String(i));
      });
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" },
    );

    const revealVisibleNow = () => {
      revealItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.96 && rect.bottom > 0) {
          item.classList.add("is-visible");
        }
      });
    };

    const onHashChange = () => requestAnimationFrame(revealVisibleNow);

    window.addEventListener("load", revealVisibleNow);
    window.addEventListener("hashchange", onHashChange);
    revealVisibleNow();
    revealItems.forEach((item) => observer.observe(item));

    return () => {
      observer.disconnect();
      window.removeEventListener("load", revealVisibleNow);
      window.removeEventListener("hashchange", onHashChange);
      document.documentElement.classList.remove("js-enabled");
    };
  }, []);
}
