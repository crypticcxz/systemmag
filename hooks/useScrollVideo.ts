"use client";

import { useEffect } from "react";

/**
 * The background video now plays natively (autoplay + loop) rather than being
 * scrubbed to scroll position. This hook only mirrors the static site's
 * remaining behaviour: toggle `has-scroll-video` on <body> once the video has
 * usable metadata, and clear it on error so the CSS fallback shows.
 */
export function useScrollVideo(): void {
  useEffect(() => {
    const scrollVideo = document.querySelector<HTMLVideoElement>(".scroll-video");
    if (!scrollVideo) return;

    const onMeta = () => {
      document.body.classList.toggle("has-scroll-video", scrollVideo.duration > 0);
    };
    const onError = () => {
      document.body.classList.remove("has-scroll-video");
    };

    scrollVideo.addEventListener("loadedmetadata", onMeta);
    scrollVideo.addEventListener("error", onError);
    if (scrollVideo.readyState >= 1) onMeta();

    return () => {
      scrollVideo.removeEventListener("loadedmetadata", onMeta);
      scrollVideo.removeEventListener("error", onError);
    };
  }, []);
}
