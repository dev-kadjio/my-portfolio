import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brundone Kadjio | Développeur Full‑Stack",
  description:
    "Portfolio de Brundone Kadjio (Full‑Stack Web & Mobile) — projets, compétences et contact.",
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    title: "Brundone Kadjio | Développeur Full‑Stack",
    description:
      "Portfolio de Brundone Kadjio (Full‑Stack Web & Mobile) — projets, compétences et contact.",
    url: "/",
    images: [{ url: "/images/profil.jpg", width: 1200, height: 630, alt: "Brundone Kadjio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brundone Kadjio | Développeur Full‑Stack",
    description:
      "Portfolio de Brundone Kadjio (Full‑Stack Web & Mobile) — projets, compétences et contact.",
    images: ["/images/profil.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
