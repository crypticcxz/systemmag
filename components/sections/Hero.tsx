"use client";

import { useT } from "@/providers/ThemeLanguageProvider";

export function Hero() {
  const t = useT();

  return (
    <section className="hero section-shell" data-scroll-region>
      <div className="hero-copy" data-reveal>
        <h1 className="hero-title">{t("heroTitle")}</h1>
        <p className="hero-lede">{t("heroLede")}</p>
        <div className="hero-actions">
          <a className="button button-primary" href="#contact">{t("heroPrimary")}</a>
          <a className="button button-secondary" href="#technology">{t("heroSecondary")}</a>
        </div>
      </div>

      <div className="hero-stage" data-reveal>
        <div className="stage-topline">
          <span>BA-V12-024-N40</span>
          <span>{t("stageStatus")}</span>
        </div>
        <div className="magnetic-rig" aria-label="Animation technique de blocs aimantés">
          <div className="field-rings" aria-hidden="true">
            <span /><span /><span />
          </div>
          <div className="rail rail-left">
            <span className="pole north">N</span>
            <span className="pole south">S</span>
            <span className="pole north">N</span>
            <span className="pole south">S</span>
            <span className="pole north">N</span>
          </div>
          <div className="rail rail-right">
            <span className="pole south">S</span>
            <span className="pole north">N</span>
            <span className="pole south">S</span>
            <span className="pole north">N</span>
            <span className="pole south">S</span>
          </div>
          <div className="pull-gauge">
            <span />
            <strong>8-10x</strong>
          </div>
        </div>
        <div className="stage-readout">
          <div>
            <span>{t("readoutOneLabel")}</span>
            <strong>{t("readoutOneValue")}</strong>
          </div>
          <div>
            <span>{t("readoutTwoLabel")}</span>
            <strong>{t("readoutTwoValue")}</strong>
          </div>
        </div>
      </div>

      <div className="scroll-cues" aria-hidden="true">
        <div className="cue is-active">
          <span>01</span>
          <strong>{t("cueOne")}</strong>
        </div>
        <div className="cue">
          <span>02</span>
          <strong>{t("cueTwo")}</strong>
        </div>
        <div className="cue">
          <span>03</span>
          <strong>{t("cueThree")}</strong>
        </div>
        <div className="cue">
          <span>04</span>
          <strong>{t("cueFour")}</strong>
        </div>
      </div>

      <div className="hero-strip" data-reveal>
        <span>{t("stripOne")}</span>
        <span>{t("stripTwo")}</span>
        <span>OEKO-TEX</span>
        <span>REACH</span>
        <span>{t("stripFive")}</span>
      </div>
    </section>
  );
}
