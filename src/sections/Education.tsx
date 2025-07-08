import { motion } from "framer-motion";
import { EducationT } from "../data/education";
import BackgroundPattern from "../components/BackgroundPattern";
import SectionHeader from "../components/SectionHeader";
import { GiGraduateCap } from "react-icons/gi";

// Education data
const edu: EducationT = {
  degree: "Bachelor of Engineering (Software Engineering)",
  institution: "FPT University",
  startDate: "2021-06",
  endDate: "2025-05",
  gpa: "3.67 / 4.0",
  highlights: [
    "4 years experience of leadership",
    "Recognized for consistent academic excellence and outstanding performance across 6 semesters. (Outstanding Student Award)",
    "Mentored students on best practices in software development, debugging, and problem-solving techniques.",
    "Conducted hands-on coding sessions for students, focusing on fundamental programming concepts and real-world applications.",
    "Provided one-on-one support to struggling students",
  ],
};

// Helper function to format dates
const formatDate = (dateString: string) => {
  if (dateString === "Present") return "Present";

  const [year, month] = dateString.split("-");
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return `${monthNames[parseInt(month) - 1]} ${year}`;
};

export default function Education() {
  // Animation variants
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
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const highlightVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (i: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="education" className="min-h-screen relative overflow-hidden">
      <BackgroundPattern />

      <div className="w-full max-w-4xl mx-auto py-16 px-4 ">
        <SectionHeader
          mainTitle="Education"
          subTitle="My Academic Journey"
          description="A glimpse into my academic achievements and experiences."
          icon={<GiGraduateCap size={16} className="mr-2 " />}
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="relative">
            <motion.div
              className="bg-white rounded-xl shadow-lg overflow-hidden relative z-10"
              whileHover={{
                y: -5,
                boxShadow:
                  "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
              }}
              transition={{ duration: 0.3 }}
            >
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-0.5">
                <div className="absolute inset-0 bg-white dark:bg-gray-800/80 rounded-xl"></div>
              </div>

              <div className="relative p-8 flex flex-col md:flex-row md:items-start">
                {/* Center Column - Main Content */}
                <div className="flex-grow">
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    {edu.degree}
                  </h3>
                  <h4 className="text-xl text-gray-700 dark:text-white mb-4">
                    {edu.institution}
                  </h4>

                  <div className="flex flex-wrap gap-4 mb-6">
                    {/* Date Badge */}
                    <div className="bg-blue-50 dark:bg-blue-800 text-blue-700 dark:text-blue-100 px-4 py-1 rounded-full text-sm font-medium flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 mr-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {formatDate(edu.startDate)} - {formatDate(edu.endDate)}
                    </div>

                    {/* GPA Badge */}
                    {edu.gpa && (
                      <div className="bg-green-50 dark:bg-green-800 text-green-700 dark:text-green-100 px-4 py-1 rounded-full text-sm font-medium flex items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mr-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        GPA: {edu.gpa}
                      </div>
                    )}
                  </div>

                  {/* Highlights Section */}
                  <div className="mt-6">
                    <h5 className="text-lg font-semibold text-gray-800 dark:text-white mb-4 flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-200"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                      Key Highlights
                    </h5>
                    <div className="space-y-3">
                      {edu.highlights?.map((highlight, index) => (
                        <motion.div
                          key={index}
                          custom={index}
                          variants={highlightVariants}
                          initial="hidden"
                          animate="visible"
                          className="flex items-start"
                        >
                          <div className="h-6 w-6 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex-shrink-0 flex items-center justify-center text-white font-medium text-sm mt-0.5">
                            {index + 1}
                          </div>
                          <p className="text-gray-700 dark:text-gray-100 ml-3 flex-1">
                            {highlight}
                          </p>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="flex space-x-1 mt-8">
                    {[...Array(40)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-8 h-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 opacity-70"
                        initial={{ width: "1rem" }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                      />
                    ))}
                  </div>
                </div>

                {/* Right Column - Status Indicator */}
                {/* <div className="mt-6 md:mt-0 md:ml-8 flex-shrink-0">
                  {edu.endDate === "Present" ? (
                    <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-medium uppercase text-sm tracking-wider flex items-center">
                      <motion.div
                        className="w-3 h-3 bg-blue-500 rounded-full mr-2"
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                      />
                      Current
                    </div>
                  ) : (
                    <div className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg font-medium uppercase text-sm tracking-wider">
                      Completed
                    </div>
                  )}
                </div> */}
              </div>
            </motion.div>

            {/* Background decoration */}
            <motion.div
              className="absolute -bottom-4 -right-4 w-32 h-32 rounded-full bg-blue-100 dark:bg-blue-800 -z-10"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
            <motion.div
              className="absolute -top-4 -left-4 w-24 h-24 rounded-full bg-purple-100 dark:bg-purple-800 -z-10"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
