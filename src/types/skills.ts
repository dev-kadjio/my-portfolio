export type SkillCategory =
  | "backendServer"
  | "mobileDev"
  | "frontendIntegration"
  | "javascriptFrameworks"
  | "testingTools"
  | "toolsAi"
  | "projectManagement"
  | "versioning"
  | "otherTech";

export type SkillIcon = { src: string; alt: string; fallbackSrc?: string };

export type SkillIconGroup = { icons: SkillIcon[]; total: number };

