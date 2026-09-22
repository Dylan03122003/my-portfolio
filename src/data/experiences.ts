export interface ExperienceProject {
  name: string;
  description?: string;
  responsibilities: string[];
}

export interface Experience {
  jobTitle: string;
  roles: string[];
  company: string;
  location?: string;
  startDate: string; // YYYY-MM
  endDate: string | null; // YYYY-MM, null = Current
  responsibilities?: string[];
  projects?: ExperienceProject[];
}

export const experiences: Experience[] = [
  {
    jobTitle: "Full Stack Engineer",
    roles: ["Full Stack Engineer"],
    company: "FPT Software",
    location: "Thu Duc, HCM",
    startDate: "2025-08",
    endDate: null,
    projects: [
      {
        name: "Bump Connect",
        description: "US social platform serving 10,000+ users",
        responsibilities: [
          "Built and shipped 20+ production features end-to-end across iOS, Android, and web, using React Native, React, and TypeScript.",
          "Owned iOS and Android build and release for 8 months as the only team member, producing signed builds even before CI/CD existed and shipping them to staging and production (TestFlight, App Store, Google Play Store) — ensuring uninterrupted client delivery.",
          "Became the client's primary technical point of contact, translating business requirements into shippable features and guiding technical decisions throughout the project.",
          "Onboarded and mentored teammates by authoring 7 mobile-development onboarding documents and step-by-step TestFlight guides, cutting new-member ramp-up time about 1 week to 2–3 days.",
          "Resolved 5+ App Store review rejections, achieving successful approvals and preventing release delays.",
          "Configured CI/CD signing and secrets for both platforms using GitHub Actions — generated the App Store Connect API key, recovered a lost Android keystore, and resolved Android CI build failures for reliable automated builds.",
        ],
      },
      {
        name: "Cox Automotive (vAuto)",
        description:
          "automotive retail platform serving 14,000+ US dealerships",
        responsibilities: [
          "Built and shipped features across 5+ independently deployed micro-frontends in the unified vAuto platform, integrated as Web Components at runtime.",
          "Migrated 30+ legacy screens onto the shared design system, using React, TypeScript, and Ant Design.",
        ],
      },
    ],
  },
  {
    jobTitle: "Frontend Engineer",
    roles: ["Frontend Engineer"],
    company: "MyYoutubeKaraoke Extension",
    location: "Thu Duc, HCM",
    startDate: "2025-03",
    endDate: "2025-07",
    responsibilities: [
      "Developed new features using React, TypeScript, and MUI, enhancing product functionality and improving the user experience for 280+ users.",
      "Partnered with an Agoda Staff Software Engineer to apply engineering best practices across code reviews, architecture, and delivery.",
    ],
  },
  {
    jobTitle: "Full Stack Engineer",
    roles: ["Full Stack Engineer"],
    company: "Fashion E-commerce Site (Contract)",
    location: "Thu Duc, HCM",
    startDate: "2024-11",
    endDate: "2025-02",
    responsibilities: [
      "Led the development of the fashion e-commerce platform for a retail client, delivering a scalable solution using React, TypeScript, NestJS, PostgreSQL and AWS.",
      "Implemented AWS Lambda serverless functions for intensive photo upload and resize operations, reducing processing time by 37% and improving user experience during product image uploads.",
      "Optimized application performance by implementing lazy loading, code splitting, and caching strategies, resulting in 60% faster page load times.",
      "Implemented infinite scrolling for product browsing using React Query, leading to a 30% boost in user engagement time and smoother navigation.",
    ],
  },
  {
    jobTitle: "Frontend Engineer Intern",
    roles: ["Frontend Engineer Intern"],
    company: "FPT Software",
    location: "Thu Duc, HCM",
    startDate: "2023-11",
    endDate: "2024-04",
    responsibilities: [
      "Adapted quickly to multiple roles (Team Lead, Scrum Master, Frontend Engineer) under mentor guidance, demonstrating flexibility and a growth-oriented mindset.",
      "Developed 40% of complex frontend features using React and TypeScript, including multi-step forms, rich-text editors, and drag-and-drop interactions, significantly enhancing user experience.",
      "Facilitated all five core Scrum events (Sprint Planning, Daily Scrum, Sprint Review, Sprint Retrospective, and Sprint execution) with a 99% on-time delivery rate and full alignment to Agile best practices.",
      "Reviewed and approved 200+ merge requests, guaranteeing high code quality, consistent standards, and a maintainable codebase.",
      "Automated 200+ CI/CD build, test, and deployment cycles, reducing manual release efforts by 66%.",
      "Mentored 3+ team members on React best practices and unit testing, leading to higher code quality, improved test coverage, and fewer production bugs.",
    ],
  },
];
