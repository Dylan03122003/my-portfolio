import { useState } from "react";
import { motion } from "framer-motion";
import { experiences } from "../data/experiences";
import BackgroundPattern from "../components/BackgroundPattern";
import SectionHeader from "../components/SectionHeader";
import { FaRegClock } from "react-icons/fa6";

// Format date from YYYY-MM to Month Year
const formatDate = (dateString: string): string => {
  const [year, month] = dateString.split("-");
  const date = new Date(parseInt(year), parseInt(month) - 1);
  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
};

// Calculate duration between two dates
const calculateDuration = (startDate: string, endDate: string): string => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const monthDiff =
    (end.getFullYear() - start.getFullYear()) * 12 +
    end.getMonth() -
    start.getMonth();

  const years = Math.floor(monthDiff / 12);
  const months = monthDiff % 12;

  let duration = "";
  if (years > 0) {
    duration += `${years} year${years > 1 ? "s" : ""}`;
  }
  if (months > 0) {
    duration += `${duration ? " " : ""}${months} month${months > 1 ? "s" : ""}`;
  }

  return duration;
};

const Experience = () => {
  const [expandedExp, setExpandedExp] = useState<number | null>(0);

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
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  const roleVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const listItemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <div
      id="experience"
      className="w-full relative min-h-screen text-gray-800 py-16 px-4 sm:px-6 lg:px-8"
    >
      <BackgroundPattern />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-6xl mx-auto"
      >
        <SectionHeader
          mainTitle="Professional Experience"
          subTitle="Where innovation meets execution"
          description="Building digital experiences with passion and precision"
          icon={<FaRegClock size={16} className="mr-2" />}
        />
        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-500">
            Professional Experience
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Building digital experiences with passion and precision
          </p>
        </motion.div> */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-12"
        >
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="relative group"
            >
              {/* Timeline line */}
              {/* <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-indigo-400 to-violet-400 rounded-full"></div> */}

              {/* Experience card */}
              <div
                className={`bg-white dark:bg-gray-800/80 hover:bg-gray-50 rounded-xl shadow-lg p-8 ml-8 border-l-4 transition-all duration-300 ease-in-out ${
                  expandedExp === index
                    ? "border-violet-500 dark:border-violet-900 shadow-violet-200 dark:shadow-violet-900"
                    : "border-indigo-400 dark:border-indigo-900 shadow-blue-100 dark:shadow-blue-900"
                } cursor-pointer`}
                onClick={() =>
                  setExpandedExp(expandedExp === index ? null : index)
                }
              >
                {/* Timeline dot */}
                {/* <div className="absolute left-0 top-10 w-8 h-8 rounded-full bg-white shadow-md flex items-center justify-center transform -translate-x-4 border-4 border-white">
                  <div className="w-4 h-4 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"></div>
                </div> */}

                {/* Header section */}
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
                      {experience.jobTitle}
                    </h3>
                    <p className="text-xl text-indigo-600 dark:text-indigo-300 font-medium">
                      {experience.company}
                    </p>
                  </div>

                  <div className="mt-4 md:mt-0 md:text-right">
                    <div className="px-4 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200 inline-block">
                      {formatDate(experience.startDate)} -{" "}
                      {formatDate(experience.endDate)}
                    </div>
                    <p className="text-indigo-700 dark:text-indigo-200 font-medium mt-2">
                      {calculateDuration(
                        experience.startDate,
                        experience.endDate
                      )}
                    </p>
                  </div>
                </div>

                {/* Roles section */}
                <motion.div
                  animate={{ opacity: 1 }}
                  initial={{ opacity: 0 }}
                  className="mb-6 flex flex-wrap gap-2"
                >
                  {experience.roles.map((role, roleIndex) => (
                    <motion.span
                      key={roleIndex}
                      variants={roleVariants}
                      initial="hidden"
                      animate="visible"
                      className="inline-block bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-1.5 text-sm rounded-full font-medium text-white shadow-sm"
                    >
                      {role}
                    </motion.span>
                  ))}
                </motion.div>

                {/* Responsibilities section */}
                {expandedExp === index && (
                  <motion.div
                    variants={listVariants}
                    initial="hidden"
                    animate="visible"
                    className="mt-6 bg-gray-50 dark:dark:bg-gray-800/80 p-6 rounded-lg border border-gray-100 dark:border-gray-700"
                  >
                    <h4 className="text-lg font-semibold text-indigo-700 dark:text-indigo-300 mb-4">
                      Highlights
                    </h4>
                    <motion.ul className="space-y-4 text-gray-700">
                      {experience.responsibilities.map((resp, respIndex) => (
                        <motion.li
                          key={respIndex}
                          variants={listItemVariants}
                          className="flex items-start text-gray-900 dark:text-white"
                        >
                          <span className="inline-block mr-3 mt-1.5 text-violet-500 dark:text-violet-300">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-4 w-4"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </span>
                          <span>{resp}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>
                )}

                {/* Expand/collapse button */}
                <div className="mt-6 flex justify-center">
                  <motion.div
                    animate={{ rotate: expandedExp === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-200 shadow-sm group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Experience;
