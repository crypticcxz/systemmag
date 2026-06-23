"use client";

import { useT } from "@/providers/ThemeLanguageProvider";

export function Hero() {
  const t = useT();

  return (
    <section className="hero section-shell" data-scroll-region>
      <div className="hero-copy" data-reveal>
        <h1 className="hero-title">{t("heroTitle")}</h1>
        <p className="hero-lede">{t("heroLede")}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#contact">{t("heroPrimary")}</a>
          <a className="button button-secondary" href="#technology">{t("heroSecondary")}</a>
        </div>
      </div>

      <div className="hero-strip" data-reveal>
        <span>{t("stripOne")}</span>
        <span>{t("stripTwo")}</span>
        <span>OEKO-TEX</span>
        <span>REACH</span>
        <span>{t("stripFive")}</span>
      </div>
    </section>
  );
}
