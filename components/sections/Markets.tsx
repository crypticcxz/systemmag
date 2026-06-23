"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { useT } from "@/providers/ThemeLanguageProvider";
import type { I18nKey } from "@/lib/i18n";

const SLIDES: {
  num: string;
  img: string;
  alt: string;
  titleKey: I18nKey;
  textKey: I18nKey;
}[] = [
  {
    num: "01",
    img: "/assets/img/markets/defense.jpeg",
    alt: "Soldat en équipement tactique",
    titleKey: "marketDefenseTitle",
    textKey: "marketDefenseText",
  },
  {
    num: "02",
    img: "/assets/img/markets/sport-extreme.png",
    alt: "Visage équipé de lunettes dans des conditions de froid extrême",
    titleKey: "marketSportTitle",
    textKey: "marketSportText",
  },
  {
    num: "03",
    img: "/assets/img/markets/medical.jpeg",
    alt: "Professionnelle médicale en couloir hospitalier",
    titleKey: "marketMedicalTitle",
    textKey: "marketMedicalText",
  },
  {
    num: "04",
    img: "/assets/img/markets/accessories-mode.png",
    alt: "Détail textile porté en accessoire de mode",
    titleKey: "marketFashionTitle",
    textKey: "marketFashionText",
  },
  {
    num: "05",
    img: "/assets/img/markets/technical-industry.jpeg",
    alt: "Ouvrier dans un environnement industriel technique",
    titleKey: "marketIndustryTitle",
    textKey: "marketIndustryText",
  },
  {
    num: "06",
    img: "/assets/img/markets/reduced-mobility.jpeg",
    alt: "Personne âgée dans un intérieur lumineux",
    titleKey: "marketMobilityTitle",
    textKey: "marketMobilityText",
  },
];

export function Markets() {
  const t = useT();
  const [current, setCurrent] = useState(0);
  const dragStartX = useRef<number | null>(null);
  const wheelIntent = useRef(0);
  const wheelLocked = useRef(false);
  const count = SLIDES.length;

  const prev = useCallback(() => setCurrent((c) => (c - 1 + count) % count), [count]);
  const next = useCallback(() => setCurrent((c) => (c + 1) % count), [count]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [prev, next]);

  const onTouchStart = (e: React.TouchEvent) => {
    dragStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (dragStartX.current === null) return;
    const dx = e.changedTouches[0].clientX - dragStartX.current;
    if (dx > 50) prev();
    else if (dx < -50) next();
    dragStartX.current = null;
  };

  const onMouseDown = (e: React.MouseEvent) => {
    dragStartX.current = e.clientX;
  };
  const onMouseUp = (e: React.MouseEvent) => {
    if (dragStartX.current === null) return;
    const dx = e.clientX - dragStartX.current;
    if (Math.abs(dx) > 50) {
      if (dx > 0) prev();
      else next();
    }
    dragStartX.current = null;
  };

  const onWheel = (e: React.WheelEvent) => {
    const horizontalIntent = Math.abs(e.deltaX) > Math.abs(e.deltaY);
    const shiftedWheel = e.shiftKey && Math.abs(e.deltaY) > 0;

    if (!horizontalIntent && !shiftedWheel) return;

    e.preventDefault();
    if (wheelLocked.current) return;

    const delta = horizontalIntent ? e.deltaX : e.deltaY;
    wheelIntent.current += delta;

    if (Math.abs(wheelIntent.current) < 44) return;

    if (wheelIntent.current > 0) next();
    else prev();

    wheelIntent.current = 0;
    wheelLocked.current = true;
    window.setTimeout(() => {
      wheelLocked.current = false;
    }, 520);
  };

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section className="markets-slider" id="applications">
      <div className="ms-header" data-reveal>
        <p className="eyebrow">{t("applicationsEyebrow")}</p>
        <h2>{t("applicationsTitle")}</h2>
      </div>

      <div
        className="ms-viewport"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
        onMouseDown={onMouseDown}
        onMouseUp={onMouseUp}
        onWheel={onWheel}
        onMouseLeave={() => { dragStartX.current = null; }}
      >
        <div
          className="ms-track"
          style={{ transform: `translateX(-${current * 100}%)` }}
          aria-live="polite"
        >
          {SLIDES.map((slide, i) => (
            <div key={i} className="ms-slide" aria-hidden={i !== current}>
              <img src={slide.img} alt={slide.alt} draggable={false} />
              <div className="ms-copy">
                <span className="ms-num">{slide.num}</span>
                <h3>{t(slide.titleKey)}</h3>
                <p>{t(slide.textKey)}</p>
                <a href="#contact" className="ms-cta">
                  {t("marketCta")} →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="ms-controls">
        <div className="ms-dots">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`ms-dot${i === current ? " is-active" : ""}`}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <div className="ms-nav">
          <span className="ms-counter">
            {pad(current + 1)} / {pad(count)}
          </span>
          <button className="ms-arrow ms-arrow-prev" onClick={prev} aria-label="Previous slide">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M11 13.5L6.5 9L11 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button className="ms-arrow ms-arrow-next" onClick={next} aria-label="Next slide">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <path d="M7 4.5L11.5 9L7 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
