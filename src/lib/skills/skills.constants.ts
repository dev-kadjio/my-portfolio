import type { SkillCategory } from "../../types/skills";

export const SKILL_CATEGORIES = [
  "backendServer",
  "mobileDev",
  "frontendIntegration",
  "javascriptFrameworks",
  "testingTools",
  "toolsAi",
  "projectManagement",
  "versioning",
  "otherTech",
] as const satisfies readonly SkillCategory[];

