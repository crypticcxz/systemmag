"use client";

import { useT } from "@/providers/ThemeLanguageProvider";

export function Hero() {
  const t = useT();

  return (
    <section className="hero" id="top">
      {/* Text block — Hadrian style: heading left, lede right */}
      <div className="hero-text" data-reveal>
        <div className="hero-text-left">
          <h1 className="hero-title">{t("heroTitle")}</h1>
          <div className="hero-actions">
            <a className="button button-primary" href="#contact">{t("heroPrimary")}</a>
            <a className="button button-secondary" href="#technology">{t("heroSecondary")}</a>
          </div>
        </div>
        <p className="hero-lede">{t("heroLede")}</p>
      </div>

      {/* Cinematic video — Divergent style: full-viewport inline video */}
      <div className="hero-cinematic">
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
        <div className="hero-cinematic-overlay" aria-hidden="true">
          <span className="hero-cinematic-tagline">CONÇU POUR DISPARAÎTRE</span>
        </div>
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
