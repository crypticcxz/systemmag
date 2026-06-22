import type { Metadata } from "next";
import { ThemeLanguageProvider } from "@/providers/ThemeLanguageProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "SYSTEMMAG - Fermeture magnétique textile",
  description:
    "SYSTEMMAG conçoit et fabrique des systèmes de fermeture magnétique intégrés aux textiles, accessoires et équipements techniques.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" data-theme="light" suppressHydrationWarning>
      <head />
      <body>
        <ThemeLanguageProvider>{children}</ThemeLanguageProvider>
      </body>
    </html>
  );
}
