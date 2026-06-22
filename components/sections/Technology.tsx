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
          <div className="mini-diagram align-diagram" aria-hidden="true">
            <span className="field-arc" />
            <span className="mag n" data-pole="N" />
            <span className="mag s" data-pole="S" />
            <span className="mag n" data-pole="N" />
            <span className="mag s" data-pole="S" />
          </div>
          <h3>{t("stepOneTitle")}</h3>
          <p>{t("stepOneText")}</p>
        </article>

        <article className="sequence-step" data-reveal>
          <span className="step-number">02</span>
          <div className="mini-diagram close-diagram" aria-hidden="true">
            <span className="mag n" data-pole="N" />
            <span className="mag s" data-pole="S" />
            <span className="mag n" data-pole="N" />
            <span className="mag s" data-pole="S" />
            <span className="mag n" data-pole="N" />
            <span className="mag s" data-pole="S" />
          </div>
          <h3>{t("stepTwoTitle")}</h3>
          <p>{t("stepTwoText")}</p>
        </article>

        <article className="sequence-step" data-reveal>
          <span className="step-number">03</span>
          <div className="mini-diagram slide-diagram" aria-hidden="true">
            <span className="sheath" />
            <span className="mag block" data-pole="N" />
            <span className="stop" data-pole="S" />
          </div>
          <h3>{t("stepThreeTitle")}</h3>
          <p>{t("stepThreeText")}</p>
        </article>

        <article className="sequence-step" data-reveal>
          <span className="step-number">04</span>
          <div className="mini-diagram peel-diagram" aria-hidden="true">
            <span className="hinge" />
            <span className="mag n" data-pole="N" />
            <span className="mag s" data-pole="S" />
            <span className="mag n" data-pole="N" />
          </div>
          <h3>{t("stepFourTitle")}</h3>
          <p>{t("stepFourText")}</p>
        </article>
      </div>
    </section>
  );
}
