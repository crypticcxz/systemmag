"use client";

import { useT } from "@/providers/ThemeLanguageProvider";
import { useState, useEffect, useRef } from "react";

export function HowItWorks() {
  const t = useT();
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const steps = [
    {
      id: 0,
      titleKey: "hiwOneTitle",
      textKey: "hiwOneText",
      img: "/assets/img/how-it-works/positionnement.avif",
      alt: "Two textile strips come together: the magnetized zones align"
    },
    {
      id: 1,
      titleKey: "hiwTwoTitle",
      textKey: "hiwTwoText",
      img: "/assets/img/how-it-works/maintien.avif",
      alt: "Distributed hold"
    },
    {
      id: 2,
      titleKey: "hiwThreeTitle",
      textKey: "hiwThreeText",
      img: "/assets/img/how-it-works/pelage.avif",
      alt: "Peel-open gesture"
    }
  ] as const;

  const startAutoCycle = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 5000); // 5 seconds interval
  };

  useEffect(() => {
    startAutoCycle();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleStepClick = (index: number) => {
    setActiveIndex(index);
    startAutoCycle(); // Reset timer on manual click
  };

  return (
    <section className="howitworks section-shell" id="how-it-works">
      <div className="howitworks-container">
        
        {/* Heading & Intro */}
        <div className="howitworks-heading-area" data-reveal>
          <h2>{t("hiwTitle")}</h2>
          <p className="howitworks-intro">{t("hiwIntro")}</p>
        </div>

        {/* Left Side: Eyebrow + Dynamic Image */}
        <div className="howitworks-media-area" data-reveal>
          <div className="howitworks-eyebrow-container">
            <span className="howitworks-dot" />
            <span className="howitworks-eyebrow">{t("hiwEyebrow")}</span>
          </div>
          
          <div className="howitworks-media-wrapper">
            {steps.map((step, idx) => (
              <img
                key={step.id}
                src={step.img}
                alt={step.alt}
                className={`howitworks-image ${idx === activeIndex ? "active" : ""}`}
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
        </div>

        {/* Steps List */}
        <div className="howitworks-steps-area" data-reveal>
          <div className="howitworks-steps-list">
            {steps.map((step, idx) => {
              const isActive = idx === activeIndex;
              return (
                <div
                  key={step.id}
                  className={`howitworks-step-row ${isActive ? "active" : ""}`}
                  onClick={() => handleStepClick(idx)}
                >
                  <div className="howitworks-step-line" />
                  <div className="howitworks-step-content">
                    <div className="howitworks-step-header">
                      <h3>{t(step.titleKey)}</h3>
                      <div className="howitworks-step-arrow-btn">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </div>
                    </div>
                    
                    <div className="howitworks-step-body">
                      <div className="howitworks-step-body-inner">
                        <p>{t(step.textKey)}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
