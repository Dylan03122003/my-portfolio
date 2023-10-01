import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Skill } from "../data/skills";
import SkillItem from "./SkillItem";

interface Props {
  skills: Skill[];
  className?: string;
}

const Slider = ({ skills, className }: Props) => {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (carousel.current) {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
      }
    };

    // Add an event listener for the window resize event
    window.addEventListener("resize", handleResize);

    // Call the handleResize function initially
    handleResize();

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <motion.div
      whileTap={{ cursor: "grabbing" }}
      ref={carousel}
      className={`cursor-grab overflow-hidden bg-orange-300 ${className}`}
    >
      <motion.div
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="flex gap-5 bg-blue-200 p-4"
      >
        {skills.map((skill) => (
          <SkillItem
            key={skill.id}
            confidentLevel={skill.confidentLevel}
            name={skill.name}
            photo={skill.photo}
            className="min-w-[200px]"
          />
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Slider;
