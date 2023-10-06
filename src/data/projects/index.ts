import BookstoreImage from "./../../assets/img/website/bookstore_website.jpg";
// import NoteTakingImage from "./../../assets/img/website/note_taking_website.jpg";

export enum TAB {
  REACT = "React",
  NEXTJS = "Next.js",
  VANILLA_JAVASCRIPT = "Vanilla JavaScript",
  ALL = "All",
}

export enum TECHNOLOGIES {
  REACT = "React",
  NEXTJS = "Next.js",
  TYPESCRIPT = "Typescript",
  NODEJS = "Node.js",
  EXPRESS = "Express",
  MONGODB = "MongoDB",
  MONGOOSE = "Mongoose",
  TAILWIND = "Tailwind",
  REACT_BOOTSTRAP = "React-Bootstrap",
}

export enum ROLE {
  FRONT_END = "Front-end developer",
  BACK_END = "Back-end developer",
  FULL_STACK = "Fullstack developer",
}

export const tabs = [TAB.REACT, TAB.VANILLA_JAVASCRIPT, TAB.ALL];

export interface Project {
  tabs: TAB[];
  title: string;
  image: string;
  technologies: TECHNOLOGIES[];
  role: ROLE;
  githubLink: string;
  websiteLink: string;
  youtubeLink: string;
  description: string[];
}

// Projects

const bookstoreProject = {
  tabs: [TAB.REACT, TAB.ALL],
  title: "E-commerce Bookstore Website",
  image: BookstoreImage,
  technologies: [
    TECHNOLOGIES.REACT,
    TECHNOLOGIES.TYPESCRIPT,
    TECHNOLOGIES.NODEJS,
    TECHNOLOGIES.EXPRESS,
    TECHNOLOGIES.MONGODB,
    TECHNOLOGIES.MONGOOSE,
    TECHNOLOGIES.TAILWIND,
  ],
  role: ROLE.FULL_STACK,
  githubLink: "",
  websiteLink: "",
  youtubeLink: "",
  description: [""],
};
// const noteTakingProject = {
//   tabs: [TAB.REACT, TAB.ALL],
//   title: "Note-taking Website",
//   image: NoteTakingImage,
//   technologies: [
//     TECHNOLOGIES.REACT,
//     TECHNOLOGIES.TYPESCRIPT,
//     TECHNOLOGIES.REACT_BOOTSTRAP,
//   ],
//   role: ROLE.FRONT_END,
//   githubLink: "",
//   websiteLink: "",
//   youtubeLink: "",
//   description: [""],
// };

export const projects: Project[] = [bookstoreProject];
