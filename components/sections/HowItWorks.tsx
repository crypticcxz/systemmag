"use client";

import { useT } from "@/providers/ThemeLanguageProvider";

export function HowItWorks() {
  const t = useT();

  return (
    <section className="howitworks section-shell" id="how-it-works">
      <span className="depth-layer depth-warm" data-parallax="-0.05" aria-hidden="true" />

      <div className="section-heading" data-reveal>
        <p className="eyebrow">{t("hiwEyebrow")}</p>
        <h2>{t("hiwTitle")}</h2>
        <p>{t("hiwIntro")}</p>
      </div>

      <div className="hiw-track">
        <article className="hiw-step" data-reveal>
          <div className="hiw-media">
            <img
              src="/assets/img/how-it-works/positionnement.avif"
              alt="Deux bandes textiles magnétiques qui s'alignent"
              loading="lazy"
              decoding="async"
            />
            <span className="hiw-frame" aria-hidden="true" />
          </div>
          <div className="hiw-copy">
            <span className="hiw-num">01</span>
            <h3>{t("hiwOneTitle")}</h3>
            <span className="hiw-rule" aria-hidden="true" />
            <p>{t("hiwOneText")}</p>
          </div>
        </article>

        <article className="hiw-step" data-reveal>
          <div className="hiw-media">
            <img
              src="/assets/img/how-it-works/maintien.avif"
              alt="Rabat magnétique superposé le long de l'arête"
              loading="lazy"
              decoding="async"
            />
            <span className="hiw-frame" aria-hidden="true" />
          </div>
          <div className="hiw-copy">
            <span className="hiw-num">02</span>
            <h3>{t("hiwTwoTitle")}</h3>
            <span className="hiw-rule" aria-hidden="true" />
            <p>{t("hiwTwoText")}</p>
          </div>
        </article>

        <article className="hiw-step" data-reveal>
          <div className="hiw-media">
            <img
              src="/assets/img/how-it-works/pelage.avif"
              alt="Ouverture d'une fermeture magnétique par pelage"
              loading="lazy"
              decoding="async"
            />
            <span className="hiw-frame" aria-hidden="true" />
          </div>
          <div className="hiw-copy">
            <span className="hiw-num">03</span>
            <h3>{t("hiwThreeTitle")}</h3>
            <span className="hiw-rule" aria-hidden="true" />
            <p>{t("hiwThreeText")}</p>
          </div>
        </article>
      </div>
    </section>
  );
}
