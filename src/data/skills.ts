import MUIIcon from "./../assets/img/MUI_icon.png";
import BootstrapIcon from "./../assets/img/bootstrap_icon.png";
import CPlusPlusLogo from "./../assets/img/c++_language_logo.png";
import CLogo from "./../assets/img/c_language_logo.png";
import CssIcon from "./../assets/img/css_icon.png";
import ExpressLogo from "./../assets/img/express_logo.png";
import FireBaseLogo from "./../assets/img/firebase_logo.png";
import HtmlIcon from "./../assets/img/html_icon.png";
import JavaLogo from "./../assets/img/java_language_logo.png";
import JavascriptIcon from "./../assets/img/javascript_icon.png";
import JQueryLogo from "./../assets/img/jquery_logo.png";
import MongoDBLogo from "./../assets/img/mongodb_logo.png";
import MongooseLogo from "./../assets/img/mongoose_logo.jpg";
import MySQLLogo from "./../assets/img/mysql_logo.png";
import NodeJsLogo from "./../assets/img/nodejs_logo.png";
import PostgreLogo from "./../assets/img/postgre_logo.png";
import ReactIcon from "./../assets/img/react_icon.png";
import TailwindIcon from "./../assets/img/tailwind_icon.png";
import TypescriptIcon from "./../assets/img/typescript_icon.png";

export interface Skill {
  id: number;
  name: string;
  photo: string;
  confidentLevel: number;
}

export const frontendSkills = [
  {
    id: 1,
    name: "React",
    photo: ReactIcon,
    confidentLevel: 85,
  },
  {
    id: 2,
    name: "TypeScript",
    photo: TypescriptIcon,
    confidentLevel: 80,
  },
  {
    id: 3,
    name: "MUI",
    photo: MUIIcon,
    confidentLevel: 70,
  },
  {
    id: 4,
    name: "Tailwind",
    photo: TailwindIcon,
    confidentLevel: 85,
  },
  {
    id: 5,
    name: "Bootstrap",
    photo: BootstrapIcon,
    confidentLevel: 70,
  },
  {
    id: 6,
    name: "JavaScript",
    photo: JavascriptIcon,
    confidentLevel: 90,
  },
  {
    id: 7,
    name: "JQuery",
    photo: JQueryLogo,
    confidentLevel: 80,
  },
  {
    id: 8,
    name: "HTML",
    photo: HtmlIcon,
    confidentLevel: 90,
  },
  {
    id: 9,
    name: "CSS",
    photo: CssIcon,
    confidentLevel: 85,
  },
];

export const backendSkills = [
  {
    id: 1,
    name: "Node.js",
    photo: NodeJsLogo,
    confidentLevel: 80,
  },
  {
    id: 2,
    name: "Express",
    photo: ExpressLogo,
    confidentLevel: 80,
  },
  {
    id: 3,
    name: "PostgreSQL",
    photo: PostgreLogo,
    confidentLevel: 75,
  },
  {
    id: 4,
    name: "MySQL",
    photo: MySQLLogo,
    confidentLevel: 75,
  },
  {
    id: 5,
    name: "MongoDB",
    photo: MongoDBLogo,
    confidentLevel: 90,
  },
  {
    id: 6,
    name: "Mongoose",
    photo: MongooseLogo,
    confidentLevel: 90,
  },
  {
    id: 7,
    name: "Firebase",
    photo: FireBaseLogo,
    confidentLevel: 75,
  },
];

export const programmingLanguages = [
  {
    id: 1,
    name: "TypeScript",
    photo: TypescriptIcon,
    confidentLevel: 80,
  },
  {
    id: 2,
    name: "JavaScript",
    photo: JavascriptIcon,
    confidentLevel: 90,
  },
  {
    id: 3,
    name: "Java",
    photo: JavaLogo,
    confidentLevel: 80,
  },
  {
    id: 4,
    name: "C++",
    photo: CPlusPlusLogo,
    confidentLevel: 70,
  },
  {
    id: 5,
    name: "C",
    photo: CLogo,
    confidentLevel: 70,
  },
];
