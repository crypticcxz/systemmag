"use client";

import { useEffect } from "react";

const SECTION_IDS = ["technology", "products", "applications", "process", "contact"];

/**
 * Tracks which section is currently visible and marks the matching nav link
 * `.is-active`. Also adds `.is-scrolled` to the header once the page scrolls
 * past ~40px.
 */
export function useNavState(): void {
  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".site-header");
    const navLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(".site-nav a[href^='#']"),
    );

    const setActive = (id: string | null) => {
      navLinks.forEach((link) => {
        const href = link.getAttribute("href")?.replace("#", "") ?? "";
        link.classList.toggle("is-active", href === id);
      });
    };

    const observers: IntersectionObserver[] = [];

    SECTION_IDS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0, rootMargin: "-40% 0px -50% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });

    const onScroll = () => {
      if (!header) return;
      header.classList.toggle("is-scrolled", window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observers.forEach((o) => o.disconnect());
      window.removeEventListener("scroll", onScroll);
    };
  }, []);
}
