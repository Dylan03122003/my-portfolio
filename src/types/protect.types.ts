export enum TECHNOLOGIES {
  REACT = "React",
  NEXTJS = "Next.js",
  REACT_NATIVE = "React Native",
  NESTJS = "NestJS",
  WebSocket = "WebSocket",
  TYPESCRIPT = "Typescript",
  NODEJS = "Node.js",
  EXPRESS = "Express",
  MONGODB = "MongoDB",
  MONGOOSE = "Mongoose",
  TAILWIND = "Tailwind",
  BOOTSTRAP = "Bootstrap",
  Shadcn = "Shadcn",
  Jest = "Jest",
  MicrosoftSQLServer = "Microsoft SQL Server",
  CICD = "CI/CD",
  AWS = "AWS",
  MUI = "MUI",
  HTML = "HTML",
  CSS = "CSS",
  SASS = "Sass",
  JAVASCRIPT = "JavaScript",
  JAVA = "Java",
  SERVLET = "Servlet",
  JDBC = "JDBC",
  JSP = "JSP",
  JQUERY = "JQuery",
  PRISMA = "Prisma",
  POSTGRES = "PostgreSQL",
  MYSQL = "MySQL",
}

export enum ROLE {
  FRONT_END = "Frontend Software Engineer",
  BACK_END = "Backend Software Engineer",
  FULL_STACK = "Fullstack Software Engineer",
  TEAM_LEAD = "Team Lead",
  TECHNICAL_LEAD = "Technical Lead",
  SCRUM_MASTER = "Scrum Master",
}

export interface Project {
  title: string;
  mainImage: string;
  technologies: TECHNOLOGIES[];
  roles: ROLE[];
  briefDescription: string;
  images: string[];
  highlights: string[];
  repoLink?: {
    platform: "GitHub" | "GitLab";
    link: string;
  };
  websiteLink?: string;
  demoLink?: string;
}
