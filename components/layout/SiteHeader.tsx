"use client";

import { useEffect, useState } from "react";
import { useApp, useT } from "@/providers/ThemeLanguageProvider";

export function SiteHeader() {
  const { lang, setLang } = useApp();
  const t = useT();
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const links = [
    ["#technology", t("navTechnology")],
    ["#products", t("navProducts")],
    ["#applications", t("navApplications")],
    ["#process", t("navProcess")],
  ] as const;

  const close = () => setMenuOpen(false);

  return (
    <header className="site-header" data-reveal data-menu-open={menuOpen || undefined}>
      <nav className="site-nav" aria-label="Navigation principale">
        {links.map(([href, label]) => (
          <a key={href} href={href}>
            {label}
          </a>
        ))}
      </nav>

      <a className="brand" href="#top" aria-label="SYSTEMMAG accueil" onClick={close}>
        <img className="brand-logo" src="/assets/img/logo.png" alt="SYSTEMMAG" />
      </a>

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

        <button
          className="nav-burger"
          type="button"
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      <nav className="mobile-nav" aria-label="Navigation mobile">
        {links.map(([href, label]) => (
          <a key={href} href={href} onClick={close}>
            {label}
          </a>
        ))}
        <a className="mobile-nav-cta" href="#contact" onClick={close}>
          {t("navCta")}
        </a>
      </nav>
    </header>
  );
}
