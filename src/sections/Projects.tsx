import { motion } from "framer-motion";
import { useState } from "react";
import ProjectItem from "../components/ProjectItem";
import { TAB, projects, tabs } from "../data/projects";
import { SECTION_ID } from "../utils/section_ids";
const Projects = () => {
  const [currentTab, setCurrentTab] = useState(TAB.REACT);

  const filteredProjects = projects.filter((project) =>
    project.tabs.includes(currentTab)
  );

  return (
    <section
      id={`${SECTION_ID.PROJECTS}`}
      className="py-32 px-5 md:px-10 lg:px-36 bg-primary-light-mode dark:bg-primary-dark-mode"
    >
      <h2 className="mb-16 text-center text-3xl text-title-light-mode dark:text-white font-bold">
        Projects
      </h2>

      <div className="flex items-center justify-center gap-4 mb-4">
        {tabs.map((tab) => (
          <motion.button
            whileTap={{ scale: 1.05 }}
            className={`font-medium px-4 py-2 rounded-md cursor-pointer shadow-custom ${
              currentTab === tab
                ? "bg-[#0EA5E9] text-white"
                : "bg-white dark:bg-card-dark-mode text-text-light-mode dark:text-text-dark-mode"
            }`}
            key={tab}
            type="button"
            onClick={() => setCurrentTab(tab)}
          >
            {tab}
          </motion.button>
        ))}
      </div>

      <div className="flex items-start justify-center gap-4">
        {filteredProjects.map((p, i) => (
          <ProjectItem project={p} key={i} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
