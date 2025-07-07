import Bookstore1 from "./../../assets/img/website/bookstore_1.jpg";
import Bookstore2 from "./../../assets/img/website/bookstore_2.jpg";
import Bookstore3 from "./../../assets/img/website/bookstore_3.jpg";
import Bookstore4 from "./../../assets/img/website/bookstore_4.jpg";
import Bookstore5 from "./../../assets/img/website/bookstore_5.jpg";
import Bookstore6 from "./../../assets/img/website/bookstore_6.jpg";
import Bookstore7 from "./../../assets/img/website/bookstore_7.jpg";
import Bookstore8 from "./../../assets/img/website/bookstore_8.jpg";
import BookstoreImage from "./../../assets/img/website/bookstore_website.jpg";
import DiscussionNestImage from "./../../assets/img/website/discussion_nest.jpg";
import FoodOrder1 from "./../../assets/img/website/food-order-1.jpg";
import FoodOrder2 from "./../../assets/img/website/food-order-2.jpg";
import FoodOrder3 from "./../../assets/img/website/food-order-3.jpg";
import FoodOrder4 from "./../../assets/img/website/food-order-4.jpg";
import FoodOrder5 from "./../../assets/img/website/food-order-5.jpg";
import FoodOrderLandingPageImage from "./../../assets/img/website/food_order_landingpage.jpg";
import Karaoke1 from "./../../assets/img/website/karaoke1.jpg";
import Karaoke2 from "./../../assets/img/website/karaoke2.jpg";
import Karaoke3 from "./../../assets/img/website/karaoke3.jpg";
import NoteApp1 from "./../../assets/img/website/note_app_1.jpg";
import NoteApp2 from "./../../assets/img/website/note_app_2.jpg";
import NoteApp3 from "./../../assets/img/website/note_app_3.jpg";
import NoteTakingImage from "./../../assets/img/website/note_taking_website.jpg";
import {
  default as QuizNest1Image,
  default as QuizNestImage,
} from "./../../assets/img/website/quiznest1.jpg";
import QuizNest2Image from "./../../assets/img/website/quiznest2.jpg";
import QuizNest3Image from "./../../assets/img/website/quiznest3.jpg";
import QuizNest4Image from "./../../assets/img/website/quiznest4.jpg";
import QuizNest6Image from "./../../assets/img/website/quiznest6.jpg";
import RecipeReact1 from "./../../assets/img/website/recipe-react-1.jpg";
import RecipeReact2 from "./../../assets/img/website/recipe-react-2.jpg";
import RecipeReact3 from "./../../assets/img/website/recipe-react-3.jpg";
import RecipeReact4 from "./../../assets/img/website/recipe-react-4.jpg";
import RecipeReact5 from "./../../assets/img/website/recipe-react-5.jpg";
import RecipeReact6 from "./../../assets/img/website/recipe-react-6.jpg";
import RecipeReact7 from "./../../assets/img/website/recipe-react-7.jpg";
import RecipeReactImage from "./../../assets/img/website/recipe_react.jpg";
import RecipeV1_1 from "./../../assets/img/website/recipe_v1_1.jpg";
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
  JAVA = "Java",
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
  JAVA = "Java",
  SERVLET = "Servlet",
  JDBC = "JDBC",
  JSP = "JSP",
  JQUERY = "JQuery",
  PRISMA = "Prisma",
  POSTGRES = "PostgreSQL",
}

export enum ROLE {
  FRONT_END = "Front-end developer",
  BACK_END = "Back-end developer",
  FULL_STACK = "Full-stack developer",
}

export const tabs = [TAB.REACT, TAB.VANILLA_JAVASCRIPT, TAB.JAVA, TAB.ALL];

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
  images: string[];
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
  description: [
    "Integrating the Paypal API to enable a checkout process for orders.",
    "Implemented React best practices including organized file and folder structure, custom hooks, custom UI components, and Context API",
    "Develop a RESTful backend server that enables persistent storage of products, orders, users, and other data in a remote MongoDB database",
    "Incorporated Multer npm package to handle file uploads",
    "Added the Nodemailer npm package to enable password reset emails to be sent.",
    "Developed common features that a typical e-commerce website has, such as adding to cart, pagination, checkout, searching, reviews, and ratings,…",
  ],
  images: [
    BookstoreImage,
    Bookstore1,
    Bookstore2,
    Bookstore3,
    Bookstore4,
    Bookstore5,
    Bookstore6,
    Bookstore7,
    Bookstore8,
  ],
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
  description: [
    "Creating and editing notes is effortless with the clean and intuitive React and Typescript powered user interface.",
    "Find notes quickly with powerful search and filters.",
  ],
  images: [NoteTakingImage, NoteApp1, NoteApp2, NoteApp3],
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
  description: [
    "With the assistance of my mentor, I successfully implemented video playlist features, facilitated singing by others, filtered by tags, and enabled video export and import functionalities.",
  ],
  images: [YoutubeKTVImage, Karaoke1, Karaoke2, Karaoke3],
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
  description: [
    "Implemented the MVC software pattern.",
    "Developed features allow users to search, bookmark recipes, and access detailed information.",
  ],
  images: [RecipeWebsiteImage, RecipeV1_1],
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
  description: [
    "Integrated Leaflet JavaScript library for stress-free running route monitoring and easy progress tracking",
  ],
  images: [WorkoutTrackerProject],
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
  description: [
    "The user interface is developed to be easy to use and intuitive, while also being highly responsive",
    "Included information on features, meal options, pricing, and the ordering process",
  ],
  images: [
    FoodOrderLandingPageImage,
    FoodOrder1,
    FoodOrder2,
    FoodOrder3,
    FoodOrder4,
    FoodOrder5,
  ],
};

const discussionNest = {
  tabs: [TAB.JAVA, TAB.ALL],
  title: "Discussion Nest Website",
  image: DiscussionNestImage,
  technologies: [
    TECHNOLOGIES.JAVA,
    TECHNOLOGIES.SERVLET,
    TECHNOLOGIES.JDBC,
    TECHNOLOGIES.JSP,
    TECHNOLOGIES.TAILWIND,
    TECHNOLOGIES.JQUERY,
  ],
  role: ROLE.FULL_STACK,
  githubLink: "https://github.com/Dylan03122003/pointhub",
  websiteLink: "",
  youtubeLink: "https://youtu.be/vW2HWHYd_jg?si=pT6o8So85yfWe8IR",
  description: [
    "Enhanced the system's security by seamlessly integrating Google Recaptcha, effectively preventing unwanted spam activities from impacting the user experience.",
    "Incorporated the highlight.js library to automate the application of code styles, streamlining the process of presenting code snippets with a polished and consistent appearance.",
  ],
  images: [DiscussionNestImage],
};

const recipeV2 = {
  tabs: [TAB.REACT, TAB.ALL],
  title: "Recipe Website",
  image: RecipeReactImage,
  technologies: [
    TECHNOLOGIES.REACT,
    TECHNOLOGIES.TAILWIND,
    TECHNOLOGIES.JAVASCRIPT,
  ],
  role: ROLE.FRONT_END,
  githubLink: "https://github.com/Dylan03122003/recipe-website-v2",
  websiteLink: "",
  youtubeLink: "https://youtu.be/vW2HWHYd_jg?si=pT6o8So85yfWe8IR",
  description: [
    "Modern UI/UX design with React and Tailwindcss.",
    "Integrated Spoonacular API to fetch a variety of recipes.",
  ],
  images: [
    RecipeReactImage,
    RecipeReact1,
    RecipeReact2,
    RecipeReact3,
    RecipeReact4,
    RecipeReact5,
    RecipeReact6,
    RecipeReact7,
  ],
};

const quizNestWebsite = {
  tabs: [TAB.REACT, TAB.ALL],
  title: "QuizNest",
  image: QuizNestImage,
  technologies: [
    TECHNOLOGIES.REACT,
    TECHNOLOGIES.TAILWIND,
    TECHNOLOGIES.TYPESCRIPT,
    TECHNOLOGIES.EXPRESS,
    TECHNOLOGIES.PRISMA,
    TECHNOLOGIES.POSTGRES,
  ],
  role: ROLE.FULL_STACK,
  githubLink: "https://github.com/Dylan03122003/quiznest_client",
  websiteLink: "",
  youtubeLink: "https://youtu.be/vW2HWHYd_jg?si=pT6o8So85yfWe8IR",
  description: [
    "Integrated Clerk for authentication, user management UIs and APIs.",
    "Sync Clerk data to backend with webhooks.",
    "Fetching data and managing states using React Query.",
    "Added tiptap package for editing contents.",
  ],
  images: [
    QuizNest1Image,
    QuizNest2Image,
    QuizNest3Image,
    QuizNest4Image,
    QuizNest6Image,
  ],
};

export const projects: Project[] = [
  bookstoreProject,
  youtubeKTVProject,
  quizNestWebsite,
  noteTakingProject,
  recipeWebsite,
  foodOrderLandingPageProject,
  workoutTrackerProject,
  discussionNest,
  recipeV2,
];
