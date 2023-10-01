import SkillItem from "../components/SkillItem";
// import Slider from "../components/Slider";
import { SECTION_ID } from "../utils/section_ids";
import { frontendSkills } from "./../data/skills";

const Skills = () => {
  return (
    <section
      id={`${SECTION_ID.SKILLS}`}
      className="h-auto md:h-screen py-32 px-5 sm:px-36 bg-primary-light-mode dark:bg-primary-dark-mode "
    >
      <h2 className="text-center text-3xl text-title-light-mode dark:text-white font-bold mb-32">
        Skills
      </h2>
      <div>
        <h3 className="mx-auto lg:mx-0 w-fit mb-5 text-title-light-mode dark:text-white px-3 py-1 bg-card-light-mode dark:bg-card-dark-mode shadow-custom rounded-full">
          <span className="text-xl text-blue-500 dark:text-blue-300 font-medium">
            Front-end
          </span>{" "}
          skills
        </h3>
        <div className="hidden sm:flex items-center justify-center flex-wrap gap-5">
          {frontendSkills.map((skill) => (
            <SkillItem
              name={skill.name}
              photo={skill.photo}
              confidentLevel={skill.confidentLevel}
              className="min-w-[200px]"
              key={skill.id}
            />
          ))}
        </div>
        {/* <Slider skills={frontendSkills} /> */}

        <div className="w-[300px] flex gap-5 overflow-x-scroll">
          {frontendSkills.map((skill) => (
            <div className="min-w-[200px] h-[300px] bg-red-200" key={skill.id}>
              {skill.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
