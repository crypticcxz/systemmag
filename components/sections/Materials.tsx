"use client";

import { useT } from "@/providers/ThemeLanguageProvider";
import { I18nKey } from "@/lib/i18n";

export function Materials() {
  const t = useT();

  const items: { id: number; nameKey: I18nKey; img: string }[] = [
    { id: 1, nameKey: "materialRigid", img: "/assets/img/product_catalogue/1.png" },
    { id: 2, nameKey: "materialTough", img: "/assets/img/product_catalogue/2.png" },
    { id: 3, nameKey: "materialGeneral", img: "/assets/img/product_catalogue/3.png" },
    { id: 4, nameKey: "materialFlame", img: "/assets/img/product_catalogue/4.png" },
    { id: 5, nameKey: "materialSilicone", img: "/assets/img/product_catalogue/5.png" },
    { id: 6, nameKey: "materialElastomeric", img: "/assets/img/product_catalogue/6.png" },
    { id: 7, nameKey: "materialBiocompatible", img: "/assets/img/product_catalogue/7.png" },
    { id: 8, nameKey: "materialCeramic", img: "/assets/img/product_catalogue/8.png" },
    { id: 9, nameKey: "materialCastable", img: "/assets/img/product_catalogue/9.png" },
    { id: 10, nameKey: "materialNylon", img: "/assets/img/product_catalogue/10.png" },
  ];

  return (
    <section className="materials-section" id="materials">
      <div className="materials-container">
        <div className="materials-header" data-reveal>
          <div className="materials-header-left">
            <h2>{t("materialsTitle")}</h2>
            <p>{t("materialsDesc")}</p>
          </div>
        </div>

        <div className="materials-grid" data-reveal-group>
          {items.map((item) => (
            <article key={item.id} className="material-card" data-reveal>
              <div className="material-card-media">
                <img
                  src={item.img}
                  alt={t(item.nameKey)}
                  loading="lazy"
                  decoding="async"
                />
                <div className="material-card-overlay" />
              </div>
              <div className="material-card-label">
                <span>{t(item.nameKey)}</span>
                <span className="material-card-arrow" aria-hidden="true">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
