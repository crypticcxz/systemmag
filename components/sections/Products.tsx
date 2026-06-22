"use client";

import { useT } from "@/providers/ThemeLanguageProvider";

export function Products() {
  const t = useT();

  return (
    <section className="products section-shell" id="products">
      <span className="depth-layer depth-warm" data-parallax="-0.06" aria-hidden="true" />

      <div className="section-heading" data-reveal>
        <p className="eyebrow">{t("productsEyebrow")}</p>
        <h2>{t("productsTitle")}</h2>
      </div>

      <div className="product-grid" data-reveal-group>
        <article className="product-panel large" data-reveal>
          <div className="product-code">ZA / ZC / ZG</div>
          <h3>{t("productZipTitle")}</h3>
          <p>{t("productZipText")}</p>
          <div className="product-media">
            <img
              src="/assets/img/products/magnetic-zips.webp"
              alt="Zip magnétique SYSTEMMAG"
              loading="lazy"
              decoding="async"
            />
            <span className="product-frame" aria-hidden="true" />
          </div>
        </article>

        <article className="product-panel" data-reveal>
          <div className="product-code">BA</div>
          <h3>{t("productBlockTitle")}</h3>
          <p>{t("productBlockText")}</p>
          <div className="product-media">
            <img
              src="/assets/img/products/magnet-blocks.webp"
              alt="Blocs aimantés SYSTEMMAG"
              loading="lazy"
              decoding="async"
            />
            <span className="product-frame" aria-hidden="true" />
          </div>
        </article>

        <article className="product-panel" data-reveal>
          <div className="product-code">FF</div>
          <h3>{t("productSheathTitle")}</h3>
          <p>{t("productSheathText")}</p>
          <div className="product-media">
            <img
              src="/assets/img/products/textile-sheaths.png"
              alt="Fourreau textile SYSTEMMAG"
              loading="lazy"
              decoding="async"
            />
            <span className="product-frame" aria-hidden="true" />
          </div>
        </article>

        <article className="product-panel" data-reveal>
          <div className="product-code">V04 / V12</div>
          <h3>{t("productStripTitle")}</h3>
          <p>{t("productStripText")}</p>
          <div className="product-media">
            <img
              src="/assets/img/products/magnet-strips.png"
              alt="Bande d'aimants SYSTEMMAG"
              loading="lazy"
              decoding="async"
            />
            <span className="product-frame" aria-hidden="true" />
          </div>
        </article>
      </div>
    </section>
  );
}
