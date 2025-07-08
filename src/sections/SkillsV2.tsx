import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SiTypescript,
  SiJavascript,
  SiC,
  SiCplusplus,
  SiNextdotjs,
  SiReact,
  SiJquery,
  SiTailwindcss,
  SiMui,
  SiAntdesign,
  SiBootstrap,
  SiHtml5,
  SiCss3,
  SiSass,
  SiNestjs,
  SiExpress,
  SiNodedotjs,
  SiPrisma,
  SiAndroidstudio,
  SiMicrosoftsqlserver,
  SiRedis,
  SiAmazondynamodb,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiSqlite,
  SiFirebase,
  SiCaddy,
  SiGit,
  SiGitlab,
  SiGithub,
  SiJira,
  SiAmazonaws,
  SiWindows,
  SiLinux,
  SiPostman,
  SiJest,
  SiSelenium,
} from "react-icons/si";
import { FaJava, FaProjectDiagram, FaWrench } from "react-icons/fa";
import { TbBrandReactNative } from "react-icons/tb";
import { RiTestTubeFill } from "react-icons/ri";
import { MdOutlineVerified } from "react-icons/md";
import {
  BsCodeSlash,
  BsWindow,
  BsServer,
  BsPhone,
  BsDatabase,
  BsCloud,
  BsTerminal,
} from "react-icons/bs";
import { VscServerEnvironment } from "react-icons/vsc";
import BackgroundPattern from "../components/BackgroundPattern";
import SectionHeader from "../components/SectionHeader";

// --- 1. TYPES & RAW DATA ---
type CategoryKey =
  | "programmingLanguages"
  | "frontendDevelopment"
  | "backendDevelopment"
  | "mobileDevelopment"
  | "databaseManagement"
  | "webServers"
  | "versionControl"
  | "projectManagement"
  | "cloudBasedTechnologies"
  | "operatingSystems"
  | "otherSoftwareTools"
  | "testing";

interface CloudProvider {
  provider: string;
  services: string[];
}
interface SkillsData {
  programmingLanguages: string[];
  frontendDevelopment: string[];
  backendDevelopment: string[];
  mobileDevelopment: string[];
  databaseManagement: string[];
  webServers: string[];
  versionControl: string[];
  projectManagement: string[];
  cloudBasedTechnologies: CloudProvider[];
  operatingSystems: string[];
  otherSoftwareTools: string[];
  testing: string[];
}

const skillsData: SkillsData = {
  programmingLanguages: ["TypeScript", "JavaScript", "Java", "C", "C++"],
  frontendDevelopment: [
    "Next.js",
    "React",
    "jQuery",
    "Tailwind CSS",
    "MUI",
    "Ant Design",
    "shadcn/ui",
    "Bootstrap",
    "Progressive Web Apps",
    "WebSockets",
    "HTML",
    "CSS",
    "Sass",
    "SCSS",
  ],
  backendDevelopment: ["NestJS", "Express.js", "Node.js", "Prisma"],
  mobileDevelopment: ["React Native", "Android Studio"],
  databaseManagement: [
    "Microsoft SQL Server",
    "Redis",
    "DynamoDB",
    "PostgreSQL",
    "MySQL",
    "MongoDB",
    "SQLite",
    "Firebase",
  ],
  webServers: ["Caddy"],
  versionControl: ["Git", "GitLab", "GitHub"],
  projectManagement: ["Scrum", "Agile Methodology", "Jira"],
  cloudBasedTechnologies: [
    {
      provider: "AWS",
      services: ["EC2", "Lambda", "S3", "RDS", "AWS Amplify"],
    },
  ],
  operatingSystems: ["Linux/Unix", "Windows"],
  otherSoftwareTools: ["Postman"],
  testing: ["Jest (unit testing)", "Selenium"],
};

// --- 2. ICON & META MAPS ---
const skillIconMap: Record<string, JSX.Element> = {
  TypeScript: <SiTypescript />,
  JavaScript: <SiJavascript />,
  Java: <FaJava />,
  C: <SiC />,
  "C++": <SiCplusplus />,
  "Next.js": <SiNextdotjs />,
  React: <SiReact />,
  jQuery: <SiJquery />,
  "Tailwind CSS": <SiTailwindcss />,
  MUI: <SiMui />,
  "Ant Design": <SiAntdesign />,
  Bootstrap: <SiBootstrap />,
  HTML: <SiHtml5 />,
  CSS: <SiCss3 />,
  Sass: <SiSass />,
  SCSS: <SiSass />,
  NestJS: <SiNestjs />,
  "Express.js": <SiExpress />,
  "Node.js": <SiNodedotjs />,
  Prisma: <SiPrisma />,
  "React Native": <TbBrandReactNative />,
  "Android Studio": <SiAndroidstudio />,
  "Microsoft SQL Server": <SiMicrosoftsqlserver />,
  Redis: <SiRedis />,
  DynamoDB: <SiAmazondynamodb />,
  PostgreSQL: <SiPostgresql />,
  MySQL: <SiMysql />,
  MongoDB: <SiMongodb />,
  SQLite: <SiSqlite />,
  Firebase: <SiFirebase />,
  Caddy: <SiCaddy />,
  Git: <SiGit />,
  GitLab: <SiGitlab />,
  GitHub: <SiGithub />,
  Jira: <SiJira />,
  Scrum: <FaProjectDiagram />,
  "Agile Methodology": <FaProjectDiagram />,
  AWS: <SiAmazonaws />,
  EC2: <SiAmazonaws />,
  Lambda: <SiAmazonaws />,
  S3: <SiAmazonaws />,
  RDS: <SiAmazonaws />,
  "AWS Amplify": <SiAmazonaws />,
  Windows: <SiWindows />,
  "Linux/Unix": <SiLinux />,
  Postman: <SiPostman />,
  "Jest (unit testing)": <SiJest />,
  Selenium: <SiSelenium />,
};

const categoryIcons: Record<CategoryKey, JSX.Element> = {
  programmingLanguages: <BsCodeSlash />,
  frontendDevelopment: <BsWindow />,
  backendDevelopment: <BsServer />,
  mobileDevelopment: <BsPhone />,
  databaseManagement: <BsDatabase />,
  webServers: <VscServerEnvironment />,
  versionControl: <MdOutlineVerified />,
  projectManagement: <FaProjectDiagram />,
  cloudBasedTechnologies: <BsCloud />,
  operatingSystems: <BsTerminal />,
  otherSoftwareTools: <FaWrench />,
  testing: <RiTestTubeFill />,
};

const categoryTitles: Record<CategoryKey, string> = {
  programmingLanguages: "Programming Languages",
  frontendDevelopment: "Frontend Development",
  backendDevelopment: "Backend Development",
  mobileDevelopment: "Mobile Development",
  databaseManagement: "Database Management",
  webServers: "Web Servers",
  versionControl: "Version Control",
  projectManagement: "Project Management",
  cloudBasedTechnologies: "Cloud Technologies",
  operatingSystems: "Operating Systems",
  otherSoftwareTools: "Development Tools",
  testing: "Testing",
};

const categoryColors: Record<
  CategoryKey,
  { gradient: string; text: string; glow: string; darkGlow: string }
> = {
  programmingLanguages: {
    gradient: "from-blue-500 to-blue-600",
    text: "blue",
    glow: "0 0 20px rgba(59,130,246,0.5)",
    darkGlow: "0 0 20px rgba(59,130,246,0.3)",
  },
  frontendDevelopment: {
    gradient: "from-purple-500 to-purple-600",
    text: "violet",
    glow: "0 0 20px rgba(139,92,246,0.5)",
    darkGlow: "0 0 20px rgba(139,92,246,0.3)",
  },
  backendDevelopment: {
    gradient: "from-green-500 to-green-600",
    text: "green",
    glow: "0 0 20px rgba(16,185,129,0.5)",
    darkGlow: "0 0 20px rgba(16,185,129,0.3)",
  },
  mobileDevelopment: {
    gradient: "from-blue-500 to-blue-600",
    text: "blue",
    glow: "0 0 20px rgba(59,130,246,0.5)",
    darkGlow: "0 0 20px rgba(59,130,246,0.3)",
  },
  databaseManagement: {
    gradient: "from-red-500 to-red-600",
    text: "red",
    glow: "0 0 20px rgba(239,68,68,0.5)",
    darkGlow: "0 0 20px rgba(239,68,68,0.3)",
  },
  webServers: {
    gradient: "from-green-500 to-green-600",
    text: "green",
    glow: "0 0 20px rgba(16,185,129,0.5)",
    darkGlow: "0 0 20px rgba(16,185,129,0.3)",
  },
  versionControl: {
    gradient: "from-indigo-500 to-indigo-600",
    text: "indigo",
    glow: "0 0 20px rgba(99,102,241,0.5)",
    darkGlow: "0 0 20px rgba(99,102,241,0.3)",
  },
  projectManagement: {
    gradient: "from-purple-500 to-purple-600",
    text: "violet",
    glow: "0 0 20px rgba(139,92,246,0.5)",
    darkGlow: "0 0 20px rgba(139,92,246,0.3)",
  },
  cloudBasedTechnologies: {
    gradient: "from-cyan-500 to-cyan-600",
    text: "cyan",
    glow: "0 0 20px rgba(6,182,212,0.5)",
    darkGlow: "0 0 20px rgba(6,182,212,0.3)",
  },
  operatingSystems: {
    gradient: "from-green-500 to-green-600",
    text: "green",
    glow: "0 0 20px rgba(16,185,129,0.5)",
    darkGlow: "0 0 20px rgba(16,185,129,0.3)",
  },
  otherSoftwareTools: {
    gradient: "from-gray-500 to-gray-600",
    text: "gray",
    glow: "0 0 20px rgba(107,114,128,0.5)",
    darkGlow: "0 0 20px rgba(107,114,128,0.3)",
  },
  testing: {
    gradient: "from-red-500 to-red-600",
    text: "red",
    glow: "0 0 20px rgba(239,68,68,0.5)",
    darkGlow: "0 0 20px rgba(239,68,68,0.3)",
  },
};

// --- 3. SUB-COMPONENTS ---
const GlowingOrb: React.FC<{ color: string; className?: string }> = ({
  color,
  className,
}) => (
  <div
    className={`absolute w-32 h-32 rounded-full blur-3xl opacity-20 dark:opacity-10 ${color} ${className}`}
  />
);

const SkillItem: React.FC<{
  name: string;
  color: string;
  glow: string;
  darkGlow: string;
}> = ({ name, color, glow, darkGlow }) => (
  <motion.div
    variants={{
      hidden: { scale: 0.8, opacity: 0 },
      visible: { scale: 1, opacity: 1, transition: { duration: 0.5 } },
      hover: {
        scale: 1.05,
        boxShadow: `var(--glow-light)`,
        transition: { duration: 0.3 },
      },
    }}
    whileHover="hover"
    className={`
      px-4 py-3 bg-gradient-to-br from-${color}-50 to-${color}-100
      dark:from-${color}-900/20 dark:to-${color}-800/20
      text-${color}-700 dark:text-${color}-300 rounded-xl text-sm font-medium
      border border-${color}-200 dark:border-${color}-700/50 flex items-center gap-3
      transition-all duration-300 backdrop-blur-sm
      dark:hover:shadow-[var(--glow-dark)]
    `}
    style={
      {
        "--glow-light": glow,
        "--glow-dark": darkGlow,
      } as React.CSSProperties
    }
  >
    <span className={`text-xl text-${color}-600 dark:text-${color}-400`}>
      {skillIconMap[name] || <FaWrench />}
    </span>
    <span>{name}</span>
  </motion.div>
);

const CategoryCard: React.FC<{
  category: CategoryKey;
}> = ({ category }) => {
  const { gradient, text, glow, darkGlow } = categoryColors[category];
  const items = skillsData[category as keyof SkillsData];
  const isCloud = category === "cloudBasedTechnologies";

  return (
    <motion.div
      key={category}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
      className="backdrop-blur-sm bg-white/90 dark:bg-slate-900/90 rounded-2xl p-8 shadow-xl border border-gray-200/50 dark:border-slate-700/50 overflow-hidden relative"
      whileHover={{
        boxShadow: `var(--card-glow-light)`,
      }}
      style={
        {
          "--card-glow-light": glow,
          "--card-glow-dark": darkGlow,
        } as React.CSSProperties
      }
      transition={{ duration: 0.3 }}
    >
      <GlowingOrb color={`bg-${text}-500`} className="-top-16 -right-16" />
      <GlowingOrb color={`bg-${text}-500`} className="-bottom-16 -left-16" />

      <div className="flex items-center gap-4 mb-6">
        <motion.div
          className={`flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${gradient} text-white shadow-lg text-xl`}
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {categoryIcons[category]}
        </motion.div>
        <h3 className="text-2xl font-bold text-gray-800 dark:text-slate-100">
          {categoryTitles[category]}
        </h3>
      </div>

      <div className="flex flex-wrap gap-3 mt-6">
        {isCloud
          ? (items as CloudProvider[]).flatMap((c) => [
              <div key={c.provider} className="w-full mb-4">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl text-cyan-600 dark:text-cyan-400">
                    {skillIconMap[c.provider] || <SiAmazonaws />}
                  </span>
                  <h4 className="text-xl font-semibold text-cyan-800 dark:text-cyan-300">
                    {c.provider}
                  </h4>
                </div>
                <div className="flex flex-wrap gap-3 pl-10">
                  {c.services.map((svc) => (
                    <SkillItem
                      key={svc}
                      name={svc}
                      color="cyan"
                      glow={categoryColors.cloudBasedTechnologies.glow}
                      darkGlow={categoryColors.cloudBasedTechnologies.darkGlow}
                    />
                  ))}
                </div>
              </div>,
            ])
          : (items as string[]).map((skill) => (
              <SkillItem
                key={skill}
                name={skill}
                color={text}
                glow={glow}
                darkGlow={darkGlow}
              />
            ))}
      </div>
    </motion.div>
  );
};

const SkillTabs: React.FC<{
  active: CategoryKey | "all";
  onSelect: (tab: CategoryKey | "all") => void;
}> = ({ active, onSelect }) => {
  const cats = Object.keys(skillsData) as CategoryKey[];
  return (
    <motion.div
      className="flex flex-wrap justify-center gap-3 mb-12"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.05, delayChildren: 0.3 },
        },
      }}
      initial="hidden"
      animate="visible"
    >
      <motion.button
        variants={{
          hidden: { y: -20, opacity: 0 },
          visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
        }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => onSelect("all")}
        className={`
          px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
          ${
            active === "all"
              ? "bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-500/30 dark:shadow-blue-500/20"
              : "bg-white dark:bg-slate-800 text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700 shadow-md border border-gray-200 dark:border-slate-600"
          }
        `}
      >
        All Skills
      </motion.button>

      {cats.map((c) => {
        const { gradient, text } = categoryColors[c];
        return (
          <motion.button
            key={c}
            variants={{
              hidden: { y: -20, opacity: 0 },
              visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onSelect(c)}
            className={`
              px-5 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 transition-all duration-300
              ${
                active === c
                  ? `bg-gradient-to-r ${gradient} text-white shadow-lg shadow-${text}-500/30 dark:shadow-${text}-500/20`
                  : "bg-white dark:bg-slate-800 text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700 shadow-md border border-gray-200 dark:border-slate-600"
              }
            `}
          >
            <span className="text-lg">{categoryIcons[c]}</span>
            {categoryTitles[c]}
          </motion.button>
        );
      })}
    </motion.div>
  );
};

// --- 4. MAIN COMPONENT ---
const SkillsV2: React.FC = () => {
  const [activeTab, setActiveTab] = useState<CategoryKey | "all">("all");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 300);
    return () => clearTimeout(t);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 },
    },
  };

  const toShow =
    activeTab === "all"
      ? (Object.keys(skillsData) as CategoryKey[])
      : [activeTab];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <BackgroundPattern />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial="hidden"
          animate={loaded ? "visible" : "hidden"}
          variants={containerVariants}
          className="flex flex-col items-center"
        >
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full mb-16 text-center relative z-20"
          >
            <SectionHeader
              mainTitle="Skills"
              subTitle="My Expertise"
              description="A comprehensive overview of my technical skills and tools I use in development."
              icon={<BsCodeSlash className="inline-block mr-2" />}
            />
            <style>{`
              @keyframes shimmer {
                0% {
                  transform: translateX(-100%);
                }
                100% {
                  transform: translateX(100%);
                }
              }

              @keyframes gradient {
                0% {
                  background-position: 0% 50%;
                }
                50% {
                  background-position: 100% 50%;
                }
                100% {
                  background-position: 0% 50%;
                }
              }

              .dark .category-card:hover {
                box-shadow: var(--card-glow-dark) !important;
              }
            `}</style>
          </motion.div>

          <SkillTabs active={activeTab} onSelect={setActiveTab} />

          <motion.div
            variants={containerVariants}
            className="w-full grid grid-cols-1 gap-8"
          >
            <AnimatePresence mode="wait">
              {toShow.map((cat) => (
                <CategoryCard key={cat} category={cat} />
              ))}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsV2;
