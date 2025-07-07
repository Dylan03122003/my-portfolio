import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface SectionHeaderProps {
  mainTitle: string;
  subTitle: string;
  description?: string;
  icon: React.ReactNode;
}

function SectionHeader({
  mainTitle,
  subTitle,
  description,
  icon, // This prop is not used in the component, but you can use it if needed
}: SectionHeaderProps) {
  const [isHeaderVisible, setIsHeaderVisible] = useState(false);

  useEffect(() => {
    // Add animation delay for header
    setTimeout(() => {
      setIsHeaderVisible(true);
    }, 200);
  }, []);

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } },
  };

  return (
    <div
      className={`text-center mb-10 transition-all duration-1000 ${
        isHeaderVisible
          ? "opacity-100 transform translate-y-0"
          : "opacity-0 transform -translate-y-10"
      }`}
    >
      <div className="inline-block mb-4">
        <div className="relative">
          <div className="inline-flex items-center justify-center px-4 py-1 bg-blue-100 dark:bg-blue-800 text-blue-600 dark:text-blue-100 rounded-full text-sm font-semibold">
            {icon}
            {subTitle}
          </div>
        </div>
      </div>

      <motion.div variants={itemVariants} className="w-full text-center">
        <h2
          className="text-3xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 dark:from-blue-400
         to-purple-600 dark:to-purple-400 bg-clip-text text-transparent relative"
        >
          {mainTitle}
        </h2>
      </motion.div>

      {description && (
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mb-8"></div>
      )}

      {description && (
        <p className="text-gray-600 dark:text-white text-lg max-w-2xl mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}

export default SectionHeader;
