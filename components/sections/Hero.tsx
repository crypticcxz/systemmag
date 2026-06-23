"use client";

import { useT } from "@/providers/ThemeLanguageProvider";

function AnimatedLine({
  text,
  wordOffset = 0,
}: {
  text: string;
  wordOffset?: number;
}) {
  const words = text.split(" ");
  return (
    <span className="hero-line-wrap">
      {words.map((word, i) => (
        <span key={i} className="hero-word-outer">
          <span
            className="hero-word"
            style={
              { "--word-delay": `${(wordOffset + i) * 0.09 + 0.05}s` } as React.CSSProperties
            }
          >
            {word}
          </span>
        </span>
      ))}
    </span>
  );
}

export function Hero() {
  const t = useT();
  const line1 = t("heroLine1");
  const line2 = t("heroLine2");

  return (
    <section className="hero" id="top">
      <div className="hero-text">
        <h1 className="hero-title">
          <AnimatedLine text={line1} wordOffset={0} />
          <AnimatedLine text={line2} wordOffset={line1.split(" ").length} />
        </h1>
      </div>

      <div className="hero-video-frame">
        <video
          className="hero-cinematic-video"
          muted
          playsInline
          autoPlay
          loop
          preload="auto"
          aria-hidden="true"
        >
          <source src="/assets/video/systemmag-scroll-loop.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}
