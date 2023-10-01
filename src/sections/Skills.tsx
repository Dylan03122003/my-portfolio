import SkillItem from "../components/SkillItem";
import Slider from "../components/Slider";
import { SECTION_ID } from "../utils/section_ids";
import {
  backendSkills,
  frontendSkills,
  programmingLanguages,
} from "./../data/skills";

const Skills = () => {
  return (
    <section
      id={`${SECTION_ID.SKILLS}`}
      className="py-32 px-5 md:px-10 lg:px-36 bg-primary-light-mode dark:bg-primary-dark-mode "
    >
      <h2 className="mb-16 sm:mb-32 text-center text-3xl text-title-light-mode dark:text-white font-bold ">
        Skills
      </h2>
      <div>
        <h3 className="mx-auto lg:mx-0 w-fit mb-5 text-title-light-mode dark:text-white px-3 py-1 bg-card-light-mode dark:bg-card-dark-mode shadow-custom rounded-full">
          <span className="text-xl text-blue-500 dark:text-blue-300 font-medium">
            Front-end
          </span>{" "}
          skills
        </h3>
        <div className="hidden sm:flex items-center justify-center flex-wrap gap-5 ">
          {frontendSkills.map((skill) => (
            <SkillItem
              name={skill.name}
              photo={skill.photo}
              confidentLevel={skill.confidentLevel}
              className="min-w-[170px] sm:min-w-[200px] "
              key={skill.id}
            />
          ))}
        </div>
        <div className="block sm:hidden">
          <Slider skills={frontendSkills} />
        </div>
      </div>

      <div className="mt-20">
        <h3 className="mx-auto lg:mx-0 w-fit mb-5 text-title-light-mode dark:text-white px-3 py-1 bg-card-light-mode dark:bg-card-dark-mode shadow-custom rounded-full">
          <span className="text-xl text-blue-500 dark:text-blue-300 font-medium">
            Back-end
          </span>{" "}
          skills
        </h3>
        <div className="hidden sm:flex items-center justify-center flex-wrap gap-5 ">
          {backendSkills.map((skill) => (
            <SkillItem
              name={skill.name}
              photo={skill.photo}
              confidentLevel={skill.confidentLevel}
              className="min-w-[170px] sm:min-w-[200px] h-[200px]"
              key={skill.id}
            />
          ))}
        </div>
        <div className="block sm:hidden">
          <Slider skills={backendSkills} />
        </div>
      </div>

      <div className="mt-20">
        <h3 className="mx-auto lg:mx-0 w-fit mb-5 text-title-light-mode dark:text-white px-3 py-1 bg-card-light-mode dark:bg-card-dark-mode shadow-custom rounded-full">
          <span className="text-xl text-blue-500 dark:text-blue-300 font-medium">
            Programming
          </span>{" "}
          languages
        </h3>
        <div className="hidden sm:flex items-center justify-center flex-wrap gap-5 ">
          {programmingLanguages.map((skill) => (
            <SkillItem
              name={skill.name}
              photo={skill.photo}
              confidentLevel={skill.confidentLevel}
              className="min-w-[170px] sm:min-w-[200px]"
              key={skill.id}
            />
          ))}
        </div>
        <div className="block sm:hidden">
          <Slider skills={programmingLanguages} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
