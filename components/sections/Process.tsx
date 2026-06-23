"use client";

import { useT } from "@/providers/ThemeLanguageProvider";

export function Process() {
  const t = useT();

  return (
    <section className="process section-shell" id="process">

      <div className="section-heading" data-reveal>
        <p className="eyebrow">{t("processEyebrow")}</p>
        <h2>{t("processTitle")}</h2>
      </div>

      <div className="process-track" data-reveal-group>
        <article data-reveal>
          <span>01</span>
          <div className="step-media">
            <img
              src="/assets/img/prototype/framing.avif"
              alt="Croquis technique d'une fermeture magnétique sur papier"
              loading="lazy"
              decoding="async"
            />
            <span className="step-frame" aria-hidden="true" />
          </div>
          <h3>{t("processOneTitle")}</h3>
          <p>{t("processOneText")}</p>
        </article>

        <article data-reveal>
          <span>02</span>
          <div className="step-media">
            <img
              src="/assets/img/prototype/prototype.avif"
              alt="Bande magnétique souple en gros plan"
              loading="lazy"
              decoding="async"
            />
            <span className="step-frame" aria-hidden="true" />
          </div>
          <h3>{t("processTwoTitle")}</h3>
          <p>{t("processTwoText")}</p>
        </article>

        <article data-reveal>
          <span>03</span>
          <div className="step-media">
            <img
              src="/assets/img/prototype/validation.avif"
              alt="Test d'ouverture d'une fermeture magnétique sur textile"
              loading="lazy"
              decoding="async"
            />
            <span className="step-frame" aria-hidden="true" />
          </div>
          <h3>{t("processThreeTitle")}</h3>
          <p>{t("processThreeText")}</p>
        </article>

        <article data-reveal>
          <span>04</span>
          <div className="step-media">
            <img
              src="/assets/img/prototype/industrialization.avif"
              alt="Ligne de production industrielle SYSTEMMAG"
              loading="lazy"
              decoding="async"
            />
            <span className="step-frame" aria-hidden="true" />
          </div>
          <h3>{t("processFourTitle")}</h3>
          <p>{t("processFourText")}</p>
        </article>
      </div>
    </section>
  );
}
