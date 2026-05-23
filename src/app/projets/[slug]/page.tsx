import type { Metadata } from "next";
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

  const title = `${project.title} | Projet`;
  const description = project.description.fr;

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

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description.fr,
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
