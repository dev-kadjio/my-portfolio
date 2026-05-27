"use client";

import { motion } from "framer-motion";
import { FLOATING_SKILLS } from "../../lib/home.constants";

export function FloatingSkills({ shouldReduceMotion, label }: { shouldReduceMotion: boolean; label: string }) {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {FLOATING_SKILLS.map((skill, index) => (
        <motion.div
          key={`${skill.name}-${index}`}
          className={[
            "absolute z-30",
            "rounded-2xl border border-[rgb(var(--border)/var(--border-soft))] bg-[rgb(var(--panel-bg)/var(--panel-strong))] px-4 py-3 shadow-xl shadow-black/20 backdrop-blur-xl",
            skill.accentClassName,
            "hidden sm:block",
            skill.positionClassName,
          ].join(" ")}
          animate={
            shouldReduceMotion
              ? undefined
              : skill.floatAxis === "y"
                ? { y: skill.floatValues }
                : { x: skill.floatValues }
          }
          transition={{
            duration: shouldReduceMotion ? 0 : skill.duration,
            repeat: shouldReduceMotion ? 0 : Infinity,
            delay: shouldReduceMotion ? 0 : skill.delay,
          }}
        >
          <div className="flex items-center gap-3">
            <span className="grid h-10 w-10 place-items-center rounded-xl border border-[rgb(var(--border)/var(--border-soft))] bg-[rgb(var(--panel-bg)/var(--panel-soft))]">
              <img src={skill.logoSrc} alt="" className="h-5 w-5" loading="lazy" decoding="async" fetchPriority="low" />
            </span>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-[rgb(var(--text))]">{skill.name}</div>
              <div className="text-xs text-[rgb(var(--text-muted))]">{label}</div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

