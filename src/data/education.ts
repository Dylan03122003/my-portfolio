export interface EducationT {
  degree: string;
  institution: string;
  startDate: string; // YYYY-MM
  endDate: string; // YYYY-MM or "Present"
  gpa?: string;
  highlights?: string[]; // Additional educational highlights
}

export const education: EducationT = {
  degree: "Bachelor of Engineering (Software Engineering)",
  institution: "FPT University",
  startDate: "2021-06",
  endDate: "2025-05",
  gpa: "3.67 / 4.0",
  highlights: [
    "4 years experience of leadership",
    "Mentored students on best practices in software development, debugging, and problem-solving techniques.",
    "Conducted hands-on coding sessions for students, focusing on fundamental programming concepts and real-world applications.",
    "Provided one-on-one support to struggling students",
  ],
};
