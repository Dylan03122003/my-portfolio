import { motion } from "framer-motion";
import {
  HiOutlineCode,
  HiOutlineDatabase,
  HiOutlineTranslate,
  HiOutlineLightningBolt,
} from "react-icons/hi";
import { FaAws } from "react-icons/fa";
import { SiNextdotjs, SiReact, SiNestjs, SiExpress } from "react-icons/si";
import BackgroundPattern from "../components/BackgroundPattern";
import SectionHeader from "../components/SectionHeader";

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  const iconVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
  };

  const skills = [
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
      color: "text-black dark:text-white",
    },
    {
      icon: <SiReact />,
      name: "React.js",
      color: "text-blue-500",
    },
    {
      icon: <SiNestjs />,
      name: "NestJS",
      color: "text-red-600",
    },
    {
      icon: <SiExpress />,
      name: "Express.js",
      color: "text-gray-600 dark:text-gray-300",
    },
    {
      icon: <FaAws />,
      name: "AWS Certified",
      color: "text-yellow-600",
    },
  ];

  return (
    <section id="about" className="min-h-screen py-20 relative ">
      {/* Decorative elements */}
      {/* <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-200 dark:from-blue-400 via-purple-300 dark:via-purple-500 to-pink-300 dark:to-pink-500"></div>
      <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-blue-200 dark:bg-blue-900 opacity-20 filter blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-purple-200 dark:bg-purple-900 opacity-20 filter blur-3xl"></div> */}

      <BackgroundPattern />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="flex flex-col items-center"
        >
          <SectionHeader
            mainTitle="Profressional Summary"
            subTitle="About Me"
            // description="Test"
            icon={<HiOutlineCode size={16} className="mr-2" />}
          />

          <motion.div
            variants={itemVariants}
            className="w-full max-w-4xl backdrop-blur-sm bg-white/80 dark:bg-gray-800/80 rounded-2xl p-8 shadow-xl border border-gray-100/80 dark:border-gray-700/80 relative overflow-hidden"
          >
            {/* Glowing corner accent */}
            {/* <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-blue-400/30 to-purple-500/30 rounded-full blur-2xl"></div> */}

            <div className="relative z-10">
              <motion.div
                variants={iconVariants}
                className="flex justify-center mb-6 space-x-2"
              >
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg">
                  <HiOutlineCode className="w-6 h-6" />
                </span>
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 text-white shadow-lg">
                  <HiOutlineDatabase className="w-6 h-6" />
                </span>
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-red-600 text-white shadow-lg">
                  <HiOutlineTranslate className="w-6 h-6" />
                </span>
                <span className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500 to-orange-600 text-white shadow-lg">
                  <HiOutlineLightningBolt className="w-6 h-6" />
                </span>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-lg sm:text-xl leading-relaxed text-gray-700 dark:text-gray-200 mb-8 text-center relative"
              >
                <span className="text-2xl font-serif text-blue-600 dark:text-blue-400 absolute -left-2 -top-3">
                  "
                </span>
                Full Stack Software Engineer and AWS Certified with 6+ months of
                hands-on experience in Next.js and React.js. Skilled in backend
                development principles and technologies, including NestJS and
                Express.js. Recently achieved a TOEIC score of 835 ,
                demonstrating strong professional English proficiency. Committed
                to continuous learning and contributing to team success through
                effective collaboration and innovative solutions.
                <span className="text-2xl font-serif text-blue-600 dark:text-blue-400 absolute -right-2 bottom-0">
                  "
                </span>
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap justify-center gap-3"
              >
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-700 rounded-full shadow-md border border-gray-100 dark:border-gray-600"
                  >
                    <span className={`text-lg ${skill.color}`}>
                      {skill.icon}
                    </span>
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-12 flex justify-center"
          >
            <div className="flex items-center gap-3 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 px-6 py-4 rounded-xl border border-blue-100 dark:border-blue-800/30">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-800/50 text-blue-600 dark:text-blue-300">
                <HiOutlineTranslate className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  TOEIC Score
                </p>
                <p className="text-xl font-bold text-blue-600 dark:text-blue-400">
                  835 / 990
                </p>
              </div>
              <div className="ml-3 h-12 w-1 bg-gradient-to-b from-blue-300 to-purple-400 rounded-full"></div>
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  English Level
                </p>
                <p className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Professional Working Proficiency
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
