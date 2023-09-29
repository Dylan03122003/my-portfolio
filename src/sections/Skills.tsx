import Slider from "../components/Slider";
import { SECTION_ID } from "../utils/section_ids";

const Skills = () => {
  return (
    <section
      id={`${SECTION_ID.SKILLS}`}
      className="h-screen bg-primary-light-mode dark:bg-primary-dark-mode"
    >
      <h2 className="text-3xl text-title-light-mode dark:text-white font-bold mb-10">
        Skills
      </h2>
      <div className="w-[300px] sm:w-[600px] mx-auto">
        <Slider />
      </div>
    </section>
  );
};

export default Skills;
