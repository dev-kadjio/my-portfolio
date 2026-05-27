"use client";

import { useLayoutEffect, useRef, useState } from "react";
import type { SkillIcon } from "../../types/skills";

export function SkillRow({
  rowKey,
  skill,
  icons,
  extra,
}: {
  rowKey: string;
  skill: string;
  icons: SkillIcon[];
  extra: number;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const iconsRef = useRef<HTMLDivElement | null>(null);
  const measureRef = useRef<HTMLSpanElement | null>(null);
  const [isWrapped, setIsWrapped] = useState(false);

  useLayoutEffect(() => {
    const containerEl = containerRef.current;
    const measureEl = measureRef.current;
    if (!containerEl || !measureEl) return;

    const compute = () => {
      if (icons.length === 0) {
        setIsWrapped(false);
        return;
      }

      const containerWidth = containerEl.getBoundingClientRect().width;
      const iconsWidth = iconsRef.current?.getBoundingClientRect().width ?? 0;
      const styles = getComputedStyle(containerEl);
      const rawGap = styles.columnGap || styles.gap || "12px";
      const gap = Number.isFinite(Number.parseFloat(rawGap)) ? Number.parseFloat(rawGap) : 12;
      const availableWidth = Math.max(0, containerWidth - iconsWidth - gap);
      const textWidth = measureEl.scrollWidth;
      setIsWrapped(textWidth > availableWidth + 1);
    };

    compute();
    const ro = new ResizeObserver(compute);
    ro.observe(containerEl);
    if (iconsRef.current) ro.observe(iconsRef.current);
    return () => ro.disconnect();
  }, [skill, icons.length]);

  const containerClassName = isWrapped
    // ? "flex flex-col-reverse items-start justify-between gap-3"
    ? "flex flex-col items-start justify-between gap-3"
    : "flex items-center justify-between gap-3";
  const iconsClassName = isWrapped
    ? "mt-0.5 flex shrink-0 items-center -space-x-2 self-end"
    : "mt-0.5 flex shrink-0 items-center -space-x-2";
  const labelClassName = isWrapped
    ? "w-full min-w-0 text-sm font-medium leading-snug text-[rgb(var(--text))]"
    : "min-w-0 text-sm font-medium leading-snug text-[rgb(var(--text))]";

  return (
    <li className="relative rounded-xl border border-[rgb(var(--border)/var(--border-soft))] bg-[rgb(var(--panel-bg)/var(--panel))] px-4 py-2.5">
      <span
        ref={measureRef}
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-0 -z-10 whitespace-nowrap text-sm font-medium leading-snug opacity-0"
      >
        {skill}
      </span>

      <div ref={containerRef} className={containerClassName}>
        <div className={labelClassName}>{skill}</div>

        {icons.length > 0 && (
          <div ref={iconsRef} className={iconsClassName}>
            {icons.map((icon) => (
              <span
                key={`${rowKey}-${icon.alt}`}
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
  );
}

