"use client";

import Link from "next/link";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useI18n } from "../../../components/I18nProvider";
import { getProjectText, type Project } from "../../../data/projects";

export function ProjectDetailClient({ project }: { project: Project }) {
  const { locale, messages } = useI18n();

  const features = project.features ? getProjectText(project.features, locale) : [];
  const context = project.context ? getProjectText(project.context, locale) : undefined;

  return (
    <main className="min-h-screen bg-[rgb(var(--page-bg))] text-[rgb(var(--text))]">
      <div className="relative mx-auto max-w-6xl px-6 pb-28 pt-28">
        <div className="mb-10 flex items-center justify-between gap-4">
          <Link
            href="/#projets"
            className="inline-flex items-center gap-2 rounded-xl border border-[rgb(var(--border)/var(--border-soft))] bg-[rgb(var(--panel-bg)/var(--panel-soft))] px-4 py-2 text-sm font-semibold text-[rgb(var(--text))] transition hover:bg-[rgb(var(--panel-bg)/var(--panel))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--page-bg))]"
          >
            <ArrowLeft size={18} aria-hidden="true" />
            <span>{messages.projectDetail.backToProjects}</span>
          </Link>

          <div className="hidden items-center gap-2 sm:flex">
            {(project.links ?? []).slice(0, 2).map((l) => (
              <a
                key={`${project.slug}-${l.href}`}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[rgb(var(--border)/var(--border-soft))] bg-[rgb(var(--panel-bg)/var(--panel-soft))] px-4 py-2 text-sm font-semibold text-[rgb(var(--text))] transition hover:bg-[rgb(var(--panel-bg)/var(--panel))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--page-bg))]"
              >
                <span>{getProjectText(l.label, locale)}</span>
                <ExternalLink size={16} aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>

        <header className="grid gap-10 lg:grid-cols-[1.4fr_0.9fr]">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[rgb(var(--border)/var(--border-soft))] bg-[rgb(var(--panel-bg)/var(--panel))] px-4 py-2 text-xs font-semibold text-[rgb(var(--text-subtle))]">
              <span className="h-2 w-2 rounded-full bg-indigo-500" />
              <span>{getProjectText(project.company, locale)}</span>
              <span className="text-[rgb(var(--text-faint))]">•</span>
              <span className="text-[rgb(var(--text-muted))]">{getProjectText(project.role, locale)}</span>
            </div>

            <h1 className="text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
              {project.title}
            </h1>
            <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-[rgb(var(--text-subtle))]">
              {getProjectText(project.description, locale)}
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={`${project.slug}-${t}`}
                  className="rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-2 text-xs font-semibold text-indigo-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[rgb(var(--border)/var(--border-soft))] bg-[rgb(var(--panel-bg)/var(--panel))] p-6 shadow-2xl shadow-black/15 backdrop-blur-xl">
            <div className="text-sm font-semibold text-[rgb(var(--text))]">{messages.projectDetail.summary}</div>
            <div className="mt-2 text-sm leading-relaxed text-[rgb(var(--text-subtle))]">
              {context ?? "—"}
            </div>

            <div className="mt-6 grid gap-2 text-sm text-[rgb(var(--text-subtle))]">
              <div className="flex items-center justify-between gap-3">
                <span className="text-[rgb(var(--text-muted))]">{messages.projectDetail.category}</span>
                <span className="font-semibold text-[rgb(var(--text))]">{messages.projectDetail.categoryValue}</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-[rgb(var(--text-muted))]">{messages.projectDetail.stack}</span>
                <span className="font-semibold text-[rgb(var(--text))]">{project.tech[0] ?? "—"}</span>
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="text-[rgb(var(--text-muted))]">{messages.projectDetail.link}</span>
                <span className="font-semibold text-[rgb(var(--text))]">
                  {(getProjectText(project.links?.[0]?.label ?? { fr: "—", en: "—" }, locale) ?? "—").slice(0, 18)}
                </span>
              </div>
            </div>

            <div className="mt-6 flex flex-col gap-2 sm:hidden">
              {(project.links ?? []).map((l) => (
                <a
                  key={`${project.slug}-mobile-${l.href}`}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between gap-3 rounded-xl border border-[rgb(var(--border)/var(--border-soft))] bg-[rgb(var(--panel-bg)/var(--panel-soft))] px-4 py-3 text-sm font-semibold text-[rgb(var(--text))] transition hover:bg-[rgb(var(--panel-bg)/var(--panel))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[rgb(var(--page-bg))]"
                >
                  <span className="truncate">{getProjectText(l.label, locale)}</span>
                  <ExternalLink size={16} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </header>

        <section className="mt-14 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-[rgb(var(--border)/var(--border-soft))] bg-[rgb(var(--panel-bg)/var(--panel))] p-8 backdrop-blur-xl">
            <h2 className="text-xl font-bold text-[rgb(var(--text))]">{messages.projectDetail.overview}</h2>
            <p className="mt-3 text-sm leading-relaxed text-[rgb(var(--text-subtle))]">
              {context ?? "—"}
            </p>
          </div>

          <div className="rounded-2xl border border-[rgb(var(--border)/var(--border-soft))] bg-[rgb(var(--panel-bg)/var(--panel))] p-8 backdrop-blur-xl">
            <h2 className="text-xl font-bold text-[rgb(var(--text))]">{messages.projectDetail.keyFeatures}</h2>
            <ul className="mt-4 grid gap-3 text-sm text-[rgb(var(--text-subtle))]">
              {(features.length > 0 ? features : ["—"]).map((f) => (
                <li
                  key={`${project.slug}-${f}`}
                  className="rounded-xl border border-[rgb(var(--border)/var(--border-soft))] bg-[rgb(var(--panel-bg)/var(--panel-soft))] px-4 py-3"
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
