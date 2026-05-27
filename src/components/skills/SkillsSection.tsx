"use client";

import { motion } from "framer-motion";
import { Award, Boxes, Briefcase, Building2, Clock, Code2, Cpu, GitBranch, Globe, GraduationCap, Smartphone, Sparkles, TestTube2 } from "lucide-react";
import { EDUCATION, SKILLS } from "../../lib/home.constants";
import { getSkillIconGroup } from "../../lib/skills/skillIcons";
import { SKILL_CATEGORIES } from "../../lib/skills/skills.constants";
import type { Locale, Messages } from "../../lib/i18n";
import type { SkillCategory } from "../../types/skills";
import { SkillRow } from "./SkillRow";

export function SkillsSection({
    locale,
    messages,
    shouldReduceMotion,
}: {
    locale: Locale;
    messages: Messages;
    shouldReduceMotion: boolean;
}) {
    const skillCategoryMeta: Record<SkillCategory, { label: string; Icon: typeof Cpu }> = {
        backendServer: { label: messages.skills.backendServer, Icon: Cpu },
        mobileDev: { label: messages.skills.mobileDev, Icon: Smartphone },
        frontendIntegration: { label: messages.skills.frontendIntegration, Icon: Globe },
        javascriptFrameworks: { label: messages.skills.javascriptFrameworks, Icon: Code2 },
        testingTools: { label: messages.skills.testingTools, Icon: TestTube2 },
        toolsAi: { label: messages.skills.toolsAi, Icon: Sparkles },
        projectManagement: { label: messages.skills.projectManagement, Icon: Briefcase },
        versioning: { label: messages.skills.versioning, Icon: GitBranch },
        otherTech: { label: messages.skills.otherTech, Icon: Boxes },
    };

    const skillSections = SKILL_CATEGORIES.map((category) => {
        const meta = skillCategoryMeta[category];
        return { category, ...meta, skills: SKILLS[category][locale] };
    });

    return (
        <motion.section
            id="competences"
            className="py-32 px-6 bg-[rgb(var(--panel-bg)/var(--section))]"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    className="text-4xl font-bold mb-16 text-center flex items-center justify-center gap-4"
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <Award className="text-blue-500" size={40} />
                    {messages.skills.title}
                </motion.h2>

                <motion.div
                    className="rounded-3xl border border-[rgb(var(--border)/var(--border-soft))] bg-[rgb(var(--panel-bg)/var(--panel))] p-6 md:p-8"
                    initial={{ y: 26, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
                    viewport={{ once: true }}
                >
                    <div
                        // className="grid gap-6 lg:grid-cols-2 2xl:grid-cols-3"
                        // className="columns-1 lg:columns-2 2xl:columns-3 [column-gap:1.5rem]"
                        className="columns-1 lg:columns-2 2xl:columns-3 gap-x-6"
                    >
                        {skillSections.map(({ category, label, Icon, skills }, sectionIndex) => (
                            <motion.div
                                key={category}
                                // className="rounded-2xl border border-[rgb(var(--border)/var(--border-soft))] bg-[rgb(var(--panel-bg)/var(--panel-soft))] p-6"
                                className="mb-6 inline-block w-full break-inside-avoid rounded-2xl border border-[rgb(var(--border)/var(--border-soft))] bg-[rgb(var(--panel-bg)/var(--panel-soft))] p-6"
                                initial={{ y: 16, opacity: 0 }}
                                whileInView={{ y: 0, opacity: 1 }}
                                transition={{
                                    duration: shouldReduceMotion ? 0 : 0.5,
                                    delay: shouldReduceMotion ? 0 : sectionIndex * 0.04,
                                }}
                                viewport={{ once: true }}
                            >
                                <div
                                    // className="flex items-start justify-between gap-4"
                                    className="flex items-center justify-between gap-4"
                                >
                                    <div
                                        // className="flex min-w-0 items-start gap-3"
                                        className="flex min-w-0 items-center gap-3"
                                    >
                                        <span className="mt-0.5 grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-600">
                                            <Icon size={18} aria-hidden="true" />
                                        </span>
                                        <div className="min-w-0">
                                            <h3 className="whitespace-normal wrap-break-word text-base font-bold leading-snug text-[rgb(var(--text))]">
                                                {label}
                                            </h3>
                                        </div>
                                    </div>

                                    <span className="shrink-0 rounded-full border border-[rgb(var(--border)/var(--border-soft))] bg-[rgb(var(--panel-bg)/var(--panel))] px-2.5 py-1 text-xs font-semibold text-[rgb(var(--text-muted))]">
                                        {skills.length}
                                    </span>
                                </div>

                                <ul className="mt-5 space-y-3">
                                    {skills.map((skill) => {
                                        const { icons, total } = getSkillIconGroup(skill, 4);
                                        const extra = Math.max(0, total - icons.length);
                                        const rowKey = `${category}-${skill}`;

                                        // Version 2
                                        return <SkillRow key={rowKey} rowKey={rowKey} skill={skill} icons={icons} extra={extra} />;

                                        // Version 1
                                        /* return (
                                          <li
                                            key={`${category}-${skill}`}
                                            className="rounded-xl border border-[rgb(var(--border)/var(--border-soft))] bg-[rgb(var(--panel-bg)/var(--panel))] px-4 py-2.5"
                                          >
                                            <div
                                              className="flex items-center justify-between gap-3"
                                            // className="flex flex-col-reverse items-start justify-between gap-3"
                                            >
                                              <div className="min-w-0 text-sm font-medium leading-snug text-[rgb(var(--text))]">
                                                {skill}
                                              </div>
                  
                                              {icons.length > 0 && (
                                                <div className="mt-0.5 flex shrink-0 items-center -space-x-2">
                                                  {icons.map((icon) => (
                                                    <span
                                                      key={`${category}-${skill}-${icon.alt}`}
                                                      className="grid h-7 w-7 place-items-center overflow-hidden rounded-xl border border-[rgb(var(--border)/var(--border-soft))] bg-[rgb(var(--panel-bg)/var(--panel-soft))] ring-2 ring-[rgb(var(--panel-bg))]"
                                                      title={icon.alt}
                                                    >
                                                      <img
                                                        src={icon.src}
                                                        alt={icon.alt}
                                                        width={16}
                                                        height={16}
                                                        className="block h-4 w-4 object-contain"
                                                        loading="lazy"
                                                        decoding="async"
                                                        fetchPriority="low"
                                                        referrerPolicy="no-referrer"
                                                        draggable={false}
                                                        onError={(event) => {
                                                          const img = event.currentTarget;
                                                          if (!icon.fallbackSrc) return;
                                                          if (img.dataset.fallbackUsed === "1") return;
                                                          img.dataset.fallbackUsed = "1";
                                                          img.src = icon.fallbackSrc;
                                                        }}
                                                      />
                                                    </span>
                                                  ))}
                  
                                                  {extra > 0 && (
                                                    <span className="grid h-7 w-7 place-items-center rounded-xl border border-[rgb(var(--border)/var(--border-soft))] bg-[rgb(var(--panel-bg)/var(--panel-soft))] text-[10px] font-semibold text-[rgb(var(--text-muted))] ring-2 ring-[rgb(var(--panel-bg))]">
                                                      +{extra}
                                                    </span>
                                                  )}
                                                </div>
                                              )}
                                            </div>
                                          </li>
                                        ); */
                                    })}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className="mt-20"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <motion.h3
                        className="text-3xl font-bold mb-12 text-center flex items-center justify-center gap-4"
                        initial={{ y: 50, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <GraduationCap className="text-blue-500" size={32} />
                        {messages.skills.educationTitle}
                    </motion.h3>

                    <div className="grid md:grid-cols-2 gap-8">
                        {EDUCATION.map((edu, index) => (
                            <motion.div
                                key={edu.title.fr}
                                className="bg-[rgb(var(--panel-bg)/var(--panel))] p-8 rounded-xl border border-[rgb(var(--border)/var(--border-soft))]"
                                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ duration: shouldReduceMotion ? 0 : 0.8 }}
                                viewport={{ once: true }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <h4 className="text-xl font-semibold text-blue-600 mb-3">{edu.title[locale]}</h4>
                                <p className="text-[rgb(var(--text-muted))] mb-2 flex items-center gap-2">
                                    <Building2 size={16} />
                                    {edu.school[locale]}
                                </p>
                                <p className="text-sm text-[rgb(var(--text-faint))] mb-4 flex items-center gap-2">
                                    <Clock size={14} />
                                    {edu.period[locale]}
                                </p>
                                {Array.isArray(edu.details[locale]) ? (
                                    <ul className="grid gap-2 text-sm text-[rgb(var(--text-subtle))]">
                                        {(edu.details[locale] as string[]).map((d) => (
                                            <li key={d} className="flex gap-2">
                                                <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500/80" />
                                                <span className="leading-relaxed">{d}</span>
                                            </li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-[rgb(var(--text-subtle))] text-sm leading-relaxed">{edu.details[locale] as string}</p>
                                )}
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
}

