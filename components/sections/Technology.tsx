"use client";

import { useT } from "@/providers/ThemeLanguageProvider";

export function Technology() {
  const t = useT();

  return (
    <section className="principle" id="technology">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">{t("principleEyebrow")}</p>
        <h2>{t("principleTitle")}</h2>
        <p>{t("principleIntro")}</p>
      </div>

      <div className="sequence" data-reveal-group>
        <article className="sequence-step" data-reveal>
          <span className="step-number">01</span>
          <h3>{t("stepOneTitle")}</h3>
          <p>{t("stepOneText")}</p>
        </article>

        <article className="sequence-step" data-reveal>
          <span className="step-number">02</span>
          <h3>{t("stepTwoTitle")}</h3>
          <p>{t("stepTwoText")}</p>
        </article>

        <article className="sequence-step" data-reveal>
          <span className="step-number">03</span>
          <h3>{t("stepThreeTitle")}</h3>
          <p>{t("stepThreeText")}</p>
        </article>

        <article className="sequence-step" data-reveal>
          <span className="step-number">04</span>
          <h3>{t("stepFourTitle")}</h3>
          <p>{t("stepFourText")}</p>
        </article>
      </div>
    </section>
  );
}
