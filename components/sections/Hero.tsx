"use client";

import { useT } from "@/providers/ThemeLanguageProvider";

export function Hero() {
  const t = useT();

  return (
    <section className="hero" id="top">
      <div className="hero-text">
        <h1 className="hero-title">
          <span className="hero-line-wrap">
            <span className="hero-line hero-line-1">{t("heroLine1")}</span>
          </span>
          <span className="hero-line-wrap">
            <span className="hero-line hero-line-2">{t("heroLine2")}</span>
          </span>
        </h1>
      </div>

      <div className="hero-video-frame">
        <video
          className="hero-cinematic-video"
          muted
          playsInline
          autoPlay
          loop
          preload="auto"
          aria-hidden="true"
        >
          <source src="/assets/video/systemmag-scroll-loop.mp4" type="video/mp4" />
        </video>
        <div className="hero-strip">
          <span>{t("stripOne")}</span>
          <span>{t("stripTwo")}</span>
          <span>OEKO-TEX</span>
          <span>REACH</span>
          <span>{t("stripFive")}</span>
        </div>
      </div>
    </section>
  );
}
