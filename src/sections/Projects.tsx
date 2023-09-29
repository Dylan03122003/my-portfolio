import { SECTION_ID } from "../utils/section_ids";

const Projects = () => {
  return (
    <section
      id={`${SECTION_ID.PROJECTS}`}
      className="h-screen bg-primary-light-mode dark:bg-primary-dark-mode"
    >
      <h2 className="text-3xl text-title-light-mode dark:text-white font-bold mb-10">
        Projects
      </h2>
    </section>
  );
};

export default Projects;
