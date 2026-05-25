import type { Metadata } from "next";
import { cookies } from "next/headers";
import { notFound } from "next/navigation";
import { PROJECTS, getProjectBySlug } from "../../../data/projects";
import { SiteFooter } from "../../../components/SiteFooter";
import { SiteNavbar } from "../../../components/SiteNavbar";
import { ProjectDetailClient } from "./ProjectDetailClient";

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  const locale = (await cookies()).get("NEXT_LOCALE")?.value === "en" ? "en" : "fr";
  const title = locale === "fr" ? `${project.title} | Projet` : `${project.title} | Project`;
  const description = project.description[locale];

  return {
    title,
    description,
    alternates: {
      canonical: `/projets/${project.slug}`,
    },
    openGraph: {
      type: "article",
      title,
      description,
      url: `/projets/${project.slug}`,
      images: [
        {
          url: "/images/profil.jpg",
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/images/profil.jpg"],
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const locale = (await cookies()).get("NEXT_LOCALE")?.value === "en" ? "en" : "fr";
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description[locale],
    url: `${baseUrl}/projets/${project.slug}`,
    creator: {
      "@type": "Person",
      name: "Brundone Kadjio",
    },
    about: project.tech,
  };

  return (
    <>
      <SiteNavbar variant="page" />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <ProjectDetailClient project={project} />
      <SiteFooter />
    </>
  );
}
