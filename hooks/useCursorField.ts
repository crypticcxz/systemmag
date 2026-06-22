"use client";

import { useEffect } from "react";

/** Tracks the pointer to position the soft cursor glow. */
export function useCursorField(): void {
  useEffect(() => {
    const cursorField = document.querySelector<HTMLElement>(".cursor-field");
    if (!cursorField) return;

    const onMove = (event: PointerEvent) => {
      document.body.style.setProperty("--mx", `${event.clientX}px`);
      document.body.style.setProperty("--my", `${event.clientY}px`);
    };
    const onLeave = () => {
      cursorField.style.opacity = "0";
    };
    const onEnter = () => {
      cursorField.style.opacity = "1";
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerleave", onLeave);
    window.addEventListener("pointerenter", onEnter);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      window.removeEventListener("pointerenter", onEnter);
    };
  }, []);
}
