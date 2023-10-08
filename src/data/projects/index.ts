import BookstoreImage from "./../../assets/img/website/bookstore_website.jpg";
import FoodOrderLandingPageImage from "./../../assets/img/website/food_order_landingpage.jpg";
import NoteTakingImage from "./../../assets/img/website/note_taking_website.jpg";
import RecipeWebsiteImage from "./../../assets/img/website/recipe_website.jpg";
import WorkoutTrackerProject from "./../../assets/img/website/workout_tracker_website.jpg";
import YoutubeKTVImage from "./../../assets/img/website/youtube_ktv.jpg";

// CROP IMAGE
// width: 1900
// Height: 965
// y: 3
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
  BOOTSTRAP = "Bootstrap",
  MUI = "MUI",
  HTML = "HTML",
  CSS = "CSS",
  SASS = "Sass",
  JAVASCRIPT = "JavaScript",
}

export enum ROLE {
  FRONT_END = "Front-end developer",
  BACK_END = "Back-end developer",
  FULL_STACK = "Full-stack developer",
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
  githubLink: "https://github.com/Dylan03122003/bookstore_website",
  websiteLink: "",
  youtubeLink: "https://youtu.be/vW2HWHYd_jg?si=pT6o8So85yfWe8IR",
  description: [""],
};
const noteTakingProject = {
  tabs: [TAB.REACT, TAB.ALL],
  title: "Note-taking Website",
  image: NoteTakingImage,
  technologies: [
    TECHNOLOGIES.REACT,
    TECHNOLOGIES.TYPESCRIPT,
    TECHNOLOGIES.BOOTSTRAP,
  ],
  role: ROLE.FRONT_END,
  githubLink: "https://github.com/Dylan03122003/note-taking-website",
  websiteLink: "https://smart-note-taking.netlify.app",
  youtubeLink: "https://youtu.be/vW2HWHYd_jg?si=pT6o8So85yfWe8IR",
  description: [""],
};

const youtubeKTVProject = {
  tabs: [TAB.REACT, TAB.ALL],
  title: "Youtube Karaoke TV Google Extension",
  image: YoutubeKTVImage,
  technologies: [TECHNOLOGIES.REACT, TECHNOLOGIES.TYPESCRIPT, TECHNOLOGIES.MUI],
  role: ROLE.FRONT_END,
  githubLink: "",
  websiteLink:
    "https://chrome.google.com/webstore/detail/myyoutubekaraoke/aoidbbmpdjgjhjmkphcgpblmlglinokn?utm_source=ext_sidebar&hl=en-US",
  youtubeLink: "https://youtu.be/vW2HWHYd_jg?si=pT6o8So85yfWe8IR",
  description: [""],
};

const recipeWebsite = {
  tabs: [TAB.VANILLA_JAVASCRIPT, TAB.ALL],
  title: "Recipe Website",
  image: RecipeWebsiteImage,
  technologies: [TECHNOLOGIES.HTML, TECHNOLOGIES.SASS, TECHNOLOGIES.JAVASCRIPT],
  role: ROLE.FRONT_END,
  githubLink: "https://github.com/Dylan03122003/recipe_website",
  websiteLink: "",
  youtubeLink: "https://youtu.be/vW2HWHYd_jg?si=pT6o8So85yfWe8IR",
  description: [""],
};

const workoutTrackerProject = {
  tabs: [TAB.VANILLA_JAVASCRIPT, TAB.ALL],
  title: "Workout Tracker Website",
  image: WorkoutTrackerProject,
  technologies: [TECHNOLOGIES.HTML, TECHNOLOGIES.CSS, TECHNOLOGIES.JAVASCRIPT],
  role: ROLE.FRONT_END,
  githubLink: "https://github.com/Dylan03122003/Mapty",
  websiteLink: "",
  youtubeLink: "https://youtu.be/vW2HWHYd_jg?si=pT6o8So85yfWe8IR",
  description: [""],
};

const foodOrderLandingPageProject = {
  tabs: [TAB.VANILLA_JAVASCRIPT, TAB.ALL],
  title: "Food Order Landing Page",
  image: FoodOrderLandingPageImage,
  technologies: [TECHNOLOGIES.HTML, TECHNOLOGIES.CSS, TECHNOLOGIES.JAVASCRIPT],
  role: ROLE.FRONT_END,
  githubLink: "https://github.com/Dylan03122003/Food-Order",
  websiteLink: "https://uixufoodorder.netlify.app/",
  youtubeLink: "https://youtu.be/vW2HWHYd_jg?si=pT6o8So85yfWe8IR",
  description: [""],
};

export const projects: Project[] = [
  bookstoreProject,
  youtubeKTVProject,
  noteTakingProject,
  recipeWebsite,
  foodOrderLandingPageProject,
  workoutTrackerProject,
];
