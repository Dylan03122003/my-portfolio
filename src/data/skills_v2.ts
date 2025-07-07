// Define the category keys in one place
export type SkillCategoryKey =
  | "programmingLanguages"
  | "frontendDevelopment"
  | "backendDevelopment"
  | "mobileDevelopment"
  | "databaseManagement"
  | "webServers"
  | "versionControl"
  | "projectManagement"
  | "cloudBasedTechnologies"
  | "operatingSystems"
  | "otherSoftwareTools"
  | "testing";

export interface CloudProvider {
  provider: string;
  services: string[];
}

export interface SkillsData {
  programmingLanguages: string[];
  frontendDevelopment: string[];
  backendDevelopment: string[];
  mobileDevelopment: string[];
  databaseManagement: string[];
  webServers: string[];
  versionControl: string[];
  projectManagement: string[];
  cloudBasedTechnologies: CloudProvider[];
  operatingSystems: string[];
  otherSoftwareTools: string[];
  testing: string[];
}

export const skillsData: SkillsData = {
  programmingLanguages: ["TypeScript", "JavaScript", "Java", "C", "C++"],
  frontendDevelopment: [
    "Next.js",
    "React",
    "jQuery",
    "Tailwind CSS",
    "MUI",
    "Ant Design",
    "shadcn/ui",
    "Bootstrap",
    "Progressive Web Apps",
    "WebSockets",
    "HTML",
    "CSS",
    "Sass",
    "SCSS",
  ],
  backendDevelopment: ["NestJS", "Express.js", "Node.js", "Prisma"],
  mobileDevelopment: ["React Native", "Android Studio"],
  databaseManagement: [
    "Microsoft SQL Server",
    "Redis",
    "DynamoDB",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "SQLite",
    "Firebase",
  ],
  webServers: ["Caddy"],
  versionControl: ["Git", "GitLab", "GitHub"],
  projectManagement: ["Scrum", "Agile Methodology", "Jira"],
  cloudBasedTechnologies: [
    {
      provider: "AWS",
      services: ["EC2", "Lambda", "S3", "RDS", "AWS Amplify"],
    },
  ],
  operatingSystems: ["Linux/Unix", "Windows"],
  otherSoftwareTools: ["Postman"],
  testing: ["Jest (unit testing)", "Selenium"],
};
