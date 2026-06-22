"use client";

import { useT } from "@/providers/ThemeLanguageProvider";

export function Markets() {
  const t = useT();

  return (
    <section className="applications" id="applications">
      <div className="section-heading" data-reveal>
        <p className="eyebrow">{t("applicationsEyebrow")}</p>
        <h2>{t("applicationsTitle")}</h2>
      </div>

      <div className="market-gallery">
        {/* No data-reveal — visibility is driven by --card-near CSS var from useMarketsScene */}
        <article className="market-card market-card-tall">
          <img src="/assets/img/markets/defense.jpeg" alt="Soldat en équipement tactique" />
          <div className="market-card-copy">
            <span>01</span>
            <h3>{t("marketDefenseTitle")}</h3>
            <p>{t("marketDefenseText")}</p>
            <a href="#contact">{t("marketCta")}</a>
          </div>
        </article>

        <article className="market-card">
          <img
            src="/assets/img/markets/sport-extreme.png"
            alt="Visage équipé de lunettes dans des conditions de froid extrême"
          />
          <div className="market-card-copy">
            <span>02</span>
            <h3>{t("marketSportTitle")}</h3>
            <p>{t("marketSportText")}</p>
            <a href="#contact">{t("marketCta")}</a>
          </div>
        </article>

        <article className="market-card market-card-soft">
          <img src="/assets/img/markets/medical.jpeg" alt="Professionnelle médicale en couloir hospitalier" />
          <div className="market-card-copy">
            <span>03</span>
            <h3>{t("marketMedicalTitle")}</h3>
            <p>{t("marketMedicalText")}</p>
            <a href="#contact">{t("marketCta")}</a>
          </div>
        </article>

        <article className="market-card market-card-wide">
          <img src="/assets/img/markets/accessories-mode.png" alt="Détail textile porté en accessoire de mode" />
          <div className="market-card-copy">
            <span>04</span>
            <h3>{t("marketFashionTitle")}</h3>
            <p>{t("marketFashionText")}</p>
            <a href="#contact">{t("marketCta")}</a>
          </div>
        </article>

        <article className="market-card">
          <img
            src="/assets/img/markets/technical-industry.jpeg"
            alt="Ouvrier dans un environnement industriel technique"
          />
          <div className="market-card-copy">
            <span>05</span>
            <h3>{t("marketIndustryTitle")}</h3>
            <p>{t("marketIndustryText")}</p>
            <a href="#contact">{t("marketCta")}</a>
          </div>
        </article>

        <article className="market-card market-card-soft">
          <img src="/assets/img/markets/reduced-mobility.jpeg" alt="Personne âgée dans un intérieur lumineux" />
          <div className="market-card-copy">
            <span>06</span>
            <h3>{t("marketMobilityTitle")}</h3>
            <p>{t("marketMobilityText")}</p>
            <a href="#contact">{t("marketCta")}</a>
          </div>
        </article>
      </div>
    </section>
  );
}
