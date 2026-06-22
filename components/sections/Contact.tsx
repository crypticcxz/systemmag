"use client";

import { useT } from "@/providers/ThemeLanguageProvider";

export function Contact() {
  const t = useT();

  return (
    <section className="contact" id="contact">
      <div className="contact-panel" data-reveal>
        <div className="contact-copy">
          <p className="eyebrow">{t("contactEyebrow")}</p>
          <h2>{t("contactTitle")}</h2>
          <p>{t("contactText")}</p>
          <div className="contact-actions">
            <a className="button button-primary" href="mailto:contact@systemmag.com">
              contact@systemmag.com
            </a>
            <a className="button button-secondary" href="tel:+33145089141">
              +33 1 45 08 91 41
            </a>
          </div>
        </div>

        <div className="contact-visual" aria-hidden="true">
          <div className="contact-orbit">
            <span className="orbit-ring" />
            <span className="magnet-chip chip-a">N</span>
            <span className="magnet-chip chip-b">S</span>
            <span className="magnet-chip chip-c">N</span>
            <span className="magnet-chip chip-d">S</span>
          </div>
          <div className="brief-card">
            <span className="brief-kicker">SM-BRIEF-01</span>
            <strong>{t("contactBriefTitle")}</strong>
            <span>{t("contactBriefText")}</span>
          </div>
        </div>
      </div>

      <address data-reveal>
        <span className="address-label">{t("contactAddressLabel")}</span>
        <span>SYSTEMMAG SAS</span>
        <span>20 rue Bouvier</span>
        <span>75011 Paris, France</span>
        <a
          href="https://maps.google.com/?q=20%20rue%20Bouvier%2075011%20Paris%20France"
          target="_blank"
          rel="noreferrer"
        >
          {t("contactMap")}
        </a>
      </address>
    </section>
  );
}
