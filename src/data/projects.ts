import { Project, ROLE, TECHNOLOGIES } from "../types/protect.types";
import { images } from "./images";

const project1: Project = {
  title: "PT4U ( Personal Trainer For You )",
  briefDescription:
    "PT4U is a platform that connects you with personal trainers based on your fitness and development goals. Personal trainers can easily schedule your workouts according to your preferences and create structured workout and nutrition plans tailored for you.",
  roles: [
    ROLE.FULL_STACK,
    ROLE.TEAM_LEAD,
    ROLE.TECHNICAL_LEAD,
    ROLE.SCRUM_MASTER,
  ],
  technologies: [
    TECHNOLOGIES.NEXTJS,
    TECHNOLOGIES.REACT_NATIVE,
    TECHNOLOGIES.NESTJS,
    TECHNOLOGIES.AWS,
    TECHNOLOGIES.WebSocket,
    TECHNOLOGIES.TYPESCRIPT,
    TECHNOLOGIES.Shadcn,
    TECHNOLOGIES.Jest,
    TECHNOLOGIES.MicrosoftSQLServer,
    TECHNOLOGIES.CICD,
  ],
  highlights: [
    "Implemented real-time WebSocket chat, boosting trainer–client engagement by 25%.",
    "Delivered push and in-app notifications, reducing missed training sessions by 30%.",
    "Architected a scalable AWS stack (EC2, Amplify, RDS, S3, Route 53, IAM) sustaining 99.95% uptime.",
    "Automated attendance tracking, ensuring accurate session management by auto-marking missed sessions as absent.",
    "Integrated in-app camera uploads, securely storing 1,000+ progress photos on Amazon S3 with zero data-loss incidents.",
    "Integrated secure payment processing via VNPAY, achieving a consistently high transaction success rate.",
    "Simplified sign-up with Google OAuth, making it easier for users to join and increasing completed registrations.",
    "Enhanced user experience by integrating a calendar for centralized session and event management.",
    "Added easy English-Vietnamese language switching, making the app accessible to more users.",
    "Developed interactive data visualizations and charts, enabling clear and effective progress tracking for users.",
  ],
  mainImage: images.PT4U[0],
  images: images.PT4U,
  demoLink: "https://www.youtube.com/watch?v=kYPPhq-7t0s",
  repoLink: undefined,
  websiteLink: "https://pt4you.duongcao.dev",
};

const project2: Project = {
  title: "E-commerce Bookstore Website",
  briefDescription:
    "This website is an online platform designed to help readers easily discover, explore, and purchase their favorite books from a wide range of genres and categories. Built with a user-friendly interface and modern e-commerce features.",
  roles: [ROLE.FULL_STACK, ROLE.TEAM_LEAD, ROLE.TECHNICAL_LEAD],
  technologies: [
    TECHNOLOGIES.REACT,
    TECHNOLOGIES.TYPESCRIPT,
    TECHNOLOGIES.EXPRESS,
    TECHNOLOGIES.MONGODB,
    TECHNOLOGIES.TAILWIND,
  ],
  highlights: [
    "Integrated the PayPal API to enable a secure and efficient checkout process for orders.",
    "Followed React best practices, including an organized file and folder structure, custom hooks, reusable UI components, and the Context API for state management.",
    "Incorporated the Multer npm package to handle file uploads efficiently.",
    "Added the Nodemailer npm package to enable password reset emails for enhanced user account management.",
    "Developed key e-commerce features such as add-to-cart functionality, pagination, checkout, search, reviews, and ratings.",
  ],
  mainImage: images.Bookstore[0],
  images: images.Bookstore,
  demoLink: undefined,
  repoLink: {
    platform: "GitHub",
    link: "https://github.com/Dylan03122003/bookstore_website",
  },
  websiteLink: undefined,
};

const project3: Project = {
  title: "Youtube Karaoke TV Google Extension",
  briefDescription:
    "A user-friendly Chrome extension built to help karaoke lovers effortlessly manage, organize, and access their favorite YouTube karaoke playlists, ensuring a seamless and enjoyable singing experience right from their browser.",
  roles: [ROLE.FRONT_END],
  technologies: [TECHNOLOGIES.REACT, TECHNOLOGIES.TYPESCRIPT, TECHNOLOGIES.MUI],
  highlights: [
    "Delivered new features under mentor guidance, significantly improving overall product functionality and user experience.",
    "Contributed impactful features, including tag-based video filtering, favorites functionality, and enhancements to existing components, elevating the platform's usability and engagement.",
  ],
  mainImage: images.YoutubeKTV[0],
  images: images.YoutubeKTV,
  demoLink: undefined,
  repoLink: undefined,
  websiteLink:
    "https://chrome.google.com/webstore/detail/myyoutubekaraoke/aoidbbmpdjgjhjmkphcgpblmlglinokn?utm_source=ext_sidebar&hl=en-US",
};

const project4: Project = {
  title: "Discussion Nest Website",
  briefDescription:
    "An interactive online community platform designed for users to ask questions, share knowledge, and engage in meaningful discussions. The platform fosters collaboration by enabling users to seek advice, share expertise, and connect with others across diverse topics.",
  roles: [ROLE.FULL_STACK, ROLE.TEAM_LEAD, ROLE.TECHNICAL_LEAD],
  technologies: [
    TECHNOLOGIES.JAVA,
    TECHNOLOGIES.SERVLET,
    TECHNOLOGIES.JSP,
    TECHNOLOGIES.JQUERY,
    TECHNOLOGIES.MYSQL,
  ],
  highlights: [
    "Enhanced the system's security by seamlessly integrating Google Recaptcha, effectively preventing unwanted spam activities from impacting the user experience.",
    "Incorporated the highlight.js library to automate the application of code styles, streamlining the process of presenting code snippets with a polished and consistent appearance.",
  ],
  mainImage: images.DiscussionNest[0],
  images: images.DiscussionNest,
  demoLink: undefined,
  repoLink: {
    platform: "GitHub",
    link: "https://github.com/Dylan03122003/pointhub",
  },
  websiteLink: undefined,
};

const project5: Project = {
  title: "Recipe Website",
  briefDescription:
    "A web application that allows users to search for recipes, view detailed information about each recipe, and save their favorite recipes for easy access. The platform is designed to provide a seamless and enjoyable cooking experience.",
  roles: [ROLE.FRONT_END, ROLE.TEAM_LEAD, ROLE.TECHNICAL_LEAD],
  highlights: [
    "Modern UI/UX design with React and Tailwindcss.",
    "Integrated Spoonacular API to fetch a variety of recipes.",
  ],
  technologies: [
    TECHNOLOGIES.REACT,
    TECHNOLOGIES.TYPESCRIPT,
    TECHNOLOGIES.TAILWIND,
  ],
  mainImage: images.RecipeReact[0],
  images: images.RecipeReact,
  demoLink: undefined,
  repoLink: {
    platform: "GitHub",
    link: "https://github.com/Dylan03122003/recipe-website-v2",
  },
  websiteLink: undefined,
};

const project6: Project = {
  title: "Note-taking Website",
  briefDescription:
    "A web-based application that empowers users to easily create, edit, organize, and manage their personal or professional notes. Designed with simplicity and user experience in mind, the platform ensures efficient and enjoyable digital note-taking anytime, anywhere.",
  roles: [ROLE.FRONT_END],
  technologies: [
    TECHNOLOGIES.REACT,
    TECHNOLOGIES.TYPESCRIPT,
    TECHNOLOGIES.BOOTSTRAP,
  ],
  highlights: [
    "Creating and editing notes is effortless with the clean and intuitive React and Typescript powered user interface.",
    "Find notes quickly with powerful search and filters.",
  ],
  mainImage: images.NoteTaking[0],
  images: images.NoteTaking,
  demoLink: undefined,
  repoLink: {
    platform: "GitHub",
    link: "https://github.com/Dylan03122003/note-taking-website",
  },
  websiteLink: "https://smart-note-taking.netlify.app",
};

const project7: Project = {
  title: "Recipe Website (Vanilla JS)",
  briefDescription:
    "A visually appealing and user-friendly website designed to help cooking enthusiasts explore, discover, and try out a wide variety of recipes, making meal planning and culinary creativity easier and more enjoyable for everyone.",
  roles: [ROLE.FRONT_END],
  technologies: [TECHNOLOGIES.HTML, TECHNOLOGIES.CSS, TECHNOLOGIES.JAVASCRIPT],
  highlights: [
    "Implemented the MVC software pattern.",
    "Developed features allow users to search, bookmark recipes, and access detailed information.",
  ],
  mainImage: images.RecipeJavaScript[0],
  images: images.RecipeJavaScript,
  demoLink: undefined,
  repoLink: {
    platform: "GitHub",
    link: "https://github.com/Dylan03122003/recipe_website",
  },
  websiteLink: undefined,
};

const project8: Project = {
  title: "Workout Tracker Website",
  briefDescription:
    "The website integrates an interactive map alongside a clean and intuitive side-panel layout, allowing users to easily view, track, and explore activities such as cycling and running. These activities are visually represented with location markers directly on the map.",
  roles: [ROLE.FRONT_END],
  technologies: [TECHNOLOGIES.HTML, TECHNOLOGIES.CSS, TECHNOLOGIES.JAVASCRIPT],
  highlights: [
    "Integrated Leaflet JavaScript library for stress-free running route monitoring and easy progress tracking",
  ],
  mainImage: images.WorkoutTracker[0],
  images: images.WorkoutTracker,
  demoLink: undefined,
  repoLink: {
    platform: "GitHub",
    link: "https://github.com/Dylan03122003/Mapty",
  },
  websiteLink: undefined,
};

export const projects: Project[] = [
  project1,
  project2,
  project3,
  project4,
  project5,
  project6,
  project7,
  project8,
];
