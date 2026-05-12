import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PROJECTS, getProjectBySlug } from "../../../data/projects";
import { ArrowLeft, ExternalLink } from "lucide-react";

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
  const description = project.description;

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
    description: project.description,
    url: `${baseUrl}/projets/${project.slug}`,
    creator: {
      "@type": "Person",
      name: "Brundone Kadjio",
    },
    about: project.tech,
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="relative mx-auto max-w-6xl px-6 pb-28 pt-10">
        <div className="mb-10 flex items-center justify-between gap-4">
          <Link
            href="/#projets"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-white/20 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            <span>Retour aux projets</span>
          </Link>

          <div className="hidden items-center gap-2 sm:flex">
            {(project.links ?? []).slice(0, 2).map((l) => (
              <a
                key={`${project.slug}-${l.label}`}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-white/20 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
              >
                <span>{l.label}</span>
                <ExternalLink size={16} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <header className="grid gap-10 lg:grid-cols-[1.4fr_0.9fr]">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-300">
              <span className="h-2 w-2 rounded-full bg-indigo-400" />
              <span>{project.company}</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-400">{project.role}</span>
            </div>

            <h1 className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-slate-300">
              {project.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={`${project.slug}-${t}`}
                  className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-xs font-semibold text-indigo-200"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl">
            <div className="text-sm font-semibold text-slate-200">Résumé</div>
            <div className="mt-2 text-sm leading-relaxed text-slate-300">
              {project.context ??
                "Présentation du projet, objectifs, approche et résultats."}
            </div>

            <div className="mt-6 grid gap-2 text-sm text-slate-300">
              <div className="flex items-center justify-between gap-3">
                <span className="text-slate-400">Catégorie</span>
                <span className="font-semibold text-slate-200">
                  Projet réalisé
                </span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-slate-400">Stack</span>
                <span className="font-semibold text-slate-200">
                  {project.tech[0] ?? "—"}
                </span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-slate-400">Lien</span>
                <span className="font-semibold text-slate-200">
                  {(project.links?.[0]?.label ?? "—").slice(0, 18)}
                </span>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-2 sm:hidden">
              {(project.links ?? []).map((l) => (
                <a
                  key={`${project.slug}-mobile-${l.label}`}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-200 transition hover:border-white/20 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                >
                  <span className="truncate">{l.label}</span>
                  <ExternalLink size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </header>

        <section className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-8 backdrop-blur-xl">
            <h2 className="text-xl font-bold text-slate-100">Vue d’ensemble</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">
              {project.context ??
                "Ce projet présente une solution complète pensée pour la performance, la sécurité et une expérience utilisateur fluide."}
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/40 p-8 backdrop-blur-xl">
            <h2 className="text-xl font-bold text-slate-100">
              Fonctionnalités clés
            </h2>
            <ul className="mt-4 grid gap-3 text-sm text-slate-300">
              {(
                project.features ?? [
                  "Parcours utilisateur optimisé",
                  "Architecture scalable",
                  "Sécurité et qualité",
                  "Déploiement maîtrisé",
                ]
              ).map((f) => (
                <li
                  key={`${project.slug}-${f}`}
                  className="rounded-xl border border-white/10 bg-white/5 px-4 py-3"
                >
                  {f}
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </main>
  );
}
