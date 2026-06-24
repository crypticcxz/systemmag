"use client";

import { useT } from "@/providers/ThemeLanguageProvider";

const icons = {
  position: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {/* Two modules approaching, dashed field between them */}
      <rect x="2" y="9" width="7" height="6" rx="1.5" />
      <rect x="15" y="9" width="7" height="6" rx="1.5" />
      <path d="M9 12h2M13 12h2" strokeDasharray="1.5 1.5" />
    </svg>
  ),
  hold: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" aria-hidden="true">
      {/* Bar with evenly distributed vertical lines — distributed hold */}
      <rect x="3" y="10" width="18" height="4" rx="1" />
      <path d="M8 10v4M12 10v4M16 10v4" />
    </svg>
  ),
  adjust: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {/* Track with sliding block and directional arrow */}
      <path d="M3 12h18" />
      <rect x="10" y="9" width="6" height="6" rx="1" />
      <path d="M7 10l-2 2 2 2" />
    </svg>
  ),
  open: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {/* Two curved bands separating — peeling gesture */}
      <path d="M4 9c2 1.5 4.5 2.5 8 2.5s6-1 8-2.5" />
      <path d="M4 15c2-1.5 4.5-2.5 8-2.5s6 1 8 2.5" />
      <path d="M20 9l1 3-1 3" />
    </svg>
  ),
} as const;

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
          <div className="step-icon">{icons.position}</div>
          <span className="step-number">01</span>
          <h3>{t("stepOneTitle")}</h3>
          <p>{t("stepOneText")}</p>
        </article>

        <article className="sequence-step" data-reveal>
          <div className="step-icon">{icons.hold}</div>
          <span className="step-number">02</span>
          <h3>{t("stepTwoTitle")}</h3>
          <p>{t("stepTwoText")}</p>
        </article>

        <article className="sequence-step" data-reveal>
          <div className="step-icon">{icons.adjust}</div>
          <span className="step-number">03</span>
          <h3>{t("stepThreeTitle")}</h3>
          <p>{t("stepThreeText")}</p>
        </article>

        <article className="sequence-step" data-reveal>
          <div className="step-icon">{icons.open}</div>
          <span className="step-number">04</span>
          <h3>{t("stepFourTitle")}</h3>
          <p>{t("stepFourText")}</p>
        </article>
      </div>
    </section>
  );
}
