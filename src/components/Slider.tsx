import { Skill } from "../data/skills";
import SkillItem from "./SkillItem";

interface Props {
  skills: Skill[];
}

const Slider = ({ skills }: Props) => {
  return (
    <div className="w-[300px] mx-auto scrollbar_none overflow-x-scroll flex gap-5  ">
      {skills.map((skill) => (
        <SkillItem
          key={skill.id}
          confidentLevel={skill.confidentLevel}
          name={skill.name}
          photo={skill.photo}
          className="min-w-[170px] sm:min-w-[200px]"
        />
      ))}
    </div>
  );
};

export default Slider;
