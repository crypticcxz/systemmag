"use client";

import { useApp, useT } from "@/providers/ThemeLanguageProvider";

export function SiteHeader() {
  const { lang, setLang } = useApp();
  const t = useT();

  return (
    <header className="site-header" data-reveal>
      <a className="brand" href="#top" aria-label="SYSTEMMAG accueil">
        <img className="brand-logo" src="/assets/img/logo.png" alt="SYSTEMMAG" />
      </a>

      <nav className="site-nav" aria-label="Navigation principale">
        <a href="#technology">{t("navTechnology")}</a>
        <a href="#products">{t("navProducts")}</a>
        <a href="#applications">{t("navApplications")}</a>
        <a href="#process">{t("navProcess")}</a>
      </nav>

      <div className="header-actions">
        <button
          className="lang-toggle"
          type="button"
          aria-label="Switch language"
          onClick={() => setLang(lang === "fr" ? "en" : "fr")}
        >
          <span className={`lang-option${lang === "fr" ? " is-active" : ""}`}>FR</span>
          <span className={`lang-option${lang === "en" ? " is-active" : ""}`}>EN</span>
        </button>

        <a className="nav-cta" href="#contact">{t("navCta")}</a>
      </div>
    </header>
  );
}
