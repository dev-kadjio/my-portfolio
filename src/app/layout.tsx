import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { I18nProvider } from "../components/I18nProvider";
import { ThemeProvider } from "../components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = (await cookies()).get("NEXT_LOCALE")?.value === "en" ? "en" : "fr";
  const base = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000");
  const title =
    locale === "fr" ? "Brundone Kadjio | Développeur Full‑Stack" : "Brundone Kadjio | Full‑Stack Developer";
  const description =
    locale === "fr"
      ? "Portfolio de Brundone Kadjio (Full‑Stack Web & Mobile) — projets, compétences et contact."
      : "Brundone Kadjio's portfolio (Full‑Stack Web & Mobile) — projects, skills, and contact.";

  return {
    title,
    description,
    metadataBase: base,
    manifest: "/icons/favicon_io/site.webmanifest",
    icons: {
      icon: [
        { url: "/icons/favicon_io/favicon.ico" },
        { url: "/icons/favicon_io/favicon-16x16.png", sizes: "16x16", type: "image/png" },
        { url: "/icons/favicon_io/favicon-32x32.png", sizes: "32x32", type: "image/png" },
        { url: "/icons/favicon_io/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
        { url: "/icons/favicon_io/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
      ],
      apple: [{ url: "/icons/favicon_io/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    },
    alternates: {
      canonical: "/",
    },
    openGraph: {
      type: "website",
      title,
      description,
      url: "/",
      images: [{ url: "/images/profil.jpg", width: 1200, height: 630, alt: "Brundone Kadjio" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
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
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = (await cookies()).get("NEXT_LOCALE")?.value === "en" ? "en" : "fr";
  return (
    <html lang={locale}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <I18nProvider>{children}</I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
