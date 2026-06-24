"use client";

import { useT } from "@/providers/ThemeLanguageProvider";

export function CaseStudy() {
  const t = useT();

  return (
    <section className="case-study" id="case-study" data-reveal>
      <div className="case-study-inner">
        <div className="case-study-media">
          <img
            src="/assets/img/content.png"
            alt="Fermeture magnétique intégrée dans un textile technique"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="case-study-text">
          <p className="case-study-category">{t("caseStudyCategory")}</p>
          <h2 className="case-study-headline">{t("caseStudyHeadline")}</h2>
          <p className="case-study-attribution">{t("caseStudyAttribution")}</p>
          <blockquote className="case-study-quote">
            {t("caseStudyQuote")}
          </blockquote>
          <p className="case-study-body">{t("caseStudyBody")}</p>
        </div>
      </div>
    </section>
  );
}
