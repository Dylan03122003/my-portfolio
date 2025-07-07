import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandReactNative } from "react-icons/tb";
import { SiNestjs } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";
import { SiTypescript } from "react-icons/si";
import { FaCode } from "react-icons/fa6";
import { SiTestcafe } from "react-icons/si";
import { DiMsqlServer } from "react-icons/di";
import { FaCloud } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiMui } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { FaSass } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaJava } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";
import { SiPrisma } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandMysql } from "react-icons/tb";

export const technologyIconMap: Record<string, JSX.Element> = {
  "Next.js": <TbBrandNextjs />,
  "React Native": <TbBrandReactNative />,
  NestJS: <SiNestjs />,
  AWS: <FaAws />,
  WebSocket: <CgWebsite />,
  TypeScript: <SiTypescript />,
  Shadcn: <FaCode />,
  Jest: <SiTestcafe />,
  "Microsoft SQL Server": <DiMsqlServer />,
  "CI/CD": <FaCloud />,
  React: <FaReact />,
  Express: <SiExpress />,
  MongoDB: <SiMongodb />,
  Tailwind: <SiTailwindcss />,
  "Node.js": <FaNodeJs />,
  Bootstrap: <FaBootstrap />,
  MUI: <SiMui />,
  HTML: <FaHtml5 />,
  CSS: <IoLogoCss3 />,
  Sass: <FaSass />,
  JavaScript: <IoLogoJavascript />,
  Java: <FaJava />,
  JQuery: <DiJqueryLogo />,
  Prisma: <SiPrisma />,
  PostgreSQL: <BiLogoPostgresql />,
  MySQL: <TbBrandMysql />,
};
