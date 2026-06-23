"use client";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useLenis } from "@/hooks/useLenis";
import { useReveal } from "@/hooks/useReveal";
import { useParallax } from "@/hooks/useParallax";
import { useCursorField } from "@/hooks/useCursorField";
import { useNavState } from "@/hooks/useNavState";
import { useMarketsScene } from "@/hooks/useMarketsScene";

import { SiteHeader } from "@/components/layout/SiteHeader";
import { Hero } from "@/components/sections/Hero";
import { Technology } from "@/components/sections/Technology";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Products } from "@/components/sections/Products";
import { Markets } from "@/components/sections/Markets";
import { Process } from "@/components/sections/Process";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  const reduced = usePrefersReducedMotion();

  useLenis();
  useReveal();
  useParallax(reduced);
  useCursorField();
  useNavState();
  useMarketsScene();

  return (
    <>
      <div className="cursor-field" aria-hidden="true" />
      <SiteHeader />
      <main id="top">
        <Hero />
        <Technology />
        <HowItWorks />
        <Products />
        <Markets />
        <Process />
        <Contact />
      </main>
    </>
  );
}
