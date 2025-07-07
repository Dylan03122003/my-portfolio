export interface Experience {
  jobTitle: string;
  roles: string[];
  company: string;
  startDate: string; // YYYY-MM
  endDate: string; // YYYY-MM
  responsibilities: string[];
}

export const experiences: Experience[] = [
  {
    jobTitle: "Internship Software Engineer",
    roles: [
      "Team Lead",
      "Technical Lead",
      "Scrum Master",
      "Frontend Developer",
    ],
    company: "FPT Software Ho Chi Minh",
    startDate: "2024-01",
    endDate: "2024-05",
    responsibilities: [
      "Facilitated all four core Scrum ceremonies (Sprint Planning, Daily Stand-ups, Sprint Review, Retrospective) with a 99% on-time rate and full alignment to Agile best practices.",
      "Communicated effectively in English with 2+ mentors and stakeholders across 20+ meetings, ensuring clear project alignment and progress updates.",
      "Managed 100+ tasks using Jira, optimizing workflow, project visibility, and team collaboration.",
      "Developed over 40% of complex frontend features using React and TypeScript, including multi-step forms, rich-text editors, drag-and-drop interactions, interactive charts, and multilingual support, significantly enhancing user experience and application performance.",
      "Deployed application on AWS Amplify, achieving 99.9% uptime and ensuring high availability and seamless scalability.",
      "Automated 200+ CI/CD build, test, and deployment cycles, reducing manual release efforts by 66%.",
      "Reviewed and approved 200+ merge requests, guaranteeing high code quality, consistent standards, and a maintainable codebase.",
      "Mentored 3+ team members on React best practices and unit testing, leading to higher code quality, improved test coverage, and fewer production bugs.",
      "Initiated and configured the frontend project structure, establishing a robust foundation and accelerating team productivity.",
      "Collaborated closely with backend team, ensuring smooth integration and consistent cross-team synchronization.",
    ],
  },
  {
    jobTitle: "Freelance Software Engineer",
    roles: ["Fullstack Software Engineer"],
    company: "Self-Employed",
    startDate: "2024-09",
    endDate: "2024-12",
    responsibilities: [
      "Built a full-stack e-commerce platform for a retail client using React, TypeScript, Express and PostgreSQL.",
      "Deployed a full-stack application using AWS Amplify, Lambda, S3, and RDS, achieving high availability and reducing deployment time by 69% through serverless architecture and CI/CD automation.",
      "Optimized frontend performance by implementing code splitting and lazy loading, resulting in a 35% faster initial page load.",
      "Collaborated closely with client stakeholders, clearly defining project requirements and proactively troubleshooting issues.",
    ],
  },
];
