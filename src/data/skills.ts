import MUIIcon from "./../assets/img/MUI_icon.png";
import BootstrapIcon from "./../assets/img/bootstrap_icon.png";
import CssIcon from "./../assets/img/css_icon.png";
import HtmlIcon from "./../assets/img/html_icon.png";
import JavascriptIcon from "./../assets/img/javascript_icon.png";
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
    confidentLevel: 90,
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
    confidentLevel: 95,
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
    name: "HTML",
    photo: HtmlIcon,
    confidentLevel: 90,
  },
  {
    id: 8,
    name: "CSS",
    photo: CssIcon,
    confidentLevel: 90,
  },
];
