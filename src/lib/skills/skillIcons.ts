import type { SkillIcon, SkillIconGroup } from "../../types/skills";

const SKILL_ICON_DEFS: Array<{ label: string; slug?: string; color?: string; src?: string; test: (value: string) => boolean }> =
  [
    { label: "Java", slug: "java", color: "ED8B00", test: (v) => /\bjava\b/i.test(v) },
    { label: "Spring Boot", slug: "springboot", color: "6DB33F", test: (v) => /\bspring\b/i.test(v) },
    { label: "Hibernate", slug: "hibernate", test: (v) => /\bhibernate\b/i.test(v) },
    { label: "Jakarta EE", slug: "jakartaee", test: (v) => /\bjpa\b|\bjakarta\b/i.test(v) },
    { label: "JSON Web Tokens", slug: "jsonwebtokens", test: (v) => /\bjwt\b/i.test(v) },
    { label: "Auth0", slug: "auth0", test: (v) => /\boauth\b/i.test(v) },
    { label: "React", slug: "react", color: "61DAFB", test: (v) => /\breact\b/i.test(v) },
    { label: "Next.js", slug: "nextdotjs", test: (v) => /\bnext(\.js)?\b/i.test(v) },
    { label: "Angular", slug: "angular", color: "DD0031", test: (v) => /\bangular\b/i.test(v) },
    { label: "Vue.js", slug: "vuedotjs", color: "4FC08D", test: (v) => /\bvue(\.js)?\b/i.test(v) },
    { label: "Nuxt", slug: "nuxtdotjs", color: "00DC82", test: (v) => /\bnuxt(\.js)?\b/i.test(v) },
    { label: "TypeScript", slug: "typescript", color: "3178C6", test: (v) => /\btypescript\b/i.test(v) },
    { label: "JavaScript", slug: "javascript", color: "F7DF1E", test: (v) => /\bjavascript\b/i.test(v) },
    { label: "HTML", slug: "html5", color: "E34F26", test: (v) => /\bhtml\b/i.test(v) },
    { label: "CSS", slug: "css3", color: "1572B6", test: (v) => /\bcss\b/i.test(v) },
    { label: "Tailwind CSS", slug: "tailwindcss", color: "06B6D4", test: (v) => /\btailwind\b/i.test(v) },
    { label: "Bootstrap", slug: "bootstrap", color: "7952B3", test: (v) => /\bbootstrap\b/i.test(v) },
    { label: "Material UI", slug: "mui", color: "007FFF", test: (v) => /\bmaterial\s*ui\b|\bmui\b/i.test(v) },
    { label: "Vite", slug: "vite", color: "646CFF", test: (v) => /\bvite\b/i.test(v) },
    { label: "Flutter", slug: "flutter", color: "54C5F8", test: (v) => /\bflutter\b/i.test(v) },
    // { label: "React Native", slug: "react", color: "61DAFB", test: (v) => /\breact\s*native\b/i.test(v) },
    { label: "Node.js", slug: "nodedotjs", color: "339933", test: (v) => /\bnode(\.js)?\b/i.test(v) },
    { label: "Python", slug: "python", color: "3776AB", test: (v) => /\bpython\b/i.test(v) },
    { label: "MongoDB", slug: "mongodb", color: "47A248", test: (v) => /\bmongodb\b/i.test(v) },
    { label: "Amazon DynamoDB", slug: "amazondynamodb", test: (v) => /\bdynamodb\b/i.test(v) },
    { label: "PostgreSQL", slug: "postgresql", color: "4169E1", test: (v) => /\bpostgres(ql)?\b/i.test(v) },
    { label: "MySQL", slug: "mysql", color: "4479A1", test: (v) => /\bmysql\b/i.test(v) },
    { label: "Firebase", slug: "firebase", color: "DD2C00", test: (v) => /\bfirestore\b|\bfirebase\b/i.test(v) },
    { label: "Docker", slug: "docker", color: "2496ED", test: (v) => /\bdocker\b/i.test(v) },
    { label: "Git", slug: "git", color: "F05032", test: (v) => /\bgit\b/i.test(v) },
    { label: "GitHub", slug: "github", test: (v) => /\bgithub\b/i.test(v) },
    { label: "GitLab", slug: "gitlab", color: "FC6D26", test: (v) => /\bgitlab\b/i.test(v) },
    { label: "IntelliJ IDEA", slug: "intellijidea", test: (v) => /\bintellij\b/i.test(v) },
    { label: "VS Code", slug: "visualstudiocode", color: "007ACC", test: (v) => /\bvs\s*code\b/i.test(v) },
    { label: "Android Studio", slug: "androidstudio", color: "3DDC84", test: (v) => /\bandroid\s*studio\b/i.test(v) },
    { label: "Scrum Alliance", slug: "scrumalliance", test: (v) => /\bscrum\b/i.test(v) },
    { label: "Jira", slug: "jira", color: "0052CC", test: (v) => /\bjira\b/i.test(v) },
    { label: "Asana", slug: "asana", color: "F06A6A", test: (v) => /\basana\b/i.test(v) },
    { label: "Trello", slug: "trello", color: "0052CC", test: (v) => /\btrello\b/i.test(v) },
    { label: "Slack", slug: "slack", color: "4A154B", test: (v) => /\bslack\b/i.test(v) },
    { label: "Figma", slug: "figma", color: "F24E1E", test: (v) => /\bfigma\b/i.test(v) },
    { label: "JUnit", slug: "junit5", test: (v) => /\bjunit\b/i.test(v) },
    {
      label: "Mockito",
      test: (v) => /\bmockito\b/i.test(v),
      src: "https://raw.githubusercontent.com/mockito/mockito.github.io/master/img/logo%402x.png",
    },
    { label: "Jest", slug: "jest", test: (v) => /\bjest\b/i.test(v) },
    { label: "Windsurf", test: (v) => /\bwindsurf\b/i.test(v), src: "https://windsurf.com/favicon.ico" },
    {
      label: "TRAE",
      test: (v) => /\btrae\b/i.test(v),
      src: "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/trae.png",
    },
    {
      label: "Antigravity",
      test: (v) => /\bantigravity\b/i.test(v),
      src: "https://raw.githubusercontent.com/lobehub/lobe-icons/refs/heads/master/packages/static-png/dark/antigravity.png",
    },
    {
      label: "Software Architecture",
      slug: "springboot",
      test: (v) => /\bmvc\b|\barchitecture\b|n[\-\u2010-\u2015\u2212]tiers/i.test(v),
    },
    { label: "Microservices", slug: "docker", test: (v) => /\bmicroservices?\b/i.test(v) },
    { label: "Swagger", slug: "swagger", color: "85EA2D", test: (v) => /\bswagger\b|\bopenapi\b/i.test(v) },
    { label: "SonarQube", slug: "sonarqube", color: "4E9BCD", test: (v) => /\bsonarqube\b/i.test(v) },
  ];

export function getSkillIconGroup(value: string, max = 3): SkillIconGroup {
  const icons: SkillIcon[] = [];
  const normalized = value.trim();
  let total = 0;

  for (const def of SKILL_ICON_DEFS) {
    if (!def.test(normalized)) continue;
    if (icons.some((i) => i.alt === def.label)) continue;

    total += 1;
    if (icons.length < max) {
      const slug = def.slug?.toLowerCase();
      const src =
        def.src ??
        (slug ? `https://cdn.simpleicons.org/${slug}${def.color ? `/${def.color.toLowerCase()}` : ""}` : null);
      if (!src) continue;
      const fallbackSrc = slug ? `https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/${slug}.svg` : undefined;
      icons.push({ alt: def.label, src, fallbackSrc });
    }
  }

  return { icons, total };
}

